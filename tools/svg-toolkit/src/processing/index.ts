import { readFile } from 'node:fs/promises';
import type { Configuration } from '@/create-configuration';
import type { Input } from '@/input/get-inputs';
import { minifySvgContent } from '@/processing/minify';
import { parseSvgContentToJson } from '@/processing/parse';

export async function processInput(
  { absolutePath, name }: Input,
  { minify, transform }: Configuration
) {
  const rawContent = await readFile(absolutePath, 'utf-8');
  const content = minify ? minifySvgContent(rawContent, minify) : rawContent;

  return parseSvgContentToJson(name, content, transform);
}
