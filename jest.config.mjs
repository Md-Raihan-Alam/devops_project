/** @type {import('jest').Config} */
const config = {
  clearMocks: true,

  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',

  testEnvironment: 'node',

  moduleNameMapper: {
    '^#config/(.*)$': '<rootDir>/src/config/$1',
    '^#src/(.*)$': '<rootDir>/src/$1',
    '^#controllers/(.*)$': '<rootDir>/src/controllers/$1',
    '^#routes/(.*)$': '<rootDir>/src/routes/$1',
    '^#middleware/(.*)$': '<rootDir>/src/middleware/$1',
    '^#models/(.*)$': '<rootDir>/src/models/$1',
    '^#services/(.*)$': '<rootDir>/src/services/$1',
    '^#utils/(.*)$': '<rootDir>/src/utils/$1',
    '^#validations/(.*)$': '<rootDir>/src/validations/$1',
  },

  transform: {},
};

export default config;
