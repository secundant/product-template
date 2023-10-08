# Testing

This template provides builtin testing setup

## `vitest` for `headless` testing

By default, unit tests is powered by [Vitest](https://vitest.dev/) for performance and negative configuration purpose.

Our root `package.json` already includes `vite` and `vite-tsconfig-paths`,
so you don't need to add them in every package.

```bash title="Install vitest"
yarn workspace @my-org/my-lib add -D vitest
```

```ts title="libs/my-lib/vite.config.ts"
/// <reference types="vitest" />
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  test: { typecheck: { ignoreSourceErrors: true }, passWithNoTests: true },
  plugins: [tsconfigPaths()],
});
```

Also, update your `package.json`:

```json
{
  "scripts": {
    "test": "vitest run",
    "typecheck": "vitest typecheck"
  }
}
```

:::info
Of course, you can change choose `jest` or something else instead of `vitest` if you like, but we recommend that you at least try `vitest`
:::

## `playwright` for `ui` and `e2e` testing

:::info WIP

To be continued...

:::
