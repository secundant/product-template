<h1 align="center">
  <a aria-label="Product template" href="https://github.com/belgattitude/nextjs-monorepo-example">
    🏗 Product template
  </a>
</h1>
<p align="center">
  <strong>Detailed fully featured template for long-term projects</strong>
</p>

> Project is in early development phase and contains some dirty moments

[Visit our documentation](https://product-template.pages.dev/repo/intro) to get detailed information and
see like-a-real-world example of [apps/docs](./apps/docs) in one 👏

- [Yarn 4](https://yarnpkg.com/getting-started/usage), a flexible package manager
- [Corepack](https://nodejs.org/api/corepack.html) for seamless package manager switching
- Monorepo powered by [NX](https://nx.dev/)
- [lefthook](https://github.com/evilmartians/lefthook/) for git hooks
  - [commitlint](https://commitlint.js.org/) on commit-msg
  - [ESLint](https://eslint.org/) and [Prettier](https://prettier.io/) on pre-commit
  - Tests, type checking and linting on pre-push
- [Vitest](https://vitest.dev/) for unit tests
- Preconfigured [TypeScript](https://www.typescriptlang.org/) with strict rules
- [Vitepress](https://vitepress.vuejs.org/) for [own documentation application](./apps/docs) with its rationale, explanation and self-documented recipes
- **not implemented** Group of ready-to-use examples of UI Kit libraries (self-made / radix)
- **not implemented** Multiple applications examples (NextJS / Vite / Razzel)

## Setup

```shell
corepack enable
yarn
```

## Details

### Preconfigured TypeScript

[Global tsconfig.base.json](./tsconfig.base.json) is a well-designed
configuration preset with strict rules and monorepo packages paths.
It should be used in all modules in workspace for consistency purpose.
Of course, you can reconfigure it as you wish :)

### NX and monorepo

#### Benefits

- Cache
- Consistency
- Scalability
- Shared anything (code, configs, tools, etc.)
- Transparent **source code** relations
  > It sounds not so important, but it changes the way you think about your code and significantly boosts your productivity in certain cases (it literally could be 1 day vs 30 minutes)
- Zero overhead for new and existing projects
- Code structuring and easy reuse—we're able to extract all common logic
  to shared libraries and use it without any painful actions (build/publish/install/update/etc.)
- Collaboration across a team and tools

#### Drawbacks

- Repository size—this is a potential problem with scaling up (**TODO - research it**)

## Development quick tips

### New library creation

Unfortunately, we still can't provide better way then just copy-paste one of libraries.

> **Help wanted** If you know really well worked way to generate libs with NX - let me know.

1. Copy library and rename it
2. Add path to tsconfig.base.json

### Testing

By default, unit tests is powered by [Vitest](https://vitest.dev/),
in our [root package.json](./package.json) already added `vite` and `vite-tsconfig-paths`,
so you don't need to add them in every package.

So, if you want to add unit tests:

1. `yarn add -D vitest` in target library folder or `yarn workspace @my-org/NAME add -D vitest` anywhere else
2. Add `vite.config.ts` - you can take configuration in [local "std" library](libs/std/vite.config.ts)
   or make it yourself as it shown [in vitest documentation](https://vitest.dev/config/)
3. Add `"test": "vitest run"` to your library `package.json`

Of course, you can change choose `jest` or something else instead of `vitest` if you want :)

### CSS

In all packages we use [TailwindCSS](https://tailwindcss.com/),

### Project graph

This command will show a graph of the dependencies and tasks.

```sh
yarn nx graph
```

### TODO Describe details

- `tsconfig.base.json`
- lefthook
- Root-level package.json and no dependencies in packages
- Docs
- Tailwind
- React-aria
- Nx shared config
-
