const { createPostcssConfig } = require('@my-org/config/postcss');

module.exports = createPostcssConfig(__dirname, {
  tailwindFile: 'tailwind.config.cjs',
});
