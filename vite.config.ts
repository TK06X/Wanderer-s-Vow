import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
// import createVitePlugins from "./vite/plugins";

export default defineConfig({
  // return {

  // },
  plugins: [vue()],
  server: {
    host: true,
    proxy: {
      //反向代理，通过axios调用后端服务，解决跨域问题
      '/api': {
        // target: "http://localhost:8081",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '*': path.resolve('')
    }
  }
})
