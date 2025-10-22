import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  FlatList,
  TextInput,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';

// Simple hero data (inline for demo)
const HEROES_DATA = [
  {
    id: '1',
    name: 'Spider-Man',
    description: 'Friendly neighborhood superhero with spider-like abilities',
    imageUrl: 'https://via.placeholder.com/150/FF6B6B/FFFFFF?text=SM',
    characteristics: {
      powers: ['Spider-sense', 'Wall-crawling', 'Super strength'],
      weaknesses: ['Ethyl chloride', 'Pesticides'],
      affiliations: ['Avengers', 'New Warriors'],
      firstAppearance: '1962',
      realName: 'Peter Parker',
      species: 'Human',
      gender: 'Male',
      height: '5\'10"',
      weight: '167 lbs',
    },
  },
  {
    id: '2',
    name: 'Iron Man',
    description: 'Genius billionaire playboy philanthropist with advanced armor',
    imageUrl: 'https://via.placeholder.com/150/4ECDC4/FFFFFF?text=IM',
    characteristics: {
      powers: ['Powered armor', 'Genius intellect', 'Advanced weapons'],
      weaknesses: ['Arc reactor dependency', 'Alcoholism'],
      affiliations: ['Avengers', 'Stark Industries'],
      firstAppearance: '1963',
      realName: 'Tony Stark',
      species: 'Human',
      gender: 'Male',
      height: '6\'1"',
      weight: '225 lbs',
    },
  },
  {
    id: '3',
    name: 'Captain America',
    description: 'Super-soldier and symbol of American ideals',
    imageUrl: 'https://via.placeholder.com/150/45B7D1/FFFFFF?text=CA',
    characteristics: {
      powers: ['Super strength', 'Enhanced reflexes', 'Shield mastery'],
      weaknesses: ['Moral code', 'Outdated knowledge'],
      affiliations: ['Avengers', 'S.H.I.E.L.D.'],
      firstAppearance: '1941',
      realName: 'Steve Rogers',
      species: 'Human',
      gender: 'Male',
      height: '6\'2"',
      weight: '220 lbs',
    },
  },
  {
    id: '4',
    name: 'Black Widow',
    description: 'Master spy and assassin with exceptional combat skills',
    imageUrl: 'https://via.placeholder.com/150/96CEB4/FFFFFF?text=BW',
    characteristics: {
      powers: ['Master spy', 'Combat expert', 'Acrobatics'],
      weaknesses: ['No superpowers', 'Emotional trauma'],
      affiliations: ['Avengers', 'S.H.I.E.L.D.'],
      firstAppearance: '1964',
      realName: 'Natasha Romanoff',
      species: 'Human',
      gender: 'Female',
      height: '5\'7"',
      weight: '125 lbs',
    },
  },
  {
    id: '5',
    name: 'Thor',
    description: 'God of Thunder from Asgard with immense power',
    imageUrl: 'https://via.placeholder.com/150/FFEAA7/FFFFFF?text=TH',
    characteristics: {
      powers: ['Weather control', 'Super strength', 'Mjolnir'],
      weaknesses: ['Magic', 'Loki\'s schemes'],
      affiliations: ['Avengers', 'Asgard'],
      firstAppearance: '1962',
      realName: 'Thor Odinson',
      species: 'Asgardian',
      gender: 'Male',
      height: '6\'6"',
      weight: '640 lbs',
    },
  },
];

interface Hero {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  characteristics: {
    powers: string[];
    weaknesses: string[];
    affiliations: string[];
    firstAppearance: string;
    realName: string;
    species: string;
    gender: string;
    height: string;
    weight: string;
  };
}

const HeroCard = ({ hero, onPress }: { hero: Hero; onPress: () => void }) => (
  <TouchableOpacity style={styles.heroCard} onPress={onPress}>
    <Image source={{ uri: hero.imageUrl }} style={styles.heroImage} />
    <View style={styles.heroInfo}>
      <Text style={styles.heroName}>{hero.name}</Text>
      <Text style={styles.heroDescription} numberOfLines={2}>
        {hero.description}
      </Text>
      <Text style={styles.heroRealName}>Real Name: {hero.characteristics.realName}</Text>
    </View>
  </TouchableOpacity>
);

