<template>
  <swiper :options="swiperOption" ref="swipe">
    <!-- slides -->
    <swiper-slide v-for="item in swipeArr" :key="item.id">
      <img :src="item.src" alt="" @click="itemClick(item)">
      <slot :parentContent="{title: item.title, content: item.content}"></slot>
    </swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
    <template v-if="isNeedButton">
      <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
      <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
    </template>
  </swiper>
</template>

<script>
export default {
  props: {
    swipeArr: {
      type: Array,
      default: () => []
    },
    isNeedPagination: {
      type: Boolean,
      default: true,
    },
    isNeedButton: {
      type: Boolean,
      default: false,
    },
    options: {
      type: Object,
      default: () => ({})
    },
  },
  data() {
    return {
      swiperOption: Object.assign({
        loop: true,
        autoplay: {
          disableOnInteraction: false,  // 用户操作swiper之后，是否禁止autoplay
          delay: 3000, // 自动切换的时间间隔（单位ms）
        },
      }, this.options),
      index: 0,
    }
  },
  created() {
    if (this.isNeedPagination) {
      this.$set(this.swiperOption, 'pagination', {
        el: '.swiper-pagination',
        clickable: true //允许分页点击跳转
      })
    }
    if (this.isNeedButton) {
      this.$set(this.swiperOption, 'navigation', {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      })
    }
  },
  methods: {
    itemClick(value) {
      this.$emit('parent-click', value)
    }
  },
}
</script>

<style lang="scss" scoped>
.swiper-pagination /deep/ {
  > .swiper-pagination-bullet {
    background-color: #fff;
  }
}
img {
  width: 100%;
}
</style>
