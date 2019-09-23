<template>
  <div class="categoryList-container">
    <div class="searchInput">
      <i class="iconfont icon-search"></i>
      <span class="placeholder" @click="$router.push('/search')">搜索商品，共22717款好物</span>
    </div>
    <section class="categoryList-main">
      <div class="line"></div>
      <div class="categoryList-left">
        <ul>
          <li :class="{active: currentId * 1 === category.id}" v-for="(category, index) in categoryList" :key="index">
            <router-link :to="{path: 'category', query: {id: category.id}}">{{category.name}}</router-link>
          </li>
        </ul>
      </div>
      <router-view />
    </section>
  </div>
</template>
<script>
  import {mapState} from 'vuex';
  import BScroll from 'better-scroll';
  export default {
    data () {
      return {
        isActive: true,
        currentId: ''
      }
    },
    computed: {
      ...mapState({
        categoryList: state => state.categoryList.categoryList
      })
    },
    mounted () {
      this.$store.dispatch('getCategoryList');
      this.currentId = this.$route.query.id ? this.$route.query.id : '1022001';
      this.$nextTick(() => {
        /* eslint-disable no-new */
        new BScroll('.categoryList-left', {
          click: true
        })
      })
    },
    watch: {
      $route () {
        this.currentId = this.$route.query.id;
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl";
  .categoryList-container
    height 100%
    padding-bottom 100px
    .searchInput
      height 56px
      width 90%
      margin 20px auto
      border-radius 10px
      background-color rgba(0,0,0,.1)
      text-align center
      line-height 56px
      i
        font-size 30px
      .placeholder
        font-size 30px
        color #666
    .line
      width 100%
      height 2px
      background-color #eee
    .categoryList-main
        height 100%
        position relative
      .categoryList-left
        position absolute
        top 0
        left 0
        height 100%
        padding 20px 0
        ul
          width 162px
          display flex
          flex-direction column
          li
            width 160px
            height 50px
            line-height 50px
            text-align center
            font-size 28px
            margin 15px 0
            border-left 6px solid #fff
            &.active
              border-left 6px solid $red
              a
                color $red
</style>
