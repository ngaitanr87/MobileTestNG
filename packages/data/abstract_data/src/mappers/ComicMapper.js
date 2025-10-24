export class ComicMapper {
    toDomain(dto) {
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
//# sourceMappingURL=ComicMapper.js.map