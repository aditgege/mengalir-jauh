import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue'),
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue'),  
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import(/* webpackChunkName: "register" */ '../views/Register.vue'),
  },
  {
    path: '/add-income',
    name: 'AddIncome',
    component: () => import(/* webpackChunkName: "add-income" */ '../views/AddIncome.vue'),
  },
  {
    path: '/add-outcome',
    name: 'AddOutcome',
    component: () => import(/* webpackChunkName: "add-expense" */ '../views/AddOutcome.vue'),
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  const isAuthenticated = JSON.parse(localStorage.getItem('isAuthenticated'));
  if (to.name !== 'Login' && to.name !== 'Register' && !isAuthenticated) {
    next('/login')
  } else if (to.name === 'Login' && isAuthenticated) {
    next('/')
  } else {
    next()
  }
})
export default router