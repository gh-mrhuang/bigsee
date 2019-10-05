import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/homePage', component: () => import('@/page/HomePage'), alias: '/' },
    { path: '/xgExhibition', component: () => import('@/page/XgExhibition') },
    { path: '/xgCulture', component: () => import('@/page/XgCulture') },
    { path: '/xgBoutique', component: () => import('@/page/XgBoutique') },
    { path: '/xgNews', component: () => import('@/page/XgNews') },
    { path: '/xgAboutUs', component: () => import('@/page/XgAboutUs') },
    { path: '/xgExhibitionDetail', component: () => import('@/page/XgExhibitionDetail'), name:'xgExhibitionDetail' },
    { path: '/xgNewsDetail', component: () => import('@/page/XgNewsDetail'), name:'xgNewsDetail' },
  ]
})
