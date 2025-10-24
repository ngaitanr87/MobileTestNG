import heroes from '../../data/heroes.json';

export class MobileMovieDataSource {
  async getByHeroId(heroId: string) {
    const list = heroes as any[];
    const hero = list.find((h) => h.id === heroId);
    return (hero?.movies ?? []) as any[];
  }
}


