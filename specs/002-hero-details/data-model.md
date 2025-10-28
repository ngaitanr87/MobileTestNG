# Phase 1: Data Model for Hero Details

## Entities

### Hero
- id: string (unique)
- name: string (required)
- description: string (optional)
- imageUrl: string (optional URL)
- characteristics: object (optional)
  - aliases: string[] (optional)
  - powersAbilities: string[] (optional)
  - affiliations: string[] (optional)
  - origin: string (optional)

Relationships:
- Hero has many Comics
- Hero has many Movies

### Comic
- id: string (unique)
- heroId: string (FK to Hero.id)
- title: string (required)
- publicationDate: string (ISO or parseable; rendered as device locale short date)
- coverImageUrl: string (optional URL)

### Movie
- id: string (unique)
- heroId: string (FK to Hero.id)
- title: string (required)
- releaseDate: string (ISO or parseable; rendered as device locale short date)
- posterImageUrl: string (optional URL)

## Lists & Ordering
- Comics and Movies lists default to top 10 items, ordered by date descending (newest first).
- "Show more" reveals all remaining items in a single action.

## Validation Rules
- `name` must be non-empty for Hero; `title` must be non-empty for Comic/Movie.
- Image URLs may be missing; UI must show placeholders instead of broken images.
- Dates may be missing or invalid; UI must omit date or display "Unknown" per locale standards.

## Performance & Scale Assumptions
- Up to 30 heroes in-memory; per-hero lists up to dozens of comics/movies.
- Rendering must meet Success Criteria (≤3s load; ≤500ms list update).
