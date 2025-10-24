import { MovieDto } from '../types/MovieDto';

export class MovieMapper {
  toDomain(dto: MovieDto): any {
    return {
      id: dto.id,
      title: dto.title,
      description: dto.description,
      imageUrl: dto.imageUrl,
      releaseDate: new Date(dto.releaseDate),
      duration: dto.duration,
      rating: dto.rating
    };
  }
}


