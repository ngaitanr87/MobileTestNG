import { configureStore } from '@reduxjs/toolkit';
import heroesReducer from './slices/heroes-slice';

export const store = configureStore({
  reducer: {
    heroes: heroesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
