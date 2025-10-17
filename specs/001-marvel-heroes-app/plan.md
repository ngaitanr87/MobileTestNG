# Implementation Plan: Marvel Heroes App

**Branch**: `001-marvel-heroes-app` | **Date**: 2025-01-27 | **Spec**: [spec.md](./spec.md)
**Input**: Feature specification from `/specs/001-marvel-heroes-app/spec.md`

**Note**: This template is filled in by the `/speckit.plan` command. See `.specify/templates/commands/plan.md` for the execution workflow.

## Summary

A master-detail mobile app for learning about Marvel heroes with search functionality, detailed character information including comics and movies, and favorites management. The app uses mock data (30 heroes) with Clean Architecture principles for React Native and React Web platforms.

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
<!--
  ACTION REQUIRED: Replace the placeholder tree below with the concrete layout
  for this feature following Clean Architecture principles. The delivered plan must
  follow the packages/ structure with strict layer isolation.
-->

```
packages/
├── domain/                    # Pure TS: Entities, Value Objects, Use Cases, Interfaces
│   ├── src/
│   │   ├── entities/
│   │   ├── value-objects/
│   │   ├── use-cases/
│   │   └── interfaces/
│   └── tests/
├── application/               # Redux Toolkit slices, thunks, selectors
│   ├── src/
│   │   ├── slices/
│   │   ├── thunks/
│   │   └── selectors/
│   └── tests/
├── infra-mobile/             # RN adapters: HTTP, AsyncStorage, Native Modules
│   ├── src/
│   │   ├── http/
│   │   ├── storage/
│   │   └── native/
│   └── tests/
├── infra-web/                # Web adapters: fetch, localStorage, Service Worker
│   ├── src/
│   │   ├── http/
│   │   ├── storage/
│   │   └── sw/
│   └── tests/
├── presentation-mobile/      # RN screens, components, hooks
│   ├── src/
│   │   ├── screens/
│   │   ├── components/
│   │   └── hooks/
│   └── tests/
├── presentation-web/         # React web pages, components, hooks
│   ├── src/
│   │   ├── pages/
│   │   ├── components/
│   │   └── hooks/
│   └── tests/
├── di/                       # Dependency injection containers
│   ├── src/
│   │   ├── containers/
│   │   └── types/
│   └── tests/
└── shared/                   # Cross-cutting: error utils, types, logging
    ├── src/
    │   ├── types/
    │   ├── utils/
    │   └── logging/
    └── tests/
```

**Structure Decision**: Clean Architecture with strict layer isolation following the constitution. Domain layer contains pure business logic (Hero, Comic, Movie entities and use cases). Application layer manages Redux state and orchestrates use cases. Infrastructure layers provide platform-specific implementations (mobile/web). Presentation layers contain only UI components. Dependency injection ensures loose coupling between layers.

## Complexity Tracking

*Fill ONLY if Constitution Check has violations that must be justified*

| Violation | Why Needed | Simpler Alternative Rejected Because |
|-----------|------------|-------------------------------------|
| [e.g., 4th project] | [current need] | [why 3 projects insufficient] |
| [e.g., Repository pattern] | [specific problem] | [why direct DB access insufficient] |

