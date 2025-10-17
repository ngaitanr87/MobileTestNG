module.exports = {
  projects: [
    '<rootDir>/packages/domain',
    '<rootDir>/packages/application',
    '<rootDir>/packages/infra-mobile',
    '<rootDir>/packages/infra-web',
    '<rootDir>/packages/presentation-mobile',
    '<rootDir>/packages/presentation-web',
    '<rootDir>/packages/di',
    '<rootDir>/packages/shared',
  ],
  collectCoverageFrom: [
    'packages/*/src/**/*.{ts,tsx}',
    '!packages/*/src/**/*.d.ts',
    '!packages/*/src/index.ts',
  ],
  coverageDirectory: 'coverage',
  coverageReporters: ['text', 'lcov', 'html'],
  coverageThreshold: {
    global: {
      branches: 90,
      functions: 90,
      lines: 90,
      statements: 90,
    },
  },
};
