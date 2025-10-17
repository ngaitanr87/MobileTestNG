# Tasks: Marvel Heroes App

**Input**: Design documents from `/specs/001-marvel-heroes-app/`
**Prerequisites**: plan.md (required), spec.md (required for user stories), research.md, data-model.md, contracts/

**Tests**: Test-first development approach with 90% code coverage requirement per constitution

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`
- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

## Path Conventions (Clean Architecture)
- **Domain layer**: `packages/domain/src/` - Pure TypeScript, no framework deps
- **Application layer**: `packages/application/src/` - Redux Toolkit, use case orchestration
- **Infrastructure layers**: `packages/infra-mobile/src/`, `packages/infra-web/src/` - Platform adapters
- **Presentation layers**: `packages/presentation-mobile/src/`, `packages/presentation-web/src/` - UI components
- **Dependency Injection**: `packages/di/src/` - Containers and bindings
- **Shared utilities**: `packages/shared/src/` - Cross-cutting concerns

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization and basic structure

- [x] T001 Create project structure per implementation plan in packages/
- [x] T002 Initialize TypeScript project with React Native and React dependencies
- [x] T003 [P] Configure ESLint and Prettier for Clean Architecture layer isolation
- [x] T004 [P] Setup Jest testing framework with React Testing Library
- [x] T005 [P] Configure TypeScript paths and module resolution
- [x] T006 [P] Setup package.json scripts for build, test, and lint

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core infrastructure that MUST be complete before ANY user story can be implemented

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

- [x] T007 [P] Setup Domain layer structure with entities and value objects in packages/domain/src/
- [x] T008 [P] Define repository interfaces in Domain layer in packages/domain/src/interfaces/
- [x] T009 [P] Create Use Cases in Domain layer with business logic in packages/domain/src/use-cases/
- [x] T010 [P] Setup Application layer with Redux Toolkit store and slices in packages/application/src/
- [x] T011 [P] Configure Dependency Injection containers in DI layer in packages/di/src/
- [x] T012 [P] Setup Infrastructure layer adapters (mobile/web variants) in packages/infra-mobile/src/ and packages/infra-web/src/
- [x] T013 [P] Create shared utilities and cross-cutting concerns in packages/shared/src/
- [x] T014 Configure layer isolation linting rules and CI validation
- [x] T015 [P] Create mock data for 30 Marvel heroes with comics and movies in packages/infra-mobile/src/data/ and packages/infra-web/src/data/
- [x] T016 [P] Setup error handling and logging infrastructure in packages/shared/src/

**Checkpoint**: Foundation ready - user story implementation can now begin in parallel

---

## Phase 3: User Story 1 - Browse and Search Heroes (Priority: P1) 🎯 MVP

**Goal**: Display scrollable list of 30 mock Marvel heroes with real-time search functionality

**Independent Test**: Can be fully tested by displaying a list of heroes with search functionality and verifying users can find and select heroes to view details.

### Tests for User Story 1 ⚠️

**NOTE: Write these tests FIRST, ensure they FAIL before implementation**

- [ ] T017 [P] [US1] Domain unit test for GetHeroesListUseCase in packages/domain/tests/use-cases/test_get-heroes-list-use-case.ts
- [ ] T018 [P] [US1] Domain unit test for Hero entity in packages/domain/tests/entities/test_hero.ts
- [ ] T019 [P] [US1] Application unit test for heroesSlice in packages/application/tests/slices/test_heroes-slice.ts
- [ ] T020 [P] [US1] Infrastructure contract test in packages/infra-mobile/tests/contracts/test_hero-repository.ts
- [ ] T021 [P] [US1] Infrastructure contract test in packages/infra-web/tests/contracts/test_hero-repository.ts
- [ ] T022 [P] [US1] Presentation test for mobile in packages/presentation-mobile/tests/screens/test_heroes-list-screen.tsx
- [ ] T023 [P] [US1] Presentation test for web in packages/presentation-web/tests/pages/test_heroes-list-page.tsx

### Implementation for User Story 1

- [ ] T024 [P] [US1] Create Hero entity in packages/domain/src/entities/hero.ts
- [ ] T025 [P] [US1] Create HeroCharacteristics value object in packages/domain/src/value-objects/hero-characteristics.ts
- [ ] T026 [P] [US1] Define IHeroRepository interface in packages/domain/src/interfaces/i-hero-repository.ts
- [ ] T027 [US1] Implement GetHeroesListUseCase in packages/domain/src/use-cases/get-heroes-list-use-case.ts (depends on T024, T025, T026)
- [ ] T028 [P] [US1] Create heroesSlice in packages/application/src/slices/heroes-slice.ts
- [ ] T029 [US1] Implement getHeroesList thunk in packages/application/src/thunks/get-heroes-list-thunk.ts (depends on T027)
- [ ] T030 [P] [US1] Create hero selectors in packages/application/src/selectors/heroes-selectors.ts
- [ ] T031 [P] [US1] Create HeroRepository implementation in packages/infra-mobile/src/repositories/hero-repository.ts
- [ ] T032 [P] [US1] Create HeroRepository implementation in packages/infra-web/src/repositories/hero-repository.ts
- [ ] T033 [P] [US1] Create HeroesListScreen in packages/presentation-mobile/src/screens/heroes-list-screen.tsx
- [ ] T034 [P] [US1] Create HeroesListPage in packages/presentation-web/src/pages/heroes-list-page.tsx
- [ ] T035 [P] [US1] Create HeroCard component in packages/presentation-mobile/src/components/hero-card.tsx
- [ ] T036 [P] [US1] Create HeroCard component in packages/presentation-web/src/components/hero-card.tsx
- [ ] T037 [P] [US1] Create SearchInput component in packages/presentation-mobile/src/components/search-input.tsx
- [ ] T038 [P] [US1] Create SearchInput component in packages/presentation-web/src/components/search-input.tsx
- [ ] T039 [US1] Configure DI bindings for hero repository in packages/di/src/containers/hero-container.ts
- [ ] T040 [US1] Add error handling for hero loading failures in packages/shared/src/error-handling/

**Checkpoint**: At this point, User Story 1 should be fully functional and testable independently

---

## Phase 4: User Story 2 - View Hero Details (Priority: P1)

**Goal**: Display comprehensive hero details including characteristics, comics, and movies with "show more" functionality

**Independent Test**: Can be fully tested by selecting any hero from the list and verifying all detailed information is displayed correctly.

### Tests for User Story 2 ⚠️

- [ ] T041 [P] [US2] Domain unit test for GetHeroDetailsUseCase in packages/domain/tests/use-cases/test_get-hero-details-use-case.ts
- [ ] T042 [P] [US2] Domain unit test for Comic entity in packages/domain/tests/entities/test_comic.ts
- [ ] T043 [P] [US2] Domain unit test for Movie entity in packages/domain/tests/entities/test_movie.ts
- [ ] T044 [P] [US2] Application unit test for heroDetailsSlice in packages/application/tests/slices/test_hero-details-slice.ts
- [ ] T045 [P] [US2] Infrastructure contract test in packages/infra-mobile/tests/contracts/test_comic-repository.ts
- [ ] T046 [P] [US2] Infrastructure contract test in packages/infra-mobile/tests/contracts/test_movie-repository.ts
- [ ] T047 [P] [US2] Infrastructure contract test in packages/infra-web/tests/contracts/test_comic-repository.ts
- [ ] T048 [P] [US2] Infrastructure contract test in packages/infra-web/tests/contracts/test_movie-repository.ts
- [ ] T049 [P] [US2] Presentation test for mobile in packages/presentation-mobile/tests/screens/test_hero-detail-screen.tsx
- [ ] T050 [P] [US2] Presentation test for web in packages/presentation-web/tests/pages/test_hero-detail-page.tsx

### Implementation for User Story 2

- [ ] T051 [P] [US2] Create Comic entity in packages/domain/src/entities/comic.ts
- [ ] T052 [P] [US2] Create Movie entity in packages/domain/src/entities/movie.ts
- [ ] T053 [P] [US2] Define IComicRepository interface in packages/domain/src/interfaces/i-comic-repository.ts
- [ ] T054 [P] [US2] Define IMovieRepository interface in packages/domain/src/interfaces/i-movie-repository.ts
- [ ] T055 [US2] Implement GetHeroDetailsUseCase in packages/domain/src/use-cases/get-hero-details-use-case.ts (depends on T051, T052, T053, T054)
- [ ] T056 [P] [US2] Create heroDetailsSlice in packages/application/src/slices/hero-details-slice.ts
- [ ] T057 [US2] Implement getHeroDetails thunk in packages/application/src/thunks/get-hero-details-thunk.ts (depends on T055)
- [ ] T058 [P] [US2] Create hero details selectors in packages/application/src/selectors/hero-details-selectors.ts
- [ ] T059 [P] [US2] Create ComicRepository implementation in packages/infra-mobile/src/repositories/comic-repository.ts
- [ ] T060 [P] [US2] Create MovieRepository implementation in packages/infra-mobile/src/repositories/movie-repository.ts
- [ ] T061 [P] [US2] Create ComicRepository implementation in packages/infra-web/src/repositories/comic-repository.ts
- [ ] T062 [P] [US2] Create MovieRepository implementation in packages/infra-web/src/repositories/movie-repository.ts
- [ ] T063 [P] [US2] Create HeroDetailScreen in packages/presentation-mobile/src/screens/hero-detail-screen.tsx
- [ ] T064 [P] [US2] Create HeroDetailPage in packages/presentation-web/src/pages/hero-detail-page.tsx
- [ ] T065 [P] [US2] Create HeroCharacteristics component in packages/presentation-mobile/src/components/hero-characteristics.tsx
- [ ] T066 [P] [US2] Create HeroCharacteristics component in packages/presentation-web/src/components/hero-characteristics.tsx
- [ ] T067 [P] [US2] Create ComicsList component in packages/presentation-mobile/src/components/comics-list.tsx
- [ ] T068 [P] [US2] Create ComicsList component in packages/presentation-web/src/components/comics-list.tsx
- [ ] T069 [P] [US2] Create MoviesList component in packages/presentation-mobile/src/components/movies-list.tsx
- [ ] T070 [P] [US2] Create MoviesList component in packages/presentation-web/src/components/movies-list.tsx
- [ ] T071 [P] [US2] Create ShowMoreButton component in packages/presentation-mobile/src/components/show-more-button.tsx
- [ ] T072 [P] [US2] Create ShowMoreButton component in packages/presentation-web/src/components/show-more-button.tsx
- [ ] T073 [US2] Configure DI bindings for comic and movie repositories in packages/di/src/containers/hero-detail-container.ts
- [ ] T074 [US2] Add navigation from hero list to hero detail in packages/presentation-mobile/src/navigation/ and packages/presentation-web/src/routing/

**Checkpoint**: At this point, User Stories 1 AND 2 should both work independently

---

## Phase 5: User Story 3 - Manage Favorites (Priority: P2)

**Goal**: Allow users to mark heroes as favorites from both list and detail screens with persistence

**Independent Test**: Can be fully tested by marking heroes as favorites from both screens and verifying they appear in a favorites list or are visually distinguished.

### Tests for User Story 3 ⚠️

- [ ] T075 [P] [US3] Domain unit test for ToggleFavoriteUseCase in packages/domain/tests/use-cases/test_toggle-favorite-use-case.ts
- [ ] T076 [P] [US3] Domain unit test for GetFavoritesUseCase in packages/domain/tests/use-cases/test_get-favorites-use-case.ts
- [ ] T077 [P] [US3] Domain unit test for Favorite entity in packages/domain/tests/entities/test_favorite.ts
- [ ] T078 [P] [US3] Application unit test for favoritesSlice in packages/application/tests/slices/test_favorites-slice.ts
- [ ] T079 [P] [US3] Infrastructure contract test in packages/infra-mobile/tests/contracts/test_favorite-repository.ts
- [ ] T080 [P] [US3] Infrastructure contract test in packages/infra-web/tests/contracts/test_favorite-repository.ts
- [ ] T081 [P] [US3] Presentation test for mobile in packages/presentation-mobile/tests/components/test_favorite-button.tsx
- [ ] T082 [P] [US3] Presentation test for web in packages/presentation-web/tests/components/test_favorite-button.tsx

### Implementation for User Story 3

- [ ] T083 [P] [US3] Create Favorite entity in packages/domain/src/entities/favorite.ts
- [ ] T084 [P] [US3] Define IFavoriteRepository interface in packages/domain/src/interfaces/i-favorite-repository.ts
- [ ] T085 [US3] Implement ToggleFavoriteUseCase in packages/domain/src/use-cases/toggle-favorite-use-case.ts (depends on T083, T084)
- [ ] T086 [US3] Implement GetFavoritesUseCase in packages/domain/src/use-cases/get-favorites-use-case.ts (depends on T083, T084)
- [ ] T087 [P] [US3] Create favoritesSlice in packages/application/src/slices/favorites-slice.ts
- [ ] T088 [US3] Implement toggleFavorite thunk in packages/application/src/thunks/toggle-favorite-thunk.ts (depends on T085)
- [ ] T089 [US3] Implement getFavorites thunk in packages/application/src/thunks/get-favorites-thunk.ts (depends on T086)
- [ ] T090 [P] [US3] Create favorites selectors in packages/application/src/selectors/favorites-selectors.ts
- [ ] T091 [P] [US3] Create FavoriteRepository implementation in packages/infra-mobile/src/repositories/favorite-repository.ts
- [ ] T092 [P] [US3] Create FavoriteRepository implementation in packages/infra-web/src/repositories/favorite-repository.ts
- [ ] T093 [P] [US3] Create FavoriteButton component in packages/presentation-mobile/src/components/favorite-button.tsx
- [ ] T094 [P] [US3] Create FavoriteButton component in packages/presentation-web/src/components/favorite-button.tsx
- [ ] T095 [US3] Integrate FavoriteButton with HeroCard components (US1)
- [ ] T096 [US3] Integrate FavoriteButton with HeroDetailScreen/Page (US2)
- [ ] T097 [US3] Configure DI bindings for favorite repository in packages/di/src/containers/favorite-container.ts
- [ ] T098 [US3] Add favorites persistence with AsyncStorage/localStorage in packages/infra-mobile/src/storage/ and packages/infra-web/src/storage/
- [ ] T099 [US3] Add visual indication of favorite status (filled/unfilled heart icon) in all favorite buttons

**Checkpoint**: All user stories should now be independently functional

---

## Phase 6: Polish & Cross-Cutting Concerns

**Purpose**: Improvements that affect multiple user stories

- [ ] T100 [P] Documentation updates in docs/
- [ ] T101 Code cleanup and refactoring across all layers
- [ ] T102 Performance optimization across all stories (bundle size, image loading, state management)
- [ ] T103 [P] Additional unit tests to achieve 90% code coverage in packages/*/tests/
- [ ] T104 Security hardening and validation (input sanitization, type checking)
- [ ] T105 Run quickstart.md validation scenarios
- [ ] T106 [P] Layer isolation validation and linting
- [ ] T107 [P] Dependency injection container optimization
- [ ] T108 Cross-platform testing and validation (iOS, Android, Web)
- [ ] T109 [P] Shared utilities and cross-cutting concerns review
- [ ] T110 Add empty states handling (no search results, no favorites, loading states)
- [ ] T111 Add accessibility features (screen reader support, touch targets)
- [ ] T112 Add error boundaries and graceful error handling
- [ ] T113 Performance monitoring and optimization (60fps UI, <2s load times)

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - can start immediately
- **Foundational (Phase 2)**: Depends on Setup completion - BLOCKS all user stories
- **User Stories (Phase 3+)**: All depend on Foundational phase completion
  - User stories can then proceed in parallel (if staffed)
  - Or sequentially in priority order (P1 → P2 → P3)
- **Polish (Final Phase)**: Depends on all desired user stories being complete

### User Story Dependencies

- **User Story 1 (P1)**: Can start after Foundational (Phase 2) - No dependencies on other stories
- **User Story 2 (P2)**: Can start after Foundational (Phase 2) - May integrate with US1 but should be independently testable
- **User Story 3 (P3)**: Can start after Foundational (Phase 2) - May integrate with US1/US2 but should be independently testable

### Within Each User Story

- Tests (if included) MUST be written and FAIL before implementation
- Models before services
- Services before endpoints
- Core implementation before integration
- Story complete before moving to next priority

### Parallel Opportunities

- All Setup tasks marked [P] can run in parallel
- All Foundational tasks marked [P] can run in parallel (within Phase 2)
- Once Foundational phase completes, all user stories can start in parallel (if team capacity allows)
- All tests for a user story marked [P] can run in parallel
- Models within a story marked [P] can run in parallel
- Different user stories can be worked on in parallel by different team members

---

## Parallel Example: User Story 1

```bash
# Launch all tests for User Story 1 together:
Task: "Domain unit test for GetHeroesListUseCase in packages/domain/tests/use-cases/test_get-heroes-list-use-case.ts"
Task: "Domain unit test for Hero entity in packages/domain/tests/entities/test_hero.ts"
Task: "Application unit test for heroesSlice in packages/application/tests/slices/test_heroes-slice.ts"
Task: "Infrastructure contract test in packages/infra-mobile/tests/contracts/test_hero-repository.ts"
Task: "Infrastructure contract test in packages/infra-web/tests/contracts/test_hero-repository.ts"

