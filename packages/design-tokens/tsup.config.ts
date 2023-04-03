import { defineConfig } from 'tsup';

export default defineConfig([
  {
    entry: ['./src/index.ts'],
    format: ['cjs', 'esm'],
    target: 'es2020',
    minify: true,
    clean: true,
    dts: true,
    bundle: true,
  },
]);
