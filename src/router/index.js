import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/hotel-and-date',
    name: 'HotelAndDate',
    component: () => import(/* webpackChunkName: "hotel-and-date" */ '../views/Hotel-And-Date.vue')
  },
  {
    path: '/room-type-and-view',
    name: 'RoomTypeAndView',
    component: () => import(/* webpackChunkName: "room-type-and-view" */ '../views/Room-Type-And-View.vue')
  },
  {
    path: '/preview-and-payment',
    name: 'PreviewAndPayment',
    component: () => import(/* webpackChunkName: "preview-and-payment" */ '../views/Preview-And-Payment.vue')
  },
  {
    path: '/reservation-final',
    name: 'ReservationFinal',
    component: () => import(/* webpackChunkName: "reservation-final" */ '../views/Reservation-Final.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
