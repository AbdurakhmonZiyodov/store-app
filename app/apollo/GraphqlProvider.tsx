import {
  ApolloClient,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
  from,
} from '@apollo/client';
import {loadErrorMessages, loadDevMessages} from '@apollo/client/dev';
import {setContext} from '@apollo/client/link/context';
import {onError} from '@apollo/client/link/error';
import AsyncStorageHelper from 'helper/AsyncStorageHelper';
import React, {FC, ReactNode} from 'react';
import {TOKEN_KEY} from 'store/TokenStore';
import {RefreshQuery} from './queries';

const httpLink = new HttpLink({uri: 'http://45.12.74.28/graphql'});

if (__DEV__) {
  // Adds messages only in a dev environment
  loadDevMessages();
  loadErrorMessages();
}
const authLink = setContext(async (_, {headers}) => {
  const tokens = await AsyncStorageHelper._get({key: TOKEN_KEY});

  return {
    headers: {
      ...headers,
      authorization: tokens?.accessToken || '',
    },
  };
});

// const errorLink = onError(({networkError}: any) => {
//   if (
//     networkError &&
//     networkError.name === 'ServerError' &&
//     networkError?.statusCode === 401
//   ) {
//     console.log('token eskirdi');
//   }
// });

const errorLink = onError(
  ({graphQLErrors, networkError, operation, forward}) => {
    if (graphQLErrors) {
      for (let err of graphQLErrors) {
        console.log('error');
        switch (err.extensions.code) {
          case 'UNAUTHENTICATED':
            const oldHeaders = operation.getContext().headers;
            operation.setContext({
              headers: {
                ...oldHeaders,
                authorization: `Bearer ${getNewToken()}`,
              },
            });
            return forward(operation);
        }
      }
    }

    if (networkError) {
      console.log(`[Network error]: ${networkError}`);
    }
  },
);

const client = new ApolloClient({
  link: from([httpLink, authLink, errorLink]),
  cache: new InMemoryCache(),
});

const getNewToken = async () => {
  try {
    const {data} = await client.mutate({mutation: RefreshQuery});
    const tokens = await AsyncStorageHelper._get({key: TOKEN_KEY});

    const newToken = data?.refresh?.token;

    await AsyncStorageHelper._set({
      key: TOKEN_KEY,
      data: {...tokens, refreshToken: newToken},
    });

    return newToken;
  } catch (error) {
    return null;
  }
};

type Props = {
  children: ReactNode;
};

const GraphqlProvider: FC<Props> = ({children}) => (
  <ApolloProvider client={client}>{children}</ApolloProvider>
);

export default GraphqlProvider;
