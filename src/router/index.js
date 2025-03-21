import {createRouter, createWebHistory} from "vue-router";
import Form from "../components/Form.vue"
import Table from "../components/Table.vue"

const routes = [
  {
    path: '/',
    redirect: '/form',
    component: Form
  },
  {
    path: '/form',
    component: Form
  },
  {
    path: '/table',
    component: Table
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
