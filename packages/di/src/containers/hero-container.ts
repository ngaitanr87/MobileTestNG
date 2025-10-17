import { Container } from 'inversify';
import { TYPES } from '../types';
import { IHeroRepository } from '@domain/interfaces/i-hero-repository';
import { GetHeroesListUseCase } from '@domain/use-cases/get-heroes-list-use-case';
import { MobileHeroRepository } from '@infra-mobile/repositories/hero-repository';
import { WebHeroRepository } from '@infra-web/repositories/hero-repository';

export const configureHeroContainer = (container: Container, platform: 'mobile' | 'web') => {
  // Bind repository based on platform
  if (platform === 'mobile') {
    container.bind<IHeroRepository>(TYPES.IHeroRepository).to(MobileHeroRepository);
  } else {
    container.bind<IHeroRepository>(TYPES.IHeroRepository).to(WebHeroRepository);
  }

  // Bind use cases
  container.bind<GetHeroesListUseCase>(TYPES.GetHeroesListUseCase).to(GetHeroesListUseCase);
};
