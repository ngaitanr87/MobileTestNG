import { ILocalStorageDataSource } from 'abstract_data';

export class LocalStorageDataSource implements ILocalStorageDataSource {
  async getItem<T>(key: string): Promise<T | null> {
    const json = localStorage.getItem(key);
    return json ? (JSON.parse(json) as T) : null;
  }

  async setItem<T>(key: string, value: T): Promise<void> {
    localStorage.setItem(key, JSON.stringify(value));
  }

  async removeItem(key: string): Promise<void> {
    localStorage.removeItem(key);
  }

  async clear(): Promise<void> {
    localStorage.clear();
  }
}


