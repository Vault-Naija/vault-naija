module.exports = {
  setupFilesAfterEnv: ['<rootDir>/setUpTests.js'],
  testEnvironment: 'jsdom', // provides browser-like environment
  testMatch: ['**/*.test.[jt]s?(x)', '**/*.spec.[jt]s?(x)'],
  transform: {
    '^.+\\.[jt]sx?$': 'babel-jest',
  },
  moduleNameMapper: {
    '\\.(css|scss)$': 'identity-obj-proxy',
    '\\.(jpg|jpeg|png|gif|svg)$': '<rootDir>/fileMock.js',
  },
}
