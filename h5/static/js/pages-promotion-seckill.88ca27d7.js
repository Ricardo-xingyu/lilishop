(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-promotion-seckill"],{4493:function(e,t,i){e.exports=i.p+"static/img/head-sample.7c68962c.png"},"4a71":function(e,t,i){var a=i("9dc1");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var n=i("4f06").default;n("249c449a",a,!0,{sourceMap:!1,shadowMode:!1})},"4cc4":function(e,t,i){"use strict";var a;i.d(t,"b",(function(){return n})),i.d(t,"c",(function(){return o})),i.d(t,"a",(function(){return a}));var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-uni-view",{staticClass:"sale"},[a("v-uni-view",{staticClass:"sale-head"},[a("v-uni-image",{attrs:{src:i("4493")}})],1),a("v-uni-scroll-view",{attrs:{"scroll-x":!0}},[a("v-uni-view",{staticClass:"index-navs"},[a("v-uni-view",{staticClass:"index-nav-v"},e._l(e.timeLine,(function(t,i){return a("v-uni-view",{key:i,staticClass:"index-nav",class:{"index-nav-active":e.nav==i},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.clickNavigateTime(i)}}},[e._v(e._s(t.timeLine)+":00"),a("v-uni-view",{staticClass:"index-nav-desc"},[e._v(e._s(0===i&&0===t.distanceStartTime?"抢购中":"即将开始"))])],1)})),1)],1),e.timeLine[e.nav]&&e.times?a("v-uni-view",{staticClass:"trailer"},[e._v(e._s(0===e.timeLine[e.nav].distanceStartTime?e.onlyOne?"距结束":"距下一轮":"距开始")+"\n      "+e._s("00"==e.times.hours?"0":e.times.hours)+"小时"+e._s(e.times.minutes)+"分"+e._s(e.times.seconds)+"秒")]):e._e()],1),e.goodsList.length>0?a("v-uni-view",{staticClass:"sale-items"},e._l(e.goodsList,(function(t,i){return a("v-uni-view",{key:i,staticClass:"sale-item"},[a("v-uni-view",{staticClass:"sale-item-img"},[a("v-uni-image",{attrs:{src:t.goodsImage,mode:"aspectFill"}})],1),a("v-uni-view",{staticClass:"sale-item-content"},[a("v-uni-view",{staticClass:"sale-item-title"},[e._v(e._s(t.goodsName)),a("v-uni-view",{staticClass:"sale-item-title-desc"})],1),a("v-uni-view",{staticClass:"sale-item-price"},[a("v-uni-text",{staticClass:"sale-item-price-now"},[e._v("¥"+e._s(e._f("unitPrice")(t.price)))]),a("v-uni-text",{staticClass:"sale-item-price-origin"},[e._v("¥"+e._s(e._f("unitPrice")(t.originalPrice)))])],1),a("v-uni-view",{staticClass:"sale-item-surplus"},[e._v("仅剩"+e._s(t.quantity-t.salesNum)+"件"),a("v-uni-view",{staticClass:"sale-item-surplus-text",style:{width:t.quantity/(t.quantity-t.salesNum)*100+"%"}})],1),a("v-uni-view",{staticClass:"sale-item-btn",on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.navigateToGoodsDetail(t)}}},[e._v(e._s(0===e.timeLine[e.nav].distanceStartTime?t.salesNum===t.quantity?"已售空":"购买":"即将开始"))])],1)],1)})),1):a("v-uni-view",[a("v-uni-view",{staticClass:"nodata"},[a("v-uni-image",{staticStyle:{height:"240rpx",width:"320rpx"},attrs:{src:"/static/nodata.png",alt:""}}),a("div",[e._v("暂无商品")])],1)],1)],1)},o=[]},"82c6":function(e,t,i){"use strict";var a=i("4ea4");i("99af"),i("fb6a"),i("4e82"),i("a9e3"),i("e25e"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,i("96cf");var n=a(i("1da1")),o=i("9db2"),r=a(i("cacc")),s={data:function(){return{nav:0,timeLine:"",resTime:0,time:0,times:{},onlyOne:"",goodsList:[],params:{pageNumber:1,pageSize:10}}},onShow:function(){var e=this;return(0,n.default)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.getTimeLine();case 2:if(e.timeLine){t.next=5;break}return t.next=5,uni.showToast({icon:"none",duration:2e3,title:"今天没有活动，明天再来吧"});case 5:e._setTimeInterval=setInterval((function(){e.time<=0?(clearInterval(e._setTimeInterval),e.getGoodsList(),e.getTimeLine()):(e.times=r.default.countTimeDown(e.time),e.time--)}),1e3);case 6:case"end":return t.stop()}}),t)})))()},onUnload:function(){this._setTimeInterval&&clearInterval(this._setTimeInterval)},methods:{getTimeLine:function(){var e=this;return(0,n.default)(regeneratorRuntime.mark((function t(){var i,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,(0,o.getSeckillTimeLine)();case 2:i=t.sent,i.data.success&&i.data.result.length>0&&(a=i.data.result.sort((function(e,t){return Number(e.timeLine)-Number(t.timeLine)})),e.timeLine=a.slice(0,5),e.resTime=parseInt((new Date).getTime()/1e3),e.onlyOne=1===i.data.result.length,e.diffTime=parseInt((new Date).getTime()/1e3)-e.resTime,e.time=e.timeLine[e.nav].distanceStartTime||e.timeLine[e.nav+1]&&e.timeLine[e.nav+1].distanceStartTime||r.default.theNextDayTime()-e.diffTime,e.times=r.default.countTimeDown(e.time),e.getGoodsList());case 4:case"end":return t.stop()}}),t)})))()},getGoodsList:function(){var e=this;return(0,n.default)(regeneratorRuntime.mark((function t(){var i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.params.timeLine=e.timeLine[e.nav].timeLine,t.next=3,(0,o.getSeckillTimeGoods)(e.params.timeLine);case 3:i=t.sent,i.data.success&&0!=i.data.result.length?e.goodsList=i.data.result:e.goodsList=[];case 5:case"end":return t.stop()}}),t)})))()},navigateToGoodsDetail:function(e){e.sold_num!==e.quantity&&0===this.timeLine[this.nav].distanceStartTime&&uni.navigateTo({url:"/pages/product/goods?id=".concat(e.skuId,"&goodsId=").concat(e.goodsId)})},clickNavigateTime:function(e){this.nav=e,this.goodsList=[],this.diffTime=parseInt((new Date).getTime()/1e3)-this.resTime,this.time=this.timeLine[this.nav].distanceStartTime||this.timeLine[this.nav+1]&&this.timeLine[this.nav+1].distanceStartTime||r.default.theNextDayTime()-this.diffTime,this.times=r.default.countTimeDown(this.time),this.getGoodsList()}}};t.default=s},"8f7e":function(e,t,i){"use strict";i.r(t);var a=i("82c6"),n=i.n(a);for(var o in a)"default"!==o&&function(e){i.d(t,e,(function(){return a[e]}))}(o);t["default"]=n.a},"9db2":function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getLiveList=n,t.getPromotionGroupMember=o,t.getAssembleList=r,t.getPointsCategory=s,t.getPointsGoods=c,t.getPointsGoodsDetail=l,t.getSeckillTimeLine=d,t.getSeckillTimeGoods=u,t.getAllCoupons=m,t.getBargainList=f,t.getBargainDetail=v,t.getBargainActivity=p,t.openBargain=g,t.getBargainLog=h,t.helpBargain=b,t.getMineBargainLog=w;var a=i("6a41");function n(e){return a.http.request({url:"broadcast/studio",method:a.Method.GET,params:e})}function o(e){return a.http.request({url:"promotion/pintuan/".concat(e,"/members"),method:a.Method.GET})}function r(e){return a.http.request({url:"promotion/pintuan",method:a.Method.GET,loading:!1,params:e})}function s(){return a.http.request({url:"/promotion/pointsGoods/category",method:a.Method.GET})}function c(e){return a.http.request({url:"/promotion/pointsGoods",method:a.Method.GET,params:e})}function l(e){return a.http.request({url:"/promotion/pointsGoods/"+e,method:a.Method.GET})}function d(){return a.http.request({url:"promotion/seckill",method:a.Method.GET})}function u(e){return a.http.request({url:"promotion/seckill/".concat(e),method:a.Method.GET})}function m(e){return a.http.request({url:"/promotion/coupon",method:a.Method.GET,params:e})}function f(e){return a.http.request({url:"/promotion/kanjiaGoods",method:a.Method.GET,params:e})}function v(e){return a.http.request({url:"/promotion/kanjiaGoods/".concat(e),method:a.Method.GET})}function p(e){return a.http.request({url:"/promotion/kanjiaGoods/getKanjiaActivity",method:a.Method.POST,params:e})}function g(e){return a.http.request({url:"/promotion/kanjiaGoods",method:a.Method.POST,header:{"content-type":"application/x-www-form-urlencoded"},data:e})}function h(e){return a.http.request({url:"/promotion/kanjiaGoods/getKanjiaActivity/logs",method:a.Method.GET,data:e})}function b(e){return a.http.request({url:"promotion/kanjiaGoods/help/".concat(e),method:a.Method.POST})}function w(e){return a.http.request({url:"/promotion/kanjiaGoods/kanjiaActivity/mine/",method:a.Method.GET,params:e})}},"9dc1":function(e,t,i){var a=i("24fb");t=a(!1),t.push([e.i,'@charset "UTF-8";\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 边框颜色 */\n/* 图片加载中颜色 */\n/* 行为相关颜色 */\n/*主题颜色 具体参考   https://ant.design/docs/spec/colors-cn */\n/**微信登录按钮颜色 */\n/**主颜色*/\n/*用于金钱等颜色 */\n/*主题高亮颜色*/\n/*辅助高亮颜色*/\n/*主题高亮背景颜色*/\n/*价格红高亮背景颜色*/\n/*辅助色*/.light-color[data-v-b95ae9c2]{color:#ff6b35}.main-color[data-v-b95ae9c2]{color:#ff3c2a!important}.bg-light-color[data-v-b95ae9c2]{background-color:#ff6b35!important}.bg-light-color[data-v-b95ae9c2] *{background-color:#ff6b35!important}.bg-main-color[data-v-b95ae9c2]{background-color:#ff3c2a!important}.bg-linear-gradient[data-v-b95ae9c2]{background-image:linear-gradient(25deg,#fa123b,#ff6b35,#ff9f28,#ffcc03)}.uni-tabbar .uni-tabbar__icon[data-v-b95ae9c2]{width:20px;height:18px}.flex[data-v-b95ae9c2]{display:flex}.btn[data-v-b95ae9c2]{background-color:#ff6b35;color:#fff;border-width:0;border:none;border-radius:44px;height:44px;box-shadow:none;font-weight:400;font-style:normal;line-height:44px;text-align:center}.btn[data-v-b95ae9c2]::after{border:none}.button-hover[data-v-b95ae9c2]{opacity:.7}.margin[data-v-b95ae9c2]{margin:10px}.tag[data-v-b95ae9c2]{background-color:#f2f2f2;color:#333;height:28px;border-radius:28px;box-shadow:none;font-family:PingFangSC-Regular,PingFang SC,sans-serif;font-weight:400;font-style:normal;line-height:28px;text-align:center;width:90px}.c-content[data-v-b95ae9c2]{background-color:#fff;border-top:1px solid #ebeef5;border-bottom:1px solid #ebeef5}.mt-30[data-v-b95ae9c2]{margin-top:%?30?%}.border-top[data-v-b95ae9c2]{border-top:1px solid #ebeef5}.describe[data-v-b95ae9c2]{color:#909399;font-size:%?24?%;padding:%?30?%}.flex-center[data-v-b95ae9c2]{display:flex;align-items:center;justify-content:center;flex-direction:column}.flex-a-c[data-v-b95ae9c2]{align-items:center}.relative[data-v-b95ae9c2]{position:relative}.wes[data-v-b95ae9c2]{\n  /* 多出部分用省略号表示 , 用于一行 */overflow:hidden;word-wrap:normal;white-space:nowrap;text-overflow:ellipsis}.wes-2[data-v-b95ae9c2]{\n  /* 适用于webkit内核和移动端 */display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;overflow:hidden}.sale[data-v-b95ae9c2]{width:100%;min-height:100vh;background-color:#f7f7f7}.nodata[data-v-b95ae9c2]{flex-direction:column;display:flex;width:100%;justify-content:center;align-items:center;margin-top:%?40?%}.nodata > div[data-v-b95ae9c2]{font-size:%?24?%;margin-top:%?20?%;color:#666}.sale-head uni-image[data-v-b95ae9c2]{width:100%;height:%?280?%}.sale-items[data-v-b95ae9c2]{padding-top:%?20?%;display:-webkit-box;display:-webkit-flex;display:flex;align-items:center;flex-direction:column}.sale-item[data-v-b95ae9c2]{width:%?710?%;height:%?226?%;padding-left:%?20?%;margin-bottom:%?10?%;border-radius:%?12?%;background-color:#fff;position:relative;display:-webkit-box;display:-webkit-flex;display:flex;align-items:center}.sale-item-img[data-v-b95ae9c2]{margin-right:%?20?%}.sale-item-img uni-image[data-v-b95ae9c2]{width:%?186?%;height:%?186?%;border-radius:%?8?%}.sale-item-content[data-v-b95ae9c2]{line-height:2em}.sale-item-title[data-v-b95ae9c2]{display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;overflow:hidden;line-height:1.5;font-size:%?28?%;color:#333}.sale-item-title-desc[data-v-b95ae9c2]{font-size:%?22?%;color:#999}.sale-item-price[data-v-b95ae9c2]{font-size:%?22?%;color:999}.sale-item-price-now[data-v-b95ae9c2]{font-size:%?40?%;color:#ff5a10;margin:0 %?10?%}.sale-item-price-origin[data-v-b95ae9c2]{font-size:%?20?%;color:#999;-webkit-text-decoration-line:line-through;text-decoration-line:line-through;text-decoration:line-through}.sale-item-surplus[data-v-b95ae9c2]{border:%?2?% solid #22b28c;border-radius:12px;width:%?166?%;color:#1fb18a;font-size:%?20?%;position:relative;text-align:center;z-index:2;height:%?32?%;line-height:%?28?%;overflow:hidden}.sale-item-surplus-text[data-v-b95ae9c2]{width:%?166?%;background:#eaf7f5;position:absolute;top:0;left:0;z-index:-1;height:100%}.sale-item-btn[data-v-b95ae9c2]{position:absolute;right:%?20?%;bottom:%?20?%;padding:0 %?20?%;height:%?60?%;background-color:#1abc9c;border-radius:%?10?%;font-size:%?25?%;color:#fff;display:-webkit-box;display:-webkit-flex;display:flex;justify-content:center;align-items:center}.trailer[data-v-b95ae9c2]{height:%?100?%;background:#fff;display:-webkit-box;display:-webkit-flex;display:flex;justify-content:center;align-items:center;font-size:%?22?%;color:#666;box-sizing:border-box;position:relative;z-index:0}.index-navs[data-v-b95ae9c2]{background-color:#f7f7f7;display:-webkit-box;display:-webkit-flex;display:flex;align-items:center;justify-content:space-between}.index-nav-v[data-v-b95ae9c2]{display:-webkit-box;display:-webkit-flex;display:flex;justify-content:center;align-items:center;position:relative}.index-nav[data-v-b95ae9c2]{font-size:%?28?%;display:-webkit-box;display:-webkit-flex;display:flex;justify-content:center;align-items:center;width:%?150?%;flex-direction:column;color:#bababa;height:%?115?%;line-height:1em;position:relative}.index-nav-active[data-v-b95ae9c2]{background-image:url(/static/seckill/active.png);background-size:100% %?115?%;background-repeat:no-repeat;color:#fff;position:relative;z-index:30}.index-nav-active .index-nav-desc[data-v-b95ae9c2]{color:#fff}.index-nav-desc[data-v-b95ae9c2]{margin-top:%?8?%;font-size:%?22?%;color:#bababa}',""]),e.exports=t},cc2e:function(e,t,i){"use strict";var a=i("4a71"),n=i.n(a);n.a},e49e:function(e,t,i){"use strict";i.r(t);var a=i("4cc4"),n=i("8f7e");for(var o in n)"default"!==o&&function(e){i.d(t,e,(function(){return n[e]}))}(o);i("cc2e");var r,s=i("f0c5"),c=Object(s["a"])(n["default"],a["b"],a["c"],!1,null,"b95ae9c2",null,!1,a["a"],r);t["default"]=c.exports}}]);