import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { HeroesListPage } from './pages/heroes-list-page';
import { heroesSlice } from '@application/slices/heroes-slice';
import { logger } from '@shared/logging';
import './main.css';

// Configure Redux store
const store = configureStore({
  reducer: {
    heroes: heroesSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Disable for HeroCharacteristics objects
      immutableCheck: false,
    }),
});

// Log app initialization
logger.info('Marvel Heroes App starting...');

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <div className="app">
        <header className="app-header">
          <h1>🦸‍♂️ Marvel Heroes</h1>
          <p>Discover your favorite Marvel characters</p>
        </header>
        <main className="app-main">
          <HeroesListPage />
        </main>
        <footer className="app-footer">
          <p>Built with Clean Architecture & React</p>
        </footer>
      </div>
    </Provider>
  </React.StrictMode>
);
