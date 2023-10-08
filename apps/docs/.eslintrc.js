const { presets, configure } = require('eslint-kit');

module.exports = configure({
  root: __dirname,
  presets: [presets.node({}), presets.imports(), presets.typescript({}), presets.prettier({})],
  extend: {
    rules: {
      // Docusaurus adds some external aliases with declare module "..."
      'import/no-unresolved': 'off',
    },
    ignorePatterns: ['!**/*', 'node_modules', '.docusaurus', 'build'],
  },
});
