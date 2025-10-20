import React, { useEffect } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ActivityIndicator,
  Alert,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
// import { useNavigation } from '@react-navigation/native';
import { getHeroesList } from '@application/thunks/get-heroes-list-thunk';
import {
  selectHeroesLoading,
  selectHeroesError,
  selectSearchTerm,
  selectFilteredHeroes,
} from '@application/selectors/heroes-selectors';
import { setSearchTerm } from '@application/slices/heroes-slice';
import { SearchInput } from '../components/search-input';
import { HeroCard } from '../components/hero-card';
import { HeroData as Hero } from '@shared/types/hero';
import { logger } from '@shared/logging';

export const HeroesListScreen: React.FC = () => {
  const dispatch = useDispatch();
  // const navigation = useNavigation();
  
  const loading = useSelector(selectHeroesLoading);
  const error = useSelector(selectHeroesError);
  const searchTerm = useSelector(selectSearchTerm);
  const filteredHeroes = useSelector(selectFilteredHeroes);

  useEffect(() => {
    dispatch(getHeroesList() as any);
  }, [dispatch]);

  useEffect(() => {
    if (error) {
      Alert.alert('Error', error, [{ text: 'OK' }]);
    }
  }, [error]);

  const handleSearchChange = (text: string) => {
    dispatch(setSearchTerm(text));
  };

  const handleHeroPress = (hero: Hero) => {
    // In a real implementation, this would navigate to hero detail
    logger.info('Navigate to hero detail:', hero.id);
  };

  const renderHero = ({ item }: { item: Hero }) => (
    <HeroCard hero={item} onPress={() => handleHeroPress(item)} />
  );

  const renderEmptyState = () => {
    if (loading) {
      return (
        <View style={styles.centerContainer}>
          <ActivityIndicator size="large" testID="loading-indicator" />
          <Text style={styles.loadingText}>Loading heroes...</Text>
        </View>
      );
    }

    if (error) {
      return (
        <View style={styles.centerContainer}>
          <Text style={styles.errorText}>{error}</Text>
        </View>
      );
    }

    if (searchTerm && filteredHeroes.length === 0) {
      return (
        <View style={styles.centerContainer}>
          <Text style={styles.emptyText}>
            No heroes found for "{searchTerm}"
          </Text>
        </View>
      );
    }

    return (
      <View style={styles.centerContainer}>
        <Text style={styles.emptyText}>No heroes found</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Marvel Heroes</Text>
        <SearchInput
          value={searchTerm}
          onChangeText={handleSearchChange}
          placeholder="Search heroes..."
        />
      </View>

      <FlatList
        data={filteredHeroes}
        renderItem={renderHero}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={renderEmptyState}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingTop: 60,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 16,
    textAlign: 'center',
  },
  listContainer: {
    padding: 16,
    flexGrow: 1,
  },
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 32,
  },
  loadingText: {
    marginTop: 16,
    fontSize: 16,
    color: '#666',
  },
  errorText: {
    fontSize: 16,
    color: '#d32f2f',
    textAlign: 'center',
  },
  emptyText: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
  },
});
