import { ILocalStorageDataSource } from 'abstract_data';
export declare class AsyncStorageDataSource implements ILocalStorageDataSource {
    getItem<T>(key: string): Promise<T | null>;
    setItem<T>(key: string, value: T): Promise<void>;
    removeItem(key: string): Promise<void>;
    clear(): Promise<void>;
}
//# sourceMappingURL=AsyncStorageDataSource.d.ts.map