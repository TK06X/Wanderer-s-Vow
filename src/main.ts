import { createApp } from 'vue'
// import './style.css'
import './assets/css/reset.css';  //浏览器默认样式表重置  https://blog.csdn.net/qq_42834220/article/details/90292936
import App from './App.vue'
// import router from './router/index'
import router from "./router"
// import ElementPlus from 'element-plus'

// import 'element-plus/lib/theme-chalk/base.css'
// import { ElButton } from 'element-plus'
// const components = [ElButton]
//不同写法
// import { createRouter, createWebHistory } from 'vue-router'
// createApp(App).mount('#app')
// createApp(App).use(router).mount('#app')

//不同写法
// const app = createApp(App)
// app.use(router)
// app.mount('#app')


createApp(App).use(router)
    // .use(ElementPlus)
    .mount('#app')