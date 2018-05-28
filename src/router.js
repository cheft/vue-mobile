import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Pris from './views/Pris.vue';
import Transaction from './views/Transaction.vue';
import Profile from './views/Profile.vue';
import About from './views/About.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/pris',
      name: 'pris',
      component: Pris,
    },
    {
      path: '/transaction',
      name: 'transaction',
      component: Transaction,
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile,
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
  ],
});
