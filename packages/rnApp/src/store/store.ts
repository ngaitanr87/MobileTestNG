import { configureStore } from '@reduxjs/toolkit';
import { createAppContainer } from '../di/container';
import heroesReducer from './slices/heroesSlice';
import searchReducer from './slices/searchSlice';
import favoritesReducer from './slices/favoritesSlice';

const container = createAppContainer();

export const store = configureStore({
  reducer: {
    heroes: heroesReducer,
    search: searchReducer,
    favorites: favoritesReducer
  },
  middleware: (getDefault) =>
    getDefault({
      thunk: { extraArgument: { container } },
      serializableCheck: {
        // Ignore these paths in the state for serializability checks
        ignoredActions: ['heroes/fetchAll/fulfilled', 'search/query/fulfilled'],
        ignoredPaths: ['heroes.items', 'search.filteredHeroes'],
      },
    })
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;


