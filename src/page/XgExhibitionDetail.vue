<template>
  <div class="main-detail">
    <div v-if="!isMobileScreen">
      <el-breadcrumb separator-class="el-icon-d-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">{{$t('user.homePage')}}</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/xgExhibition' }">{{$t('user.xgExhibitionSpecil')}}</el-breadcrumb-item>
        <el-breadcrumb-item>{{$t('user.exhibitionDetail')}}</el-breadcrumb-item>
      </el-breadcrumb>

      <div v-if="!isVideo">
        <div class="detail-top">
          <div>
            <img :src="showDetailImg" alt="">
          </div>
          <div>
            <div class="title">有情众生 Sentient Beings</div>
            <div class="small-title">有情众生 - 我们曾经信守过的生命理想</div>
            <div class="other-text">
              地点：中国深圳市南山区深圳湾科技生态园8栋-深圳湾创新广场<br>
              Innovation Pavilion, Shenzhen Bay Technology Eco Park, China
            </div>
            <div class="other-text">
              时间：2019-10-16—12-16<br>
              預開幕： 10月8\10\12日<br>
              VIP 正式開幕： 10月14日， 公眾開放10月16日
            </div>
            <div class="other-text">
              举办单位：深圳市旭观文化有限公司<br>
              协办单位：旭观博物馆; 深投控/深圳市生态湾科技发展有限公司<br>
              Fulldome.Pro
            </div>
            <div class="rect-position">购票入口 <i class="el-icon-arrow-right"></i></div>
          </div>
        </div>
        <div class="detail-bottom">
          <div class="top-line"></div>
          <div class="bottom-normal">
            <img :src="showPlacehold" alt="">
          </div>
          <div class="bottom-normal">
            中国有着风格独特的文化审美系统。而一种文化的传承并不只是表面复刻传统，而是沿着精神意识的脉络找到在当代的立足点，激活这种文化背后的能量。所谓“传统”，就是活着的文化，复兴传统是为了启发现代人的生活，让他们活得更活泼、更圆满。
            <br><br>
            如何向公众输出我们所继承的精神遗产，这是一个属于每个拥有优秀审美情趣和文化意识的品味以及富有创造力的人所面对的课题。遗憾的是中国美学教育以及感官教育在当下中国的教育体系之中是缺席的。
            运用艺术展览来讲述中国传统美学是一个“转译”的过程，高科技手段与当代艺术语言依然是“形式”的部分，我们试图透过表象去讲述中国文化的“灵魂”和“神韵”，通过一系列作品的设计、展览本身的设计去表达传统质朴的“顺势而为”“天人合一”的宇宙大道。
            我们试图正在做的事情，是用美学与艺术的感官表达，去讲述古老中国曾经信守过的、坚持过的生命理想与美的规则。
            <br><br>
            这个展览从“观”着手作为切入点。一方面是因为我们立足于“绘画”这种视觉艺术，同时“观看”也是隐喻着看待世界的方式与视角，而文化本身，就是一种独特视角所形成价值观的集合。展览用“眼睛”作为线索，由三部分组成：天眼，肉眼以及慧眼。天眼所见的是中国古老神话系统里的关于“无限宇宙”的种种，而肉眼所见是民俗画卷里的“人间秩序”，慧眼所见则是道家佛家的精神肖像。
            我们从“有情众生””走向“宇宙万象”。讲述了“生命有各种不同的修行方式，学会面向不同方式的存在致敬”。进而勾勒出传统文化之中的精神脉络，感受那些曾经鲜活在历史卷轴的众生百态。
          </div>
        </div>
      </div>

      <div v-else class="video-box">
        <img :src="showDetailImg" alt="">
        <div>
          <div>
            <div class="title">有情众生 Sentient Beings</div>
            <div class="small-title">有情众生 - 我们曾经信守过的生命理想</div>
            <div class="other-text">
              地点：中国深圳市南山区深圳湾科技生态园8栋-深圳湾创新广场<br>
              Innovation Pavilion, Shenzhen Bay Technology Eco Park, China
            </div>
            <div class="other-text">
              时间：2019-10-16—12-16<br>
              預開幕： 10月8\10\12日<br>
              VIP 正式開幕： 10月14日， 公眾開放10月16日
            </div>
            <div class="other-text">
              举办单位：深圳市旭观文化有限公司<br>
              协办单位：旭观博物馆; 深投控/深圳市生态湾科技发展有限公司<br>
              Fulldome.Pro
            </div>
            <div class="rect-position">购票入口 <i class="el-icon-arrow-right"></i></div>
          </div>
          <div class="bottom-normal">
            中国有着风格独特的文化审美系统。而一种文化的传承并不只是表面复刻传统，而是沿着精神意识的脉络找到在当代的立足点，激活这种文化背后的能量。所谓“传统”，就是活着的文化，复兴传统是为了启发现代人的生活，让他们活得更活泼、更圆满。
            <br><br>
            如何向公众输出我们所继承的精神遗产，这是一个属于每个拥有优秀审美情趣和文化意识的品味以及富有创造力的人所面对的课题。遗憾的是中国美学教育以及感官教育在当下中国的教育体系之中是缺席的。
            运用艺术展览来讲述中国传统美学是一个“转译”的过程，高科技手段与当代艺术语言依然是“形式”的部分，我们试图透过表象去讲述中国文化的“灵魂”和“神韵”，通过一系列作品的设计、展览本身的设计去表达传统质朴的“顺势而为”“天人合一”的宇宙大道。
            我们试图正在做的事情，是用美学与艺术的感官表达，去讲述古老中国曾经信守过的、坚持过的生命理想与美的规则。
            <br><br>
            这个展览从“观”着手作为切入点。一方面是因为我们立足于“绘画”这种视觉艺术，同时“观看”也是隐喻着看待世界的方式与视角，而文化本身，就是一种独特视角所形成价值观的集合。展览用“眼睛”作为线索，由三部分组成：天眼，肉眼以及慧眼。天眼所见的是中国古老神话系统里的关于“无限宇宙”的种种，而肉眼所见是民俗画卷里的“人间秩序”，慧眼所见则是道家佛家的精神肖像。
            我们从“有情众生””走向“宇宙万象”。讲述了“生命有各种不同的修行方式，学会面向不同方式的存在致敬”。进而勾勒出传统文化之中的精神脉络，感受那些曾经鲜活在历史卷轴的众生百态。
          </div>
        </div>
        
      </div>

    </div>
    <div v-else style="position:relative">
      <img :src="showDetailImg" alt="">
      <div class="title mobile-title">有情众生</div>
      <div class="small-title mobile-small">有情众生 - 我们曾经信守过的生命理想</div>
      <div class="other-text text-ct">
        地点：中国深圳市南山区深圳湾科技生态园8栋-深圳湾创新广场
      </div>
      <div class="other-text text-ct">
        时间：2019-10-16—12-16
      </div>
      <div class="price">
        价格：xxx元
      </div>
      <div class="rect-position">购票入口 <i class="el-icon-arrow-right"></i></div>
    </div>
  </div>
