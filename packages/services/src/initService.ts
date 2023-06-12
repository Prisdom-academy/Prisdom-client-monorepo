import { ClientAuthService } from './ClientAuthService';
import { CachingService } from './graphqlService/cachingService';
import { GraphqlService } from './graphqlService/graphqlService';
import { registerServiceSingleton } from './ioc';
import { StorageService } from './storageService/storageService';
import { Symbols } from './symbols';

export function initServices() {
  registerServiceSingleton(Symbols.IStorageService, StorageService);
  registerServiceSingleton(Symbols.IGraphqlService, GraphqlService);
  registerServiceSingleton(Symbols.ICachingService, CachingService);
  registerServiceSingleton(
    Symbols.IClientAuthService,
    ClientAuthService
  );
}
