import { Moment } from 'moment';

export type AuthCredential = { token: string; expTime: Moment };

export interface IClientAuthService {
  signup(data: SignUpInputData): Promise<AuthCredential | null>;
  signin(data: SignInInputData): Promise<AuthCredential | null>;
  removeCredential(): void;
  restoreCredential(): AuthCredential | null;
}

export enum ClientUserType {
  INSTRUCTOR = 'INSTRUCTOR',
  LEARNER = 'LEARNER'
}

export interface SignUpInputData {
  email: string;
  name: string;
  password: string;
  type: ClientUserType;
}

export interface SignInInputData {
  email: string;
  password: string;
}

export interface ClientUserAuthResponse {
  id: string;
  email: string;
  type: string;
  token: string;
}

export interface GraphqlClientAuthResponse {
  clientUserAuthMutation: {
    signUp: Partial<ClientUserAuthResponse>;
  };
}
