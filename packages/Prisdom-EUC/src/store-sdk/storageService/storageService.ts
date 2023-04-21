import { injectable } from 'inversify';
import { IStorageService, StorageType } from './interfaces';

@injectable()
export class StorageService implements IStorageService {
  setItem<T>(key: string, data: T, storageType?: StorageType): void {
    const storage = this.getStorage(storageType);

    storage.setItem(key, JSON.stringify(data));
  }

  getItem<T>(key: string, storageType?: StorageType): T | undefined {
    const storage = this.getStorage(storageType);
    const data = storage.getItem(key);

    if (!data) {
      return;
    }

    try {
      return JSON.parse(data) as T;
    } catch (err) {
      return;
    }
  }

  removeItem(key: string, storageType?: StorageType): void {
    const storage = this.getStorage(storageType);
    storage.removeItem(key);
  }

  private getStorage(storageType: 'session' | 'local' = 'session') {
    if (storageType === 'session') {
      return sessionStorage;
    } else {
      return localStorage;
    }
  }
}
