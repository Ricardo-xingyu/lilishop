(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-order-complain-complainInfo"],{"006e":function(e,t,a){"use strict";a.d(t,"b",(function(){return r})),a.d(t,"c",(function(){return n})),a.d(t,"a",(function(){return o}));var o={uIcon:a("714a").default},r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-uni-view",{staticClass:"u-image",style:[e.wrapStyle,e.backgroundStyle],on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.onClick.apply(void 0,arguments)}}},[e.isError?e._e():a("v-uni-image",{staticClass:"u-image__image",style:{borderRadius:"circle"==e.shape?"50%":e.$u.addUnit(e.borderRadius)},attrs:{src:e.src,mode:e.mode,"lazy-load":e.lazyLoad},on:{error:function(t){arguments[0]=t=e.$handleEvent(t),e.onErrorHandler.apply(void 0,arguments)},load:function(t){arguments[0]=t=e.$handleEvent(t),e.onLoadHandler.apply(void 0,arguments)}}}),e.showLoading&&e.loading?a("v-uni-view",{staticClass:"u-image__loading",style:{borderRadius:"circle"==e.shape?"50%":e.$u.addUnit(e.borderRadius),backgroundColor:this.bgColor}},[e.$slots.loading?e._t("loading"):a("u-icon",{attrs:{name:e.loadingIcon,width:e.width,height:e.height}})],2):e._e(),e.showError&&e.isError&&!e.loading?a("v-uni-view",{staticClass:"u-image__error",style:{borderRadius:"circle"==e.shape?"50%":e.$u.addUnit(e.borderRadius)}},[e.$slots.error?e._t("error"):a("u-icon",{attrs:{name:e.errorIcon,width:e.width,height:e.height}})],2):e._e()],1)},n=[]},"0190":function(e,t,a){"use strict";var o=a("ba72"),r=a.n(o);r.a},"0238":function(e,t,a){var o=a("2fc1");"string"===typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);var r=a("4f06").default;r("7ba8495a",o,!0,{sourceMap:!1,shadowMode:!1})},"04df":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getAfterSale=r,t.applyCancelOrder=n,t.getStoreAfterSaleAddress=i,t.cancelAfterSale=d,t.getAfterSaleList=l,t.getServiceDetail=c,t.addComplain=s,t.clearComplain=u,t.getAfterSaleLog=f,t.getComplain=p,t.getAfterSaleReason=h,t.getClearReason=g,t.getComplainReason=m,t.getComplainDetail=v,t.getAfterSaleInfo=b,t.applyReturn=w,t.fillShipInfo=y;var o=a("75c7");function r(e){return o.http.request({url:"after-sales/refunds",method:o.Method.GET,needToken:!0,loading:!1,params:e})}function n(e){return o.http.request({url:"after-sales/apply/cancel/order",method:o.Method.POST,needToken:!0,params:e})}function i(e){return o.http.request({url:"/order/afterSale/getStoreAfterSaleAddress/".concat(e),method:o.Method.GET,needToken:!0})}function d(e){return o.http.request({url:"/order/afterSale/cancel/".concat(e),method:o.Method.POST,needToken:!0})}function l(e){return o.http.request({url:"/order/afterSale/page",method:o.Method.GET,needToken:!0,params:e})}function c(e){return o.http.request({url:"/order/afterSale/get/".concat(e),method:o.Method.GET,needToken:!0})}function s(e){return o.http.request({url:"/order/complain",method:o.Method.POST,needToken:!0,header:{"Content-Type":"application/x-www-form-urlencoded"},data:e})}function u(e,t){return o.http.request({url:"/order/complain/status/".concat(e),method:o.Method.PUT,needToken:!0,params:t})}function f(e){return o.http.request({url:"/order/afterSale/get/getAfterSaleLog/".concat(e),method:o.Method.GET,needToken:!0})}function p(e){return o.http.request({url:"/order/complain",method:o.Method.GET,needToken:!0,params:e})}function h(e){return o.http.request({url:"/order/afterSale/get/afterSaleReason/".concat(e),method:o.Method.GET,needToken:!0})}function g(){return o.http.request({url:"/order/afterSale/get/afterSaleReason/CANCEL",method:o.Method.GET,needToken:!0})}function m(){return o.http.request({url:"/order/afterSale/get/afterSaleReason/COMPLAIN",method:o.Method.GET,needToken:!0})}function v(e){return o.http.request({url:"/order/complain/".concat(e),method:o.Method.GET,needToken:!0})}function b(e){return o.http.request({url:"/order/afterSale/applyAfterSaleInfo/".concat(e),method:o.Method.GET,needToken:!0})}function w(e,t){return o.http.request({url:"/order/afterSale/save/".concat(e),method:o.Method.POST,header:{"Content-Type":"application/x-www-form-urlencoded"},data:t})}function y(e,t){return o.http.request({url:"/order/afterSale/delivery/".concat(e),method:o.Method.POST,header:{"Content-Type":"application/x-www-form-urlencoded"},data:t})}},"176a":function(e,t,a){"use strict";a.r(t);var o=a("1cce"),r=a.n(o);for(var n in o)"default"!==n&&function(e){a.d(t,e,(function(){return o[e]}))}(n);t["default"]=r.a},"1cce":function(e,t,a){"use strict";a("a9e3"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o={name:"u-image",props:{src:{type:String,default:""},mode:{type:String,default:"aspectFill"},width:{type:[String,Number],default:"100%"},height:{type:[String,Number],default:"auto"},shape:{type:String,default:"square"},borderRadius:{type:[String,Number],default:0},lazyLoad:{type:Boolean,default:!0},showMenuByLongpress:{type:Boolean,default:!0},loadingIcon:{type:String,default:"photo"},errorIcon:{type:String,default:"error-circle"},showLoading:{type:Boolean,default:!0},showError:{type:Boolean,default:!0},fade:{type:Boolean,default:!0},webp:{type:Boolean,default:!1},duration:{type:[String,Number],default:500},bgColor:{type:String,default:"#f3f4f6"}},data:function(){return{isError:!1,loading:!0,opacity:1,durationTime:this.duration,backgroundStyle:{}}},watch:{src:function(e){this.isError=!e}},computed:{wrapStyle:function(){var e={};return e.width=this.$u.addUnit(this.width),e.height=this.$u.addUnit(this.height),e.borderRadius="circle"==this.shape?"50%":this.$u.addUnit(this.borderRadius),e.overflow=this.borderRadius>0?"hidden":"visible",this.fade&&(e.opacity=this.opacity,e.transition="opacity ".concat(Number(this.durationTime)/1e3,"s ease-in-out")),e}},methods:{onClick:function(){this.$emit("click")},onErrorHandler:function(){this.loading=!1,this.isError=!0,this.$emit("error")},onLoadHandler:function(){var e=this;if(this.loading=!1,this.isError=!1,this.$emit("load"),!this.fade)return this.removeBgColor();this.opacity=0,this.durationTime=0,setTimeout((function(){e.durationTime=e.duration,e.opacity=1,setTimeout((function(){e.removeBgColor()}),e.durationTime)}),50)},removeBgColor:function(){this.backgroundStyle={backgroundColor:"transparent"}}}};t.default=o},"2fc1":function(e,t,a){var o=a("24fb");t=o(!1),t.push([e.i,'@charset "UTF-8";\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 边框颜色 */\n/* 图片加载中颜色 */\n/* 行为相关颜色 */\n/*主题颜色 具体参考   https://ant.design/docs/spec/colors-cn */\n/**微信登录按钮颜色 */\n/**主颜色*/\n/*用于金钱等颜色 */\n/*主题高亮颜色*/\n/*辅助高亮颜色*/\n/*主题高亮背景颜色*/\n/*价格红高亮背景颜色*/\n/*辅助色*/.light-color[data-v-7d8c5495]{color:#ff6b35}.main-color[data-v-7d8c5495]{color:#ff3c2a!important}.bg-light-color[data-v-7d8c5495]{background-color:#ff6b35!important}.bg-light-color[data-v-7d8c5495] *{background-color:#ff6b35!important}.bg-main-color[data-v-7d8c5495]{background-color:#ff3c2a!important}.bg-linear-gradient[data-v-7d8c5495]{background-image:linear-gradient(25deg,#fa123b,#ff6b35,#ff9f28,#ffcc03)}.uni-tabbar .uni-tabbar__icon[data-v-7d8c5495]{width:20px;height:18px}.flex[data-v-7d8c5495]{display:flex}.btn[data-v-7d8c5495]{background-color:#ff6b35;color:#fff;border-width:0;border:none;border-radius:44px;height:44px;box-shadow:none;font-weight:400;font-style:normal;line-height:44px;text-align:center}.btn[data-v-7d8c5495]::after{border:none}.button-hover[data-v-7d8c5495]{opacity:.7}.margin[data-v-7d8c5495]{margin:10px}.tag[data-v-7d8c5495]{background-color:#f2f2f2;color:#333;height:28px;border-radius:28px;box-shadow:none;font-family:PingFangSC-Regular,PingFang SC,sans-serif;font-weight:400;font-style:normal;line-height:28px;text-align:center;width:90px}.c-content[data-v-7d8c5495]{background-color:#fff;border-top:1px solid #ebeef5;border-bottom:1px solid #ebeef5}.mt-30[data-v-7d8c5495]{margin-top:%?30?%}.border-top[data-v-7d8c5495]{border-top:1px solid #ebeef5}.describe[data-v-7d8c5495]{color:#909399;font-size:%?24?%;padding:%?30?%}.flex-center[data-v-7d8c5495]{display:flex;align-items:center;justify-content:center;flex-direction:column}.flex-a-c[data-v-7d8c5495]{align-items:center}.relative[data-v-7d8c5495]{position:relative}.wes[data-v-7d8c5495]{\n  /* 多出部分用省略号表示 , 用于一行 */overflow:hidden;word-wrap:normal;white-space:nowrap;text-overflow:ellipsis}.wes-2[data-v-7d8c5495]{\n  /* 适用于webkit内核和移动端 */display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;overflow:hidden}.u-image[data-v-7d8c5495]{position:relative;transition:opacity .5s ease-in-out}.u-image__image[data-v-7d8c5495]{width:100%;height:100%}.u-image__loading[data-v-7d8c5495], .u-image__error[data-v-7d8c5495]{position:absolute;top:0;left:0;width:100%;height:100%;display:flex;align-items:center;justify-content:center;background-color:#f3f4f6;color:#909399;font-size:%?46?%}',""]),e.exports=t},"34a1":function(e,t,a){"use strict";a.r(t);var o=a("006e"),r=a("176a");for(var n in r)"default"!==n&&function(e){a.d(t,e,(function(){return r[e]}))}(n);a("f776");var i,d=a("f0c5"),l=Object(d["a"])(r["default"],o["b"],o["c"],!1,null,"7d8c5495",null,!1,o["a"],i);t["default"]=l.exports},"70a6":function(e,t,a){var o=a("24fb");t=o(!1),t.push([e.i,'@charset "UTF-8";\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 边框颜色 */\n/* 图片加载中颜色 */\n/* 行为相关颜色 */\n/*主题颜色 具体参考   https://ant.design/docs/spec/colors-cn */\n/**微信登录按钮颜色 */\n/**主颜色*/\n/*用于金钱等颜色 */\n/*主题高亮颜色*/\n/*辅助高亮颜色*/\n/*主题高亮背景颜色*/\n/*价格红高亮背景颜色*/\n/*辅助色*/.light-color[data-v-724a50d6]{color:#ff6b35}.main-color[data-v-724a50d6]{color:#ff3c2a!important}.bg-light-color[data-v-724a50d6]{background-color:#ff6b35!important}.bg-light-color[data-v-724a50d6] *{background-color:#ff6b35!important}.bg-main-color[data-v-724a50d6]{background-color:#ff3c2a!important}.bg-linear-gradient[data-v-724a50d6]{background-image:linear-gradient(25deg,#fa123b,#ff6b35,#ff9f28,#ffcc03)}.uni-tabbar .uni-tabbar__icon[data-v-724a50d6]{width:20px;height:18px}.flex[data-v-724a50d6]{display:flex}.btn[data-v-724a50d6]{background-color:#ff6b35;color:#fff;border-width:0;border:none;border-radius:44px;height:44px;box-shadow:none;font-weight:400;font-style:normal;line-height:44px;text-align:center}.btn[data-v-724a50d6]::after{border:none}.button-hover[data-v-724a50d6]{opacity:.7}.margin[data-v-724a50d6]{margin:10px}.tag[data-v-724a50d6]{background-color:#f2f2f2;color:#333;height:28px;border-radius:28px;box-shadow:none;font-family:PingFangSC-Regular,PingFang SC,sans-serif;font-weight:400;font-style:normal;line-height:28px;text-align:center;width:90px}.c-content[data-v-724a50d6]{background-color:#fff;border-top:1px solid #ebeef5;border-bottom:1px solid #ebeef5}.mt-30[data-v-724a50d6]{margin-top:%?30?%}.border-top[data-v-724a50d6]{border-top:1px solid #ebeef5}.describe[data-v-724a50d6]{color:#909399;font-size:%?24?%;padding:%?30?%}.flex-center[data-v-724a50d6]{display:flex;align-items:center;justify-content:center;flex-direction:column}.flex-a-c[data-v-724a50d6]{align-items:center}.relative[data-v-724a50d6]{position:relative}.wes[data-v-724a50d6]{\n  /* 多出部分用省略号表示 , 用于一行 */overflow:hidden;word-wrap:normal;white-space:nowrap;text-overflow:ellipsis}.wes-2[data-v-724a50d6]{\n  /* 适用于webkit内核和移动端 */display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;overflow:hidden}.row[data-v-724a50d6]{display:flex;flex-wrap:wrap;padding:%?26?% %?32?%}.speak-msg[data-v-724a50d6]{padding:%?26?% %?32?%}.speak-msg > span[data-v-724a50d6]{color:#999!important}.admin[data-v-724a50d6]{color:#ff3c2a}.speak-way[data-v-724a50d6]{background:#fff}.wrapper[data-v-724a50d6]{padding:%?16?%}.tips[data-v-724a50d6]{margin:%?40?% %?32?%}',""]),e.exports=t},"9b6b":function(e,t,a){"use strict";a.r(t);var o=a("ddc0"),r=a("e8f2");for(var n in r)"default"!==n&&function(e){a.d(t,e,(function(){return r[e]}))}(n);a("0190");var i,d=a("f0c5"),l=Object(d["a"])(r["default"],o["b"],o["c"],!1,null,"724a50d6",null,!1,o["a"],i);t["default"]=l.exports},ba72:function(e,t,a){var o=a("70a6");"string"===typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);var r=a("4f06").default;r("3cd3efaf",o,!0,{sourceMap:!1,shadowMode:!1})},d12e:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a("04df"),r={data:function(){return{complainDetail:"",statusData:{NO_APPLY:"未申请",APPLYING:"申请中",COMPLETE:"已完成，此时可申请",EXPIRED:"已失效，不可申请",CANCEL:"已取消"}}},onLoad:function(e){this.init(e.id)},methods:{preview:function(e,t){uni.previewImage({current:t,urls:e,longPressActions:{itemList:["保存图片"],success:function(e){},fail:function(e){}}})},init:function(e){var t=this;uni.showLoading({title:"加载中"}),(0,o.getComplainDetail)(e).then((function(e){e.data.success?t.complainDetail=e.data.result:uni.showToast({title:e.data.message,duration:2e3,icon:"none"}),uni.hideLoading()}))}}};t.default=r},ddc0:function(e,t,a){"use strict";a.d(t,"b",(function(){return r})),a.d(t,"c",(function(){return n})),a.d(t,"a",(function(){return o}));var o={uCellGroup:a("e93c").default,uCellItem:a("be1c").default,uImage:a("34a1").default},r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-uni-view",{staticClass:"wrapper"},[a("v-uni-view",{staticClass:"tips"},[e._v("我的投诉信息")]),a("u-cell-group",[a("u-cell-item",{attrs:{arrow:!1,value:e.complainDetail.goodsName,title:"投诉商品"}}),a("u-cell-item",{attrs:{arrow:!1,value:e.statusData[e.complainDetail.complainStatus],title:"投诉状态"}}),a("u-cell-item",{attrs:{arrow:!1,value:e.complainDetail.createTime,title:"投诉时间"}}),a("u-cell-item",{attrs:{arrow:!1,value:e.complainDetail.complainTopic,title:"投诉主题"}}),a("u-cell-item",{attrs:{arrow:!1,value:e.complainDetail.content,title:"投诉内容"}}),e.complainDetail.orderComplaintImages?a("v-uni-view",{staticClass:"row"},e._l(e.complainDetail.orderComplaintImages,(function(t,o){return a("u-image",{key:o,staticStyle:{margin:"0 10rpx"},attrs:{width:"100rpx",height:"100rpx","border-radius":"10",src:t},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.preview(e.complainDetail.orderComplaintImages,o)}}})})),1):e._e()],1),a("v-uni-view",{staticClass:"tips"},[e._v("商家申诉信息")]),a("u-cell-group",[a("u-cell-item",{attrs:{arrow:!1,value:e.complainDetail.appealTime||"暂无",title:"申诉时间"}}),a("u-cell-item",{attrs:{arrow:!1,value:e.complainDetail.appealContent||"暂无",title:"申诉内容"}}),e.complainDetail.appealImagesList?a("v-uni-view",{staticClass:"row"},e._l(e.complainDetail.appealImagesList,(function(t,o){return a("u-image",{key:o,staticStyle:{margin:"0 10rpx"},attrs:{width:"100rpx",height:"100rpx","border-radius":"10",src:t},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.preview(e.complainDetail.appealImagesList,o)}}})})),1):e._e()],1),a("v-uni-view",{staticClass:"tips"},[e._v("对话详情")]),e.complainDetail.orderComplaintCommunications?a("v-uni-view",{staticClass:"speak-way"},e._l(e.complainDetail.orderComplaintCommunications,(function(t,o){return a("v-uni-view",{key:o,staticClass:"speak-msg seller"},[e._v(e._s("PLATFORM"==t.owner?"平台":"BUYER"==t.owner?"买家":"卖家")+"："),a("span",[e._v(e._s(t.content))])])})),1):a("v-uni-view",{staticClass:"speak-way"},[e._v("暂无对话")]),a("v-uni-view",{staticClass:"tips"},[e._v("平台仲裁")]),a("u-cell-group",[a("u-cell-item",{attrs:{arrow:!1,title:"仲裁意见",value:e.complainDetail.arbitrationResult||"暂无"}})],1)],1)},n=[]},e8f2:function(e,t,a){"use strict";a.r(t);var o=a("d12e"),r=a.n(o);for(var n in o)"default"!==n&&function(e){a.d(t,e,(function(){return o[e]}))}(n);t["default"]=r.a},f776:function(e,t,a){"use strict";var o=a("0238"),r=a.n(o);r.a}}]);