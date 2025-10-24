import { CompactHeroCardStrategy, DetailedHeroCardStrategy } from '../../src/ui/strategy/heroCardStrategies';

describe('RN UI Strategy - HeroCard', () => {
  const hero = { id: '1', name: 'Iron Man', description: 'Genius' };

  it('Compact and Detailed strategies implement the same contract', () => {
    const compact = new CompactHeroCardStrategy();
    const detailed = new DetailedHeroCardStrategy();
    expect(typeof compact.render).toBe('function');
    expect(typeof detailed.render).toBe('function');
  });

  it('Strategies render without throwing and return React elements', () => {
    const compact = new CompactHeroCardStrategy();
    const detailed = new DetailedHeroCardStrategy();
    const c = compact.render(hero) as any;
    const d = detailed.render(hero) as any;
    expect(c).toBeTruthy();
    expect(d).toBeTruthy();
    expect(typeof c).toBe('object');
    expect(typeof d).toBe('object');
  });
});


