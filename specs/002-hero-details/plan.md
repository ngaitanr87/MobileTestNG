# Implementation Plan: Hero Details (User Story 1)

**Branch**: `002-hero-details` | **Date**: 2025-10-28 | **Spec**: [spec.md](./spec.md)
**Input**: Feature specification from `/specs/002-hero-details/spec.md`

## Summary

Implement the Hero Detail screen for rnApp showing hero name, image, description, fixed characteristics (aliases, powers/abilities, affiliations, origin), top 10 comics and movies with a one-tap "Show more" to reveal all remaining items, and back navigation preserving prior list search/filter and scroll. All UI will be built with React Native Paper, adopting MD3 theming to accelerate delivery and ensure accessibility and platform consistency. Reference: React Native Paper (`https://reactnativepaper.com/`).

## Technical Context

**Language/Version**: TypeScript 5.x, React Native 0.72+  
**Primary Dependencies**: React Native Paper (MD3), react-native-vector-icons, react-native-safe-area-context  
**Storage**: N/A for this feature (uses existing mock data from packages/data/mobile_data)  
**Testing**: Jest + React Native Testing Library; 90%+ coverage on new units  
**Target Platform**: iOS 13+, Android API 21+  
**Project Type**: Mobile (rnApp)  
**Performance Goals**: ≤3s detail screen render; ≤500ms list expansion; 60 fps scrolling  
**Constraints**: Offline mock data only; no network; back navigation must restore search/filter and scroll state  
**Scale/Scope**: 30 mock heroes; up to 10 comics/movies default view; all remaining via one-tap "Show more"

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

### Layer Isolation Compliance
- [x] Domain layer has ZERO framework dependencies (no React/RN/Redux/HTTP imports)
- [x] Data layer implements Domain interfaces; no UI imports
- [x] Presentation/UI uses dependencies via DI/container; no direct data instantiation
- [x] Dependency injection configured at composition roots (rnApp DI)
- [x] No direct infrastructure instantiation in UI components

### Clean Architecture Boundaries
- [x] Use Cases defined in Domain layer with pure business logic
- [x] Redux Toolkit slices and thunks in App layer only (rnApp store)
- [x] Platform-specific adapters in Data layer
- [x] UI components in Presentation layer with no business rules
- [x] Repository interfaces defined in Domain, implemented in Data

### Testing Strategy Alignment
- [x] Domain/App tests use Jest with no RN dependencies in Domain
- [x] Data layer contract tests (existing); add where needed
- [x] Presentation tests use React Native Testing Library
- [x] Test-first approach for new UI components and selectors
- [x] Aim for 90% code coverage on new code

## Project Structure

### Documentation (this feature)

```
specs/002-hero-details/
├── plan.md
├── research.md
├── data-model.md
├── quickstart.md
└── contracts/
```

### Source Code (Clean Architecture Structure)

```
packages/
├── domain/                    # Entities, Value Objects, Use Cases, Interfaces
├── data/
│   ├── abstract_data/         # Interfaces, contracts, mappers, DTOs
│   └── mobile_data/           # Mobile implementations (AsyncStorage, sources)
└── rnApp/                     # React Native app (screens, components, store, DI)
```

**Structure Decision**: Follow existing repo layout with strict layer isolation. rnApp consumes `domain` and `mobile_data`; dependencies bound in rnApp DI. UI uses React Native Paper components exclusively for this feature.

## Phase 0 Output: Research

See [research.md](./research.md). Key choice: adopt React Native Paper for all UI in this feature to accelerate delivery and ensure accessible MD3 components (ref: `https://reactnativepaper.com/`).

## Phase 1 Output: Data Model & Contracts

- Data model captured in [data-model.md](./data-model.md) for `Hero`, `Comic`, `Movie`.
- External API contracts: N/A for this feature (offline mock data). `contracts/README.md` documents the rationale.
- Quickstart includes Paper setup and theming in rnApp.

## Implementation Notes (UI with React Native Paper)

- Components: `Appbar`, `Card`, `List.Item`, `Divider`, `Button`, `IconButton`, `Chip`, `Snackbar`, `ActivityIndicator`, `Avatar`.
- Theming: Wrap root with `Provider` (MD3). Respect safe areas.
- Accessibility: Use proper labels; Paper components provide defaults.
- Lists: Use `FlatList` with keyExtractor and getItemLayout where feasible; keep 60fps.

## Complexity Tracking

| Violation | Why Needed | Simpler Alternative Rejected Because |
|-----------|------------|-------------------------------------|
| None | N/A | N/A |

