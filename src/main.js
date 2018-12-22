import Vue from 'vue';
import VueCollapse from 'vue2-collapse';
import Meta from 'vue-meta';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.use(Meta);
Vue.use(VueCollapse);

Vue.config.productionTip = false;

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
});

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
