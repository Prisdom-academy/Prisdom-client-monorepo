import 'reflect-metadata';
import { Container } from 'inversify';
import { Symbols } from './symbols';
import { GraphqlService } from '../graphqlService/graphqlService';
import { AuthStore } from '../authStore/authStore';
import { ErrorHandlingService } from 'store-sdk/errorHandlingService/errorHandlingService';
import { NotificationModalStore } from 'store-sdk/modalServices/modalNotificationStore';
import { CommonModalStore } from 'store-sdk/modalServices/commonModalStore';
import { CachingService } from 'store-sdk/graphqlService/cachingService';
import { StorageService } from 'store-sdk/storageService/storageService';

const container = new Container({});

function registerServiceSingletonPre<IStore>(
  container: Container,
  symbols: Symbols,
  storeImpls: any
) {
  container.bind<IStore>(symbols).to(storeImpls).inSingletonScope();
}
const registerServiceSingleton = registerServiceSingletonPre.bind(
  null,
  container
);

registerServiceSingleton(Symbols.IGraphqlService, GraphqlService);
registerServiceSingleton(Symbols.IAuthStore, AuthStore);
registerServiceSingleton(
  Symbols.IErrorHandlingService,
  ErrorHandlingService
);
registerServiceSingleton(
  Symbols.INotificationModalStore,
  NotificationModalStore
);

registerServiceSingleton(Symbols.ICommonModalStore, CommonModalStore);
registerServiceSingleton(Symbols.ICachingService, CachingService);
registerServiceSingleton(Symbols.IStorageService, StorageService);

export default container;
