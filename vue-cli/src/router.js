import Vue from 'vue';
import Router from 'vue-router';
import Home from './Home.vue';
import About from './weather.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/weather',
      name: 'weather',
      component: Weather,
    },
  ],
});