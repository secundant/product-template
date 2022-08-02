# @my-org/library-toolkit

Complex toolkit for libraries development.
Designed as simplest way for building your libraries without any extra configuration.
Under the hooks uses rollup with swc.

## Installation

```shell
# We recommend adding "@swc/helpers" to support the { compilerOptions: { importHelpers: true } } option
yarn add -D @swc/helpers @my-org/library-toolkit
# If you don't need this optimization - just install toolkit only
yarn add -D @my-org/library-toolkit
```

## Usage

### Zero-config way: Just describe "source" and dist files your package.json

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
    dev: 'library watch',
    build: 'library build'
  }
}
```

### Optional configuration

Will be helpful for customization your flow.

```json5
// package.json
{
  // all configuration should be placed here
  library: {
    /**
     * See details about library types below
     * - standalone (default)
     * - transpile
     */
    type: 'transpile',
    // By default, minification works only on "build" command. Set it to "false" if you never want to minify
    minify: false,
    // Same as for "minify" - by default, it only works on "build" command. Set it to "false" for permanently disable
    sourceMap: false
  }
}
```

## Concepts

### Library types

- `standalone` - build all source to single file, single entry point -> single output.
  Useful for NodeJs-oriented/CLI, configs, regular small isolated libraries, etc.
- `transpile` (in development) - works exactly as "tsc" - transpiles files to destination.

## Troubles

- [x] Support typescript paths
- [ ] Support multiple entries
- [ ] Development mode
- [ ] Transpile mode with multiple destination (see @mui/material)
