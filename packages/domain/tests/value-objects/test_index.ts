import * as valueObjects from '../../src/value-objects';

describe('Value Objects Index', () => {
  it('should export HeroCharacteristics class', () => {
    expect(valueObjects).toHaveProperty('HeroCharacteristics');
    expect(typeof valueObjects.HeroCharacteristics).toBe('function');
  });

  it('should have all expected exports', () => {
    // TypeScript interfaces are not available at runtime, so we only test the class
    expect(Object.keys(valueObjects)).toEqual(['HeroCharacteristics']);
  });
});