# Launch all entities and interfaces for User Story 1 together:
Task: "Create Hero entity in packages/domain/src/entities/hero.ts"
Task: "Create HeroCharacteristics value object in packages/domain/src/value-objects/hero-characteristics.ts"
Task: "Define IHeroRepository interface in packages/domain/src/interfaces/i-hero-repository.ts"

# Launch all infrastructure implementations together:
Task: "Create HeroRepository implementation in packages/infra-mobile/src/repositories/hero-repository.ts"
Task: "Create HeroRepository implementation in packages/infra-web/src/repositories/hero-repository.ts"

# Launch all presentation components together:
Task: "Create HeroesListScreen in packages/presentation-mobile/src/screens/heroes-list-screen.tsx"
Task: "Create HeroesListPage in packages/presentation-web/src/pages/heroes-list-page.tsx"
Task: "Create HeroCard component in packages/presentation-mobile/src/components/hero-card.tsx"
Task: "Create HeroCard component in packages/presentation-web/src/components/hero-card.tsx"
```

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup
2. Complete Phase 2: Foundational (CRITICAL - blocks all stories)
3. Complete Phase 3: User Story 1
4. **STOP and VALIDATE**: Test User Story 1 independently
5. Deploy/demo if ready

### Incremental Delivery

1. Complete Setup + Foundational → Foundation ready
2. Add User Story 1 → Test independently → Deploy/Demo (MVP!)
3. Add User Story 2 → Test independently → Deploy/Demo
4. Add User Story 3 → Test independently → Deploy/Demo
5. Each story adds value without breaking previous stories

### Parallel Team Strategy

With multiple developers:

1. Team completes Setup + Foundational together
2. Once Foundational is done:
   - Developer A: User Story 1
   - Developer B: User Story 2
   - Developer C: User Story 3
3. Stories complete and integrate independently

---

## Notes

- [P] tasks = different files, no dependencies
- [Story] label maps task to specific user story for traceability
- Each user story should be independently completable and testable
- Verify tests fail before implementing
- Commit after each task or logical group
- Stop at any checkpoint to validate story independently
- Avoid: vague tasks, same file conflicts, cross-story dependencies that break independence
- Follow Clean Architecture principles with strict layer isolation
- Test-first development with 90% code coverage requirement
- Mock data approach eliminates external API dependencies
- Cross-platform consistency between mobile and web implementations