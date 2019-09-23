<template>
  <section class="products-container">
    <div class="products-header">
      <div class="header-top">
        <span>新品首发</span>
      </div>
      <span class="header-bottom">
        更多
        <i class="iconfont icon-52"></i>
      </span>
    </div>
    <ul class="products-list">
      <li v-for="(item, index) in getNewItem" :key="index">
        <img :src="item.listPicUrl" alt="新品首发">
        <div class="good-name">
          <span>{{item.name}}</span>
          <span class="good-price">￥{{item.counterPrice}}</span>
        </div>
      </li>
    </ul>
  </section>
</template>
<script>
  import {mapState} from 'vuex';
  export default {
    computed: {
      ...mapState({
        newItem: state => state.home.newItem
      }),
      getNewItem () {
        return [...this.newItem].splice(0, 6);
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../../../common/stylus/mixins.styl";
  .products-container
    padding-bottom 30px
    .products-header
      display flex
      justify-content space-between
      height 100px
      font-size 30px
      line-height 100px
      padding 0 30px
      .header-top
        display flex
      .header-bottom
        i
          width 30px
          height 30px
          font-size 30px
    .products-list
      clearFix()
      padding 0 10px 0 30px
      li
        float left
        width 216px
        height 270px
        margin-right 20px
        padding-bottom 30px
        img
          width 216px
          height 216px
          background-color #f5f5f5
        .good-name
          height 72px
          line-height 35px
          margin-top 10px
          .good-price
            color $red
</style>
