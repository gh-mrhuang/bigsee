<template>
  <div>

    <div v-if="!isMobileScreen">
      <div class="swipe-box">
        <Swipe :swipe-arr="swipeArr" @parent-click="parentClick"></Swipe>
      </div>
      <XgHomeDetail :title="$t('user.hotShow')" name="Hot" :xg-title="$t('user.now')">
        <div v-for="item in listArr" :key="item.id" class="list-item">
          <div>
            <img :src="item.src" alt="" @click="parentClick(item)">
            <div>
              <div>{{item.title}}</div>
              <div>{{item.content}}</div>
            </div>
          </div>
        </div>
      </XgHomeDetail>
    </div>
    <!-- 测试push -->
    <div v-else class="mobile-exhi">
      <div class="hidden-sm-and-up mobile-detail-title">
        <img :src="titleImg" alt="">
        <span>展会预告</span>
        <img :src="titleImg" alt="" class="titleImg-right">
      </div>
      <img :src="banner33" alt="" @click="parentClick()">
      <div class="text-lt">有情众生展</div>
      <div class="text-lt text-content">旭观以创新艺术，孜孜不倦地探索新技术，传承与复兴中国文化。目前以收藏几千幅质量上乘的古画......</div>
    </div>
  </div>
</template>

<script>
import Swipe from '@/components/Swipe'
import XgHomeDetail from '@/components/XgHomeDetail'
import titleImg from '@/assets/img/titleImg.png'
// TODO 需要换接口部分
import banner from '@/assets/img/banner.png'
import banner2 from '@/assets/img/banner2.png'
import smallShowList from '@/assets/img/small-show-list.png'

export default {
  inject: ['isMobileScreen'],
  components: {
    Swipe,
    XgHomeDetail,
  },
  data() {
    return {
      titleImg,
      banner33: banner,
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
      listArr: [
        {
          id: 1,
          src: smallShowList,
          title: '友情众生展',
          content: '友情众生展-我们曾经信守过的生命理想',
        },
        // {
        //   id: 2,
        //   src: smallShowList,
        //   title: '友情众生展',
        //   content: '友情众生展-我们曾经信守过的生命理想',
        // },
        // {
        //   id: 3,
        //   src: smallShowList,
        //   title: '友情众生展',
        //   content: '友情众生展-我们曾经信守过的生命理想',
        // },
        // {
        //   id: 4,
        //   src: smallShowList,
        //   title: '友情众生展',
        //   content: '友情众生展-我们曾经信守过的生命理想',
        // },
      ]
    }
  },
  methods: {
    parentClick(value = {id: 1}) {
      const { id } = value
      this.$router.push({ name:'xgExhibitionDetail', query: { id, isVideo: false } })
    }
  }
}
</script>

<style lang="scss" scoped>
.swipe-box {
  padding-bottom: 60px;
  // border-bottom: 1px solid #D2D2D2;
}
.list-item {
  width: 30%;
  display: inline-block;
  margin-left: 4%;
  margin-top: 100px;
  border: 1px solid transparent;
  border-radius: 10px 10px 0 0;
  position: relative;
  height: 137px;
  top: 15px;
  > div {
    background-color: #fff;
    width: 90%;
    position: absolute;
    top: -70px;
    left: 50%;
    transform: translateX(-50%);
    > img {
      border-radius: 10px 10px 0 0;
      cursor: pointer;
    }
    > div {
      padding: 5px;
      font-size: 14px;
      color: #040000;
      > div:nth-child(2) {
        color: #4d4b4b;
      }
    }
  }
  &:hover {
    border: 1px solid #811c26;
  }
}
.list-item:nth-of-type(3n+4) {
  margin-left: 0;
}
.list-item:nth-of-type(n > 6) {
  margin-left: 0;
}
img {
  width: 100%;
}
.titleImg-right {
  transform: rotate(180deg)
}
.mobile-detail-title {
  width: 100%;
  color: #811c26;
  text-align: center;
  margin-bottom: 20px;
  i {
    color: #040000;
    font-style: normal;
  }
  img {
    vertical-align: middle;
    width: unset;
  }
}
.text-lt {
  text-align: left;
  font-size: 14px;
  color: #1a1919;
  margin-top: 20px;
  padding: 0 20px;
}
.mobile-exhi {
  background-color: #fff;
  padding-bottom:40px;
}
</style>
