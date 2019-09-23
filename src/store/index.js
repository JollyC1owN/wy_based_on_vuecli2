/**
 * vuex的核心js模块
 */
import Vue from 'vue';
import Vuex from 'vuex';
import actions from './actions';
import getters from './getters';
import home from './modules/home';
import categoryList from './modules/categoryList';
import recommend from './modules/recommend';
import search from './modules/search';

Vue.use(Vuex);

export default new Vuex.Store({
  actions,
  getters,
  modules: {
    home,
    categoryList,
    recommend,
    search
  }
})
