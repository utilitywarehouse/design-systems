import { defineConfig, Format } from 'tsup';

export default defineConfig([
  {
    entry: ['./src/index.ts'],
    sourcemap: true,
    minify: true,
    clean: true,
    dts: true,
    outDir: 'dist',
    format: ['cjs', 'esm'] as Array<Format>,
  },
]);
