export interface HeroCharacteristicsData {
  powers: string[];
  weaknesses: string[];
  affiliations: string[];
  firstAppearance: string;
  realName: string;
  species: string;
  gender: string;
  height: number;
  weight: number;
}

export class HeroCharacteristics {
  public readonly powers: string[];
  public readonly weaknesses: string[];
  public readonly affiliations: string[];
  public readonly firstAppearance: string;
  public readonly realName: string;
  public readonly species: string;
  public readonly gender: string;
  public readonly height: number;
  public readonly weight: number;

  constructor(data: HeroCharacteristicsData) {
    this.validate(data);
    
    this.powers = [...data.powers];
    this.weaknesses = [...data.weaknesses];
    this.affiliations = [...data.affiliations];
    this.firstAppearance = data.firstAppearance;
    this.realName = data.realName;
    this.species = data.species;
    this.gender = data.gender;
    this.height = data.height;
    this.weight = data.weight;
  }

  private validate(data: HeroCharacteristicsData): void {
    if (!data.powers || data.powers.length === 0) {
      throw new Error('Hero must have at least one power');
    }

    if (!data.firstAppearance || data.firstAppearance.trim() === '') {
      throw new Error('First appearance cannot be empty');
    }

    if (!data.realName || data.realName.trim() === '') {
      throw new Error('Real name cannot be empty');
    }

    if (!data.species || data.species.trim() === '') {
      throw new Error('Species cannot be empty');
    }

    if (!data.gender || data.gender.trim() === '') {
      throw new Error('Gender cannot be empty');
    }

    if (data.height <= 0) {
      throw new Error('Height must be a positive number');
    }

    if (data.weight <= 0) {
      throw new Error('Weight must be a positive number');
    }
  }
}
