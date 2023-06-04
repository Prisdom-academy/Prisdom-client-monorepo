export type StorageType = 'session' | 'local';

export interface IStorageService {
  setItem<T>(key: string, data: T, storageType?: StorageType): void;
  getItem<T>(key: string, storageType?: StorageType): T | undefined;
  removeItem(key: string): void;
}
