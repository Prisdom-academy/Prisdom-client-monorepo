import { gql } from 'graphql-request';

export const CLIENT_SIGNUP_MUTATION = gql`
  mutation ClientUserSignup($data: ClientUserSignupInput!) {
    clientUserAuthMutation {
      signUp(data: $data) {
        token
        id
      }
    }
  }
`;

export const CLIENT_SIGNIN_MUTATION = gql`
  mutation ClientUserSignin($data: ClientUserSigninInput!) {
    clientUserAuthMutation {
      signIn(data: $data) {
        token
        id
      }
    }
  }
`;
