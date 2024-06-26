const path = require('path');

module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            '@utilitywarehouse/native-ui': path.join(__dirname, '../../packages/native-ui/src'),
          },
        },
      ],
      '@babel/plugin-proposal-export-namespace-from',
      'react-native-reanimated/plugin',
    ],
  };
};
