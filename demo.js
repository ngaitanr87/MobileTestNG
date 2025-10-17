#!/usr/bin/env node

/**
 * Marvel Heroes App Demo
 * 
 * This script demonstrates the core functionality of the Marvel Heroes app
 * by running the domain logic and showing the heroes data.
 */

const { GetHeroesListUseCase } = require('./packages/domain/dist/use-cases/get-heroes-list-use-case');
const { MobileHeroRepository } = require('./packages/infra-mobile/dist/repositories/hero-repository');

async function runDemo() {
  console.log('🦸‍♂️ Marvel Heroes App Demo\n');
  console.log('=' .repeat(50));
  
  try {
    // Initialize the repository and use case
    const heroRepository = new MobileHeroRepository();
    const getHeroesListUseCase = new GetHeroesListUseCase(heroRepository);
    
    console.log('📋 Loading all heroes...\n');
    
    // Get all heroes
    const allHeroes = await getHeroesListUseCase.execute();
    console.log(`✅ Loaded ${allHeroes.length} heroes successfully!\n`);
    
    // Display first 5 heroes
    console.log('🌟 Featured Heroes:');
    console.log('-'.repeat(30));
    allHeroes.slice(0, 5).forEach((hero, index) => {
      console.log(`${index + 1}. ${hero.name}`);
      console.log(`   ${hero.description}`);
      console.log(`   Species: ${hero.characteristics.species} | Gender: ${hero.characteristics.gender}`);
      console.log(`   Powers: ${hero.characteristics.powers.slice(0, 2).join(', ')}`);
      console.log('');
    });
    
    // Test search functionality
    console.log('🔍 Testing search functionality...\n');
    
    const searchTerms = ['Iron', 'Spider', 'Captain'];
    
    for (const term of searchTerms) {
      const searchResults = await getHeroesListUseCase.execute(term);
      console.log(`Search for "${term}": ${searchResults.length} results`);
      if (searchResults.length > 0) {
        console.log(`  - ${searchResults[0].name}`);
      }
    }
    
    console.log('\n' + '='.repeat(50));
    console.log('🎉 Demo completed successfully!');
    console.log('\n📱 The app includes:');
    console.log('  • Browse 30 Marvel heroes');
    console.log('  • Real-time search functionality');
    console.log('  • Hero details with characteristics');
    console.log('  • Cross-platform support (Mobile & Web)');
    console.log('  • Clean Architecture implementation');
    console.log('  • Comprehensive test coverage');
    
  } catch (error) {
    console.error('❌ Demo failed:', error.message);
    process.exit(1);
  }
}

// Run the demo
runDemo();
