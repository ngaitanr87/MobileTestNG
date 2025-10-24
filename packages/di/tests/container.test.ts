import { createContainer, Container } from '../src/containers/container';
import { Tokens } from '../src/types/tokens';

describe('Container', () => {
  it('binds and resolves values', () => {
    const c: Container = createContainer();
    const value = { ok: true };
    c.bind(Tokens.LocalStorageDataSource, value);
    expect(c.get(Tokens.LocalStorageDataSource)).toBe(value);
  });

  it('throws when token not bound', () => {
    const c: Container = createContainer();
    expect(() => c.get(Tokens.LocalStorageDataSource)).toThrow();
  });
});


