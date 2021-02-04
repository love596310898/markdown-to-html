/* eslint-disable import/no-dynamic-require */
// 开发环境不使用懒加载, 懒加载页面太多会造成webpack热更新慢, 而生产环境使用懒加载
const myimport = require(`./import-${process.env.NODE_ENV}`).default;
export default [
  {
    path: '',
    component: myimport('vue-corper/index.vue'),
  },
];
