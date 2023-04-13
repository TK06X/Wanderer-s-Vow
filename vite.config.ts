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
    host: "127.0.0.1", // 这里也可以写成域名，在工作开发中可以配置环境变量一起使用
    port: 5560
  },

  resolve: {
    alias: {
      // '@': path.resolve('./', 'src')

      '@': path.resolve(__dirname, './src'),
      '*': path.resolve('')


      // "@": resolve(__dirname, "./src")
      // "@": fileURLToPath(new URL("./src", import.meta.url))
      // "@": path.resolve(__dirname, "src"),
      // "comps": path.resolve(__dirname, "src/components"),
    }
  },
})

