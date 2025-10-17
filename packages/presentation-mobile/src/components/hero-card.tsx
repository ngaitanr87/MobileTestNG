import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { HeroData as Hero } from '@shared/types/hero';

interface HeroCardProps {
  hero: Hero;
  onPress: () => void;
}

export const HeroCard: React.FC<HeroCardProps> = ({ hero, onPress }) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      accessibilityRole="button"
      accessibilityLabel={`View details for ${hero.name}`}
    >
      <Image
        source={{ uri: hero.imageUrl }}
        style={styles.image}
        resizeMode="cover"
      />
      <View style={styles.content}>
        <Text style={styles.name} numberOfLines={1}>
          {hero.name}
        </Text>
        <Text style={styles.description} numberOfLines={2}>
          {hero.description}
        </Text>
        <View style={styles.characteristics}>
          <Text style={styles.characteristicText}>
            {hero.characteristics.species} • {hero.characteristics.gender}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 12,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 200,
  },
  content: {
    padding: 16,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
    marginBottom: 12,
  },
  characteristics: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  characteristicText: {
    fontSize: 12,
    color: '#888',
    fontStyle: 'italic',
  },
});
