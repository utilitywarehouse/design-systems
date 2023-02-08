import { defineConfig, Format } from 'tsup';

export default defineConfig([
  // actual exposed modules = 1 per component
  {
    // index files to allow named imports
    entry: ['./src/**/*.ts'],
    treeshake: true,
    sourcemap: true,
    minify: true,
    clean: true,
    dts: true,
    splitting: false,
    format: ['cjs', 'esm'] as Array<Format>,
    external: ['react', '*.stories.*'],
    // index files must NOT be bundled!
    // it acts as a map towards bundled components
    // but never rebundles them
    bundle: false,
  },
]);
