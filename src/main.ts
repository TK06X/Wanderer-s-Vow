import { createApp } from 'vue'
import { setupPlugins } from "./plugins";

import App from './App.vue'
import router from "./router"
// import 'ant-design-vue/dist/antd.css';

const app = createApp(App);

async function setupSynchronized() {
  await setupPlugins(app);
  setupPlugins(app);
}

setupSynchronized().then(() => {
  app.use(router);
  app.mount("#app");
});
