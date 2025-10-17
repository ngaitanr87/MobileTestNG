module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  roots: ['<rootDir>/src', '<rootDir>/tests'],
  testMatch: ['**/__tests__/**/*.ts', '**/?(*.)+(spec|test).ts'],
  transform: {
    '^.+\.ts$': 'ts-jest',
    '^.+\.tsx$': 'ts-jest',
  },
  collectCoverageFrom: [
    'src/**/*.ts',
    'src/**/*.tsx',
    '!src/**/*.d.ts',
    '!src/index.ts',
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
  moduleNameMapping: {
    '^@domain/(.*)$': '<rootDir>/../domain/src/for pkg in application infra-mobile infra-web presentation-mobile presentation-web di shared; do
  cat > packages/$pkg/jest.config.js << EOF
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  roots: ['<rootDir>/src', '<rootDir>/tests'],
  testMatch: ['**/__tests__/**/*.ts', '**/?(*.)+(spec|test).ts'],
  transform: {
    '^.+\\.ts$': 'ts-jest',
    '^.+\\.tsx$': 'ts-jest',
  },
  collectCoverageFrom: [
    'src/**/*.ts',
    'src/**/*.tsx',
    '!src/**/*.d.ts',
    '!src/index.ts',
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
  moduleNameMapping: {
    '^@domain/(.*)$': '<rootDir>/../domain/src/$1',
    '^@application/(.*)$': '<rootDir>/../application/src/$1',
    '^@infra-mobile/(.*)$': '<rootDir>/../infra-mobile/src/$1',
    '^@infra-web/(.*)$': '<rootDir>/../infra-web/src/$1',
    '^@presentation-mobile/(.*)$': '<rootDir>/../presentation-mobile/src/$1',
    '^@presentation-web/(.*)$': '<rootDir>/../presentation-web/src/$1',
    '^@di/(.*)$': '<rootDir>/../di/src/$1',
    '^@shared/(.*)$': '<rootDir>/../shared/src/$1',
  },
};
EOF
done',
    '^@application/(.*)$': '<rootDir>/../application/src/for pkg in application infra-mobile infra-web presentation-mobile presentation-web di shared; do
  cat > packages/$pkg/jest.config.js << EOF
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  roots: ['<rootDir>/src', '<rootDir>/tests'],
  testMatch: ['**/__tests__/**/*.ts', '**/?(*.)+(spec|test).ts'],
  transform: {
    '^.+\\.ts$': 'ts-jest',
    '^.+\\.tsx$': 'ts-jest',
  },
  collectCoverageFrom: [
    'src/**/*.ts',
    'src/**/*.tsx',
    '!src/**/*.d.ts',
    '!src/index.ts',
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
  moduleNameMapping: {
    '^@domain/(.*)$': '<rootDir>/../domain/src/$1',
    '^@application/(.*)$': '<rootDir>/../application/src/$1',
    '^@infra-mobile/(.*)$': '<rootDir>/../infra-mobile/src/$1',
    '^@infra-web/(.*)$': '<rootDir>/../infra-web/src/$1',
    '^@presentation-mobile/(.*)$': '<rootDir>/../presentation-mobile/src/$1',
    '^@presentation-web/(.*)$': '<rootDir>/../presentation-web/src/$1',
    '^@di/(.*)$': '<rootDir>/../di/src/$1',
    '^@shared/(.*)$': '<rootDir>/../shared/src/$1',
  },
};
EOF
done',
    '^@infra-mobile/(.*)$': '<rootDir>/../infra-mobile/src/for pkg in application infra-mobile infra-web presentation-mobile presentation-web di shared; do
  cat > packages/$pkg/jest.config.js << EOF
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  roots: ['<rootDir>/src', '<rootDir>/tests'],
  testMatch: ['**/__tests__/**/*.ts', '**/?(*.)+(spec|test).ts'],
  transform: {
    '^.+\\.ts$': 'ts-jest',
    '^.+\\.tsx$': 'ts-jest',
  },
  collectCoverageFrom: [
    'src/**/*.ts',
    'src/**/*.tsx',
    '!src/**/*.d.ts',
    '!src/index.ts',
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
  moduleNameMapping: {
    '^@domain/(.*)$': '<rootDir>/../domain/src/$1',
    '^@application/(.*)$': '<rootDir>/../application/src/$1',
    '^@infra-mobile/(.*)$': '<rootDir>/../infra-mobile/src/$1',
    '^@infra-web/(.*)$': '<rootDir>/../infra-web/src/$1',
    '^@presentation-mobile/(.*)$': '<rootDir>/../presentation-mobile/src/$1',
    '^@presentation-web/(.*)$': '<rootDir>/../presentation-web/src/$1',
    '^@di/(.*)$': '<rootDir>/../di/src/$1',
    '^@shared/(.*)$': '<rootDir>/../shared/src/$1',
  },
};
EOF
done',
    '^@infra-web/(.*)$': '<rootDir>/../infra-web/src/for pkg in application infra-mobile infra-web presentation-mobile presentation-web di shared; do
  cat > packages/$pkg/jest.config.js << EOF
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  roots: ['<rootDir>/src', '<rootDir>/tests'],
  testMatch: ['**/__tests__/**/*.ts', '**/?(*.)+(spec|test).ts'],
  transform: {
    '^.+\\.ts$': 'ts-jest',
    '^.+\\.tsx$': 'ts-jest',
  },
  collectCoverageFrom: [
    'src/**/*.ts',
    'src/**/*.tsx',
    '!src/**/*.d.ts',
    '!src/index.ts',
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
  moduleNameMapping: {
    '^@domain/(.*)$': '<rootDir>/../domain/src/$1',
    '^@application/(.*)$': '<rootDir>/../application/src/$1',
    '^@infra-mobile/(.*)$': '<rootDir>/../infra-mobile/src/$1',
    '^@infra-web/(.*)$': '<rootDir>/../infra-web/src/$1',
    '^@presentation-mobile/(.*)$': '<rootDir>/../presentation-mobile/src/$1',
    '^@presentation-web/(.*)$': '<rootDir>/../presentation-web/src/$1',
    '^@di/(.*)$': '<rootDir>/../di/src/$1',
    '^@shared/(.*)$': '<rootDir>/../shared/src/$1',
  },
};
EOF
done',
    '^@presentation-mobile/(.*)$': '<rootDir>/../presentation-mobile/src/for pkg in application infra-mobile infra-web presentation-mobile presentation-web di shared; do
  cat > packages/$pkg/jest.config.js << EOF
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  roots: ['<rootDir>/src', '<rootDir>/tests'],
  testMatch: ['**/__tests__/**/*.ts', '**/?(*.)+(spec|test).ts'],
  transform: {
    '^.+\\.ts$': 'ts-jest',
    '^.+\\.tsx$': 'ts-jest',
  },
  collectCoverageFrom: [
    'src/**/*.ts',
    'src/**/*.tsx',
    '!src/**/*.d.ts',
    '!src/index.ts',
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
  moduleNameMapping: {
    '^@domain/(.*)$': '<rootDir>/../domain/src/$1',
    '^@application/(.*)$': '<rootDir>/../application/src/$1',
    '^@infra-mobile/(.*)$': '<rootDir>/../infra-mobile/src/$1',
    '^@infra-web/(.*)$': '<rootDir>/../infra-web/src/$1',
    '^@presentation-mobile/(.*)$': '<rootDir>/../presentation-mobile/src/$1',
    '^@presentation-web/(.*)$': '<rootDir>/../presentation-web/src/$1',
    '^@di/(.*)$': '<rootDir>/../di/src/$1',
    '^@shared/(.*)$': '<rootDir>/../shared/src/$1',
  },
};
EOF
done',
    '^@presentation-web/(.*)$': '<rootDir>/../presentation-web/src/for pkg in application infra-mobile infra-web presentation-mobile presentation-web di shared; do
  cat > packages/$pkg/jest.config.js << EOF
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  roots: ['<rootDir>/src', '<rootDir>/tests'],
  testMatch: ['**/__tests__/**/*.ts', '**/?(*.)+(spec|test).ts'],
  transform: {
    '^.+\\.ts$': 'ts-jest',
    '^.+\\.tsx$': 'ts-jest',
  },
  collectCoverageFrom: [
    'src/**/*.ts',
    'src/**/*.tsx',
    '!src/**/*.d.ts',
    '!src/index.ts',
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
  moduleNameMapping: {
    '^@domain/(.*)$': '<rootDir>/../domain/src/$1',
    '^@application/(.*)$': '<rootDir>/../application/src/$1',
    '^@infra-mobile/(.*)$': '<rootDir>/../infra-mobile/src/$1',
    '^@infra-web/(.*)$': '<rootDir>/../infra-web/src/$1',
    '^@presentation-mobile/(.*)$': '<rootDir>/../presentation-mobile/src/$1',
    '^@presentation-web/(.*)$': '<rootDir>/../presentation-web/src/$1',
    '^@di/(.*)$': '<rootDir>/../di/src/$1',
    '^@shared/(.*)$': '<rootDir>/../shared/src/$1',
  },
};
EOF
done',
    '^@di/(.*)$': '<rootDir>/../di/src/for pkg in application infra-mobile infra-web presentation-mobile presentation-web di shared; do
  cat > packages/$pkg/jest.config.js << EOF
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  roots: ['<rootDir>/src', '<rootDir>/tests'],
  testMatch: ['**/__tests__/**/*.ts', '**/?(*.)+(spec|test).ts'],
  transform: {
    '^.+\\.ts$': 'ts-jest',
    '^.+\\.tsx$': 'ts-jest',
  },
  collectCoverageFrom: [
    'src/**/*.ts',
    'src/**/*.tsx',
    '!src/**/*.d.ts',
    '!src/index.ts',
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
  moduleNameMapping: {
    '^@domain/(.*)$': '<rootDir>/../domain/src/$1',
    '^@application/(.*)$': '<rootDir>/../application/src/$1',
    '^@infra-mobile/(.*)$': '<rootDir>/../infra-mobile/src/$1',
    '^@infra-web/(.*)$': '<rootDir>/../infra-web/src/$1',
    '^@presentation-mobile/(.*)$': '<rootDir>/../presentation-mobile/src/$1',
    '^@presentation-web/(.*)$': '<rootDir>/../presentation-web/src/$1',
    '^@di/(.*)$': '<rootDir>/../di/src/$1',
    '^@shared/(.*)$': '<rootDir>/../shared/src/$1',
  },
};
EOF
done',
    '^@shared/(.*)$': '<rootDir>/../shared/src/for pkg in application infra-mobile infra-web presentation-mobile presentation-web di shared; do
  cat > packages/$pkg/jest.config.js << EOF
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  roots: ['<rootDir>/src', '<rootDir>/tests'],
  testMatch: ['**/__tests__/**/*.ts', '**/?(*.)+(spec|test).ts'],
  transform: {
    '^.+\\.ts$': 'ts-jest',
    '^.+\\.tsx$': 'ts-jest',
  },
  collectCoverageFrom: [
    'src/**/*.ts',
    'src/**/*.tsx',
    '!src/**/*.d.ts',
    '!src/index.ts',
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
  moduleNameMapping: {
    '^@domain/(.*)$': '<rootDir>/../domain/src/$1',
    '^@application/(.*)$': '<rootDir>/../application/src/$1',
    '^@infra-mobile/(.*)$': '<rootDir>/../infra-mobile/src/$1',
    '^@infra-web/(.*)$': '<rootDir>/../infra-web/src/$1',
    '^@presentation-mobile/(.*)$': '<rootDir>/../presentation-mobile/src/$1',
    '^@presentation-web/(.*)$': '<rootDir>/../presentation-web/src/$1',
    '^@di/(.*)$': '<rootDir>/../di/src/$1',
    '^@shared/(.*)$': '<rootDir>/../shared/src/$1',
  },
};
EOF
done',
  },
};
