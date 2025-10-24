import { ToggleFavoriteUseCase } from '../../src/use-cases/toggle-favorite-use-case';

describe('ToggleFavoriteUseCase', () => {
  it('throws on empty id', async () => {
    const useCase = new ToggleFavoriteUseCase({
      toggleFavorite: async () => {},
      isFavorite: async () => false
    });
    await expect(useCase.execute('')).rejects.toThrow('Hero ID is required');
  });
});


