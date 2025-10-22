import * as thunks from '../../src/thunks';

describe('Thunks Index', () => {
  it('should export getHeroesList thunk', () => {
    expect(thunks).toHaveProperty('getHeroesList');
    expect(typeof thunks.getHeroesList).toBe('function');
  });
});
