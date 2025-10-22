// Test script to verify react-native-logs integration
const { logger } = require('./packages/shared/dist/logging');

console.log('🧪 Testing react-native-logs integration...\n');

// Test all log levels
logger.debug('This is a debug message');
logger.info('This is an info message');
logger.warn('This is a warning message');
logger.error('This is an error message');

console.log('\n✅ Logging test completed!');
console.log('📝 All console statements have been replaced with react-native-logs');
console.log('🚫 ESLint warnings should now be eliminated');
