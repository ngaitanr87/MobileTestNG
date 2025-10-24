import { ILocalStorageDataSource } from 'abstract_data';

export class InMemoryStorageDataSource implements ILocalStorageDataSource {
  private store = new Map<string, string>();

  async getItem<T>(key: string): Promise<T | null> {
    const json = this.store.get(key);
    return json ? (JSON.parse(json) as T) : null;
  }

  async setItem<T>(key: string, value: T): Promise<void> {
    this.store.set(key, JSON.stringify(value));
  }

  async removeItem(key: string): Promise<void> {
    this.store.delete(key);
  }

  async clear(): Promise<void> {
    this.store.clear();
  }
}


