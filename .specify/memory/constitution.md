<!--
Sync Impact Report:
Version change: 1.4.0 → 1.5.0
Modified principles: Added SOLID Principles Compliance as Core Principle VI
Added sections: SOLID Principles Architecture, SOLID Principles Implementation, SOLID Principles Validation
Updated sections: Domain Layer Requirements, Data Layer Requirements, App Layer Requirements, Integration Testing
Removed sections: None
Templates requiring updates: ✅ plan-template.md, ✅ spec-template.md, ✅ tasks-template.md
Follow-up TODOs: None
-->

# Mobile App Constitution
<!-- React Native & React Web Clean Architecture Mobile App -->

## Core Principles

### I. Strict Layer Isolation (NON-NEGOTIABLE)
Domain → Data → App; NO reverse dependencies allowed. Each layer MUST be an independent module/package that can live in separate repositories. Domain layer MUST be platform-agnostic and consumable by both React Native AND React Web. Data layer MUST provide platform-specific implementations. App layer MUST contain platform-specific UI and business logic. Violations MUST be caught by lint rules and CI speccheck validation.

### II. Clean Architecture Boundaries (NON-NEGOTIABLE)
Domain layer MUST contain pure TypeScript: Entities, Value Objects, Use Cases, and Interfaces with minimal framework dependencies (only device service wrappers like reactjs-localstorage). Data layer MUST implement domain interfaces using platform-specific storage and HTTP clients. App layer MUST contain React/RN UI components and platform-specific business logic orchestration. NO direct cross-platform dependencies between mobile and web apps.

### III. Dependency Injection at Composition Roots
UI components MUST NEVER instantiate data layer directly. All dependencies MUST be injected at application bootstrap using containers (recommended: InversifyJS). Domain interfaces MUST be bound to Data layer implementations at startup. Feature sub-containers MUST be used for complex feature boundaries. Service locator pattern is acceptable alternative to DI containers.

### IV. Test-First Development (NON-NEGOTIABLE)
Domain layer MUST have comprehensive Jest unit tests with minimal framework dependencies. Data layers MUST have contract tests mocking network/storage. App layers MUST use React Testing Library for both RN and Web. Tests MUST be written before implementation following Red-Green-Refactor cycle. Integration tests MUST cover new library contracts, contract changes, and inter-service communication.

### V. State Management Discipline (NON-NEGOTIABLE)
Redux Toolkit MUST be used for store and slice management in app layers. Thunks/Sagas MUST call Domain Use Cases, never APIs directly. Selectors MUST be defined in app layer; UI components consume selectors only. Reducers MUST remain pure functions. State orchestration MUST happen in app layer, never in Domain or Data layers.

### VI. SOLID Principles Compliance (NON-NEGOTIABLE)
All code MUST adhere to SOLID principles. Single Responsibility: Each class/function has one reason to change. Open/Closed: Use Strategy pattern for extensibility without modification. Liskov Substitution: Interface implementations MUST be fully substitutable. Interface Segregation: Interfaces MUST be focused and cohesive. Dependency Inversion: Depend on abstractions, not concretions. Violations MUST be caught by lint rules and code reviews.

## Clean Architecture Layers

### Domain Layer Requirements
- Pure TypeScript with minimal framework dependencies
- Entities, Value Objects, Domain Errors, Use Cases
- CAN import interfaces from abstract_data package (Dependency Inversion Principle)
- MUST NOT import React, React Native, Redux, Axios, or platform-specific packages
- Business rules and domain logic only
- Platform-agnostic and testable in isolation
- Use Cases depend on abstract_data interfaces, not implementations
- MUST follow Single Responsibility Principle (one reason to change per class)
- MUST use Strategy pattern for extensibility (Open/Closed Principle)

### Data Layer Requirements (DEPENDENCY INVERSION ARCHITECTURE)
- **abstract_data package**: Contains interfaces, contracts, HTTP client, mappers, and DTOs
- **mobile_data package**: Implements abstract_data interfaces using @react-native-async-storage/async-storage
- **web_data package**: Implements abstract_data interfaces using localStorage
- Platform-agnostic interfaces defined in abstract_data package
- Domain layer depends on abstract_data interfaces (Dependency Inversion Principle)
- Platform-specific implementations in mobile_data and web_data packages
- Contract testing for all data interfaces
- NO direct platform dependencies in abstract_data package
- Must support caching and error handling strategies
- MUST follow Interface Segregation Principle (focused, cohesive interfaces)
- MUST ensure Liskov Substitution Principle (fully substitutable implementations)
- MUST use Strategy pattern for different storage implementations (Open/Closed Principle)

