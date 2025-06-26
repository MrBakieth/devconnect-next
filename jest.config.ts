// jest.config.ts
import type { Config } from "jest";

const config: Config = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1", // Eğer @/... şeklinde import varsa
  },
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"], // Eğer bu dosya varsa
  testPathIgnorePatterns: ["/node_modules/", "/.next/"],
};

export default config;
