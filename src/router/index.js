import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const routes = [
    {
        path: '/edit',
        name: 'Home',
        component: () => import('@/views/Home'),
    },
    {
        path: '/',
        name: 'Index',
        component: () => import('@/views/index'),
    },
]

export default new Router({
    // mode: 'history',
    // base: process.env.BASE_URL,
    routes,
})
