import { GraphQLError } from 'graphql-request/dist/types';

export interface IErrorHandlingService {
  defaultHandling: (error: GraphQLError[]) => void;
  skipHandlingError: (error: GraphQLError[]) => void;
}

export type ErrorHandler = (error: any) => void;
