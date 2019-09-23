/**
 * 入口文件
 */
import Vue from 'vue';
import 'lib-flexible/flexible';
import App from './App.vue';
import router from './router';
import store from './store';
import './mock/mock-server';

import Footer from './components/Footer/Footer.vue';
import Header from './components/Header/Header.vue';
import Split from './components/Split/Split.vue';
import HeaderSlot from './components/HeaderSlot/HeaderSlot.vue';
// 注册全局组件
Vue.component('Footer', Footer);
Vue.component('Header', Header);
Vue.component('Split', Split);
Vue.component('HeaderSlot', HeaderSlot);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store,
  template: '<App />'
});
