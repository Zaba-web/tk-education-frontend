import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '../views/MainPage/MainPage.vue'
import Signup from '../views/MainPage/Signup.vue'
import Signin from '../views/MainPage/Signin.vue'

const routes = [
  {
    path: '/',
    name: 'MainPage',
    component: MainPage
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: Signup
  },
  {
    path: '/signin',
    name: 'SignIn',
    component: Signin
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router