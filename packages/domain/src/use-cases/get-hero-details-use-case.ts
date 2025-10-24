import { IHeroRepository } from '../interfaces/i-hero-repository';
import { Hero } from '../entities/hero';

export class GetHeroDetailsUseCase {
  constructor(private readonly heroRepository: IHeroRepository) {}

  async execute(id: string): Promise<Hero | null> {
    if (!id || id.trim() === '') {
      throw new Error('Hero ID is required');
    }
    return await this.heroRepository.getById(id);
  }
}


