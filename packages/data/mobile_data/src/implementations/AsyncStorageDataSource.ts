import AsyncStorage from '@react-native-async-storage/async-storage';
import { ILocalStorageDataSource } from 'abstract_data';

export class AsyncStorageDataSource implements ILocalStorageDataSource {
  async getItem<T>(key: string): Promise<T | null> {
    const json = await AsyncStorage.getItem(key);
    return json ? (JSON.parse(json) as T) : null;
  }

  async setItem<T>(key: string, value: T): Promise<void> {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  }

  async removeItem(key: string): Promise<void> {
    await AsyncStorage.removeItem(key);
  }

  async clear(): Promise<void> {
    await AsyncStorage.clear();
  }
}
