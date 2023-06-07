import { createApp } from 'vue'
// import './style.css'
// import './assets/css/reset.css';  //浏览器默认样式表重置  https://blog.csdn.net/qq_42834220/article/details/90292936
import App from './App.vue'
import router from "./router"
// import 'ant-design-vue/dist/antd.css';
// import "@/style/base.scss";

createApp(App)
  .use(router)
  .mount('#app')
