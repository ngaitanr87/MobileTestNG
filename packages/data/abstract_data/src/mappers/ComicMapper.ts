import { ComicDto } from '../types/ComicDto';

export class ComicMapper {
  toDomain(dto: ComicDto): any {
    return {
      id: dto.id,
      title: dto.title,
      description: dto.description,
      imageUrl: dto.imageUrl,
      publishedDate: new Date(dto.publishedDate),
      pageCount: dto.pageCount,
      price: dto.price
    };
  }
}


