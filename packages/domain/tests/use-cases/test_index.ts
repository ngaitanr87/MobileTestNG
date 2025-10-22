import * as useCases from '../../src/use-cases';

describe('Use Cases Index', () => {
  it('should export GetHeroesListUseCase class', () => {
    expect(useCases).toHaveProperty('GetHeroesListUseCase');
    expect(typeof useCases.GetHeroesListUseCase).toBe('function');
  });
});
