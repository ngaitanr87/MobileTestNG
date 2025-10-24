import { ComicDto } from '../types/ComicDto';

export interface IComicRepository {
  getComicsByHero(heroId: string, limit?: number): Promise<ComicDto[]>;
}


