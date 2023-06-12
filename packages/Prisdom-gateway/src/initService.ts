import { registerServiceSingleton } from '@prisdom/services/ioc';
import { Symbols } from '@prisdom/services/symbols';
import { GatewayAuthStore } from './store/auth';
import { ErrorHanldingService } from './store/gatewayGraphqlService/errorHandlingService';

export function initGatewayService() {
  registerServiceSingleton(
    Symbols.IErrorHandlingService,
    ErrorHanldingService
  );
  registerServiceSingleton(
    Symbols.IGatewayAuthStore,
    GatewayAuthStore
  );
}
