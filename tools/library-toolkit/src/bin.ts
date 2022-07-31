import { rollup, RollupBuild, RollupCache } from 'rollup';
import sade from 'sade';
import { createRollupConfig } from './rollup/create-rollup-config';

sade('library')
  .command('build')
  .action(async () => {
    const rollupConfig = await createRollupConfig({
      cwd: process.cwd()
    });
    let cache: RollupCache | false = false;

    for (const config of rollupConfig) {
      const output = Array.isArray(config.output) ? config.output[0] : config.output;
      const bundle: RollupBuild = await rollup({
        ...config,
        cache
      });

      if (bundle.cache) {
        cache = bundle.cache;
      }
      if (output) {
        await bundle.write(output);
      }
    }
  })
  .parse(process.argv);
