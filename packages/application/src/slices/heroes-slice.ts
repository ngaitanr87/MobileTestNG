import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Hero } from '@domain/entities/hero';
import { getHeroesList } from '../thunks/get-heroes-list-thunk';

export interface HeroesState {
  heroes: Hero[];
  loading: boolean;
  error: string | null;
  searchTerm: string;
}

const initialState: HeroesState = {
  heroes: [],
  loading: false,
  error: null,
  searchTerm: '',
};

export const heroesSlice = createSlice({
  name: 'heroes',
  initialState,
  reducers: {
    setSearchTerm: (state, action: PayloadAction<string>) => {
      state.searchTerm = action.payload;
    },
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getHeroesList.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getHeroesList.fulfilled, (state, action: PayloadAction<Hero[]>) => {
        state.loading = false;
        state.heroes = action.payload;
        state.error = null;
      })
      .addCase(getHeroesList.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch heroes';
      });
  },
});

export const { setSearchTerm, clearError } = heroesSlice.actions;
export default heroesSlice.reducer;
