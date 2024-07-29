import { defineConfig } from 'vite'
import vueJsx from '@vitejs/plugin-vue-jsx'
// vitepress 添加搜索  https://juejin.cn/post/7199265829955108901
import { SearchPlugin } from 'vitepress-plugin-search'
import flexSearchIndexOptions from 'flexsearch'

const options = {
  ...flexSearchIndexOptions,
  previewLength: 100, //搜索结果预览长度
  buttonLabel: '搜索',
  placeholder: '情输入关键词'
}

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    fs: {
      // 允许工作区为root路径以外的文件的访问
      strict: false
    }
  },
  plugins: [vueJsx(), SearchPlugin(options)]
})
