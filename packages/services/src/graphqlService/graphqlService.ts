import { GraphQLClient, RequestDocument } from 'graphql-request';
import { GraphQLError } from 'graphql-request/dist/types';
import { inject, injectable } from 'inversify';
import { Symbols } from '../symbols';
import * as errorInterfaces from '../interfaces/errorInterfaces';
import * as interfaces from '../storageService/interfaces';
import {
  IAuthData,
  STORAGE_TOKEN_KEY
} from '../interfaces/authInterfaces';
import type {
  ICachingService,
  IGraphqlService,
  VariableType
} from './interfaces';

@injectable()
export class GraphqlService implements IGraphqlService {
  private endpoint =
    process.env.NEXT_PUBLIC_BACKEND_HOST || 'localhost:3001';
  private readonly client = new GraphQLClient(
    `http://${this.endpoint}/graphql`,
    {
      headers: {}
    }
  );

  @inject(Symbols.IErrorHandlingService)
  private errorHandlingService!: errorInterfaces.IErrorHandlingService;

  @inject(Symbols.ICachingService)
  private cachingService!: ICachingService;

  @inject(Symbols.IStorageService)
  private storageService!: interfaces.IStorageService;

  async sendRequest<T, U extends VariableType = undefined>(
    gqlString: RequestDocument,
    variables?: U,
    errorHandlerKey: string = errorInterfaces.InitialHandler.DEFAULT
  ) {
    const authData = this.getToken();
    const errorHandler =
      this.errorHandlingService.getHandler(errorHandlerKey);

    if (authData?.token) {
      this.client.setHeader(
        'authorization',
        `Bearer ${authData.token}`
      );
    }
    try {
      return await this.client.request<T>(gqlString, variables);
    } catch (error) {
      errorHandler?.(error as GraphQLError[]);
      return null;
    }
  }

  async sendRequestWithCache<T, U extends VariableType = undefined>(
    gqlString: RequestDocument,
    variables?: U,
    errorHandlerKey: string = errorInterfaces.InitialHandler.DEFAULT
  ) {
    const authData = this.getToken();

    const errorHandler =
      this.errorHandlingService.getHandler(errorHandlerKey);

    if (authData?.token) {
      this.client.setHeader(
        'authorization',
        `Bearer ${authData.token}`
      );
    }
    try {
      let data: T | undefined = undefined;
      let key = gqlString.toString();

      if (variables) {
        key += variables.toString();
      }

      if (this.cachingService.hasStoredData(key)) {
        data = this.cachingService.getData<T>(key);
      } else {
        data = await this.client.request<T>(gqlString, variables);
        this.cachingService.storeRequest(key, data);
      }
      return data;
    } catch (error) {
      errorHandler?.(error as GraphQLError[]);
      return null;
    }
  }

  private getToken() {
    return this.storageService.getItem<IAuthData>(STORAGE_TOKEN_KEY);
  }
}
