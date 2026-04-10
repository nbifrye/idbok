import { defineConfig } from 'vitepress'
import { buildSidebar } from './sidebar.mts'

export default defineConfig({
  lang: 'ja',
  title: 'idbok',
  description: 'Digital Identity Body of Knowledge',
  // カスタムドメイン(サブドメイン直下)で配信するため base は '/'
  base: '/',
  lastUpdated: true,
  cleanUrls: true,
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Specs', link: '/specs/' },
      { text: 'Articles', link: '/articles/' }
    ],
    sidebar: {
      '/specs/': [
        {
          text: 'Specs',
          items: [
            { text: 'Specs とは', link: '/specs/' },
            ...buildSidebar('../specs', '/specs/', 'specId')
          ]
        }
      ],
      '/articles/': [
        {
          text: 'Articles',
          items: [
            { text: 'Articles とは', link: '/articles/' },
            ...buildSidebar('../articles', '/articles/', 'publishedDesc')
          ]
        }
      ]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/nbifrye/idbok' }
    ]
  }
})
