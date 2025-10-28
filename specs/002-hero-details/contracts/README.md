# Contracts for Hero Details

This feature uses offline mock data and does not expose or integrate with external HTTP APIs. Therefore, there are no OpenAPI/GraphQL endpoint contracts to define for User Story 1 (Hero Details).

Contract boundaries relevant to this feature:
- Domain interfaces for `IHeroRepository`, `IComicRepository`, `IMovieRepository` (defined in `packages/domain`).
- Platform-specific implementations provided in `packages/data/mobile_data`.

If a future story introduces remote data fetching, add endpoint contracts here (OpenAPI) and link them to data layer implementations.
