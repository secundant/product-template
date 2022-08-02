import { builtinModules } from 'node:module';
import type { InputOptions, OutputOptions } from 'rollup';
import dts from 'rollup-plugin-dts';
import type { ProjectConfiguration } from '../core/create-project-configuration';
import { createSwcConfig } from '../core/create-swc-config';
import { stdout } from '../core/logger';
import { rollupPluginBundleSize } from './rollup-plugin-bundle-size';
import { rollupPluginSwc } from './rollup-plugin-swc';
import { rollupPluginSwcMinify } from './rollup-plugin-swc-minify';

export interface RollupContext {
  entries: RollupCompilationEntry[];
}

export interface RollupCompilationEntry {
  input: InputOptions;
  output: OutputOptions[];
}

export function createRollupContext(configuration: ProjectConfiguration): RollupContext {
  const {
    pkg,
    output,
    tsconfig,
    settings: { strategy, source, sourceMap, minify }
  } = configuration;
  const shouldCompileCJS = (pkg.type === 'commonjs' || !pkg.type) && output.cjs;
  const shouldCompileESM = (pkg.type === 'module' || !pkg.type) && output.esm;
  const shouldCompileDTS = Boolean(output.types);

  const swcConfig = createSwcConfig(configuration);
  const external = createExternal(configuration);

  const swcPlugin = rollupPluginSwc(swcConfig);
  const swcMinifyPlugin = rollupPluginSwcMinify(swcConfig);
  const bundleSizePlugin = rollupPluginBundleSize();

  if (strategy === 'standalone') {
    return {
      entries: compact([
        {
          input: {
            input: source,
            plugins: [swcPlugin, bundleSizePlugin],
            external,
            treeshake: {
              annotations: true,
              propertyReadSideEffects: false
            },
            onwarn(warning, warn) {
              // https://github.com/rollup/rollup/blob/0fa9758cb7b1976537ae0875d085669e3a21e918/src/utils/error.ts#L324
              if (warning.code === 'UNRESOLVED_IMPORT') {
                stdout(
                  `Failed to resolve the module ${warning.source} imported by ${warning.importer}` +
                    `\nIs the module installed? Note:` +
                    `\n ↳ to inline a module into your bundle, install it to "devDependencies".` +
                    `\n ↳ to depend on a module via import/require, install it to "dependencies".`
                );
                return;
              }

              warn(warning);
            }
          },
          output: compact<OutputOptions>([
            shouldCompileCJS && {
              file: output.cjs,
              format: 'cjs',
              plugins: compact([minify && swcMinifyPlugin]),
              sourcemap: sourceMap
            },
            shouldCompileESM && {
              file: output.esm,
              format: 'es',
              plugins: compact([minify && swcMinifyPlugin]),
              sourcemap: sourceMap
            }
          ])
        },
        shouldCompileDTS && {
          input: {
            input: source,
            plugins: [
              dts({
                compilerOptions: tsconfig?.compilerOptions,
                respectExternal: true
              }),
              bundleSizePlugin
            ],
            external
          },
          output: [
            {
              file: output.types,
              format: 'es'
            }
          ]
        }
      ])
    };
  }
  return {
    entries: []
  };
}

const createExternal = ({ settings: { external }, deps: { production } }: ProjectConfiguration) => {
  const modules = BUILTIN_MODULES.concat(external === 'all' ? production : []);
  const predicate = new RegExp(`^(${modules.map(toRegExpPart).join('|')})($|/)`);

  return (id: string) => predicate.test(id);
};

const toRegExpPart = (ext: string | RegExp) =>
  ext instanceof RegExp ? ext.source : escapeString(ext);

const escapeString = (value: string) =>
  value.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&').replace(/-/g, '\\x2d');

const compact = <T>(list: Array<T | null | '' | 0 | void | false | undefined>): T[] =>
  list.filter(Boolean) as any;

const BUILTIN_MODULES = [
  /node:.*/,
  // eslint-disable-next-line @typescript-eslint/require-array-sort-compare
  ...builtinModules.filter(x => !/^_|^(internal|v8|node-inspect)\/|\//.test(x)).sort()
];
