# Data Model: Marvel Heroes App

**Created**: 2025-01-27  
**Feature**: Marvel Heroes App  
**Purpose**: Define entities, relationships, and data structures

## Entities

### Hero
Represents a Marvel character with comprehensive information.

**Attributes**:
- `id: string` - Unique identifier (UUID)
- `name: string` - Character name (required, max 100 chars)
- `description: string` - Character description (required, max 1000 chars)
- `imageUrl: string` - Character image URL (required, valid URL)
- `characteristics: HeroCharacteristics` - Character traits and abilities
- `createdAt: Date` - Creation timestamp
- `updatedAt: Date` - Last update timestamp

**Validation Rules**:
- Name must be non-empty and unique
- Description must be non-empty
- Image URL must be valid and accessible
- Characteristics must be valid object

**Relationships**:
- One-to-many with Comic
- One-to-many with Movie
- One-to-many with Favorite

### HeroCharacteristics
Value object containing character traits and abilities.

**Attributes**:
- `powers: string[]` - List of superpowers
- `weaknesses: string[]` - List of weaknesses
- `affiliations: string[]` - Team/organization affiliations
- `firstAppearance: string` - First comic appearance
- `realName: string` - Secret identity
- `species: string` - Character species
- `gender: string` - Character gender
- `height: number` - Height in cm
- `weight: number` - Weight in kg

**Validation Rules**:
- Powers array cannot be empty
- All string fields must be non-empty
- Height and weight must be positive numbers

### Comic
Represents a comic book featuring a hero.

**Attributes**:
- `id: string` - Unique identifier (UUID)
- `title: string` - Comic title (required, max 200 chars)
- `publicationDate: Date` - Publication date
- `coverImageUrl: string` - Cover image URL (required, valid URL)
- `description: string` - Comic description (max 500 chars)
- `issueNumber: number` - Issue number
- `series: string` - Series name
- `heroId: string` - Reference to Hero (required)

**Validation Rules**:
- Title must be non-empty
- Publication date cannot be in the future
- Cover image URL must be valid
- Issue number must be positive
- Hero ID must reference existing Hero

**Relationships**:
- Many-to-one with Hero

### Movie
Represents a movie featuring a hero.

**Attributes**:
- `id: string` - Unique identifier (UUID)
- `title: string` - Movie title (required, max 200 chars)
- `releaseDate: Date` - Release date
- `posterImageUrl: string` - Poster image URL (required, valid URL)
- `description: string` - Movie description (max 1000 chars)
- `director: string` - Director name
- `runtime: number` - Runtime in minutes
- `rating: string` - MPAA rating
- `heroId: string` - Reference to Hero (required)

**Validation Rules**:
- Title must be non-empty
- Release date cannot be in the future
- Poster image URL must be valid
- Runtime must be positive
- Rating must be valid MPAA rating
- Hero ID must reference existing Hero

**Relationships**:
- Many-to-one with Hero

### Favorite
Represents a user's favorite hero.

**Attributes**:
- `id: string` - Unique identifier (UUID)
- `heroId: string` - Reference to Hero (required)
- `userId: string` - User identifier (required)
- `createdAt: Date` - When favorited
- `updatedAt: Date` - Last update timestamp

**Validation Rules**:
- Hero ID must reference existing Hero
- User ID must be non-empty
- Cannot duplicate favorite (heroId + userId unique)

**Relationships**:
- Many-to-one with Hero

## Data Relationships

```
Hero (1) ←→ (N) Comic
Hero (1) ←→ (N) Movie  
Hero (1) ←→ (N) Favorite
```

## Mock Data Structure

### Hero Mock Data
- 30 unique heroes with diverse characteristics
- Each hero has 5-15 associated comics
- Each hero has 1-5 associated movies
- All images use placeholder services (e.g., picsum.photos)
- Realistic Marvel character data

### Comic Mock Data
- Mix of classic and modern comics
- Publication dates from 1960s to present
- Various series and issue numbers
- Realistic comic titles and descriptions

### Movie Mock Data
- MCU and non-MCU movies
- Release dates from 2000s to present
- Various directors and ratings
- Realistic movie titles and descriptions

## Data Access Patterns

### Repository Interfaces
- `IHeroRepository` - Hero CRUD operations
- `IComicRepository` - Comic queries by hero
- `IMovieRepository` - Movie queries by hero
- `IFavoriteRepository` - Favorite management

