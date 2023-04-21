import { Observable } from 'rxjs';

export interface IAuthStore {
  loginData$: Observable<IAuthData>;

  login: (input: ClientUserSigninInput) => Promise<void>;
  autoLogin: () => void;
  logout: () => void;
}

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
