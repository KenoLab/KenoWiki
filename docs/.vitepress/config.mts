import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'en-US',
  title: 'KenoWiki',
  description: 'Documentation for the Kenolab platform',
  cleanUrls: true,
  lastUpdated: true,
  head: [['link', { rel: 'icon', href: '/favicon.ico' }]],

  themeConfig: {
    logo: { src: '/logo.jpg', alt: 'Kenolab' },
    siteTitle: false,

    nav: [
      { text: 'Kenolab', link: 'https://www.kenolab.eu' },
    ],

    sidebar: [
      {
        text: 'Introduction',
        items: [
          { text: 'What is Kenolab?', link: '/introduction/' },
          { text: 'Support', link: '/introduction/support.md' },
          { text: 'Hints & Writeups Policy', link: '/introduction/wu-pol.md' },
        ],
      },
      {
        text: 'How to play',
        items: [
          { text: 'Getting started', link: '/how-to-play/' },
          { text: 'FLag Strategy', link: '/how-to-play/flag' },
        ],
      },
      {
        text: 'Kenobot',
        items: [
          { text: 'Using the bot', link: '/kenobot/' },
        ],
      },
      {
        text: 'VPN Usage',
        items: [
          { text: 'Connecting to the lab', link: '/vpn/' },
        ],
      },
    ],

    search: { provider: 'local' },
    outline: 'deep',
  },
})