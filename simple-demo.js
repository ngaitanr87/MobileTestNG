#!/usr/bin/env node

/**
 * Marvel Heroes App - Simple Demo
 * 
 * This script demonstrates the heroes data and basic functionality
 */

const fs = require('fs');
const path = require('path');

function runSimpleDemo() {
  console.log('🦸‍♂️ Marvel Heroes App - Simple Demo\n');
  console.log('=' .repeat(50));
  
  try {
    // Load the heroes data directly
    const heroesDataPath = path.join(__dirname, 'packages/infra-mobile/src/data/heroes.json');
    const heroesData = JSON.parse(fs.readFileSync(heroesDataPath, 'utf8'));
    
    console.log(`📋 Loaded ${heroesData.length} heroes from mock data!\n`);
    
    // Display first 5 heroes
    console.log('🌟 Featured Heroes:');
    console.log('-'.repeat(30));
    heroesData.slice(0, 5).forEach((hero, index) => {
      console.log(`${index + 1}. ${hero.name}`);
      console.log(`   ${hero.description}`);
      console.log(`   Species: ${hero.characteristics.species} | Gender: ${hero.characteristics.gender}`);
      console.log(`   Powers: ${hero.characteristics.powers.slice(0, 2).join(', ')}`);
      console.log(`   First Appearance: ${hero.characteristics.firstAppearance}`);
      console.log('');
    });
    
    // Test search functionality
    console.log('🔍 Testing search functionality...\n');
    
    const searchTerms = ['Iron', 'Spider', 'Captain', 'Thor'];
    
    for (const term of searchTerms) {
      const searchResults = heroesData.filter(hero => 
        hero.name.toLowerCase().startsWith(term.toLowerCase()) ||
        hero.description.toLowerCase().startsWith(term.toLowerCase())
      );
      console.log(`Search for "${term}": ${searchResults.length} results`);
      if (searchResults.length > 0) {
        console.log(`  - ${searchResults[0].name}`);
      }
    }
    
    // Show some statistics
    console.log('\n📊 Data Statistics:');
    console.log('-'.repeat(20));
    const species = [...new Set(heroesData.map(hero => hero.characteristics.species))];
    const genders = [...new Set(heroesData.map(hero => hero.characteristics.gender))];
    const affiliations = [...new Set(heroesData.flatMap(hero => hero.characteristics.affiliations))];
    
    console.log(`Total Heroes: ${heroesData.length}`);
    console.log(`Species: ${species.join(', ')}`);
    console.log(`Genders: ${genders.join(', ')}`);
    console.log(`Affiliations: ${affiliations.slice(0, 5).join(', ')}...`);
    
    console.log('\n' + '='.repeat(50));
    console.log('🎉 Demo completed successfully!');
    console.log('\n📱 The app includes:');
    console.log('  • Browse 30 Marvel heroes with rich data');
    console.log('  • Real-time search functionality');
    console.log('  • Hero details with characteristics, comics & movies');
    console.log('  • Cross-platform support (Mobile & Web)');
    console.log('  • Clean Architecture implementation');
    console.log('  • Comprehensive test coverage');
    console.log('  • TypeScript with full type safety');
    console.log('  • Redux Toolkit state management');
    console.log('  • Dependency injection with InversifyJS');
    
    console.log('\n🚀 Ready for Phase 4: User Story 2 - View Hero Details!');
    
  } catch (error) {
    console.error('❌ Demo failed:', error.message);
    process.exit(1);
  }
}

// Run the demo
runSimpleDemo();
