import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Main from '../views/MainView.vue'
import TaskDetails from '../components/TaskDetails.vue'
import Log from '../views/LogView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'main',
    component: Main
  },
  {
    path: '/main/:taskId',
    name: 'TaskDetails',
    component: TaskDetails,
    props: true
  },
  {
    path: '/log',
    name: 'log',
    component: Log
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router