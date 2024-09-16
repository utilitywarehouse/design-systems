import * as esbuild from 'esbuild';
import envFilePlugin from 'esbuild-envfile-plugin';

async function watch() {
  let ctx = await esbuild.context({
    entryPoints: ['src/index.ts'],
    bundle: true,
    outfile: 'dist/index.js',
    plugins: [envFilePlugin],
  });
  await ctx.watch();
  console.log('Watching...');
}

watch();
