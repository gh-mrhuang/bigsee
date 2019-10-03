import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/homePage', component: () => import('./page/HomePage.vue') },
    { path: '/xgExhibition', component: () => import('./page/XgExhibition.vue') },
    { path: '/xgCulture', component: () => import('./page/XgCulture.vue') },
    { path: '/xgBoutique', component: () => import('./page/XgBoutique.vue') },
    { path: '/xgNews', component: () => import('./page/XgNews.vue') },
    { path: '/xgAboutUs', component: () => import('./page/XgAboutUs.vue') },
  ]
})
