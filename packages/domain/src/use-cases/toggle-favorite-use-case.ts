import { Favorite } from '../entities/favorite';

export interface IFavoriteService {
  toggleFavorite(heroId: string): Promise<void>;
  isFavorite(heroId: string): Promise<boolean>;
}

export class ToggleFavoriteUseCase {
  constructor(private readonly favoriteService: IFavoriteService) {}

  async execute(heroId: string): Promise<void> {
    if (!heroId || heroId.trim() === '') {
      throw new Error('Hero ID is required');
    }
    await this.favoriteService.toggleFavorite(heroId);
  }
}


