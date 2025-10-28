import React, { useEffect } from 'react';
import { FlatList, Text, View, StyleSheet, ActivityIndicator } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store/store';
import { fetchHeroes } from '../store/slices/heroesSlice';
import { SearchBar } from '../components/SearchBar';
import { HeroCard } from '../components/HeroCard';

export function HeroListScreen() {
  const dispatch = useDispatch<AppDispatch>();
  const { items, status, error } = useSelector((s: RootState) => s.heroes);
  const { filteredHeroes, searchTerm } = useSelector((s: RootState) => s.search);

  useEffect(() => {
    dispatch(fetchHeroes());
  }, [dispatch]);

  const data = searchTerm ? filteredHeroes : items;

  if (status === 'loading') {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text style={styles.text}>Loading heroes...</Text>
      </View>
    );
  }

  if (status === 'failed') {
    return (
      <View style={styles.centered}>
        <Text style={styles.errorText}>Error: {error || 'Failed to load heroes'}</Text>
      </View>
    );
  }

  if (data.length === 0) {
    return (
      <View style={styles.centered}>
        <Text style={styles.text}>No heroes found</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <SearchBar />
      <FlatList
        data={data}
        keyExtractor={(item: any) => item.id}
        renderItem={({ item }) => <HeroCard hero={item} />}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  list: {
    padding: 8,
  },
  text: {
    fontSize: 16,
    marginTop: 10,
  },
  errorText: {
    fontSize: 16,
    color: 'red',
    textAlign: 'center',
  },
});
