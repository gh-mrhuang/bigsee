<template>
  <div>
    <el-breadcrumb separator-class="el-icon-d-arrow-right" v-if="!isMobileScreen">
      <el-breadcrumb-item to="/">{{$t('user.homePage')}}</el-breadcrumb-item>
      <el-breadcrumb-item to="/xgNews">{{$t('user.xgNews')}}</el-breadcrumb-item>
    </el-breadcrumb>
    <div style="height:47px;">
      <div class="mobile-new-title">
        <img :src="titleImg" alt="">
        <span>展会预告</span>
        <img :src="titleImg" alt="" class="titleImg-right">
      </div>
    </div>
    <div>
      <div v-for="(item,index) in newList" :key="index" class="news-list" @click="intoNewsDetail(item)">
        <div class="title" :class="{'mobile-title': isMobileScreen}">
          <span class="hidden-xs-only circle"></span>
          <span>{{item.title}}</span>
        </div>
        <span class="time" :class="{'mobile-time': isMobileScreen}">{{item.time}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import titleImg from '@/assets/img/titleImg.png'
export default {
  inject: ['isMobileScreen'],
  data() {
    return {
      titleImg,
      newList: [
        {
          id: 1,
          title: '旭观文化-《有情众生》系列中国文化沉浸式艺术展全球首展-深圳站',
          time: '2019/09/30',
          content: '',
        },
        {
          id: 2,
          title: '旭观文化-《有情众生》系列中国文化沉浸式艺术展全球首展-深圳站',
          time: '2019/09/30',
          content: '',
        },
        {
          id: 3,
          title: '旭观文化-《有情众生》系列中国文化沉浸式艺术展全球首展-深圳站',
          time: '2019/09/30',
          content: '',
        },
      ],
    }
  },
  methods: {
    intoNewsDetail(value) {
      const { id } = value
      this.$router.push({ name:'xgNewsDetail', query: { id } })
    }
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
.mobile-new-title {
  width: 100%;
  // color: #811c26;
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
  .titleImg-right {
    transform: rotate(180deg)
  }
}
.news-list {
  width: 100%;
  height: 60px;
  line-height: 60px;
  text-align: left;
  border-bottom: 1px solid #ccc;
  position: relative;
  .title {
    display: inline-block;
    vertical-align: middle;
    cursor: pointer;
    .circle {
      width: 5px;
      height: 5px;
      display: inline-block;
      vertical-align: middle;
      border-radius: 50%;
      border: 1px solid #811c26;
      margin-right: 10px;
    }
  }
  .time {
    float: right;
    color: #811c26;
  }
}
.news-list:first-of-type {
  border-top: 1px solid #ccc;
}
.mobile-title {
  position: relative;
  font-size: 12px;
  overflow: auto;
  padding: 0 5px;
}
.mobile-time {
  position: absolute;
  right: 2%;
  bottom: -18px;
}
</style>
