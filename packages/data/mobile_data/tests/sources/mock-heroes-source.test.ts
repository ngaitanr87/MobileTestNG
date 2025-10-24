import { MobileHeroDataSource } from '../../../src/sources/MockHeroesSource';

describe('MobileHeroDataSource', () => {
  it('returns heroes list', async () => {
    const ds = new MobileHeroDataSource();
    const list = await ds.getHeroes();
    expect(Array.isArray(list)).toBe(true);
    expect(list.length).toBeGreaterThan(0);
  });

  it('searches by prefix name or description', async () => {
    const ds = new MobileHeroDataSource();
    const res = await ds.searchHeroes('sp');
    expect(res.every(h => typeof h.name === 'string')).toBe(true);
  });
});


