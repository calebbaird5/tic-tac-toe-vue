import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/tic-tac-toe',
    },
    {
      path: '/tic-tac-toe',
      name: 'TicTacToe',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/TicTacToe.vue'),
    },
    {
      path: '/ultimate-tic-tac-toe',
      name: 'UltimateTicTacToe',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/UltimateTicTacToe.vue'),
    },
  ],
})

export default router
