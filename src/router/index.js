import { createRouter, createWebHistory } from 'vue-router'
import notas from '@/components/notas.vue'
import Inicio from '@/components/inicio.vue'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/notas',
      name: 'notas',
      component: notas
    },
    {
      path: '/inicio',
      name: 'inicio',
      component: Inicio
    }
    
  ]
})

export default router
