import chalk from 'chalk';
import type { InputOptions, RollupBuild, RollupCache } from 'rollup';
import { rollup, watch as rollupWatch } from 'rollup';
import type { ProjectConfiguration } from './core/create-project-configuration';
import { stdout } from './core/logger';
import { createRollupContext, RollupCompilationEntry } from './rollup/create-rollup-context';

export function watch(configuration: ProjectConfiguration) {
  const rollupContext = createRollupContext(configuration);

  stdout(chalk.blue(`Watching sources...`));

  for (const entry of rollupContext.entries) {
    const watcher = rollupWatch({
      ...entry.input,
      output: entry.output,
      watch: {
        exclude: 'node_modules/**',
        clearScreen: true
      }
    });

    watcher.on('event', event => {
      if (event.code === 'START') {
        // ...
      }
      if (event.code === 'ERROR') {
        console.error(event.error);
        // ...
      }
      if (event.code === 'END') {
        // ...
      }
    });
  }
}

export async function build(configuration: ProjectConfiguration) {
  const rollupContext = createRollupContext(configuration);
  const buildContext = createBuildContext();

  for (const entry of rollupContext.entries) {
    await buildEntry(entry, buildContext);
  }
}

async function buildEntry({ input, output }: RollupCompilationEntry, context: BuildContext) {
  const build = await rollup(context.prepareInputOptions(input));

  context.afterBuild(build);
  for (const outputOptions of output) {
    await build.write(outputOptions);
  }
  return build;
}

type BuildContext = ReturnType<typeof createBuildContext>;

function createBuildContext() {
  let cache: RollupCache | false = false;

  return {
    prepareInputOptions(options: InputOptions) {
      return {
        ...options,
        cache
      };
    },
    afterBuild(build: RollupBuild) {
      if (build.cache) {
        cache = build.cache;
      }
    }
  };
}
