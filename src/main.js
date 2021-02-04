import Vue from 'vue';
import router from '@/router/index';
import store from '@/store/index';
import ElementUi from 'element-ui';
import App from './App.vue';

// 引入全局css
import '@/assets/index';
import 'element-ui/lib/theme-chalk/index.css';

// 引入element-ui
Vue.use(ElementUi);

// 在开发环境下 阻止vue提示部署的是非生产环境代码
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  router,
  store,
}).$mount('#app');
