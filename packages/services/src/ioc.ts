import 'reflect-metadata';
import { Container } from 'inversify';
import { Symbols } from './symbols';

const container = new Container({});

export function registerServiceSingleton<IStore>(
  symbols: Symbols,
  storeImpls: any
) {
  if (!container.isBound(symbols)) {
    container.bind<IStore>(symbols).to(storeImpls).inSingletonScope();
  }
}

export function serviceProvider<T>(serviceIdentifier: Symbols) {
  const service = container.get<T>(serviceIdentifier);

  if (service) {
    return service;
  } else {
    throw new Error('Service is not yet registered');
  }
}

export default container;
