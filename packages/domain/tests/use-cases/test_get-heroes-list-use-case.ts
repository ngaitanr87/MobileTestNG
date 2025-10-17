import { GetHeroesListUseCase } from '../../src/use-cases/get-heroes-list-use-case';
import { IHeroRepository } from '../../src/interfaces/i-hero-repository';
import { Hero } from '../../src/entities/hero';

describe('GetHeroesListUseCase', () => {
  let useCase: GetHeroesListUseCase;
  let mockRepository: jest.Mocked<IHeroRepository>;

  beforeEach(() => {
    mockRepository = {
      getAll: jest.fn(),
      getById: jest.fn(),
      search: jest.fn(),
    };
    useCase = new GetHeroesListUseCase(mockRepository);
  });

  describe('execute', () => {
    it('should return all heroes when no search term provided', async () => {
      // Arrange
      const mockHeroes: Hero[] = [
        {
          id: 'hero-001',
          name: 'Iron Man',
          description: 'Genius billionaire playboy philanthropist',
          imageUrl: 'https://example.com/ironman.jpg',
          characteristics: {
            powers: ['Superhuman strength', 'Flight'],
            weaknesses: ['Arc reactor dependency'],
            affiliations: ['Avengers'],
            firstAppearance: 'Tales of Suspense #39',
            realName: 'Anthony Edward Stark',
            species: 'Human',
            gender: 'Male',
            height: 185,
            weight: 102,
          },
          createdAt: new Date('2025-01-27T00:00:00Z'),
          updatedAt: new Date('2025-01-27T00:00:00Z'),
        },
      ];
      mockRepository.getAll.mockResolvedValue(mockHeroes);

      // Act
      const result = await useCase.execute();

      // Assert
      expect(result).toEqual(mockHeroes);
      expect(mockRepository.getAll).toHaveBeenCalledTimes(1);
    });

    it('should return filtered heroes when search term provided', async () => {
      // Arrange
      const searchTerm = 'Iron';
      const mockHeroes: Hero[] = [
        {
          id: 'hero-001',
          name: 'Iron Man',
          description: 'Genius billionaire playboy philanthropist',
          imageUrl: 'https://example.com/ironman.jpg',
          characteristics: {
            powers: ['Superhuman strength', 'Flight'],
            weaknesses: ['Arc reactor dependency'],
            affiliations: ['Avengers'],
            firstAppearance: 'Tales of Suspense #39',
            realName: 'Anthony Edward Stark',
            species: 'Human',
            gender: 'Male',
            height: 185,
            weight: 102,
          },
          createdAt: new Date('2025-01-27T00:00:00Z'),
          updatedAt: new Date('2025-01-27T00:00:00Z'),
        },
      ];
      mockRepository.search.mockResolvedValue(mockHeroes);

      // Act
      const result = await useCase.execute(searchTerm);

      // Assert
      expect(result).toEqual(mockHeroes);
      expect(mockRepository.search).toHaveBeenCalledWith(searchTerm);
      expect(mockRepository.getAll).not.toHaveBeenCalled();
    });

    it('should handle empty search results', async () => {
      // Arrange
      const searchTerm = 'NonExistentHero';
      mockRepository.search.mockResolvedValue([]);

      // Act
      const result = await useCase.execute(searchTerm);

      // Assert
      expect(result).toEqual([]);
      expect(mockRepository.search).toHaveBeenCalledWith(searchTerm);
    });

    it('should handle repository errors', async () => {
      // Arrange
      const error = new Error('Repository error');
      mockRepository.getAll.mockRejectedValue(error);

      // Act & Assert
      await expect(useCase.execute()).rejects.toThrow('Repository error');
    });
  });
});
