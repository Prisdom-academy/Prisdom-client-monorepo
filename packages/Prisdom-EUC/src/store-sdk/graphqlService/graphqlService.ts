import { config } from 'config/config.dev';
import { GraphQLClient, RequestDocument } from 'graphql-request';
import { GraphQLError } from 'graphql-request/dist/types';
import { inject, injectable } from 'inversify';
import { TOKEN_KEY } from 'store-sdk/authStore/authStore';
import { IAuthData } from 'store-sdk/authStore/interfaces';
import type {
  ErrorHandler,
  IErrorHandlingService
} from 'store-sdk/errorHandlingService/interfaces';
import { Symbols } from 'store-sdk/ioc-container/symbols';
import type { IStorageService } from 'store-sdk/storageService/interfaces';
import type {
  ICachingService,
  IGraphqlService,
  VariableType
} from './interfaces';

@injectable()
export class GraphqlService implements IGraphqlService {
  private endpoint = config.gqlEndpoint;
  private readonly client = new GraphQLClient(this.endpoint, {
    headers: {}
  });

  @inject(Symbols.IErrorHandlingService)
  private errorService!: IErrorHandlingService;

  @inject(Symbols.ICachingService)
  private cachingService!: ICachingService;

  @inject(Symbols.IStorageService)
  private storageService!: IStorageService;

  async sendRequest<T, U extends VariableType = undefined>(
    gqlString: RequestDocument,
    variables?: U,
    errorHandler?: ErrorHandler
  ) {
    const authData = this.getToken();
    if (!errorHandler) {
      errorHandler = this.errorService.defaultHandling.bind(
        this.errorService
      );
    }
    if (authData?.token) {
      this.client.setHeader(
        'authorization',
        `Bearer ${authData.token}`
      );
    }
    try {
      return await this.client.request<T>(gqlString, variables);
    } catch (error) {
      errorHandler(error as GraphQLError[]);
    }
  }

  async sendRequestWithCache<T, U extends VariableType = undefined>(
    gqlString: RequestDocument,
    variables?: U,
    errorHandler?: ErrorHandler
  ) {
    const authData = this.getToken();

    if (!errorHandler) {
      errorHandler = this.errorService.defaultHandling.bind(
        this.errorService
      );
    }
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
      errorHandler(error as GraphQLError[]);
    }
  }

  private getToken() {
    return this.storageService.getItem<IAuthData>(TOKEN_KEY);
  }
}
