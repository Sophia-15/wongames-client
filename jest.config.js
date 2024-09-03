module.exports = {
  testEnvironment: "jsdom",
  testPathIgnorePatterns: ["/node_modules/", "/.next/"],
  collectCoverage: true,
  collectCoverageFrom: [
    "src/**/*.ts(x)?",
    "!src/app/**",
    "!src/lib/registry.tsx",
    "!src/types/**",
    "!src/**/stories.tsx",
    "!src/styles/**",
  ],
  setupFilesAfterEnv: ["<rootDir>/.jest/setup.ts"],
  modulePaths: ["<rootDir>/src/"],
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": ["babel-jest", { presets: ["next/babel"] }],
  },
  // https://github.com/styled-components/styled-components/issues/4081
  // v6 of styled-components doesn"t inject styles in test environment
  // we should to force it to use t<rootDir>he browser version
  moduleNameMapper: {
    "^styled-components":
      "styled-components/dist/styled-components.browser.cjs.js",
    "^@/(.*)$": "<rootDir>/src/$1",
  },
};
