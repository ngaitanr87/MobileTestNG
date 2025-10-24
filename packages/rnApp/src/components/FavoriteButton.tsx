import React from 'react';
import { Button } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, removeFavorite } from '../store/slices/favoritesSlice';
import type { RootState } from '../store/store';

export function FavoriteButton({ heroId }: { heroId: string }) {
  const dispatch = useDispatch();
  const ids = useSelector((s: RootState) => s.favorites.ids);
  const isFav = ids.includes(heroId);

  const toggle = () => {
    if (isFav) dispatch(removeFavorite(heroId));
    else dispatch(addFavorite(heroId));
  };

  return <Button title={isFav ? 'Unfavorite' : 'Favorite'} onPress={toggle} />;
}


