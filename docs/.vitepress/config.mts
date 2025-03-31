import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Crayon\'s Blog Website",
  description: "这是 Crayon 的博客频道",
  base : '/CrayonBlog/',
  lastUpdated: true,
  head: [
    ['link', { rel: 'icon', href: '/character.ico' }]
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/crayon.png',
    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium'
      }
    },
    nav: [
      { text: 'Home', link: '/' },
      { text: '友链', link:'/team'},
    ],

    sidebar: [
      {
        text: 'Life',
        items: [
          {
            text: '生活中的一些趣事',
            items: [
              { text: '认识了一群很有趣的朋友', link:'/Life/趣事/认识了一群很有趣的朋友' },
            ]
          }
          
        ]
      },
      {
        text: 'FrontEnd',
        items: [
          {
            text: 'HTML',
            collapsed: false,
            items: [
              // { text: 'HTML1', link: '/FrontEnd/HTML/HTML1' },
              // { text: 'HTML2', link: '/FrontEnd/HTML/HTML2' }
            ]
          },
          {
            text:'CSS',
            collapsed: false,
            items: [
              // { text: 'CSS1', link: '/FrontEnd/CSS/CSS1' }
            ]
          },
          {
            text:'JavaScript',
            collapsed: false,
            items: [
              { text: 'JavaScript网络请求', link: '/FrontEnd/JavaScript/JavaScript1' },
              { text: 'JavaScript异步', link: '/FrontEnd/JavaScript/JavaScript2' },
              { text: 'JavaScript闭包', link: '/FrontEnd/JavaScript/JavaScript3' },
              { text: 'JavaScript文档阅读', link: '/FrontEnd/JavaScript/JavaScript4' }
            ]
          },
          {
            text:'Vue',
            items: [
              // { text: 'Vue1', link: '/FrontEnd/Vue/Vue1' }
            ]
          }
        ]
      }

    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/CrayonCreator' },
      { icon: 'bilibili',link:'https://space.bilibili.com/362818515?spm_id_from=333.1007.0.0'}
    ],

    search: {
      provider: 'local'
    },

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2025-present Crayon'
    },
  }
})
