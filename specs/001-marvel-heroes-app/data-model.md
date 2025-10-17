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
