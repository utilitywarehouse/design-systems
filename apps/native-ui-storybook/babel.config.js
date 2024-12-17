const path = require('path');

module.exports = function (api) {
  api.cache(true);
  return {
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            '@utilitywarehouse/native-ui': path.join(__dirname, '../../packages/native-ui/src'),
            '@utilitywarehouse/design-tokens': path.join(
              __dirname,
              '../../packages/design-tokens/build/js'
            ),
            '@utilitywarehouse/native-ui/lab': path.join(
              __dirname,
              '../../packages/native-ui/src/lab'
            ),
          },
        },
      ],
      'react-native-unistyles/plugin',
      '@babel/plugin-proposal-export-namespace-from',
      'react-native-reanimated/plugin',
    ],
    presets: ['babel-preset-expo'],
  };
};
