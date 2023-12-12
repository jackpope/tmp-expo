const ReactNativeEnvironment = require("@react-native/test-renderer/jest-environment");
const ReactNativeJestSetup = require("@react-native/test-renderer/jest-setup");

module.exports = {
  setupFiles: [ReactNativeJestSetup],
  testEnvironment: ReactNativeEnvironment,
  preset: "jest-expo",
  transformIgnorePatterns: [
    "node_modules/(?!((jest-)?react-native|@react-native(-community)?)|expo(nent)?|@expo(nent)?/.*|@expo-google-fonts/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|react-native-svg)",
  ],
};
