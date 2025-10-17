import { Hero } from '../../src/entities/hero';
import { HeroCharacteristics } from '../../src/value-objects/hero-characteristics';

describe('Hero Entity', () => {
  describe('constructor', () => {
    it('should create a valid hero with all required properties', () => {
      // Arrange
      const characteristics = new HeroCharacteristics({
        powers: ['Superhuman strength', 'Flight'],
        weaknesses: ['Arc reactor dependency'],
        affiliations: ['Avengers'],
        firstAppearance: 'Tales of Suspense #39',
        realName: 'Anthony Edward Stark',
        species: 'Human',
        gender: 'Male',
        height: 185,
        weight: 102,
      });

      // Act
      const hero = new Hero({
        id: 'hero-001',
        name: 'Iron Man',
        description: 'Genius billionaire playboy philanthropist',
        imageUrl: 'https://example.com/ironman.jpg',
        characteristics,
      });

      // Assert
      expect(hero.id).toBe('hero-001');
      expect(hero.name).toBe('Iron Man');
      expect(hero.description).toBe('Genius billionaire playboy philanthropist');
      expect(hero.imageUrl).toBe('https://example.com/ironman.jpg');
      expect(hero.characteristics).toBe(characteristics);
      expect(hero.createdAt).toBeInstanceOf(Date);
      expect(hero.updatedAt).toBeInstanceOf(Date);
    });

    it('should throw error when id is empty', () => {
      // Arrange
      const characteristics = new HeroCharacteristics({
        powers: ['Superhuman strength'],
        weaknesses: ['Arc reactor dependency'],
        affiliations: ['Avengers'],
        firstAppearance: 'Tales of Suspense #39',
        realName: 'Anthony Edward Stark',
        species: 'Human',
        gender: 'Male',
        height: 185,
        weight: 102,
      });

      // Act & Assert
      expect(() => {
        new Hero({
          id: '',
          name: 'Iron Man',
          description: 'Genius billionaire playboy philanthropist',
          imageUrl: 'https://example.com/ironman.jpg',
          characteristics,
        });
      }).toThrow('Hero ID cannot be empty');
    });

    it('should throw error when name is empty', () => {
      // Arrange
      const characteristics = new HeroCharacteristics({
        powers: ['Superhuman strength'],
        weaknesses: ['Arc reactor dependency'],
        affiliations: ['Avengers'],
        firstAppearance: 'Tales of Suspense #39',
        realName: 'Anthony Edward Stark',
        species: 'Human',
        gender: 'Male',
        height: 185,
        weight: 102,
      });

      // Act & Assert
      expect(() => {
        new Hero({
          id: 'hero-001',
          name: '',
          description: 'Genius billionaire playboy philanthropist',
          imageUrl: 'https://example.com/ironman.jpg',
          characteristics,
        });
      }).toThrow('Hero name cannot be empty');
    });

    it('should throw error when description is empty', () => {
      // Arrange
      const characteristics = new HeroCharacteristics({
        powers: ['Superhuman strength'],
        weaknesses: ['Arc reactor dependency'],
        affiliations: ['Avengers'],
        firstAppearance: 'Tales of Suspense #39',
        realName: 'Anthony Edward Stark',
        species: 'Human',
        gender: 'Male',
        height: 185,
        weight: 102,
      });

      // Act & Assert
      expect(() => {
        new Hero({
          id: 'hero-001',
          name: 'Iron Man',
          description: '',
          imageUrl: 'https://example.com/ironman.jpg',
          characteristics,
        });
      }).toThrow('Hero description cannot be empty');
    });

    it('should throw error when imageUrl is invalid', () => {
      // Arrange
      const characteristics = new HeroCharacteristics({
        powers: ['Superhuman strength'],
        weaknesses: ['Arc reactor dependency'],
        affiliations: ['Avengers'],
        firstAppearance: 'Tales of Suspense #39',
        realName: 'Anthony Edward Stark',
        species: 'Human',
        gender: 'Male',
        height: 185,
        weight: 102,
      });

      // Act & Assert
      expect(() => {
        new Hero({
          id: 'hero-001',
          name: 'Iron Man',
          description: 'Genius billionaire playboy philanthropist',
          imageUrl: 'invalid-url',
          characteristics,
        });
      }).toThrow('Hero imageUrl must be a valid URL');
    });

    it('should throw error when name exceeds maximum length', () => {
      // Arrange
      const characteristics = new HeroCharacteristics({
        powers: ['Superhuman strength'],
        weaknesses: ['Arc reactor dependency'],
        affiliations: ['Avengers'],
        firstAppearance: 'Tales of Suspense #39',
        realName: 'Anthony Edward Stark',
        species: 'Human',
        gender: 'Male',
        height: 185,
        weight: 102,
      });
      const longName = 'A'.repeat(101); // Exceeds 100 character limit

      // Act & Assert
      expect(() => {
        new Hero({
          id: 'hero-001',
          name: longName,
          description: 'Genius billionaire playboy philanthropist',
          imageUrl: 'https://example.com/ironman.jpg',
          characteristics,
        });
      }).toThrow('Hero name cannot exceed 100 characters');
    });

    it('should throw error when description exceeds maximum length', () => {
      // Arrange
      const characteristics = new HeroCharacteristics({
        powers: ['Superhuman strength'],
        weaknesses: ['Arc reactor dependency'],
        affiliations: ['Avengers'],
        firstAppearance: 'Tales of Suspense #39',
        realName: 'Anthony Edward Stark',
        species: 'Human',
        gender: 'Male',
        height: 185,
        weight: 102,
      });
      const longDescription = 'A'.repeat(1001); // Exceeds 1000 character limit

      // Act & Assert
      expect(() => {
        new Hero({
          id: 'hero-001',
          name: 'Iron Man',
          description: longDescription,
          imageUrl: 'https://example.com/ironman.jpg',
          characteristics,
        });
      }).toThrow('Hero description cannot exceed 1000 characters');
    });
  });

  describe('update', () => {
    it('should update hero properties and update timestamp', async () => {
      // Arrange
      const characteristics = new HeroCharacteristics({
        powers: ['Superhuman strength'],
        weaknesses: ['Arc reactor dependency'],
        affiliations: ['Avengers'],
        firstAppearance: 'Tales of Suspense #39',
        realName: 'Anthony Edward Stark',
        species: 'Human',
        gender: 'Male',
        height: 185,
        weight: 102,
      });

      const hero = new Hero({
        id: 'hero-001',
        name: 'Iron Man',
        description: 'Genius billionaire playboy philanthropist',
        imageUrl: 'https://example.com/ironman.jpg',
        characteristics,
      });

      const originalUpdatedAt = hero.updatedAt;

      // Act - Add small delay to ensure timestamp difference
      await new Promise(resolve => setTimeout(resolve, 10));
      hero.update({
        name: 'Iron Man (Updated)',
        description: 'Updated description',
      });

      // Assert
      expect(hero.name).toBe('Iron Man (Updated)');
      expect(hero.description).toBe('Updated description');
      expect(hero.updatedAt.getTime()).toBeGreaterThan(originalUpdatedAt.getTime());
    });

    it('should throw error when imageUrl is empty', () => {
      const characteristics = new HeroCharacteristics({
        powers: ['Superhuman strength'],
        weaknesses: ['Arc reactor dependency'],
        affiliations: ['Avengers'],
        firstAppearance: 'Tales of Suspense #39',
        realName: 'Anthony Edward Stark',
        species: 'Human',
        gender: 'Male',
        height: 185,
        weight: 102,
      });

      expect(() => {
        new Hero({
          id: 'hero-001',
          name: 'Iron Man',
          description: 'Genius billionaire playboy philanthropist',
          imageUrl: '',
          characteristics,
        });
      }).toThrow('Hero imageUrl cannot be empty');
    });

    it('should allow null characteristics (validation handled by HeroCharacteristics)', () => {
      // Note: Characteristics validation is handled by the HeroCharacteristics class itself
      // The Hero entity doesn't validate characteristics directly
      expect(() => {
        new Hero({
          id: 'hero-001',
          name: 'Iron Man',
          description: 'Genius billionaire playboy philanthropist',
          imageUrl: 'https://example.com/ironman.jpg',
          characteristics: null as any,
        });
      }).not.toThrow();
    });
  });

  describe('update method edge cases', () => {
    it('should handle updating only imageUrl', async () => {
      const characteristics = new HeroCharacteristics({
        powers: ['Superhuman strength'],
        weaknesses: ['Arc reactor dependency'],
        affiliations: ['Avengers'],
        firstAppearance: 'Tales of Suspense #39',
        realName: 'Anthony Edward Stark',
        species: 'Human',
        gender: 'Male',
        height: 185,
        weight: 102,
      });

      const hero = new Hero({
        id: 'hero-001',
        name: 'Iron Man',
        description: 'Genius billionaire playboy philanthropist',
        imageUrl: 'https://example.com/ironman.jpg',
        characteristics,
      });

      const originalUpdatedAt = hero.updatedAt;
      
      // Act - Add small delay to ensure timestamp difference
      await new Promise(resolve => setTimeout(resolve, 10));
      hero.update({
        imageUrl: 'https://example.com/new-ironman.jpg',
      });

      // Assert
      expect(hero.imageUrl).toBe('https://example.com/new-ironman.jpg');
      expect(hero.name).toBe('Iron Man'); // Should remain unchanged
      expect(hero.description).toBe('Genius billionaire playboy philanthropist'); // Should remain unchanged
      expect(hero.updatedAt.getTime()).toBeGreaterThan(originalUpdatedAt.getTime());
    });

    it('should handle updating only characteristics', async () => {
      const characteristics = new HeroCharacteristics({
        powers: ['Superhuman strength'],
        weaknesses: ['Arc reactor dependency'],
        affiliations: ['Avengers'],
        firstAppearance: 'Tales of Suspense #39',
        realName: 'Anthony Edward Stark',
        species: 'Human',
        gender: 'Male',
        height: 185,
        weight: 102,
      });

      const newCharacteristics = new HeroCharacteristics({
        powers: ['Superhuman strength', 'Flight'],
        weaknesses: ['Arc reactor dependency'],
        affiliations: ['Avengers', 'S.H.I.E.L.D.'],
        firstAppearance: 'Tales of Suspense #39',
        realName: 'Anthony Edward Stark',
        species: 'Human',
        gender: 'Male',
        height: 185,
        weight: 102,
      });

      const hero = new Hero({
        id: 'hero-001',
        name: 'Iron Man',
        description: 'Genius billionaire playboy philanthropist',
        imageUrl: 'https://example.com/ironman.jpg',
        characteristics,
      });

      const originalUpdatedAt = hero.updatedAt;
      
      // Act - Add small delay to ensure timestamp difference
      await new Promise(resolve => setTimeout(resolve, 10));
      hero.update({
        characteristics: newCharacteristics,
      });

      // Assert
      expect(hero.characteristics).toBe(newCharacteristics);
      expect(hero.name).toBe('Iron Man'); // Should remain unchanged
      expect(hero.updatedAt.getTime()).toBeGreaterThan(originalUpdatedAt.getTime());
    });
  });
});
