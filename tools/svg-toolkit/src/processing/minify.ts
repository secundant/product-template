import { optimize, OptimizedError, OptimizedSvg, OptimizeOptions } from 'svgo';
import type { MinifyOptions } from '@/create-configuration';

export function minifySvgContent(content: string, options: MinifyOptions = {}) {
  const optimized = optimize(content, createSvgoOptions(options));

  if (isError(optimized)) {
    throw optimized.error;
  }
  return optimized.data;
}

const isError = (result: OptimizedError | OptimizedSvg): result is OptimizedError =>
  Boolean(result.error);

const createSvgoOptions = ({ removeAttrs = [] }: MinifyOptions): OptimizeOptions => ({
  plugins: [
    { name: 'removeStyleElement', active: true },
    { name: 'removeUselessStrokeAndFill', active: true },
    { name: 'removeScriptElement', active: true },
    { name: 'removeEmptyAttrs', active: true },
    { name: 'mergePaths', active: true },
    { name: 'collapseGroups', active: true },
    { name: 'removeTitle', active: true },
    { name: 'removeViewBox', active: false },
    { name: 'removeDimensions', active: true },
    {
      name: 'removeAttrs',
      params: {
        attrs: [
          '(class|style)',
          'xlink:href',
          'aria-labelledby',
          'aria-describedby',
          'xmlns:xlink',
          'data-name'
        ].concat(removeAttrs)
      }
    }
  ],
  multipass: true
});
