import 'reflect-metadata';
import { action, computed, makeObservable, observable } from 'mobx';
import { IHydatable } from '../interfaces';
import { inject, injectable } from 'inversify';
import { IGatewayAuthStore } from './interfaces';
import { Symbols } from '@prisdom/services/symbols';
import * as interfaces from '@prisdom/services/ClientAuthService/interfaces';
import type { Moment } from 'moment';

export interface IAuthHydriatedData {
  verifyingEmail: string;
}

@injectable()
export class GatewayAuthStore
  implements IHydatable<IAuthHydriatedData>, IGatewayAuthStore
{
  @inject(Symbols.IClientAuthService)
  clientAuthService!: interfaces.IClientAuthService;

  @observable
  verifyingEmail: string = '';

  @observable
  authToken: string = '';

  remainingExpTime = 0;
  constructor() {
    makeObservable(this);
  }

  hydrate(data: IAuthHydriatedData): void {
    if (data) {
      const { verifyingEmail } = data;
      this.setVerifyingEmail(verifyingEmail);
    }
  }

  @action
  async signup(data: interfaces.SignUpInputData) {
    const authData = await this.clientAuthService.signup(data);

    if (authData?.token && authData.expTime) {
      this.authToken = authData.token;
      this.autoLogout(authData.expTime);
      return true;
    }

    return false;
  }

  // async signin(data: interfaces.SignInInputData) {
  //   const response
  // }

  @action
  autoLogin() {
    const authData = this.clientAuthService.restoreCredential();

    if (authData) {
      this.authToken = authData.token;
      this.autoLogout(authData.expTime);
    }
  }

  @action
  private autoLogout(expTime: Moment) {
    this.remainingExpTime = expTime.valueOf() - Date.now();
    setTimeout(() => this.logout(), this.remainingExpTime);
  }

  logout() {
    this.authToken = '';
    this.remainingExpTime = 0;
    this.clientAuthService.removeCredential();
  }

  @action
  setVerifyingEmail(email: string) {
    this.verifyingEmail = email;
  }

  @action
  removeCurrentEmail() {
    this.verifyingEmail = '';
  }

  @computed
  get isAuth() {
    return Boolean(this.authToken);
  }
}
