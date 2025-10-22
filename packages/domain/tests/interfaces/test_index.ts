import * as interfaces from '../../src/interfaces';

describe('Interfaces Index', () => {
  it('should have all expected exports', () => {
    // TypeScript interfaces are not available at runtime
    // We just verify the module can be imported without errors
    expect(interfaces).toBeDefined();
    expect(typeof interfaces).toBe('object');
  });
});
