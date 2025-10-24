import { createContainer, Tokens } from '@di';
import { AsyncStorageDataSource } from '@mobile_data/implementations/AsyncStorageDataSource';
import { MobileHeroDataSource } from '@mobile_data/sources/MockHeroesSource';
import { HeroRepository } from '@marvel-heroes/domain';

export function createAppContainer() {
  const c = createContainer();
  c.bind(Tokens.LocalStorageDataSource, new AsyncStorageDataSource());
  c.bind(Tokens.HeroDataSource, new MobileHeroDataSource());
  c.bind(Tokens.HeroRepository, new HeroRepository(c.get(Tokens.HeroDataSource)));
  return c;
}