### Query Patterns
- Get all heroes (paginated)
- Search heroes by name/description
- Get hero details with comics/movies
- Get user favorites
- Toggle favorite status

## Federated Data Layer Architecture

### Shared Data Package (`packages/data-shared`)
```
data-shared/
├── src/
│   ├── contracts/           # Shared data contracts
│   │   ├── http-client.interface.ts
│   │   ├── storage-repository.interface.ts
│   │   └── hero-repository.interface.ts
│   ├── http/               # Shared axios HTTP client
│   │   └── axios-http-client.ts
│   ├── mappers/            # Shared data mappers
│   │   ├── hero.mapper.ts
│   │   ├── comic.mapper.ts
│   │   └── movie.mapper.ts
│   └── types/              # Shared DTOs and interfaces
│       ├── hero.dto.ts
│       ├── comic.dto.ts
│       ├── movie.dto.ts
│       └── common.types.ts
└── tests/
```

### Mobile Data Package (`packages/data-mobile`)
```
data-mobile/
├── src/
│   ├── adapters/           # Platform-agnostic adapters
│   │   ├── hero-repository.adapter.ts
│   │   └── favorite-repository.adapter.ts
│   ├── implementations/     # Mobile-specific implementations (storage only)
│   │   ├── async-storage.repository.ts
│   │   └── mobile-hero-repository.ts
│   └── sources/           # Data source implementations
│       ├── mock-heroes.source.ts
│       └── mock-comics.source.ts
└── tests/
```

### Web Data Package (`packages/data-web`)
```
data-web/
├── src/
│   ├── adapters/           # Platform-agnostic adapters
│   │   ├── hero-repository.adapter.ts
│   │   └── favorite-repository.adapter.ts
│   ├── implementations/     # Web-specific implementations (storage only)
│   │   ├── local-storage.repository.ts
│   │   └── web-hero-repository.ts
│   └── sources/           # Data source implementations
│       ├── mock-heroes.source.ts
│       └── mock-comics.source.ts
└── tests/
```

### Data Transfer Objects (DTOs)

#### HeroDto
```typescript
interface HeroDto {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  thumbnailUrl: string;
  comics: ComicDto[];
  movies: MovieDto[];
  characteristics: HeroCharacteristicsDto;
  createdAt: string;
  updatedAt: string;
}
```

#### ComicDto
```typescript
interface ComicDto {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  publishedDate: string;
  pageCount: number;
  price: number;
}
```

#### MovieDto
```typescript
interface MovieDto {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  releaseDate: string;
  duration: number;
  rating: number;
}
```

### Shared Implementations

#### Shared Axios HTTP Client
```typescript
// packages/data-shared/src/http/axios-http-client.ts
export class AxiosHttpClient implements HttpClient {
  constructor(private axiosInstance: AxiosInstance) {}
  
  async get<T>(url: string, config?: RequestConfig): Promise<T> {
    const response = await this.axiosInstance.get(url, config);
    return response.data;
  }
  
  async post<T>(url: string, data: any, config?: RequestConfig): Promise<T> {
    const response = await this.axiosInstance.post(url, data, config);
    return response.data;
  }
  
  async put<T>(url: string, data: any, config?: RequestConfig): Promise<T> {
    const response = await this.axiosInstance.put(url, data, config);
    return response.data;
  }
  
  async delete<T>(url: string, config?: RequestConfig): Promise<T> {
    const response = await this.axiosInstance.delete(url, config);
    return response.data;
  }
}
```

#### Shared HTTP Client Interface
```typescript
// packages/data-shared/src/http/http-client.interface.ts
export interface HttpClient {
  get<T>(url: string, config?: RequestConfig): Promise<T>;
  post<T>(url: string, data: any, config?: RequestConfig): Promise<T>;
  put<T>(url: string, data: any, config?: RequestConfig): Promise<T>;
  delete<T>(url: string, config?: RequestConfig): Promise<T>;
}

export interface RequestConfig {
  headers?: Record<string, string>;
  timeout?: number;
  params?: Record<string, any>;
}
```

### Platform-Specific Implementations

#### Mobile Storage Repository
```typescript
// packages/data-mobile/src/implementations/async-storage.repository.ts
export class AsyncStorageRepository implements StorageRepository {
  async get<T>(key: string): Promise<T | null> {
    try {
      const value = await AsyncStorage.getItem(key);
      return value ? JSON.parse(value) : null;
    } catch (error) {
      console.error('Storage get error:', error);
      return null;
    }
  }
  
  async set<T>(key: string, value: T): Promise<void> {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error('Storage set error:', error);
      throw error;
    }
  }
}
```

