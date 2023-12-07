const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');

module.exports = { createTailwindConfig };

/** @type {import('tailwindcss').Config} */
function createTailwindConfig(cwd) {
  return {
    content: [
      join(cwd, 'src/**/*!(*.stories|*.spec).{ts,tsx,html,css}'),
      ...createGlobPatternsForDependencies(cwd),
    ],
    theme: {
      extend: {},
    },
    plugins: [],
  };
}
