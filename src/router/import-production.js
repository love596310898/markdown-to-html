import NotFound from '@/views/404.vue';

export default (path) => () => import(/* webpackChunkName: "[request]" */ path)
  .then((module) => module.default)
  .catch((e) => {
    console.log('加载模块出错：', e);
    return NotFound;
  });
