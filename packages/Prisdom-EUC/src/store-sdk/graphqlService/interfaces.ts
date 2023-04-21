import { RequestDocument } from 'graphql-request';

export interface DynamicObject {
  [key: string]: any;
}

export type VariableType = DynamicObject | undefined;

export interface IGraphqlService {
  sendRequest: <Response, Variable extends VariableType = undefined>(
    gqlString: RequestDocument,
    variables?: Variable,
    errorHandler?: (error: any) => void
  ) => Promise<Response | undefined>;

  sendRequestWithCache: <Response, Variable extends VariableType = undefined>(
    gqlString: RequestDocument,
    variables?: Variable,
    errorHandler?: (error: any) => void
  ) => Promise<Response | undefined>;
}

export interface ICachingService {
  storeRequest(key: string, data: unknown): void;
  hasStoredData(key: string): boolean;
  getData<T>(key: string): T;
}
