import { createRouter, createWebHistory } from 'vue-router'

import home from '../views/home'
import priceList from '../views/priceList'
import contact from '../views/contact'
import index from '../views/index'


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: home
        },
        {
            path: '/priceList',
            component: priceList
        },
        {
            path: '/contact',
            component: contact
        },
        {
            path: '/index',
            component: index
        }
    ]
})

export default router