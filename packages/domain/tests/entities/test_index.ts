import * as entities from '../../src/entities';

describe('Entities Index', () => {
  it('should export Hero class', () => {
    expect(entities).toHaveProperty('Hero');
    expect(typeof entities.Hero).toBe('function');
  });

  it('should have all expected exports', () => {
    // TypeScript interfaces are not available at runtime, so we only test the class
    expect(Object.keys(entities)).toEqual(['Hero']);
  });
});
