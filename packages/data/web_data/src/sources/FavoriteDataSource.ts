import { ILocalStorageDataSource } from 'abstract_data';

const FAVORITES_KEY = 'favorites';

export class WebFavoriteDataSource {
  constructor(private readonly storage: ILocalStorageDataSource) {}

  async getAll(): Promise<string[]> {
    const ids = await this.storage.getItem<string[]>(FAVORITES_KEY);
    return ids ?? [];
  }

  async add(id: string): Promise<void> {
    const ids = await this.getAll();
    if (!ids.includes(id)) {
      ids.push(id);
      await this.storage.setItem(FAVORITES_KEY, ids);
    }
  }

  async remove(id: string): Promise<void> {
    const ids = await this.getAll();
    const next = ids.filter((x) => x !== id);
    await this.storage.setItem(FAVORITES_KEY, next);
  }

  async isFavorite(id: string): Promise<boolean> {
    const ids = await this.getAll();
    return ids.includes(id);
  }
}


