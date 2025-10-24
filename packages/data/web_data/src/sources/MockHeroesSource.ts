import { IHeroDataSource } from 'abstract_data';
import heroes from '../../data/heroes.json';

export class WebHeroDataSource implements IHeroDataSource {
  async getHeroes() {
    return heroes as any;
  }

  async getHeroById(id: string) {
    const list = heroes as any[];
    const found = list.find((h) => h.id === id);
    return found ?? null;
  }

  async searchHeroes(query: string) {
    const q = query.toLowerCase();
    const list = heroes as any[];
    return list.filter(
      (h) => h.name.toLowerCase().startsWith(q) || h.description.toLowerCase().startsWith(q)
    ) as any;
  }
}


