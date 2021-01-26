import Vue from 'vue';
import router from '@/router/index';
import App from './App.vue';

// 引入全局css
import '@/assets/index';

// 在开发环境下 阻止vue提示部署的是非生产环境代码
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  router,
}).$mount('#app');
