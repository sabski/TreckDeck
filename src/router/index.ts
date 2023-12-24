import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SeriesDetails from '../views/SeriesDetails.vue'
 
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/series/:uid',
      name: 'seriesDetails',
      component: SeriesDetails
    }
  ]
})

export default router
