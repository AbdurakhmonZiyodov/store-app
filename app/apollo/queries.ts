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

export const RefreshQuery = gql`
  query MyQuery($refreshToken: String!) {
    refresh(refreshToken: $refreshToken) {
      ... on Token {
        __typename
        token
      }
    }
  }
`;
