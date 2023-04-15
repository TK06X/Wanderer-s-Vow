import { createRouter, createWebHistory, RouteRecordRaw, createWebHashHistory } from 'vue-router'

//注册路由
const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        name: 'home',
        component: () => import('@/views/home/home.vue')
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('./../views/login/login.vue')

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
