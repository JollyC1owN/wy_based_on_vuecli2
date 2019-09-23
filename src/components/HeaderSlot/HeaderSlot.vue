<template>
  <div class="slot-container">
    <header class="header-slot" slot="headerSlot">
      <span class="home-icon" @click="$router.replace('/home')"></span>
      <slot name="headerTitle"></slot>
      <div class="search-cart-icon">
        <span @click="$router.push('/search')"></span>
        <span @click="$router.push('/shopcart')"></span>
      </div>
    </header>
    <div class="reco-nav" v-if="$route.path.indexOf('recommend') !== -1">
      <ul class="ul-node">
        <li  :class="{active: tabIndex * 1 === index}" v-for="(tab, index) in recommendTabs" :key="tab.tabId">
          <router-link :to="{path: '/recommend/find', query: {tabIndex: index}}">{{tab.tabName}}</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  import {mapState} from 'vuex';
  import BScroll from 'better-scroll';
  export default {
    mounted () {
      if (this.$route.path.indexOf('recommend') !== -1) {
        this.$store.dispatch('getRecommendTabs');
        this._setUlWidth();
        this._initScroll();
        // 实现从其他组件切换时初始显示为推荐页的功能
        if (!this.$route.query.tabIndex) {
          this.$store.dispatch('updateTabIndex', 0);
        }
      }
    },
    computed: {
      ...mapState({
        recommendTabs: state => state.recommend.recommendTabs,
        tabIndex: state => state.recommend.tabIndex
      })
    },
    methods: {
      // 实现导航区域的水平滑动
      _setUlWidth () {
        const ul = document.querySelector('.ul-node');
        let ulWidth;
        const lis = ul.querySelectorAll('li');
        Array.from(lis).forEach(li => {
          const width = li.clientWidth * lis.length + 50 * (lis.length - 1);
          ulWidth = width;
        });
        ul.style.width = ulWidth + 'px';
      },
      _initScroll () {
        /* eslint-disable no-new */
        new BScroll('.reco-nav', {
          click: true,
          scrollX: true
        })
      }
    },
    // 监视$route.query.tabIndex的变化，更新state中的tabIndex
    watch: {
      $route () {
        this.$store.dispatch('updateTabIndex', this.$route.query.tabIndex);
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl";
    .slot-container
      position relative
      z-index 100
      width 100%
      .header-slot
        display flex
        justify-content space-between
        align-items center
        height 100px
        padding 0 13px 0 12px
        background-color #fafafa
        border-bottom 1px solid #999
        .home-icon
          width 50px
          height 50px
          background-image url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAAAhFBMVEUAAAAzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzPF5ewFAAAAK3RSTlMAcNAP9uD9Bfrx5B8v6LSdTgr37N/Uxb14Gtm5r6aVjWhgVTkUgTYpp0pCSlNj4QAAATNJREFUSMfd0+tugyAYBmAUREXtwbNW7Vptu+29//tbsolkahSTbVn6/oM8An4fkKeLL4Kjvn5zgbTT1S8ccYTS08J2A2TUKyF8DX3cAXubkC6F+76qPRPI5XfOda0kAZg09h4wFvWBIbir4Q04L2iDI/FGNXq1J0xtfqKT7TI6q+kJaCZLtRHMYq4kCfjcjz0sWI/J7D0AO5C5FCaidjR3ZaqJ01OOV8qhTjiNXYPn30uyW7ywZ6gG0AyobbKYCth/Ea8EFwZZjgHeH6CCe8M6b1zsPhtd+4YGN/y4koNFrsSf8zZGn+CgwTNYfXiiwU3I++1av8qFBo8VZxqcDZw5m7izjXM93m3hEbwtPEEhebip7qH4ma5eIEyZ0JGvXDjmEIGL4jTFkDAfFmFQSSn5d/kA8eoi0xqdj94AAAAASUVORK5CYII=")
          background-repeat no-repeat
          background-size 46px 46px
          span
            font-size 46px
        .header-title
          display flex
          justify-content space-between
          align-items center
          width 200px
          height 100px
          span
            font-size 30px
            color #777
            &.on
              color $red
              font-size 40px
              font-weight bold
        .search-cart-icon
          display flex
          span
            width 50px
            height 50px
            background-repeat no-repeat
            background-size 100% 100%
            &:nth-of-type(1)
              background-image url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuBAMAAACllzYEAAAAKlBMVEUAAAA0NDQ0NDQ0NDQ0NDQ0NDQzMzMUFBQ0NDROTk4zMzMzMzMzMzM2NDTc2xHNAAAADXRSTlMAbezXT6YsFM0O+L+FggY9rwAAAP5JREFUOMtjIBOwiTat0ghMQBeeaHsXBC5Logoz6l4KTGcoE9W9JIBiSO9tBzCDZe8NZKOcLgOFIRK2KghhlrWRcPbUWw5wttcdJL1nl8BN1z2AJM5zCWYDx1UUt8U2QBmylijiky9CaE5dBxRxlksTIH66jeb3vRC/MV9BE/c1AFO5CmjiTNcg1gagibNCLI4VQBNnhLi7NwE9Km6AKd0CNHH2S2BqLUbc3cIljsscXPbicicuf+EKB1zhhiuc8cYLZjzij3fMdII9XV3Bng7vXi7Amm4Vbc2xp/NisAbMfMEO0YCZj8AaMPMdTAMmQGhAAPwabmAXZ+9mIBUAAIJuXNa9gIYoAAAAAElFTkSuQmCC")
            &:nth-of-type(2)
              margin-left 20px
              background-image url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAAAk1BMVEUAAAAzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzM1idyXAAAAMHRSTlMAYbmIKS7ss/BPwREDeAjlt52EIc3HQTs3JRv53djTjn5XFQ2+p6JH9K+XZDJzb12hgxUyAAABlElEQVRIx82V23KCMBCGV8AYAgLlrChaz4ce/vd/utopKks10YvO9LvaMN+E7OZnoP9FCGDgPKzv63SC1KPHWWQ40hMcMXtG32JTHHtGkkbvV1EEM1mje5n8eLf1xLYANRzwSkamu3P1gdhoFyI9ly4GgUn/rNbnsi/DkUkfXk/gZchN+gt6l/pwqg2sUFzqd9gG20+R0LXXaKnXk4kYXxZ9Yeo1l9k1tkuFQq/3sAlafZvuNcbc51PVsmH7ubD0vVooWysnlNpegxROe6lQ6vRR2Jqjude8Uh5PkK0P2EtArNf92rqP6LzcCScSGuYBj5CC69xn5BNnDZeeYA7bf0J3qxXXjYHO+/dIfu+U4T5VvOgeRqC2UkCsB20UIL7HvvKYPQ4xW9Byjqnf+SzqnKioMQv4LUdNdmZsFynKn69zN2IRa8ZewmKXjdVPEeHtth5xXd3Uh82um85hhCzoxJuQCftBTXAYkxdDsMf+qfct0XYKm2dsu8NU1cAnMZYDSKUELI845R6AlVMHbygAOVzQn/MFg0s1dXIHznQAAAAASUVORK5CYII=")
      .reco-nav
        width 100%
        overflow hidden
        ul
          height 70px
          background-color #fafafa
          border-bottom 1px solid #999
          li
            float left
            font-size 28px
            height 70px
            line-height 70px
            margin 0 20px
            padding 0 4px
            &.active
              color $red
              border-bottom 3px solid $red
</style>
