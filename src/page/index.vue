<template>
  <div>
    <h1>{{this.$t('user.message')}}</h1>
    <van-cell is-link @click="showPopup">展示弹出层</van-cell>
    <van-popup v-model="show">内容</van-popup>
    <el-button type="primary">主要按钮</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false
    }
  },
  methods: {
    showPopup() {
      this.show = true;
    }
  }
}
</script>

<style lang="scss">

</style>