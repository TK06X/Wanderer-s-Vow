import { createRouter, createWebHistory, RouteRecordRaw, createWebHashHistory } from 'vue-router'

//注册路由
const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'home',
        component: () => import('@/views/home/home.vue')
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('./../views/login/login.vue')

    },
    {
        path: '/test',
        name: 'test',
        component: () => import('@/views/practice/test.vue')
    },


];
const router = createRouter({
    // createWebHashHistory()是使用hash模式路由
    // createWebHistory()是使用history模式路由
    history: createWebHashHistory(''),
    // history: createWebHistory('/login'),  //http://127.0.0.1:8081/admin/
    routes
});

router.beforeEach((news, old, next) => {
    next();
})
export default router;
