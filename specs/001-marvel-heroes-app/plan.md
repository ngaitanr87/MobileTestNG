# Implementation Plan: Marvel Heroes App

**Branch**: `001-marvel-heroes-app` | **Date**: 2025-01-27 | **Spec**: [spec.md](./spec.md)
**Input**: Feature specification from `/specs/001-marvel-heroes-app/spec.md`

**Note**: This template is filled in by the `/speckit.plan` command. See `.specify/templates/commands/plan.md` for the execution workflow.

## Summary

A master-detail mobile app for learning about Marvel heroes with search functionality, detailed character information including comics and movies, and favorites management. The app uses mock data (30 heroes) with Clean Architecture principles for React Native and React Web platforms.

**ARCHITECTURE CLEANUP**: Refactor the current architecture to implement proper Clean Architecture principles with a federated data layer approach. This includes creating shared data packages that isolate data source interfaces from platform-specific implementations, similar to Flutter's federated plugin architecture.

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
├── application/               # ✅ Good: Redux state management
├── infra-mobile/             # ❌ Issue: Platform-specific data layer
│   └── src/
│       └── data/             # Duplicated data logic
├── infra-web/                # ❌ Issue: Platform-specific data layer
│   └── src/
│       └── data/           # Duplicated data logic
├── presentation-mobile/       # ✅ Good: UI components
├── presentation-web/         # ✅ Good: UI components
├── di/                       # ✅ Good: Dependency injection
└── shared/                   # ✅ Good: Cross-cutting concerns
```

#### Target Structure (After Cleanup)
```
packages/
├── domain/                    # Pure business logic (unchanged)
├── application/               # Redux state management (unchanged)
├── data-mobile/              # 🆕 NEW: Mobile data layer with implementations
│   ├── src/
│   │   ├── contracts/        # Data source interfaces
│   │   ├── adapters/         # Platform-agnostic adapters
│   │   ├── implementations/  # Mobile-specific implementations (storage only)
│   │   ├── sources/          # Data source implementations
│   │   └── types/            # Data transfer objects
│   └── tests/
├── data-web/                 # 🆕 NEW: Web data layer with implementations
│   ├── src/
│   │   ├── contracts/        # Data source interfaces
│   │   ├── adapters/         # Platform-agnostic adapters
│   │   ├── implementations/  # Web-specific implementations (storage only)
│   │   ├── sources/          # Data source implementations
│   │   └── types/            # Data transfer objects
│   └── tests/
├── data-shared/              # 🆕 NEW: Shared data implementations
│   ├── src/
│   │   ├── contracts/        # Shared data contracts
│   │   ├── http/             # Shared axios HTTP client
│   │   ├── mappers/          # Shared data mappers
│   │   └── types/            # Shared DTOs and interfaces
│   └── tests/
├── infra-mobile/             # Mobile-specific implementations
│   ├── src/
│   │   ├── storage/          # AsyncStorage adapter
│   │   └── native/           # Native module bridges
│   └── tests/
├── infra-web/                # Web-specific implementations
│   ├── src/
│   │   ├── storage/          # localStorage adapter
│   │   └── sw/               # Service Worker
│   └── tests/
├── presentation-mobile/      # UI components (unchanged)
├── presentation-web/         # UI components (unchanged)
├── di/                       # Updated DI configuration
└── shared/                   # Cross-cutting concerns (unchanged)
```

**Structure Decision**: Clean Architecture with federated data layer approach. Domain layer contains pure business logic. Application layer manages Redux state and orchestrates use cases. **NEW**: Separate data packages for mobile and web with platform-specific implementations. Infrastructure layers provide platform-specific adapters. Presentation layers contain only UI components. Dependency injection ensures loose coupling between layers.

## Phase 2: Implementation Tasks

### Task 1: Create Shared Data Package
- [ ] Create `packages/data-shared` package structure
- [ ] Define shared data contracts (HTTP, Storage, Repository interfaces)
- [ ] Implement shared axios HTTP client
- [ ] Create shared data mappers
- [ ] Define shared DTOs and interfaces
- [ ] Add comprehensive tests for shared data layer

### Task 2: Create Mobile Data Package
- [ ] Create `packages/data-mobile` package structure
- [ ] Import shared contracts from data-shared
- [ ] Implement mobile-specific storage adapters
- [ ] Import shared HTTP client and mappers from data-shared
- [ ] Add comprehensive tests for mobile data layer

### Task 3: Create Web Data Package
- [ ] Create `packages/data-web` package structure
- [ ] Import shared contracts from data-shared
- [ ] Implement web-specific storage adapters
- [ ] Import shared HTTP client and mappers from data-shared
- [ ] Add comprehensive tests for web data layer

### Task 4: Refactor Infrastructure Layers
- [ ] Remove duplicated data logic from `infra-mobile` and `infra-web`
- [ ] Keep only storage adapters in infrastructure layers
- [ ] Update dependency injection configuration
- [ ] Add contract tests for platform implementations

### Task 5: Update Application Layer
- [ ] Update use cases to use new data layer interfaces
- [ ] Refactor Redux thunks to use new data contracts
- [ ] Update selectors if needed
- [ ] Ensure no direct infrastructure dependencies
- [ ] Add integration tests

### Task 6: Update Dependency Injection
- [ ] Create new DI bindings for data layers
- [ ] Update platform-specific containers
- [ ] Add feature-specific sub-containers if needed
- [ ] Update bootstrap configuration
- [ ] Add DI tests

### Task 7: Testing & Validation
- [ ] Add contract tests for data layer interfaces
- [ ] Create mock implementations for testing
- [ ] Update existing tests to use new structure
- [ ] Add integration tests for federated data sources
- [ ] Validate Clean Architecture compliance

## Complexity Tracking

*Fill ONLY if Constitution Check has violations that must be justified*

| Violation | Why Needed | Simpler Alternative Rejected Because |
|-----------|------------|-------------------------------------|
| Separate Data Packages | Platform-specific optimizations and implementations | Single data package would require complex platform detection |
| Federated Data Layer | Platform-agnostic data contracts | Direct platform dependencies create tight coupling |
| Contract Testing | Ensure data layer reliability | Unit tests alone don't catch integration issues |

