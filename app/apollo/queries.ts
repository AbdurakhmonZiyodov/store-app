import {gql} from '@apollo/client';

export const LoginQuery = gql`
  query MyQuery($login: String!, $password: String!) {
    login(login: $login, password: $password) {
      ... on TokenPair {
        __typename
        accessToken
        refreshToken
      }
    }
  }
`;
