import { cva, type VariantProps } from 'class-variance-authority';
import { type ForwardedRef, forwardRef, type ReactNode } from 'react';

export interface ButtonProps extends VariantProps<typeof buttonTheme> {
  className?: string;
  children?: ReactNode;
}

export const Button = forwardRef(
  (
    { className, size, color, appearance, ...props }: ButtonProps,
    ref: ForwardedRef<HTMLButtonElement>
  ) => (
    <button
      ref={ref}
      className={buttonTheme({
        className,
        appearance,
        color,
        size
      })}
      {...props}
    />
  )
);

export const buttonTheme = cva(['flex items-center overflow-hidden'], {
  variants: {
    size: {
      sm: 'p-2',
      md: 'p-3',
      lg: 'p-4'
    },
    color: {
      primary: 'border-blue-500',
      success: 'border-green-500'
    },
    appearance: {
      filled: 'text-white',
      outlined: 'border rounded-sm'
    }
  },
  defaultVariants: {
    size: 'sm',
    color: 'primary',
    appearance: 'filled'
  },
  compoundVariants: [
    {
      color: 'primary',
      appearance: 'filled',
      className: 'bg-blue-500'
    },
    {
      color: 'success',
      appearance: 'filled',
      className: 'bg-green-500'
    }
  ]
});
