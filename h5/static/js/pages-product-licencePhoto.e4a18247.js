(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-product-licencePhoto"],{"3da1":function(t,e,a){var o=a("24fb");e=o(!1),e.push([t.i,'@charset "UTF-8";\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 边框颜色 */\n/* 图片加载中颜色 */\n/* 行为相关颜色 */\n/*主题颜色 具体参考   https://ant.design/docs/spec/colors-cn */\n/**微信登录按钮颜色 */\n/**主颜色*/\n/*用于金钱等颜色 */\n/*主题高亮颜色*/\n/*辅助高亮颜色*/\n/*主题高亮背景颜色*/\n/*价格红高亮背景颜色*/\n/*辅助色*/.light-color[data-v-7d8c5495]{color:#ff6b35}.main-color[data-v-7d8c5495]{color:#ff3c2a!important}.bg-light-color[data-v-7d8c5495]{background-color:#ff6b35!important}.bg-light-color[data-v-7d8c5495] *{background-color:#ff6b35!important}.bg-main-color[data-v-7d8c5495]{background-color:#ff3c2a!important}.bg-linear-gradient[data-v-7d8c5495]{background-image:linear-gradient(25deg,#fa123b,#ff6b35,#ff9f28,#ffcc03)}.uni-tabbar .uni-tabbar__icon[data-v-7d8c5495]{width:20px;height:18px}.flex[data-v-7d8c5495]{display:flex}.btn[data-v-7d8c5495]{background-color:#ff6b35;color:#fff;border-width:0;border:none;border-radius:44px;height:44px;box-shadow:none;font-weight:400;font-style:normal;line-height:44px;text-align:center}.btn[data-v-7d8c5495]::after{border:none}.button-hover[data-v-7d8c5495]{opacity:.7}.margin[data-v-7d8c5495]{margin:10px}.tag[data-v-7d8c5495]{background-color:#f2f2f2;color:#333;height:28px;border-radius:28px;box-shadow:none;font-family:PingFangSC-Regular,PingFang SC,sans-serif;font-weight:400;font-style:normal;line-height:28px;text-align:center;width:90px}.c-content[data-v-7d8c5495]{background-color:#fff;border-top:1px solid #ebeef5;border-bottom:1px solid #ebeef5}.mt-30[data-v-7d8c5495]{margin-top:%?30?%}.border-top[data-v-7d8c5495]{border-top:1px solid #ebeef5}.describe[data-v-7d8c5495]{color:#909399;font-size:%?24?%;padding:%?30?%}.flex-center[data-v-7d8c5495]{display:flex;align-items:center;justify-content:center;flex-direction:column}.flex-a-c[data-v-7d8c5495]{align-items:center}.relative[data-v-7d8c5495]{position:relative}.wes[data-v-7d8c5495]{\n  /* 多出部分用省略号表示 , 用于一行 */overflow:hidden;word-wrap:normal;white-space:nowrap;text-overflow:ellipsis}.wes-2[data-v-7d8c5495]{\n  /* 适用于webkit内核和移动端 */display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;overflow:hidden}.u-image[data-v-7d8c5495]{position:relative;transition:opacity .5s ease-in-out}.u-image__image[data-v-7d8c5495]{width:100%;height:100%}.u-image__loading[data-v-7d8c5495], .u-image__error[data-v-7d8c5495]{position:absolute;top:0;left:0;width:100%;height:100%;display:flex;align-items:center;justify-content:center;background-color:#f3f4f6;color:#909399;font-size:%?46?%}',""]),t.exports=e},4298:function(t,e,a){"use strict";a.r(e);var o=a("c24b"),r=a("dccc");for(var n in r)"default"!==n&&function(t){a.d(e,t,(function(){return r[t]}))}(n);a("75b7");var i,d=a("f0c5"),c=Object(d["a"])(r["default"],o["b"],o["c"],!1,null,"f73e2a46",null,!1,o["a"],i);e["default"]=c.exports},"437a":function(t,e,a){"use strict";var o=a("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("96cf");var r=o(a("1da1")),n=a("7ef8"),i={data:function(){return{storeData:{}}},onLoad:function(t){this.getStoreLicencePhoto(t.id)},methods:{getStoreLicencePhoto:function(t){var e=this;return(0,r.default)(regeneratorRuntime.mark((function a(){var o;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,(0,n.getLicencePhoto)(t);case 2:o=a.sent,o.data.success&&(e.storeData=o.data.result);case 4:case"end":return a.stop()}}),a)})))()},preview:function(){uni.previewImage({current:0,urls:[this.storeData.licencePhoto],longPressActions:{itemList:["保存图片"],success:function(t){},fail:function(t){}}})}}};e.default=i},4507:function(t,e,a){"use strict";a("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o={name:"u-image",props:{src:{type:String,default:""},mode:{type:String,default:"aspectFill"},width:{type:[String,Number],default:"100%"},height:{type:[String,Number],default:"auto"},shape:{type:String,default:"square"},borderRadius:{type:[String,Number],default:0},lazyLoad:{type:Boolean,default:!0},showMenuByLongpress:{type:Boolean,default:!0},loadingIcon:{type:String,default:"photo"},errorIcon:{type:String,default:"error-circle"},showLoading:{type:Boolean,default:!0},showError:{type:Boolean,default:!0},fade:{type:Boolean,default:!0},webp:{type:Boolean,default:!1},duration:{type:[String,Number],default:500},bgColor:{type:String,default:"#f3f4f6"}},data:function(){return{isError:!1,loading:!0,opacity:1,durationTime:this.duration,backgroundStyle:{}}},watch:{src:function(t){this.isError=!t}},computed:{wrapStyle:function(){var t={};return t.width=this.$u.addUnit(this.width),t.height=this.$u.addUnit(this.height),t.borderRadius="circle"==this.shape?"50%":this.$u.addUnit(this.borderRadius),t.overflow=this.borderRadius>0?"hidden":"visible",this.fade&&(t.opacity=this.opacity,t.transition="opacity ".concat(Number(this.durationTime)/1e3,"s ease-in-out")),t}},methods:{onClick:function(){this.$emit("click")},onErrorHandler:function(){this.loading=!1,this.isError=!0,this.$emit("error")},onLoadHandler:function(){var t=this;if(this.loading=!1,this.isError=!1,this.$emit("load"),!this.fade)return this.removeBgColor();this.opacity=0,this.durationTime=0,setTimeout((function(){t.durationTime=t.duration,t.opacity=1,setTimeout((function(){t.removeBgColor()}),t.durationTime)}),50)},removeBgColor:function(){this.backgroundStyle={backgroundColor:"transparent"}}}};e.default=o},"72d5":function(t,e,a){var o=a("7c01");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var r=a("4f06").default;r("7b973344",o,!0,{sourceMap:!1,shadowMode:!1})},"75b7":function(t,e,a){"use strict";var o=a("72d5"),r=a.n(o);r.a},"7c01":function(t,e,a){var o=a("24fb");e=o(!1),e.push([t.i,'@charset "UTF-8";\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 边框颜色 */\n/* 图片加载中颜色 */\n/* 行为相关颜色 */\n/*主题颜色 具体参考   https://ant.design/docs/spec/colors-cn */\n/**微信登录按钮颜色 */\n/**主颜色*/\n/*用于金钱等颜色 */\n/*主题高亮颜色*/\n/*辅助高亮颜色*/\n/*主题高亮背景颜色*/\n/*价格红高亮背景颜色*/\n/*辅助色*/.light-color[data-v-f73e2a46]{color:#ff6b35}.main-color[data-v-f73e2a46]{color:#ff3c2a!important}.bg-light-color[data-v-f73e2a46]{background-color:#ff6b35!important}.bg-light-color[data-v-f73e2a46] *{background-color:#ff6b35!important}.bg-main-color[data-v-f73e2a46]{background-color:#ff3c2a!important}.bg-linear-gradient[data-v-f73e2a46]{background-image:linear-gradient(25deg,#fa123b,#ff6b35,#ff9f28,#ffcc03)}.uni-tabbar .uni-tabbar__icon[data-v-f73e2a46]{width:20px;height:18px}.flex[data-v-f73e2a46]{display:flex}.btn[data-v-f73e2a46]{background-color:#ff6b35;color:#fff;border-width:0;border:none;border-radius:44px;height:44px;box-shadow:none;font-weight:400;font-style:normal;line-height:44px;text-align:center}.btn[data-v-f73e2a46]::after{border:none}.button-hover[data-v-f73e2a46]{opacity:.7}.margin[data-v-f73e2a46]{margin:10px}.tag[data-v-f73e2a46]{background-color:#f2f2f2;color:#333;height:28px;border-radius:28px;box-shadow:none;font-family:PingFangSC-Regular,PingFang SC,sans-serif;font-weight:400;font-style:normal;line-height:28px;text-align:center;width:90px}.c-content[data-v-f73e2a46]{background-color:#fff;border-top:1px solid #ebeef5;border-bottom:1px solid #ebeef5}.mt-30[data-v-f73e2a46]{margin-top:%?30?%}.border-top[data-v-f73e2a46]{border-top:1px solid #ebeef5}.describe[data-v-f73e2a46]{color:#909399;font-size:%?24?%;padding:%?30?%}.flex-center[data-v-f73e2a46]{display:flex;align-items:center;justify-content:center;flex-direction:column}.flex-a-c[data-v-f73e2a46]{align-items:center}.relative[data-v-f73e2a46]{position:relative}.wes[data-v-f73e2a46]{\n  /* 多出部分用省略号表示 , 用于一行 */overflow:hidden;word-wrap:normal;white-space:nowrap;text-overflow:ellipsis}.wes-2[data-v-f73e2a46]{\n  /* 适用于webkit内核和移动端 */display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;overflow:hidden}.wrapper[data-v-f73e2a46]{padding:%?32?%}.wrapper > p[data-v-f73e2a46]{margin:%?20?% 0}',""]),t.exports=e},"7ef8":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.getStoreList=r,e.getStoreBaseInfo=n,e.getStoreCategory=i,e.getLicencePhoto=d;var o=a("9d47");function r(t){return o.http.request({url:"/store",method:o.Method.GET,params:t})}function n(t){return o.http.request({url:"/store/store/get/detail/".concat(t),method:o.Method.GET,loading:!1})}function i(t){return o.http.request({url:"/store/store/label/get/".concat(t),method:o.Method.GET})}function d(t){return o.http.request({url:"/store/store/get/licencePhoto/".concat(t),method:o.Method.GET})}},a948:function(t,e,a){"use strict";var o=a("ffea"),r=a.n(o);r.a},bb34:function(t,e,a){"use strict";a.r(e);var o=a("4507"),r=a.n(o);for(var n in o)"default"!==n&&function(t){a.d(e,t,(function(){return o[t]}))}(n);e["default"]=r.a},bc33:function(t,e,a){"use strict";a.d(e,"b",(function(){return r})),a.d(e,"c",(function(){return n})),a.d(e,"a",(function(){return o}));var o={uIcon:a("673b").default},r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"u-image",style:[t.wrapStyle,t.backgroundStyle],on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClick.apply(void 0,arguments)}}},[t.isError?t._e():a("v-uni-image",{staticClass:"u-image__image",style:{borderRadius:"circle"==t.shape?"50%":t.$u.addUnit(t.borderRadius)},attrs:{src:t.src,mode:t.mode,"lazy-load":t.lazyLoad},on:{error:function(e){arguments[0]=e=t.$handleEvent(e),t.onErrorHandler.apply(void 0,arguments)},load:function(e){arguments[0]=e=t.$handleEvent(e),t.onLoadHandler.apply(void 0,arguments)}}}),t.showLoading&&t.loading?a("v-uni-view",{staticClass:"u-image__loading",style:{borderRadius:"circle"==t.shape?"50%":t.$u.addUnit(t.borderRadius),backgroundColor:this.bgColor}},[t.$slots.loading?t._t("loading"):a("u-icon",{attrs:{name:t.loadingIcon,width:t.width,height:t.height}})],2):t._e(),t.showError&&t.isError&&!t.loading?a("v-uni-view",{staticClass:"u-image__error",style:{borderRadius:"circle"==t.shape?"50%":t.$u.addUnit(t.borderRadius)}},[t.$slots.error?t._t("error"):a("u-icon",{attrs:{name:t.errorIcon,width:t.width,height:t.height}})],2):t._e()],1)},n=[]},c24b:function(t,e,a){"use strict";a.d(e,"b",(function(){return r})),a.d(e,"c",(function(){return n})),a.d(e,"a",(function(){return o}));var o={uImage:a("fcf9").default},r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"wrapper"},[a("p",[t._v("公司名称："+t._s(t.storeData.companyName))]),a("p",[t._v("公司地址："+t._s(t.storeData.companyAddress))]),a("p",[t._v("公司地址地区："+t._s(t.storeData.companyAddressPath))]),a("p",[t._v("员工人数："+t._s(t.storeData.employeeNum))]),a("p",[t._v("法定经营范围："+t._s(t.storeData.scope))]),a("u-image",{attrs:{width:"100%",height:"400rpx",mode:"aspectFit",src:t.storeData.licencePhoto},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.preview()}}})],1)},n=[]},dccc:function(t,e,a){"use strict";a.r(e);var o=a("437a"),r=a.n(o);for(var n in o)"default"!==n&&function(t){a.d(e,t,(function(){return o[t]}))}(n);e["default"]=r.a},fcf9:function(t,e,a){"use strict";a.r(e);var o=a("bc33"),r=a("bb34");for(var n in r)"default"!==n&&function(t){a.d(e,t,(function(){return r[t]}))}(n);a("a948");var i,d=a("f0c5"),c=Object(d["a"])(r["default"],o["b"],o["c"],!1,null,"7d8c5495",null,!1,o["a"],i);e["default"]=c.exports},ffea:function(t,e,a){var o=a("3da1");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var r=a("4f06").default;r("189c4be9",o,!0,{sourceMap:!1,shadowMode:!1})}}]);