(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-order-afterSales-afterSalesSelect"],{"0c2d":function(e,t,a){"use strict";a.r(t);var o=a("6fb9"),n=a("437a");for(var r in n)"default"!==r&&function(e){a.d(t,e,(function(){return n[e]}))}(r);a("b75c");var i,d=a("f0c5"),c=Object(d["a"])(n["default"],o["b"],o["c"],!1,null,"146de9bc",null,!1,o["a"],i);t["default"]=c.exports},1891:function(e,t,a){"use strict";a.d(t,"b",(function(){return n})),a.d(t,"c",(function(){return r})),a.d(t,"a",(function(){return o}));var o={uIcon:a("9ae2").default},n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-uni-view",{staticClass:"u-image",style:[e.wrapStyle,e.backgroundStyle],on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.onClick.apply(void 0,arguments)}}},[e.isError?e._e():a("v-uni-image",{staticClass:"u-image__image",style:{borderRadius:"circle"==e.shape?"50%":e.$u.addUnit(e.borderRadius)},attrs:{src:e.src,mode:e.mode,"lazy-load":e.lazyLoad},on:{error:function(t){arguments[0]=t=e.$handleEvent(t),e.onErrorHandler.apply(void 0,arguments)},load:function(t){arguments[0]=t=e.$handleEvent(t),e.onLoadHandler.apply(void 0,arguments)}}}),e.showLoading&&e.loading?a("v-uni-view",{staticClass:"u-image__loading",style:{borderRadius:"circle"==e.shape?"50%":e.$u.addUnit(e.borderRadius),backgroundColor:this.bgColor}},[e.$slots.loading?e._t("loading"):a("u-icon",{attrs:{name:e.loadingIcon,width:e.width,height:e.height}})],2):e._e(),e.showError&&e.isError&&!e.loading?a("v-uni-view",{staticClass:"u-image__error",style:{borderRadius:"circle"==e.shape?"50%":e.$u.addUnit(e.borderRadius)}},[e.$slots.error?e._t("error"):a("u-icon",{attrs:{name:e.errorIcon,width:e.width,height:e.height}})],2):e._e()],1)},r=[]},"437a":function(e,t,a){"use strict";a.r(t);var o=a("4d1ea"),n=a.n(o);for(var r in o)"default"!==r&&function(e){a.d(t,e,(function(){return o[e]}))}(r);t["default"]=n.a},"4d1ea":function(e,t,a){"use strict";var o=a("4ea4");a("99af"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a("6fd8"),r=o(a("4ddc")),i={data:function(){return{sn:"",sku:{},applyInfo:""}},onLoad:function(e){this.sn=e.sn,this.sku=r.default.getAfterSaleData(),this.init()},methods:{init:function(){var e=this;(0,n.getAfterSaleInfo)(this.sn).then((function(t){t.data.success&&(e.applyInfo=t.data.result)}))},onSelect:function(e){uni.redirectTo({url:"./afterSalesDetail?sn=".concat(this.sn,"&value=").concat(e)})},navigateToGoodsDetail:function(e){uni.navigateTo({url:"/pages/product/goods?id=".concat(e,"&goodsId=").concat(goodsId)})}}};t.default=i},"57dd":function(e,t,a){"use strict";a.r(t);var o=a("1891"),n=a("6eec");for(var r in n)"default"!==r&&function(e){a.d(t,e,(function(){return n[e]}))}(r);a("a32c");var i,d=a("f0c5"),c=Object(d["a"])(n["default"],o["b"],o["c"],!1,null,"7d8c5495",null,!1,o["a"],i);t["default"]=c.exports},"58db":function(e,t,a){"use strict";a("a9e3"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o={name:"u-image",props:{src:{type:String,default:""},mode:{type:String,default:"aspectFill"},width:{type:[String,Number],default:"100%"},height:{type:[String,Number],default:"auto"},shape:{type:String,default:"square"},borderRadius:{type:[String,Number],default:0},lazyLoad:{type:Boolean,default:!0},showMenuByLongpress:{type:Boolean,default:!0},loadingIcon:{type:String,default:"photo"},errorIcon:{type:String,default:"error-circle"},showLoading:{type:Boolean,default:!0},showError:{type:Boolean,default:!0},fade:{type:Boolean,default:!0},webp:{type:Boolean,default:!1},duration:{type:[String,Number],default:500},bgColor:{type:String,default:"#f3f4f6"}},data:function(){return{isError:!1,loading:!0,opacity:1,durationTime:this.duration,backgroundStyle:{}}},watch:{src:function(e){this.isError=!e}},computed:{wrapStyle:function(){var e={};return e.width=this.$u.addUnit(this.width),e.height=this.$u.addUnit(this.height),e.borderRadius="circle"==this.shape?"50%":this.$u.addUnit(this.borderRadius),e.overflow=this.borderRadius>0?"hidden":"visible",this.fade&&(e.opacity=this.opacity,e.transition="opacity ".concat(Number(this.durationTime)/1e3,"s ease-in-out")),e}},methods:{onClick:function(){this.$emit("click")},onErrorHandler:function(){this.loading=!1,this.isError=!0,this.$emit("error")},onLoadHandler:function(){var e=this;if(this.loading=!1,this.isError=!1,this.$emit("load"),!this.fade)return this.removeBgColor();this.opacity=0,this.durationTime=0,setTimeout((function(){e.durationTime=e.duration,e.opacity=1,setTimeout((function(){e.removeBgColor()}),e.durationTime)}),50)},removeBgColor:function(){this.backgroundStyle={backgroundColor:"transparent"}}}};t.default=o},"5ef4":function(e,t,a){var o=a("9b14");"string"===typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);var n=a("4f06").default;n("8f5259b6",o,!0,{sourceMap:!1,shadowMode:!1})},"6eec":function(e,t,a){"use strict";a.r(t);var o=a("58db"),n=a.n(o);for(var r in o)"default"!==r&&function(e){a.d(t,e,(function(){return o[e]}))}(r);t["default"]=n.a},"6fb9":function(e,t,a){"use strict";a.d(t,"b",(function(){return n})),a.d(t,"c",(function(){return r})),a.d(t,"a",(function(){return o}));var o={uImage:a("57dd").default,uIcon:a("9ae2").default},n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-uni-view",[a("v-uni-view",{staticClass:"after-sales-goods-detail-view"},[a("v-uni-view",{staticClass:"header"},[a("v-uni-view",[e._v("本次售后服务将由"),a("v-uni-text",{staticClass:"seller-name"},[e._v(e._s(e.sku.storeName))]),e._v("为您提供")],1)],1),a("v-uni-view",e._l(e.sku.orderItems,(function(t,o){return t.sn==e.sn?a("v-uni-view",{key:o,staticClass:"goods-item-view",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.navigateToGoodsDetail(e.sku.skuId)}}},[a("v-uni-view",{staticClass:"goods-img"},[a("u-image",{attrs:{"border-radius":"6",width:"131rpx",height:"131rpx",src:t.image}})],1),a("v-uni-view",{staticClass:"goods-info"},[a("v-uni-view",{staticClass:"goods-title u-line-2"},[e._v(e._s(t.name))]),a("v-uni-view",{staticClass:"goods-price"},[e.sku.orderItems.length<=1?a("span",[e._v("￥"+e._s(e.sku.flowPrice))]):a("span",{staticClass:"num"},[e._v("购买数量"+e._s(t.num))]),e.sku.orderItems.length<=1?a("span",{staticClass:"num"},[e._v("购买数量: "+e._s(t.num))]):e._e()])],1)],1):e._e()})),1)],1),a("v-uni-view",{staticClass:"select-view"},[e.applyInfo.returnGoods?a("v-uni-view",{staticClass:"select-cell",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.onSelect(1)}}},[a("v-uni-view",{staticClass:"select-image"},[a("v-uni-image",{staticStyle:{height:"51rpx",width:"51rpx"},attrs:{src:"/static/order/t1.png"}})],1),a("v-uni-view",{staticClass:"right"},[a("v-uni-view",{staticClass:"select-title"},[e._v("退货")]),a("v-uni-view",{staticClass:"select-sub-title"},[e._v("退回收到的商品"),a("u-icon",{attrs:{name:"arrow-right",color:"#bababa"}})],1)],1)],1):e._e(),e.applyInfo.returnMoney?a("v-uni-view",{staticClass:"select-cell",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.onSelect(3)}}},[a("v-uni-view",{staticClass:"select-image"},[a("v-uni-image",{staticStyle:{height:"51rpx",width:"51rpx"},attrs:{src:"/static/order/t3.png"}})],1),a("v-uni-view",{staticClass:"right"},[a("v-uni-view",{staticClass:"select-title"},[e._v("退款")]),a("v-uni-view",{staticClass:"select-sub-title"},[e._v("退款商品返还金额"),a("u-icon",{attrs:{name:"arrow-right",color:"#bababa"}})],1)],1)],1):e._e()],1)],1)},r=[]},"6fd8":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getAfterSale=n,t.applyCancelOrder=r,t.getStoreAfterSaleAddress=i,t.cancelAfterSale=d,t.getAfterSaleList=c,t.getServiceDetail=l,t.addComplain=s,t.clearComplain=u,t.getAfterSaleLog=f,t.getComplain=g,t.getAfterSaleReason=h,t.getClearReason=v,t.getComplainReason=p,t.getComplainDetail=b,t.getAfterSaleInfo=m,t.applyReturn=w,t.fillShipInfo=y;var o=a("6a41");function n(e){return o.http.request({url:"after-sales/refunds",method:o.Method.GET,needToken:!0,loading:!1,params:e})}function r(e){return o.http.request({url:"after-sales/apply/cancel/order",method:o.Method.POST,needToken:!0,params:e})}function i(e){return o.http.request({url:"/order/afterSale/getStoreAfterSaleAddress/".concat(e),method:o.Method.GET,needToken:!0})}function d(e){return o.http.request({url:"/order/afterSale/cancel/".concat(e),method:o.Method.POST,needToken:!0})}function c(e){return o.http.request({url:"/order/afterSale/page",method:o.Method.GET,needToken:!0,params:e})}function l(e){return o.http.request({url:"/order/afterSale/get/".concat(e),method:o.Method.GET,needToken:!0})}function s(e){return o.http.request({url:"/order/complain",method:o.Method.POST,needToken:!0,header:{"Content-Type":"application/x-www-form-urlencoded"},data:e})}function u(e,t){return o.http.request({url:"/order/complain/status/".concat(e),method:o.Method.PUT,needToken:!0,params:t})}function f(e){return o.http.request({url:"/order/afterSale/get/getAfterSaleLog/".concat(e),method:o.Method.GET,needToken:!0})}function g(e){return o.http.request({url:"/order/complain",method:o.Method.GET,needToken:!0,params:e})}function h(e){return o.http.request({url:"/order/afterSale/get/afterSaleReason/".concat(e),method:o.Method.GET,needToken:!0})}function v(){return o.http.request({url:"/order/afterSale/get/afterSaleReason/CANCEL",method:o.Method.GET,needToken:!0})}function p(){return o.http.request({url:"/order/afterSale/get/afterSaleReason/COMPLAIN",method:o.Method.GET,needToken:!0})}function b(e){return o.http.request({url:"/order/complain/".concat(e),method:o.Method.GET,needToken:!0})}function m(e){return o.http.request({url:"/order/afterSale/applyAfterSaleInfo/".concat(e),method:o.Method.GET,needToken:!0})}function w(e,t){return o.http.request({url:"/order/afterSale/save/".concat(e),method:o.Method.POST,header:{"Content-Type":"application/x-www-form-urlencoded"},data:t})}function y(e,t){return o.http.request({url:"/order/afterSale/delivery/".concat(e),method:o.Method.POST,header:{"Content-Type":"application/x-www-form-urlencoded"},data:t})}},"73d4":function(e,t,a){var o=a("d724");"string"===typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);var n=a("4f06").default;n("4a5bfb3a",o,!0,{sourceMap:!1,shadowMode:!1})},"9b14":function(e,t,a){var o=a("24fb");t=o(!1),t.push([e.i,'@charset "UTF-8";\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 边框颜色 */\n/* 图片加载中颜色 */\n/* 行为相关颜色 */\n/*主题颜色 具体参考   https://ant.design/docs/spec/colors-cn */\n/**微信登录按钮颜色 */\n/**主颜色*/\n/*用于金钱等颜色 */\n/*主题高亮颜色*/\n/*辅助高亮颜色*/\n/*主题高亮背景颜色*/\n/*价格红高亮背景颜色*/\n/*辅助色*/.light-color[data-v-146de9bc]{color:#ff6b35}.main-color[data-v-146de9bc]{color:#ff3c2a!important}.bg-light-color[data-v-146de9bc]{background-color:#ff6b35!important}.bg-light-color[data-v-146de9bc] *{background-color:#ff6b35!important}.bg-main-color[data-v-146de9bc]{background-color:#ff3c2a!important}.bg-linear-gradient[data-v-146de9bc]{background-image:linear-gradient(25deg,#fa123b,#ff6b35,#ff9f28,#ffcc03)}.uni-tabbar .uni-tabbar__icon[data-v-146de9bc]{width:20px;height:18px}.flex[data-v-146de9bc]{display:flex}.btn[data-v-146de9bc]{background-color:#ff6b35;color:#fff;border-width:0;border:none;border-radius:44px;height:44px;box-shadow:none;font-weight:400;font-style:normal;line-height:44px;text-align:center}.btn[data-v-146de9bc]::after{border:none}.button-hover[data-v-146de9bc]{opacity:.7}.margin[data-v-146de9bc]{margin:10px}.tag[data-v-146de9bc]{background-color:#f2f2f2;color:#333;height:28px;border-radius:28px;box-shadow:none;font-family:PingFangSC-Regular,PingFang SC,sans-serif;font-weight:400;font-style:normal;line-height:28px;text-align:center;width:90px}.c-content[data-v-146de9bc]{background-color:#fff;border-top:1px solid #ebeef5;border-bottom:1px solid #ebeef5}.mt-30[data-v-146de9bc]{margin-top:%?30?%}.border-top[data-v-146de9bc]{border-top:1px solid #ebeef5}.describe[data-v-146de9bc]{color:#909399;font-size:%?24?%;padding:%?30?%}.flex-center[data-v-146de9bc]{display:flex;align-items:center;justify-content:center;flex-direction:column}.flex-a-c[data-v-146de9bc]{align-items:center}.relative[data-v-146de9bc]{position:relative}.wes[data-v-146de9bc]{\n  /* 多出部分用省略号表示 , 用于一行 */overflow:hidden;word-wrap:normal;white-space:nowrap;text-overflow:ellipsis}.wes-2[data-v-146de9bc]{\n  /* 适用于webkit内核和移动端 */display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;overflow:hidden}uni-page-body[data-v-146de9bc],\n.content[data-v-146de9bc]{background:#f8f8f8;height:100%}.after-sales-goods-detail-view[data-v-146de9bc]{background-color:#fff}.after-sales-goods-detail-view .header[data-v-146de9bc]{background-color:#f7f7f7;color:#999;font-size:%?22?%;display:flex;flex-direction:row;align-items:center;justify-content:center;line-height:%?70?%}.after-sales-goods-detail-view .header .header-text[data-v-146de9bc]{background-color:#999;padding:%?10?% %?30?%;border-radius:%?50?%}.after-sales-goods-detail-view .header .seller-name[data-v-146de9bc]{color:#ff3c2a}.after-sales-goods-detail-view .goods-item-view[data-v-146de9bc]{display:flex;flex-direction:row;padding:%?10?% %?30?%;background-color:#eef1f2}.after-sales-goods-detail-view .goods-item-view .goods-info[data-v-146de9bc]{padding-left:%?30?%;flex:1}.after-sales-goods-detail-view .goods-item-view .goods-info .goods-title[data-v-146de9bc]{margin-bottom:%?10?%;color:#303133}.after-sales-goods-detail-view .goods-item-view .goods-info .goods-specs[data-v-146de9bc]{font-size:%?24?%;margin-bottom:%?10?%;color:#ccc}.after-sales-goods-detail-view .goods-item-view .goods-info .goods-price[data-v-146de9bc]{display:flex;flex-direction:row;justify-content:space-between;font-size:%?28?%;margin-bottom:%?10?%;color:#ff6b35}.after-sales-goods-detail-view .goods-item-view .goods-info .goods-price .num[data-v-146de9bc]{font-size:%?24?%;color:#999}.after-sales-goods-detail-view .goods-item-view .goods-num[data-v-146de9bc]{width:%?60?%;color:#ff3c2a}.select-view[data-v-146de9bc]{background-color:#fff;margin-top:%?20?%}.select-view .select-cell[data-v-146de9bc]{display:flex;align-items:center;margin:%?0?% %?20?%;line-height:%?110?%;border-bottom:1px solid #f8f8f8}.select-view .select-cell .select-image[data-v-146de9bc]{width:%?51?%;height:%?110?%;line-height:%?110?%;display:flex;align-items:center}.select-view .select-cell .right[data-v-146de9bc]{flex:1;display:flex;align-items:center;justify-content:space-between}.select-view .select-cell .right .select-title[data-v-146de9bc]{margin-left:%?18?%;color:#666;width:%?200?%}.select-view .select-cell .right .select-sub-title[data-v-146de9bc]{color:#ccc}body.?%PAGE?%[data-v-146de9bc]{background:#f8f8f8}',""]),e.exports=t},a32c:function(e,t,a){"use strict";var o=a("73d4"),n=a.n(o);n.a},b75c:function(e,t,a){"use strict";var o=a("5ef4"),n=a.n(o);n.a},d724:function(e,t,a){var o=a("24fb");t=o(!1),t.push([e.i,'@charset "UTF-8";\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 边框颜色 */\n/* 图片加载中颜色 */\n/* 行为相关颜色 */\n/*主题颜色 具体参考   https://ant.design/docs/spec/colors-cn */\n/**微信登录按钮颜色 */\n/**主颜色*/\n/*用于金钱等颜色 */\n/*主题高亮颜色*/\n/*辅助高亮颜色*/\n/*主题高亮背景颜色*/\n/*价格红高亮背景颜色*/\n/*辅助色*/.light-color[data-v-7d8c5495]{color:#ff6b35}.main-color[data-v-7d8c5495]{color:#ff3c2a!important}.bg-light-color[data-v-7d8c5495]{background-color:#ff6b35!important}.bg-light-color[data-v-7d8c5495] *{background-color:#ff6b35!important}.bg-main-color[data-v-7d8c5495]{background-color:#ff3c2a!important}.bg-linear-gradient[data-v-7d8c5495]{background-image:linear-gradient(25deg,#fa123b,#ff6b35,#ff9f28,#ffcc03)}.uni-tabbar .uni-tabbar__icon[data-v-7d8c5495]{width:20px;height:18px}.flex[data-v-7d8c5495]{display:flex}.btn[data-v-7d8c5495]{background-color:#ff6b35;color:#fff;border-width:0;border:none;border-radius:44px;height:44px;box-shadow:none;font-weight:400;font-style:normal;line-height:44px;text-align:center}.btn[data-v-7d8c5495]::after{border:none}.button-hover[data-v-7d8c5495]{opacity:.7}.margin[data-v-7d8c5495]{margin:10px}.tag[data-v-7d8c5495]{background-color:#f2f2f2;color:#333;height:28px;border-radius:28px;box-shadow:none;font-family:PingFangSC-Regular,PingFang SC,sans-serif;font-weight:400;font-style:normal;line-height:28px;text-align:center;width:90px}.c-content[data-v-7d8c5495]{background-color:#fff;border-top:1px solid #ebeef5;border-bottom:1px solid #ebeef5}.mt-30[data-v-7d8c5495]{margin-top:%?30?%}.border-top[data-v-7d8c5495]{border-top:1px solid #ebeef5}.describe[data-v-7d8c5495]{color:#909399;font-size:%?24?%;padding:%?30?%}.flex-center[data-v-7d8c5495]{display:flex;align-items:center;justify-content:center;flex-direction:column}.flex-a-c[data-v-7d8c5495]{align-items:center}.relative[data-v-7d8c5495]{position:relative}.wes[data-v-7d8c5495]{\n  /* 多出部分用省略号表示 , 用于一行 */overflow:hidden;word-wrap:normal;white-space:nowrap;text-overflow:ellipsis}.wes-2[data-v-7d8c5495]{\n  /* 适用于webkit内核和移动端 */display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;overflow:hidden}.u-image[data-v-7d8c5495]{position:relative;transition:opacity .5s ease-in-out}.u-image__image[data-v-7d8c5495]{width:100%;height:100%}.u-image__loading[data-v-7d8c5495], .u-image__error[data-v-7d8c5495]{position:absolute;top:0;left:0;width:100%;height:100%;display:flex;align-items:center;justify-content:center;background-color:#f3f4f6;color:#909399;font-size:%?46?%}',""]),e.exports=t}}]);