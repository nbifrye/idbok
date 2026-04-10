import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'ja',
  title: 'idbok',
  description: 'idbok documentation',
  // カスタムドメイン(サブドメイン直下)で配信するため base は '/'
  base: '/',
  lastUpdated: true,
  cleanUrls: true,
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' }
    ],
    sidebar: [],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/nbifrye/idbok' }
    ]
  }
})
