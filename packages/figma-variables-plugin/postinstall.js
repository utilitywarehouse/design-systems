/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
const path = require('path');
const { execSync } = require('child_process');
const pluginTypingsSrc = path.resolve(__dirname, '../../node_modules/@figma/plugin-typings');
const pluginTypingsDest = path.resolve(__dirname, './node_modules/@figma/plugin-typings');
const eslintPluginSrc = path.resolve(
  __dirname,
  '../../node_modules/@figma/eslint-plugin-figma-plugins'
);
const eslintPluginDest = path.resolve(
  __dirname,
  './node_modules/@figma/eslint-plugin-figma-plugins'
);

try {
  execSync(`cp -R ${pluginTypingsSrc} ${pluginTypingsDest}`);
  execSync(`cp -R ${eslintPluginSrc} ${eslintPluginDest}`);
} catch (error) {
  if (error.status === 1) {
    console.log('Error copying plugin-typings or eslint-plugin-figma-plugins');
  }
}
