const { build } = require('esbuild'); // eslint-disable-line

build({
  entryPoints: ['src/index.ts'],
  bundle: true,
  outfile: 'dist/index.js',
  platform: 'node',
  target: 'node14',
  tsconfig: './tsconfig.json',
}).catch(() => process.exit(1)); // eslint-disable-line