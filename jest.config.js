module.exports = {
  setupFiles: ["@react-native/test-renderer/jest-setup"],
  testEnvironment: "@react-native/test-renderer/jest-environment",
  haste: {
    defaultPlatform: 'ios',
    platforms: ['android', 'ios', 'native'],
  },
  // preset: "jest-expo",
  transformIgnorePatterns: [
    "node_modules/(?!((jest-)?react-native|@react-native(-community)?)|expo(nent)?|@expo(nent)?/.*|@expo-google-fonts/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|react-native-svg)",
  ],
  moduleNameMapper: {
    "^react($|/.+)": "<rootDir>/node_modules/react$1"
  },
};
