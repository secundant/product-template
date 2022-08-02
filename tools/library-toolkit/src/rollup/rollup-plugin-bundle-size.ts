import chalk from 'chalk';
// @ts-expect-error no types
import maxmin from 'maxmin';
import { basename } from 'node:path';
import type { Plugin } from 'rollup';
import { stdout } from '../core/logger';

export function rollupPluginBundleSize(): Plugin {
  return {
    name: 'rollup-plugin-bundle-size',
    generateBundle({ file }, bundle) {
      if (!file) return;
      const asset = basename(file);
      const info = bundle[asset];

      if (info.type !== 'chunk') return;
      const size = maxmin(info.code, info.code, true);

      stdout(`Compiled ${chalk.cyan(file)}: ${size.slice(size.indexOf(' → ') + 3)}`);
    }
  };
}
