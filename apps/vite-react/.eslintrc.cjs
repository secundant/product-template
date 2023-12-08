const { presets, configure } = require('eslint-kit');

module.exports = configure({
  root: __dirname,
  presets: [
    presets.react(),
    presets.imports(),
    presets.prettier(),
    presets.effector(),
    presets.typescript(),
  ],
  extend: {
    ignorePatterns: ['node_modules', 'dist'],
    rules: {
      'import/extensions': 'off',
    },
  },
});
