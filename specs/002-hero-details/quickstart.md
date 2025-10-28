# Quickstart: Hero Details with React Native Paper

This guide explains how to implement the Hero Details screen using React Native Paper (MD3) in `packages/rnApp`.

Reference: React Native Paper (`https://reactnativepaper.com/`).

## 1) Install dependencies (documentation-only)

- Add UI libs to rnApp:
  - `react-native-paper`
  - `react-native-vector-icons`
  - `react-native-safe-area-context`

iOS: run `pod install` after installing dependencies.

## 2) App bootstrap

Wrap the app in Paper's `Provider` and ensure safe area handling. Use MD3 theme.

```tsx
// App.tsx (excerpt)
import { Provider as PaperProvider, MD3LightTheme } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaProvider>
      <PaperProvider theme={MD3LightTheme}>
        {/* Navigation + Screens */}
      </PaperProvider>
    </SafeAreaProvider>
  );
}
```

## 3) UI building blocks for Hero Details

- `Appbar.Header` for screen title and back action
- `Card` for hero header (image + text)
- `List.Section` + `List.Item` for characteristics
- `Divider` for section separation
- `Button` for "Show more"
- `ActivityIndicator` for loading
- `Snackbar` for load errors and retry

## 4) Behavior wiring

- Back navigation: restore list search/filter and scroll position (per spec FR-005)
- Characteristics: show fixed subset (aliases, powers/abilities, affiliations, origin); hide missing
- Comics/Movies: default 10 newest; "Show more" reveals all remaining, then hide control
- Dates: render using device locale short date

## 5) Testing

- Render Hero Details with Paper `Provider` wrapper
- Verify sections and lists per acceptance scenarios
- Mock repositories to provide hero, comics, movies
- Ensure a11y roles/labels on interactive elements

## 6) Performance

- Use `FlatList` for comics and movies
- Provide stable `keyExtractor`
- Batch state updates; avoid heavy inline computations
