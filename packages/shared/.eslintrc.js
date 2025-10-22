module.exports = {
  "root": true,
  "env": {
    "browser": true,
    "es2022": true,
    "node": true,
    "jest": true
  },
  "extends": [
    "eslint:recommended"
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module",
    "project": "./tsconfig.json"
  },
  "plugins": [
    "@typescript-eslint"
  ],
  "rules": {
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": "error",
    "no-console": "warn",
    "prefer-const": "error",
    "no-var": "error"
  },
  "ignorePatterns": [
    "node_modules/",
    "dist/",
    "build/",
    "coverage/",
    "*.js",
    "*.d.ts"
  ]
};