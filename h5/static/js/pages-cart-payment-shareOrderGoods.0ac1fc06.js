(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-cart-payment-shareOrderGoods"],{"0abb":function(t,e,o){var a=o("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 边框颜色 */\n/* 图片加载中颜色 */\n/* 行为相关颜色 */\n/*主题颜色 具体参考   https://ant.design/docs/spec/colors-cn */\n/**微信登录按钮颜色 */\n/**主颜色*/\n/*用于金钱等颜色 */\n/*主题高亮颜色*/\n/*辅助高亮颜色*/\n/*主题高亮背景颜色*/\n/*价格红高亮背景颜色*/\n/*辅助色*/.light-color[data-v-3024513c]{color:#ff6b35}.main-color[data-v-3024513c]{color:#ff3c2a!important}.bg-light-color[data-v-3024513c]{background-color:#ff6b35!important}.bg-light-color[data-v-3024513c] *{background-color:#ff6b35!important}.bg-main-color[data-v-3024513c]{background-color:#ff3c2a!important}.bg-linear-gradient[data-v-3024513c]{background-image:linear-gradient(25deg,#fa123b,#ff6b35,#ff9f28,#ffcc03)}.uni-tabbar .uni-tabbar__icon[data-v-3024513c]{width:20px;height:18px}.flex[data-v-3024513c]{display:flex}.btn[data-v-3024513c]{background-color:#ff6b35;color:#fff;border-width:0;border:none;border-radius:44px;height:44px;box-shadow:none;font-weight:400;font-style:normal;line-height:44px;text-align:center}.btn[data-v-3024513c]::after{border:none}.button-hover[data-v-3024513c]{opacity:.7}.margin[data-v-3024513c]{margin:10px}.tag[data-v-3024513c]{background-color:#f2f2f2;color:#333;height:28px;border-radius:28px;box-shadow:none;font-family:PingFangSC-Regular,PingFang SC,sans-serif;font-weight:400;font-style:normal;line-height:28px;text-align:center;width:90px}.c-content[data-v-3024513c]{background-color:#fff;border-top:1px solid #ebeef5;border-bottom:1px solid #ebeef5}.mt-30[data-v-3024513c]{margin-top:%?30?%}.border-top[data-v-3024513c]{border-top:1px solid #ebeef5}.describe[data-v-3024513c]{color:#909399;font-size:%?24?%;padding:%?30?%}.flex-center[data-v-3024513c]{display:flex;align-items:center;justify-content:center;flex-direction:column}.flex-a-c[data-v-3024513c]{align-items:center}.relative[data-v-3024513c]{position:relative}.wes[data-v-3024513c]{\n  /* 多出部分用省略号表示 , 用于一行 */overflow:hidden;word-wrap:normal;white-space:nowrap;text-overflow:ellipsis}.wes-2[data-v-3024513c]{\n  /* 适用于webkit内核和移动端 */display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;overflow:hidden}.u-countdown[data-v-3024513c]{display:inline-flex;align-items:center}.u-countdown-item[data-v-3024513c]{display:flex;align-items:center;justify-content:center;padding:%?2?%;border-radius:%?6?%;white-space:nowrap;-webkit-transform:translateZ(0);transform:translateZ(0)}.u-countdown-time[data-v-3024513c]{margin:0;padding:0;line-height:1}.u-countdown-colon[data-v-3024513c]{display:flex;justify-content:center;padding:0 %?5?%;line-height:1;align-items:center;padding-bottom:%?4?%}.u-countdown-scale[data-v-3024513c]{-webkit-transform:scale(.9);transform:scale(.9);-webkit-transform-origin:center center;transform-origin:center center}',""]),t.exports=e},2821:function(t,e,o){"use strict";var a=o("9051"),n=o.n(a);n.a},"3ac2":function(t,e,o){"use strict";o.r(e);var a=o("af02"),n=o.n(a);for(var r in a)"default"!==r&&function(t){o.d(e,t,(function(){return a[t]}))}(r);e["default"]=n.a},4263:function(t,e,o){"use strict";o.r(e);var a=o("a761"),n=o("3ac2");for(var r in n)"default"!==r&&function(t){o.d(e,t,(function(){return n[t]}))}(r);o("d56e");var i,s=o("f0c5"),d=Object(s["a"])(n["default"],a["b"],a["c"],!1,null,"674bdb69",null,!1,a["a"],i);e["default"]=d.exports},"5a12":function(t,e,o){"use strict";var a=o("a04b"),n=o.n(a);n.a},"69c0":function(t,e,o){"use strict";var a=o("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=o("5685"),r=a(o("d79d")),i=a(o("ba91")),s={mixins:[i.default],data:function(){return{configs:r.default,show:!0,list:[{color:"#04BE02",title:"微信好友",icon:"weixin-fill",type:0},{color:"#04BE02",title:"朋友圈",icon:"weixin-circle-fill",type:1}]}},props:["thumbnail","goodsName","type","goodsId","link"],methods:{close:function(){this.$emit("close")},copyLink:function(){var t;t=this.link?this.configs.shareLink+this.link:this.configs.shareLink+getCurrentPages()[getCurrentPages().length-1].__page__.fullPath,null===t||void 0===t?t="":t+="";var e=(0,n.h5Copy)(t);!1===e?uni.showToast({title:"不支持"}):uni.showToast({title:"复制成功",icon:"none"})},shareTitle:function(){var t;return"goods"==this.type?t="我发现了一个".concat(this.goodsName,"商品快来跟我一起看看吧"):"shops"==this.type?t="我发现了一个".concat(this.goodsName,"店铺快来跟我一起看看吧"):"pintuan"==this.type?t="我拼了一个".concat(this.goodsName,"快来跟我一起抢购吧!"):"kanjia"==this.type&&(t="请快来帮我砍一刀".concat(this.goodsName)),t}}};e.default=s},7873:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.getReceipt=n,e.getReceiptDetail=r,e.selectedShipMethod=i,e.getOrderList=s,e.getOrderDetail=d,e.cancelOrder=c,e.confirmReceipt=l,e.getPinTuanShare=u;var a=o("9d47");function n(t){return a.http.request({url:"/trade/carts/select/receipt",method:a.Method.GET,needToken:!0,params:t})}function r(t){return a.http.request({url:"/trade/receipt/".concat(t),method:a.Method.GET,needToken:!0})}function i(t){return a.http.request({url:"/trade/carts/shippingMethod",method:a.Method.GET,needToken:!0,params:t})}function s(t){return a.http.request({url:"/order/order",method:a.Method.GET,needToken:!0,params:t})}function d(t){return a.http.request({url:"/order/order/".concat(t),method:a.Method.GET,needToken:!0})}function c(t,e){return a.http.request({url:"/order/order/".concat(t,"/cancel"),method:a.Method.POST,needToken:!0,header:{"content-type":"application/x-www-form-urlencoded"},data:e})}function l(t){return a.http.request({url:"/order/order/".concat(t,"/receiving"),method:a.Method.POST,needToken:!0})}function u(t,e){return a.http.request({url:"promotion/pintuan/share",method:a.Method.GET,needToken:!0,params:{parentOrderSn:t,skuId:e}})}},8273:function(t,e,o){"use strict";o.d(e,"b",(function(){return n})),o.d(e,"c",(function(){return r})),o.d(e,"a",(function(){return a}));var a={uPopup:o("ff01").default,uIcon:o("673b").default},n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("u-popup",{attrs:{mode:"bottom","border-radius":"30",height:"260rpx"},on:{close:function(e){arguments[0]=e=t.$handleEvent(e),t.close.apply(void 0,arguments)}},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[o("v-uni-view",{staticClass:"share-title"},[o("span",[t._v("分享至")])]),o("v-uni-view",{staticClass:"share-list"},[o("v-uni-view",{staticClass:"share-item",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.copyLink()}}},[o("u-icon",{attrs:{color:"#b4aee8",size:"80",name:"share-fill"}}),o("v-uni-view",[t._v(t._s("复制链接"))])],1)],1)],1)},r=[]},"892a":function(t,e,o){"use strict";o.r(e);var a=o("69c0"),n=o.n(a);for(var r in a)"default"!==r&&function(t){o.d(e,t,(function(){return a[t]}))}(r);e["default"]=n.a},9051:function(t,e,o){var a=o("b58b");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=o("4f06").default;n("3ce1cc9c",a,!0,{sourceMap:!1,shadowMode:!1})},"94e6":function(t,e,o){"use strict";o.r(e);var a=o("ea3c"),n=o.n(a);for(var r in a)"default"!==r&&function(t){o.d(e,t,(function(){return a[t]}))}(r);e["default"]=n.a},a04b:function(t,e,o){var a=o("0abb");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=o("4f06").default;n("7c8fae14",a,!0,{sourceMap:!1,shadowMode:!1})},a761:function(t,e,o){"use strict";o.d(e,"b",(function(){return n})),o.d(e,"c",(function(){return r})),o.d(e,"a",(function(){return a}));var a={uCountDown:o("b24e").default},n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return t.flage?o("v-uni-view",{staticClass:"wrapper"},[t.selectedGoods?o("div",{staticClass:"goods"},[o("v-uni-image",{staticClass:"goods-image",attrs:{src:t.selectedGoods.thumbnail,alt:""}}),o("p",{staticClass:"goodsName"},[t._v(t._s(t.selectedGoods.goodsName))]),o("div",{staticClass:"goodsPrice"},[t._v(t._s(t._f("unitPrice")(t.selectedGoods.promotionPrice||t.selectedGoods.price,"￥")))])],1):t._e(),o("div",[o("div",{staticClass:"tips"},[t.master.toBeGroupedNum?o("span",[t._v("还差"),o("span",{staticClass:"num"},[t._v(t._s(t.master.toBeGroupedNum||0))]),t._v("人，赶快邀请好友拼单吧")]):t._e(),t.isBuy&&!t.master.toBeGroupedNum>0?o("span",[t._v("已成功拼团")]):t._e()]),t.isMaster&&!t.isOver?o("div",[t.master.toBeGroupedNum?o("div",{staticClass:"share-user",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.share()}}},[t._v("邀请好友拼团")]):t._e(),o("div",{staticClass:"home",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handleClickHome()}}},[t._v("去首页逛逛")])]):t._e(),t.isMaster||t.isOver||t.isBuy?t._e():o("div",[o("div",{staticClass:"share-user",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toBuy.apply(void 0,arguments)}}},[t._v("参与拼团")])]),t.isMaster||t.isOver||!t.isBuy?t._e():o("div",[o("div",{staticClass:"share-user disabled"},[t._v("已购买该商品")])]),t.isOver?o("div",[o("div",{staticClass:"home",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handleClickHome()}}},[t._v("去首页逛逛")])]):t._e()]),t.isOver?t._e():o("div",{staticClass:"count-down"},[o("u-count-down",{attrs:{"bg-color":"#ededed","hide-zero-day":!0,timestamp:t.timeStamp},on:{end:function(e){arguments[0]=e=t.$handleEvent(e),t.isOver.apply(void 0,arguments)}}})],1),t.data.pintuanMemberVOS?o("div",{staticClass:"user-list"},t._l(t.data.pintuanMemberVOS,(function(e,a){return o("div",{key:a,staticClass:"user-item"},[""==e.orderSn?o("span",{staticClass:"master"},[t._v("团长")]):t._e(),o("v-uni-image",{staticClass:"img",attrs:{src:e.face,alt:""}})],1)})),0):t._e(),t.goodsDetail.id?o("popupGoods",{ref:"popupGoods",attrs:{addr:t.addr,buyMask:t.maskFlag,goodsDetail:t.goodsDetail,goodsSpec:t.goodsSpec},on:{closeBuy:function(e){arguments[0]=e=t.$handleEvent(e),t.closePopupBuy.apply(void 0,arguments)},handleClickSku:function(e){arguments[0]=e=t.$handleEvent(e),t.getGoodsDetail.apply(void 0,arguments)}}}):t._e(),t.shareFlage?o("shares",{attrs:{link:"/pages/cart/payment/shareOrderGoods?sn="+this.routers.sn+"&sku="+this.routers.sku+"&goodsId="+this.routers.goodsId,type:"pintuan",thumbnail:t.data.promotionGoods.thumbnail,goodsName:t.data.promotionGoods.goodsName},on:{close:function(e){arguments[0]=e=t.$handleEvent(e),t.closeShare.apply(void 0,arguments)}}}):t._e()],1):t._e()},r=[]},af02:function(t,e,o){"use strict";var a=o("4ea4");o("4de4"),o("4160"),o("c975"),o("b64b"),o("e25e"),o("ac1f"),o("5319"),o("159b"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,o("96cf");var n=a(o("1da1")),r=a(o("5530")),i=o("d092"),s=o("7873"),d=a(o("bab6")),c=a(o("3ee0")),l=a(o("70f3")),u={data:function(){return{flage:!1,addr:{id:""},maskFlag:!1,timeStamp:0,shareFlage:!1,data:"",isMaster:!0,selectedGoods:"",routers:"",goodsDetail:"",goodsSpec:"",master:"",PromotionList:"",isGroup:!1,isOver:!1,isBuy:!1}},components:{shares:d.default,popupGoods:l.default},watch:{isGroup:function(t){var e=this;if(t)var o=setInterval((function(){e.$refs.popupGoods.buyType="PINTUAN",clearInterval(o)}),100);else this.$refs.popupGoods.buyType=""}},onLoad:function(t){this.routers=t},mounted:function(){this.init(this.routers.sn,this.routers.sku)},methods:{closeShare:function(){this.shareFlage=!1},toBuy:function(){this.maskFlag=!0,this.$refs.popupGoods.parentOrder=(0,r.default)((0,r.default)({},this.master),{},{orderSn:this.routers.sn}),this.$refs.popupGoods.isMask=!0,this.$refs.popupGoods.isClose=!0,this.$refs.popupGoods.buyType="PINTUAN"},share:function(){this.shareFlage=!0},closePopupBuy:function(t){this.maskFlag=!1},init:function(t,e){var o=this;return(0,n.default)(regeneratorRuntime.mark((function a(){var n,r,i,d,l;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,(0,s.getPinTuanShare)(t,e);case 2:n=a.sent,n.data.success&&n.data.result.promotionGoods?(o.flage=!0,o.data=n.data.result,o.selectedGoods=n.data.result.promotionGoods,r=Date.parse(n.data.result.promotionGoods.endTime.replace(/-/g,"/")),i=Date.parse(new Date(r))/1e3,d=Date.parse(new Date)/1e3,o.timeStamp=parseInt(i-d),o.timeStamp<=0?o.isOver=!0:o.isOver=!1,o.master=0!=n.data.result.pintuanMemberVOS.length&&n.data.result.pintuanMemberVOS.filter((function(t){return""==t.orderSn}))[0],c.default.getUserInfo(o.routers.sku,o.routers.goodsId).id==o.master.memberId?o.isMaster=!0:(o.isMaster=!1,o.getGoodsDetail({id:o.routers.sku,goodsId:o.routers.goodsId})),c.default.getUserInfo().id&&(l=n.data.result.pintuanMemberVOS.filter((function(t){return t.memberId==c.default.getUserInfo().id})),0!=l.length?o.isBuy=!0:o.isBuy=!1)):uni.showToast({title:"当前拼团单有误！请联系管理员重试",duration:2e3,icon:"none"});case 4:case"end":return a.stop()}}),a)})))()},getGoodsDetail:function(t){var e=this,o=t.id,a=t.goodsId;uni.showLoading({title:"加载中",mask:!0}),(0,i.getGoods)(o,a).then((function(t){e.goodsDetail=t.data.result.data,e.selectedGoods=t.data.result.data,e.goodsSpec=t.data.result.specs,uni.hideLoading(),e.PromotionList=t.data.result.promotionMap,e.PromotionList&&Object.keys(e.PromotionList).forEach((function(t){0==t.indexOf("PINTUAN")&&(e.isGroup=!0)}))}))},handleClickHome:function(){uni.switchTab({url:"/pages/tabbar/home/index"})}}};e.default=u},b24e:function(t,e,o){"use strict";o.r(e);var a=o("cd81"),n=o("94e6");for(var r in n)"default"!==r&&function(t){o.d(e,t,(function(){return n[t]}))}(r);o("5a12");var i,s=o("f0c5"),d=Object(s["a"])(n["default"],a["b"],a["c"],!1,null,"3024513c",null,!1,a["a"],i);e["default"]=d.exports},b58b:function(t,e,o){var a=o("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 边框颜色 */\n/* 图片加载中颜色 */\n/* 行为相关颜色 */\n/*主题颜色 具体参考   https://ant.design/docs/spec/colors-cn */\n/**微信登录按钮颜色 */\n/**主颜色*/\n/*用于金钱等颜色 */\n/*主题高亮颜色*/\n/*辅助高亮颜色*/\n/*主题高亮背景颜色*/\n/*价格红高亮背景颜色*/\n/*辅助色*/.light-color[data-v-12be4f3e]{color:#ff6b35}.main-color[data-v-12be4f3e]{color:#ff3c2a!important}.bg-light-color[data-v-12be4f3e]{background-color:#ff6b35!important}.bg-light-color[data-v-12be4f3e] *{background-color:#ff6b35!important}.bg-main-color[data-v-12be4f3e]{background-color:#ff3c2a!important}.bg-linear-gradient[data-v-12be4f3e]{background-image:linear-gradient(25deg,#fa123b,#ff6b35,#ff9f28,#ffcc03)}.uni-tabbar .uni-tabbar__icon[data-v-12be4f3e]{width:20px;height:18px}.flex[data-v-12be4f3e]{display:flex}.btn[data-v-12be4f3e]{background-color:#ff6b35;color:#fff;border-width:0;border:none;border-radius:44px;height:44px;box-shadow:none;font-weight:400;font-style:normal;line-height:44px;text-align:center}.btn[data-v-12be4f3e]::after{border:none}.button-hover[data-v-12be4f3e]{opacity:.7}.margin[data-v-12be4f3e]{margin:10px}.tag[data-v-12be4f3e]{background-color:#f2f2f2;color:#333;height:28px;border-radius:28px;box-shadow:none;font-family:PingFangSC-Regular,PingFang SC,sans-serif;font-weight:400;font-style:normal;line-height:28px;text-align:center;width:90px}.c-content[data-v-12be4f3e]{background-color:#fff;border-top:1px solid #ebeef5;border-bottom:1px solid #ebeef5}.mt-30[data-v-12be4f3e]{margin-top:%?30?%}.border-top[data-v-12be4f3e]{border-top:1px solid #ebeef5}.describe[data-v-12be4f3e]{color:#909399;font-size:%?24?%;padding:%?30?%}.flex-center[data-v-12be4f3e]{display:flex;align-items:center;justify-content:center;flex-direction:column}.flex-a-c[data-v-12be4f3e]{align-items:center}.relative[data-v-12be4f3e]{position:relative}.wes[data-v-12be4f3e]{\n  /* 多出部分用省略号表示 , 用于一行 */overflow:hidden;word-wrap:normal;white-space:nowrap;text-overflow:ellipsis}.wes-2[data-v-12be4f3e]{\n  /* 适用于webkit内核和移动端 */display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;overflow:hidden}.share-btn[data-v-12be4f3e]{background:none;font-size:%?24?%;color:#666;display:flex;flex-direction:column;align-items:center}.share-title[data-v-12be4f3e]{position:relative;height:%?90?%;font-size:%?32?%;line-height:%?90?%;text-align:center}.share-title > .share-close[data-v-12be4f3e]{position:absolute;right:0;right:%?20?%;top:%?30?%}uni-button[data-v-12be4f3e]:after{border:none}.share-list[data-v-12be4f3e]{padding:0 %?32?%;display:flex;text-align:center;align-items:center}.share-list > .share-item[data-v-12be4f3e]{width:25%;font-size:%?24?%;color:#666}.share-list > .share-item > *[data-v-12be4f3e]{margin:%?8?% 0}',""]),t.exports=e},ba2c:function(t,e,o){var a=o("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 边框颜色 */\n/* 图片加载中颜色 */\n/* 行为相关颜色 */\n/*主题颜色 具体参考   https://ant.design/docs/spec/colors-cn */\n/**微信登录按钮颜色 */\n/**主颜色*/\n/*用于金钱等颜色 */\n/*主题高亮颜色*/\n/*辅助高亮颜色*/\n/*主题高亮背景颜色*/\n/*价格红高亮背景颜色*/\n/*辅助色*/.light-color[data-v-674bdb69]{color:#ff6b35}.main-color[data-v-674bdb69]{color:#ff3c2a!important}.bg-light-color[data-v-674bdb69]{background-color:#ff6b35!important}.bg-light-color[data-v-674bdb69] *{background-color:#ff6b35!important}.bg-main-color[data-v-674bdb69]{background-color:#ff3c2a!important}.bg-linear-gradient[data-v-674bdb69]{background-image:linear-gradient(25deg,#fa123b,#ff6b35,#ff9f28,#ffcc03)}.uni-tabbar .uni-tabbar__icon[data-v-674bdb69]{width:20px;height:18px}.flex[data-v-674bdb69]{display:flex}.btn[data-v-674bdb69]{background-color:#ff6b35;color:#fff;border-width:0;border:none;border-radius:44px;height:44px;box-shadow:none;font-weight:400;font-style:normal;line-height:44px;text-align:center}.btn[data-v-674bdb69]::after{border:none}.button-hover[data-v-674bdb69]{opacity:.7}.margin[data-v-674bdb69]{margin:10px}.tag[data-v-674bdb69]{background-color:#f2f2f2;color:#333;height:28px;border-radius:28px;box-shadow:none;font-family:PingFangSC-Regular,PingFang SC,sans-serif;font-weight:400;font-style:normal;line-height:28px;text-align:center;width:90px}.c-content[data-v-674bdb69]{background-color:#fff;border-top:1px solid #ebeef5;border-bottom:1px solid #ebeef5}.mt-30[data-v-674bdb69]{margin-top:%?30?%}.border-top[data-v-674bdb69]{border-top:1px solid #ebeef5}.describe[data-v-674bdb69]{color:#909399;font-size:%?24?%;padding:%?30?%}.flex-center[data-v-674bdb69]{display:flex;align-items:center;justify-content:center;flex-direction:column}.flex-a-c[data-v-674bdb69]{align-items:center}.relative[data-v-674bdb69]{position:relative}.wes[data-v-674bdb69]{\n  /* 多出部分用省略号表示 , 用于一行 */overflow:hidden;word-wrap:normal;white-space:nowrap;text-overflow:ellipsis}.wes-2[data-v-674bdb69]{\n  /* 适用于webkit内核和移动端 */display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;overflow:hidden}uni-page-body[data-v-674bdb69]{background:#fff}.over[data-v-674bdb69]{margin:10% 0}.goods[data-v-674bdb69]{display:flex;align-content:center;justify-content:center;flex-direction:column;text-align:center;width:80%;margin:0 auto}.goods-image[data-v-674bdb69]{margin:%?40?% auto;width:%?400?%;height:%?400?%}.goodsName[data-v-674bdb69]{display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;overflow:hidden;font-size:%?30?%;font-weight:700}.goodsPrice[data-v-674bdb69]{margin-top:%?10?%;font-weight:700;font-size:%?40?%;color:#ff3c2a}.master[data-v-674bdb69]{z-index:99;position:absolute;top:0;left:0;background:#ff6b35;padding:0 %?8?%;border-radius:%?10?%;color:#fff}.user-item[data-v-674bdb69]{position:relative;margin:%?20?%}.count-down[data-v-674bdb69]{margin:%?40?% 0;text-align:center}.img[data-v-674bdb69]{border-radius:50%;border:%?2?% solid #ff6b35;width:%?100?%;height:%?100?%}.user-list[data-v-674bdb69]{width:80%;margin:0 auto;display:flex;flex-wrap:wrap;justify-content:flex-start}.tips[data-v-674bdb69]{margin-top:10%;text-align:center;font-size:%?40?%;font-weight:700;margin-bottom:%?100?%}.num[data-v-674bdb69]{color:#ff3c2a;font-size:%?60?%;margin:0 %?10?%}.home[data-v-674bdb69],\n.share-user[data-v-674bdb69]{height:%?80?%;line-height:%?80?%;text-align:center;width:80%;margin:%?30?% auto 0 auto;color:#fff;border-radius:.4em}.share-user[data-v-674bdb69]{background:#ff3c2a}.disabled[data-v-674bdb69]{background:rgba(255,60,42,.2)}.home[data-v-674bdb69]{color:#ff3c2a;border:%?2?% solid #ff3c2a}body.?%PAGE?%[data-v-674bdb69]{background:#fff}',""]),t.exports=e},ba91:function(t,e){t.exports={onLoad:function(){this.$u.mpShare={title:"",path:"",imageUrl:""}},onShareAppMessage:function(){return this.$u.mpShare}}},bab6:function(t,e,o){"use strict";o.r(e);var a=o("8273"),n=o("892a");for(var r in n)"default"!==r&&function(t){o.d(e,t,(function(){return n[t]}))}(r);o("2821");var i,s=o("f0c5"),d=Object(s["a"])(n["default"],a["b"],a["c"],!1,null,"12be4f3e",null,!1,a["a"],i);e["default"]=d.exports},cd81:function(t,e,o){"use strict";var a;o.d(e,"b",(function(){return n})),o.d(e,"c",(function(){return r})),o.d(e,"a",(function(){return a}));var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-uni-view",{staticClass:"u-countdown"},[t.showDays&&(t.hideZeroDay||!t.hideZeroDay&&"0"!=t.d)?o("v-uni-view",{staticClass:"u-countdown-item",style:[t.itemStyle]},[o("v-uni-view",{staticClass:"u-countdown-time",style:[t.letterStyle]},[t._v(t._s(t.d))])],1):t._e(),t.showDays&&(t.hideZeroDay||!t.hideZeroDay&&"0"!=t.d)?o("v-uni-view",{staticClass:"u-countdown-colon",style:{fontSize:t.separatorSize+"rpx",color:t.separatorColor,paddingBottom:"colon"==t.separator?"4rpx":0}},[t._v(t._s("colon"==t.separator?":":"天"))]):t._e(),t.showHours?o("v-uni-view",{staticClass:"u-countdown-item",style:[t.itemStyle]},[o("v-uni-view",{staticClass:"u-countdown-time",style:{fontSize:t.fontSize+"rpx",color:t.color}},[t._v(t._s(t.h))])],1):t._e(),t.showHours?o("v-uni-view",{staticClass:"u-countdown-colon",style:{fontSize:t.separatorSize+"rpx",color:t.separatorColor,paddingBottom:"colon"==t.separator?"4rpx":0}},[t._v(t._s("colon"==t.separator?":":"时"))]):t._e(),t.showMinutes?o("v-uni-view",{staticClass:"u-countdown-item",style:[t.itemStyle]},[o("v-uni-view",{staticClass:"u-countdown-time",style:{fontSize:t.fontSize+"rpx",color:t.color}},[t._v(t._s(t.i))])],1):t._e(),t.showMinutes?o("v-uni-view",{staticClass:"u-countdown-colon",style:{fontSize:t.separatorSize+"rpx",color:t.separatorColor,paddingBottom:"colon"==t.separator?"4rpx":0}},[t._v(t._s("colon"==t.separator?":":"分"))]):t._e(),t.showSeconds?o("v-uni-view",{staticClass:"u-countdown-item",style:[t.itemStyle]},[o("v-uni-view",{staticClass:"u-countdown-time",style:{fontSize:t.fontSize+"rpx",color:t.color}},[t._v(t._s(t.s))])],1):t._e(),t.showSeconds&&"zh"==t.separator?o("v-uni-view",{staticClass:"u-countdown-colon",style:{fontSize:t.separatorSize+"rpx",color:t.separatorColor,paddingBottom:"colon"==t.separator?"4rpx":0}},[t._v("秒")]):t._e()],1)},r=[]},d092:function(t,e,o){"use strict";o("99af"),Object.defineProperty(e,"__esModule",{value:!0}),e.getGoodsMessage=n,e.getGoodsRelated=r,e.getGoods=i,e.getGoodsDistribution=s,e.getGoodsList=d,e.getGoodsListUplog=c,e.getTagGoods=l,e.getPlateformTagGoods=u,e.getCategoryList=f,e.distribution=p,e.applyDistribution=h,e.cash=b,e.cashLog=g,e.distributionOrderList=m,e.distributionGoods=v,e.checkedDistributionGoods=w,e.getMpCode=y,e.getMpScene=x;var a=o("9d47");function n(t){return a.http.request({url:"/goods/goods/get/".concat(t),method:a.Method.GET})}function r(t){return a.http.request({url:"/goods/goods/es/related",method:a.Method.GET,params:t})}function i(t,e){return a.http.request({url:"/goods/goods/sku/".concat(e,"/").concat(t),method:a.Method.GET})}function s(t){return a.http.request({url:"/distribution/distribution/bindingDistribution/".concat(t),method:a.Method.GET})}function d(t){return a.http.request({url:"/goods/goods/es",method:a.Method.GET,params:t})}function c(t){return a.http.request({url:"goods/search/uplog",method:a.Method.GET,params:t})}function l(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"hot",o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:5;return a.http.request({url:"goods/tags/".concat(e,"/goods"),method:a.Method.GET,loading:!1,params:{storeId:t,mark:e,num:o}})}function u(t){return a.http.request({url:"goods/tags/byid/".concat(t),method:a.Method.GET,loading:!1})}function f(t){return a.http.request({url:"/goods/category/get/".concat(t),method:a.Method.GET,loading:!1})}function p(){return a.http.request({url:"/distribution/distribution",method:a.Method.GET})}function h(t){return a.http.request({url:"/distribution/distribution",method:a.Method.POST,params:t})}function b(t){return a.http.request({url:"/distribution/cash",method:a.Method.POST,params:t})}function g(t){return a.http.request({url:"/distribution/cash",method:a.Method.GET,params:t})}function m(t){return a.http.request({url:"/distribution/distribution/distributionOrder",method:a.Method.GET,params:t})}function v(t){return a.http.request({url:"/distribution/goods",method:a.Method.GET,params:t})}function w(t){return a.http.request({url:"/distribution/goods/checked/".concat(t.id),method:a.Method.GET,params:t})}function y(t){return a.http.request({url:"/passport/connect/miniProgram/mp/unlimited",method:a.Method.GET,params:t})}function x(t){return a.http.request({url:"/passport/connect/miniProgram/mp/unlimited/scene?id=".concat(t),method:a.Method.GET})}},d56e:function(t,e,o){"use strict";var a=o("f2b4"),n=o.n(a);n.a},ea3c:function(t,e,o){"use strict";o("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={name:"u-count-down",props:{timestamp:{type:[Number,String],default:0},autoplay:{type:Boolean,default:!0},separator:{type:String,default:"colon"},separatorSize:{type:[Number,String],default:30},separatorColor:{type:String,default:"#303133"},color:{type:String,default:"#303133"},fontSize:{type:[Number,String],default:30},bgColor:{type:String,default:"#fff"},height:{type:[Number,String],default:"auto"},showBorder:{type:Boolean,default:!1},borderColor:{type:String,default:"#303133"},showSeconds:{type:Boolean,default:!0},showMinutes:{type:Boolean,default:!0},showHours:{type:Boolean,default:!0},showDays:{type:Boolean,default:!0},hideZeroDay:{type:Boolean,default:!1}},watch:{timestamp:function(t,e){clearInterval(this.timer),this.start()}},data:function(){return{d:"00",h:"00",i:"00",s:"00",timer:null,seconds:0}},computed:{itemStyle:function(){var t={};return this.height&&(t.height=this.height+"rpx",t.width=this.height+"rpx"),this.showBorder&&(t.borderStyle="solid",t.borderColor=this.borderColor,t.borderWidth="1px"),this.bgColor&&(t.backgroundColor=this.bgColor),t},letterStyle:function(){var t={};return this.fontSize&&(t.fontSize=this.fontSize+"rpx"),this.color&&(t.color=this.color),t}},mounted:function(){this.autoplay&&this.timestamp&&this.start()},methods:{start:function(){var t=this;this.timestamp<=0||(this.seconds=Number(this.timestamp),this.formatTime(this.seconds),this.timer=setInterval((function(){if(t.seconds--,t.$emit("change",t.seconds),t.seconds<0)return t.end();t.formatTime(t.seconds)}),1e3))},formatTime:function(t){t<=0&&this.end();var e=0,o=0,a=0,n=0;e=Math.floor(t/86400),o=Math.floor(t/3600)-24*e;var r=null;r=this.showDays?o:Math.floor(t/3600),a=Math.floor(t/60)-60*o-24*e*60,n=Math.floor(t)-24*e*60*60-60*o*60-60*a,r=r<10?"0"+r:r,a=a<10?"0"+a:a,n=n<10?"0"+n:n,this.d=e,this.h=r,this.i=a,this.s=n},end:function(){clearInterval(this.timer),this.timer=null,this.$emit("end",{})}},beforeDestroy:function(){clearInterval(this.timer),this.timer=null}};e.default=a},f2b4:function(t,e,o){var a=o("ba2c");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=o("4f06").default;n("7f6c0900",a,!0,{sourceMap:!1,shadowMode:!1})}}]);