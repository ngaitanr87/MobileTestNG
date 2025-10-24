import React, { useEffect } from 'react';
import { FlatList, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store/store';
import { fetchHeroes } from '../store/slices/heroesSlice';
import { SearchBar } from '../components/SearchBar';
import { HeroCard } from '../components/HeroCard';

export function HeroListScreen() {
  const dispatch = useDispatch<AppDispatch>();
  const { items, status } = useSelector((s: RootState) => s.heroes);
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
    <View>
      <SearchBar />
      {status === 'loading' && <Text>Loading...</Text>}
      <FlatList data={data} keyExtractor={(item: any) => item.id} renderItem={({ item }) => <HeroCard hero={item} />} />
    </View>
  );
}


