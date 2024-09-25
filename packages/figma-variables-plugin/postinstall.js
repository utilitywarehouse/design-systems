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

// Ensure the destination directories exist
const pluginTypingsDestDir = path.dirname(pluginTypingsDest);
fs.mkdirSync(pluginTypingsDestDir, { recursive: true });

const eslintPluginDestDir = path.dirname(eslintPluginDest);
fs.mkdirSync(eslintPluginDestDir, { recursive: true });

// Proceed with copying the files
execSync(`cp -R ${pluginTypingsSrc} ${pluginTypingsDest}`);
execSync(`cp -R ${eslintPluginSrc} ${eslintPluginDest}`);
