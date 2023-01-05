import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const routes = [
    {
        path: '/edit',
        name: 'Edit',
        component: () => import('@/views/edit'),
    },
    {
        path: '/',
        name: 'Index',
        component: () => import('@/views/index'),
    },
]

export default new Router({
    routes,
})
