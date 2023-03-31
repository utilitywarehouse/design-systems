import path from 'path';
import { defineConfig } from 'tsup';

// actual exposed modules = 1 per component
export default defineConfig([
  {
    // index files to allow named imports
    entry: ['./src/**/*.ts?(x)', '!src/**/*.stories.*'],
    tsconfig: path.join(__dirname, './tsconfig.build.json'),
    format: ['cjs', 'esm'], // generate cjs and esm files
    target: 'es2020',
    minify: true,
    clean: true,
    dts: true,
    // index files must NOT be bundled!
    // it acts as a map towards bundled components
    // but never rebundles them
    bundle: false,
  },
]);
