import React from 'react';
import { Text } from 'react-native';

export interface HeroCardRenderStrategy {
  render(hero: any): JSX.Element;
}

export class CompactHeroCardStrategy implements HeroCardRenderStrategy {
  render(hero: any): JSX.Element {
    return <Text>{hero.name}</Text>;
  }
}

export class DetailedHeroCardStrategy implements HeroCardRenderStrategy {
  render(hero: any): JSX.Element {
    return (
      <>
        <Text>{hero.name}</Text>
        {hero.description ? <Text>{hero.description}</Text> : null}
      </>
    );
  }
}

export function getDefaultHeroCardStrategy(): HeroCardRenderStrategy {
  return new CompactHeroCardStrategy();
}


