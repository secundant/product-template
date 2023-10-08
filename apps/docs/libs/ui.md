---
id: libraries.ui
tags:
  - library
---

# @my-org/ui

Tailwind-based design system

## Installation and setup

```bash
yarn add -D postcss autoprefixer tailwindcss @my-org/ui@'workspace:*'
yarn dlx tailwindcss init
```

### Setup tailwind config

You should extend tailwind configuration from `@my-org/ui`, its primary and required thing,
all our design tokens are specified there.

Also, add `../../libs/ui/src/**/*.{ts,tsx}` to `content` option if you want use it inside monorepo (for development).

```javascript title="tailwind.config.js"
const baseConfig = require('@my-org/ui/tailwind.config');

/** @type {import('tailwindcss').Config} */
module.exports = {
  ...baseConfig,
  content: ['./src/**/*.{ts,tsx}', '../../libs/ui/src/**/*.{ts,tsx}'],
};
```

### Setup CSS

```css
/* tailwind already included here */
@import '@my-org/ui/global.css';
```

## Usage

```tsx title="features/kek/ui.tsx"
import { Button } from '@my-org/ui';
import { $count, buttonClicked } from './model';
import { useUnit } from 'effector-react';

export function Kek() {
  const [count, handleClick] = useUnit([$count, buttonClicked]);

  return (
    <Button size="md" onClick={handleClick}>
      count is {count}
    </Button>
  );
}
```
