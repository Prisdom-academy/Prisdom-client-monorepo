import { GraphQLError } from 'graphql-request/dist/types';
import { injectable } from 'inversify';

export type HanlderKey = string;
export type Hanlder = (error: GraphQLError[]) => void;

export enum InitialHandler {
  DEFAULT = 'default',
  IGNORE = 'ignore'
}
export interface IErrorHandlingService {
  defaultHandling: (error: GraphQLError[]) => void;
  skipHandlingError: (error: GraphQLError[]) => void;
  registerHandler: (key: HanlderKey, hanlder: Hanlder) => void;
  getHandler: (key: HanlderKey) => Hanlder | undefined;
}

@injectable()
export abstract class ErrorHanlingServiceBase
  implements IErrorHandlingService
{
  protected handlers: Map<HanlderKey, Hanlder> = new Map([
    [InitialHandler.DEFAULT, this.defaultHandling.bind(this)],
    [InitialHandler.IGNORE, this.skipHandlingError.bind(this)]
  ]);

  abstract defaultHandling(error: GraphQLError[]): void;

  abstract skipHandlingError(error: GraphQLError[]): void;

  public registerHandler = (key: HanlderKey, hanlder: Hanlder) => {
    if (this.handlers.has(key)) {
      throw new Error('This key has been registered');
    }
    this.handlers.set(key, hanlder);
  };

  public getHandler = (key: string) => {
    if (!this.handlers.has(key)) {
      throw new Error('This handler is not yet registered');
    } else {
      return this.handlers.get(key);
    }
  };
}

export type ErrorHandler = (error: any) => void;
