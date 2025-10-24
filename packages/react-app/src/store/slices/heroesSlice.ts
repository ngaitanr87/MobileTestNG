import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Tokens } from '@di';

export interface HeroesState {
  items: any[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error?: string;
}

const initialState: HeroesState = {
  items: [],
  status: 'idle'
};

export const fetchHeroes = createAsyncThunk<any[], void, { extra: { container: any } }>(
  'heroes/fetchAll',
  async (_, { extra }) => {
    const repo = extra.container.get(Tokens.HeroRepository);
    return await repo.getAll();
  }
);

const heroesSlice = createSlice({
  name: 'heroes',
  initialState,
  reducers: {},
  extraReducers: (b) => {
    b.addCase(fetchHeroes.pending, (state) => {
      state.status = 'loading';
    })
      .addCase(fetchHeroes.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchHeroes.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export default heroesSlice.reducer;


