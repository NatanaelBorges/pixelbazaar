import type { Config } from "jest";
import nextJest from "next/jest.js";

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: "./",
});

// Add any custom config to be passed to Jest
const config: Config = {
  coverageDirectory: "coverage",
  collectCoverage: true,
  collectCoverageFrom: ["app/**/*.{js,jsx,ts,tsx}", "!<rootDir>/node_modules/"],
  setupFilesAfterEnv: ["<rootDir>/.jest/jest.setup.ts"],
  testMatch: [
    "**/__tests__/**/*.[jt]s?(x)",
    "**/?(*.)+(spec|test).[tj]s?(x)",
    "<rootDir>/__tests__/**/?(*.)(spec|test).{js,jsx,ts,tsx}",
    "/__tests__/?(*.)(spec|test).{js,jsx,ts,tsx}",
  ],
  testPathIgnorePatterns: ["/node_modules/", "/.next/", "/.out/", "/public/"],
  coverageProvider: "v8",
  testEnvironment: "jsdom",
  preset: "ts-jest",
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
export default createJestConfig(config);
