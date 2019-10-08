<template>
  <div class="main"
       :class="{'mobile-main': isMobileScreen}">
    <div class="topLin"></div>
    <div class="xuguan-page mobile-page">
      <img :src="logoSrc"
           alt=""
           @click="gotoHome">
      <div class="lang-box hidden-xs-only"
           style="cursor:pointer;">
        <span @click="handleLang('zh')">中文</span> | <span @click="handleLang('en')">EN</span>
      </div>
      <div class="title-top hidden-xs-only">
        <el-tabs v-model="activeName"
                 @tab-click="handleClick">
          <el-tab-pane v-for="item in titleArr"
                       :key="item.id"
                       :label="item.name"
                       :name="item.id">用户管理</el-tab-pane>
        </el-tabs>
      </div>
    </div>
    <div class="hidden-sm-and-up mobile-tab-img"
         @click="mobileTabs">
      <img :src="mobileTabImg"
           alt="">
    </div>
    <div class="router-view"
         :class="{'mobile-router-view': isMobileScreen}">
      <div class="xuguan-page mobile-page">
        <router-view></router-view>
      </div>
    </div>
    <div class="place-bottom"></div>
    <div class="bottom"
         :class="{'mobile-bottom': isMobileScreen}">
      <div v-if="!isMobileScreen">
        <div class="link-box">
          <a href="#">{{$t('user.links')}}</a>
          <a href="#">{{$t('user.video')}}</a>
          <a href="#">{{$t('user.copyright')}}</a>
        </div>
        <div>Copyright © 2019 www.cdtpxs.com All Rights Reserved</div>
      </div>
      <div class="bottom-right"
           v-if="!isMobileScreen">
        <div class="join-us">
          <span>加入我们</span><span></span><img :src="bossIcon"
               alt=""
               @mouseenter="handleImg($event,bossIcon2)"
               @mouseleave="handleImg($event,bossIcon)">
        </div>
        <div class="others-link">
          <img :src="douyin"
               alt=""
               @mouseenter="handleImg($event,douyin2)"
               @mouseleave="handleImg($event,douyin)">
          <img :src="weibo"
               alt=""
               @mouseenter="handleImg($event,weibo2)"
               @mouseleave="handleImg($event,weibo)">
          <img :src="weixin"
               alt=""
               @click="handleWX">
          <img :src="redbook"
               alt=""
               @mouseenter="handleImg($event,redbook2)"
               @mouseleave="handleImg($event,redbook)">
        </div>
      </div>
      <div v-if="isMobileScreen">
        <div class="link-box">
          <a href="#">{{$t('user.links')}}</a>
          <a href="#">{{$t('user.video')}}</a>
          <a href="#">{{$t('user.copyright')}}</a>
        </div>
        <div class="join-us">
          <span>加入我们</span><span></span><img :src="bossIcon"
               alt=""
               @mouseenter="handleImg($event,bossIcon2)"
               @mouseleave="handleImg($event,bossIcon)">
        </div>
        <div class="others-link">
          <img :src="douyin"
               alt=""
               @mouseenter="handleImg($event,douyin2)"
               @mouseleave="handleImg($event,douyin)">
          <img :src="weibo"
               alt=""
               @mouseenter="handleImg($event,weibo2)"
               @mouseleave="handleImg($event,weibo)">
          <img :src="weixin"
               alt=""
               @click="handleWX">
          <img :src="redbook"
               alt=""
               @mouseenter="handleImg($event,redbook2)"
               @mouseleave="handleImg($event,redbook)">
        </div>
      </div>
      <div v-if="isMobileScreen">
        <!-- Copyright © 2019 www.cdtpxs.com All Rights Reserved -->
        Copyright © 2019 www.xuguan.com All Rights Reserved
      </div>
    </div>
    <van-popup v-model="popShow"
               class="wx-img"
               :class="{'mobile-wx-img': isMobileScreen}"
               :closeable="true">
      <template v-if="!isMobileScreen">
        <img :src="glodbalImg"
            alt=""
            class="gognzhonghao">
        <img :src="adminImg"
            alt="">
      </template>
      <template v-else>
        <Swipe
          :swipe-arr="wxSwipeArr"
          isNeedButton
          :options="{
            autoplay: false,
          }"
          class="wx-swipe">
        </Swipe>
      </template>
    </van-popup>
    <van-popup v-model="mobilePop"
               position="left"
               @open="initData">
      <div class="pop-top">
        <i class="el-icon-circle-close"
           @click="mobilePop=false"></i>
        <div style="cursor:pointer;">
          <span @click="handleLang('zh')">中文</span> | <span @click="handleLang('en')">EN</span>
        </div>
      </div>
      <div class="pop-bottom">
        <template v-if="firstTabShow">
          <div class="hahha"
               v-for="item in titleArr"
               :key="item.id"
               @click="handleRouter(item)">
            {{item.name}}
            <i class="el-icon-arrow-right"
               v-if="!!item.children"></i>
          </div>
        </template>
        <template v-else>
          <i class="el-icon-arrow-left"
             @click="handleTabPage"></i>
          <div v-for="item in iconArr"
               :key="item.id"
               @click="handleRouter(item)">
            {{item.text}}
          </div>
        </template>
      </div>
    </van-popup>
  </div>
