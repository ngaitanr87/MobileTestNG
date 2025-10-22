<!--
Sync Impact Report:
Version change: 1.1.0 → 1.2.0
Modified principles: Added federated data layer architecture
Added sections: Federated Data Layer Architecture, Data Package Structure, Data Layer Import Rules
Updated sections: Data Layer Requirements, Infrastructure Layer Requirements, Dependency Injection, Testing Strategy
Removed sections: None (template structure maintained)
Templates requiring updates: ✅ plan-template.md, ✅ spec-template.md, ✅ tasks-template.md
Follow-up TODOs: None
-->

# Mobile App Constitution
<!-- React Native & React Web Clean Architecture Mobile App -->

## Core Principles

### I. Strict Layer Isolation (NON-NEGOTIABLE)
Domain → Application → (Infrastructure|Presentation); NO reverse dependencies allowed. Each layer MUST be an independent module/package that can live in separate repositories. Domain and Application layers MUST be platform-agnostic and consumable by both React Native AND React Web. Violations MUST be caught by lint rules and CI speccheck validation.

### II. Clean Architecture Boundaries (NON-NEGOTIABLE)
Domain layer MUST contain only pure TypeScript: Entities, Value Objects, Use Cases, and Interfaces with ZERO framework dependencies (no React/RN/Redux/HTTP imports). Application layer MUST orchestrate use cases via Redux Toolkit slices and thunks/sagas without direct infrastructure calls. Infrastructure layer MUST implement interfaces using platform APIs and be swappable between mobile and web variants. Presentation layer MUST contain only React/RN UI components that dispatch actions and read selectors.

### III. Dependency Injection at Composition Roots
UI components MUST NEVER instantiate infrastructure directly. All dependencies MUST be injected at application bootstrap using containers (recommended: InversifyJS). Domain interfaces MUST be bound to Infrastructure implementations at startup. Feature sub-containers MUST be used for complex feature boundaries. Service locator pattern is acceptable alternative to DI containers.

### IV. Test-First Development (NON-NEGOTIABLE)
Domain and Application layers MUST have comprehensive Jest unit tests with NO React Native dependencies. Infrastructure layers MUST have contract tests mocking network/storage. Presentation layers MUST use React Testing Library for both RN and Web. Tests MUST be written before implementation following Red-Green-Refactor cycle. Integration tests MUST cover new library contracts, contract changes, and inter-service communication.

### V. State Management Discipline (NON-NEGOTIABLE)
Redux Toolkit MUST be used for store and slice management. Thunks/Sagas MUST call Use Cases, never APIs directly. Selectors MUST be defined in Application layer; Presentation consumes selectors only. Reducers MUST remain pure functions. State orchestration MUST happen in Application layer, never in Presentation or Domain.

## Clean Architecture Layers

### Domain Layer Requirements
- Pure TypeScript with zero framework dependencies
- Entities, Value Objects, Domain Errors, Use Cases, Repository Interfaces
- MUST NOT import React, React Native, Redux, Axios, or any infrastructure packages
- Business rules and domain logic only
- Platform-agnostic and testable in isolation

### Application Layer Requirements
- Orchestrates use cases via thunks/sagas
- Owns Redux slices and selectors
- NO platform APIs or direct infrastructure calls
- Can import from Domain and Shared layers only
- State management and use case coordination

### Data Layer Requirements (FEDERATED ARCHITECTURE)
- **data-shared package**: Contains shared contracts, HTTP client, mappers, and DTOs
- **data-mobile package**: Mobile-specific storage implementations and adapters
- **data-web package**: Web-specific storage implementations and adapters
- Platform-agnostic data contracts and interfaces in shared package
- Federated data source architecture (Flutter-style)
- Shared axios HTTP client implementation (no duplication)
- Platform-specific storage implementations (AsyncStorage vs localStorage)
- Contract testing for all data interfaces
- NO direct platform dependencies in shared data layer
- Must support caching and error handling strategies

### Infrastructure Layer Requirements
- Implements Domain interfaces using platform APIs
- Separate packages: infra-mobile and infra-web
- Storage adapters, native module bridges
- Swappable implementations per platform
- NO Presentation layer imports allowed
- **UPDATED**: HTTP clients moved to data-shared package
- **UPDATED**: Storage implementations moved to data-mobile/data-web packages
- **UPDATED**: Must import and use shared data layer contracts

