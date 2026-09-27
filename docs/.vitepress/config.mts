import { defineConfig } from 'vitepress'

// Public URL of the deployed wiki - OpenGraph crawlers require absolute image URLs
const SITE_URL = 'https://wiki.kenolab.eu'

export default defineConfig({
  lang: 'en-US',
  title: 'KenoWiki',
  description: 'Documentation for the Kenolab platform',
  cleanUrls: true,
  lastUpdated: true,
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:site_name', content: 'KenoWiki' }],
    ['meta', { property: 'og:title', content: 'KenoWiki' }],
    ['meta', { property: 'og:description', content: 'Official wiki of Kenolab' }],
    ['meta', { property: 'og:image', content: `${SITE_URL}/og-image.png` }],
    ['meta', { property: 'og:image:width', content: '1200' }],
    ['meta', { property: 'og:image:height', content: '630' }],
    ['meta', { property: 'og:image:alt', content: 'KenoWiki - Official wiki of Kenolab' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:image', content: `${SITE_URL}/og-image.png` }],
  ],

  themeConfig: {
    logo: { src: '/logo.jpg', alt: 'Kenolab' },
    // Title is rendered by the theme (two-tone "Keno" + "Wiki")
    siteTitle: false,

    nav: [
      { text: 'Kenolab', link: 'https://www.kenolab.eu' },
    ],

    sidebar: [
      {
        text: 'Introduction',
        items: [{ text: 'What is Kenolab?', link: '/introduction/' }],
      },
      {
        text: 'How to play',
        items: [{ text: 'Getting started', link: '/how-to-play/' }],
      },
      {
        text: 'Kenobot',
        items: [{ text: 'Using the bot', link: '/kenobot/' }],
      },
      {
        text: 'VPN Usage',
        items: [{ text: 'Connecting to the lab', link: '/vpn/' }],
      },
    ],

    search: { provider: 'local' },
    outline: 'deep',
  },
})
