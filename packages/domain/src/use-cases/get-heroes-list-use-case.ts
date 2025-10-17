import { IHeroRepository } from '../interfaces/i-hero-repository';
import { Hero } from '../entities/hero';

export class GetHeroesListUseCase {
  constructor(private readonly heroRepository: IHeroRepository) {}

  async execute(searchTerm?: string): Promise<Hero[]> {
    if (searchTerm && searchTerm.trim() !== '') {
      return await this.heroRepository.search(searchTerm.trim());
    }

    return await this.heroRepository.getAll();
  }
}
