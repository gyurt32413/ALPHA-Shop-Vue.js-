import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import NotFound from '../views/NotFound'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  // {
  //   path: '/',
  //   name: 'sending-address',
  //   component: SendingAddress
  // },

  // {
  //   path: '/2',
  //   name: 'shipping-method',
  //   component: () => import('../views/ShippingMethod.vue')
  // },
  // {
  //   path: '/3',
  //   name: 'paying-information',
  //   component: () => import('../views/PayingInformation.vue')
  // },
  {
    path: '*',
    name: 'not-found',
    component: NotFound
  },


]

const router = new VueRouter({
  routes
})

export default router
