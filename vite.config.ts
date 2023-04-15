import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import AutoImprot from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'

import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'  //按需引入组件
import path from 'path'
// import { resolve } from "path"


export default defineConfig({
  plugins: [
    vue(),
    AutoImprot({
      resolvers: [ElementPlusResolver()],
      imports: ['vue', 'vue-router', 'pinia'],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  server: {
    host: true,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '*': path.resolve('')
    }
  },
})

