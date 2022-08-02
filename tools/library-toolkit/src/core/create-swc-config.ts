import type { Options } from '@swc/core';
import type { ProjectConfiguration } from './create-project-configuration';

export function createSwcConfig({
  cwd,
  tsconfig,
  deps,
  settings: { sourceMap }
}: ProjectConfiguration): Options {
  const jsx = deps.production.includes('react');

  return {
    cwd,
    sourceMaps: sourceMap,
    jsc: tsconfig
      ? {
          parser: {
            syntax: 'typescript',
            tsx: jsx,
            decorators: tsconfig.compilerOptions.experimentalDecorators,
            dynamicImport: true
          },
          externalHelpers: tsconfig.compilerOptions.importHelpers,
          baseUrl: tsconfig.compilerOptions.baseUrl,
          paths: tsconfig.compilerOptions.paths
            ? Object.fromEntries(
                Object.entries(tsconfig.compilerOptions.paths).map(([path, matches]) => [
                  path,
                  [matches[0]]
                ])
              )
            : undefined
        }
      : {
          parser: {
            syntax: 'ecmascript',
            jsx
          }
        }
  };
}
