# Phase 0 Research: Hero Details + React Native Paper

## Decisions

- React Native Paper will be the primary UI component library for all new UI in rnApp.
  - Rationale: High-quality Material Design components, accessibility, theming (Material You), and platform adaptation out-of-the-box. Faster delivery with polished UX.
  - Alternatives: NativeBase, React Native Elements (not selected due to less cohesive Material You support or different design systems).
  - Reference: React Native Paper site and docs (`https://reactnativepaper.com/`).

- Date formatting: Use device locale short date for comic publication and movie release dates.
  - Rationale: Matches user expectations per locale and improves international usability.

- Ordering: Comics and movies ordered by release date descending (newest first).
  - Rationale: Highlights latest and most relevant content first.

- Show More behavior: Reveal all remaining items on first tap and then hide/disable the control.
  - Rationale: Single action reduces repeated taps and keeps UI simple.

- Characteristics subset: Fixed fields (aliases, powers/abilities, affiliations, origin); hide missing fields.
  - Rationale: Consistent layout and predictable testing; avoids placeholder noise.

## Best Practices for React Native Paper Usage

- Use MD3 themes and wrap the app with Paper's `Provider` to enable theming, typography, and components. Consider dark theme toggling in the future.
- Prefer Paper primitives for common UI: `Appbar`, `Card`, `List.Item`, `Divider`, `IconButton`, `Button`, `Chip`, `Snackbar`, `ActivityIndicator`, `Avatar`.
- Respect accessibility: ensure labels, roles, and contrast; Paper supports accessibility and RTL by default.
- Keep performance responsive: batched updates, FlatList optimizations for long lists.
- Reference: React Native Paper site and docs (`https://reactnativepaper.com/`).

## Open Questions

None for this feature. Clarifications in spec fully resolve behavior.
