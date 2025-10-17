// Dependency injection types
export const TYPES = {
  // Repository interfaces
  IHeroRepository: Symbol.for('IHeroRepository'),
  IComicRepository: Symbol.for('IComicRepository'),
  IMovieRepository: Symbol.for('IMovieRepository'),
  IFavoriteRepository: Symbol.for('IFavoriteRepository'),
  
  // Use cases
  GetHeroesListUseCase: Symbol.for('GetHeroesListUseCase'),
  GetHeroDetailsUseCase: Symbol.for('GetHeroDetailsUseCase'),
  ToggleFavoriteUseCase: Symbol.for('ToggleFavoriteUseCase'),
  GetFavoritesUseCase: Symbol.for('GetFavoritesUseCase'),
} as const;
