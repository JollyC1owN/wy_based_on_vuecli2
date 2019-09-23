/**
 * 用于管理首页状态数据的模块
 */
import {reqHomeData} from '../../api';
import {
  RECEIVE_FLASHSALE,
  RECEIVE_NEWITEM,
  RECEIVE_POPULARITEM,
  RECEIVE_CLASSIFYLIST,
  RECEIVE_NAVLIST
} from '../mutation-types';
const state = {
  flashSale: [], // 限时购
  newItem: [], // 新品首发
  popularItem: [], // 人气推荐
  classifyList: [], // 分类列表
  navList: [] // 导航列表
};
const mutations = {
  [RECEIVE_FLASHSALE] (state, flashSale) {
    state.flashSale = flashSale;
  },
  [RECEIVE_NEWITEM] (state, newItem) {
    state.newItem = newItem;
  },
  [RECEIVE_POPULARITEM] (state, popularItem) {
    state.popularItem = popularItem;
  },
  [RECEIVE_CLASSIFYLIST] (state, classifyList) {
    state.classifyList = classifyList;
  },
  [RECEIVE_NAVLIST] (state, navList) {
    state.navList = navList;
  }
};
const actions = {
  async getHomeData ({commit}) {
    const result = await reqHomeData();
    if (result.code === 0) {
      commit(RECEIVE_FLASHSALE, result.data.flashSaleModule);
      commit(RECEIVE_NEWITEM, result.data.newItemList);
      commit(RECEIVE_POPULARITEM, result.data.popularItemList);
      commit(RECEIVE_CLASSIFYLIST, result.data.categoryModule);
      commit(RECEIVE_NAVLIST, result.data.kingKongModule.kingKongList);
    }
  }
};
const getters = {

};

export default {
  state,
  mutations,
  actions,
  getters
}
