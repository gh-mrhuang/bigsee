<template>
  <div>
    <div class="homenPage">
      <div class="swipe-box">
        <Swipe :swipe-arr="swipeArr"></Swipe>
      </div>
      <XgHomeDetail showMore :title="$t('user.xgExhibitionSpecil')" routeName="xgExhibition">
        <img class="xgExhibitionSpecil" :src="exhibitionImg" :class="{'mobile-exhibitionImg': isMobileScreen}">
      </XgHomeDetail>
      <XgHomeDetail :title="$t('user.xgCultureSpecil')" name="Goods" routeName="xgCulture">
        <div class="fixed-banner mobile-exhibitionImg" v-if="!isMobileScreen">
          <div class="fixed-banner-content" v-for="(item, index) in goodsArr" :key="index" style="position:relative;">
            <img :src="item.src" alt="">
            <div class="fixed-banner-text">
              <div>
                {{item.title}}
              </div>
              <div>{{item.content}}</div>
            </div>
          </div>
        </div>
        <div v-else>
          <Swipe :swipe-arr="goodsArr" :isNeedPagination="false">
            <template v-slot="childContent">
              <div class="text-center">
                <img :src="arrowsImg" class="arrows">
                {{childContent.parentContent.title}}
                <img :src="arrowsImg" class="img-right">
              </div>
              <div class="text-center">{{childContent.parentContent.content}}</div>
            </template>
          </Swipe>
        </div>
      </XgHomeDetail>
      <XgHomeDetail :title="$t('user.xgBoutiqueSpecil')" name="Collection" routeName="xgBoutique">
        <CollectionItem></CollectionItem>
      </XgHomeDetail>
    </div>
    <el-backtop :bottom="isMobileScreen ? 282 : 100" :right="10">
      <i class="el-icon-caret-top"></i>
    </el-backtop>
  </div>
</template>

<script>
import Swipe from '@/components/Swipe'
import XgHomeDetail from '@/components/XgHomeDetail'
import CollectionItem from '@/components/CollectionItem'
import arrowsImg from '@/assets/img/_20191003205628.png'

// TODO 需要换接口部分
import banner from '@/assets/img/banner.png'
import banner2 from '@/assets/img/banner2.png'
import exhibitionImg from '@/assets/img/exhibition_img.jpg'
import goods1 from '@/assets/img/goods1.png'
import goods2 from '@/assets/img/goods2.png'
import goods3 from '@/assets/img/goods3.png'
import goods4 from '@/assets/img/goods4.png'

export default {
  inject: ['isMobileScreen'],
  components: {
    Swipe,
    XgHomeDetail,
    CollectionItem,
  },
  data() {
    return {
      exhibitionImg,
      arrowsImg,
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
.xgExhibitionSpecil {
  width: 100%;
  margin: 30px 0 40px;
}
.mobile-exhibitionImg {
  margin: 10px 0 40px;
}
.fixed-banner {
  background: #fff url('../assets/img/fixed_banner.png') no-repeat;
  width: 100%;
  height: 640px;
  padding: 20px 20px 20px 38%;
  box-sizing: border-box;
  .fixed-banner-content {
    width: 50%;
    height: 50%;
    display: inline-block;
    vertical-align: middle;
    img {
      width: 100%;
      height: 100%;
    }
    &:hover .fixed-banner-text {
      height: 100px;
    }
  }
  .fixed-banner-text {
    box-sizing: border-box;
    padding: 10px 0 0 10px;
    overflow: hidden;
    width: 100%;
    position: absolute;
    bottom: 0;
    height: 0;
    transition: all 0.3s;
    background-color: #4A4647;
    font-size: 16px;
    color: #fff;
    > div:first-child {
      margin-bottom: 20px;
      font-size: 18px;
    }
  }
}
.text-center {
  font-size: 20px;
  text-align: center;
  margin: 30px 0 20px 0;
}
.text-center:nth-of-type(2) {
  font-size: 18px;
  margin-top: 0px;
  margin-bottom: 40px;
}
.el-backtop {
  background-color: #040000;
  color: #811c26;
  &:hover {
    color: #040000;
    background-color: #811c26;
  }
}
.img-right {
  transform: rotate(180deg);
  vertical-align: middle;
}
</style>
