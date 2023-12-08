import { type AnyRecord, entries, fromEntries } from './shared.ts';

export function mapValues<Input extends AnyRecord, Result extends Record<keyof Input, any>>(
  target: Input,
  fn: <Key extends keyof Input>(value: Input[Key], key: Key) => Result[Key],
): Result;
export function mapValues<Input extends AnyRecord, ResultValue>(
  target: Input,
  fn: <Key extends keyof Input>(value: Input[Key], key: Key) => ResultValue,
): Record<keyof Input, ResultValue>;
export function mapValues<Input extends AnyRecord, OutputValue>(
  target: Input,
  fn: <Key extends keyof Input>(value: Input[Key], key: Key) => OutputValue,
) {
  return fromEntries(
    entries(target).map(([key, value]) => [key, fn(value as any, key as keyof Input)]),
  );
}
