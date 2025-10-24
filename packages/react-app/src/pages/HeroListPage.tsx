import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store/store';
import { fetchHeroes } from '../store/slices/heroesSlice';
import { SearchBar } from '../components/SearchBar';
import { HeroCard } from '../components/HeroCard';
import { LoadingSpinner } from '../components/LoadingSpinner';
import { ErrorMessage } from '../components/ErrorMessage';

export function HeroListPage() {
  const dispatch = useDispatch<AppDispatch>();
  const { items, status, error } = useSelector((s: RootState) => s.heroes);
  const { filteredHeroes, searchTerm } = useSelector((s: RootState) => s.search);

  useEffect(() => {
    performance.mark('heroes:list:start');
    dispatch(fetchHeroes()).finally(() => {
      performance.mark('heroes:list:end');
      performance.measure('heroes:list', 'heroes:list:start', 'heroes:list:end');
    });
  }, [dispatch]);

  const data = searchTerm ? filteredHeroes : items;

  return (
    <div>
      <SearchBar />
      {status === 'loading' && <LoadingSpinner />}
      <ErrorMessage message={error} />
      <ul>
        {data.map((h: any) => (
          <li key={h.id}><HeroCard hero={h} /></li>
        ))}
      </ul>
    </div>
  );
}


