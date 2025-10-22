import * as slices from '../../src/slices';

describe('Slices Index', () => {
  it('should export heroesSlice', () => {
    expect(slices).toHaveProperty('heroesSlice');
    expect(slices.heroesSlice).toHaveProperty('name', 'heroes');
    expect(slices.heroesSlice).toHaveProperty('reducer');
    expect(slices.heroesSlice).toHaveProperty('actions');
    expect(slices.heroesSlice).toHaveProperty('getInitialState');
  });
});
