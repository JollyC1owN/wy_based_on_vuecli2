<template>
  <section class="cart-container">
    <header class="cart-header">
      <span>购物车</span>
      <a href="javascript:void(0)">领券</a>
    </header>
    <div class="cart-main">
      <div class="cart-list">
        <div class="cart-item">
          <i class="iconfont icon-circle"></i>
          <span>30天无忧退货</span>
        </div>
        <div class="cart-item">
          <i class="iconfont icon-circle"></i>
          <span>48小时无忧退款</span>
        </div>
        <div class="cart-item">
          <i class="iconfont icon-circle"></i>
          <span>满88元免邮费</span>
        </div>
      </div>
      <img class="cart-img" src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/noCart-d6193bd6e4.png" alt="cartImg">
      <div class="add-loginBtn">
        <span class="goto-add">去添加点什么吧</span>
        <div class="login-btn" @click="$router.push('/profile')">
          <a href="javascript:void(0)">登录</a>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
  export default {}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl";
  .cart-container
    position relative
    height 100%
    background-color #f4f4f4
    .cart-header
      display flex
      justify-content space-between
      align-items center
      height 88px
      padding 0 30px
      background-color #fff
      span
        font-size 36px
        color #333333
      a
        width 90px
        height 88px
        font-size 30px
        color $red
        line-height 90px
        text-align center
    .cart-main
      .cart-list
        display flex
        justify-content space-between
        align-items center
        height 70px
        padding 0 30px
        .cart-item
          display flex
          align-items center
          font-size 24px
          color #666
          i
            width 10px
            height 10px
            font-size 10px
            margin-right 10px

      .cart-img
        position absolute
        top 50%
        left 50%
        transform translate(-50%, -50%)
        width 248px
        height 248px
        background-image url("http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/noCart-d6193bd6e4.png")
        background-repeat no-repeat
        background-position center
      .add-loginBtn
        position absolute
        left 50%
        bottom 380px
        transform translateX(-50%)
        text-align center
        .goto-add
          display block
          font-size 28px
          color #999
          margin-bottom 50px
        .login-btn
          width 480px
          height 92px
          margin 0 135px
          text-align center
          line-height 92px
          background-color $red
          a
            font-size 30px
            color #fff
</style>
