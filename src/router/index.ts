import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CreateEvent from '../views/event/CreateEvent.vue'
import CreateGuest from '../views/guest/CreateGuest.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/event',
      name: 'event',
      component: () => import('../views/EventView.vue')
    },
    {
      path: '/guest',
      name: 'guest',
      component: () => import('../views/GuestView.vue')
    },
    {
      path: '/event/create',
      name: 'createEvent',
      component: CreateEvent
    },
    {
      path: '/guest/create',
      name: 'createGuest',
      component: CreateGuest
    }
    // {
    //   path: '/event/edit',
    //   name: 'editEvent',
    //   component: EditEvent
    // },
  ]
})

export default router
