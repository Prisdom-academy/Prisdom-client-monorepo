import { inject, injectable } from 'inversify';
import {
  GraphqlClientAuthResponse,
  IClientAuthService,
  SignInInputData,
  SignUpInputData
} from './interfaces';
import { Symbols } from '../symbols';
import * as interfaces from '../graphqlService/interfaces';
import {
  CLIENT_SIGNIN_MUTATION,
  CLIENT_SIGNUP_MUTATION
} from './mutation.gql';
import type { IStorageService } from '../../src/storageService/interfaces';

export const USER_TOKEN = 'user-token';
export const USER_TOKEN_EXP = 'user-token-expiration';
import moment from 'moment';

@injectable()
export class ClientAuthService implements IClientAuthService {
  @inject(Symbols.IGraphqlService)
  gqlService!: interfaces.IGraphqlService;

  @inject(Symbols.IStorageService)
  storageService!: IStorageService;

  async signup(data: SignUpInputData, errHandlerKey?: string) {
    const resp = await this.gqlService.sendRequest<
      GraphqlClientAuthResponse,
      { data: SignUpInputData }
    >(CLIENT_SIGNUP_MUTATION, { data }, errHandlerKey);

    return this.getTokenAndCache(resp);
  }

  async signin(data: SignInInputData, errHandlerKey?: string) {
    const resp = await this.gqlService.sendRequest<
      GraphqlClientAuthResponse,
      { data: SignInInputData }
    >(CLIENT_SIGNIN_MUTATION, { data }, errHandlerKey);

    return this.getTokenAndCache(resp);
  }

  removeCredential(): void {
    this.storageService.removeItem(USER_TOKEN);
    this.storageService.removeItem(USER_TOKEN_EXP);
  }

  restoreCredential() {
    const token = this.storageService.getItem(USER_TOKEN) as string;
    const expTime = this.storageService.getItem(
      USER_TOKEN_EXP
    ) as string;

    if (token && expTime) {
      const remainingTime = +expTime - Date.now();
      if (remainingTime > 0) {
        return {
          token,
          expTime: moment(expTime)
        };
      } else {
        return null;
      }
    }

    return null;
  }

  private getTokenAndCache(
    gqlResponse: GraphqlClientAuthResponse | null
  ) {
    const token = gqlResponse?.clientUserAuthMutation?.signUp.token;
    const expTime = moment().add(8, 'hours'); // 8 hours ahead with moment object
    if (token) {
      this.storageService.setItem(USER_TOKEN, token);
      this.storageService.setItem(USER_TOKEN_EXP, expTime.valueOf());

      return { token, expTime };
    }

    return null;
  }
}
