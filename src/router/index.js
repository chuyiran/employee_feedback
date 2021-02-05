import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
const routers=[
  {
    path: '/',
    redirect:'/loading'
  },
  {
    path:'/loading',
    component:()=>import('views/loading/Loading')
  },
  {
    path:'/login',
    component:()=>import('views/login/Login')
  },
  {
    path:'/register',
    component:()=>import('views/register/Register')
  },
  {
    path:'/home',
    component: () => import('views/home/Home')
    // component:()=>import('../views/home/Home')
  }
]
export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: routers,
})
