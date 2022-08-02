import sade from 'sade';
import { build, watch } from './build';
import { createProjectConfiguration } from './core/create-project-configuration';

sade('library')
  .command('build')
  .action(async () => {
    const configuration = await createProjectConfiguration(process.cwd(), 'production');

    await build(configuration);
  })
  .command('watch')
  .action(async () => {
    const configuration = await createProjectConfiguration(process.cwd(), 'development');

    watch(configuration);
  })
  .parse(process.argv);
