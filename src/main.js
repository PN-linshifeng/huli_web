import Vue from 'vue';
import ElementUI from 'element-ui';

import './assets/theme/index.css';
import 'element-ui/lib/theme-chalk/display.css';
import router from './router/index'; // eslint-disable-line
import App from './App';
import store from './store/index';
import './assets/font/iconfont.css';

// style
import './assets/scss/style.scss';

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

