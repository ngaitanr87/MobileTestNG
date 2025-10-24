export class HeroMapper {
    toDomain(dto) {
        return {
            id: dto.id,
            name: dto.name,
            description: dto.description,
            imageUrl: dto.imageUrl,
            comics: dto.comics.map((c) => this.toComic(c)),
            movies: dto.movies.map((m) => this.toMovie(m)),
            characteristics: dto.characteristics,
            createdAt: new Date(dto.createdAt),
            updatedAt: new Date(dto.updatedAt)
        };
    }
    toComic(dto) {
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
    toMovie(dto) {
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
//# sourceMappingURL=HeroMapper.js.map