#### Web Storage Repository
```typescript
// packages/data-web/src/implementations/local-storage.repository.ts
export class LocalStorageRepository implements StorageRepository {
  async get<T>(key: string): Promise<T | null> {
    try {
      const value = localStorage.getItem(key);
      return value ? JSON.parse(value) : null;
    } catch (error) {
      console.error('Storage get error:', error);
      return null;
    }
  }
  
  async set<T>(key: string, value: T): Promise<void> {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error('Storage set error:', error);
      throw error;
    }
  }
}
```

### Data Adapters

#### Mobile Hero Repository Adapter
```typescript
// packages/data-mobile/src/adapters/hero-repository.adapter.ts
import { HttpClient } from '@data-shared/contracts/http-client.interface';
import { HeroMapper } from '@data-shared/mappers/hero.mapper';
import { StorageRepository } from '@data-shared/contracts/storage-repository.interface';
import { HeroRepository } from '@data-shared/contracts/hero-repository.interface';

export class MobileHeroRepositoryAdapter implements HeroRepository {
  constructor(
    private httpClient: HttpClient,           // From data-shared
    private storageRepository: StorageRepository, // Mobile-specific
    private heroMapper: HeroMapper            // From data-shared
  ) {}
  
  async getHeroes(): Promise<Hero[]> {
    const cacheKey = 'heroes_list';
    const cached = await this.storageRepository.get<Hero[]>(cacheKey);
    
    if (cached) {
      return cached;
    }
    
    const response = await this.httpClient.get<HeroDto[]>('/api/heroes');
    const heroes = response.map(dto => this.heroMapper.toDomain(dto));
    
    await this.storageRepository.set(cacheKey, heroes);
    return heroes;
  }
  
  async getHeroById(id: string): Promise<Hero | null> {
    const cacheKey = `hero_${id}`;
    const cached = await this.storageRepository.get<Hero>(cacheKey);
    
    if (cached) {
      return cached;
    }
    
    try {
      const response = await this.httpClient.get<HeroDto>(`/api/heroes/${id}`);
      const hero = this.heroMapper.toDomain(response);
      
      await this.storageRepository.set(cacheKey, hero);
      return hero;
    } catch (error) {
      return null;
    }
  }
  
  async searchHeroes(query: string): Promise<Hero[]> {
    const response = await this.httpClient.get<HeroDto[]>(`/api/heroes/search?q=${encodeURIComponent(query)}`);
    return response.map(dto => this.heroMapper.toDomain(dto));
  }
}
```

#### Web Hero Repository Adapter
```typescript
// packages/data-web/src/adapters/hero-repository.adapter.ts
import { HttpClient } from '@data-shared/contracts/http-client.interface';
import { HeroMapper } from '@data-shared/mappers/hero.mapper';
import { StorageRepository } from '@data-shared/contracts/storage-repository.interface';
import { HeroRepository } from '@data-shared/contracts/hero-repository.interface';

export class WebHeroRepositoryAdapter implements HeroRepository {
  constructor(
    private httpClient: HttpClient,           // From data-shared
    private storageRepository: StorageRepository, // Web-specific
    private heroMapper: HeroMapper            // From data-shared
  ) {}
  
  async getHeroes(): Promise<Hero[]> {
    const cacheKey = 'heroes_list';
    const cached = await this.storageRepository.get<Hero[]>(cacheKey);
    
    if (cached) {
      return cached;
    }
    
    const response = await this.httpClient.get<HeroDto[]>('/api/heroes');
    const heroes = response.map(dto => this.heroMapper.toDomain(dto));
    
    await this.storageRepository.set(cacheKey, heroes);
    return heroes;
  }
  
  async getHeroById(id: string): Promise<Hero | null> {
    const cacheKey = `hero_${id}`;
    const cached = await this.storageRepository.get<Hero>(cacheKey);
    
    if (cached) {
      return cached;
    }
    
    try {
      const response = await this.httpClient.get<HeroDto>(`/api/heroes/${id}`);
      const hero = this.heroMapper.toDomain(response);
      
      await this.storageRepository.set(cacheKey, hero);
      return hero;
    } catch (error) {
      return null;
    }
  }
  
  async searchHeroes(query: string): Promise<Hero[]> {
    const response = await this.httpClient.get<HeroDto[]>(`/api/heroes/search?q=${encodeURIComponent(query)}`);
    return response.map(dto => this.heroMapper.toDomain(dto));
  }
}
```

