# 🦸‍♂️ Marvel Heroes App

A cross-platform mobile and web application for exploring Marvel superheroes, built with Clean Architecture principles, TypeScript, React Native, and React.

## 🎯 Project Status

**Phase 3 Complete**: User Story 1 - Browse and Search Heroes ✅

- ✅ **24/24 tasks completed** in Phase 3
- ✅ **Clean Architecture** implementation with strict layer isolation
- ✅ **Test-first development** with comprehensive test coverage
- ✅ **Cross-platform** support (Mobile & Web)
- ✅ **TypeScript** with full type safety
- ✅ **30 Marvel heroes** with rich mock data

## 🏗️ Architecture

This project follows **Clean Architecture** principles with strict layer isolation:

```
packages/
├── domain/              # 🧠 Pure business logic (Entities, Use Cases, Interfaces)
├── application/         # 🔄 State management (Redux Toolkit, Thunks, Selectors)
├── infra-mobile/        # 📱 Mobile adapters (Repository, AsyncStorage, Native)
├── infra-web/          # 🌐 Web adapters (Repository, localStorage, Service Worker)
├── presentation-mobile/ # 📱 React Native UI (Screens, Components, Hooks)
├── presentation-web/    # 🌐 React Web UI (Pages, Components, Hooks)
├── di/                 # 🔌 Dependency injection containers (InversifyJS)
└── shared/             # 🔧 Cross-cutting concerns (Types, Utils, Logging)
```

### Layer Dependencies

- **Domain** → No dependencies (pure business logic)
- **Application** → Domain + Shared only
- **Infrastructure** → Domain + Shared only
- **Presentation** → Application + Shared only
- **DI** → All layers (composition root)

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- npm 9+

### Installation

```bash
# Install dependencies
npm install --legacy-peer-deps

# Build all packages
npm run build --workspaces
```

### Running the Demo

```bash
# Run the interactive demo
node simple-demo.js

# Run the test suite
node test-runner.js
```

## 📱 Features Implemented

### User Story 1: Browse and Search Heroes ✅

- **Browse Heroes**: Display scrollable list of 30 Marvel heroes
- **Search Functionality**: Real-time filtering by name and description
- **Hero Cards**: Rich hero information with images and characteristics
- **Cross-Platform**: Mobile (React Native) and Web (React) implementations
- **Responsive Design**: Optimized for different screen sizes

### Hero Data Structure

Each hero includes:
- **Basic Info**: Name, description, image URL
- **Characteristics**: Powers, weaknesses, affiliations, first appearance
- **Personal Details**: Real name, species, gender, height, weight
- **Rich Content**: 30 unique heroes with diverse backgrounds

## 🧪 Testing

The project follows **test-first development** with comprehensive coverage:

- **Domain Tests**: Unit tests for entities, use cases, and business logic
- **Application Tests**: Redux slice and thunk testing
- **Infrastructure Tests**: Contract tests for repository implementations
- **Presentation Tests**: Component and screen testing with React Testing Library

### Running Tests

```bash
# Run all tests
npm test --workspaces

# Run specific package tests
npm test --workspace=@marvel-heroes/domain
npm test --workspace=@marvel-heroes/application
```

## 🔧 Technical Stack

- **Language**: TypeScript 5.0+
- **Frontend**: React Native 0.72+ / React 18+
- **State Management**: Redux Toolkit
- **Dependency Injection**: InversifyJS
- **Testing**: Jest + React Testing Library
- **Storage**: AsyncStorage (mobile) / localStorage (web)
- **Architecture**: Clean Architecture with strict layer isolation

## 📊 Project Statistics

- **Total Files**: 60+ TypeScript/React files
- **Heroes Data**: 30 Marvel characters with rich metadata
- **Test Coverage**: 90%+ target across all layers
- **Architecture Layers**: 8 packages with strict isolation
- **Cross-Platform**: Mobile + Web implementations

## 🎯 Next Steps

The project is ready for the next development phases:

### Phase 4: User Story 2 - View Hero Details
- Hero detail screens with comprehensive information
- Comics and movies lists with "show more" functionality
- Navigation between list and detail views

### Phase 5: User Story 3 - Manage Favorites
- Mark heroes as favorites from list and detail screens
- Persistent favorites storage
- Visual favorite indicators

### Phase 6: Polish & Cross-Cutting Concerns
- Performance optimization
- Accessibility improvements
- Error handling enhancements
- Documentation updates

## 🏆 Architecture Benefits

- **Maintainable**: Clear separation of concerns
- **Testable**: Each layer can be tested independently
- **Scalable**: Easy to add new features and platforms
- **Flexible**: Platform-specific implementations without code duplication
- **Type-Safe**: Full TypeScript coverage with strict typing

## 📝 Development Guidelines

- **Test-First**: Write tests before implementation
- **Layer Isolation**: Never import from outer layers
- **Type Safety**: Use TypeScript strictly
- **Clean Code**: Follow SOLID principles
- **Documentation**: Keep README and code comments updated

## 🤝 Contributing

1. Follow Clean Architecture principles
2. Write tests for new features
3. Maintain layer isolation
4. Update documentation
5. Run validation scripts before committing

---

**Built with ❤️ using Clean Architecture, TypeScript, and modern React patterns.**