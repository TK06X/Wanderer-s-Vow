import { createRouter, createWebHistory, RouteRecordRaw, createWebHashHistory } from 'vue-router'

//注册路由
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/login'
  },
  // {
  //   path: '/home',
  //   name: 'home',
  //   // component: () => import('@/layouts/home/home.vue')
  // },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/index.vue')
  },

];
const router = createRouter({
  history: createWebHashHistory(''),
  routes
});

router.beforeEach((news, old, next) => {
  next();
})
export default router;
