import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

import App from './App.vue'
import Home from './Views/Home.vue'
import TwStates from './Views/TwStates.vue'
import './assets/main.css'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/tailwind-states',
      name: 'tailwind-states',
      component: TwStates
    }
  ]
})

createApp(App).use(router).mount('#app')
