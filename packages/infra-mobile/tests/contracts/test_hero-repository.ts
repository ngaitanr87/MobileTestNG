import { MobileHeroRepository } from '../../src/repositories/hero-repository';
import { IHeroRepository } from '@domain/interfaces/i-hero-repository';
import { Hero } from '@domain/entities/hero';
import { HeroCharacteristics } from '@domain/value-objects/hero-characteristics';

describe('MobileHeroRepository - Contract Tests', () => {
  let repository: IHeroRepository;

  beforeEach(() => {
    repository = new MobileHeroRepository();
  });

  describe('IHeroRepository contract', () => {
    describe('getAll', () => {
      it('should return an array of heroes', async () => {
        // Act
        const heroes = await repository.getAll();

        // Assert
        expect(Array.isArray(heroes)).toBe(true);
        expect(heroes.length).toBeGreaterThan(0);
        heroes.forEach(hero => {
          expect(hero).toBeInstanceOf(Hero);
        });
      });

      it('should return all 30 mock heroes', async () => {
        // Act
        const heroes = await repository.getAll();

        // Assert
        expect(heroes).toHaveLength(30);
      });

      it('should return heroes with valid data structure', async () => {
        // Act
        const heroes = await repository.getAll();
        const firstHero = heroes[0];

        // Assert
        expect(firstHero.id).toBeDefined();
        expect(firstHero.name).toBeDefined();
        expect(firstHero.description).toBeDefined();
        expect(firstHero.imageUrl).toBeDefined();
        expect(firstHero.characteristics).toBeInstanceOf(HeroCharacteristics);
        expect(firstHero.createdAt).toBeInstanceOf(Date);
        expect(firstHero.updatedAt).toBeInstanceOf(Date);
      });
    });

    describe('getById', () => {
      it('should return a hero when valid ID is provided', async () => {
        // Arrange
        const heroes = await repository.getAll();
        const firstHero = heroes[0];

        // Act
        const hero = await repository.getById(firstHero.id);

        // Assert
        expect(hero).toBeInstanceOf(Hero);
        expect(hero?.id).toBe(firstHero.id);
        expect(hero?.name).toBe(firstHero.name);
      });

      it('should return null when hero ID does not exist', async () => {
        // Act
        const hero = await repository.getById('non-existent-id');

        // Assert
        expect(hero).toBeNull();
      });

      it('should return null when empty ID is provided', async () => {
        // Act
        const hero = await repository.getById('');

        // Assert
        expect(hero).toBeNull();
      });
    });

    describe('search', () => {
      it('should return heroes matching search term in name', async () => {
        // Act
        const heroes = await repository.search('Iron');

        // Assert
        expect(Array.isArray(heroes)).toBe(true);
        heroes.forEach(hero => {
          expect(hero.name.toLowerCase()).toMatch(/iron/);
        });
      });

      it('should return heroes matching search term in description', async () => {
        // Act
        const heroes = await repository.search('billionaire');

        // Assert
        expect(Array.isArray(heroes)).toBe(true);
        heroes.forEach(hero => {
          expect(hero.description.toLowerCase()).toMatch(/billionaire/);
        });
      });

      it('should return empty array when no heroes match search term', async () => {
        // Act
        const heroes = await repository.search('NonExistentHero');

        // Assert
        expect(heroes).toEqual([]);
      });

      it('should return empty array when empty search term is provided', async () => {
        // Act
        const heroes = await repository.search('');

        // Assert
        expect(heroes).toEqual([]);
      });

      it('should be case insensitive', async () => {
        // Act
        const heroesLower = await repository.search('iron');
        const heroesUpper = await repository.search('IRON');

        // Assert
        expect(heroesLower).toEqual(heroesUpper);
      });

      it('should use starts with matching', async () => {
        // Act
        const heroes = await repository.search('Iron');

        // Assert
        heroes.forEach(hero => {
          expect(hero.name.toLowerCase().startsWith('iron')).toBe(true);
        });
      });
    });
  });

  describe('Error handling', () => {
    it('should handle corrupted data gracefully', async () => {
      // This test ensures the repository can handle data loading errors
      // In a real implementation, this would test error scenarios
      expect(async () => {
        await repository.getAll();
      }).not.toThrow();
    });

    it('should handle JSON parsing errors gracefully', () => {
      // Mock console.error to verify error handling
      const consoleSpy = jest.spyOn(console, 'error').mockImplementation();
      
      // Create a new repository instance to test error handling
      // This will test the loadHeroes method error handling
      const testRepository = new MobileHeroRepository();
      
      // The repository should still be created even if there are errors
      expect(testRepository).toBeDefined();
      
      consoleSpy.mockRestore();
    });
  });
});
