# Deploy docs app

Here documented that application deploy process

:::tip

In this article, I'll cover Cloudflare Pages only (well known as `kek.pages.dev`).

Other deployment methods should be same or similar.

:::

### Start a Cloudflare Pages project

1. Go to your [Cloudflare dashboard](https://dash.cloudflare.com/?to=/:account/pages) (register account if you haven't)
2. `Pages` > `Create a project` > `Connect to Git`
3. Connect GitHub account, select repository, select branch

### Configure build

Framework preset doesn't matter, go to Build configurations:

- `Build command`: `yarn nx build docs`
- `Build output directory`: `/apps/docs/.vitepress/dist`

<img src="/apps/docs/deploy-build-configuration-preview.png" width="1918" height="908" alt="Build configuration preview" />

### Configure environment variables

Add one environment variable for correct NodeJS version (latest or modern LTS):

- `NODE_VERSION` - `20.8.0`

<img src="/apps/docs/deploy-envs-preview.png" width="1582" height="708" alt="Environment variables preview" />

That's all, enjoy 🤗
