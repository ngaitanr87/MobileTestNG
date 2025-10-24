import heroes from '../../data/heroes.json';

export class MobileComicDataSource {
  async getByHeroId(heroId: string) {
    const list = heroes as any[];
    const hero = list.find((h) => h.id === heroId);
    return (hero?.comics ?? []) as any[];
  }
}


