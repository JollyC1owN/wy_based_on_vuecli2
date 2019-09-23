<template>
  <div class="home-container">
    <Header/>  <!--头部-->
    <div class="home-main">
      <!--加一padding解决scroll回弹下落页面显示不完整的问题-->
      <div style="padding-bottom: 260px">
        <Swiper ref="swiper"/>  <!--轮播图部分-->
        <ul class="wangyi-grow">
          <li>
            <i class="grow-icon"></i>
            <span>网易自营品牌</span>
          </li>
          <li>
            <i class="grow-icon"></i>
            <span>30天无忧退货</span>
          </li>
          <li>
            <i class="grow-icon"></i>
            <span>48小时快速退款</span>
          </li>
        </ul>
        <Nav />   <!--首页主导航区-->
        <Gift />  <!--首页福利区-->
        <Split />
        <Manufacturer /> <!--首页品牌制造商区-->
        <Split />
        <Popular /> <!--首页热销榜单区-->
        <Split />
        <Recommend />
        <Split />
        <FlashSale />
        <Split />
        <NewProducts />
        <Split />
        <Classify />
      </div>
    </div>
  </div>
</template>
<script>
  import BScroll from 'better-scroll';

  import Swiper from './components/Swiper/Swiper.vue';
  import Nav from './components/Nav/Nav.vue';
  import Gift from './components/Gift/Gift.vue';
  import Manufacturer from './components/Manufacturer/Manufacturer.vue';
  import Popular from './components/Popular/Popular.vue';
  import Recommend from './components/Recommend/Recommend.vue';
  import FlashSale from './components/FlashSale/FlashSale.vue';
  import NewProducts from './components/NewProducts/NewProducts.vue';
  import Classify from './components/Classify/Classify.vue';
  export default {
    components: {
      Nav,
      Swiper,
      Gift,
      Manufacturer,
      Popular,
      Recommend,
      FlashSale,
      NewProducts,
      Classify
    },
    mounted () {
      this.$nextTick(() => {
        const height = document.documentElement.clientHeight;
        const recoFindMain = document.querySelector('.home-main');
        recoFindMain.style.height = height + 'px';
        this.$refs.swiper._initSwiper();
        this.$store.dispatch('getHomeData');
        /* eslint-disable no-new */
        if (!this.classScroll) {
          this.classScroll = new BScroll('.home-main', {
            click: true
          })
        }
      });
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
    .home-container
      padding-bottom 100px
      .home-main
        .wangyi-grow
          display flex
          justify-content space-around
          align-items center
          height 72px
          li
            display flex
            &:nth-of-type(1)
              i
                background-image url("http://yanxuan.nosdn.127.net/a03dd909803b9ac032eba58b7253a2f6.png")
            &:nth-of-type(2)
              i
                background-image url("http://yanxuan.nosdn.127.net/2d0402ffcd52b3ec3b07422681c42a89.png")
            &:nth-of-type(3)
              i
                background-image url("http://yanxuan.nosdn.127.net/eb61ee48e8942dbd1784c9ee75ebe955.png")
            .grow-icon
              width 32px
              height 32px
              background-image url("http://yanxuan.nosdn.127.net/a03dd909803b9ac032eba58b7253a2f6.png")
              background-size 32px 32px
              background-repeat no-repeat
              background-position center
              margin 0 10px 0 0
</style>