### App Layer Requirements
- **rnApp package**: React Native app for Android and iOS
- **react-app package**: React web application
- Contains React/RN UI components and platform-specific business logic
- Imports domain and platform-specific data packages
- Owns Redux slices, selectors, and state management
- Platform-specific UI implementations and user interactions
- MUST follow Single Responsibility Principle (one responsibility per component)
- MUST use Strategy pattern for different UI behaviors (Open/Closed Principle)
- MUST ensure components are fully substitutable (Liskov Substitution Principle)

## Dependency Injection

### Container Configuration
- Main app container per platform (rnApp/react-app)
- Feature sub-containers for complex boundaries
- Recommended: InversifyJS with TypeScript decorators
- Alternative: React Context with service locator pattern
- All bindings MUST be defined at bootstrap time
- Data layer bindings for abstract_data contracts and platform-specific implementations

### Binding Rules
- Domain interfaces MUST be bound to Data layer implementations
- Use Cases MUST be bound to Domain layer
- UI components MUST receive dependencies via props or hooks
- NO direct instantiation of data layer in UI components
- Data layer contracts MUST be bound to platform-specific implementations
- HTTP client MUST be bound to abstract_data implementation
- Storage repositories MUST be bound to platform-specific implementations (AsyncStorage vs localStorage)

## State Management

### Redux Toolkit Requirements
- Store configuration in App layer (rnApp/react-app)
- Slices for feature state management
- Thunks for async operations calling Domain Use Cases
- Selectors for computed state access
- Middleware for logging, persistence, and side effects

### State Flow Rules
- UI dispatches actions to App layer
- App layer calls Domain Use Cases
- Use Cases interact with Data layer via interfaces
- State updates flow back through selectors to UI
- NO direct API calls from UI components

## Testing Strategy

### Unit Testing
- Domain: Jest with minimal framework dependencies
- Pure business logic testing
- Mock all external dependencies
- Test Use Cases in isolation
- Verify business rules and edge cases

### Integration Testing
- Data layer: Contract tests with mocked network/storage
- Test interface implementations against Domain contracts
- Verify platform-specific adapters work correctly
- Test data flow between layers
- Data layer contract tests for abstract_data interfaces
- Platform-specific storage implementation tests
- HTTP client integration tests
- Data mapper tests for DTO to domain conversion
- Liskov Substitution Principle validation tests
- Interface compliance testing for all implementations
- Behavioral testing to ensure substitutability

### UI Testing
- App layer: React Testing Library for RN and Web
- Test user interactions and state updates
- Mock Domain and Data layer dependencies
- Verify UI behavior without business logic

## SOLID Principles Architecture

### SOLID Principles Implementation
- **Single Responsibility Principle (SRP)**: Each class/function has one reason to change
- **Open/Closed Principle (OCP)**: Use Strategy pattern for extensibility without modification
- **Liskov Substitution Principle (LSP)**: Interface implementations are fully substitutable
- **Interface Segregation Principle (ISP)**: Interfaces are focused and cohesive
- **Dependency Inversion Principle (DIP)**: Depend on abstractions, not concretions

### Package Dependencies
- **abstract_data**: Contains interfaces, contracts, HTTP client, mappers, DTOs
- **domain**: Depends on abstract_data interfaces, contains business logic and use cases
- **mobile_data**: Depends on abstract_data, implements interfaces for mobile storage
- **web_data**: Depends on abstract_data, implements interfaces for web storage
- **rnApp**: Depends on domain + mobile_data, React Native app
- **react-app**: Depends on domain + web_data, React web app

### Data Layer Import Rules
- rnApp: Import from domain + mobile_data
- react-app: Import from domain + web_data
- domain: Import interfaces from abstract_data
- mobile_data: Import interfaces from abstract_data, implement them
- web_data: Import interfaces from abstract_data, implement them
- NO direct imports between mobile_data and web_data
- NO direct imports between rnApp and react-app
- All interfaces and contracts MUST come from abstract_data
- Platform-specific implementations MUST come from respective data package

### SOLID Principles Validation
- **SRP Validation**: Code review checks for single responsibility per class
- **OCP Validation**: Strategy pattern usage for extensibility
- **LSP Validation**: Contract testing and behavioral testing for substitutability
- **ISP Validation**: Interface focus and cohesion checks
- **DIP Validation**: Dependency direction and abstraction usage checks

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

**Version**: 1.5.0 | **Ratified**: 2025-01-27 | **Last Amended**: 2025-01-27
