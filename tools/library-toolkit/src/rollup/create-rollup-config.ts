import { builtinModules } from 'node:module';
import { dirname } from 'node:path';
import { defineConfig, OutputOptions } from 'rollup';
import dts from 'rollup-plugin-dts';
import { createProjectConfiguration } from '../core/create-project-configuration';
import { createSwcConfig } from '../core/create-swc-config';
import { rollupPluginBundleSize } from './rollup-plugin-bundle-size';
import { rollupPluginSwc } from './rollup-plugin-swc';

export interface RollupLibraryConfigOptions {
  cwd?: string;
  mode?: 'development' | 'production';
  tsconfig?: string;
}

export async function createRollupConfig({ cwd = process.cwd() }: RollupLibraryConfigOptions = {}) {
  const config = await createProjectConfiguration(cwd);
  const swcConfig = createSwcConfig(config);

  // externals
  const externalLibraries = [/node:.*/, config.deps.production].concat(BUILTIN_MODULES);
  const externalPredicate = new RegExp(
    `^(${externalLibraries
      .map(ext => (ext instanceof RegExp ? ext.source : escapeString))
      .join('|')})($|/)`
  );
  const external = (id: string) => externalPredicate.test(id);
  // computed

  const { pkg, output } = config;
  const shouldCompileCJS = (pkg.type === 'commonjs' || !pkg.type) && output.cjs;
  const shouldCompileESM = (pkg.type === 'module' || !pkg.type) && output.esm;
  const shouldCompileDTS = Boolean(output.types);

  const createOutputConfig = (path: string) =>
    pkg.library?.chunks
      ? {
          dir: dirname(path),
          sourcemap: true
        }
      : {
          file: path
        };

  return defineConfig(
    compact([
      defineConfig({
        input: pkg.source,
        external,
        output: compact<OutputOptions>([
          shouldCompileCJS && {
            ...createOutputConfig(output.cjs!),
            format: 'cjs',
            exports: 'auto'
          },
          shouldCompileESM && {
            ...createOutputConfig(output.esm!),
            format: 'es',
            exports: 'auto'
          }
        ]),
        plugins: [rollupPluginSwc(swcConfig), rollupPluginBundleSize()]
      }),
      shouldCompileDTS &&
        defineConfig({
          input: pkg.source,
          external,
          output: {
            file: output.types,
            format: 'es'
          },
          plugins: [dts()]
        })
    ])
  );
}

const compact = <T>(list: Array<T | null | '' | 0 | void | false | undefined>): T[] =>
  list.filter(Boolean) as any;

const escapeString = (value: string) =>
  value.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&').replace(/-/g, '\\x2d');

// eslint-disable-next-line @typescript-eslint/require-array-sort-compare
const BUILTIN_MODULES = builtinModules
  .filter(x => !/^_|^(internal|v8|node-inspect)\/|\//.test(x))
  .sort();
