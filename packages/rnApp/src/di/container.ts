import { createContainer, Tokens } from '@marvel-heroes/di';
import { AsyncStorageDataSource } from 'mobile_data/dist/implementations/AsyncStorageDataSource';
import { MobileHeroDataSource } from 'mobile_data/dist/sources/MockHeroesSource';
import { HeroRepository } from '@marvel-heroes/domain';

export function createAppContainer() {
  const c = createContainer();
  c.bind(Tokens.LocalStorageDataSource, new AsyncStorageDataSource());
  c.bind(Tokens.HeroDataSource, new MobileHeroDataSource());
  c.bind(Tokens.HeroRepository, new HeroRepository(c.get(Tokens.HeroDataSource)));
  return c;
}
