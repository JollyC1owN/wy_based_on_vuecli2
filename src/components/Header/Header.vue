<template>
  <header class="header-container">
    <div class="header-search-login">
      <span class="logo"></span>
      <div class="searchInput" @click="$router.push('/search')">
        <i class="iconfont icon-search"></i>
        <span class="placeholder">搜索商品，共22717款好物</span>
      </div>
      <button @click="$router.push('/profile')">登录</button>
    </div>
    <div class="header-nav" v-if="isOpen">
      <ul class="header-nav-left">
        <li :class="{active: activeIndex === recoIndex}" :data-index="filterNavList.length" ref="recoLi" @click="toggleActive()"><a href="javascript:void(0);">推荐</a></li>
        <li :class="{active: activeIndex === index}" v-for="(nav, index) in filterNavList" :key="index" @click="toggleActive(index)">
          <a href="javascript:void(0);">{{nav.text}}</a>
        </li>
      </ul>
      <span class="iconfont icon-54 header-nav-arrow" @click="toggleShow"></span>
    </div>
    <div v-if="!isOpen" class="navbox-wrapper">
      <div class="nav-box">
        <div class="all-category">
          <span>全部频道</span>
          <i class="iconfont icon-53" @click="toggleShow"></i>
        </div>
        <ul class="ulNode">
          <li :class="{on: activeIndex === recoIndex}" :data-index="filterNavList.length" ref="recoLi" @click="toggleActive()"><a href="javascript:void(0);">推荐</a></li>
          <li :class="{on: activeIndex === index}" v-for="(nav, index) in filterNavList" :key="index" @click="toggleActive(index)">
            <a href="javascript:void(0);">{{nav.text}}</a>
          </li>
        </ul>
        <div class="mask"></div>
      </div>
    </div>
  </header>
</template>
<script>
  import {mapState} from 'vuex';
  import BScroll from 'better-scroll';
  export default {
    data () {
      return {
        isOpen: true,
        activeIndex: 10, // 当前选中的下标
        recoIndex: 0, // 选项'推荐'的下标 跟随请求回的导航列表长度改变
        lefts: [], // 导航列表中每一项的left值
        scrollX: 0 // 列表水平滑动的距离
      }
    },
    computed: {
      ...mapState({
        navList: state => state.home.navList
      }),
      filterNavList: {
        get: function () {
          return this.navList
        },
        set: function () {
          let newArr = this.navList.filter((nav, index) => (index + 1) % 5 !== 0);
          this.activeIndex = newArr.length;
          return newArr;
        }
      }
    },
    methods: {
      toggleActive (index) {
        if ((index + 1) && (index + 1) <= this.recoIndex) {
          this.activeIndex = index;
        } else {
          this.activeIndex = this.recoIndex;
        }
      },
      toggleShow () {
        this.isOpen = !this.isOpen;
      },
      _getLefts () {
        // 获取不到该ul节点，？？?
        const ul = document.querySelector('.ulNode');
        const lis = ul.getElementsByTagName('li');
        let left = 0;
        let lefts = [];
        lefts.push(left);
        Array.protoType.slice().call(lis).forEach((li, index) => {
          left += (li.clientWidth + 40)
          lefts.push(left)
        })
        console.log(lefts);
        this.lefts = lefts;
      }
    },
    mounted () {
      this.$nextTick(() => {
        /* eslint-disable no-new */
        new BScroll('.header-nav', {
          click: true,
          scrollX: true
        });
        this.recoIndex = this.$refs.recoLi.getAttribute('data-index') * 1;
        // this._getLefts();
      })
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
  .header-container
    position relative
    height 150px
    width 100%
    background-color #fff
    z-index 100
    .header-search-login
      display flex
      justify-content space-around
      align-items center
      width 100%
      height 88px
      font-size 30px
      padding 25px
      box-sizing border-box
      .logo
        flex 2
        height 40px
        background-image url("http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png")
        background-repeat no-repeat
        background-size 138px 40px
        background-position center
        margin-right 10px
      .searchInput
        flex 7
        height 56px
        border-radius 10px
        border none
        background-color rgba(0,0,0,.1)
        text-align center
        line-height 56px
        i
          font-size 30px
        .placeholder
          font-size 30px
          color #666
      button
        flex 1
        height 40px
        margin-left 10px
        font-size 24px
        border-radius 10px
        outline none
        color $red
        border 1px solid $red
        background-color #fff
    .header-nav
      position relative
      width 100%
      height 60px
      overflow hidden
      .header-nav-left
        width 1650px
        font-size 30px
        height 60px
        li
          float left
          height 50px
          margin 5px 20px
          padding 0 10px
          text-align center
          &.active
            border-bottom 4px solid $red
            a
              color $red
      .header-nav-arrow
        position absolute
        right 0
        top 0
        width 100px
        height 60px
        font-size 30px
        text-align center
        line-height 60px
        background-color #fff
    .navbox-wrapper
      .nav-box
        position absolute
        left 0
        top 90px
        width 100%
        z-index 10
        background-color #fff
        .all-category
          display flex
          justify-content space-between
          /*position relative*/
          font-size 30px
          height 60px
          line-height 60px
          margin 0 0 20px
          text-align center
          span
            margin-left 30px
          i
            width 100px
            height 60px
            font-size 30px
        ul
          clearFix()
          width 100%
          font-size 24px
          text-align center
          box-sizing border-box
          li
            float left
            width 150px
            height 56px
            text-align center
            line-height 56px
            border-radius 5px
            margin 0 0 40px 30px
            background-color #FAFAFA
            box-sizing border-box
            &.on
              border 1px solid $red

      .mask
        width 100%
        height 100%
        background-color rgba(0, 0, 0, .5)
</style>
