import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
} from '@apollo/client';
import AsyncStorageHelper from 'helper/AsyncStorageHelper';
import React, {FC, ReactNode} from 'react';
import {TOKEN_KEY} from 'store/TokenStore';

const httpLink = new HttpLink({uri: 'http://45.12.74.28/graphql'});

// create an ApolloLink middleware
const authLink = new ApolloLink((operation, forward) => {
  let token = '';
  AsyncStorageHelper._get({key: TOKEN_KEY}).then(res => {
    token = `Bearer ${res.accessToken}`;
  });

  // console.log({token});

  operation.setContext(({headers = {}}) => ({
    headers: {
      ...headers,
      Authorization: token ? token : '',
    },
  }));

  return forward(operation);
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'cache-and-network',
    },
  },
});

type Props = {
  children: ReactNode;
};

const GraphqlProvider: FC<Props> = ({children}) => (
  <ApolloProvider client={client}>{children}</ApolloProvider>
);

export default GraphqlProvider;
