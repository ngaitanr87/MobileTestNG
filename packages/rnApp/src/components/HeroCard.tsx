import React from 'react';
import { View, Text } from 'react-native';
import { FavoriteButton } from './FavoriteButton';
import { getDefaultHeroCardStrategy } from '../ui/strategy/heroCardStrategies';

export function HeroCard({ hero }: { hero: any }) {
  return (
    <View>
      {getDefaultHeroCardStrategy().render(hero)}
      <FavoriteButton heroId={hero.id} />
    </View>
  );
}


