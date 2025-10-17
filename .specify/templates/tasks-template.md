---
description: "Task list template for feature implementation"
---

# Tasks: [FEATURE NAME]

**Input**: Design documents from `/specs/[###-feature-name]/`
**Prerequisites**: plan.md (required), spec.md (required for user stories), research.md, data-model.md, contracts/

**Tests**: The examples below include test tasks. Tests are OPTIONAL - only include them if explicitly requested in the feature specification.

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
- Paths shown below follow Clean Architecture structure - adjust based on plan.md

<!-- 
  ============================================================================
  IMPORTANT: The tasks below are SAMPLE TASKS for illustration purposes only.
  
  The /speckit.tasks command MUST replace these with actual tasks based on:
  - User stories from spec.md (with their priorities P1, P2, P3...)
  - Feature requirements from plan.md
  - Entities from data-model.md
  - Endpoints from contracts/
  
  Tasks MUST be organized by user story so each story can be:
  - Implemented independently
  - Tested independently
  - Delivered as an MVP increment
  
  DO NOT keep these sample tasks in the generated tasks.md file.
  ============================================================================
-->

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization and basic structure

- [ ] T001 Create project structure per implementation plan
- [ ] T002 Initialize [language] project with [framework] dependencies
- [ ] T003 [P] Configure linting and formatting tools

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core infrastructure that MUST be complete before ANY user story can be implemented

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

Examples of foundational tasks (Clean Architecture):

- [ ] T004 [P] Setup Domain layer structure with entities and value objects
- [ ] T005 [P] Define repository interfaces in Domain layer
- [ ] T006 [P] Create Use Cases in Domain layer with business logic
- [ ] T007 [P] Setup Application layer with Redux Toolkit store and slices
- [ ] T008 [P] Configure Dependency Injection containers in DI layer
- [ ] T009 [P] Setup Infrastructure layer adapters (mobile/web variants)
- [ ] T010 [P] Create shared utilities and cross-cutting concerns
- [ ] T011 Configure layer isolation linting rules and CI validation

**Checkpoint**: Foundation ready - user story implementation can now begin in parallel

---

## Phase 3: User Story 1 - [Title] (Priority: P1) 🎯 MVP

**Goal**: [Brief description of what this story delivers]

**Independent Test**: [How to verify this story works on its own]

### Tests for User Story 1 (OPTIONAL - only if tests requested) ⚠️

**NOTE: Write these tests FIRST, ensure they FAIL before implementation**

- [ ] T010 [P] [US1] Domain unit test for [UseCase] in packages/domain/tests/use-cases/test_[usecase].ts
- [ ] T011 [P] [US1] Domain unit test for [Entity] in packages/domain/tests/entities/test_[entity].ts
- [ ] T012 [P] [US1] Application unit test for [Slice] in packages/application/tests/slices/test_[slice].ts
- [ ] T013 [P] [US1] Infrastructure contract test in packages/infra-mobile/tests/contracts/test_[repository].ts
- [ ] T014 [P] [US1] Infrastructure contract test in packages/infra-web/tests/contracts/test_[repository].ts
- [ ] T015 [P] [US1] Presentation test for mobile in packages/presentation-mobile/tests/components/test_[component].tsx
- [ ] T016 [P] [US1] Presentation test for web in packages/presentation-web/tests/components/test_[component].tsx

### Implementation for User Story 1

- [ ] T017 [P] [US1] Create [Entity1] in packages/domain/src/entities/[entity1].ts
- [ ] T018 [P] [US1] Create [Entity2] in packages/domain/src/entities/[entity2].ts
- [ ] T019 [P] [US1] Define [IRepository] interface in packages/domain/src/interfaces/[repository].ts
- [ ] T020 [US1] Implement [UseCase] in packages/domain/src/use-cases/[usecase].ts (depends on T017, T018, T019)
- [ ] T021 [P] [US1] Create Redux slice in packages/application/src/slices/[slice].ts
- [ ] T022 [US1] Implement thunk in packages/application/src/thunks/[thunk].ts (depends on T020)
- [ ] T023 [P] [US1] Create repository implementation in packages/infra-mobile/src/[repository].ts
- [ ] T024 [P] [US1] Create repository implementation in packages/infra-web/src/[repository].ts
- [ ] T025 [P] [US1] Create UI components in packages/presentation-mobile/src/components/[component].tsx
- [ ] T026 [P] [US1] Create UI components in packages/presentation-web/src/components/[component].tsx
- [ ] T027 [US1] Configure DI bindings in packages/di/src/containers/[container].ts
- [ ] T028 [US1] Add error handling and logging in packages/shared/src/

**Checkpoint**: At this point, User Story 1 should be fully functional and testable independently

---

## Phase 4: User Story 2 - [Title] (Priority: P2)

**Goal**: [Brief description of what this story delivers]

**Independent Test**: [How to verify this story works on its own]

### Tests for User Story 2 (OPTIONAL - only if tests requested) ⚠️

- [ ] T029 [P] [US2] Domain unit test for [UseCase] in packages/domain/tests/use-cases/test_[usecase].ts
- [ ] T030 [P] [US2] Application unit test for [Slice] in packages/application/tests/slices/test_[slice].ts
- [ ] T031 [P] [US2] Infrastructure contract test in packages/infra-mobile/tests/contracts/test_[repository].ts
- [ ] T032 [P] [US2] Infrastructure contract test in packages/infra-web/tests/contracts/test_[repository].ts
- [ ] T033 [P] [US2] Presentation test for mobile in packages/presentation-mobile/tests/components/test_[component].tsx
- [ ] T034 [P] [US2] Presentation test for web in packages/presentation-web/tests/components/test_[component].tsx

