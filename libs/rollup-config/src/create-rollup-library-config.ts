import { builtinModules } from 'node:module';
import { resolve } from 'node:path';
import { defineConfig } from 'rollup';
import dts from 'rollup-plugin-dts';
import { rollupPluginBundleSize } from './rollup-plugin-bundle-size';
import { rollupPluginSwc } from './rollup-plugin-swc';

export interface RollupLibraryConfigOptions {
  cwd?: string;
  tsconfig?: string;
}

export async function createRollupLibraryConfig({
  cwd = process.cwd(),
  tsconfig: _ = 'tsconfig.json'
}: RollupLibraryConfigOptions = {}) {
  const packageJsonPath = resolve(cwd, 'package.json');
  // const tsconfigPath = resolve(cwd, tsconfig);

  const pkg = await import(packageJsonPath, {
    assert: {
      type: 'json'
    }
  }).then(pkg => pkg.default);

  const externalLibraries = [
    /node:.*/,
    Object.keys({
      ...pkg.dependencies,
      ...pkg.peerDependencies
    })
  ].concat(BUILTIN_MODULES);

  const externalPredicate = new RegExp(
    `^(${externalLibraries
      .map(ext => (ext instanceof RegExp ? ext.source : escapeString))
      .join('|')})($|/)`
  );
  const external = (id: string) => externalPredicate.test(id);

  const typings = pkg.typings ?? pkg.types;

  return defineConfig(
    [
      defineConfig({
        input: pkg.source,
        external,
        output: [
          {
            file: pkg.main,
            format: 'cjs'
          },
          {
            file: pkg.module,
            format: 'es'
          }
        ],
        plugins: [
          rollupPluginSwc({
            cwd,
            jsc: {
              externalHelpers: true
            },
            minify: false
          }),
          rollupPluginBundleSize()
        ]
      }),
      typings &&
        defineConfig({
          input: pkg.source,
          external,
          output: {
            file: typings,
            format: 'es'
          },
          plugins: [dts()]
        })
    ].filter(Boolean)
  );
}

const escapeString = (value: string) =>
  value.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&').replace(/-/g, '\\x2d');

// eslint-disable-next-line @typescript-eslint/require-array-sort-compare
const BUILTIN_MODULES = builtinModules
  .filter(x => !/^_|^(internal|v8|node-inspect)\/|\//.test(x))
  .sort();
