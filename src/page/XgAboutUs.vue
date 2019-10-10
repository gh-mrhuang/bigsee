<template>
  <div>
    <img :src="Imgaboutmobile" alt="" class="bigimg" :class="{'mobile-bigimg':isMobileScreen}">
    <div class="imgleft" :class="{'mobile-imgleft':isMobileScreen}">
      <div class="hidden-xs-only PC-detial">
        <span>{{$t('user.about')}} <i class="circle"></i> {{$t('user.us')}}</span>
      </div>
      <p class="content-text">
        旭观文化致力于古代优秀文化及艺术品的继承与保护，至今已收藏四千余幅质量上乘的中国古代绘画精品，风格各异，洋洋大观，时间跨度从元朝至民国，包含儒释道三教人物画，家族肖像画和吉祥题材中堂画等。另藏有古代石木雕精品、古钱币等艺术珍品总计万余件。
        <br><br>
        Rising-Vision is aiming to the inheritance and protection of Chinese traditional culture and traditional artworks, it has collected more than 4,000 high-quality traditional Chinese paintings, mainly from the Yuan dynasty to the period of the Republic of China. These collections are covering multiple styles, such as Confucian-Buddhist-Taoist figure paintings, family portrait paintings, house landscape paintings and more. In addition, RV has owned more than ten thousand antique collections, including ancient stones, wood carvings, ancient currency and more.
      </p>
    </div>
    <div class="hidden-xs-only bittitle">
      旭观文化旗下共设立三大板块
    </div>
    <div class="hidden-xs-only smalltitle">
      Rising Vision has three organizations
    </div>
    <div class="moreimg" :class="{'mobile-moreimg':isMobileScreen}">
      <img :src="Imgaboutbw" alt="">
      <img :src="Imgaboutwh" alt="">
      <img :src="Imgaboutyy" alt="">
    </div>
    <div class="imgsz" :class="{'mobile-imgsz':isMobileScreen}">
      <img :src="Imgaboutsz" alt="">
      <div>
        <img :src="Imgabouttel" alt="">
        <span>13798467741</span>
      </div>
      <div>
        <img :src="Imgaboutemail" alt="">
        <span>info@rising-vision.com</span>
      </div><div>
        <img :src="Imgaboutplace" alt="">
        <span>地址：深圳市南山区向南海德大厦A栋17楼</span>
      </div>
    </div>
    <div class="imgsz imgcs" :class="{'mobile-imgsz':isMobileScreen, 'mobile-imgcs':isMobileScreen}">
      <img :src="Imgaboutcs" alt="">
      <div>
        <img :src="Imgabouttel" alt="">
        <span>15084980225</span>
      </div>
      <div>
        <img :src="Imgaboutemail" alt="">
        <span>info@rising-vision.com</span>
      </div><div>
        <img :src="Imgaboutplace" alt="">
        <span>地址：长沙湖南大剧院1楼</span>
      </div>
    </div>
  </div>
</template>

<script>
import Imgaboutbig from '@/assets/img/aboutbig.png'
import Imgaboutmobile from '@/assets/img/aboutmobile.jpg'
import Imgaboutbw from '@/assets/img/aboutbw.png'
import Imgaboutcs from '@/assets/img/aboutcs.png'
import Imgaboutemail from '@/assets/img/aboutemail.png'
import Imgaboutplace from '@/assets/img/aboutplace.png'
import Imgaboutsz from '@/assets/img/aboutsz.png'
import Imgabouttel from '@/assets/img/abouttel.png'
import Imgaboutwh from '@/assets/img/aboutwh.png'
import Imgaboutyy from '@/assets/img/aboutyy.png'
export default {
  inject: ['isMobileScreen'],
  data() {
    return {
      Imgaboutbig,
      Imgaboutbw,
      Imgaboutcs,
      Imgaboutemail,
      Imgaboutplace,
      Imgaboutsz,
      Imgabouttel,
      Imgaboutwh,
      Imgaboutyy,
      Imgaboutmobile,
    }
  }
}
</script>

<style lang="scss" scoped>
.PC-detial {
  font-size: 24px;
  color: #811c26;
  .circle {
    width: 8px;
    height: 8px;
    display: inline-block;
    background-color: #040000;
    border-radius: 50%;
    vertical-align: middle;
  }
}
.content-text {
  margin-top: 20px;
  font-size: 16px;
}
.bigimg {
  width: 50%;
}
.mobile-bigimg {
  width: 100%;
}
.imgleft {
  text-align: left;
  display: inline-block;
  width: 50%;
  box-sizing: border-box;
  padding-left: 3.3%;
  vertical-align: top;
  line-height: 22px;
}
.mobile-imgleft {
  width: 100%;
}
.bittitle {
  font-size: 24px;
  color: #811c26;
  text-align: left;
  margin: 60px 0 10px;
}
.smalltitle {
  font-size: 16px;
  color: #999;
  text-align: left;
  margin-bottom: 30px;
}
.moreimg {
  text-align: left;
  margin-bottom: 60px;
  > img {
    margin-left: 40px;
  }
  > img:first-child {
    margin-left: 0;
  }
}
.imgsz {
  width: 30%;
  display: inline-block;
  position: relative;
  vertical-align: middle;
  text-align: left;
  >img {
    width: 100%;
  }
  > div {
    position: absolute;
    top: 72%;
    left: 3%;
    > span {
        margin-left: 10px;
    }
  }
  > div:nth-child(3) {
    top: 81%;
  }
  > div:nth-child(4) {
    top: 90%;
  }
}
.imgcs {
  margin-left: 40%;
}
.mobile-moreimg {
  width: 100%;
  > img {
    width: 30%;
    margin-left: 3%;
  }
}
.mobile-imgsz {
  width: 100%;
}
.mobile-imgcs {
  margin-left: 0;
}
</style>
