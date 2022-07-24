# @my-org/rollup-config

```shell
yarn add -D rollup @swc/helpers @my-org/rollup-config
```

## Usage

### Add rollup config

```javascript
// rollup.config.js
const { createRollupLibraryConfig } = require('@my-org/rollup-config');

module.exports = createRollupLibraryConfig();
```

### Describe your package.json

```json5
{
  main: 'dist/index.cjs',
  types: 'dist/index.d.ts',
  source: 'src/index.ts',
  module: 'dist/index.mjs',
  exports: {
    '.': {
      default: './dist/index.mjs',
      require: './dist/index.cjs',
      import: './dist/index.mjs'
    }
  },
  files: ['dist', 'README.md'],
  scripts: {
    dev: 'rollup -c --watch',
    build: 'rollup -c'
  }
}
```

## Troubles

- [ ] Support typescript paths
