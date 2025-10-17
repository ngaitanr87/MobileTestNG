import { createAsyncThunk } from '@reduxjs/toolkit';
import { GetHeroesListUseCase } from '@domain/use-cases/get-heroes-list-use-case';
import { Hero } from '@domain/entities/hero';

export const getHeroesList = createAsyncThunk<
  Hero[],
  string | undefined,
  {
    extra: {
      getHeroesListUseCase: GetHeroesListUseCase;
    };
  }
>(
  'heroes/getHeroesList',
  async (searchTerm, { extra }) => {
    const { getHeroesListUseCase } = extra;
    return await getHeroesListUseCase.execute(searchTerm);
  }
);
