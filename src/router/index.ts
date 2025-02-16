import Tarefas from '@/views/Tarefas.vue'
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Projetos from '@/views/Projetos.vue'
import Formulario from '@/views/Projetos/Formulario.vue'
import Lista from '@/views/Projetos/Lista.vue'
// import App from '@/App.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Tarefas',
    component: Tarefas,
  },
  {
    path: '/projetos',
    component: Projetos,
    children: [
      {
        path: '',
        name: 'Projetos',
        component: Lista
      },
      {
        path: 'novo',
        name: 'Novo Projetos',
        component: Formulario
      },
      {
        path: ':id',
        name: 'editar Projeto',
        component: Formulario,
        props: true
      }
    ]
  },
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
