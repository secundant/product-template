# How to change favicon

### 1. Generate new assets

1. Go to https://realfavicongenerator.net/
2. Select a new icon
3. Configure stuff and download generated assets

### 2. Register new assets

1. Copy generated assets to `/public`
2. Check files and update colors in `.vitepress/config.ts` if needed:

```ts
export default defineConfig({
  // ...
  head: [
    ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' }],
    ['link', { rel: 'manifest', href: '/site.webmanifest' }],
    ['link', { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#710ab7' }],
    ['link', { rel: 'shortcut icon', href: '/favicon.ico' }],
    ['meta', { name: 'msapplication-TileColor', content: '#603cba' }],
    ['meta', { name: 'msapplication-config', content: '/browserconfig.xml' }],
    ['meta', { name: 'theme-color', content: '#ffffff' }],
  ],
  // ...
});
```
