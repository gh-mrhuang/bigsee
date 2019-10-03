<template>
  <div class="main" :class="{'mobile-main': isMobileScreen}">
    <div class="xuguan-page mobile-page">
      <img :src="logoSrc" alt="">
      <div class="title-top hidden-xs-only">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane v-for="item in titleArr" :key="item.id" :label="item.name" :name="item.id">用户管理</el-tab-pane>
        </el-tabs>
      </div>
    </div>
    <div class="router-view">
      <div class="xuguan-page mobile-page">
        <router-view></router-view>
      </div>
    </div>
    <div class="bottom" :class="{'mobile-bottom': isMobileScreen}">

    </div>
  </div>
</template>

<script>
import logoSrc from '../assets/img/logo__u35.png'
export default {
  provide() {
    return {
      isMobileScreen: this.isMobileScreen
    }
  },
  data() {
    return {
      logoSrc,
      activeName: 'homePage',
      titleArr: [
        {
          id: 'homePage',
          name: this.$t('user.homePage'),
        },
        {
          id: 'xgExhibition',
          name: this.$t('user.xgExhibition'),
        },
        {
          id: 'xgCulture',
          name: this.$t('user.xgCulture'),
        },
        {
          id: 'xgBoutique',
          name: this.$t('user.xgBoutique'),
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
      isMobileScreen: screen.width <= 767,
    }
  },
  created() {
    this.$router.push(this.activeName)
  },
  methods: {
    handleClick(tab) {
      this.$router.push(tab.name)
    }
  }
}
</script>

<style lang="scss">
$tabMainColor: #811c26;
$tabColor: #807d7d;
.xuguan-page {
  font-family: 'regular';
  width: 85%;
  margin: 0 auto;
  text-align: center;
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
  }
  .el-tabs__item.is-active, .el-tabs__item:hover {
    color: $tabMainColor;
  }
  .el-tabs__active-bar {
    background-color: $tabMainColor;
  }
}
@media only screen and (max-width:992px){
  .mobile-page {
    width: 100%;
    overflow: hidden;
  }
}
.router-view {
  width: 100%;
  margin-top: 30px;
  background-color: #F7F7F7;
  padding-top: 60px;
}
.main {
  padding-bottom: 100px;
  position: relative;
}
.mobile-main {
  padding-bottom: 282px;
}
.bottom {
  position: absolute;
  bottom: 0;
  background-color: #040000;
  height: 100px;
  width: 100%;
}
.mobile-bottom {
  position: absolute;
  bottom: 0;
  background-color: #040000;
  height: 282px;
}
</style>