<h1 align="center">
  <a aria-label="Product template" href="https://github.com/belgattitude/nextjs-monorepo-example">
    🏗 Product template
  </a>
</h1>
<p align="center">
  <strong>Detailed fully featured template for long-term projects</strong>
</p>

> Project is in early development phase and contains some dirty moments

Our primary features:

- [Yarn 3](https://yarnpkg.com/getting-started/usage) - most flexible package manager
- Monorepo (This will be a separate section in the future)
  - Benefits
    - Code structuring and easy reuse - we're able to extract all common logic
      to shared libraries and use it without any painful actions (build/publish/install/update/etc.)
    - Consistency
    - Collaboration across team and tools
  - Drawbacks
    - Requires common smart tools (NX/Turbo/etc.)
    - Repository size - this is potential problem with scaling up (**TODO - research it**)
  - Built-in task management powered by [NX](https://nx.dev/)
- **not implemented** Group of ready-to-use examples of UI Kit libraries (self-made / radix)
- **not implemented** Multiple applications examples (NextJS / Vite / Razzel)
- [Documentation application](./apps/docs) with its rationale, explanation and self-documented recipes

## Included features

### Preconfigured TypeScript

[Global tsconfig.base.json](./tsconfig.base.json) is well designed
configuration preset with strict rules and monorepo packages paths.
It should be used in all modules in workspace for consistency purpose.
Of course, you can reconfigure it as you wish :)

## Development quick tips

### New library creation

Unfortunately, we still can't provide better way then just copy-paste one of libraries.

> **Help wanted** If you know really well worked way to generate libs with NX - let me know.

1. Copy library and rename it
2. Add path to tsconfig.base.json

### Unit testing

By default, unit tests is powered by [Vitest](https://vitest.dev/),
in our [root package.json](./package.json) already added `vite` and `vite-tsconfig-paths`,
so you don't need to add them in every package.

So, if you want to add unit tests:

1. `yarn add -D vitest` in target library folder or `yarn workspace @my-org/NAME add -D vitest` anywhere else
2. Add `vite.config.ts` - you can take configuration in [local "std" library](libs/std/vite.config.ts)
   or make it yourself as it shown [in vitest documentation](https://vitest.dev/config/)
3. Add `"test": "vitest run"` to your library `package.json`

Of course, you can change choose `jest` or something else instead of `vitest` if you want :)

### Project graph

This command will show a graph of the dependencies and tasks.

```sh
yarn nx graph
```
