import 'reflect-metadata';
import { Container } from 'inversify';
import { Symbols } from './symbols';

const container = new Container({});

export function registerServiceSingleton<IStore>(
  symbols: Symbols,
  storeImpls: any
) {
  container.bind<IStore>(symbols).to(storeImpls).inSingletonScope();
}

export default container;
