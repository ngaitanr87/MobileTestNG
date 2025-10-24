export const Tokens = {
  LocalStorageDataSource: Symbol('LocalStorageDataSource'),
  HeroRepository: Symbol('HeroRepository'),
  HeroDataSource: Symbol('HeroDataSource')
} as const;

export type TokenKeys = keyof typeof Tokens;


