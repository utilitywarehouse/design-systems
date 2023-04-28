import { defineConfig } from 'tsup';

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
    entry: ['./src/**/*.ts'],
  },
]);
