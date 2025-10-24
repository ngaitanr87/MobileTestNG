// Layer isolation rules for Clean Architecture
module.exports = {
  rules: {
    'no-restricted-imports': [
      'error',
      {
        patterns: [
          // Domain layer cannot import from any other layer
          {
            group: ['@application/*', '@data-*/*', '@infra-*/*', '@presentation-*/*', '@di/*'],
            message: 'Domain layer cannot import from other layers',
          },
          // Application layer can only import from Domain, Data, and Shared layers
          {
            group: ['@infra-*/*', '@presentation-*/*', '@di/*'],
            message: 'Application layer can only import from Domain, Data, and Shared layers',
          },
          // Data layers can only import from Domain and Shared
          {
            group: ['@application/*', '@infra-*/*', '@presentation-*/*', '@di/*'],
            message: 'Data layers can only import from Domain and Shared layers',
          },
          // Infrastructure layers can only import from Domain, Data, and Shared
          {
            group: ['@application/*', '@presentation-*/*', '@di/*'],
            message: 'Infrastructure layers can only import from Domain, Data, and Shared layers',
          },
          // Presentation layers can only import from Application and Shared
          {
            group: ['@domain/*', '@data-*/*', '@infra-*/*', '@di/*'],
            message: 'Presentation layers can only import from Application and Shared layers',
          },
        ],
      },
    ],
  },
};
