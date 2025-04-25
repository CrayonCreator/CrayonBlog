import DefaultTheme from 'vitepress/theme'
import { defineComponent, h } from 'vue'
import type { Theme } from 'vitepress'
import ImageCard from '../components/ImageCard.vue'
import ImageGroup from '../components/ImageGroup.vue'
export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    // 注册全局组件
    app.component('ImageCard', ImageCard)
    app.component('ImageGroup', ImageGroup)
  }
} as Theme
