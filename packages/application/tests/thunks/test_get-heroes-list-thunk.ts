import { configureStore } from '@reduxjs/toolkit';
import { getHeroesList } from '../../src/thunks/get-heroes-list-thunk';
import { heroesSlice } from '../../src/slices/heroes-slice';
import { GetHeroesListUseCase } from '@domain/use-cases/get-heroes-list-use-case';
import { Hero } from '@domain/entities/hero';
import { HeroCharacteristics } from '@domain/value-objects/hero-characteristics';

// Mock the use case
jest.mock('@domain/use-cases/get-heroes-list-use-case');

describe('getHeroesList Thunk', () => {
  let mockGetHeroesListUseCase: jest.Mocked<GetHeroesListUseCase>;
  let store: ReturnType<typeof configureStore>;

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

  const mockHeroes: Hero[] = [
    {
      id: 'hero-001',
      name: 'Iron Man',
      description: 'Genius billionaire playboy philanthropist',
      imageUrl: 'https://example.com/ironman.jpg',
      characteristics: mockCharacteristics,
      createdAt: new Date('2023-01-01'),
      updatedAt: new Date('2023-01-01'),
    },
    {
      id: 'hero-002',
      name: 'Captain America',
      description: 'Super soldier with enhanced abilities',
      imageUrl: 'https://example.com/captain.jpg',
      characteristics: mockCharacteristics,
      createdAt: new Date('2023-01-02'),
      updatedAt: new Date('2023-01-02'),
    },
  ];

  beforeEach(() => {
    mockGetHeroesListUseCase = {
      execute: jest.fn(),
    } as any;

    store = configureStore({
      reducer: {
        heroes: heroesSlice.reducer,
      },
      middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
          thunk: {
            extraArgument: {
              getHeroesListUseCase: mockGetHeroesListUseCase,
            },
          },
          serializableCheck: false,
          immutableCheck: false,
        }),
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('when the use case succeeds', () => {
    it('should dispatch fulfilled action with heroes', async () => {
      mockGetHeroesListUseCase.execute.mockResolvedValue(mockHeroes);

      const result = await store.dispatch(getHeroesList(undefined));

      expect(result.type).toBe('heroes/getHeroesList/fulfilled');
      expect(result.payload).toEqual(mockHeroes);
      expect(mockGetHeroesListUseCase.execute).toHaveBeenCalledWith(undefined);
    });

    it('should dispatch fulfilled action with search term', async () => {
      const searchTerm = 'iron';
      mockGetHeroesListUseCase.execute.mockResolvedValue([mockHeroes[0]]);

      const result = await store.dispatch(getHeroesList(searchTerm));

      expect(result.type).toBe('heroes/getHeroesList/fulfilled');
      expect(result.payload).toEqual([mockHeroes[0]]);
      expect(mockGetHeroesListUseCase.execute).toHaveBeenCalledWith(searchTerm);
    });

    it('should handle empty heroes array', async () => {
      mockGetHeroesListUseCase.execute.mockResolvedValue([]);

      const result = await store.dispatch(getHeroesList(undefined));

      expect(result.type).toBe('heroes/getHeroesList/fulfilled');
      expect(result.payload).toEqual([]);
    });
  });

  describe('when the use case fails', () => {
    it('should dispatch rejected action with error', async () => {
      const error = new Error('Network error');
      mockGetHeroesListUseCase.execute.mockRejectedValue(error);

      const result = await store.dispatch(getHeroesList(undefined));

      expect(result.type).toBe('heroes/getHeroesList/rejected');
      expect(result.error.message).toBe('Network error');
    });

    it('should handle use case throwing without error message', async () => {
      const error = new Error();
      mockGetHeroesListUseCase.execute.mockRejectedValue(error);

      const result = await store.dispatch(getHeroesList(undefined));

      expect(result.type).toBe('heroes/getHeroesList/rejected');
      expect(result.error.message).toBe('');
    });
  });

  describe('state updates', () => {
    it('should set loading to true when pending', async () => {
      mockGetHeroesListUseCase.execute.mockImplementation(() => new Promise(() => {})); // Never resolves

      const promise = store.dispatch(getHeroesList(undefined));
      
      const state = store.getState();
      expect(state.heroes.loading).toBe(true);
      expect(state.heroes.error).toBeNull();

      // Clean up
      promise.abort();
    });

    it('should set heroes and loading to false when fulfilled', async () => {
      mockGetHeroesListUseCase.execute.mockResolvedValue(mockHeroes);

      await store.dispatch(getHeroesList(undefined));

      const state = store.getState();
      expect(state.heroes.heroes).toEqual(mockHeroes);
      expect(state.heroes.loading).toBe(false);
      expect(state.heroes.error).toBeNull();
    });

    it('should set error and loading to false when rejected', async () => {
      const error = new Error('Network error');
      mockGetHeroesListUseCase.execute.mockRejectedValue(error);

      await store.dispatch(getHeroesList(undefined));

      const state = store.getState();
      expect(state.heroes.error).toBe('Network error');
      expect(state.heroes.loading).toBe(false);
    });
  });
});
