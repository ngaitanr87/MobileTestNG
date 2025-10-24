import React from 'react';

export interface HeroCardRenderStrategy {
  render(hero: any): JSX.Element;
}

export class CompactHeroCardStrategy implements HeroCardRenderStrategy {
  render(hero: any): JSX.Element {
    return (
      <>
        <div>{hero.name}</div>
      </>
    );
  }
}

export class DetailedHeroCardStrategy implements HeroCardRenderStrategy {
  render(hero: any): JSX.Element {
    return (
      <>
        <div>{hero.name}</div>
        {hero.description ? <div>{hero.description}</div> : null}
      </>
    );
  }
}

export function getDefaultHeroCardStrategy(): HeroCardRenderStrategy {
  return new CompactHeroCardStrategy();
}


