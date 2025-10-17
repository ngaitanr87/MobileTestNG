import { RootState } from '../store';
import { Hero } from '@domain/entities/hero';

export const selectHeroes = (state: RootState): Hero[] => state.heroes.heroes;

export const selectHeroesLoading = (state: RootState): boolean => state.heroes.loading;

export const selectHeroesError = (state: RootState): string | null => state.heroes.error;

export const selectSearchTerm = (state: RootState): string => state.heroes.searchTerm;

export const selectFilteredHeroes = (state: RootState): Hero[] => {
  const { heroes, searchTerm } = state.heroes;
  
  if (!searchTerm.trim()) {
    return heroes;
  }

  const lowerSearchTerm = searchTerm.toLowerCase();
  return heroes.filter(hero => 
    hero.name.toLowerCase().startsWith(lowerSearchTerm) ||
    hero.description.toLowerCase().startsWith(lowerSearchTerm)
  );
};

export const selectHeroById = (state: RootState, heroId: string): Hero | undefined => {
  return state.heroes.heroes.find(hero => hero.id === heroId);
};
