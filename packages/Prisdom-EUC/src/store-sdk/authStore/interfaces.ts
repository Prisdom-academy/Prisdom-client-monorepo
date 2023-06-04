import {
  ClientUserSigninInput,
  IAuthData
} from '@prisdom/services/src/interfaces/authInterfaces';
import { Observable } from 'rxjs';

export interface IAuthStore {
  loginData$: Observable<IAuthData>;

  login: (input: ClientUserSigninInput) => Promise<void>;
  autoLogin: () => void;
  logout: () => void;
}
