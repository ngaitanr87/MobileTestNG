import { Tokens } from '../types/tokens';

type BindingMap = Map<symbol, unknown>;

export class Container {
  private readonly bindings: BindingMap = new Map();

  bind<T>(token: symbol, value: T): void {
    this.bindings.set(token, value);
  }

  get<T>(token: symbol): T {
    const value = this.bindings.get(token);
    if (value === undefined) throw new Error(`No binding for token ${String(token)}`);
    return value as T;
  }
}

export function createContainer(): Container {
  return new Container();
}


