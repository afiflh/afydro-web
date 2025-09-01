import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from '../pages/LandingPage.vue'
import Galeri from '../pages/Galeri.vue'
import TentangKami from '../pages/TentangKami.vue'
import Kontak from '../pages/Kontak.vue'
import LoginPage from '../pages/LoginPage.vue'
import RegisterPage from '../pages/RegisterPage.vue'

const routes = [
  { path: '/', name: 'Beranda', component: LandingPage },
  { path: '/galeri', name: 'Galeri', component: Galeri },
  { path: '/tentang', name: 'TentangKami', component: TentangKami },
  { path: '/kontak', name: 'Kontak', component: Kontak },
  {
    path: '/login',
    name: 'Login',
    component: LoginPage,
    meta: { hideLayout: true }
  },
  {
    path: '/register',
    name: 'Register',
    component: RegisterPage,
    meta: { hideLayout: true }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router