<template>
  <section class="time-container">
    <div class="time-header">
      <div class="header-top">
        <span>限时购</span>
        <div class="time-down">
          <span ref="timeHour">{{hour &lt; 10 ? '0' + hour : hour}}</span>
          <span>:</span>
          <span ref="timeMinute">{{minute &lt; 10 ? '0' + minute : minute}}</span>
          <span>:</span>
          <span ref="timeSecond">{{second &lt; 10 ? '0' + second : second}}</span>
        </div>
      </div>
      <span class="header-bottom">
        更多
        <i class="iconfont icon-52"></i>
      </span>
    </div>
    <ul class="time-list">
      <li v-for="(item, index) in flashSale.itemList" :key="index">
        <img :src="item.picUrl" alt="限时购">
        <div class="good-price">
          <span class="new-price">￥{{item.activityPrice}}</span>
          <span class="old-price">￥{{item.originPrice}}</span>
        </div>
      </li>
    </ul>
  </section>
</template>
<script>
  import {mapState} from 'vuex';
  export default {
    data () {
      return {
        hour: 2,
        minute: 59,
        second: 59
      }
    },
    computed: {
      ...mapState({
        flashSale: state => state.home.flashSale
      })
    },
    mounted () {
      this._timeDown();
    },
    methods: {
      _timeDown () {
        this.intervalId = setInterval(() => {
          // 当秒数减至小于0时，重新置为59 同时分钟数减1
          if (this.second > 0) {
            // 秒数大于0时，秒数减1
            this.second--;
          } else {
            // 秒数小于0或者等于0时
            if (this.minute) {
              // 如果分钟数有值，则重置秒数，同时分钟数减1
              this.second = 59;
              this.minute--;
              // 如果小时数为0 则当分钟数减至0时，直接设为0
              if (this.minute <= 0 && this.hour === 0) {
                this.minute = 0;
              }
            } else if (this.hour) {
              // 如果分钟数为0而小时数不为0  即 x:0:xx 则秒数和分钟数均置为初始值 同时小时数减1
              this.second = 59;
              this.minute = 59;
              this.hour--;
              if (this.hour <= 0) {
                // 小时数减至0时，直接设为0
                this.hour = 0;
              }
            }
          }

          if (!this.hour && !this.minute && !this.second) {
            // 秒数/分钟数/小时数全都不大于0时，停止计时器
            clearInterval(this.intervalId);
          }
          // 当分钟数减至小于0时，重置为59 同时小时数减1
        }, 1000);
      }
    },
    beforeDestroy () {
      clearInterval(this.intervalId);
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../../../common/stylus/mixins.styl";
  .time-container
    .time-header
      display flex
      justify-content space-between
      height 100px
      font-size 30px
      line-height 100px
      padding 0 30px
      .header-top
        display flex
        .time-down
          span
            font-size 24px
            &:nth-of-type(odd)
              padding 5px
              color #fff
              background-color #000
              border-radius 5px
              margin 0 10px
            &:nth-of-type(even)
              height 36px
      .header-bottom
        i
          width 30px
          height 30px
          font-size 30px
    .time-list
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
        .good-price
          height 40px
          line-height 40px
          padding 0 0 0 10px
          margin-top 10px
          .new-price
            font-size 28px
            color $red
          .old-price
            font-size 24px
            color #777
            text-decoration line-through
</style>
