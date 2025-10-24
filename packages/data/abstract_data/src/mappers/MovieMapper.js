export class MovieMapper {
    toDomain(dto) {
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
//# sourceMappingURL=MovieMapper.js.map