</template>

<script>
import Swipe from '../components/Swipe'
import logoSrc from '@/assets/img/logo__u35.png'
import bossIcon from '@/assets/img/boss--icon.png'
import bossIcon2 from '@/assets/img/boss--icon-active.png'
import douyin from '@/assets/img/douyin.png'
import douyin2 from '@/assets/img/douyin-active.png'
import weibo from '@/assets/img/weibo.png'
import weibo2 from '@/assets/img/weibo-active.png'
import weixin from '@/assets/img/weixin.png'
import redbook from '@/assets/img/redbook.png'
import redbook2 from '@/assets/img/redbook-active.png'
import glodbalImg from '@/assets/img/glodbal.png'
import adminImg from '@/assets/img/admin.png'
import mobileTabImg from '@/assets/img/_20191004200939.png'

export default {
  provide () {
    return {
      isMobileScreen: this.isMobileScreen
    }
  },
  components: {
    Swipe,
  },
  data () {
    return {
      logoSrc,
      bossIcon,
      bossIcon2,
      douyin,
      douyin2,
      weibo,
      weibo2,
      weixin,
      redbook,
      redbook2,
      glodbalImg,
      adminImg,
      mobileTabImg,
      activeName: 'homePage',
      titleArr: [
        {
          id: 'homePage',
          name: this.$t('user.homePage'),
        },
        {
          id: 'xgExhibition',
          name: this.$t('user.xgExhibition'),
          children: [{
            id: 1,
            text: '有情众生展',
            fatherId: 'xgExhibition'
          }],
        },
        {
          id: 'xgCulture',
          name: this.$t('user.xgCulture'),
        },
        {
          id: 'xgBoutique',
          name: this.$t('user.xgBoutique'),
          children: [
            {
              id: 1,
              text: '佛堂人物画',
              fatherId: 'xgBoutique'
            },
            {
              id: 2,
              text: '中堂吉祥话',
              fatherId: 'xgBoutique'
            },
            {
              id: 3,
              text: '家族肖像画',
              fatherId: 'xgBoutique'
            },
            {
              id: 4,
              text: '文人画',
              fatherId: 'xgBoutique'
            },
          ],
        },
        {
          id: 'xgNews',
          name: this.$t('user.xgNews'),
        },
        {
          id: 'xgAboutUs',
          name: this.$t('user.xgAboutUs'),
        },
      ],
      iconArr: [],
      isMobileScreen: screen.width <= 767,
      popShow: false,
      mobilePop: false,
      firstTabShow: true,
      wxSwipeArr: [
        {
          id: 1,
          src: glodbalImg,
        },
        {
          id: 2,
          src: adminImg,
        },
      ],
    }
  },
  created () {
    this.$router.push(this.activeName)
  },
  watch: {
    $route (val) {
      switch (val.path) {
        case '/xgExhibition':
        case '/xgExhibitionDetail':
          this.activeName = 'xgExhibition'
          break
        case '/xgCulture':
          this.activeName = 'xgCulture'
          break
        case '/xgBoutique':
          this.activeName = 'xgBoutique'
          break
        case '/xgNews':
        case '/xgNewsDetail':
          this.activeName = 'xgNews'
          break
        case '/xgAboutUs':
          this.activeName = 'xgAboutUs'
          break
        default:
          this.activeName = 'homePage'
      }
    },
  },
  methods: {
    handleClick (tab) {
      this.$router.push(tab.name)
    },
    handleImg (e, src) {
      e.target.src = src
    },
    handleWX () {
      this.popShow = true
    },
    mobileTabs () {
      this.mobilePop = true
    },
    handleRouter (value) {
      console.log('点击移动端导航,', value)
      if (value.children) {
        this.firstTabShow = false;
        this.iconArr = value.children;
      } else {
        this.mobilePop = false
        if (this.firstTabShow) {
          this.$router.push(value.id)
        } else {
          if (value.fatherId == 'xgExhibition') {
            this.$router.push({ name: 'xgExhibitionDetail', query: { id: value.id, isVideo: false } })
          } else if(value.fatherId == 'xgBoutique'){
            this.$router.push({ name: 'xgBoutique', query: { id: value.id, isVideo: false } })
          }

        }
      }
    },
    initData () {
      this.firstTabShow = true
    },
    handleTabPage () {
      this.firstTabShow = true
    },
    handleLang (e) {
      this.$i18n.locale = e
      sessionStorage.setItem('lang', e)
    },
    gotoHome () {
      // this.activeName = 'homePage'
      this.$router.push('/')
    },
  }
}
</script>

