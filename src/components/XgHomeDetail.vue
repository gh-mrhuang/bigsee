<template>
  <div class="other-detail" :class="{'mobile-other-detail': isMobileScreen}">
    <div class="hidden-sm-and-up mobile-detail-title" @click="handleRouter">
      <img :src="titleImg" alt="">
      <span>{{xgTitle || $t('user.xgName')}} <i class="circle"></i> {{title}}</span>
      <img :src="titleImg" alt="" class="titleImg-right">
    </div>
    <div class="hidden-xs-only PC-detial" @click="handleRouter">
      <span>{{xgTitle || $t('user.xgName')}} <i class="circle"></i> {{title}}</span>
    </div>
    <div class="show-more">
      <span class="hidden-xs-only">{{name}}</span>
      <span class="see-more" v-if="showMore" @click="handleRouter">
        {{$t('user.seeMore')}}
      </span>
    </div>
    <slot></slot>
  </div>
</template>

<script>
import titleImg from '@/assets/img/titleImg.png'
export default {
  inject: ['isMobileScreen'],
  props: {
    title: {
      type: String,
      default: '',
    },
    name: {
      type: String,
      default: 'Exhibition',
    },
    showMore: {
      type: Boolean,
      default: false,
    },
    xgTitle: {
      type: String,
      default: ''
    },
    routeName: {
      type: String,
      default: ''
    },
  },
  data() {
    return {
      titleImg,
    }
  },
  methods: {
    handleRouter() {
      this.$router.push(this.routeName)
    },
  },
}
</script>

<style lang="scss" scoped>
$paleft: 3.3%;
.other-detail {
  text-align: left;
  width: 78%;
  border-top: 1px solid #D2D2D2;
  padding-top: 50px;
  margin: 0 auto;
  .see-more {
    float: right;
    margin-right: $paleft;
    color: #4d4b4b;
    cursor: pointer;
  }
  > .PC-detial {
    font-size: 24px;
    color: #811c26;
    padding-left: $paleft;
    .circle {
      width: 8px;
      height: 8px;
      display: inline-block;
      background-color: #040000;
      border-radius: 50%;
      vertical-align: middle;
    }
  }
  >.show-more {
    font-size: 14px;
    margin-top: 10px;
    padding-left: $paleft;
    color: #999;
    overflow: hidden;
  }
  .titleImg-right {
    transform: rotate(180deg)
  }
  .mobile-detail-title {
    color: #811c26;
    text-align: center;
    i {
      color: #040000;
      font-style: normal;
    }
    img {
      vertical-align: middle;
    }
  }
}
.mobile-other-detail {
  width: 100%;
  padding: 0 10px;
  padding-top: 10px;
  box-sizing: border-box;
}
</style>
