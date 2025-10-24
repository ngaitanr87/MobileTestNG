import heroes from '../../data/heroes.json';
export class MobileHeroDataSource {
    async getHeroes() {
        return heroes;
    }
    async getHeroById(id) {
        const list = heroes;
        const found = list.find((h) => h.id === id);
        return found ?? null;
    }
    async searchHeroes(query) {
        const q = query.toLowerCase();
        const list = heroes;
        return list.filter((h) => h.name.toLowerCase().startsWith(q) || h.description.toLowerCase().startsWith(q));
    }
}
//# sourceMappingURL=MockHeroesSource.js.map