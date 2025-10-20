import React from 'react';
import {Provider} from 'react-redux';
import {configureStore} from '@reduxjs/toolkit';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {HeroesListScreen} from './screens/heroes-list-screen';
import {heroesSlice} from '@application/slices/heroes-slice';
import {logger} from '@shared/logging';

// Configure Redux store
const store = configureStore({
  reducer: {
    heroes: heroesSlice.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false, // Disable for HeroCharacteristics objects
      immutableCheck: false,
    }),
});

// Log app initialization
logger.info('Marvel Heroes Mobile App starting...');

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>🦸‍♂️ Marvel Heroes</Text>
          <Text style={styles.subtitle}>Discover your favorite characters</Text>
        </View>
        <View style={styles.content}>
          <HeroesListScreen />
        </View>
      </SafeAreaView>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1e3c72',
  },
  header: {
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: '#fff',
    opacity: 0.9,
  },
  content: {
    flex: 1,
    padding: 16,
  },
});

export default App;
