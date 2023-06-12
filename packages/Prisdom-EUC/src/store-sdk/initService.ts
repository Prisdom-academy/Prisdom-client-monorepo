import { registerServiceSingleton } from '@prisdom/services/src/ioc';
import { Symbols } from '@prisdom/services/src/symbols';
import { AuthStore } from './authStore/authStore';
import { ErrorHandlingService } from './errorHandlingService/errorHandlingService';
import { NotificationModalStore } from './modalServices/modalNotificationStore';
import { CommonModalStore } from './modalServices/commonModalStore';

export function init() {
  registerServiceSingleton(Symbols.IAuthStore, AuthStore);

  registerServiceSingleton(
    Symbols.IErrorHandlingService,
    ErrorHandlingService
  );

  registerServiceSingleton(
    Symbols.ICommonModalStore,
    CommonModalStore
  );

  registerServiceSingleton(
    Symbols.INotificationModalStore,
    NotificationModalStore
  );
}
