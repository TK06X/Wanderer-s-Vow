import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import AutoImprot from 'unplugin-auto-import/vite'// 按需自动导入 API        这个插件是为了解决在开发中的导入问题
import Components from 'unplugin-vue-components/vite'//按需组件自动导入

// https://blog.csdn.net/Android062005/article/details/128684495 unplugin-auto-import 和 unplugin-vue-components

import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'  //按需引入组件
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'  //按需引入组件

import path from 'path'
// import { resolve } from "path"


export default defineConfig({
  plugins: [
    vue(),
    AutoImprot({
      resolvers: [, AntDesignVueResolver()],
      imports: ['vue', 'vue-router', 'pinia'],
    }),
    Components({
      resolvers: [AntDesignVueResolver()],
    }),
  ],
  server: {
    host: true,
    proxy: {//反向代理，通过axios调用后端服务，解决跨域问题
      "/api": {
        // target: "http://localhost:8081",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '*': path.resolve('')
    }
  },
})

