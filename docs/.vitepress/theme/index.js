// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import Theme from 'vitepress/theme'
import './style.css'
import ImageCard from '../components/ImageCard.vue'
import ImageGroup from '../components/ImageGroup.vue'

export default {
  extends: Theme,
  Layout: () => {
    return h(Theme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp({ app, router, siteData }) {
    // 注册组件
    app.component('ImageCard', ImageCard)
    app.component('ImageGroup', ImageGroup)
  }
}