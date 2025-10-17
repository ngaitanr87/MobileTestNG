import { heroesSlice, HeroesState } from '../../src/slices/heroes-slice';
import { Hero } from '@domain/entities/hero';
import { HeroCharacteristics } from '@domain/value-objects/hero-characteristics';

describe('heroesSlice', () => {
  const initialState: HeroesState = {
    heroes: [],
    loading: false,
    error: null,
    searchTerm: '',
  };

  const mockHero: Hero = new Hero({
    id: 'hero-001',
    name: 'Iron Man',
    description: 'Genius billionaire playboy philanthropist',
    imageUrl: 'https://example.com/ironman.jpg',
    characteristics: new HeroCharacteristics({
      powers: ['Superhuman strength', 'Flight'],
      weaknesses: ['Arc reactor dependency'],
      affiliations: ['Avengers'],
      firstAppearance: 'Tales of Suspense #39',
      realName: 'Anthony Edward Stark',
      species: 'Human',
      gender: 'Male',
      height: 185,
      weight: 102,
    }),
  });

  describe('initial state', () => {
    it('should have correct initial state', () => {
      expect(heroesSlice.reducer(undefined, { type: 'unknown' })).toEqual(initialState);
    });
  });

  describe('getHeroesList.pending', () => {
    it('should set loading to true and clear error', () => {
      const state = {
        ...initialState,
        error: 'Previous error',
      };

      const action = { type: 'heroes/getHeroesList/pending' };
      const newState = heroesSlice.reducer(state, action);

      expect(newState.loading).toBe(true);
      expect(newState.error).toBeNull();
    });
  });

  describe('getHeroesList.fulfilled', () => {
    it('should set heroes and set loading to false', () => {
      const state = {
        ...initialState,
        loading: true,
      };

      const action = {
        type: 'heroes/getHeroesList/fulfilled',
        payload: [mockHero],
      };
      const newState = heroesSlice.reducer(state, action);

      expect(newState.heroes).toEqual([mockHero]);
      expect(newState.loading).toBe(false);
      expect(newState.error).toBeNull();
    });

    it('should handle empty heroes array', () => {
      const state = {
        ...initialState,
        loading: true,
        heroes: [mockHero],
      };

      const action = {
        type: 'heroes/getHeroesList/fulfilled',
        payload: [],
      };
      const newState = heroesSlice.reducer(state, action);

      expect(newState.heroes).toEqual([]);
      expect(newState.loading).toBe(false);
    });
  });

  describe('getHeroesList.rejected', () => {
    it('should set error and set loading to false', () => {
      const state = {
        ...initialState,
        loading: true,
      };

      const action = {
        type: 'heroes/getHeroesList/rejected',
        error: { message: 'Failed to fetch heroes' },
      };
      const newState = heroesSlice.reducer(state, action);

      expect(newState.error).toBe('Failed to fetch heroes');
      expect(newState.loading).toBe(false);
    });
  });

  describe('setSearchTerm', () => {
    it('should update search term', () => {
      const action = {
        type: 'heroes/setSearchTerm',
        payload: 'Iron Man',
      };
      const newState = heroesSlice.reducer(initialState, action);

      expect(newState.searchTerm).toBe('Iron Man');
    });

    it('should handle empty search term', () => {
      const state = {
        ...initialState,
        searchTerm: 'Iron Man',
      };

      const action = {
        type: 'heroes/setSearchTerm',
        payload: '',
      };
      const newState = heroesSlice.reducer(state, action);

      expect(newState.searchTerm).toBe('');
    });
  });

  describe('clearError', () => {
    it('should clear error', () => {
      const state = {
        ...initialState,
        error: 'Some error',
      };

      const action = { type: 'heroes/clearError' };
      const newState = heroesSlice.reducer(state, action);

      expect(newState.error).toBeNull();
    });
  });
});
