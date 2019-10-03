<template>
  <div>
    <div class="homenPage">
      <div class="swipe-box">
        <swipe :swipe-arr="swipeArr"></swipe>
      </div>
      <XgHomeDetail showMore></XgHomeDetail>
    </div>
  </div>
</template>

<script>
import swipe from '../components/swipe'
import XgHomeDetail from '../components/XgHomeDetail'

// TODO 需要换接口部分
import banner from '../assets/img/banner.png'
import banner2 from '../assets/img/banner2.png'

export default {
  components: {
    swipe,
    XgHomeDetail,
  },
  data() {
    return {
      swipeArr: [
        {
          id: 1,
          src: banner,
        },
        {
          id: 2,
          src: banner2,
        },
      ],
    }
  }
}
</script>

<style lang="scss" scoped>
.swipe-box {
  padding-bottom: 60px;
  // border-bottom: 1px solid #D2D2D2;
}
.other-detail {
  width: 78%;
  border-top: 1px solid #D2D2D2;
  padding-top: 50px;
  margin: 0 auto;
}
</style>
