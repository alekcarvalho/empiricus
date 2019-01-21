import Vue from 'vue'
import Router from 'vue-router'
const Home = () => import('@/pages/home.vue')
const Watch = () => import('@/pages/watch.vue')
const notFound = () => import('@/pages/notFound.vue')

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', name: 'home', component: Home, titulo: 'Home', menu: true },
    {
      path: '/watch/:id',
      name: 'watch',
      component: Watch,
      titulo: 'Watch',
      menu: false
    },
    { path: '*', component: notFound, menu: false }
  ]
})
