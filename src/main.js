import Vue from 'vue';
import ElementUI from 'element-ui';

import './assets/theme/index.css';
import 'element-ui/lib/theme-chalk/display.css';
import router from './router/index'; // eslint-disable-line
import App from './App';
import store from './store/index';
import AMap from 'vue-amap'; // 高德地图组件
import './assets/font/iconfont.css';

// style
import './assets/scss/style.scss';

Vue.use(AMap);
Vue.use(ElementUI);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  component: {
    myDiv: 'my-div',
  },
  render: h => h(App),
}).$mount('#app');

// 初始化vue-amap
AMap.initAMapApiLoader({
  // 高德key
  key: 'baa309a4fcaf0e15243611acf162d558',
  // 插件集合 （插件按需引入）
  plugin: ['AMap.Geolocation']
})
