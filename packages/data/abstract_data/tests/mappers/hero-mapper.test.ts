import { HeroMapper } from '../../src/mappers/HeroMapper';

describe('HeroMapper', () => {
  it('maps dto to domain', () => {
    const mapper = new HeroMapper();
    const now = new Date().toISOString();
    const dto = {
      id: '1',
      name: 'Iron Man',
      description: 'Genius, billionaire, playboy, philanthropist',
      imageUrl: 'http://image',
      comics: [{ id: 'c1', title: 'C1', description: '', imageUrl: '', publishedDate: now, pageCount: 10, price: 1 }],
      movies: [{ id: 'm1', title: 'M1', description: '', imageUrl: '', releaseDate: now, duration: 120, rating: 5 }],
      characteristics: { powers: [], weaknesses: [], affiliations: [] },
      createdAt: now,
      updatedAt: now
    } as any;

    const domain = mapper.toDomain(dto);
    expect(domain.id).toBe('1');
    expect(domain.name).toBe('Iron Man');
    expect(Array.isArray(domain.comics)).toBe(true);
    expect(Array.isArray(domain.movies)).toBe(true);
  });
});


