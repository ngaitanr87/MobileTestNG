import { createContainer, Tokens } from '@di';
import { LocalStorageDataSource } from '@web_data/implementations/LocalStorageDataSource';
import { WebHeroDataSource } from '@web_data/sources/MockHeroesSource';
import { HeroRepository } from '@marvel-heroes/domain';

export function createAppContainer() {
  const c = createContainer();
  c.bind(Tokens.LocalStorageDataSource, new LocalStorageDataSource());
  c.bind(Tokens.HeroDataSource, new WebHeroDataSource());
  c.bind(Tokens.HeroRepository, new HeroRepository(c.get(Tokens.HeroDataSource)));
  return c;
}


