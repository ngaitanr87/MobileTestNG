import { HeroDto } from '../types/HeroDto';
export interface IHeroRepository {
    getHeroes(): Promise<HeroDto[]>;
    getHeroById(id: string): Promise<HeroDto | null>;
    searchHeroes(query: string): Promise<HeroDto[]>;
}
//# sourceMappingURL=IHeroRepository.d.ts.map