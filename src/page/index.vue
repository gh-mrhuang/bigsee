<template>
  <div class="xuguan-page mobile-page">
    <img :src="logoSrc" alt="">
    <div class="title-top">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane v-for="item in titleArr" :key="item.id" :label="item.name" :name="item.id">用户管理</el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
import logoSrc from '../assets/img/logo__u35.png'
export default {
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
    }
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
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
  height: 300px;
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
  }
}
.title-top {

}
</style>