import * as selectors from '../../src/selectors';

describe('Selectors Index', () => {
  it('should export all selector functions', () => {
    expect(selectors).toHaveProperty('selectHeroes');
    expect(selectors).toHaveProperty('selectHeroesLoading');
    expect(selectors).toHaveProperty('selectHeroesError');
    expect(selectors).toHaveProperty('selectSearchTerm');
    expect(selectors).toHaveProperty('selectFilteredHeroes');
    expect(selectors).toHaveProperty('selectHeroById');
    
    expect(typeof selectors.selectHeroes).toBe('function');
    expect(typeof selectors.selectHeroesLoading).toBe('function');
    expect(typeof selectors.selectHeroesError).toBe('function');
    expect(typeof selectors.selectSearchTerm).toBe('function');
    expect(typeof selectors.selectFilteredHeroes).toBe('function');
    expect(typeof selectors.selectHeroById).toBe('function');
  });
});
