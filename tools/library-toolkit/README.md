# @my-org/library-toolkit

Toolkit for libraries development. Supports multiple library types

```shell
yarn add -D rollup @swc/helpers @my-org/rollup-config
```

## Concepts

### Library types

- `default` - build all source to single file, single entry point -> single output.
  Useful for NodeJs-oriented/CLI, configs, regular small isolated libraries, etc.
- ``

## Usage

####

### Add rollup config

```javascript
// rollup.config.js
const { createRollupLibraryConfig } = require('@my-org/library-toolkit');

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

- [x] Support typescript paths
- [ ] Support multiple entries
