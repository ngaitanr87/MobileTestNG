import { IHeroDataSource } from '../../src/contracts/IHeroDataSource';

class InMemoryHeroDataSource implements IHeroDataSource {
  constructor(private readonly heroes: any[]) {}
  async getHeroes() { return this.heroes; }
  async getHeroById(id: string) { return this.heroes.find(h => h.id === id) ?? null; }
  async searchHeroes(query: string) {
    const q = query.toLowerCase();
    return this.heroes.filter(h => h.name.toLowerCase().startsWith(q) || h.description.toLowerCase().startsWith(q));
  }
}

describe('Hero Data Source Contract', () => {
  const now = new Date().toISOString();
  const ds = new InMemoryHeroDataSource([
    { id: '1', name: 'Iron Man', description: 'Genius', imageUrl: '', thumbnailUrl: '', comics: [], movies: [], characteristics: { powers: [], weaknesses: [], affiliations: [] }, createdAt: now, updatedAt: now },
    { id: '2', name: 'Spider-Man', description: 'Friendly', imageUrl: '', thumbnailUrl: '', comics: [], movies: [], characteristics: { powers: [], weaknesses: [], affiliations: [] }, createdAt: now, updatedAt: now }
  ]);

  it('lists heroes', async () => {
    const list = await ds.getHeroes();
    expect(Array.isArray(list)).toBe(true);
    expect(list.length).toBeGreaterThan(0);
  });

  it('gets hero by id', async () => {
    const hero = await ds.getHeroById('1');
    expect(hero?.id).toBe('1');
  });

  it('searches heroes by name/description (starts with)', async () => {
    const res = await ds.searchHeroes('Spi');
    expect(res.find(h => h.id === '2')).toBeTruthy();
  });
});


