const path = require('path');

const unistylesPluginOptions = {
  autoProcessImports: ['@utilitywarehouse/native-ui', '../../packages/native-ui'],
  autoProcessPaths: ['@utilitywarehouse/native-ui', '../../packages/native-ui'],
  debug: false,
};

module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      ['react-native-unistyles/plugin', unistylesPluginOptions],
      '@babel/plugin-proposal-export-namespace-from',
      'react-native-reanimated/plugin',
    ],
  };
};
