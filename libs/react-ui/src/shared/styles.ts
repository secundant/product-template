import { cx } from 'class-variance-authority';

export const textStyles = {
  base: 'text-base/1.5',
};
export const controlStyles = {
  base: 'rounded-md focus-visible:ring-offset-2 outline-none',
  disabled: {
    true: 'text-gray-400 bg-gray-100 border-gray-300 cursor-not-allowed',
    false: 'ring-offset-0 ring-2 ring-transparent transition-shadow',
  },
  size: {
    sm: cx(textStyles.base, 'py-1'),
    md: cx(textStyles.base, 'py-2'),
    lg: cx(textStyles.base, 'py-4'),
  },
};
