import { resolve } from 'node:path';
import type { GroupInputFn } from '@/input/group-inputs';
import { groupByPath } from '@/input/group-inputs';

export function createConfiguration(
  cwd: string,
  {
    group = false,
    input = '**/*.svg',
    minify = {},
    transform = {},
    output: { staticFiles = 'public/sprite', fileName = '{name}.svg', root: outputRoot = '.' } = {}
  }: ConfigurationInput
) {
  return {
    cwd,
    group: group === true ? groupByPath : group || null,
    minify: minify || null,
    input: Array.isArray(input) ? input : [input],
    output: {
      staticRoot: resolve(cwd, outputRoot, staticFiles),
      fileName
    },
    transform: {
      resetColorIncludedProperties: ['fill', 'stroke'],
      resetColorIncludedValues: ['#000', '#fff'],
      resetColorReplacement: 'currentColor',
      ...transform
    }
  };
}

export type Configuration = ReturnType<typeof createConfiguration>;

export interface ConfigurationInput {
  transform?: Partial<TransformOptions>;
  minify?: false | MinifyOptions;
  output?: OutputOptions;
  input?: string | string[];
  group?: boolean | GroupInputFn;
}

export interface OutputOptions {
  root?: string;
  fileName?: string;
  staticFiles?: string;
  definitions?: string;
}

export interface MinifyOptions {
  removeAttrs?: string[];
}

export interface TransformOptions {
  resetColorIncludedProperties: string[];
  resetColorIncludedValues: string[];
  resetColorReplacement: string;
}
