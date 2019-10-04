<template>
  <div>
    <el-breadcrumb separator-class="el-icon-d-arrow-right" v-if="!isMobileScreen">
      <el-breadcrumb-item to="/">{{$t('user.homePage')}}</el-breadcrumb-item>
      <el-breadcrumb-item to="/xgNews">{{$t('user.xgNews')}}</el-breadcrumb-item>
      <el-breadcrumb-item>{{$t('user.newDetail')}}</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="text-title">{{newsObj.title}}</div>
    <div class="text-time">{{newsObj.time}}</div>
    <div v-html="newsObj.content" class="text-content"></div>
  </div>
</template>

<script>
export default {
  inject: ['isMobileScreen'],
  data() {
    return {
      showId: '',
      newsObj: {
        title: '旭观文化-《有情众生》系列中国文化沉浸式艺术展全球首展-深圳站',
        time: '2019年7月30日',
        content: `中国有着风格独特的文化审美系统。而一种文化的传承并不只是表面复刻传统，而是沿着精神意识的脉络找到在当代的立足点，激活这种文化背后的能量。所谓“传统”，就是活着的文化，复兴传统是为了启发现代人的生活，让他们活得更活泼、更圆满。
                <br><br>
                如何向公众输出我们所继承的精神遗产，这是一个属于每个拥有优秀审美情趣和文化意识的品味以及富有创造力的人所面对的课题。遗憾的是中国美学教育以及感官教育在当下中国的教育体系之中是缺席的。
                运用艺术展览来讲述中国传统美学是一个“转译”的过程，高科技手段与当代艺术语言依然是“形式”的部分，我们试图透过表象去讲述中国文化的“灵魂”和“神韵”，通过一系列作品的设计、展览本身的设计去表达传统质朴的“顺势而为”“天人合一”的宇宙大道。
                我们试图正在做的事情，是用美学与艺术的感官表达，去讲述古老中国曾经信守过的、坚持过的生命理想与美的规则。
                <br><br>
                这个展览从“观”着手作为切入点。一方面是因为我们立足于“绘画”这种视觉艺术，同时“观看”也是隐喻着看待世界的方式与视角，而文化本身，就是一种独特视角所形成价值观的集合。展览用“眼睛”作为线索，由三部分组成：天眼，肉眼以及慧眼。天眼所见的是中国古老神话系统里的关于“无限宇宙”的种种，而肉眼所见是民俗画卷里的“人间秩序”，慧眼所见则是道家佛家的精神肖像。
                我们从“有情众生””走向“宇宙万象”。讲述了“生命有各种不同的修行方式，学会面向不同方式的存在致敬”。进而勾勒出传统文化之中的精神脉络，感受那些曾经鲜活在历史卷轴的众生百态。
                <br><br>
                China traditional aesthetic system is unique and special. The cultural inheritance, it is not just the replica as physical copy of its ancient form, but try to transfer its spirit into a modern version according to the consciousness context, in order to activate the energy flow. The so-called “The revival of tradition"means “to makethe culture alive”, in order to inspire modern people, to make their lives more satisfactory.
                <br><br>  
                How to export our inherited spiritual heritage to the public is a subject faced by everyone  who is excellent in aesthetic taste, cultural awareness and creativity. Unfortunately, theChinese traditional aesthetic and sensory education is absent in the current Chinese education system.
                To tell a story by art languages and exhibition about Chinese traditional aesthetic is a process of interpretation. We try to draw the soul and spirit through the form of new media art by the designing of art works and curation, lead audience into a perceptional journey to perceive the Chinese traditional cosmology and understanding the art of “oneness” and “going with the flow”.
                By the sensory expression of arts, to present the ancient Chinese wisdom about life, the rules of beauty——which has been abided and persevered by our ancestors for thousands of years.
                <br><br>
                This exhibition is based the concept of “The way of seeing”. The collection is based on ancient painting ——visual art; meanwhile, the art of seeing, such as “watching”, “observing” means to form a perspective and view. When we talk about “culture”, actually we’re talking a collective value and certain perspective.Based on the clue of “eyes”, the exhibition is shaped by 3 chapters :Tian yan (mythology perspective); Rou yan (human perspective )and Hui Yan(high conscious perspective), successively talking about “mythology” 、“humanity and society” and “spirituality” in ancient China.
                We’re stepping from “sentient beings” towards to the "The infinite universe”. You look at those faces in different portraits, eventually you find every faces are the same, find they are just different aspects of “the one”, like discovering the unknown past of yourself.
                It is an artistic journey, also a spiritual journey going through the history , by experiencing the charm of traditional culture,  you will meet yourself among the faces of all the sentient beings. `
      },
    }
  },
  created() {
    const { id } = this.$route.query
    this.showId = id
  },
}
</script>

<style lang="scss" scoped>
.text-title {
  font-size: 24px;
  color: #040000;
  margin: 50px 0 20px 0;
}
.text-time {
  font-size: 14px;
  color: #4d4b4b;
  margin-bottom: 40px;
}
.text-content {
  font-size: 16px;
  color: #333;
  text-align: left;
}
</style>
