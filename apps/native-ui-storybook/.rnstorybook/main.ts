import { createRequire } from 'node:module';
import { dirname, join } from 'node:path';
const require = createRequire(import.meta.url);
/** @type{import("@storybook/react-native").StorybookConfig} */

module.exports = {
  // stories: ["../../../packages/react-native/**/*.stories.?(ts|tsx|js|jsx)"],
  stories: [
    '../stories/**/*.stories.?(ts|tsx|js|jsx)',
    '../../../packages/native-ui/**/*.stories.?(ts|tsx|js|jsx)',
  ],
  addons: [
    getAbsolutePath('@storybook/addon-ondevice-controls'),
    getAbsolutePath('@storybook/addon-ondevice-actions'),
  ],
};

function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, 'package.json')));
}
