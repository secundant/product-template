import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'My Org',
  description: 'Short description...',
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
  themeConfig: {
    logo: '/logo.png',
    socialLinks: [{ icon: 'github', link: 'https://github.com/secundant/product-template' }],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2023-present Dmitry Remezov',
    },
    sidebar: [
      {
        text: 'Getting Started',
        items: [
          {
            text: 'Introduction',
            link: '/repo/intro',
          },
          {
            text: 'Why monorepo?',
            link: '/repo/why-monorepo',
          },
          {
            text: 'Testing',
            link: '/repo/testing',
          },
          {
            text: 'Publishing',
            link: '/repo/npm-publish',
          },
        ],
      },
      {
        text: 'Applications',
        items: [
          {
            text: '@my-org/docs',
            collapsed: true,
            items: [
              {
                text: 'How to change favicon?',
                link: '/apps/docs/change-favicon',
              },
              {
                text: 'How to deploy docs?',
                link: '/apps/docs/deploy',
              },
              {
                text: 'Why do we need documentation app?',
                link: '/apps/docs/why',
              },
            ],
          },
        ],
      },
      {
        text: 'Libraries',
        items: [
          {
            text: '@my-org/ui',
            link: '/libs/ui',
          },
        ],
      },
    ],
  },
});
