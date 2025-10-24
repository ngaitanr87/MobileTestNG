export interface IFavoriteRepository {
    toggleFavorite(heroId: string): Promise<void>;
    isFavorite(heroId: string): Promise<boolean>;
    getFavorites(): Promise<string[]>;
}
//# sourceMappingURL=IFavoriteRepository.d.ts.map