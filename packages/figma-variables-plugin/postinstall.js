/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
const path = require('path');
const fs = require('fs');
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

// Ensure the 'node_modules/@figma' directory exists
const atFigmaDir = path.resolve(__dirname, './node_modules/@figma');
try {
  fs.mkdirSync(atFigmaDir, { recursive: true });
  execSync(`cp -R ${pluginTypingsSrc} ${pluginTypingsDest}`);
  execSync(`cp -R ${eslintPluginSrc} ${eslintPluginDest}`);
} catch (error) {
  console.error('Error during postinstall script:', error);
  process.exit(1); // Exit with a non-zero status code to indicate failure
}
