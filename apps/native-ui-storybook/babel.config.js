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
            '@utilitywarehouse/colour-system': path.join(__dirname, '../../packages/color-system'),
          },
        },
      ],
      ['babel-plugin-react-docgen-typescript', { exclude: 'node_modules' }],
    ],
  };
};
