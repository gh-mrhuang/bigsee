<template>
  <swiper :options="swiperOption" ref="swipe">
    <!-- slides -->
    <swiper-slide v-for="item in swipeArr" :key="item.id">
      <img :src="item.src" alt="" @click="itemClick(item)">
      <slot :parentContent="{title: item.title, content: item.content}"></slot>
    </swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
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
    }
  },
  data() {
    return {
      swiperOption: {
        loop: true,
        autoplay: {
          disableOnInteraction: false,  // 用户操作swiper之后，是否禁止autoplay
          delay: 3000, // 自动切换的时间间隔（单位ms）
        },
      },
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
