/**
 * Marvel Heroes App - Mobile
 * Clean Architecture Implementation
 */

import React from 'react';
import { StatusBar, StyleSheet, View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './src/store/store';
import { HeroListScreen } from './src/screens/HeroListScreen';

function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <View style={styles.header}>
          <Text style={styles.title}>Marvel Heroes</Text>
        </View>
        <View style={styles.content}>
          <HeroListScreen />
        </View>
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40, // For status bar
  },
  header: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#f8f8f8',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  content: {
    flex: 1,
    padding: 16,
  },
});

export default App;
