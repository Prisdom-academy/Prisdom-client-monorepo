import { registerServiceSingleton } from '@prisdom/services/ioc';
import { Symbols } from '@prisdom/services/symbols';
import { AuthStore } from './store/auth';

export function initGatewaySvc() {
  registerServiceSingleton(Symbols.IGatewayAuthStore, AuthStore);
}
