import { AsyncStorageRepository } from '../../../src/implementations/AsyncStorageRepository';

jest.mock('@react-native-async-storage/async-storage', () => {
  const store = new Map<string, string>();
  return {
    __esModule: true,
    default: {
      getItem: async (key: string) => store.get(key) ?? null,
      setItem: async (key: string, value: string) => {
        store.set(key, value);
      },
      removeItem: async (key: string) => {
        store.delete(key);
      },
      clear: async () => {
        store.clear();
      }
    }
  };
});

describe('AsyncStorageRepository', () => {
  it('stores, retrieves, removes and clears values', async () => {
    const repo = new AsyncStorageRepository();
    await repo.setItem('k', { a: 1 });
    await expect(repo.getItem<{ a: number }>('k')).resolves.toEqual({ a: 1 });
    await repo.removeItem('k');
    await expect(repo.getItem('k')).resolves.toBeNull();
    await repo.setItem('k1', 1);
    await repo.clear();
    await expect(repo.getItem('k1')).resolves.toBeNull();
  });
});


