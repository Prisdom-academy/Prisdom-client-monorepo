import { RequestDocument } from 'graphql-request';

export interface DynamicObject {
  [key: string]: any;
}

export type VariableType = DynamicObject | undefined;

export interface IGraphqlService {
  sendRequest: <Response, Variable extends VariableType = undefined>(
    gqlString: RequestDocument,
    variables?: Variable,
    errHandlerKey?: string
  ) => Promise<Response | null>;

  sendRequestWithCache: <
    Response,
    Variable extends VariableType = undefined
  >(
    gqlString: RequestDocument,
    variables?: Variable,
    errHandlerKey?: string
  ) => Promise<Response | null>;
}

export interface ICachingService {
  storeRequest(key: string, data: unknown): void;
  hasStoredData(key: string): boolean;
  getData<T>(key: string): T;
}
