<template>
    <section class="manufacturer-container">
      <div class="manufacturer-header">
        <span>品牌制造商直供</span>
        <span class="more">更多
          <i class="iconfont icon-52"></i>
        </span>
      </div>
      <ul class="manufacturer-list">
        <li>
          <span>海外制造商</span>
          <span>9.9元起</span>
          <span v-show="isShow">上新</span>
        </li>
        <li>
          <span>CK制造商</span>
          <span>32.9元起</span>
          <span v-show="isShow">上新</span>
        </li>
        <li>
          <span>Nine West 制造商</span>
          <span>219元起</span>
          <span v-show="!isShow">上新</span>
        </li>
        <li>
          <span>新秀丽制造商</span>
          <span>34.9元起</span>
          <span v-show="!isShow">上新</span>
        </li>
      </ul>
    </section>
</template>
<script>
  export default {
    data () {
      return {
        isShow: true
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../../../common/stylus/mixins.styl"
  .manufacturer-container
    padding 0 20px 20px 30px
    font-size 30px
    .manufacturer-header
      display flex
      justify-content space-between
      height 100px
      line-height 100px
      .more
        display flex
        i
          display block
          width 30px
          height 30px
          font-size 30px

    .manufacturer-list
      width 100%
      clearFix()
      li
        float left
        width 343px
        height 260px
        background-repeat no-repeat
        background-size 100% 100%
        &:nth-of-type(1)
          margin 0 5px 5px 0
          background-image url("http://yanxuan.nosdn.127.net/74e2ea8f81004d0a60f90fc8e4649058.png")
        &:nth-of-type(2)
          margin-bottom 5px
          background-image url("http://yanxuan.nosdn.127.net/c097be14110f769d58245cdad73e15c3.png")
        &:nth-of-type(3)
          margin 0 5px 5px 0
          background-image url("http://yanxuan.nosdn.127.net/3bf5a8a2f6eef284ecb40806ae9ce043.png")
        &:nth-of-type(4)
          margin-bottom 5px
          background-image url("http://yanxuan.nosdn.127.net/66a23d776f41cba70d00803a5231124b.png")
        span
          float left
          &:nth-of-type(1)
            width 100%
            text-align center
            margin-top 20px
          &:nth-of-type(2)
            font-size 24px
            color #777
            margin-left 25%
          &:nth-of-type(3)
            font-size 24px
            width 64px
            height 32px
            color #fff
            text-align center
            border-radius 5px
            background-color #CBB693
            margin-left 10px

</style>
