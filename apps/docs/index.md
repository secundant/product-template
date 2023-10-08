---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: 'My Org'
  text: 'Short description...'
  actions:
    - theme: brand
      text: About documentation
      link: /apps/docs/intro
    - theme: alt
      text: About repository
      link: /repo/intro

features:
  - title: Testing
    icon: 🧪
    link: /repo/testing
    details: Vitest, ...
  - title: Why Monorepo?
    icon: 📦
    link: /repo/why-monorepo
    details: Nx, ...
  - title: Publishing libraries to NPM
    icon: 📤
    link: /repo/npm-publish
    details: Changesets, ...
---
