import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export function HeroCard({ hero }: { hero: any }) {
  return (
    <View style={styles.card}>
      <Text style={styles.name}>{hero.name || 'Unknown Hero'}</Text>
      <Text style={styles.description} numberOfLines={2}>
        {hero.description || 'No description available'}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    padding: 16,
    marginBottom: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#333',
  },
  description: {
    fontSize: 14,
    color: '#666',
  },
});
