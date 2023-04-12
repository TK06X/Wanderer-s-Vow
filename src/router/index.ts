import { createRouter, createWebHistory, RouteRecordRaw, createWebHashHistory } from 'vue-router'
import Home from "./../views/home.vue";
import Login from "./../views/login/login.vue"

//注册路由
const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/Login',
        name: 'Login',
        component: Login
    },
    // {
    //     path: '/HelloWorld',
    //     name: 'Home',
    //     component: Home
    // }
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
