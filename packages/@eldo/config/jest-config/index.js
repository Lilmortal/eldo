module.exports = {
  clearMocks: true,
  coverageDirectory: "coverage",
  coverageReporters: ["text", "clover"],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
  moduleFileExtensions: ["ts", "tsx", "js"],
  modulePathIgnorePatterns: ["dist"],
  // Because Jest only knows how to read Javascript, we need to mock non Javascript files
  // to a Javascript file.
  moduleNameMapper: {
    "^@eldo/(.+)$": "@eldo/$1",
    "\\.(css|scss)$": "@eldo/jest-config/__mocks__/styleMock",
  },
  notify: true,
  notifyMode: "always",
  roots: ["<rootDir>"],
  testMatch: ["**/__tests__/*.+(ts|tsx|js)", "**/*.test.+(ts|tsx|js)"],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
  setupFilesAfterEnv: ["@eldo/jest-config/setupTests.js"],
};
