/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '%my organization docs%',
  tagline: 'Knowledge base. Probably. Hm.',
  projectName: 'product-template',
  organizationName: 'secundant',

  url: 'https://docs-product-template.secundant.github.com',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en']
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/secundant/product-template/apps/docs/docs/'
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/secundant/product-template/apps/docs/blog/'
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css')
        }
      })
    ]
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: '%my organization%',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg'
        },
        items: [
          {
            type: 'search',
            position: 'left'
          },
          {
            type: 'doc',
            docId: 'intro',
            label: 'Tutorial',
            position: 'right'
          },
          { to: '/blog', label: 'Blog', position: 'right' },
          {
            to: '/docs/releases',
            label: 'Changelog',
            position: 'right'
          },
          {
            href: 'https://github.com/secundant/product-template',
            label: 'GitHub',
            position: 'right'
          }
        ]
      },
      footer: {
        style: 'dark',
        copyright: `Copyright © 2000-${new Date().getFullYear()} My Organization`
      },
      prism: {
        theme: require('prism-react-renderer/themes/github'),
        darkTheme: require('prism-react-renderer/themes/vsDark')
      }
    })
};

module.exports = config;
