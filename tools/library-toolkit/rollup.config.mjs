import { default as pkg } from './package.json' assert { type: 'json' };
import importAssertions from 'rollup-plugin-import-assertions';
import typescript from 'rollup-plugin-typescript2';

const depsList = Object.keys({ ...pkg.dependencies, ...pkg.peerDependencies });
const external = id => depsList.includes(id) || id.startsWith('node:');

export default {
  input: 'src/bin.ts',
  external,
  output: [
    {
      file: 'dist/bin.mjs',
      format: 'esm',
      banner: '#!/usr/bin/env node\n'
    }
  ],
  plugins: [importAssertions(), typescript()]
};
