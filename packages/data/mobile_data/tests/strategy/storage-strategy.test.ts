import { AsyncStorageDataSource } from '../../src/implementations/AsyncStorageDataSource';
import { InMemoryStorageDataSource } from '../../src/implementations/InMemoryStorageDataSource';

describe('Storage Strategy (Mobile)', () => {
  it('InMemory and AsyncStorage share interface and can substitute', async () => {
    const impls = [new InMemoryStorageDataSource(), new AsyncStorageDataSource()];
    for (const storage of impls) {
      await storage.clear();
      await storage.setItem('k', { v: 1 });
      expect(await storage.getItem<{ v: number }>('k')).toEqual({ v: 1 });
      await storage.removeItem('k');
      expect(await storage.getItem('k')).toBeNull();
    }
  });
});


