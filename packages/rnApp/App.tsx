/**
 * Marvel Heroes App - Mobile
 * Clean Architecture Implementation
 */

import React from 'react';
import { StatusBar, StyleSheet, View, SafeAreaView } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './src/store/store';
import { HeroListScreen } from './src/screens/HeroListScreen';

function App() {
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <View style={styles.content}>
          <HeroListScreen />
        </View>
      </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
  },
});

export default App;

