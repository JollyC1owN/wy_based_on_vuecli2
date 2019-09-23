/**
 * 用于管理搜索页得状态数据得模块
 */
import { reqInitSearch, reqSearchResult } from '../../api';
import { RECEIVE_INITSEARCH, RECEIVE_SEARCHRESULT } from '../mutation-types';
const state = {
  initSearchData: {},
  searchResult: []
};
const mutations = {
  [RECEIVE_INITSEARCH] (state, initSearchData) {
    state.initSearchData = initSearchData;
  },
  [RECEIVE_SEARCHRESULT] (state, result) {
    state.searchResult = result
  }
};
const actions = {
  async getInitSearch ({ commit }) {
    const result = await reqInitSearch();
    if (result.code === '200') {
      commit(RECEIVE_INITSEARCH, result.data)
    }
  },
  async getSearchResult ({ commit }, searchText) {
    const result = await reqSearchResult(searchText);
    if (result.code === '200') {
      commit(RECEIVE_SEARCHRESULT, result.data)
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
