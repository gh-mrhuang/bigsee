(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1b85cf9a"],{"184f":function(t,i,e){"use strict";var n=e("e8b9"),s=e.n(n);s.a},"27dd":function(t,i,e){"use strict";var n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"other-detail",class:{"mobile-other-detail":t.isMobileScreen}},[e("div",{staticClass:"hidden-sm-and-up mobile-detail-title",on:{click:t.handleRouter}},[e("img",{attrs:{src:t.titleImg,alt:""}}),e("span",[t._v(t._s(t.xgTitle||t.$t("user.xgName"))+" "),e("i",{staticClass:"circle"}),t._v(" "+t._s(t.title))]),e("img",{staticClass:"titleImg-right",attrs:{src:t.titleImg,alt:""}})]),e("div",{staticClass:"hidden-xs-only PC-detial",on:{click:t.handleRouter}},[e("span",[t._v(t._s(t.xgTitle||t.$t("user.xgName"))+" "),e("i",{staticClass:"circle"}),t._v(" "+t._s(t.title))])]),e("div",{staticClass:"show-more"},[e("span",{staticClass:"hidden-xs-only"},[t._v(t._s(t.name))]),t.showMore?e("span",{staticClass:"see-more",on:{click:t.handleRouter}},[t._v("\n      "+t._s(t.$t("user.seeMore"))+"\n    ")]):t._e()]),t._t("default")],2)},s=[],c=e("8e8b"),a=e.n(c),l={inject:["isMobileScreen"],props:{title:{type:String,default:""},name:{type:String,default:"Exhibition"},showMore:{type:Boolean,default:!1},xgTitle:{type:String,default:""},routeName:{type:String,default:""}},data:function(){return{titleImg:a.a}},methods:{handleRouter:function(){this.$router.push(this.routeName)}}},o=l,r=(e("d889"),e("2877")),d=Object(r["a"])(o,n,s,!1,null,"092b9604",null);i["a"]=d.exports},"2cb4":function(t,i,e){"use strict";var n=e("82e4"),s=e.n(n);s.a},3014:function(t,i,e){"use strict";e.r(i);var n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",[e("div",{staticClass:"homenPage"},[e("div",{staticClass:"swipe-box"},[e("Swipe",{attrs:{"swipe-arr":t.swipeArr}})],1),e("XgHomeDetail",{attrs:{showMore:"",title:t.$t("user.xgExhibitionSpecil"),routeName:"xgExhibition"}},[e("img",{staticClass:"xgExhibitionSpecil",class:{"mobile-exhibitionImg":t.isMobileScreen},attrs:{src:t.exhibitionImg}})]),e("XgHomeDetail",{attrs:{title:t.$t("user.xgCultureSpecil"),name:"Goods",routeName:"xgCulture"}},[t.isMobileScreen?e("div",[e("Swipe",{attrs:{"swipe-arr":t.goodsArr,isNeedPagination:!1},scopedSlots:t._u([{key:"default",fn:function(i){return[e("div",{staticClass:"text-center"},[e("img",{staticClass:"arrows",attrs:{src:t.arrowsImg}}),t._v("\n              "+t._s(i.parentContent.title)+"\n              "),e("img",{staticClass:"img-right",attrs:{src:t.arrowsImg}})]),e("div",{staticClass:"text-center"},[t._v(t._s(i.parentContent.content))])]}}])})],1):e("div",{staticClass:"fixed-banner mobile-exhibitionImg"},t._l(t.goodsArr,(function(i,n){return e("div",{key:n,staticClass:"fixed-banner-content",staticStyle:{position:"relative"}},[e("img",{attrs:{src:i.src,alt:""}}),e("div",{staticClass:"fixed-banner-text"},[e("div",[t._v("\n              "+t._s(i.title)+"\n            ")]),e("div",[t._v(t._s(i.content))])])])})),0)]),e("XgHomeDetail",{attrs:{title:t.$t("user.xgBoutiqueSpecil"),name:"Collection",routeName:"xgBoutique"}},[e("CollectionItem")],1)],1),e("el-backtop",{attrs:{bottom:t.isMobileScreen?282:100,right:10}},[e("i",{staticClass:"el-icon-caret-top"})])],1)},s=[],c=e("6344"),a=e("27dd"),l=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",[t._l(t.collectionArr,(function(i,n){return e("div",{key:i.id,staticClass:"collection-item",class:{"mobile-collection-item":t.isMobileScreen,"even-item":n%2===1&&!t.isMobileScreen}},[t.isMobileScreen?e("img",{attrs:{src:i.src},on:{click:function(e){return t.handlePop(i.src)}}}):e("div",{staticClass:"img-hover"},[e("img",{attrs:{src:i.src},on:{click:function(e){return t.handlePop(i.src)}}})]),t.isMobileScreen?e("div",{staticClass:"mobile-title-item img-content"},[e("p",[e("span",[t._v(t._s(t.$t("user.sizeInfo"))+"："+t._s(i.size))]),e("span",[t._v(t._s(i.dynasty))])]),e("p",{staticClass:"mobile-name"},[t._v("\n        "+t._s(i.name)+"\n      ")]),e("div",{staticClass:"content-item"},[t._v("\n        "+t._s(i.content)+"\n      ")])]):e("div",{staticClass:"img-content"},[e("img",{staticClass:"small-rect",attrs:{src:t.collectionRect,alt:""}}),e("div",{staticClass:"PC-item"},[e("div",{staticClass:"title-item"},[e("div",[t._v(t._s(i.name))]),e("div",[t._v(t._s(i.dynasty))])]),e("p",{staticClass:"size-item"},[t._v("\n          "+t._s(t.$t("user.sizeInfo"))+"："+t._s(i.size)+"\n        ")]),e("p",{staticClass:"content-item"},[t._v("\n          "+t._s(i.content)+"\n        ")])])])])})),e("van-popup",{class:{"mobile-pop":t.isMobileScreen},attrs:{closeable:!0},model:{value:t.popShow,callback:function(i){t.popShow=i},expression:"popShow"}},[e("img",{attrs:{src:t.popSrc,alt:""}})])],2)},o=[],r=e("5349"),d=e.n(r),p=e("66d2"),g=e.n(p),u=e("44a9"),A=e.n(u),b=e("891d"),m=e.n(b),I=e("faa4"),x=e.n(I),v=e("4f0f"),w=e.n(v),M={inject:["isMobileScreen"],props:{},data:function(){return{collectionArr:[{id:1,src:d.a,name:"药佛爷",dynasty:"xx 朝代",size:"xxxxxxx",content:"药师琉璃光如来，又译为药师琉璃光王佛，简称药师如来、琉璃光佛、消灾延寿药师佛，为东方净琉璃世界之教主。药师，比喻能治众生贪、瞋、痴的医师；以琉璃为名，乃取琉璃之光明透彻以喻国土清静无染。"},{id:2,src:g.a,name:"三菩萨图",dynasty:"xx 朝代",size:"xxxxxxx",content:"图依次为⼤势⾄菩萨，观⾳菩萨，⽂殊菩萨。 观世⾳音菩萨代表佛的慈悲，⼤大势⾄至菩萨和⽂文殊菩 萨代表佛的智慧。"},{id:3,src:A.a,name:"马王爷",dynasty:"xx 朝代",size:"xxxxxxx",content:"马王爷既“马神”，名为步，又称“马步”，马之灾神\n                    马王爷历代都有奉祀，以求免灾。"},{id:4,src:m.a,name:"福禄寿",dynasty:"xx朝代",size:"xxxxxxx",content:"三星也是许多⺠民间绘画的题材，常⻅见福星⼿手拿⼀一个“福”字，禄星捧着⾦元宝，寿星托着寿桃、拄着拐杖。另外还有⼀一种象征画法，画上蝙蝠、梅花鹿、寿桃，⽤用它们的谐⾳音来表达福、禄、寿的含义。"},{id:5,src:x.a,name:"寿星",dynasty:"xx朝代",size:"xxxxxxx",content:"也称“南极⽼人星君”，星名，是古代神话传说中的⻓长寿之神，也是道教中的神仙，本为恒星名，为福、禄、\n                    寿三星之⼀一，“寿星，⻆角亢也”。列为⼆二⼗十⼋八宿之⻓长，故⽈曰寿。\n                    "}],collectionRect:w.a,popSrc:"",popShow:!1}},methods:{handlePop:function(t){this.popSrc=t,this.popShow=!0}}},R=M,S=(e("2cb4"),e("2877")),N=Object(S["a"])(R,l,o,!1,null,"d87910a6",null),G=N.exports,h=e("91b6"),Z=e.n(h),C=e("d22d"),E=e.n(C),y=e("d99f"),j=e.n(y),f=e("86da"),k=e.n(f),D=e("d409"),U=e.n(D),Q=e("aed4"),J=e.n(Q),Y=e("d31d"),z=e.n(Y),B=e("8b7c"),X=e.n(B),F={inject:["isMobileScreen"],components:{Swipe:c["a"],XgHomeDetail:a["a"],CollectionItem:G},data:function(){return{exhibitionImg:k.a,arrowsImg:Z.a,goodsArr:[{id:1,src:U.a,title:"图片标题",content:"文案文案文案"},{id:2,src:J.a,title:"图片标题",content:"文案文案文案"},{id:3,src:z.a,title:"图片标题",content:"文案文案文案"},{id:4,src:X.a,title:"图片标题",content:"文案文案文案"}],swipeArr:[{id:1,src:E.a},{id:2,src:j.a}]}}},L=F,T=(e("184f"),Object(S["a"])(L,n,s,!1,null,"85447a12",null));i["default"]=T.exports},"44a9":function(t,i,e){t.exports=e.p+"public/img/collection-item3.487485c0.png"},"4f0f":function(t,i){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAAAoCAYAAAB+Qu3IAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoxODQ0MTUzQkUyNUYxMUU5QkI1NkQxNUEwRTJEOTcyOCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoxODQ0MTUzQ0UyNUYxMUU5QkI1NkQxNUEwRTJEOTcyOCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjE4NDQxNTM5RTI1RjExRTlCQjU2RDE1QTBFMkQ5NzI4IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjE4NDQxNTNBRTI1RjExRTlCQjU2RDE1QTBFMkQ5NzI4Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+dVawfQAAAJ9JREFUeNrs2sENgzAMQNEYMUZ7hS0rtVtyZhD3AitgKX5/gYiniBCZ+L62HL2Kz3k8vuh6L94EuWxTLUOgQQs0aNACPVFrx4f+vfdW0Nlp3eodHQXIFbfg9I52GIIWaNCgEYAGLdCgQQs0aIEGDVqgJ+qesLQaK1VBRyFyl58rR2Q+v6muKXQnaDNDhyFogQYt0KDnvBmWfV92gf4LMADGBBPeN3bS+AAAAABJRU5ErkJggg=="},5349:function(t,i,e){t.exports=e.p+"public/img/collection-item1.c8fe09e0.png"},6344:function(t,i,e){"use strict";var n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("swiper",{ref:"swipe",attrs:{options:t.swiperOption}},[t._l(t.swipeArr,(function(i){return e("swiper-slide",{key:i.id},[e("img",{attrs:{src:i.src,alt:""},on:{click:function(e){return t.itemClick(i)}}}),t._t("default",null,{parentContent:{title:i.title,content:i.content}})],2)})),e("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2)},s=[],c={props:{swipeArr:{type:Array,default:function(){return[]}},isNeedPagination:{type:Boolean,default:!0}},data:function(){return{swiperOption:{loop:!0,autoplay:{disableOnInteraction:!1,delay:3e3}},index:0}},created:function(){this.isNeedPagination&&this.$set(this.swiperOption,"pagination",{el:".swiper-pagination",clickable:!0})},methods:{itemClick:function(t){this.$emit("parent-click",t)}}},a=c,l=(e("b988"),e("2877")),o=Object(l["a"])(a,n,s,!1,null,"e627ccbc",null);i["a"]=o.exports},"66d2":function(t,i,e){t.exports=e.p+"public/img/collection-item2.fa25a417.png"},"82e4":function(t,i,e){},"86da":function(t,i,e){t.exports=e.p+"public/img/exhibition_img.10227ac9.jpg"},"891d":function(t,i,e){t.exports=e.p+"public/img/collection-item4.c21649df.png"},"8b7c":function(t,i,e){t.exports=e.p+"public/img/goods4.a116181f.png"},"8e8b":function(t,i){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACkAAAAeCAYAAACxHzfjAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo3MUIzMTI0NEUzQTIxMUU5QkJGNEE4QzRCRUI5MDlGRSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo3MUIzMTI0NUUzQTIxMUU5QkJGNEE4QzRCRUI5MDlGRSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjcxQjMxMjQyRTNBMjExRTlCQkY0QThDNEJFQjkwOUZFIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjcxQjMxMjQzRTNBMjExRTlCQkY0QThDNEJFQjkwOUZFIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+e8KSHwAAAd1JREFUeNrslztIA0EURXeT+I8/8IcoiPgDEdIIClqlsLMQFO3EUiGVpajRVixsLCwU0tiI2IiFtSBYKIIgWAgWahMwGqMhyXoH7sIwLFlS7GaFfXDYzZs35PLmzkyix7sGUpqmzYNzrQyx/vJoWxMA9aBC83AE+DT+g0jNF+mL9EX6In2RRUXmvCwyxOcJSFuM6+ALXIEF5vbANK9TEXnwAWbBrVMil0EdCCpj4qr8BUtgRMoPcQXivPM7wCqodbKT+zY1w2BCscgDOyqinSKNcm6cguLZrCKo4IYnF6XlNiw8GQGtIMZcL/Mx1rdJtY6JPGSnPhVfGuxSmPlN5s0Ns8H5YuM8g4zTu3sOnFpsHiHgCIzSmyIu2bWoVK+z1lGROUmUGj9KPistbV5zIUKKn5rBNj1qjo2DFpDg5wjrE7SEQavscNkdE2lGA1gBTyBJAU2gCvRTXJi1fZxfQyscuyXSPE5mwD3fD8AYEXFBsVNS95NueNLqOpTf5fM0qIxXu+VJNXpAiu+NNge27rZI8wvPlPyNF34FmfFG76ndSXlB5Ld0Bl7bzBFnaqVFPu20yMki/lSjE7xb5KMcKym2ugftSnJC2CtYK+GvhLiB7pQ7Xhzmuw41MvMnwABHCFpSVSjKIAAAAABJRU5ErkJggg=="},"91b6":function(t,i){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAiCAYAAACqVHINAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoyMkFGRjM4QUU1REQxMUU5QUI5Q0M5QjJGNkQ5OEFGMSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoyMkFGRjM4QkU1REQxMUU5QUI5Q0M5QjJGNkQ5OEFGMSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjIyQUZGMzg4RTVERDExRTlBQjlDQzlCMkY2RDk4QUYxIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjIyQUZGMzg5RTVERDExRTlBQjlDQzlCMkY2RDk4QUYxIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+IbK/RQAAAR5JREFUeNq01s0KwjAMAOCs9jE8+0geHHjwJdST7uT2EgqKivqMY3bSQphb0vSnEOwo8pGQ/hTVfAGRY2uiIdaPKgFQU4CJg8oN9BOVGwhFHNAyQBuKYGDDAGUIMgSuDPCSIsFAP3QCABCwMvEeLqoEAFAAh0iAcgqgECnwosqhIwCgSkRlIgHABxgiUsB7qNyAQ7ICDinQdwcZhkZH9snExc5vqREYgYqUZcP7BENnO7+m7C4M7U3MLLRm/r+UZhKS0cNnU04d9b7QzAei7pNkEHdpSaF+n32kl5ZvM1R2/TnWDNqzC7mMjuga/iudFrT7GAQEVIQgDursLwfdQxFAL/iaeEFC7DPVQTvmLVzFIiJIR559DbP+K91XgAEAI7lzKMvHDLUAAAAASUVORK5CYII="},a7ba:function(t,i,e){},aed4:function(t,i,e){t.exports=e.p+"public/img/goods2.783f0586.png"},b988:function(t,i,e){"use strict";var n=e("dcfd"),s=e.n(n);s.a},d22d:function(t,i,e){t.exports=e.p+"public/img/banner.1a4a87da.png"},d31d:function(t,i,e){t.exports=e.p+"public/img/goods3.f33cd40d.png"},d409:function(t,i,e){t.exports=e.p+"public/img/goods1.3acd6e58.png"},d889:function(t,i,e){"use strict";var n=e("a7ba"),s=e.n(n);s.a},d99f:function(t,i,e){t.exports=e.p+"public/img/banner2.2fba5002.png"},dcfd:function(t,i,e){},e8b9:function(t,i,e){},faa4:function(t,i,e){t.exports=e.p+"public/img/collection-item8.7a51b8b4.png"}}]);
//# sourceMappingURL=chunk-1b85cf9a.da39cc57.js.map