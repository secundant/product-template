import { access, mkdir, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import type { INode } from 'svgson';
import type { Configuration } from '@/create-configuration';
import type { Input } from '@/input';
import { groupInputs } from '@/input';
import { renderSvgNodesToSpriteString } from '@/output/render';

export async function writeSprites(
  inputs: Input[],
  parsed: Map<Input, INode>,
  { group, output: { staticRoot, fileName } }: Configuration
) {
  if (group) {
    const grouped = groupInputs(inputs, group);

    for (const [groupName, nodes] of Object.entries(grouped)) {
      await writeNodesToSpriteFile(
        resolve(staticRoot, fileName.replaceAll('{name}', groupName)),
        nodes.map(node => parsed.get(node)!)
      );
    }
  } else {
    await writeNodesToSpriteFile(resolve(staticRoot, fileName), Array.from(parsed.values()));
  }
}

async function writeNodesToSpriteFile(path: string, nodes: INode[]) {
  await ensureUpward(path);
  await writeFile(path, renderSvgNodesToSpriteString(nodes), 'utf-8');
}

const ensureUpward = (path: string) => ensure(dirname(path));
const ensure = (path: string): Promise<void> =>
  access(path).catch(() => ensureUpward(path).then(() => mkdir(path)));
