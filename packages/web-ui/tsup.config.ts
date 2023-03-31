import path from 'path';
import { defineConfig } from 'tsup';

// actual exposed modules = 1 per component
export default defineConfig([
  {
    splitting: true,
    sourcemap: true,
    clean: true,
    dts: true,
    format: ['cjs', 'esm'],
    minify: true,
    bundle: true,
    skipNodeModulesBundle: true,
    target: 'es2020',
    outDir: 'dist',
    entry: ['./src/**/*.ts?(x)', '!src/**/*.stories.*'],
    tsconfig: path.join(__dirname, './tsconfig.build.json'),
  },
]);
