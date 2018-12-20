import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import About from './views/About.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: Home,
      meta: {
        title: '集鼓村 (建設中)',
      },
    },
    {
      path: '/about',
      component: About,
      meta: {
        title: '關於集鼓村',
      },
    },
  ],
});
