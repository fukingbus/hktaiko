import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import About from './views/About.vue';
import Arcade from './views/ArcadeLocator.vue';
import SongList from './views/SongList.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: Home,
    },
    {
      path: '/about',
      component: About,
    },
    {
      path: '/arcade',
      component: Arcade,
    },
    {
      path: '/song',
      component: SongList,
    },
  ],
});
