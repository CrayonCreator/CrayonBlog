import { defineConfig } from 'vitepress'
import * as path from 'path'
import { fileURLToPath } from 'url'
import lightbox from 'vitepress-plugin-lightbox'
const __dirname = path.dirname(fileURLToPath(import.meta.url))

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Crayon\'s Blog Website",
  description: "这是 Crayon 的博客频道",
  base : '/CrayonBlog/',
  lastUpdated: true,
  head: [
    ['link', { rel: 'icon', href: '/CrayonBlog/character.ico' }]  // 添加 base 路径前缀
  ],
  
  // 配置图片资源路径
  vite: {
    resolve: {
      alias: {
        '@theme': path.resolve(__dirname, './theme')
      }
    }
  },
  
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
              { text: '清明假期来武汉的张进步', link: '/Life/趣事/2025.4.5'}
            ]
          },
          {
            text: '生活中的一些烦心事',
            items: [
            ]
          }
          
        ]
      },
      {
        text: '观影感悟',
        items:[
          {
            text: '看过的电影',
            link: '/观影感悟/index'
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
      },
      {
        text: '算法与数据结构',
        items: [
          {text: '哈夫曼',link:'/算法与数据结构/哈夫曼'}
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
  },

  markdown:{
    config: (md) => {
      md.use(lightbox, {
        selector: '.vp-doc img',
        wrapperClass: 'lightbox-wrapper',
        imgClass: 'lightbox-img'
      })
    }
  }
})
