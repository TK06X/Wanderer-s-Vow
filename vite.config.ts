import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImprot from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

import { ref } from 'vue'
// import path from 'path'

export default defineConfig({
  plugins: [
    vue(),
    AutoImprot({
      imports: ['vue', 'vue-router'],
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      // resolvers: [ElementPlusResolver({ importStyle: true })],
      resolvers: [ElementPlusResolver()],
    }),

  ],
  server: {
    host: "127.0.0.1", // 这里也可以写成域名，在工作开发中可以配置环境变量一起使用
    port: 8081
  },
  resolve: {
    alias: {
      // "@": fileURLToPath(new URL("./src", import.meta.url))
      // "@": path.resolve(__dirname, "src"),
      // "comps": path.resolve(__dirname, "src/components"),
    }
  },
})


