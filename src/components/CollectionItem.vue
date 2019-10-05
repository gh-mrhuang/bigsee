<template>
  <div>
    <div
      v-for="(item, index) in collectionArr"
      :key="item.id"
      class="collection-item"
      :class="{ 'mobile-collection-item' : isMobileScreen, 'even-item': index%2 === 1 && !isMobileScreen }">
      
      <div class="img-hover" v-if="!isMobileScreen">
        <img :src="item.src" @click="handlePop(item.src)">
      </div>

      <img :src="item.src" @click="handlePop(item.src)" v-else>

      <div v-if="!isMobileScreen" class="img-content">
        <img :src="collectionRect" alt="" class="small-rect">
        <div class="PC-item">
          <div class="title-item">
            <div>{{item.name}}</div>
            <div>{{item.dynasty}}</div>
          </div>
          <p class="size-item" >
            {{$t('user.sizeInfo')}}：{{item.size}}
          </p>
          <p class="content-item">
            {{item.content}}
          </p>
        </div>
      </div>
      <div class="mobile-title-item img-content" v-else>
        <p>
          <span>{{$t('user.sizeInfo')}}：{{item.size}}</span>
          <span>{{item.dynasty}}</span>
        </p>
        <p class="mobile-name">
          {{item.name}}
        </p>
        <div class="content-item">
          {{item.content}}
        </div>
      </div>
    </div>
    <van-popup v-model="popShow" :closeable="true" :class="{'mobile-pop':isMobileScreen}">
      <img :src="popSrc" alt="">
    </van-popup>
  </div>
</template>

<script>
import collectionItem1 from '@/assets/img/collection-item1.png'
import collectionItem2 from '@/assets/img/collection-item2.png'
import collectionItem3 from '@/assets/img/collection-item3.png'
import collectionItem4 from '@/assets/img/collection-item4.png'
import collectionItem8 from '@/assets/img/collection-item8.png'
import collectionRect from '@/assets/img/collection_rect.png'

export default {
  inject: ['isMobileScreen'],
  props: {
  },
  data() {
    return {
      collectionArr: [
        {
          id: 1,
          src: collectionItem1,
          name: '药佛爷',
          dynasty: 'xx 朝代',
          size: 'xxxxxxx',
          content: '药师琉璃光如来，又译为药师琉璃光王佛，简称药师如来、琉璃光佛、消灾延寿药师佛，为东方净琉璃世界之教主。药师，比喻能治众生贪、瞋、痴的医师；以琉璃为名，乃取琉璃之光明透彻以喻国土清静无染。',
        },
        {
          id: 2,
          src: collectionItem2,
          name: '三菩萨图',
          dynasty: 'xx 朝代',
          size: 'xxxxxxx',
          content: '图依次为⼤势⾄菩萨，观⾳菩萨，⽂殊菩萨。 观世⾳音菩萨代表佛的慈悲，⼤大势⾄至菩萨和⽂文殊菩 萨代表佛的智慧。',
        },
        {
          id: 3,
          src: collectionItem3,
          name: '马王爷',
          dynasty: 'xx 朝代',
          size: 'xxxxxxx',
          content: `马王爷既“马神”，名为步，又称“马步”，马之灾神
                    马王爷历代都有奉祀，以求免灾。`,
        },
        {
          id: 4,
          src: collectionItem4,
          name: '福禄寿',
          dynasty: 'xx朝代',
          size: 'xxxxxxx',
          content: '三星也是许多⺠民间绘画的题材，常⻅见福星⼿手拿⼀一个“福”字，禄星捧着⾦元宝，寿星托着寿桃、拄着拐杖。另外还有⼀一种象征画法，画上蝙蝠、梅花鹿、寿桃，⽤用它们的谐⾳音来表达福、禄、寿的含义。',
        },
        {
          id: 5,
          src: collectionItem8,
          name: '寿星',
          dynasty: 'xx朝代',
          size: 'xxxxxxx',
          content: `也称“南极⽼人星君”，星名，是古代神话传说中的⻓长寿之神，也是道教中的神仙，本为恒星名，为福、禄、
                    寿三星之⼀一，“寿星，⻆角亢也”。列为⼆二⼗十⼋八宿之⻓长，故⽈曰寿。
                    `,
        },
      ],
      collectionRect,
      popSrc: '',
      popShow: false,
    }
  },
  methods: {
    handlePop(src) {
      this.popSrc = src
      this.popShow = true
    }
  }
}
</script>

<style lang="scss" scoped>
.collection-item {
  display: flex;
  margin-top: 40px;
  position: relative;
  > .img-hover {
    width: 50%;
    height: 320px;
    border: 1px solid transparent;
    border-radius: 10px;
    position: absolute;
    top: 63px;
    box-sizing: border-box;
    > img {
      position: absolute;
      width: 90%;
      height: 370px;
      border-radius: 20px 20px 0 0;
      cursor: pointer;
      left: 5%;
      top: -70px;
    }
    &:hover {
      border: 1px solid #811c26;
    }
    &:hover~.img-content {
      > img {
        transform: rotate(180deg);
        transition: all 0.3s;
      }
      > div {
        opacity: 0.8;
      }
    }
  }
  > .img-content {
    width: 50%;
    font-size: 16px;
    color: #040000;
    font-family: 'regular';
    box-sizing: border-box;
    padding-left: 3.3%;
    margin-left: 50%;
    > img {
      margin-top: 68px;
    }
    > div {
      margin-left: 9%;
    }
    .title-item {
      margin-top: 20px;
      > div:first-child {
        font-size: 40px;
        margin-right: 30px;
      }
    }
    .size-item {
      margin: 40px 0 20px 0;
    }
    .content-item {
      color: #333;
      margin-left: 0;
    }
  }
}
.collection-item:first-child{
  margin-top: 30px;
}
.even-item {
  flex-direction: row-reverse;
  > .img-content {
    margin-left: 0;
    margin-right: 50%;
    padding-left: 0;
    > img {
      float: right;
      overflow: hidden;
      margin-right: 40px;
    }
    > div {
      margin-left: 0;
      margin-right: 40px;
    }
    .title-item {
      margin-top: 128px;
    }
  }
}
.mobile-collection-item {
  display: block;
  > img {
    width: 100%;
  }
  > .img-content {
    width: 100%;
    margin-left: 0;
    > p:first-child{
      font-size: 16px;
      color: #040000;
      text-align: right;
      > span:first-child {
        margin-right: 0.4rem;
      }
    }
    > p:nth-child(2){
      font-size: 24px;
      color: #4d4b4b;
      text-align: center;
    }
    > .content-item{
      font-size: 16px;
      color: #4d4b4b;
    }
  }
}
.van-popup {
  height: 100%;
  background-color: transparent;
  > img {
    height: 90%;
    margin-top: 5%;
  }
  /deep/.van-popup__close-icon {
    color: #fff;
    font-size: 25px;
    top: 54px;
  }
}
.mobile-pop {
  width: 100%;
  > img {
    width: 100%;
    height: unset;
    margin-top: 50%;
  }
}
</style>
