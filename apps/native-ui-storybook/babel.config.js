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
            '@utilitywarehouse/native-ui/lab': path.join(
              __dirname,
              '../../packages/native-ui/src/lab'
            ),
            '@utilitywarehouse/native-ui/unstyled': path.join(
              __dirname,
              '../../packages/native-ui/src/components/unstyled'
            ),
          },
        },
      ],
      '@babel/plugin-proposal-export-namespace-from',
      'react-native-reanimated/plugin',
    ],
    presets: ['babel-preset-expo'],
  };
};
