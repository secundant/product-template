import type { Stats } from 'node:fs';
import { access, stat } from 'node:fs/promises';

export const isFile = (path: string) => assertPath(path, stats => stats.isFile());
export const isDirectory = (path: string) => assertPath(path, stats => stats.isDirectory());

export const exists = (path: string) =>
  access(path)
    .then(() => true)
    .catch(() => false);

export const assertPath = async (path: string, fn: (stats: Stats) => boolean) => {
  if (await exists(path)) {
    return fn(await stat(path));
  }
  return false;
};

export async function assertFile(path: string) {
  if (!(await isFile(path))) {
    throw new Error(`Path "${path}" expected to be a file, but it's not`);
  }
}

export async function assertDir(path: string) {
  if (!(await isDirectory(path))) {
    throw new Error(`Path "${path}" expected to be a directory, but it's not`);
  }
}
