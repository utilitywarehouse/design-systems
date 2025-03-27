import react from '@vitejs/plugin-react';
import babel from 'vite-plugin-babel';
import { defineConfig } from 'vite';

const unistylesPluginOptions = {
  autoProcessImports: ['@utilitywarehouse/native-ui'],
  // autoProcessPaths: ['../../src'],
  debug: false,
};

const extensions = [
  '.web.tsx',
  '.tsx',
  '.web.ts',
  '.ts',
  '.web.jsx',
  '.jsx',
  '.web.js',
  '.js',
  '.css',
  '.json',
  '.mjs',
];

const development = process.env.NODE_ENV === 'development';

export default defineConfig({
  clearScreen: true,
  plugins: [
    react({
      babel: {
        plugins: [
          ['react-native-unistyles/plugin', unistylesPluginOptions],
          '@babel/plugin-proposal-export-namespace-from',
          'react-native-reanimated/plugin',
        ],
      },
    }),
    ...(development
      ? []
      : [
          babel({
            include: [/node_modules\/(react-native|@react-native)/],
            babelConfig: {
              plugins: [
                [
                  // this is a fix for reanimated not working in production
                  '@babel/plugin-transform-modules-commonjs',
                  {
                    strict: false,
                    strictMode: false, // prevent "use strict" injections
                    allowTopLevelThis: true, // dont rewrite global `this` -> `undefined`
                  },
                ],
              ],
            },
          }),
        ]),
  ],
  define: {
    __DEV__: JSON.stringify(development),
    DEV: JSON.stringify(development),
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    'global.__x': {},
    _frameTimestamp: undefined,
    _WORKLET: false,
  },
  resolve: {
    extensions,
    alias: {
      'react-native': 'react-native-web',
      '@utilitywarehouse/react-native-icons': '@utilitywarehouse/react-icons',
    },
  },
  optimizeDeps: {
    esbuildOptions: {
      resolveExtensions: extensions,
      jsx: 'automatic',
      loader: { '.js': 'jsx' },
    },
  },
});
