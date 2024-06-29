import HomeView from '@/views/HomeView.vue'
import LoginView from '@/views/LoginView.vue'


export const routes = [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    }
  ]