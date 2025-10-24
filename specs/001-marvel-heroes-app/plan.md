# Implementation Plan: Marvel Heroes App

**Branch**: `001-marvel-heroes-app` | **Date**: 2025-01-27 | **Spec**: [spec.md](./spec.md)
**Input**: Feature specification from `/specs/001-marvel-heroes-app/spec.md`

**Note**: This template is filled in by the `/speckit.plan` command. See `.specify/templates/commands/plan.md` for the execution workflow.

## Summary

A master-detail mobile app for learning about Marvel heroes with search functionality, detailed character information including comics and movies, and favorites management. The app uses mock data (30 heroes) with Clean Architecture principles for React Native and React Web platforms.

**ARCHITECTURE CLEANUP**: Refactor the current architecture to implement proper Clean Architecture principles with Dependency Inversion Principle and SOLID principles compliance. This includes creating abstract_data package with interfaces that domain depends on, platform-specific implementations in mobile_data and web_data packages, and ensuring all code adheres to SOLID principles.

## Technical Context

<!--
  ACTION REQUIRED: Replace the content in this section with the technical details
  for the project. The structure here is presented in advisory capacity to guide
  the iteration process.
-->

**Language/Version**: TypeScript 5.0+, React Native 0.72+, React 18+  
**Primary Dependencies**: React Native, React, Redux Toolkit, InversifyJS, React Testing Library  
**Storage**: AsyncStorage (mobile), localStorage (web) for favorites persistence  
**Testing**: Jest, React Testing Library, 90% code coverage requirement  
**Target Platform**: iOS 13.0+, Android API 21+, Modern browsers (Chrome 90+, Firefox 88+, Safari 14+)  
**Project Type**: Mobile + Web (Clean Architecture with platform-specific adapters)  
**Performance Goals**: <2s hero list load, <500ms search results, <3s detail screens, 60fps UI  
**Constraints**: Mock data only (30 heroes), offline-capable favorites, cross-platform consistency  
**Scale/Scope**: 30 mock heroes, 10 comics/movies per hero, unlimited favorites per user

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

**✅ ALL GATES PASSED** - Constitution compliance verified after design phase completion.

### Layer Isolation Compliance
- [x] Domain layer has ZERO framework dependencies (no React/RN/Redux/HTTP imports)
- [x] Application layer only imports from Domain and Shared layers
- [x] Infrastructure layer implements Domain interfaces, no Presentation imports
- [x] Presentation layer only dispatches actions and reads selectors
- [x] Dependency injection configured at composition roots
- [x] No direct infrastructure instantiation in UI components

### Clean Architecture Boundaries
- [x] Use Cases defined in Domain layer with pure business logic
- [x] Redux Toolkit slices and thunks in Application layer only
- [x] Platform-specific adapters in Infrastructure layer
- [x] UI components in Presentation layer with no business rules
- [x] Repository interfaces defined in Domain, implemented in Infrastructure

### Testing Strategy Alignment
- [x] Domain/Application tests use Jest with no RN dependencies
- [x] Infrastructure tests include contract tests with mocked dependencies
- [x] Presentation tests use React Testing Library
- [x] Test-first development approach planned
- [x] Code coverage up to 90% required

## Project Structure

### Documentation (this feature)

```
specs/[###-feature]/
├── plan.md              # This file (/speckit.plan command output)
├── research.md          # Phase 0 output (/speckit.plan command)
├── data-model.md        # Phase 1 output (/speckit.plan command)
├── quickstart.md        # Phase 1 output (/speckit.plan command)
├── contracts/           # Phase 1 output (/speckit.plan command)
└── tasks.md             # Phase 2 output (/speckit.tasks command - NOT created by /speckit.plan)
```

### Source Code (Clean Architecture Structure)

#### Current Structure (Before Cleanup)
```
packages/
├── domain/                    # ✅ Good: Pure business logic
├── application/               # ❌ REMOVED: Redundant layer
├── infra-mobile/             # ❌ REMOVED: Not needed
├── infra-web/                # ❌ REMOVED: Not needed
├── presentation-mobile/       # ❌ REMOVED: Merged into apps
├── presentation-web/         # ❌ REMOVED: Merged into apps
├── di/                       # ❌ REMOVED: Not needed
└── shared/                   # ❌ REMOVED: Not needed
```

#### Target Structure (Simplified Architecture)
```
packages/
├── domain/                    # Pure business logic depending on abstract_data interfaces
│   ├── src/
│   │   ├── entities/
│   │   ├── value-objects/
│   │   ├── use-cases/
│   │   └── interfaces/
│   └── tests/
├── data/
│   ├── abstract_data/        # 🆕 NEW: Interfaces, contracts, and shared implementations
│   │   ├── src/
│   │   │   ├── contracts/    # Data source interfaces (ILocalStorageDataSource, etc.)
│   │   │   ├── http/         # Shared axios HTTP client
│   │   │   ├── mappers/      # Shared data mappers
│   │   │   └── types/        # Shared DTOs and interfaces
│   │   └── tests/
│   ├── mobile_data/          # 🆕 NEW: Mobile implementations of abstract_data interfaces
│   │   ├── src/
│   │   │   ├── implementations/  # Mobile storage implementations (AsyncStorage)
│   │   │   └── sources/          # Data source implementations
│   │   └── tests/
│   └── web_data/             # 🆕 NEW: Web implementations of abstract_data interfaces
│       ├── src/
│       │   ├── implementations/  # Web storage implementations (localStorage)
│       │   └── sources/          # Data source implementations
│       └── tests/
├── rnApp/                    # 🆕 NEW: React Native app (Android + iOS)
│   ├── src/
│   │   ├── components/
│   │   ├── screens/
│   │   ├── store/
│   │   └── hooks/
│   └── tests/
└── react-app/                # 🆕 NEW: React web application
    ├── src/
    │   ├── components/
    │   ├── pages/
    │   ├── store/
    │   └── hooks/
    └── tests/
```

