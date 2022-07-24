import { createFilter } from '@rollup/pluginutils';
import { Options, transform } from '@swc/core';
import type { Plugin } from 'rollup';

export interface RollupPluginSwcOptions extends Omit<Options, 'filename'> {
  rollup?: {
    include?: string[];
    exclude?: string[];
  };
}

export function rollupPluginSwc({ rollup, ...options }: RollupPluginSwcOptions): Plugin {
  const filter = createFilter(rollup?.include, rollup?.exclude);

  return {
    name: 'swc',
    transform(code, filename) {
      if (!filter(filename)) {
        return null;
      }

      return transform(code, {
        ...options,
        filename
      });
    }
  };
}
