module.exports = {
  verbose: true,
  bail: 1,
  preset: 'ts-jest',
  testEnvironment: "node",

  roots: ['<rootDir>'],
  testMatch: ['**/test/**/?(*.)+(spec|test).[jt]s?(x)'],
  transform: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/fileTransformer.js',
  },
  // setupFiles: ['<rootDir>/test/test-config/env'],
  reporters: ['default', ['jest-junit', { outputName: 'test-results.xml' }]],
  collectCoverage: true,
  coverageReporters: ['json', 'json-summary', 'html', 'lcov', 'text'],
  coveragePathIgnorePatterns: ['/dist/', '/node_modules/'],
};
