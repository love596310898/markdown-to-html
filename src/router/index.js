/* eslint-disable no-unused-vars */
/* eslint-disable import/no-dynamic-require */
import Vue from 'vue';
import Router from 'vue-router';
import mainRouter from './main';
import homeRouter from './home';

// 开发环境不使用懒加载, 懒加载页面太多会造成webpack热更新慢, 而生产环境使用懒加载
const myimport = require(`./import-${process.env.NODE_ENV}`).default;

Vue.use(Router);

const router = new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: myimport('home/index.vue'),
      children: homeRouter,
    },
    {
      path: '/main',
      component: myimport('main/index.vue'),
      children: mainRouter,
    },
    {
      name: '404',
      path: '*',
      component: myimport('404.vue'),
    },
  ],
});

export default router;