**Structure Decision**: Dependency Inversion Principle architecture with SOLID principles compliance and direct app packages. Domain layer contains pure business logic and depends on abstract_data interfaces. Abstract_data defines interfaces and contracts. Mobile_data and web_data implement these interfaces with platform-specific storage using Strategy pattern. App layer contains platform-specific UI and business logic orchestration. All code MUST adhere to SOLID principles. NO intermediate application or infrastructure layers.

## Phase 2: Implementation Tasks

### Task 1: Create Abstract Data Package
- [ ] Create `packages/data/abstract_data` package structure
- [ ] Define data source interfaces (ILocalStorageDataSource, IHttpClient, etc.) following ISP
- [ ] Implement shared axios HTTP client following SRP
- [ ] Create shared data mappers following SRP
- [ ] Define shared DTOs and interfaces following ISP
- [ ] Add comprehensive tests for abstract data layer
- [ ] Ensure all interfaces follow Interface Segregation Principle

### Task 2: Create Mobile Data Package
- [ ] Create `packages/data/mobile_data` package structure
- [ ] Import interfaces from abstract_data
- [ ] Implement ILocalStorageDataSource using @react-native-async-storage/async-storage following LSP
- [ ] Implement other abstract_data interfaces for mobile platform following LSP
- [ ] Use Strategy pattern for different storage implementations (OCP)
- [ ] Add comprehensive tests for mobile data layer including LSP validation

### Task 3: Create Web Data Package
- [ ] Create `packages/data/web_data` package structure
- [ ] Import interfaces from abstract_data
- [ ] Implement ILocalStorageDataSource using localStorage following LSP
- [ ] Implement other abstract_data interfaces for web platform following LSP
- [ ] Use Strategy pattern for different storage implementations (OCP)
- [ ] Add comprehensive tests for web data layer including LSP validation

### Task 4: Update Domain Layer
- [ ] Update domain package.json to depend on abstract_data
- [ ] Update use cases to import and use abstract_data interfaces following DIP
- [ ] Ensure domain depends on interfaces, not implementations (DIP)
- [ ] Apply Single Responsibility Principle to all use cases (SRP)
- [ ] Use Strategy pattern for extensible use case behaviors (OCP)
- [ ] Add integration tests for domain layer including SOLID validation

### Task 5: Create React Native App
- [ ] Create `packages/rnApp` package structure
- [ ] Set up React Native project with proper dependencies
- [ ] Import domain and mobile_data packages
- [ ] Implement Redux store and state management following SRP
- [ ] Create UI components and screens following SRP and LSP
- [ ] Use Strategy pattern for different UI behaviors (OCP)
- [ ] Add comprehensive tests for React Native app including SOLID validation

### Task 6: Create React Web App
- [ ] Create `packages/react-app` package structure
- [ ] Set up React project with proper dependencies
- [ ] Import domain and web_data packages
- [ ] Implement Redux store and state management following SRP
- [ ] Create UI components and pages following SRP and LSP
- [ ] Use Strategy pattern for different UI behaviors (OCP)
- [ ] Add comprehensive tests for React web app including SOLID validation

### Task 7: Testing & Validation
- [ ] Add contract tests for data layer interfaces
- [ ] Create mock implementations for testing
- [ ] Update existing tests to use new structure
- [ ] Add integration tests for data sources
- [ ] Validate Clean Architecture compliance
- [ ] Add SOLID principles validation tests
- [ ] Implement Liskov Substitution Principle testing
- [ ] Add Interface Segregation Principle validation
- [ ] Create behavioral testing for substitutability
- [ ] Add code review checklists for SOLID compliance

## Complexity Tracking

*Fill ONLY if Constitution Check has violations that must be justified*

| Violation | Why Needed | Simpler Alternative Rejected Because |
|-----------|------------|-------------------------------------|
| Abstract Data Package | Defines interfaces and contracts for Dependency Inversion | Direct duplication would violate DRY principle |
| Domain Depends on Abstract Data | Dependency Inversion Principle - domain depends on abstractions | Traditional Clean Architecture would require domain to define all interfaces |
| Platform-Specific Data Packages | Platform-specific storage implementations | Single package would require complex platform detection |
| Direct App Packages | Simplified architecture without intermediate layers | Application layer was redundant and added complexity |
| SOLID Principles Compliance | Ensures maintainable, extensible, and testable code | Without SOLID principles, code becomes tightly coupled and hard to maintain |
| Strategy Pattern for Extensibility | Open/Closed Principle - open for extension, closed for modification | Direct implementation changes would violate OCP and create maintenance issues |