</template>

<script>
// 需要调接口获取数据
import showDetailImg from '@/assets/img/show_detail.png'
import showPlacehold from '@/assets/img/show-placehold.png'
import collectionRect from '@/assets/img/collection_rect.png'

export default {
  inject: ['isMobileScreen'],
  data() {
    return {
      showDetailImg,
      showPlacehold,
      collectionRect,
      showId: '',
      isVideo: false,
    }
  },
  created() {
    const { id, isVideo } = this.$route.query
    this.showId = id
    this.isVideo = !!isVideo
  },
}
</script>

<style lang="scss" scoped>
.el-breadcrumb {
  margin-bottom: 60px;
  /deep/.el-breadcrumb__inner.is-link:hover{
    color: #811c26;
  }
}
.main-detail {
  width: 85%;
  margin: 0 auto;
}
.detail-top {
  color: #4d4b4b;
  font-size: 14px;
  position: relative;
  > div {
    width: 50%;
    display: inline-block;
    vertical-align: top;
    position: relative;
  }
  > div:nth-child(2) {
    padding: 10px 3.3%;
    box-sizing: border-box;
  }
}
img {
  width: 100%;
  vertical-align: unset;
}
.title {
  font-size: 24px;
  color: #040000;
  font-weight: blod;
}
.small-title {
  margin: 20px 0 50px;
}
.mobile-small {
  margin: 0 0 20px 0;
}
.other-text {
  text-align: left;
  margin-top: 20px;
}
.rect-position {
  position: absolute;
  bottom: -45px;
  right: 50%;
  transform: translateX(50%);
  width: 160px;
  height: 40px;
  line-height: 40px;
  border: 1px solid #666;
  font-size: 20px;
  &:hover {
    i {
      transition: all 0.3s;
      transform: translateX(5px)
    }
  }
}
.detail-bottom {
  margin-top: 60px;
}
.bottom-normal {
  width: 50%;
  display: inline-block;
  vertical-align: top;
  position: relative;
  color: #4d4b4b;
  font-size: 14px;
  text-align: left;
}
.bottom-normal:nth-child(2) {
  padding: 10px 3.3%;
  box-sizing: border-box;
}
.text-ct {
  text-align: center;
  margin: 5px;
}
.mobile-title {
  margin-top: 10px;
}
.video-box {
  > img {
    height: 492px;
  }
  > div {
    margin-top: 60px;
    > div {
      width: 50%;
      display: inline-block;
      position: relative;
      .rect-position {
        bottom: -80px;
      }
    }
  }
  
}
</style>
