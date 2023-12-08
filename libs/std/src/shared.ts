export const identity = <T>(value: T): T => value;
export const isTruthy = Boolean as unknown as <T>(value: T | Falsy) => value is T;

export type Falsy = false | null | undefined | void | 0 | '';
export type Truthy = Exclude<any, Falsy>;
export type AnyKey = keyof any;
export type AnyRecord = Record<AnyKey, any>;

//#region Object

export const values = Object.values;
export const fromEntries = Object.fromEntries as {
  <T>(entries: Iterable<ObjectEntry<T>>): T;
  <T>(entries: Iterable<readonly [PropertyKey, T]>): Record<string, T>;
};
export const entries = Object.entries as TypedObjectEntries;
export const hasOwn = Object.hasOwn as TypedObjectHasOwn;
export const keys = Object.keys as TypedObjectKeys;

export type ObjectEntry<T> = {
  [Key in Extract<keyof T, string>]: [Key, Exclude<T[Key], undefined>];
}[Extract<keyof T, string>];

export interface TypedObjectEntries {
  <T>(target: T): ObjectEntry<T>[];
}

export interface TypedObjectKeys {
  <T>(target: T): Array<Extract<keyof T, string>>;
}

export interface TypedObjectHasOwn {
  <Key extends keyof T, T extends Record<keyof any, any>>(
    target: T,
    key: Key,
  ): target is T & {
    [K in Key]-?: Exclude<T[K], undefined | void | never>;
  };
}

//#endregion
