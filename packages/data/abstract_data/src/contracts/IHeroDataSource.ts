import { HeroDto } from '../types/HeroDto';

export interface IHeroDataSource {
  getHeroes(): Promise<HeroDto[]>;
  getHeroById(id: string): Promise<HeroDto | null>;
  searchHeroes(query: string): Promise<HeroDto[]>;
}

import { HeroDto } from '../types/HeroDto';

export interface IHeroDataSource {
  getHeroes(): Promise<HeroDto[]>;
  getHeroById(id: string): Promise<HeroDto | null>;
  searchHeroes(query: string): Promise<HeroDto[]>;
}


