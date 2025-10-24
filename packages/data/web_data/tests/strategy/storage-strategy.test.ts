import { LocalStorageDataSource } from '../../src/implementations/LocalStorageDataSource';
import { InMemoryStorageDataSource } from '../../src/implementations/InMemoryStorageDataSource';

describe('Storage Strategy (Web)', () => {
  it('InMemory and LocalStorage share interface and can substitute', async () => {
    const impls = [new InMemoryStorageDataSource(), new LocalStorageDataSource()];
    for (const storage of impls) {
      await storage.clear();
      await storage.setItem('k', { v: 1 });
      expect(await storage.getItem<{ v: number }>('k')).toEqual({ v: 1 });
      await storage.removeItem('k');
      expect(await storage.getItem('k')).toBeNull();
    }
  });
});


