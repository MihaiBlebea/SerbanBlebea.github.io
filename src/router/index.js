import Vue from 'vue'
import Router from 'vue-router'
import { Home, Navigation } from '../components'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: 'Home',component: Home }
  ]
})
