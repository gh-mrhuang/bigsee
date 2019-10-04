import Vue from 'vue'

import ElementLocale from 'element-ui/lib/locale'
import { Button, Tabs, TabPane, Backtop, Breadcrumb, BreadcrumbItem } from 'element-ui'
import 'element-ui/lib/theme-chalk/display.css'
import enLocale from 'element-ui/lib/locale/lang/en'
import zhLocale from 'element-ui/lib/locale/lang/zh-CN'

import AwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

import App from './App.vue'
import 'normalize.css/normalize.css' 
import router from './router'
import store from './store'

import VueI18n from 'vue-i18n'
import zh from './local/zh'
import en from './local/en'

import { Popup } from 'vant'

Vue.config.productionTip = false

Vue.use(Button)
    .use(Popup)
    .use(Tabs)
    .use(TabPane)
    .use(AwesomeSwiper)
    .use(Backtop)
    .use(Breadcrumb)
    .use(BreadcrumbItem)

Vue.use(VueI18n)

const i18n = new VueI18n({
  locale: sessionStorage.getItem('locale') || 'zh',
  messages: {
    zh: {
      ...zh,
      ...zhLocale,
    },
    en: {
      ...en,
      ...enLocale,
    },
  },
})
ElementLocale.i18n((key, value) => i18n.t(key, value))

// 配置rem
const remFunc = () => {
  const html = document.getElementsByTagName('html')[0]
  const fontSize = 100 / 660 * innerWidth
  html.style.fontSize = fontSize +'px'
}
remFunc()
window.onresize = () => {
  remFunc()
}

new Vue({
  i18n,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
