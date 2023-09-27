import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/home.vue'
import PriceList from './views/priceList.vue'
import Contact from './views/contact.vue'
import Index from './views/index.vue'

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

const app = createApp(App)

app.use(router)

app.mount('#app')


