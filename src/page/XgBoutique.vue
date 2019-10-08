<template>
  <div>

    <div class="chose-card hidden-xs-only">
      <div v-for="(item, index) in iconArr"
           :key="index">
        <div v-if="activeIndex === index">
          <img :src="botiqueCircle"
               class="botiqueCircle">
          <img :src="botiqueSmall"
               class="botiqueSmall">
        </div>
        <span @click="handleTabs(index)">
          {{item.text}}
        </span>
      </div>
    </div>

    <div class="detail-list"
         :class="{'mobile-detail-list':isMobileScreen}">
      <div v-for="(item,index) in listArr"
           :key="index">
        <img :src="item.src"
             alt="">
        <div>
          <div class="detail-list-title">{{item.title}}</div>
          <div class="detail-list-content">{{item.content}}</div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
// TODO 需要换接口部分
import u249 from '@/assets/img/u249.jpg'
import u255 from '@/assets/img/u255.jpg'
import u261 from '@/assets/img/u261.jpg'
import botique8 from '@/assets/img/botique8.png'
import botique9 from '@/assets/img/botique9.png'
import botique10 from '@/assets/img/botique10.png'
import botiqueBack from '@/assets/img/botique_back.png'
import botiqueCircle from '@/assets/img/botique_circle.png'
import botiqueSmall from '@/assets/img/botique_small.png'

export default {
  inject: ['isMobileScreen'],
  data () {
    return {
      u249,
      u255,
      u261,
      botique8,
      botique9,
      botique10,
      botiqueBack,
      botiqueCircle,
      botiqueSmall,
      iconArr: [
        {
          id: 1,
          text: '佛堂人物画'
        },
        {
          id: 2,
          text: '中堂吉祥话'
        },
        {
          id: 3,
          text: '家族肖像画'
        },
        {
          id: 4,
          text: '文人画'
        },
      ],
      listArr: [
        {
          id: 1,
          src: u249,
          title: '佛',
          content: '',
        },
        {
          id: 2,
          src: u261,
          title: '马王爷',
          content: '马王爷既“马神”，名为步，又称“马步”，马之灾神，马王爷历代都有奉祀，以求免灾。马在历史上是耕战的必备，故中国古代对马的崇奉与祭祀起源很早，《古今图书集成﹒神异典》载，早在周代，官⽅就规定了祭祀马神的制度。《孝经》中讲：“房为龙马”既古代传说中的神马瑞马，隋唐制均以四时祭马，宋代以马祖等马神祭典为⼩祀。明代成祖朱棣建马神祠，并由官⽅礼祭，政府还设有太仆寺、⾏太仆寺、苑马寺和群牧监等机构，专门管理马政，并由军队养牧，后则由民众负责养马，凡是未能怀马驹或是将马养瘦者均要受到处罚。',
        },
        {
          id: 3,
          src: u255,
          title: '三菩萨图',
          content: '观世⾳音菩萨代表佛的慈悲，⼤大势⾄至菩萨和⽂文殊菩萨代表佛的智慧.',
        },
      ],
      activeIndex: 0,
    }
  },
  methods: {
    handleTabs (index) {
      this.activeIndex = index
    }
  }
}
</script>

<style lang="scss" scoped>
.chose-card {
  position: fixed;
  top: 209px;
  left: 60px;
  > div {
    margin-top: 20px;
    position: relative;
    > div {
      position: absolute;
      top: -12px;
      left: -41px;
      .botiqueSmall {
        position: absolute;
        top: 24px;
        left: 134px;
      }
      .botiqueCircle {
        position: absolute;
        top: 0px;
        left: 0px;
      }
    }
    > span {
      cursor: pointer;
    }
  }
}
.detail-list {
  .detail-list-title {
    font-size: 40px;
    font-family: "宋体";
  }
  .detail-list-content {
    font-size: 18px;
    font-family: "宋体";
    line-height: 24px;
    text-align: left;
  }
  > div {
    background: #f7f7f7 url("../assets/img/botique_back.png") no-repeat;
    background-size: contain;
    width: 85%;
    height: 1510px;
    margin: 0 auto;
    position: relative;
    margin-bottom: 100px;
    img {
    //   width: 80%;
      height: 1200px;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      z-index: 2;
    }
    > div {
      min-height: 400px;
      border: 1px solid #111;
      position: absolute;
      width: 90%;
      bottom: 10px;
      z-index: 1;
      padding-top: 138px;
      box-sizing: border-box;
      left: 50%;
      transform: translateX(-50%);
    }
  }
  > div:last-child {
    margin-bottom: 0;
  }
}
.mobile-detail-list {
  > div {
    height: 865px;
    margin-bottom: 40px;
    > img {
      height: 700px;
    }
    > div {
      height: 185px;
      bottom: 32px;
      padding-top: 72px;
      min-height: unset;
      overflow: auto;
      padding-bottom: 20px;
    }
  }
}
</style>
