# Overview

:::tip

Delete this docs category after your repository setup 🫠
(You can adopt some statements as part of your own internal documentation)

:::

## Motivation

Just make another one template 🥴

There are already exists many templates that solve different problems,
but I haven't seen any solution that cover whole working process

- documentation for product knowledge base
- libraries setup - publication
- monorepo, integrated with good tooling (NX here)
- **simple** - it's really important, the template should be very easy to use

:::info WIP

To be continued...

:::

## What's included?

### Package manager - [Yarn 4](https://yarnpkg.com/getting-started/usage)

I chose it for its potential flexibility, plugins system and some unique features.

You can change it to [pnpm](https://pnpm.io/), it's a little more fast and have some additional caching features.

See details in:

- [pnpm features comparison](https://pnpm.io/feature-comparison)

### Monorepo boosted by [Nx](https://nx.dev/)

Yes, it's complex debatable question about pros and cons of monorepo,
but, ofc, in my vision, monorepo-based template is great choice for how to
organize and visualize the approximate structure of real product.

It's not a just boilerplate. It's not a final solution. It's _proposed variant, example of opportunities_.

So, my about monorepo 😅, it's section already a bit overloaded, if you interested in
and want to go deeper, - [See our docs about monorepo](/repo/why-monorepo)

### Automatic publishing of libraries in npm

We use [changesets](https://github.com/changesets/changesets) to make it as simple as possible,
you can find more information on [the "Publishing libraries to NPM" page](/repo/npm-publish).

```bash title="Start your first changeset"
yarn changeset
```
