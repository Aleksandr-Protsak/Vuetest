import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/layouts/MainLayout.vue'
import Main from './components/views/main/Main.vue'
import Profile from './components/views/profile/Profile.vue'


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/main',
      name: 'main',
      component: Main
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile
    },
    {
      path: '*',
      component: Home
    }
  ]
});
