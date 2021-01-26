import Vue from 'vue';
import Router from 'vue-router';
import mainRouter from './routes';

Vue.use(Router);

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: () => import('@/views/main.vue'),
      children: mainRouter,
    },
    {
      name: '404',
      path: '*',
      component: () => import('@/views/404.vue'),
    },
  ],
});