### Import Structure

#### Mobile Solution Imports
```typescript
// Mobile app imports data-shared + data-mobile
import { HttpClient } from '@data-shared/contracts/http-client.interface';
import { HeroMapper } from '@data-shared/mappers/hero.mapper';
import { StorageRepository } from '@data-shared/contracts/storage-repository.interface';
import { HeroRepository } from '@data-shared/contracts/hero-repository.interface';

// Mobile-specific implementations
import { AsyncStorageRepository } from '@data-mobile/implementations/async-storage.repository';
import { MobileHeroRepositoryAdapter } from '@data-mobile/adapters/hero-repository.adapter';
```

#### Web Solution Imports
```typescript
// Web app imports data-shared + data-web
import { HttpClient } from '@data-shared/contracts/http-client.interface';
import { HeroMapper } from '@data-shared/mappers/hero.mapper';
import { StorageRepository } from '@data-shared/contracts/storage-repository.interface';
import { HeroRepository } from '@data-shared/contracts/hero-repository.interface';

// Web-specific implementations
import { LocalStorageRepository } from '@data-web/implementations/local-storage.repository';
import { WebHeroRepositoryAdapter } from '@data-web/adapters/hero-repository.adapter';
```

### Shared Mappers

#### Hero Mapper (Shared)
```typescript
// packages/data-shared/src/mappers/hero.mapper.ts
export class HeroMapper {
  toDomain(dto: HeroDto): Hero {
    return new Hero(
      dto.id,
      dto.name,
      dto.description,
      dto.imageUrl,
      dto.thumbnailUrl,
      dto.comics.map(comicDto => this.toComic(comicDto)),
      dto.movies.map(movieDto => this.toMovie(movieDto)),
      new HeroCharacteristics(
        dto.characteristics.powers,
        dto.characteristics.weaknesses,
        dto.characteristics.affiliations,
        dto.characteristics.aliases
      ),
      new Date(dto.createdAt),
      new Date(dto.updatedAt)
    );
  }
  
  toComic(dto: ComicDto): Comic {
    return new Comic(
      dto.id,
      dto.title,
      dto.description,
      dto.imageUrl,
      new Date(dto.publishedDate),
      dto.pageCount,
      dto.price
    );
  }
  
  toMovie(dto: MovieDto): Movie {
    return new Movie(
      dto.id,
      dto.title,
      dto.description,
      dto.imageUrl,
      new Date(dto.releaseDate),
      dto.duration,
      dto.rating
    );
  }
}
```

#### Comic Mapper (Shared)
```typescript
// packages/data-shared/src/mappers/comic.mapper.ts
export class ComicMapper {
  toDomain(dto: ComicDto): Comic {
    return new Comic(
      dto.id,
      dto.title,
      dto.description,
      dto.imageUrl,
      new Date(dto.publishedDate),
      dto.pageCount,
      dto.price
    );
  }
}
```

#### Movie Mapper (Shared)
```typescript
// packages/data-shared/src/mappers/movie.mapper.ts
export class MovieMapper {
  toDomain(dto: MovieDto): Movie {
    return new Movie(
      dto.id,
      dto.title,
      dto.description,
      dto.imageUrl,
      new Date(dto.releaseDate),
      dto.duration,
      dto.rating
    );
  }
}
```

## Validation Rules

### Domain Validation
- All entities must have valid IDs
- Required fields cannot be empty
- Date fields must be valid dates
- URL fields must be valid URLs
- Numeric fields must be positive

### Business Rules
- Heroes must have at least one comic
- Favorites must reference existing heroes
- Search results must be case-insensitive
- Partial matching must use "starts with" logic

## Data Persistence

### Mock Data Storage
- Static JSON files in infrastructure layer
- Loaded at application startup
- No database required for MVP

### Favorites Persistence
- AsyncStorage (React Native)
- localStorage (Web)
- JSON serialization
- Automatic sync on app startup

## Performance Considerations

### Data Loading
- Lazy load hero details
- Paginate hero lists
- Cache frequently accessed data
- Optimize image loading

### Search Performance
- Client-side filtering
- Debounced search input
- Indexed search fields
- Result caching

## Security Considerations

### Data Validation
- Input sanitization
- Type checking
- Length limits
- Format validation

### Storage Security
- No sensitive data
- Local storage only
- No encryption required
- No user authentication
