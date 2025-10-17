# Marvel Heroes App

A master-detail mobile app for learning about Marvel heroes with Clean Architecture principles.

## Features

- Browse and search through 30 mock Marvel heroes
- View detailed hero information including characteristics, comics, and movies
- Mark heroes as favorites with persistence across app sessions
- Cross-platform support (React Native + React Web)

## Architecture

This project follows Clean Architecture principles with strict layer isolation:

- **Domain Layer**: Pure TypeScript entities, value objects, use cases, and interfaces
- **Application Layer**: Redux Toolkit slices, thunks, and selectors
- **Infrastructure Layers**: Platform-specific adapters (mobile/web)
- **Presentation Layers**: React/React Native UI components
- **Dependency Injection**: InversifyJS containers for loose coupling

## Technology Stack

- **TypeScript 5.0+**
- **React Native 0.72+** (Mobile)
- **React 18+** (Web)
- **Redux Toolkit** (State Management)
- **InversifyJS** (Dependency Injection)
- **Jest + React Testing Library** (Testing)
- **ESLint + Prettier** (Code Quality)

## Project Structure

```
packages/
├── domain/                    # Pure TS: Entities, Value Objects, Use Cases, Interfaces
├── application/               # Redux Toolkit slices, thunks, selectors
├── infra-mobile/             # RN adapters: HTTP, AsyncStorage, Native Modules
├── infra-web/                # Web adapters: fetch, localStorage, Service Worker
├── presentation-mobile/      # RN screens, components, hooks
├── presentation-web/         # React web pages, components, hooks
├── di/                       # Dependency injection containers
└── shared/                   # Cross-cutting: error utils, types, logging
```

## Getting Started

### Prerequisites

- Node.js 18.0+
- npm 9.0+

### Installation

```bash
# Install dependencies
npm install

# Build all packages
npm run build

# Run tests
npm test

# Run tests with coverage
npm run test:coverage

# Lint code
npm run lint

# Fix linting issues
npm run lint:fix
```

### Development

```bash
# Start development mode
npm run dev

# Type check all packages
npm run type-check

# Clean build artifacts
npm run clean
```

## Testing

The project uses Jest with React Testing Library for comprehensive testing:

- **Unit Tests**: Domain and Application layers
- **Integration Tests**: Infrastructure layer with contract tests
- **Component Tests**: Presentation layer with React Testing Library
- **Coverage**: 90% code coverage requirement

## Performance Goals

- Hero list load: <2 seconds
- Search results: <500ms
- Hero detail screens: <3 seconds
- UI performance: 60fps

## License

MIT
