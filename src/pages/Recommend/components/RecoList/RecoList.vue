<template>
  <div class="reco-page">
    <div class="reco-goods">
      <ul v-for="(reco, index) in recommends" :key="index + Date.now()">
        <li v-for="(item, index) in reco.topics" :key="index">
          <div class="style-LR" v-if="item.style === 2">
            <div class="style-left">
              <span class="user-info">
                <img :src="item.avatar" alt="avatar" />
                <span>{{item.nickname}}</span>
              </span>
              <p class="title">{{item.title}}</p>
              <p class="desc">{{item.subTitle}}</p>
              <span class="view-count">
                <i class="iconfont icon-view"></i>
                <span>{{(item.readCount/1000).toFixed(1)}}k人看过</span>
              </span>
            </div>
            <div class="style-right">
              <img :src="item.picUrl" alt="mainImg" />
            </div>
          </div>
          <div class="style-TB" v-if="item.style === 1">
            <div class="user-info">
              <img :src="item.avatar" alt="avatar" />
              <span>{{item.nickname}}</span>
            </div>
            <p class="title">{{item.title}}</p>
            <img class="main-img" :src="item.picUrl" alt="mainImg" />
            <span class="view-count">
              <i class="iconfont icon-view"></i>
              <span>{{(item.readCount/1000).toFixed(1)}}k人看过</span>
            </span>
          </div>
        </li>
      </ul>
      <ul v-for="(newReco, index) in getRecoData" :key="index">
        <li v-for="(item, index) in newReco.topics" :key="index">
          <div class="style-LR" v-if="item.style === 2">
            <div class="style-left">
              <span class="user-info">
                <img :src="item.avatar" alt="avatar" />
                <span>{{item.nickname}}</span>
              </span>
              <p class="title">{{item.title}}</p>
              <p class="desc">{{item.subTitle}}</p>
              <span class="view-count">
                <i class="iconfont icon-view"></i>
                <span>{{(item.readCount/1000).toFixed(1)}}k人看过</span>
              </span>
            </div>
            <div class="style-right">
              <img :src="item.picUrl" alt="mainImg" />
            </div>
          </div>
          <div class="style-TB" v-if="item.style === 1">
            <div class="user-info">
              <img :src="item.avatar" alt="avatar" />
              <span>{{item.nickname}}</span>
            </div>
            <p class="title">{{item.title}}</p>
            <img class="main-img" :src="item.picUrl" alt="mainImg" />
            <span class="view-count">
              <i class="iconfont icon-view"></i>
              <span>{{(item.readCount/1000).toFixed(1)}}k人看过</span>
            </span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import BScroll from 'better-scroll'
export default {
  data() {
    return {
      moreDataPage: 1,
      autoRecoData: []
    }
  },
  mounted() {
    this.$nextTick(() => {
      // 页面显示完成后设置将要实现scroll滚动效果的元素的父元素的高度，使子元素高度超出父元素才能实现滚动
      const height = document.documentElement.clientHeight
      const recoPage = document.querySelector('.reco-page')
      recoPage.style.height = height + 'px'
      // 实现滚动
      this._initScroll()
    })
  },
  computed: {
    ...mapState({
      recommends: state => state.recommend.recommends,
      autoRecommends: state => state.recommend.autoRecommends
    }),
    getRecoData() {
      if (this.autoRecommends.hasMore) {
        this.autoRecoData.push(...this.autoRecommends.result)
        return this.autoRecoData
      }
    }
  },
  methods: {
    // 可以上拉刷新的初始化scroll方法
    _initScroll() {
      if (this.recoScroll) {
        this.recoScroll.refresh()
      } else {
        this.recoScroll = new BScroll('.reco-page', {
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
        })
        this.recoScroll.on('pullingUp', async () => {
          this.moreDataPage++
          // alert('已到最底部');
          console.log('加载ajax数据')
          await this.$store.dispatch('getAutoRecommends', this.moreDataPage, 5)
          this.recoScroll.finishPullUp() // 可以多次执行上拉刷新
        })
      }
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
@import '../../../../common/stylus/mixins.styl'

.reco-page
  .reco-goods
    .style-LR
      clearFix()
      width 100%
      padding 32px 30px
      box-sizing border-box
      margin 16px 0
      background-color #fff

      .style-left
        float left
        width 400px

        .user-info
          display flex
          align-items center

          img
            width 50px
            height 50px
            border-radius 50%
            margin-right 10px

        .title
          font-size 34px
          margin-top 20px

        .desc
          font-size 28px
          color #999

        .view-count
          display flex
          color #999
          margin-top 40px

          i
            font-size 30px
            margin 0 10px

      .style-right
        float right

        img
          width 272px
          height 272px
          border-radius 10px

    .style-TB
      width 100%
      padding 32px 30px
      box-sizing border-box
      margin 16px 0
      background-color #fff

      .user-info
        display flex
        align-items center

        img
          width 50px
          height 50px
          border-radius 50%
          margin-right 10px

      .title
        font-size 38px
        margin-top 20px

      .main-img
        width 690px
        height 376px
        margin-top 20px

      .view-count
        display flex
        color #999
        margin-top 20px

        i
          font-size 30px
          margin 0 10px
</style>
