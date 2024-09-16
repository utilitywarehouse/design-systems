import * as esbuild from 'esbuild';
import envFilePlugin from 'esbuild-envfile-plugin';

await esbuild.build({
  entryPoints: ['src/index.ts'],
  bundle: true,
  outfile: 'dist/index.js',
  plugins: [envFilePlugin],
});
