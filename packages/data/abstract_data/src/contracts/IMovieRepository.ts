import { MovieDto } from '../types/MovieDto';

export interface IMovieRepository {
  getMoviesByHero(heroId: string, limit?: number): Promise<MovieDto[]>;
}


