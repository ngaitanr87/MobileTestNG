import React from 'react';
import { HeroData as Hero } from '@shared/types/hero';
import styles from './hero-card.module.css';

interface HeroCardProps {
  hero: Hero;
  onClick: () => void;
}

export const HeroCard: React.FC<HeroCardProps> = ({ hero, onClick }) => {
  return (
    <div
      className={styles.container}
      onClick={onClick}
      role="button"
      tabIndex={0}
      aria-label={`View details for ${hero.name}`}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick();
        }
      }}
    >
      <img
        src={hero.imageUrl}
        alt={hero.name}
        className={styles.image}
        loading="lazy"
      />
      <div className={styles.content}>
        <h3 className={styles.name}>{hero.name}</h3>
        <p className={styles.description}>{hero.description}</p>
        <div className={styles.characteristics}>
          <span className={styles.characteristicText}>
            {hero.characteristics.species} • {hero.characteristics.gender}
          </span>
        </div>
      </div>
    </div>
  );
};
