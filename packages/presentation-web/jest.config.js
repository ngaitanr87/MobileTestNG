module.exports = {
  "preset": "ts-jest",
  "testEnvironment": "jsdom",
  "roots": [
    "<rootDir>/src",
    "<rootDir>/tests"
  ],
  "testMatch": [
    "**/__tests__/**/*.ts",
    "**/__tests__/**/*.tsx",
    "**/?(*.)+(spec|test).ts",
    "**/?(*.)+(spec|test).tsx",
    "**/tests/**/test_*.ts",
    "**/tests/**/test_*.tsx"
  ],
  "passWithNoTests": true,
  "transform": {
    "^.+\\.ts$": "ts-jest",
    "^.+\\.tsx$": "ts-jest"
  },
  "collectCoverageFrom": [
    "src/**/*.ts",
    "src/**/*.tsx",
    "!src/**/*.d.ts",
    "!src/index.ts"
  ],
  "coverageDirectory": "coverage",
  "coverageReporters": [
    "text",
    "lcov",
    "html"
  ],
  "coverageThreshold": {
    "global": {
      "branches": 90,
      "functions": 90,
      "lines": 90,
      "statements": 90
    }
  },
  "moduleNameMapper": {
    "^@application/(.*)$": "<rootDir>/../application/src/$1",
    "^@shared/(.*)$": "<rootDir>/../shared/src/$1"
  }
};