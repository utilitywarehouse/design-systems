module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["./jest/jest.setup.ts"],
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  snapshotSerializers: ["enzyme-to-json/serializer"],
};
