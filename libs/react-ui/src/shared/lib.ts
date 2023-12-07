import { mapValues } from '@my-org/std/object';
import type { AnyKey } from '@my-org/std/shared';
import { cx } from 'class-variance-authority';
import type { ClassValue } from 'clsx';

export const mergeClasses = <T extends Record<AnyKey, ClassValue>>(
  source: T,
  overrides: Partial<T>,
): T => mapValues(source, (value, key) => cx(value, overrides[key]) as T[typeof key]);
