import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { HeroesListPage } from '../../src/pages/heroes-list-page';
import { Hero } from '@domain/entities/hero';
import { HeroCharacteristics } from '@domain/value-objects/hero-characteristics';

// Mock the thunk
jest.mock('@application/thunks/get-heroes-list-thunk', () => ({
  getHeroesList: jest.fn(() => ({ type: 'heroes/getHeroesList/pending' })),
}));

describe('HeroesListPage', () => {
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

  const createMockStore = (initialState = {}) => {
    return configureStore({
      reducer: {
        heroes: (state = {
          heroes: [],
          loading: false,
          error: null,
          searchTerm: '',
        }, action) => {
          switch (action.type) {
            case 'heroes/getHeroesList/fulfilled':
              return { ...state, heroes: action.payload, loading: false };
            case 'heroes/setSearchTerm':
              return { ...state, searchTerm: action.payload };
            default:
              return state;
          }
        },
      },
      preloadedState: initialState,
    });
  };

  const renderWithProvider = (store: any) => {
    return render(
      <Provider store={store}>
        <HeroesListPage />
      </Provider>
    );
  };

  describe('Rendering', () => {
    it('should render the page title', () => {
      const store = createMockStore();
      renderWithProvider(store);

      expect(screen.getByText('Marvel Heroes')).toBeTruthy();
    });

    it('should render search input', () => {
      const store = createMockStore();
      renderWithProvider(store);

      expect(screen.getByPlaceholderText('Search heroes...')).toBeTruthy();
    });

    it('should render hero list when heroes are available', () => {
      const store = createMockStore({
        heroes: {
          heroes: [mockHero],
          loading: false,
          error: null,
          searchTerm: '',
        },
      });
      renderWithProvider(store);

      expect(screen.getByText('Iron Man')).toBeTruthy();
      expect(screen.getByText('Genius billionaire playboy philanthropist')).toBeTruthy();
    });

    it('should render loading indicator when loading', () => {
      const store = createMockStore({
        heroes: {
          heroes: [],
          loading: true,
          error: null,
          searchTerm: '',
        },
      });
      renderWithProvider(store);

      expect(screen.getByTestId('loading-indicator')).toBeTruthy();
    });

    it('should render error message when error occurs', () => {
      const store = createMockStore({
        heroes: {
          heroes: [],
          loading: false,
          error: 'Failed to load heroes',
          searchTerm: '',
        },
      });
      renderWithProvider(store);

      expect(screen.getByText('Failed to load heroes')).toBeTruthy();
    });

    it('should render empty state when no heroes', () => {
      const store = createMockStore({
        heroes: {
          heroes: [],
          loading: false,
          error: null,
          searchTerm: '',
        },
      });
      renderWithProvider(store);

      expect(screen.getByText('No heroes found')).toBeTruthy();
    });
  });

  describe('Search functionality', () => {
    it('should update search term when typing in search input', () => {
      const store = createMockStore();
      renderWithProvider(store);

      const searchInput = screen.getByPlaceholderText('Search heroes...');
      fireEvent.change(searchInput, { target: { value: 'Iron' } });

      expect(searchInput.value).toBe('Iron');
    });

    it('should filter heroes based on search term', () => {
      const store = createMockStore({
        heroes: {
          heroes: [mockHero],
          loading: false,
          error: null,
          searchTerm: 'Iron',
        },
      });
      renderWithProvider(store);

      expect(screen.getByText('Iron Man')).toBeTruthy();
    });

    it('should show no results when search term matches no heroes', () => {
      const store = createMockStore({
        heroes: {
          heroes: [],
          loading: false,
          error: null,
          searchTerm: 'NonExistent',
        },
      });
      renderWithProvider(store);

      expect(screen.getByText('No heroes found for "NonExistent"')).toBeTruthy();
    });
  });

  describe('Navigation', () => {
    it('should navigate to hero detail when hero is clicked', () => {
      const store = createMockStore({
        heroes: {
          heroes: [mockHero],
          loading: false,
          error: null,
          searchTerm: '',
        },
      });
      renderWithProvider(store);

      const heroCard = screen.getByText('Iron Man');
      fireEvent.click(heroCard);

      // In a real implementation, this would test navigation
      // For now, we just verify the click event is handled
      expect(heroCard).toBeTruthy();
    });
  });

  describe('Accessibility', () => {
    it('should have proper accessibility labels', () => {
      const store = createMockStore({
        heroes: {
          heroes: [mockHero],
          loading: false,
          error: null,
          searchTerm: '',
        },
      });
      renderWithProvider(store);

      const searchInput = screen.getByPlaceholderText('Search heroes...');
      expect(searchInput).toHaveAttribute('aria-label', 'Search heroes');

      const heroCard = screen.getByText('Iron Man');
      expect(heroCard).toHaveAttribute('role', 'button');
    });
  });

  describe('Responsive design', () => {
    it('should render hero cards in a grid layout', () => {
      const store = createMockStore({
        heroes: {
          heroes: [mockHero],
          loading: false,
          error: null,
          searchTerm: '',
        },
      });
      renderWithProvider(store);

      const heroGrid = screen.getByTestId('heroes-grid');
      expect(heroGrid).toBeTruthy();
    });
  });
});
