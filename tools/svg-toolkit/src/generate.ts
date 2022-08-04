import ora from 'ora';
import type { INode } from 'svgson';
import type { Configuration } from '@/create-configuration';
import { getInputs, Input } from '@/input';
import { writeSprites } from '@/output';
import { processInput } from '@/processing';

export async function generateSvgSprites(configuration: Configuration) {
  const { cwd, input } = configuration;
  const progress = ora().start('Loading sources');
  const inputs = await getInputs(cwd, input);

  progress.succeed(`Processing ${inputs.length} files`).stop();
  const nodesMap = new Map<Input, INode>();

  progress.start('');
  for (const input of inputs) {
    nodesMap.set(input, await processInput(input, configuration));
    progress.info(`[${nodesMap.size}/${inputs.length}] processing...`);
  }
  progress.succeed('Done!');
  await writeSprites(inputs, nodesMap, configuration);
}