const App = () => {
  const [heroes, setHeroes] = useState<Hero[]>(HEROES_DATA);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedHero, setSelectedHero] = useState<Hero | null>(null);

  const filteredHeroes = heroes.filter(hero =>
    hero.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    hero.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleHeroPress = (hero: Hero) => {
    setSelectedHero(hero);
  };

  const handleBackToList = () => {
    setSelectedHero(null);
  };

  const handleAddToFavorites = (hero: Hero) => {
    Alert.alert('Added to Favorites', `${hero.name} has been added to your favorites!`);
  };

  if (selectedHero) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={handleBackToList} style={styles.backButton}>
            <Text style={styles.backButtonText}>← Back</Text>
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Hero Details</Text>
        </View>
        
        <View style={styles.heroDetailContainer}>
          <Image source={{ uri: selectedHero.imageUrl }} style={styles.heroDetailImage} />
          <Text style={styles.heroDetailName}>{selectedHero.name}</Text>
          <Text style={styles.heroDetailDescription}>{selectedHero.description}</Text>
          
          <View style={styles.characteristicsContainer}>
            <Text style={styles.characteristicsTitle}>Characteristics:</Text>
            <Text style={styles.characteristicItem}>Real Name: {selectedHero.characteristics.realName}</Text>
            <Text style={styles.characteristicItem}>Species: {selectedHero.characteristics.species}</Text>
            <Text style={styles.characteristicItem}>Gender: {selectedHero.characteristics.gender}</Text>
            <Text style={styles.characteristicItem}>Height: {selectedHero.characteristics.height}</Text>
            <Text style={styles.characteristicItem}>Weight: {selectedHero.characteristics.weight}</Text>
            <Text style={styles.characteristicItem}>First Appearance: {selectedHero.characteristics.firstAppearance}</Text>
          </View>

          <View style={styles.powersContainer}>
            <Text style={styles.powersTitle}>Powers:</Text>
            {selectedHero.characteristics.powers.map((power, index) => (
              <Text key={index} style={styles.powerItem}>• {power}</Text>
            ))}
          </View>

          <TouchableOpacity 
            style={styles.favoriteButton}
            onPress={() => handleAddToFavorites(selectedHero)}
          >
            <Text style={styles.favoriteButtonText}>⭐ Add to Favorites</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Marvel Heroes</Text>
      </View>
      
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search heroes..."
          value={searchQuery}
          onChangeText={setSearchQuery}
          placeholderTextColor="#999"
        />
      </View>

      <FlatList
        data={filteredHeroes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <HeroCard hero={item} onPress={() => handleHeroPress(item)} />
        )}
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a2e',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#16213e',
    borderBottomWidth: 1,
    borderBottomColor: '#0f3460',
  },
  backButton: {
    marginRight: 15,
  },
  backButtonText: {
    color: '#4ECDC4',
    fontSize: 16,
    fontWeight: 'bold',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  searchContainer: {
    padding: 20,
    backgroundColor: '#16213e',
  },
  searchInput: {
    backgroundColor: '#0f3460',
    borderRadius: 10,
    padding: 15,
    fontSize: 16,
    color: '#fff',
    borderWidth: 1,
    borderColor: '#4ECDC4',
  },
  listContainer: {
    padding: 20,
  },
  heroCard: {
    flexDirection: 'row',
    backgroundColor: '#16213e',
    borderRadius: 15,
    padding: 15,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#0f3460',
    shadowColor: '#4ECDC4',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  heroImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 15,
  },
  heroInfo: {
    flex: 1,
    justifyContent: 'center',
  },
  heroName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4ECDC4',
    marginBottom: 5,
  },
  heroDescription: {
    fontSize: 14,
    color: '#ccc',
    marginBottom: 5,
  },
  heroRealName: {
    fontSize: 12,
    color: '#999',
    fontStyle: 'italic',
  },
  heroDetailContainer: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
  },
  heroDetailImage: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 20,
  },
  heroDetailName: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#4ECDC4',
    marginBottom: 10,
    textAlign: 'center',
  },
  heroDetailDescription: {
    fontSize: 16,
    color: '#ccc',
    textAlign: 'center',
    marginBottom: 30,
    lineHeight: 24,
  },
  characteristicsContainer: {
    width: '100%',
    backgroundColor: '#16213e',
    borderRadius: 15,
    padding: 20,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#0f3460',
  },
  characteristicsTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#4ECDC4',
    marginBottom: 15,
  },
  characteristicItem: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 8,
  },
  powersContainer: {
    width: '100%',
    backgroundColor: '#16213e',
    borderRadius: 15,
    padding: 20,
    marginBottom: 30,
    borderWidth: 1,
    borderColor: '#0f3460',
  },
  powersTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#4ECDC4',
    marginBottom: 15,
  },
  powerItem: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 5,
  },
  favoriteButton: {
    backgroundColor: '#4ECDC4',
    borderRadius: 25,
    paddingVertical: 15,
    paddingHorizontal: 30,
    alignItems: 'center',
  },
  favoriteButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1a1a2e',
  },
});

export default App;
