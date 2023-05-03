import { AuthStore, IAuthHydriatedData } from './auth/index';
import { IHydatable } from './interfaces';

export interface RootStoreHydrateData {
  authStore: IAuthHydriatedData;
}

export class RootStore implements IHydatable<RootStoreHydrateData> {
  public authStore: AuthStore;

  constructor() {
    this.authStore = new AuthStore();
  }

  hydrate(data: RootStoreHydrateData): void {
    if (data) {
      this.authStore.hydrate(data.authStore);
    }
  }
}
