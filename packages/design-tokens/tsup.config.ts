import { defineConfig, Format } from 'tsup';

export default defineConfig([
  {
    entry: ['./src/index.ts'],
    target: 'es2020',
    sourcemap: true,
    minify: true,
    clean: true,
    dts: true,
    outDir: 'dist',
    format: ['cjs', 'esm'] as Array<Format>,
  },
]);
