import Vue from 'vue'
import Router from 'vue-router'
import axios from 'axios'
import utils from '../utils'
import Landing from '@/components/Landing'
import Login from '@/components/Login'
import Register from '@/components/Register'
import Admin from '@/components/Admin'

Vue.use(Router)
var jwt = utils.get_token()
axios.defaults.baseURL = process.env.API_LOCATION
axios.defaults.headers.common['Authorization'] = 'Bearer ' + jwt

axios.interceptors.response.use(
  function (response) {
    if (response.config.method !== 'get') {
      Vue.notify({
        type: 'success',
        title: 'Thành Công'
      })
    }
    return response
  },
  function (error) {
    const {status} = error.response
    if (status === 401 && !window.location.pathname.startsWith('/login')) {
      utils.logout('/login')
    }
    Vue.notify({
      type: 'error',
      title: error.response.data.message
    })
    return Promise.reject(error)
  }
)
var router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Landing',
      component: Landing,
      meta: {
        title: 'Trang chủ'
      }
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      meta: {
        title: 'Đăng nhập'
      }
    },
    {
      path: '/register',
      name: 'Register',
      component: Register,
      meta: {
        title: 'Đăng kí'
      }
    },
    {
      path: '/admin',
      name: 'Admin',
      component: Admin,
      meta: {
        title: 'Dashboard'
      }
    }
  ]
})
router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})
export default router
