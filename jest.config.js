module.exports = {
    preset: 'ts-jest', // Use ts-jest to transpile TypeScript
    testEnvironment: 'node',
    transform: {
      '^.+\\.ts?$': 'ts-jest', // Transpile TypeScript files using ts-jest
    },
    moduleFileExtensions: ['ts', 'js', 'json'],
    testPathIgnorePatterns: ['/node_modules/'], // Ignore node_modules
  };