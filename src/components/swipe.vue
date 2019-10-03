<template>
  <swiper :options="swiperOption" ref="swipe" @someSwiperEvent="onChange">
    <!-- slides -->
    <swiper-slide v-for="item in swipeArr" :key="item.id">
      <img :src="item.src" alt="">
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
    }
  },
  data() {
    return {
      swiperOption: {
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true //允许分页点击跳转
        },
        autoplay: {
          disableOnInteraction: false,  // 用户操作swiper之后，是否禁止autoplay
          delay: 3000, // 自动切换的时间间隔（单位ms）
        },
      },
      index: 0,
    }
  },
  methods: {
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
