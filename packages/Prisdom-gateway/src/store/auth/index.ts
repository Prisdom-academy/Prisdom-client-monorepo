import { action, makeObservable, observable } from 'mobx';
import { IHydatable } from '../interfaces';

export interface IAuthHydriatedData {
  verifyingEmail: string;
}

export class AuthStore implements IHydatable<IAuthHydriatedData> {
  @observable
  verifyingEmail: string = '';

  constructor() {
    makeObservable(this);
  }

  hydrate(data: IAuthHydriatedData): void {
    if (data) {
      this.setVerifyingEmail(data.verifyingEmail);
    }
  }

  @action
  setVerifyingEmail(email: string) {
    this.verifyingEmail = email;
  }

  @action
  removeCurrentEmail() {
    this.verifyingEmail = '';
  }
}
