import Vue from 'vue'
import ElementLocale from 'element-ui/lib/locale'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import 'normalize.css/normalize.css' 
import router from './router'
import store from './store'
import VueI18n from 'vue-i18n'
import zh from './local/zh'
import en from './local/en'

Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.use(VueI18n)
const i18n = new VueI18n({
  locale: sessionStorage.getItem('locale') || 'zh',
  messages: {
    zh,
    en,
  },
})
ElementLocale.i18n((key, value) => i18n.t(key, value))

// 配置rem
const remFunc = () => {
  const html = document.getElementsByTagName('html')[0]
  const fontSize = 100 / 640 * innerWidth
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
