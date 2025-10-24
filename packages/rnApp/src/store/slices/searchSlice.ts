import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Tokens } from '@marvel-heroes/di';

export interface SearchState {
  searchTerm: string;
  filteredHeroes: any[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error?: string;
}

const initialState: SearchState = {
  searchTerm: '',
  filteredHeroes: [],
  status: 'idle'
};

export const searchHeroes = createAsyncThunk<any[], string, { extra: { container: any } }>(
  'search/query',
  async (term, { extra }) => {
    const repo = extra.container.get(Tokens.HeroRepository);
    return await repo.search(term);
  }
);

const slice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchTerm(state, action: PayloadAction<string>) {
      state.searchTerm = action.payload;
    }
  },
  extraReducers: (b) => {
    b.addCase(searchHeroes.pending, (state) => {
      state.status = 'loading';
    })
      .addCase(searchHeroes.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.filteredHeroes = action.payload;
      })
      .addCase(searchHeroes.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export const { setSearchTerm } = slice.actions;
export default slice.reducer;


