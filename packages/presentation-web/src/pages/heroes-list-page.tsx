import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getHeroesList } from '@application/thunks/get-heroes-list-thunk';
import {
  selectHeroes,
  selectHeroesLoading,
  selectHeroesError,
  selectSearchTerm,
  selectFilteredHeroes,
} from '@application/selectors/heroes-selectors';
import { setSearchTerm } from '@application/slices/heroes-slice';
import { SearchInput } from '../components/search-input';
import { HeroCard } from '../components/hero-card';
import { HeroData as Hero } from '@shared/types/hero';
import styles from './heroes-list-page.module.css';

export const HeroesListPage: React.FC = () => {
  const dispatch = useDispatch();
  
  const heroes = useSelector(selectHeroes);
  const loading = useSelector(selectHeroesLoading);
  const error = useSelector(selectHeroesError);
  const searchTerm = useSelector(selectSearchTerm);
  const filteredHeroes = useSelector(selectFilteredHeroes);

  useEffect(() => {
    dispatch(getHeroesList() as any);
  }, [dispatch]);

  const handleSearchChange = (text: string) => {
    dispatch(setSearchTerm(text));
  };

  const handleHeroClick = (hero: Hero) => {
    // In a real implementation, this would navigate to hero detail page
    console.log('Navigate to hero detail:', hero.id);
  };

  const renderEmptyState = () => {
    if (loading) {
      return (
        <div className={styles.centerContainer}>
          <div className={styles.loadingSpinner} data-testid="loading-indicator" />
          <p className={styles.loadingText}>Loading heroes...</p>
        </div>
      );
    }

    if (error) {
      return (
        <div className={styles.centerContainer}>
          <p className={styles.errorText}>{error}</p>
        </div>
      );
    }

    if (searchTerm && filteredHeroes.length === 0) {
      return (
        <div className={styles.centerContainer}>
          <p className={styles.emptyText}>
            No heroes found for "{searchTerm}"
          </p>
        </div>
      );
    }

    return (
      <div className={styles.centerContainer}>
        <p className={styles.emptyText}>No heroes found</p>
      </div>
    );
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Marvel Heroes</h1>
        <SearchInput
          value={searchTerm}
          onChangeText={handleSearchChange}
          placeholder="Search heroes..."
        />
      </header>

      <main className={styles.main}>
        {filteredHeroes.length > 0 ? (
          <div className={styles.heroesGrid} data-testid="heroes-grid">
            {filteredHeroes.map((hero) => (
              <HeroCard
                key={hero.id}
                hero={hero}
                onClick={() => handleHeroClick(hero)}
              />
            ))}
          </div>
        ) : (
          renderEmptyState()
        )}
      </main>
    </div>
  );
};
