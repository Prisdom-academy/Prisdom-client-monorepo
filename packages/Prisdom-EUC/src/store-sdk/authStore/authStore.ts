import { config } from 'config/config.dev';
import { inject, injectable } from 'inversify';
import { BehaviorSubject } from 'rxjs';
import type { IGraphqlService } from 'store-sdk/graphqlService/interfaces';
import { Symbols } from 'store-sdk/ioc-container/symbols';
import type { IStorageService } from 'store-sdk/storageService/interfaces';
import { signInGql } from './auth.graphql';
import {
  ClientSignInResponse,
  ClientUserSigninInput,
  IAuthData,
  IAuthStore
} from './interfaces';

export const TOKEN_KEY = 'userToken';
@injectable()
export class AuthStore implements IAuthStore {
  @inject(Symbols.IStorageService)
  storageService!: IStorageService;

  @inject(Symbols.IGraphqlService)
  graphQLService!: IGraphqlService;

  private tokenLive = config.tokenLive;

  private loginDataSubject = new BehaviorSubject<IAuthData>({
    token: null,
    expDate: null
  });

  loginData$ = this.loginDataSubject.asObservable();

  async login(input: ClientUserSigninInput) {
    const data = await this.graphQLService.sendRequest<
      ClientSignInResponse,
      ClientUserSigninInput
    >(signInGql, { ...input });

    if (data) {
      const { token } = data.clientUserAuthMutation.signIn;
      const authData = {
        token,
        expDate: new Date(this.addTimeInMinute(this.tokenLive))
      };
      this.loginDataSubject.next(authData);
      this.storageService.setItem<IAuthData>(TOKEN_KEY, {
        ...authData
      });
      this.autoLogout(this.tokenLive);
    }
  }

  autoLogin() {
    const data = this.storageService.getItem<IAuthData>(TOKEN_KEY);
    if (data && data.token && data.expDate) {
      const expDateTrans = new Date(data.expDate);
      const remainingTime = expDateTrans.getTime() - Date.now();
      const isExpired = remainingTime < 0;

      if (!isExpired) {
        this.loginDataSubject.next(data);
        this.autoLogout(remainingTime / 60000);
      }
    }
  }

  logout() {
    this.loginDataSubject.next({ token: null, expDate: null });
    this.storageService.removeItem(TOKEN_KEY);
  }

  autoLogout(remainingMinutes: number) {
    setTimeout(() => {
      this.logout();
    }, remainingMinutes * 60 * 1000);
  }

  private addTimeInMinute(min: number, dateObject?: Date) {
    if (dateObject) {
      return dateObject.getTime() + min * 60 * 1000;
    } else {
      return Date.now() + min * 60 * 1000;
    }
  }
}
