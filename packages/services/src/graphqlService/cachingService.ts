import { injectable } from 'inversify';
import { ICachingService } from './interfaces';

@injectable()
export class CachingService implements ICachingService {
  private requestStorage = new Map<string, unknown>();

  storeRequest(key: string, data: unknown) {
    this.requestStorage.set(key, data);
  }

  hasStoredData(key: string): boolean {
    return this.requestStorage.has(key);
  }

  getData<T>(key: string): T {
    return this.requestStorage.get(key) as T;
  }
}
