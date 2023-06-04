import { GraphQLError } from 'graphql-request/dist/types';
import { inject, injectable } from 'inversify';
import type { INotificationModalStore } from 'store-sdk/modalServices/interfaces';
import { IErrorHandlingService } from './interfaces';
import { Symbols } from '@prisdom/services/src/symbols';

@injectable()
export class ErrorHandlingService implements IErrorHandlingService {
  @inject(Symbols.INotificationModalStore)
  notificationModalStore!: INotificationModalStore;

  defaultHandling(error: unknown) {
    const message = this.getErrorMessages(error as GraphQLError[]);

    this.notificationModalStore.show({
      title: 'Fetch Error',
      content: message,
      type: 'error'
    });
  }

  skipHandlingError(error: GraphQLError[]) {
    const message = this.getErrorMessages(error as GraphQLError[]);

    console.error(message);
  }

  private getErrorMessages(error?: any) {
    return error.message.split(': ')[0];
  }
}
