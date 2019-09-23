/**
 * 用于管理recommend识物页面的状态数据的模块
 */
import {
  reqRecommendTabs,
  reqRecommendData,
  reqAutoRecommendData,
  reqOrderShowTop,
  reqOrderShowRatings

} from '../../api';
import {
  UPDATE_INDEX,
  RECEIVE_RECOMMENDTABS,
  RECEIVE_RECOMMENDS,
  RECEIVE_AUTORECOMMENDS,
  RECEIVE_ORDERSHOWTOP,
  RECEIVE_ORDERSHOWRATINGS
} from '../mutation-types';
const state = {
  tabIndex: 0, // 当前被选中的分类下标
  recommendTabs: [], // 识物页面导航列表
  recommends: [], // 推荐商品
  autoRecommends: {}, // 上拉自动加载的商品
  orderShowTop: [], // 晒单页面顶部数据
  orderShowRatings: {} // 晒单页面评价数据
};

const mutations = {
  [UPDATE_INDEX] (state, tabIndex) {
    state.tabIndex = tabIndex;
  },
  [RECEIVE_RECOMMENDTABS] (state, recommendTabs) {
    state.recommendTabs = recommendTabs;
  },
  [RECEIVE_RECOMMENDS] (state, recommends) {
    state.recommends = recommends;
  },
  [RECEIVE_AUTORECOMMENDS] (state, autoRecommends) {
    state.autoRecommends = autoRecommends;
  },
  [RECEIVE_ORDERSHOWTOP] (state, orderShowTop) {
    state.orderShowTop = orderShowTop;
  },
  [RECEIVE_ORDERSHOWRATINGS] (state, orderShowRatings) {
    state.orderShowRatings = orderShowRatings;
  }
};

const actions = {
  // 更新当前下标的同步action
  updateTabIndex ({commit}, tabIndex) {
    commit(UPDATE_INDEX, tabIndex)
  },
  // 识物--获取导航列表的异步action
  async getRecommendTabs ({commit}) {
    const result = await reqRecommendTabs();
    if (result.code === '200') {
      commit(RECEIVE_RECOMMENDTABS, result.data);
    }
  },
  // 识物--推荐--获取推荐的商品数据的异步action
  async getRecommends ({commit}) {
    const result = await reqRecommendData();
    if (result.code === '200') {
      commit(RECEIVE_RECOMMENDS, result.data);
    }
  },
  // 识物--推荐--上拉自动获取推荐商品数据的异步action
  async getAutoRecommends ({commit}, page, size) {
    const result = await reqAutoRecommendData(page, size);
    if (result.code === '200') {
      commit(RECEIVE_AUTORECOMMENDS, result.data);
    }
  },
  // 识物--晒单--获取晒单页种草商品数据的异步action
  async getOrderShowTop ({commit}, id) {
    const result = await reqOrderShowTop(id);
    if (result.code === '200') {
      commit(RECEIVE_ORDERSHOWTOP, result.data);
    }
  },
  // 识物--晒单--获取晒单页用户评论数据的异步action
  async getOrderShowRatings ({commit}, {page, size, type}) {
    const result = await reqOrderShowRatings(page, size, type);
    if (result.code === '200') {
      commit(RECEIVE_ORDERSHOWRATINGS, result.data);
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
