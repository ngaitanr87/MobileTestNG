import { HeroCharacteristics } from '../../src/value-objects/hero-characteristics';

describe('HeroCharacteristics Value Object', () => {
  describe('constructor', () => {
    it('should create valid characteristics with all properties', () => {
      const data = {
        powers: ['Superhuman strength', 'Flight'],
        weaknesses: ['Arc reactor dependency'],
        affiliations: ['Avengers', 'S.H.I.E.L.D.'],
        firstAppearance: 'Tales of Suspense #39',
        realName: 'Anthony Edward Stark',
        species: 'Human',
        gender: 'Male',
        height: 185,
        weight: 102,
      };

      const characteristics = new HeroCharacteristics(data);

      expect(characteristics.powers).toEqual(['Superhuman strength', 'Flight']);
      expect(characteristics.weaknesses).toEqual(['Arc reactor dependency']);
      expect(characteristics.affiliations).toEqual(['Avengers', 'S.H.I.E.L.D.']);
      expect(characteristics.firstAppearance).toBe('Tales of Suspense #39');
      expect(characteristics.realName).toBe('Anthony Edward Stark');
      expect(characteristics.species).toBe('Human');
      expect(characteristics.gender).toBe('Male');
      expect(characteristics.height).toBe(185);
      expect(characteristics.weight).toBe(102);
    });

    it('should throw error when powers is empty', () => {
      const data = {
        powers: [],
        weaknesses: ['Arc reactor dependency'],
        affiliations: ['Avengers'],
        firstAppearance: 'Tales of Suspense #39',
        realName: 'Anthony Edward Stark',
        species: 'Human',
        gender: 'Male',
        height: 185,
        weight: 102,
      };

      expect(() => new HeroCharacteristics(data)).toThrow('Hero must have at least one power');
    });

    it('should allow empty weaknesses array', () => {
      const data = {
        powers: ['Superhuman strength'],
        weaknesses: [],
        affiliations: ['Avengers'],
        firstAppearance: 'Tales of Suspense #39',
        realName: 'Anthony Edward Stark',
        species: 'Human',
        gender: 'Male',
        height: 185,
        weight: 102,
      };

      expect(() => new HeroCharacteristics(data)).not.toThrow();
    });

    it('should allow empty affiliations array', () => {
      const data = {
        powers: ['Superhuman strength'],
        weaknesses: ['Arc reactor dependency'],
        affiliations: [],
        firstAppearance: 'Tales of Suspense #39',
        realName: 'Anthony Edward Stark',
        species: 'Human',
        gender: 'Male',
        height: 185,
        weight: 102,
      };

      expect(() => new HeroCharacteristics(data)).not.toThrow();
    });

    it('should throw error when firstAppearance is empty', () => {
      const data = {
        powers: ['Superhuman strength'],
        weaknesses: ['Arc reactor dependency'],
        affiliations: ['Avengers'],
        firstAppearance: '',
        realName: 'Anthony Edward Stark',
        species: 'Human',
        gender: 'Male',
        height: 185,
        weight: 102,
      };

      expect(() => new HeroCharacteristics(data)).toThrow('First appearance cannot be empty');
    });

    it('should throw error when realName is empty', () => {
      const data = {
        powers: ['Superhuman strength'],
        weaknesses: ['Arc reactor dependency'],
        affiliations: ['Avengers'],
        firstAppearance: 'Tales of Suspense #39',
        realName: '',
        species: 'Human',
        gender: 'Male',
        height: 185,
        weight: 102,
      };

      expect(() => new HeroCharacteristics(data)).toThrow('Real name cannot be empty');
    });

    it('should throw error when species is empty', () => {
      const data = {
        powers: ['Superhuman strength'],
        weaknesses: ['Arc reactor dependency'],
        affiliations: ['Avengers'],
        firstAppearance: 'Tales of Suspense #39',
        realName: 'Anthony Edward Stark',
        species: '',
        gender: 'Male',
        height: 185,
        weight: 102,
      };

      expect(() => new HeroCharacteristics(data)).toThrow('Species cannot be empty');
    });

    it('should throw error when gender is empty', () => {
      const data = {
        powers: ['Superhuman strength'],
        weaknesses: ['Arc reactor dependency'],
        affiliations: ['Avengers'],
        firstAppearance: 'Tales of Suspense #39',
        realName: 'Anthony Edward Stark',
        species: 'Human',
        gender: '',
        height: 185,
        weight: 102,
      };

      expect(() => new HeroCharacteristics(data)).toThrow('Gender cannot be empty');
    });

    it('should throw error when height is negative', () => {
      const data = {
        powers: ['Superhuman strength'],
        weaknesses: ['Arc reactor dependency'],
        affiliations: ['Avengers'],
        firstAppearance: 'Tales of Suspense #39',
        realName: 'Anthony Edward Stark',
        species: 'Human',
        gender: 'Male',
        height: -1,
        weight: 102,
      };

      expect(() => new HeroCharacteristics(data)).toThrow('Height must be a positive number');
    });

    it('should throw error when weight is negative', () => {
      const data = {
        powers: ['Superhuman strength'],
        weaknesses: ['Arc reactor dependency'],
        affiliations: ['Avengers'],
        firstAppearance: 'Tales of Suspense #39',
        realName: 'Anthony Edward Stark',
        species: 'Human',
        gender: 'Male',
        height: 185,
        weight: -1,
      };

      expect(() => new HeroCharacteristics(data)).toThrow('Weight must be a positive number');
    });
  });

  describe('properties', () => {
    it('should have all required properties', () => {
      const data = {
        powers: ['Superhuman strength'],
        weaknesses: ['Arc reactor dependency'],
        affiliations: ['Avengers'],
        firstAppearance: 'Tales of Suspense #39',
        realName: 'Anthony Edward Stark',
        species: 'Human',
        gender: 'Male',
        height: 185,
        weight: 102,
      };

      const characteristics = new HeroCharacteristics(data);

      expect(characteristics.powers).toEqual(['Superhuman strength']);
      expect(characteristics.weaknesses).toEqual(['Arc reactor dependency']);
      expect(characteristics.affiliations).toEqual(['Avengers']);
      expect(characteristics.firstAppearance).toBe('Tales of Suspense #39');
      expect(characteristics.realName).toBe('Anthony Edward Stark');
      expect(characteristics.species).toBe('Human');
      expect(characteristics.gender).toBe('Male');
      expect(characteristics.height).toBe(185);
      expect(characteristics.weight).toBe(102);
    });
  });
});