<style lang="scss">
$tabMainColor: #811c26;
$tabColor: #807d7d;
.topLin {
  width: 85%;
  height: 4px;
  margin: 0 auto;
  background: $tabMainColor;
}
.xuguan-page {
  font-family: "regular";
  width: 85%;
  margin: 0px auto;
  text-align: center;
  margin-top: 27px;
  .el-tabs__header {
    margin: 30px 0 0;
    .el-tabs__nav-wrap:after {
      display: none;
    }
    .el-tabs__nav-scroll {
      display: inline-block;
    }
  }
  .el-tabs__content {
    display: none;
  }
  .el-tabs__item {
    padding: 0 60px;
    color: $tabColor;
    font-size: 18px;
  }
  .el-tabs__item.is-active,
  .el-tabs__item:hover {
    color: $tabMainColor;
  }
  .el-tabs__active-bar {
    background-color: $tabMainColor;
  }
}
@media only screen and (max-width: 992px) {
  .mobile-page {
    width: 100%;
    // overflow: hidden;
  }
}
.router-view {
  width: 100%;
  margin-top: 30px;
  background-color: #f7f7f7;
  padding-top: 60px;
  min-height: 207px;
}
.mobile-router-view {
  padding-top: 20px;
  margin-top: 0;
}
.main {
  padding-bottom: 100px;
  position: relative;
}
.mobile-main {
  padding-bottom: 282px;
}
.place-bottom {
  height: 100px;
  background-color: #f7f7f7;
}
.bottom {
  position: absolute;
  bottom: 0;
  background-color: #040000;
  height: 100px;
  width: 100%;
  color: #fff;
  a {
    color: #fff;
    margin-left: 10px;
  }
  a:first-child {
    margin-left: 0;
  }
  > div {
    display: inline-block;
    margin: 34px 6%;
    vertical-align: top;
  }
  .bottom-right {
    margin: 34px 6% 0 0;
    float: right;
    display: flex;
  }
}
.others-link {
  width: 206px;
  margin-left: 10%;
}
.join-us {
  display: flex;
  span:nth-child(1) {
    display: inline-block;
    width: 30px;
  }
  span:nth-child(2) {
    display: inline-block;
    margin: 0 10px;
    width: 1px;
    height: 35px;
    border-left: 2px solid #fff;
  }
  > img {
    width: 34px;
    height: 34px;
    cursor: pointer;
  }
}
.mobile-bottom {
  position: absolute;
  bottom: 0;
  background-color: #040000;
  height: 282px;
  > div:first-child {
    display: flex;
    .link-box {
      width: 20px;
      width: 240px;
      a:last-child {
        margin-left: 0;
        margin-top: 10px;
        display: inline-block;
      }
    }
    .join-us {
      margin-left: 10px;
    }
  }
  > div:last-child {
    margin: 0 6%;
  }
}
img {
  vertical-align: middle;
}
.van-popup--left {
  height: 100%;
  width: 50%;
  .el-icon-arrow-right {
    margin-left: 32%;
    color: $tabMainColor;
  }
  .el-icon-arrow-left {
    color: $tabMainColor;
  }
}
.pop-top {
  margin: 15px 0 15px 0;
  > i {
    margin-left: 3%;
    font-size: 24px;
    vertical-align: middle;
    color: $tabMainColor;
  }
  > div {
    display: inline-block;
    margin-left: 50%;
  }
}
.pop-bottom {
  height: 40px;
  line-height: 40px;
  padding-left: 12%;
}
.mobile-tab-img {
  position: absolute;
  top: 10px;
  transform: rotate(180deg);
  left: 4%;
}
.lang-box {
  position: absolute;
  top: 55px;
  right: 4%;
}
.el-breadcrumb {
  margin-bottom: 60px;
  /deep/.el-breadcrumb__inner.is-link:hover {
    color: #811c26;
  }
}

.gognzhonghao {
  margin-right: 40px;
}
.wx-img {
  background-color: transparent;
}
.wx-swipe {
  img {
    width: 50%;
    margin: 0 auto;
  }
}
.mobile-wx-img {
  width: 100%;
  /deep/.swiper-slide {
    text-align: center;
  }
  /deep/.swiper-button-white:focus {
    outline: none;
  }
}
</style>