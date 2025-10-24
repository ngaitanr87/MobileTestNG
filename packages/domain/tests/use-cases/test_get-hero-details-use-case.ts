import { GetHeroDetailsUseCase } from '../../src/use-cases/get-hero-details-use-case';

describe('GetHeroDetailsUseCase', () => {
  it('throws on empty id', async () => {
    const useCase = new GetHeroDetailsUseCase({
      getById: async () => null,
      getAll: async () => [],
      search: async () => []
    } as any);
    await expect(useCase.execute('')).rejects.toThrow('Hero ID is required');
  });
});


