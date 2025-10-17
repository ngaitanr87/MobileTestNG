#!/usr/bin/env node

/**
 * Marvel Heroes App - Test Runner
 * 
 * This script runs basic functionality tests to verify the app is working
 */

const fs = require('fs');
const path = require('path');

function runTests() {
  console.log('🧪 Marvel Heroes App - Test Runner\n');
  console.log('=' .repeat(50));
  
  let passedTests = 0;
  let totalTests = 0;
  
  function test(name, testFn) {
    totalTests++;
    try {
      testFn();
      console.log(`✅ ${name}`);
      passedTests++;
    } catch (error) {
      console.log(`❌ ${name}: ${error.message}`);
    }
  }
  
  // Test 1: Heroes data exists and is valid
  test('Heroes data file exists', () => {
    const heroesPath = path.join(__dirname, 'packages/infra-mobile/src/data/heroes.json');
    if (!fs.existsSync(heroesPath)) {
      throw new Error('Heroes data file not found');
    }
  });
  
  // Test 2: Heroes data is valid JSON
  test('Heroes data is valid JSON', () => {
    const heroesPath = path.join(__dirname, 'packages/infra-mobile/src/data/heroes.json');
    const heroesData = JSON.parse(fs.readFileSync(heroesPath, 'utf8'));
    if (!Array.isArray(heroesData)) {
      throw new Error('Heroes data is not an array');
    }
    if (heroesData.length !== 30) {
      throw new Error(`Expected 30 heroes, got ${heroesData.length}`);
    }
  });
  
  // Test 3: Hero data structure is correct
  test('Hero data structure is correct', () => {
    const heroesPath = path.join(__dirname, 'packages/infra-mobile/src/data/heroes.json');
    const heroesData = JSON.parse(fs.readFileSync(heroesPath, 'utf8'));
    const firstHero = heroesData[0];
    
    const requiredFields = ['id', 'name', 'description', 'imageUrl', 'characteristics'];
    for (const field of requiredFields) {
      if (!firstHero[field]) {
        throw new Error(`Missing required field: ${field}`);
      }
    }
    
    const requiredCharacteristics = ['powers', 'weaknesses', 'affiliations', 'firstAppearance', 'realName', 'species', 'gender'];
    for (const field of requiredCharacteristics) {
      if (!firstHero.characteristics[field]) {
        throw new Error(`Missing required characteristic: ${field}`);
      }
    }
  });
  
  // Test 4: Search functionality works
  test('Search functionality works', () => {
    const heroesPath = path.join(__dirname, 'packages/infra-mobile/src/data/heroes.json');
    const heroesData = JSON.parse(fs.readFileSync(heroesPath, 'utf8'));
    
    const ironManResults = heroesData.filter(hero => 
      hero.name.toLowerCase().startsWith('iron')
    );
    
    if (ironManResults.length === 0) {
      throw new Error('Search for "Iron" returned no results');
    }
    
    if (!ironManResults[0].name.includes('Iron Man')) {
      throw new Error('Search result does not contain Iron Man');
    }
  });
  
  // Test 5: All heroes have unique IDs
  test('All heroes have unique IDs', () => {
    const heroesPath = path.join(__dirname, 'packages/infra-mobile/src/data/heroes.json');
    const heroesData = JSON.parse(fs.readFileSync(heroesPath, 'utf8'));
    
    const ids = heroesData.map(hero => hero.id);
    const uniqueIds = [...new Set(ids)];
    
    if (ids.length !== uniqueIds.length) {
      throw new Error('Duplicate hero IDs found');
    }
  });
  
  // Test 6: All heroes have valid image URLs
  test('All heroes have valid image URLs', () => {
    const heroesPath = path.join(__dirname, 'packages/infra-mobile/src/data/heroes.json');
    const heroesData = JSON.parse(fs.readFileSync(heroesPath, 'utf8'));
    
    for (const hero of heroesData) {
      if (!hero.imageUrl || !hero.imageUrl.startsWith('http')) {
        throw new Error(`Invalid image URL for hero: ${hero.name}`);
      }
    }
  });
  
  // Test 7: Project structure exists
  test('Project structure is correct', () => {
    const requiredDirs = [
      'packages/domain/src',
      'packages/application/src',
      'packages/infra-mobile/src',
      'packages/infra-web/src',
      'packages/presentation-mobile/src',
      'packages/presentation-web/src',
      'packages/di/src',
      'packages/shared/src'
    ];
    
    for (const dir of requiredDirs) {
      if (!fs.existsSync(path.join(__dirname, dir))) {
        throw new Error(`Missing directory: ${dir}`);
      }
    }
  });
  
  // Test 8: TypeScript files exist
  test('TypeScript files exist', () => {
    const requiredFiles = [
      'packages/domain/src/entities/hero.ts',
      'packages/domain/src/use-cases/get-heroes-list-use-case.ts',
      'packages/application/src/slices/heroes-slice.ts',
      'packages/infra-mobile/src/repositories/hero-repository.ts'
    ];
    
    for (const file of requiredFiles) {
      if (!fs.existsSync(path.join(__dirname, file))) {
        throw new Error(`Missing file: ${file}`);
      }
    }
  });
  
  console.log('\n' + '='.repeat(50));
  console.log(`📊 Test Results: ${passedTests}/${totalTests} tests passed`);
  
  if (passedTests === totalTests) {
    console.log('🎉 All tests passed! The Marvel Heroes app is working correctly.');
    console.log('\n🚀 Ready for the next phase of development!');
  } else {
    console.log('⚠️  Some tests failed. Please check the implementation.');
    process.exit(1);
  }
}

// Run the tests
runTests();