### Implementation for User Story 2

- [ ] T035 [P] [US2] Create [Entity] in packages/domain/src/entities/[entity].ts
- [ ] T036 [P] [US2] Define [IRepository] interface in packages/domain/src/interfaces/[repository].ts
- [ ] T037 [US2] Implement [UseCase] in packages/domain/src/use-cases/[usecase].ts (depends on T035, T036)
- [ ] T038 [P] [US2] Create Redux slice in packages/application/src/slices/[slice].ts
- [ ] T039 [US2] Implement thunk in packages/application/src/thunks/[thunk].ts (depends on T037)
- [ ] T040 [P] [US2] Create repository implementation in packages/infra-mobile/src/[repository].ts
- [ ] T041 [P] [US2] Create repository implementation in packages/infra-web/src/[repository].ts
- [ ] T042 [P] [US2] Create UI components in packages/presentation-mobile/src/components/[component].tsx
- [ ] T043 [P] [US2] Create UI components in packages/presentation-web/src/components/[component].tsx
- [ ] T044 [US2] Configure DI bindings in packages/di/src/containers/[container].ts
- [ ] T045 [US2] Integrate with User Story 1 components (if needed)

**Checkpoint**: At this point, User Stories 1 AND 2 should both work independently

---

## Phase 5: User Story 3 - [Title] (Priority: P3)

**Goal**: [Brief description of what this story delivers]

**Independent Test**: [How to verify this story works on its own]

### Tests for User Story 3 (OPTIONAL - only if tests requested) ⚠️

- [ ] T046 [P] [US3] Domain unit test for [UseCase] in packages/domain/tests/use-cases/test_[usecase].ts
- [ ] T047 [P] [US3] Application unit test for [Slice] in packages/application/tests/slices/test_[slice].ts
- [ ] T048 [P] [US3] Infrastructure contract test in packages/infra-mobile/tests/contracts/test_[repository].ts
- [ ] T049 [P] [US3] Infrastructure contract test in packages/infra-web/tests/contracts/test_[repository].ts
- [ ] T050 [P] [US3] Presentation test for mobile in packages/presentation-mobile/tests/components/test_[component].tsx
- [ ] T051 [P] [US3] Presentation test for web in packages/presentation-web/tests/components/test_[component].tsx

### Implementation for User Story 3

- [ ] T052 [P] [US3] Create [Entity] in packages/domain/src/entities/[entity].ts
- [ ] T053 [P] [US3] Define [IRepository] interface in packages/domain/src/interfaces/[repository].ts
- [ ] T054 [US3] Implement [UseCase] in packages/domain/src/use-cases/[usecase].ts (depends on T052, T053)
- [ ] T055 [P] [US3] Create Redux slice in packages/application/src/slices/[slice].ts
- [ ] T056 [US3] Implement thunk in packages/application/src/thunks/[thunk].ts (depends on T054)
- [ ] T057 [P] [US3] Create repository implementation in packages/infra-mobile/src/[repository].ts
- [ ] T058 [P] [US3] Create repository implementation in packages/infra-web/src/[repository].ts
- [ ] T059 [P] [US3] Create UI components in packages/presentation-mobile/src/components/[component].tsx
- [ ] T060 [P] [US3] Create UI components in packages/presentation-web/src/components/[component].tsx
- [ ] T061 [US3] Configure DI bindings in packages/di/src/containers/[container].ts

**Checkpoint**: All user stories should now be independently functional

---

[Add more user story phases as needed, following the same pattern]

---

## Phase N: Polish & Cross-Cutting Concerns

**Purpose**: Improvements that affect multiple user stories

- [ ] T062 [P] Documentation updates in docs/
- [ ] T063 Code cleanup and refactoring across all layers
- [ ] T064 Performance optimization across all stories
- [ ] T065 [P] Additional unit tests (if requested) in packages/*/tests/
- [ ] T066 Security hardening and validation
- [ ] T067 Run quickstart.md validation
- [ ] T068 [P] Layer isolation validation and linting
- [ ] T069 [P] Dependency injection container optimization
- [ ] T070 Cross-platform testing and validation
- [ ] T071 [P] Shared utilities and cross-cutting concerns review

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
# Launch all tests for User Story 1 together (if tests requested):
Task: "Domain unit test for [UseCase] in packages/domain/tests/use-cases/test_[usecase].ts"
Task: "Domain unit test for [Entity] in packages/domain/tests/entities/test_[entity].ts"
Task: "Application unit test for [Slice] in packages/application/tests/slices/test_[slice].ts"
Task: "Infrastructure contract test in packages/infra-mobile/tests/contracts/test_[repository].ts"
Task: "Infrastructure contract test in packages/infra-web/tests/contracts/test_[repository].ts"

# Launch all entities and interfaces for User Story 1 together:
Task: "Create [Entity1] in packages/domain/src/entities/[entity1].ts"
Task: "Create [Entity2] in packages/domain/src/entities/[entity2].ts"
Task: "Define [IRepository] interface in packages/domain/src/interfaces/[repository].ts"

# Launch all infrastructure implementations together:
Task: "Create repository implementation in packages/infra-mobile/src/[repository].ts"
Task: "Create repository implementation in packages/infra-web/src/[repository].ts"

# Launch all presentation components together:
Task: "Create UI components in packages/presentation-mobile/src/components/[component].tsx"
Task: "Create UI components in packages/presentation-web/src/components/[component].tsx"
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



