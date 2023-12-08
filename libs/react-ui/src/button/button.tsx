import { useObjectRef } from '@react-aria/utils';
import { cva, type VariantProps } from 'class-variance-authority';
import type { ReactNode } from 'react';
import { forwardRef } from 'react';
import { type AriaButtonOptions, useButton } from 'react-aria';
import { mergeClasses } from '../shared/lib.ts';
import { controlStyles } from '../shared/styles.ts';

export interface ButtonProps
  extends Omit<AriaButtonOptions<'button'>, 'isDisabled'>,
    Omit<VariantProps<typeof button>, 'disabled'> {
  disabled?: boolean;
  children?: ReactNode;
  className?: string;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ size, theme, className, children, disabled, ...props }, ref) => {
    const buttonRef = useObjectRef(ref);
    const { buttonProps, isPressed } = useButton(
      {
        ...props,
        isDisabled: disabled,
      },
      buttonRef,
    );

    return (
      <button
        className={button({ size, theme, disabled, className })}
        aria-pressed={isPressed}
        ref={buttonRef}
        {...buttonProps}
      >
        {children}
      </button>
    );
  },
);

export const button = cva([controlStyles.base], {
  variants: {
    size: mergeClasses(controlStyles.size, {
      sm: 'px-3',
      md: 'px-6',
      lg: 'px-8',
    }),
    theme: {
      primary: 'focus-visible:ring-indigo-500',
      success: 'focus-visible:ring-green-500',
    },
    disabled: controlStyles.disabled,
  },
  defaultVariants: {
    size: 'sm',
    theme: 'primary',
    disabled: false,
  },
  compoundVariants: [
    {
      theme: 'primary',
      disabled: false,
      className: ['bg-indigo-500 text-white hover:bg-indigo-600 active:bg-indigo-700'],
    },
    {
      theme: 'success',
      disabled: false,
      className: ['bg-green-500 text-white hover:bg-green-600 active:bg-green-700'],
    },
  ],
});
