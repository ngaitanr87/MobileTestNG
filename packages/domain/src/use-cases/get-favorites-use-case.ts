export interface IFavoriteQueryService {
  getFavorites(): Promise<string[]>;
}

export class GetFavoritesUseCase {
  constructor(private readonly favoriteQueryService: IFavoriteQueryService) {}

  async execute(): Promise<string[]> {
    return await this.favoriteQueryService.getFavorites();
  }
}


