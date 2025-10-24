import { GetFavoritesUseCase } from '../../src/use-cases/get-favorites-use-case';

describe('GetFavoritesUseCase', () => {
  it('returns favorites list', async () => {
    const useCase = new GetFavoritesUseCase({
      getFavorites: async () => ['1', '2']
    });
    await expect(useCase.execute()).resolves.toEqual(['1', '2']);
  });
});