### Presentation Layer Requirements
- React/React Native UI components only
- Dispatches actions, reads selectors
- NO business rules or direct infrastructure access
- Separate packages: presentation-mobile and presentation-web
- Platform-specific UI implementations

## Dependency Injection

### Container Configuration
- Main app container per platform (mobile/web)
- Feature sub-containers for complex boundaries
- Recommended: InversifyJS with TypeScript decorators
- Alternative: React Context with service locator pattern
- All bindings MUST be defined at bootstrap time
- **NEW**: Data layer bindings for shared contracts and platform-specific implementations

### Binding Rules
- Domain interfaces MUST be bound to Infrastructure implementations
- Use Cases MUST be bound to Application layer
- UI components MUST receive dependencies via props or hooks
- NO direct instantiation of infrastructure in UI components
- **NEW**: Data layer contracts MUST be bound to platform-specific implementations
- **NEW**: HTTP client MUST be bound to shared axios implementation
- **NEW**: Storage repositories MUST be bound to platform-specific implementations (AsyncStorage vs localStorage)

## State Management

### Redux Toolkit Requirements
- Store configuration in Application layer
- Slices for feature state management
- Thunks for async operations calling Use Cases
- Selectors for computed state access
- Middleware for logging, persistence, and side effects

### State Flow Rules
- UI dispatches actions to Application layer
- Application layer calls Domain Use Cases
- Use Cases interact with Infrastructure via interfaces
- State updates flow back through selectors to UI
- NO direct API calls from UI components

## Testing Strategy

### Unit Testing
- Domain/Application: Jest with no RN dependencies
- Pure business logic testing
- Mock all external dependencies
- Test Use Cases in isolation
- Verify business rules and edge cases

### Integration Testing
- Infrastructure: Contract tests with mocked network/storage
- Test interface implementations against Domain contracts
- Verify platform-specific adapters work correctly
- Test data flow between layers
- **NEW**: Data layer contract tests for shared interfaces
- **NEW**: Platform-specific storage implementation tests
- **NEW**: Shared HTTP client integration tests
- **NEW**: Data mapper tests for DTO to domain conversion

### UI Testing
- Presentation: React Testing Library for RN and Web
- Test user interactions and state updates
- Mock Application layer dependencies
- Verify UI behavior without business logic

## Federated Data Layer Architecture

### Data Package Structure
- **data-shared**: Shared contracts, HTTP client, mappers, DTOs
- **data-mobile**: Mobile-specific storage implementations and adapters
- **data-web**: Web-specific storage implementations and adapters
- **Import Pattern**: Mobile imports data-shared + data-mobile, Web imports data-shared + data-web

### Shared Data Package (data-shared)
- Contains all data contracts and interfaces
- Shared axios HTTP client implementation
- Shared data mappers (Hero, Comic, Movie)
- Shared DTOs and common types
- NO platform-specific dependencies
- Must be importable by both mobile and web packages

### Platform-Specific Data Packages
- **data-mobile**: AsyncStorage implementations, mobile-specific adapters
- **data-web**: localStorage implementations, web-specific adapters
- Each package imports shared contracts from data-shared
- Platform-specific storage and caching strategies
- NO duplication of shared functionality

### Data Layer Import Rules
- Mobile solution: Import from @data-shared + @data-mobile
- Web solution: Import from @data-shared + @data-web
- NO direct imports between data-mobile and data-web
- All shared functionality MUST come from data-shared
- Platform-specific functionality MUST come from respective data package

## Platform Targets

### Mobile Platforms
- Android: minSdk 21, targetSdk 34
- iOS: minVersion 13.0, latest SDK
- React Native: Latest stable version (0.82.1+)
- Native modules: Platform-specific implementations
- **CRITICAL**: Mobile apps MUST be initialized using `npx @react-native-community/cli init` for proper React Native project structure
- Build process: Use `npm run start` for development, `npm run android`/`npm run ios` for emulator testing
- Build commands: Provide clear instructions for emulator testing rather than complex bundling

### Web Platform
- Modern browsers: Chrome 90+, Firefox 88+, Safari 14+
- Progressive Web App capabilities
- Service Worker for offline functionality
- Responsive design for mobile and desktop

## Governance

All development MUST comply with this constitution. Amendments require documentation, team approval, and migration plan. All PRs MUST verify layer isolation compliance using speccheck YAML validation. Complexity beyond these principles MUST be justified with architectural decision records. Use `.specify/templates/` for runtime development guidance.

**Version**: 1.2.0 | **Ratified**: 2025-01-27 | **Last Amended**: 2025-01-27
