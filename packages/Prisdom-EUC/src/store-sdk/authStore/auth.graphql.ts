import { gql } from 'graphql-request';

export const signInGql = gql`
  mutation Login($data: ClientUserSigninInput!) {
    clientUserAuthMutation {
      signIn(data: $data) {
        token
      }
    }
  }
`;
