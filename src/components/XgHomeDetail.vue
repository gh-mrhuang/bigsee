<template>
  <div class="other-detail">
    <div>
      <span>{{$t('user.xgName')}}<i class="circle">●</i>{{title}}</span>
    </div>
    <div>
      <span>{{name}}</span>
      <span class="see-more" v-if="showMore">
        {{$t('user.seeMore')}}>>
      </span>
    </div>
    <slot></slot>
  </div>
</template>

<script>

export default {
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
    }
  },
  data() {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
.other-detail {
  text-align: left;
  .see-more {
    float: right;
    right: 3%;
    color: #4d4b4b;
    cursor: pointer;
  }
  > div {
    font-size: 24px;
    color: #811c26;
    .circle {
      color: #040000;
      font-style: normal;
    }
  }
  > div:nth-child(2) {
    font-size: 14px;
    margin-top: 10px;
    color: #999;
  }
}
</style>
