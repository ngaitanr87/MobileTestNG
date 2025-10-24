import { LocalStorageRepository } from '../../../src/implementations/LocalStorageRepository';

describe('LocalStorageRepository', () => {
  beforeEach(() => {
    // @ts-ignore
    global.localStorage = {
      getItem: (k: string) => (global as any).__store?.get(k) ?? null,
      setItem: (k: string, v: string) => {
        if (!(global as any).__store) (global as any).__store = new Map<string, string>();
        (global as any).__store.set(k, v);
      },
      removeItem: (k: string) => {
        (global as any).__store?.delete(k);
      },
      clear: () => {
        (global as any).__store?.clear();
      }
    } as Storage;
    (global as any).__store = new Map<string, string>();
  });

  it('stores, retrieves, removes and clears values', async () => {
    const repo = new LocalStorageRepository();
    await repo.setItem('k', { a: 1 });
    await expect(repo.getItem<{ a: number }>('k')).resolves.toEqual({ a: 1 });
    await repo.removeItem('k');
    await expect(repo.getItem('k')).resolves.toBeNull();
    await repo.setItem('k1', 1);
    await repo.clear();
    await expect(repo.getItem('k1')).resolves.toBeNull();
  });
});


