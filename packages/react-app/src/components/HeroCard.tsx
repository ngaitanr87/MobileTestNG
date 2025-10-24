import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, removeFavorite } from '../store/slices/favoritesSlice';
import type { RootState } from '../store/store';
import { getDefaultHeroCardStrategy } from '../ui/strategy/heroCardStrategies';

export function HeroCard({ hero }: { hero: any }) {
  const dispatch = useDispatch();
  const ids = useSelector((s: RootState) => s.favorites.ids);
  const isFav = ids.includes(hero.id);

  const toggle = () => {
    if (isFav) dispatch(removeFavorite(hero.id));
    else dispatch(addFavorite(hero.id));
  };

  return (
    <div>
      {getDefaultHeroCardStrategy().render(hero)}
      <button onClick={toggle}>{isFav ? 'Unfavorite' : 'Favorite'}</button>
    </div>
  );
}
