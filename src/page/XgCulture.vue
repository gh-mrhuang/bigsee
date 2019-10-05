<template>
  <div>
    <div class="culture" :class="{'mobile-culture':isMobileScreen}">
      <div v-for="item in goodsArr" :key="item.id">
        <img :src="item.src" alt="" @click="handlePop(item.src)">
      </div>
    </div>
    <van-popup v-model="popShow" :closeable="true" :class="{'mobile-pop':isMobileScreen}">
      <img :src="popSrc" alt="">
    </van-popup>
  </div>
</template>

<script>
import goods1 from '@/assets/img/goods1.png'
import goods2 from '@/assets/img/goods2.png'
import goods3 from '@/assets/img/goods3.png'
import goods4 from '@/assets/img/goods4.png'

export default {
  inject: ['isMobileScreen'],
  data() {
    return {
      goodsArr: [
        {
          id: 1,
          src: goods1,
          title: '图片标题',
          content: '文案文案文案',
        },
        {
          id: 2,
          src: goods2,
          title: '图片标题',
          content: '文案文案文案',
        },
        {
          id: 3,
          src: goods3,
          title: '图片标题',
          content: '文案文案文案',
        },
        {
          id: 4,
          src: goods4,
          title: '图片标题',
          content: '文案文案文案',
        },
      ],
      popShow: false,
      popSrc: '',
    }
  },
  
  methods: {
    handlePop(src) {
      this.popSrc = src
      this.popShow = true
    }
  }
}
</script>

<style lang="scss" scoped>
.culture {
  text-align: left;
  > div {
    width: 30%;
    margin-right: 3%;
    margin-bottom: 3%;
    display: inline-block;
    img {
      width: 100%;
      &:hover {
        transform: scale(1.2);
        transition: transform 0.3s;
      }
    }
  }
}
.mobile-culture {
  padding: 0 4%;
  > div {
    width: 48%;
    margin-right: 4%;
    margin-bottom: 4%;
  }
  > div:nth-child(2n) {
    margin-right: 0;
  }
}
</style>
