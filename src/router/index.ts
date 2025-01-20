import Tarefas from '@/views/Tarefas.vue'
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Projetos from '@/views/Projetos.vue'
// import App from '@/App.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Tarefas',
    component: Tarefas,
  },
  {
    path: '/projetos',
    name: 'Projetos',
    component: Projetos
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes
})

export default router



// const router = createRouter({
// history: createWebHistory(import.meta.env.BASE_URL),

// routes: [
//   {
//     path: '/',
//     name: 'home',
//     component: App,
//   },
// ],
// })
