import { withMermaid } from 'vitepress-plugin-mermaid'
import { buildSidebar } from './sidebar.mts'

export default withMermaid({
  lang: 'ja',
  title: 'idbok',
  description:
    'デジタルアイデンティティ領域の技術仕様とトピックを体系的にまとめた Body of Knowledge',
  // カスタムドメイン(サブドメイン直下)で配信するため base は '/'
  base: '/',
  cleanUrls: true,
  lastUpdated: true,

  sitemap: {
    hostname: 'https://idbok.nbifrye.com'
  },

  markdown: {
    lineNumbers: true
  },

  mermaid: {},
  mermaidPlugin: {},

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
          items: buildSidebar('../specs', '/specs/', 'slug')
        }
      ],
      '/articles/': [
        {
          text: 'Articles',
          items: buildSidebar('../articles', '/articles/', 'filenameDesc')
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/nbifrye/idbok' }
    ],

    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '検索',
            buttonAriaLabel: '検索'
          },
          modal: {
            displayDetails: '詳細を表示',
            resetButtonTitle: 'リセット',
            backButtonTitle: '戻る',
            noResultsText: '見つかりませんでした',
            footer: {
              selectText: '選択',
              navigateText: '移動',
              closeText: '閉じる'
            }
          }
        }
      }
    },

    outline: {
      level: [2, 3],
      label: '目次'
    },

    docFooter: {
      prev: '前のページ',
      next: '次のページ'
    },

    lastUpdated: {
      text: '最終更新',
      formatOptions: {
        dateStyle: 'medium'
      }
    },

    editLink: {
      pattern: 'https://github.com/nbifrye/idbok/edit/main/docs/:path',
      text: 'このページを GitHub で編集'
    },

    darkModeSwitchLabel: 'テーマ切替',
    sidebarMenuLabel: 'メニュー',
    returnToTopLabel: 'トップへ戻る',
    langMenuLabel: '言語'
  }
})
