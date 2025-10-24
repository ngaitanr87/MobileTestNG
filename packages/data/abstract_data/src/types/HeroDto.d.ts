import { ComicDto } from './ComicDto';
import { MovieDto } from './MovieDto';
export interface HeroCharacteristicsDto {
    powers: string[];
    weaknesses: string[];
    affiliations: string[];
    realName?: string;
}
export interface HeroDto {
    id: string;
    name: string;
    description: string;
    imageUrl: string;
    thumbnailUrl?: string;
    comics: ComicDto[];
    movies: MovieDto[];
    characteristics: HeroCharacteristicsDto;
    createdAt: string;
    updatedAt: string;
}
//# sourceMappingURL=HeroDto.d.ts.map