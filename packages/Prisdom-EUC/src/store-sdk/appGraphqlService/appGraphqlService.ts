import { GraphqlService } from '@prisdom/services/src/graphqlService/graphqlService';
import { injectable } from 'inversify';
import { ErrorHandlingService } from 'store-sdk/errorHandlingService/errorHandlingService';

@injectable()
export class AppGraphQLService extends GraphqlService {
  constructor() {
    super(new ErrorHandlingService());
  }
}
