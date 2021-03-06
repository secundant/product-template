import { readFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import type { CompilerOptions } from 'typescript';

export async function createProjectConfiguration(cwd: string): Promise<ProjectConfiguration> {
  const tsconfigPath = resolve(cwd, 'tsconfig.json');
  const packagePath = resolve(cwd, 'package.json');

  const tsconfigJson = tsconfigPath ? await readFile(tsconfigPath, 'utf-8') : null;
  const packageJson = await readFile(packagePath, 'utf-8');

  const tsconfig = tsconfigJson ? JSON.parse(tsconfigJson) : null;
  const pkg = JSON.parse(packageJson) as PartialPackageJson;

  return {
    cwd,
    pkg,
    tsconfig,
    output: {
      cjs: pkg.main,
      esm: pkg.module ?? pkg['jsnext:main'],
      types: pkg.types ?? pkg.typings
    },
    deps: {
      all: Object.keys({
        ...pkg.dependencies,
        ...pkg.devDependencies,
        ...pkg.peerDependencies,
        ...pkg.optionalDependencies
      }),
      production: Object.keys({
        ...pkg.dependencies,
        ...pkg.peerDependencies,
        ...pkg.optionalDependencies
      })
    }
  };
}

export interface ProjectConfiguration {
  cwd: string;
  pkg: PartialPackageJson;
  tsconfig: PartialTSConfig | null;
  output: {
    cjs?: string;
    esm?: string;
    types?: string;
  };
  deps: {
    all: string[];
    production: string[];
  };
}

// Contains only required parts of tsconfig
export interface PartialTSConfig {
  compilerOptions: CompilerOptions;
  include?: string[];
  exclude?: string[];
}

export interface PartialPackageJson {
  main?: string;
  types?: string;
  source?: string;
  module?: string;
  typings?: string;
  'jsnext:main'?: string;
  library?: {
    chunks?: boolean;
  };
  /**
   * Type tells us which kind of bundle we want to get as a result
   * - commonjs - always commonjs
   * - module - always ESM
   * - auto (fallback for undefined) - build all versions
   */
  type?: 'commonjs' | 'module' | 'auto';
  // We need collect all dependencies
  dependencies?: Record<string, string>;
  devDependencies?: Record<string, string>;
  peerDependencies?: Record<string, string>;
  optionalDependencies?: Record<string, string>;
}
