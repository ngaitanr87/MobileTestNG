import { IHeroRepository } from '../interfaces/i-hero-repository';
import { IHeroDataSource, HeroDto } from 'abstract_data';
import { Hero } from '../entities/hero';
import { HeroCharacteristics } from '../value-objects/hero-characteristics';

export class HeroRepository implements IHeroRepository {
  constructor(private readonly dataSource: IHeroDataSource) {}

  async getAll(): Promise<Hero[]> {
    const dtos = await this.dataSource.getHeroes();
    return dtos.map((d) => this.toDomain(d));
  }

  async getById(id: string): Promise<Hero | null> {
    const dto = await this.dataSource.getHeroById(id);
    return dto ? this.toDomain(dto) : null;
  }

  async search(searchTerm: string): Promise<Hero[]> {
    const dtos = await this.dataSource.searchHeroes(searchTerm);
    return dtos.map((d) => this.toDomain(d));
  }

  private toDomain(dto: HeroDto): Hero {
    return new Hero({
      id: dto.id,
      name: dto.name,
      description: dto.description,
      imageUrl: dto.imageUrl,
      characteristics: new HeroCharacteristics({
        powers: dto.characteristics.powers,
        weaknesses: dto.characteristics.weaknesses,
        affiliations: dto.characteristics.affiliations,
        firstAppearance: 'Unknown',
        realName: dto.characteristics.realName || 'Unknown',
        species: 'Unknown',
        gender: 'Unknown',
        height: 1,
        weight: 1
      }),
      createdAt: new Date(dto.createdAt),
      updatedAt: new Date(dto.updatedAt)
    });
  }
}


