import { IHeroRepository } from '../interfaces/i-hero-repository';
import { Hero } from '../entities/hero';
import { HeroCharacteristics } from '../value-objects/hero-characteristics';
import { IHeroDataSource } from '@abstract_data/index';

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

  private toDomain(dto: any): Hero {
    const characteristics = new HeroCharacteristics(
      dto.characteristics?.powers ?? [],
      dto.characteristics?.weaknesses ?? [],
      dto.characteristics?.affiliations ?? []
    );
    return new Hero({
      id: dto.id,
      name: dto.name,
      description: dto.description,
      imageUrl: dto.imageUrl,
      characteristics,
      createdAt: new Date(dto.createdAt),
      updatedAt: new Date(dto.updatedAt)
    });
  }
}

import { IHeroDataSource } from 'abstract_data/src/contracts/IHeroDataSource';
import { HeroDto } from 'abstract_data/src/types/HeroDto';
import { Hero } from '../entities/hero';
import { HeroCharacteristics } from '../value-objects/hero-characteristics';

export class HeroRepository {
  constructor(private readonly dataSource: IHeroDataSource) {}

  private toDomain(dto: HeroDto): Hero {
    return new Hero({
      id: dto.id,
      name: dto.name,
      description: dto.description,
      imageUrl: dto.imageUrl,
      characteristics: new HeroCharacteristics({
        powers: dto.characteristics.powers,
        weaknesses: dto.characteristics.weaknesses,
        affiliations: dto.characteristics.affiliations
      }),
      createdAt: new Date(dto.createdAt),
      updatedAt: new Date(dto.updatedAt)
    });
  }

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
}


