export interface IAuthData {
  token: string | null;
  expDate: Date | null;
}

export interface ClientUserSigninInput {
  data: {
    email: string;
    password: string;
  };
}

export interface ClientSignInResponse {
  clientUserAuthMutation: {
    signIn: {
      token: string;
    };
  };
}

export const STORAGE_TOKEN_KEY = 'userToken';
