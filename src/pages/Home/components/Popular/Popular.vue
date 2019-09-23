<template>
  <section class="popular-container">
    <p>类目热销榜</p>
    <div class="popular-top">
      <ul>
        <li>
          <span>
            热销榜
            <span class="line"></span>
          </span>
          <img src="http://yanxuan.nosdn.127.net/9a33f08a3b0f5c06fdf4c586d51b2f7c.png" alt="热销榜">
        </li>
        <li>
          <span>
            好评榜
            <span class="line"></span>
          </span>
          <img src="http://yanxuan.nosdn.127.net/1fa535e25330987297a27e63c27db2e6.png" alt="热销榜">
        </li>
      </ul>
    </div>
    <div class="popular-bottom">
      <ul>
        <li>
          <span>居家生活榜</span>
          <img src="http://yanxuan.nosdn.127.net/6ae6ced6f3fd805d9e00b4f29a34efd3.png?" alt="热销榜">
        </li>
        <li>
          <span>服饰鞋包榜</span>
          <img src="http://yanxuan.nosdn.127.net/d84c728c164a77a8c5f0ca153d21fe69.png?" alt="热销榜">
        </li>
        <li>
          <span>美食酒水榜</span>
          <img src="http://yanxuan.nosdn.127.net/59eb7e52ab114c894a8179bc2991122b.png?" alt="热销榜">
        </li>
        <li>
          <span>数码家电榜</span>
          <img src="http://yanxuan.nosdn.127.net/cf86ce7b36cc90f5c9b1cbbc5eafd737.png?" alt="热销榜">
        </li>
        <li>
          <span>个护清洁榜</span>
          <img src="http://yanxuan.nosdn.127.net/ae7f88bdae80b15ac656b0c76f356179.jpg?" alt="热销榜">
        </li>
        <li>
          <span>母婴亲子榜</span>
          <img src="http://yanxuan.nosdn.127.net/873505d4b94744861ba243e321868530.png?" alt="热销榜">
        </li>
        <li>
          <span>运动旅行榜</span>
          <img src="http://yanxuan.nosdn.127.net/83e9f1b99b484885f88b5c5443f87cec.png?" alt="热销榜">
        </li>
        <li>
          <span>全球特色榜</span>
          <img src="http://yanxuan.nosdn.127.net/82de8fdea1c8bba21b26099612ff5605.png?" alt="热销榜">
        </li>
      </ul>
    </div>
  </section>
</template>
<script>
  export default {}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../../../common/stylus/mixins.styl";
  .popular-container
    padding 0 20px 20px 30px
    box-sizing border-box
    p
      font-size 32px
      height 100px
      line-height 100px
    .popular-top
      ul
        display flex
        li
          width 340px
          height 200px
          display flex
          align-items center
          font-size 28px
          &:nth-of-type(1)
            margin 0 10px 10px 0
            background-color #F9F3E4
          &:nth-of-type(2)
            margin-bottom 10px
            background-color #EBEFF6
          span
            width 100px
            height 40px
            margin-left 20px
            .line
              display block
              width 50px
              height 4px
              background-color #000
              margin-top 10px
          img
            width 200px
            height 200px
            margin-left 20px
    .popular-bottom
      ul
        clearFix()
        li
          float left
          width 165px
          height 180px
          margin 0 10px 10px 0
          background-color #F5F5F5
          text-align center
          padding-top 10px
          box-sizing border-box
          img
            width 120px
            height 120px
            margin-left 50%
            transform translateX(-60px)
</style>
