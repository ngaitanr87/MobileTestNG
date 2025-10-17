import { Hero } from '../entities/hero';

export interface IHeroRepository {
  getAll(): Promise<Hero[]>;
  getById(id: string): Promise<Hero | null>;
  search(searchTerm: string): Promise<Hero[]>;
}
