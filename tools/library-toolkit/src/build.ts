import type { InputOptions, RollupBuild, RollupCache } from 'rollup';
import { rollup } from 'rollup';
import type { ProjectConfiguration } from './core/create-project-configuration';
import { createRollupContext, RollupCompilationEntry } from './rollup/create-rollup-context';

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
