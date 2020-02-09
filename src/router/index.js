import Vue from 'vue'
import VueRouter from 'vue-router'
import SignIn from '../components/SignIn.vue'
import SignUp from '../components/SignUp.vue'
import All from '../views/All.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/sign-in/',
    name: 'sign-in',
    component: SignIn
  },
  {
    path: '/sign-up/',
    name: 'Sign',
    component: SignUp
  },
  {
    path: '/all/',
    name: 'all',
    component: All
  }

]

const router = new VueRouter({
  routes
})

export default router
