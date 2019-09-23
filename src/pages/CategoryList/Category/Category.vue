<template>
  <div class="category-container">
    <div class="category-main">
      <img class="category-bigImg" :src="categories.bannerUrl" v-if="categories" />
      <ul v-if="categories">
        <li v-for="(category, index) in categories.subCateList" :key="index">
          <img :src="category.bannerUrl" :alt="category.name" />
          <span>{{category.name}}</span>
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
      categories: [],
      categoryId: ''
    }
  },
  computed: {
    ...mapState({
      categoryList: state => state.categoryList.categoryList
    })
  },
  mounted() {
    this.categoryId = this.$route.query.id ? this.$route.query.id : '1022001'
    /* eslint-disable no-new */
    new BScroll('.category-container', {
      click: true
    })
  },
  watch: {
    $route() {
      this.categoryId = this.$route.query.id
      this.categories = this.categoryList.find(
        item => item.id === this.categoryId * 1
      )
    },
    categoryList() {
      this.categories = this.categoryList.find(
        item => item.id === this.categoryId * 1
      )
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
@import '../../../common/stylus/mixins.styl'

.category-container
  height 100%
  overflow hidden

  .category-main
    height 100%
    margin-left 162px
    padding 30px 30px 120px

    .category-bigImg
      width 528px
      height 192px
      margin-bottom 30px

    ul
      display flex
      flex-wrap wrap
      width 100%

      li
        text-align center
        width 144px
        margin-right 30px

        img
          width 144px
          height 144px
</style>
