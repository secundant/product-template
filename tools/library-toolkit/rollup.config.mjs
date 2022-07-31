import { default as pkg } from './package.json' assert { type: 'json' };
import { defineConfig } from 'rollup';
import importAssertions from 'rollup-plugin-import-assertions';
import typescript from 'rollup-plugin-typescript2';
import dts from 'rollup-plugin-dts';

const depsList = Object.keys({ ...pkg.dependencies, ...pkg.peerDependencies });
const external = id => depsList.includes(id) || id.startsWith('node:');

export default defineConfig([
  defineConfig({
    input: pkg.source,
    external,
    output: [
      {
        file: pkg.module,
        format: 'es'
      }
    ],
    plugins: [importAssertions(), typescript()]
  }),
  defineConfig({
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
  }),
  defineConfig({
    input: pkg.source,
    external,
    output: {
      file: pkg.types,
      format: 'es'
    },
    plugins: [dts()]
  })
]);
