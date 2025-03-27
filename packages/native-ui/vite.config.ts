import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import reactNativeWeb from 'vite-plugin-react-native-web';

/** @type {import('react-native-unistyles/plugin').UnistylesPluginOptions} */
const unistylesPluginOptions = {
  autoProcessImports: ['@utilitywarehouse/hearth-react-native'],
  // autoProcessPaths: ['../../src'],
  debug: false,
};

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@utilitywarehouse/react-native-icons': '@utilitywarehouse/react-icons',
    },
  },
  plugins: [
    reactNativeWeb(),
    react({
      babel: {
        presets: ['@babel/preset-react'],
        plugins: [
          ['react-native-unistyles/plugin', unistylesPluginOptions],
          '@babel/plugin-proposal-export-namespace-from',
          'react-native-reanimated/plugin',
        ],
      },
    }),
  ],
});
