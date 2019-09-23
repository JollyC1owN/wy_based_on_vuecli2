<template>
  <div class="order-page">
    <div class="show-orders">
      <img class="main-img" src="https://yanxuan.nosdn.127.net/0d2b1667aec92cb6b552e4316b602ca3.jpg" alt="mainImg">
      <div class="order-top">
        <p class="order-title">让生活更好的N种方法</p>
        <div class="order-desc">
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAASCAYAAAC0EpUuAAAAAXNSR0IArs4c6QAAAa5JREFUOBHtU79Lw0AUbtKLydgKuungkqZLUXSWgGsFF90UnOvuJFIoIqij4N8gguIiOGsVpLUJLf0BOhachSppWr8LvuMSa6a6eRDer+99793LOyURc1qt1pLv+6lsNnsbAwtCjuOkGWN5z/MuWBQ8HA4ZyPZUVd2CPgt5CsyvpM1mcxHxErA2sBpIb0KklUplqtPpnCuKsgxQtN4Pu9FobILoDFgDOSIuSGu12rRhGE8AzIhojILiu4PB4GBUcZXydF0vQReEqPyJpBNcp0gYkpjfHMj2yf6Wz8Cv5nK5t6DTer0+j2tsU1UQ+gBsWJZ1FUkMTDRwBKxOMeh33W53xbbtD+4LOk0mkwUERNcgvM5kMiMJXdflt1kjQi6xIQUi5DYRWdyQzr2kh1SsTQiLZt6xcq4MIlJTdmqaVpbtiB7CIvbIxyVjWLVaTcE5KTv7/f56u93Ocx86KZumeUlxjIr/JDIT+BdpYA/J0ev1igwAjRyS3KFESL78ghTznkATAor4Agz+0Tmm65NjLPKfdCxjDJH8yUwZ1sPD9xAqJRmIvUomf5IveBxxeO8LApO5RtUTsYIAAAAASUVORK5CYII=" alt="quotes">
          <p>开春必备春鞋种草单</p>
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAASCAYAAAC0EpUuAAAAAXNSR0IArs4c6QAAAbpJREFUOBHtVD1Lw1AUbZLXWklBnBx0aulXFgcnRXDwByj6B3QRdFEXxcVBl+Lk2D8guFT9AQpCFZxEQgoxySiOjkJjmnhe7A0vz3armw/CPefck3vfF0/pdDoFVVVPMsPHY71eb1HacZy1Xq+3SFyOYRges263O67r+r6cJB5F0RhwUhQ/LWMSO5SXo+/7DVUWR8H/i45iF9M1/mRPmaIoX+jTFnoVgaeJa5oWEuYR3MO1iv2IGq7XgpjP5/OhIgoc27Z9jUarpOOeHtZqtTPiYrQsazabzb6QBu9ntVot/Fo+Os+TqR9fJZ5QxljKi8k4+KJUUdM0i+g2lfz1A2yJJxRbkSqKf+MJsMQBkMvljkSOrs+VSsUVNcJ4MwwUWSHOI/yXPMZFXdedwaafgm9wkQZmsgtj6qBQSPE8bx3+c+AJ8gLfYe9vOGdY8iQED5g/HMmAdlEqlR4SoQ8wgQZyB6IO7qPJHmlqEAQMolywiVPcJJMY8ezpIkexd6xoyTAMi/TUQaH4B0xbWMY2ls3v79CBfITkLfxz5XL5STTGlx/Fmki28BjfwxyIhgHYhIfv9RUO8W1APvMNUkiynjpNcYQAAAAASUVORK5CYII=" alt="quotes">
        </div>
        <div class="order-goods">
          <ul ref="topUlNode">
            <li v-for="(item, index) in orderShowTop.lookList" :key="index">
              <img :src="item.banner.picUrl" alt="goodsImg">
            </li>
          </ul>
        </div>
      </div>
      <div class="user-ratings">
        <h1>TA们的严选生活</h1>
        <div class="rating-switch">
          <div class="switch-btn">
            <a href="javascript:void(0)">最新</a>
          </div>
          <div class="switch-btn">
            <a href="javascript:void(0)">本月最热</a>
          </div>
          <div class="switch-btn">
            <a href="javascript:void(0)">晒单合辑</a>
          </div>
        </div>
        <div class="rating-content">
          <!--左边列表展示的是下标为奇数的评论-->
          <ul class="content-left">
            <li v-for="(item, index) in getOddRatings" :key="index + Date.now()">
              <img v-if="item.bannerInfo.height >= 1000 && item.bannerInfo.width !== item.bannerInfo.height" class="big-size" :src="item.bannerInfo.picUrl" alt="userImg">
              <img v-else-if="item.bannerInfo.width === item.bannerInfo.height" class="middle-size" :src="item.bannerInfo.picUrl" alt="userImg">
              <img v-else class="small-size" :src="item.bannerInfo.picUrl" alt="userImg">
              <!--带有用户信息的样式-->
              <div v-if="!item.collection">
                <p class="ellipsis rate-content">{{item.content}}</p>
                <div class="user-info">
                  <div class="avatar-name">
                    <img class="user-avatar" :src="item.avatar" alt="userAvatar">
                    <span class="username">{{item.nickName}}</span>
                  </div>
                  <span class="like-count">
                  0
                  <img class="give-like" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAAAAACpleexAAABNUlEQVQ4y73UwUsCQRQG8P1rP9fVSImWwA1CqQgPURDkTWITqkNbXfRQhwiKDl0EwSSKDksRYmiFtbtOzrYrsuW+h4e+w3ww8zsNb0YRzChTwsF5PqlXejTchYzRpWAT6auvxwJ2KGjCGq7PyFBwFS1ZKlwC6ujImkebgLP4kLWGBgEzeJd1hAoBDdiy7ESqHQ83cON3CZteLLRw4PdrFmU3Dt5iMbj5NIp2FDrVfAqj3P/st3So29e2OwadIsazFxz0TC3c0iwf1qDX++KPdM5yofRhAXUxKcBoVUQWbzy4hDseNFHjwUts8eAL5gYsOBzCJx4s4YIHT1HmwQcYPOjNoMuCYj0YVxKeYJ8HG1jhwb6a/GRBsTxp0qKwioWmx4GR1/ArWgiFc5xLxLhDMf3X/J/wG8ARlk4IVyR9AAAAAElFTkSuQmCC" alt="giveLike">
                </span>
                </div>
              </div>
              <!--不带用户信息的样式-->
              <div v-if="item.collection" class="title-sub">
                <p class="title ellipsis">{{item.collection.title}}</p>
                <p class="subTitle">{{item.collection.subtitle}}</p>
              </div>
            </li>
          </ul>
          <!--左边列表展示的是下标为偶数的评论-->
          <ul class="content-right">
            <li v-for="(item, index) in getEvenRatings" :key="index">
              <img v-if="item.bannerInfo.height >= 1000 && item.bannerInfo.width !== item.bannerInfo.height" class="big-size" :src="item.bannerInfo.picUrl" alt="userImg">
              <img v-else-if="item.bannerInfo.width === item.bannerInfo.height" class="middle-size" :src="item.bannerInfo.picUrl" alt="userImg">
              <img v-else class="small-size" :src="item.bannerInfo.picUrl" alt="userImg">
              <!--带有用户信息的样式-->
              <div v-if="!item.collection">
                <p class="ellipsis rate-content">{{item.content}}</p>
                <div class="user-info">
                  <div class="avatar-name">
                    <img class="user-avatar" :src="item.avatar" alt="userAvatar">
                    <span class="username">{{item.nickName}}</span>
                  </div>
                  <span class="like-count">
                  0
                  <img class="give-like" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAAAAACpleexAAABNUlEQVQ4y73UwUsCQRQG8P1rP9fVSImWwA1CqQgPURDkTWITqkNbXfRQhwiKDl0EwSSKDksRYmiFtbtOzrYrsuW+h4e+w3ww8zsNb0YRzChTwsF5PqlXejTchYzRpWAT6auvxwJ2KGjCGq7PyFBwFS1ZKlwC6ujImkebgLP4kLWGBgEzeJd1hAoBDdiy7ESqHQ83cON3CZteLLRw4PdrFmU3Dt5iMbj5NIp2FDrVfAqj3P/st3So29e2OwadIsazFxz0TC3c0iwf1qDX++KPdM5yofRhAXUxKcBoVUQWbzy4hDseNFHjwUts8eAL5gYsOBzCJx4s4YIHT1HmwQcYPOjNoMuCYj0YVxKeYJ8HG1jhwb6a/GRBsTxp0qKwioWmx4GR1/ArWgiFc5xLxLhDMf3X/J/wG8ARlk4IVyR9AAAAAElFTkSuQmCC" alt="giveLike">
                </span>
                </div>
              </div>
              <!--不带用户信息的样式-->
              <div v-if="item.collection" class="title-sub">
                <p class="title ellipsis">{{item.collection.title}}</p>
                <p class="subTitle">{{item.collection.subtitle}}</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import {mapState} from 'vuex';
  import BScroll from 'better-scroll';
  export default {
    data () {
      return {
        morePage: 1, // 请求评论的页码数
        type: 1, // 请求评论的类型
        oddRatingsData: [], // 下标为奇数的评论数据
        evenRatingsData: [] // 下标为偶数的评论数据
      }
    },
    mounted () {
      this.$store.dispatch('getOrderShowTop', 6);
      this.$store.dispatch('getOrderShowRatings', {page: this.morePage, size: 10, type: this.type});
      this.$nextTick(() => {
        const height = document.documentElement.clientHeight;
        const orderPage = document.querySelector('.order-page');
        orderPage.style.height = height + 'px';
        this._initScroll();
        this._setUlWidth();
        /* eslint-disable no-new */
        new BScroll('.order-goods', {
          click: true,
          scrollX: true
        })
      })
    },
    computed: {
      ...mapState({
        orderShowTop: state => state.recommend.orderShowTop,
        orderShowRatings: state => state.recommend.orderShowRatings
      }),
      // 计算得到下标为奇数的评论数据
      getOddRatings () {
        if (this.orderShowRatings.topicList) {
          const filterOddData = this.orderShowRatings.topicList.filter((item, index) => index % 2 === 1);
          this.oddRatingsData.push(...filterOddData);
          return this.oddRatingsData;
        }
      },
      // 计算得到下标为偶数的评论数据
      getEvenRatings () {
        if (this.orderShowRatings.topicList) {
          const filterEvenData = this.orderShowRatings.topicList.filter((item, index) => index % 2 === 0);
          this.evenRatingsData.push(...filterEvenData);
          return this.evenRatingsData;
        }
      }
    },
    methods: {
      // 初始化评论区域的scroll对象，并且配置上拉加载更多。。。
      _initScroll () {
        if (this.orderScroll) {
          this.orderScroll.refresh();
        } else {
          this.orderScroll = new BScroll('.order-page', {
            probeType: 2,
            // 下拉刷新：可以配置顶部下拉的距离（threshold） 来决定刷新时机以及回弹停留的距离（stop）
            // 这个配置用于做上拉加载功能，默认为 false。当设置为 true 或者是一个 Object 的时候，可以开启上拉加载
            pullUpLoad: {
              threshold: 50
            },
            /* mouseWheel: { // pc端同样能滑动
             speed: 20,
             invert: false
             }, */
            useTransition: false // 防止iphone微信滑动卡顿
          });
          this.orderScroll.on('pullingUp', async () => {
            this.morePage++;
            // alert('已到最底部');
            console.log('加载ajax数据');
            await this.$store.dispatch('getOrderShowRatings', {page: this.morePage, size: 10, type: this.type});
            this.orderScroll.finishPullUp(); // 可以多次执行上拉刷新
          });
        }
      },
      // 设置种草好物的ul宽度
      _setUlWidth () {
        let width;
        const ulNode = this.$refs.topUlNode;
        const lis = ulNode.querySelectorAll('li');
        Array.from(lis).forEach((li) => {
          width = li.clientWidth * lis.length + 20 * (lis.length - 1);
        });
        ulNode.style.width = width + 'px';
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../../../common/stylus/mixins.styl";
  .order-page
    .show-orders
      .main-img
        width 100%
        height 380px
        margin-bottom 20px
      .order-top
        display flex
        flex-direction column
        justify-content space-around
        height 450px
        padding 28px 0 0 40px
        margin-bottom 20px
        background-color #fff
        .order-title
          font-size 28px
          color #7f7f7f
          text-align center
        .order-desc
          display flex
          justify-content center
          font-size 32px
          color #333
          p
            margin 0 10px
          img
            width 22px
            height 18px
            &:nth-of-type(1)
              margin-top 10px
            &:nth-of-type(2)
              margin-top 20px
        .order-goods
          overflow hidden
          ul
            display flex
            li
              margin-right 20px
              img
                width 240px
                height 240px
                border-radius 10px
      .user-ratings
        padding-top 60px
        background-color #fff
        h1
          font-size 32px
          text-align center
        .rating-switch
          display flex
          height 120px
          padding 24px 20px 20px
          justify-content space-around
          .switch-btn
            width 170px
            height 120px
            line-height 60px
            color #333
            padding 32px 0
            text-align center
            margin 0 24px
            box-sizing border-box
            a
              display block
              width 170px
              height 60px
              font-size 28px
              border-radius 10px
              background-color #f4f4f4
        .rating-content
          padding 0 5px
          box-sizing border-box
          display flex
          justify-content space-around
          .content-left, .content-right
            width 45%
            clearFix()
            li
              width 100%
              margin-bottom 20px
              border 1px solid #999
              border-radius 20px
              img
                &.big-size
                  width 100%
                  height 460px
                  border-radius 20px 20px 0 0
                &.middle-size
                  width 100%
                  height 345px
                  border-radius 20px 20px 0 0
                &.small-size
                  width 100%
                  height 260px
                  border-radius 20px 20px 0 0
              .rate-content
                padding 0 10px
                height 60px
                line-height 60px
              .user-info
                display flex
                align-items center
                justify-content space-between
                margin-bottom 10px
                padding 0 10px
                .avatar-name
                  display flex
                  align-items center
                  .user-avatar
                    width 48px
                    height 48px
                    margin-right 10px
                    border-radius 50%
                .like-count
                  display flex
                  .give-like
                    width 28px
                    height 28px
                    margin-left 10px
              .title-sub
                padding-top 10px
                background-color #ffe1b2
                .title
                  font-size 34px
                  font-weight bold
                  padding 0 20px
                  text-align center
                  margin-bottom 10px
                .subTitle
                  font-weight 24px
                  color #333
                  padding 0 20px
                  text-align center
</style>
