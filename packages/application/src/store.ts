import { configureStore } from '@reduxjs/toolkit';
// TODO: Import slices as they are implemented

export const store = configureStore({
  reducer: {
    // TODO: Add slices as they are implemented
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
