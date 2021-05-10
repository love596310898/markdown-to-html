/* eslint-disable import/no-dynamic-require */
// 开发环境不使用懒加载, 懒加载页面太多会造成webpack热更新慢, 而生产环境使用懒加载
const myimport = require(`./import-${process.env.NODE_ENV}`).default;
export default [
  {
    name: 'vue-corper',
    path: '',
    component: myimport('vue-corper/index.vue'),
    meta: {
      name: '头像裁剪',
    },
  },
  {
    name: 'steps',
    path: '/home/steps',
    component: myimport('steps/index.vue'),
    meta: {
      name: '步骤条',
    },
  },
  {
    name: 'progress',
    path: '/home/progress',
    component: myimport('progress/index.vue'),
    meta: {
      name: '环形进度条',
    },
  },
  {
    name: 'map',
    path: '/home/map',
    component: myimport('map/index.vue'),
    meta: {
      name: '地图',
    },
  },
];
