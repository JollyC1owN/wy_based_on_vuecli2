/**
 * 路由器管理模块
 */
import Vue from 'vue';
import VueRouter from 'vue-router';

import routes from './routes';

Vue.use(VueRouter);

/* eslint-disable no-new */
export default new VueRouter({
  mode: 'history',
  routes
})
