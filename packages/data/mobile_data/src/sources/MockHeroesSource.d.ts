import { IHeroDataSource } from 'abstract_data';
export declare class MobileHeroDataSource implements IHeroDataSource {
    getHeroes(): Promise<any>;
    getHeroById(id: string): Promise<any>;
    searchHeroes(query: string): Promise<any>;
}
//# sourceMappingURL=MockHeroesSource.d.ts.map