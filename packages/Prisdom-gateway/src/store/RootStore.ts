import { serviceProvider } from '@prisdom/services/ioc';
import { GatewayAuthStore, IAuthHydriatedData } from './auth/index';
import { IHydatable } from './interfaces';
import { Symbols } from '@prisdom/services/symbols';
export interface RootStoreHydrateData {
  authStore: IAuthHydriatedData;
}

export class RootStore implements IHydatable<RootStoreHydrateData> {
  public authStore: GatewayAuthStore;

  constructor() {
    this.authStore = serviceProvider(Symbols.IGatewayAuthStore);
  }

  hydrate(data: RootStoreHydrateData): void {
    if (data) {
      this.authStore.hydrate(data.authStore);
    }
  }
}
