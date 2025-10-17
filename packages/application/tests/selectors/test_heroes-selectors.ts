import { RootState } from '../../src/store';
import { Hero } from '@domain/entities/hero';
import { HeroCharacteristics } from '@domain/value-objects/hero-characteristics';
import {
  selectHeroes,
  selectHeroesLoading,
  selectHeroesError,
  selectSearchTerm,
  selectFilteredHeroes,
  selectHeroById,
} from '../../src/selectors/heroes-selectors';

describe('Heroes Selectors', () => {
  const mockCharacteristics = new HeroCharacteristics({
    powers: ['Superhuman strength'],
    weaknesses: ['Arc reactor dependency'],
    affiliations: ['Avengers'],
    firstAppearance: 'Tales of Suspense #39',
    realName: 'Anthony Edward Stark',
    species: 'Human',
    gender: 'Male',
    height: 185,
    weight: 102,
  });

  const mockHero1: Hero = {
    id: 'hero-001',
    name: 'Iron Man',
    description: 'Genius billionaire playboy philanthropist',
    imageUrl: 'https://example.com/ironman.jpg',
    characteristics: mockCharacteristics,
    createdAt: new Date('2023-01-01'),
    updatedAt: new Date('2023-01-01'),
  };

  const mockHero2: Hero = {
    id: 'hero-002',
    name: 'Captain America',
    description: 'Super soldier with enhanced abilities',
    imageUrl: 'https://example.com/captain.jpg',
    characteristics: mockCharacteristics,
    createdAt: new Date('2023-01-02'),
    updatedAt: new Date('2023-01-02'),
  };

  const mockState: RootState = {
    heroes: {
      heroes: [mockHero1, mockHero2],
      loading: false,
      error: null,
      searchTerm: '',
    },
  };

  describe('selectHeroes', () => {
    it('should return the heroes array from state', () => {
      const result = selectHeroes(mockState);
      expect(result).toEqual([mockHero1, mockHero2]);
    });
  });

  describe('selectHeroesLoading', () => {
    it('should return the loading state', () => {
      const result = selectHeroesLoading(mockState);
      expect(result).toBe(false);
    });

    it('should return true when loading', () => {
      const loadingState = { ...mockState, heroes: { ...mockState.heroes, loading: true } };
      const result = selectHeroesLoading(loadingState);
      expect(result).toBe(true);
    });
  });

  describe('selectHeroesError', () => {
    it('should return null when no error', () => {
      const result = selectHeroesError(mockState);
      expect(result).toBeNull();
    });

    it('should return the error message when there is an error', () => {
      const errorState = { ...mockState, heroes: { ...mockState.heroes, error: 'Network error' } };
      const result = selectHeroesError(errorState);
      expect(result).toBe('Network error');
    });
  });

  describe('selectSearchTerm', () => {
    it('should return the search term from state', () => {
      const result = selectSearchTerm(mockState);
      expect(result).toBe('');
    });

    it('should return the search term when set', () => {
      const searchState = { ...mockState, heroes: { ...mockState.heroes, searchTerm: 'iron' } };
      const result = selectSearchTerm(searchState);
      expect(result).toBe('iron');
    });
  });

  describe('selectFilteredHeroes', () => {
    it('should return all heroes when search term is empty', () => {
      const result = selectFilteredHeroes(mockState);
      expect(result).toEqual([mockHero1, mockHero2]);
    });

    it('should return all heroes when search term is only whitespace', () => {
      const whitespaceState = { ...mockState, heroes: { ...mockState.heroes, searchTerm: '   ' } };
      const result = selectFilteredHeroes(whitespaceState);
      expect(result).toEqual([mockHero1, mockHero2]);
    });

    it('should filter heroes by name (case insensitive)', () => {
      const searchState = { ...mockState, heroes: { ...mockState.heroes, searchTerm: 'iron' } };
      const result = selectFilteredHeroes(searchState);
      expect(result).toEqual([mockHero1]);
    });

    it('should filter heroes by description (case insensitive)', () => {
      const searchState = { ...mockState, heroes: { ...mockState.heroes, searchTerm: 'genius' } };
      const result = selectFilteredHeroes(searchState);
      expect(result).toEqual([mockHero1]);
    });

    it('should return empty array when no heroes match', () => {
      const searchState = { ...mockState, heroes: { ...mockState.heroes, searchTerm: 'spiderman' } };
      const result = selectFilteredHeroes(searchState);
      expect(result).toEqual([]);
    });

    it('should use starts with matching', () => {
      const searchState = { ...mockState, heroes: { ...mockState.heroes, searchTerm: 'capt' } };
      const result = selectFilteredHeroes(searchState);
      expect(result).toEqual([mockHero2]);
    });

    it('should not match partial words in the middle', () => {
      const searchState = { ...mockState, heroes: { ...mockState.heroes, searchTerm: 'tain' } };
      const result = selectFilteredHeroes(searchState);
      expect(result).toEqual([]);
    });
  });

  describe('selectHeroById', () => {
    it('should return the hero when ID exists', () => {
      const result = selectHeroById(mockState, 'hero-001');
      expect(result).toEqual(mockHero1);
    });

    it('should return undefined when ID does not exist', () => {
      const result = selectHeroById(mockState, 'hero-999');
      expect(result).toBeUndefined();
    });

    it('should return undefined when ID is empty', () => {
      const result = selectHeroById(mockState, '');
      expect(result).toBeUndefined();
    });
  });
});
