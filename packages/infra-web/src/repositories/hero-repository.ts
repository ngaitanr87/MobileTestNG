import { IHeroRepository } from '@domain/interfaces/i-hero-repository';
import { Hero } from '@domain/entities/hero';
import { HeroCharacteristics } from '@domain/value-objects/hero-characteristics';
import { logger } from '@shared/logging';
const heroesData: any[] = require('../data/heroes.json');

export class WebHeroRepository implements IHeroRepository {
  private heroes: Hero[] = [];

  constructor() {
    this.loadHeroes();
  }

  async getAll(): Promise<Hero[]> {
    return [...this.heroes];
  }

  async getById(id: string): Promise<Hero | null> {
    if (!id || id.trim() === '') {
      return null;
    }

    const hero = this.heroes.find(h => h.id === id);
    return hero || null;
  }

  async search(searchTerm: string): Promise<Hero[]> {
    if (!searchTerm || searchTerm.trim() === '') {
      return [];
    }

    const lowerSearchTerm = searchTerm.toLowerCase().trim();
    
    return this.heroes.filter(hero => 
      hero.name.toLowerCase().startsWith(lowerSearchTerm) ||
      hero.description.toLowerCase().startsWith(lowerSearchTerm)
    );
  }

  private loadHeroes(): void {
    try {
      this.heroes = heroesData.map(heroData => {
        const characteristics = new HeroCharacteristics({
          powers: heroData.characteristics.powers,
          weaknesses: heroData.characteristics.weaknesses,
          affiliations: heroData.characteristics.affiliations,
          firstAppearance: heroData.characteristics.firstAppearance,
          realName: heroData.characteristics.realName,
          species: heroData.characteristics.species,
          gender: heroData.characteristics.gender,
          height: heroData.characteristics.height,
          weight: heroData.characteristics.weight,
        });

        return new Hero({
          id: heroData.id,
          name: heroData.name,
          description: heroData.description,
          imageUrl: heroData.imageUrl,
          characteristics,
          createdAt: new Date(heroData.createdAt),
          updatedAt: new Date(heroData.updatedAt),
        });
      });
    } catch (error) {
      logger.error('Failed to load heroes data:', error);
      this.heroes = [];
    }
  }
}
