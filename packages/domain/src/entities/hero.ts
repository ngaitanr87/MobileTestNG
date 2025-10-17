import { HeroCharacteristics } from '../value-objects/hero-characteristics';

export interface HeroData {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  characteristics: HeroCharacteristics;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface HeroUpdateData {
  name?: string;
  description?: string;
  imageUrl?: string;
  characteristics?: HeroCharacteristics;
}

export class Hero {
  public readonly id: string;
  public readonly createdAt: Date;
  public updatedAt: Date;
  private _name: string;
  private _description: string;
  private _imageUrl: string;
  private _characteristics: HeroCharacteristics;

  constructor(data: HeroData) {
    this.validate(data);
    
    this.id = data.id;
    this._name = data.name;
    this._description = data.description;
    this._imageUrl = data.imageUrl;
    this._characteristics = data.characteristics;
    this.createdAt = data.createdAt || new Date();
    this.updatedAt = data.updatedAt || new Date();
  }

  get name(): string {
    return this._name;
  }

  get description(): string {
    return this._description;
  }

  get imageUrl(): string {
    return this._imageUrl;
  }

  get characteristics(): HeroCharacteristics {
    return this._characteristics;
  }

  update(updateData: HeroUpdateData): void {
    if (updateData.name !== undefined) {
      this.validateName(updateData.name);
      this._name = updateData.name;
    }

    if (updateData.description !== undefined) {
      this.validateDescription(updateData.description);
      this._description = updateData.description;
    }

    if (updateData.imageUrl !== undefined) {
      this.validateImageUrl(updateData.imageUrl);
      this._imageUrl = updateData.imageUrl;
    }

    if (updateData.characteristics !== undefined) {
      this._characteristics = updateData.characteristics;
    }

    this.updatedAt = new Date();
  }

  private validate(data: HeroData): void {
    this.validateId(data.id);
    this.validateName(data.name);
    this.validateDescription(data.description);
    this.validateImageUrl(data.imageUrl);
  }

  private validateId(id: string): void {
    if (!id || id.trim() === '') {
      throw new Error('Hero ID cannot be empty');
    }
  }

  private validateName(name: string): void {
    if (!name || name.trim() === '') {
      throw new Error('Hero name cannot be empty');
    }

    if (name.length > 100) {
      throw new Error('Hero name cannot exceed 100 characters');
    }
  }

  private validateDescription(description: string): void {
    if (!description || description.trim() === '') {
      throw new Error('Hero description cannot be empty');
    }

    if (description.length > 1000) {
      throw new Error('Hero description cannot exceed 1000 characters');
    }
  }

  private validateImageUrl(imageUrl: string): void {
    if (!imageUrl || imageUrl.trim() === '') {
      throw new Error('Hero imageUrl cannot be empty');
    }

    try {
      new URL(imageUrl);
    } catch {
      throw new Error('Hero imageUrl must be a valid URL');
    }
  }
}
