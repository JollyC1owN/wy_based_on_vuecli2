<template>
  <section class="search-container">
    <div class="search-title">
      <div class="search-input">
        <i class="iconfont icon-search"></i>
        <input
          type="text"
          class="placeholder"
          :placeholder="initSearchData.defaultKeyword.keyword"
          v-model="searchText"
        />
        <i class="close" v-if="searchText.length>0" @click="cancelSearch">×</i>
      </div>
      <button @click="$router.back()">取消</button>
    </div>
    <div class="search-list" v-if="!this.searchText.trim().length>0">
      <p>热门搜索</p>
      <ul>
        <li
          :class="{highlight: keywords.highlight === 1}"
          v-for="(keywords, index) in initSearchData.hotKeywordVOList"
          :key="index"
        >
          <a href="javascript:void(0);">{{keywords.keyword}}</a>
        </li>
      </ul>
    </div>
    <ul class="searchResultList" v-else>
      <li v-for="(item, index) in searchResult" :key="index">{{item}}</li>
    </ul>
  </section>
</template>
<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      searchText: ''
    }
  },
  methods: {
    cancelSearch() {
      this.searchText = ''
    }
  },
  mounted() {
    this.$store.dispatch('getInitSearch')
  },
  computed: {
    ...mapState({
      initSearchData: state => state.search.initSearchData,
      searchResult: state => state.search.searchResult
    })
  },
  watch: {
    searchText() {
      if (this.searchText.trim().length > 0) {
        let text = this.searchText.trim()
        this.$store.dispatch('getSearchResult', text)
      }
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
@import '../../common/stylus/mixins.styl'

.search-container
  .search-title
    display flex
    justify-content space-around
    align-items center
    width 100%
    height 88px
    font-size 30px
    padding 30px
    box-sizing border-box

    .search-input
      flex 7
      height 56px
      border-radius 10px
      border none
      background-color #F4F4F4
      text-align center
      line-height 56px

      i
        font-size 30px

      .placeholder
        font-size 30px
        color #666
        background-color #F4F4F4
        outline none
        border-width 0

      .close
        display inline-block
        width 50px
        height 50px
        line-height 56px

    button
      flex 1
      height 40px
      margin-left 10px
      font-size 30px
      border none
      outline none
      background-color #fff

  .search-list
    clearFix()
    padding 0 30px 30px

    p
      width 690px
      height 90px
      font-size 28px
      color #999
      line-height 90px

    li
      float left
      height 48px
      line-height 48px
      border 1px solid #999
      margin 0 32px 32px 0

      a
        font-size 24px
        color #333
        padding 0 15px

      &.highlight
        border 1px solid $red

        a
          color $red

  .searchResultList
    width 100%
    background-color #fff
    padding-left 30px

    li
      position relative
      height 90px
      line-height 90px

    li::after
      content ''
      position absolute
      background-color #d9d9d9
      left 0
      width 100%
      height 1px
      transform-origin 50% 100% 0
      bottom 0
</style>
