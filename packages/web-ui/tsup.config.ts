import path from 'path';
import { defineConfig } from 'tsup';

// actual exposed modules = 1 per component
export default defineConfig([
  {
    // index files to allow named imports
    entry: ['./src/**/*.ts?(x)', '!src/**/*.stories.*'],
    tsconfig: path.join(__dirname, './tsconfig.build.json'),
    sourcemap: true,
    splitting: true,
    clean: true, // clean up the dist folder
    dts: true, // generate dts files
    format: ['cjs', 'esm'], // generate cjs and esm files
    minify: true,
    bundle: true,
    skipNodeModulesBundle: true,
    entryPoints: ['src/index.ts'],
    target: 'es2020',
    outDir: 'dist',
    outExtension({ format }) {
      return {
        js: format === 'esm' ? '.js' : `.${format}`,
      };
    },
  },
]);
