(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-mine-distribution-join"],{"0728":function(t,e,r){"use strict";r.r(e);var n=r("fe20"),a=r.n(n);for(var o in n)"default"!==o&&function(t){r.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},"07d9":function(t,e,r){var n=r("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 边框颜色 */\n/* 图片加载中颜色 */\n/* 行为相关颜色 */\n/*主题颜色 具体参考   https://ant.design/docs/spec/colors-cn */\n/**微信登录按钮颜色 */\n/**主颜色*/\n/*用于金钱等颜色 */\n/*主题高亮颜色*/\n/*辅助高亮颜色*/\n/*主题高亮背景颜色*/\n/*价格红高亮背景颜色*/\n/*辅助色*/.light-color[data-v-796ff26f]{color:#ff6b35}.main-color[data-v-796ff26f]{color:#ff3c2a!important}.bg-light-color[data-v-796ff26f]{background-color:#ff6b35!important}.bg-light-color[data-v-796ff26f] *{background-color:#ff6b35!important}.bg-main-color[data-v-796ff26f]{background-color:#ff3c2a!important}.bg-linear-gradient[data-v-796ff26f]{background-image:linear-gradient(25deg,#fa123b,#ff6b35,#ff9f28,#ffcc03)}.uni-tabbar .uni-tabbar__icon[data-v-796ff26f]{width:20px;height:18px}.flex[data-v-796ff26f]{display:flex}.btn[data-v-796ff26f]{background-color:#ff6b35;color:#fff;border-width:0;border:none;border-radius:44px;height:44px;box-shadow:none;font-weight:400;font-style:normal;line-height:44px;text-align:center}.btn[data-v-796ff26f]::after{border:none}.button-hover[data-v-796ff26f]{opacity:.7}.margin[data-v-796ff26f]{margin:10px}.tag[data-v-796ff26f]{background-color:#f2f2f2;color:#333;height:28px;border-radius:28px;box-shadow:none;font-family:PingFangSC-Regular,PingFang SC,sans-serif;font-weight:400;font-style:normal;line-height:28px;text-align:center;width:90px}.c-content[data-v-796ff26f]{background-color:#fff;border-top:1px solid #ebeef5;border-bottom:1px solid #ebeef5}.mt-30[data-v-796ff26f]{margin-top:%?30?%}.border-top[data-v-796ff26f]{border-top:1px solid #ebeef5}.describe[data-v-796ff26f]{color:#909399;font-size:%?24?%;padding:%?30?%}.flex-center[data-v-796ff26f]{display:flex;align-items:center;justify-content:center;flex-direction:column}.flex-a-c[data-v-796ff26f]{align-items:center}.relative[data-v-796ff26f]{position:relative}.wes[data-v-796ff26f]{\n  /* 多出部分用省略号表示 , 用于一行 */overflow:hidden;word-wrap:normal;white-space:nowrap;text-overflow:ellipsis}.wes-2[data-v-796ff26f]{\n  /* 适用于webkit内核和移动端 */display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;overflow:hidden}uni-view[data-v-796ff26f],\nuni-scroll-view[data-v-796ff26f]{box-sizing:border-box}[data-v-796ff26f]::-webkit-scrollbar,[data-v-796ff26f]::-webkit-scrollbar,[data-v-796ff26f]::-webkit-scrollbar{display:none;width:0!important;height:0!important;-webkit-appearance:none;background:transparent}.u-scroll-box[data-v-796ff26f]{position:relative}uni-scroll-view[data-v-796ff26f] ::-webkit-scrollbar{display:none;width:0!important;height:0!important;-webkit-appearance:none;background:transparent}.u-scroll-view[data-v-796ff26f]{width:100%;white-space:nowrap;position:relative}.u-tab-item[data-v-796ff26f]{position:relative;display:inline-block;text-align:center;transition-property:background-color,color}.u-tab-bar[data-v-796ff26f]{position:absolute;bottom:0}.u-tabs-scorll-flex[data-v-796ff26f]{display:flex;justify-content:space-between}',""]),t.exports=e},"143c":function(t,e,r){"use strict";r("c975"),r("a9e3"),r("d3b7"),r("ac1f"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"u-button",props:{hairLine:{type:Boolean,default:!0},type:{type:String,default:"default"},size:{type:String,default:"default"},shape:{type:String,default:"square"},plain:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},openType:{type:String,default:""},formType:{type:String,default:""},appParameter:{type:String,default:""},hoverStopPropagation:{type:Boolean,default:!1},lang:{type:String,default:"en"},sessionFrom:{type:String,default:""},sendMessageTitle:{type:String,default:""},sendMessagePath:{type:String,default:""},sendMessageImg:{type:String,default:""},showMessageCard:{type:Boolean,default:!1},hoverBgColor:{type:String,default:""},rippleBgColor:{type:String,default:""},ripple:{type:Boolean,default:!1},hoverClass:{type:String,default:""},customStyle:{type:Object,default:function(){return{}}},dataName:{type:String,default:""},throttleTime:{type:[String,Number],default:1e3}},computed:{getHoverClass:function(){if(this.loading||this.disabled||this.ripple||this.hoverClass)return"";var t="";return t=this.plain?"u-"+this.type+"-plain-hover":"u-"+this.type+"-hover",t},showHairLineBorder:function(){return["primary","success","error","warning"].indexOf(this.type)>=0&&!this.plain?"":"u-hairline-border"}},data:function(){return{rippleTop:0,rippleLeft:0,fields:{},waveActive:!1}},methods:{click:function(t){var e=this;this.$u.throttle((function(){!0!==e.loading&&!0!==e.disabled&&(e.ripple&&(e.waveActive=!1,e.$nextTick((function(){this.getWaveQuery(t)}))),e.$emit("click",t))}),this.throttleTime)},getWaveQuery:function(t){var e=this;this.getElQuery().then((function(r){var n=r[0];if(n.width&&n.width&&(n.targetWidth=n.height>n.width?n.height:n.width,n.targetWidth)){e.fields=n;var a="",o="";a=t.touches[0].clientX,o=t.touches[0].clientY,e.rippleTop=o-n.top-n.targetWidth/2,e.rippleLeft=a-n.left-n.targetWidth/2,e.$nextTick((function(){e.waveActive=!0}))}}))},getElQuery:function(){var t=this;return new Promise((function(e){var r="";r=uni.createSelectorQuery().in(t),r.select(".u-btn").boundingClientRect(),r.exec((function(t){e(t)}))}))},getphonenumber:function(t){this.$emit("getphonenumber",t)},getuserinfo:function(t){this.$emit("getuserinfo",t)},error:function(t){this.$emit("error",t)},opensetting:function(t){this.$emit("opensetting",t)},launchapp:function(t){this.$emit("launchapp",t)}}};e.default=n},1631:function(t,e,r){"use strict";r.d(e,"b",(function(){return a})),r.d(e,"c",(function(){return o})),r.d(e,"a",(function(){return n}));var n={uTabs:r("b52c").default,uForm:r("251f").default,uFormItem:r("47a4").default,uInput:r("7391").default,uButton:r("5be7").default},a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-uni-view",{staticClass:"wrapper"},[r("u-tabs",{attrs:{list:t.list,"is-scroll":!1,current:t.current,"active-color":t.$lightColor},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.change.apply(void 0,arguments)}}}),r("v-uni-view",{staticClass:"message"},[r("u-form",{ref:"uForm",attrs:{model:t.ruleForm,"label-width":"250rpx"}},[r("u-form-item",{attrs:{label:"会员昵称",prop:"name"}},[r("u-input",{model:{value:t.ruleForm.name,callback:function(e){t.$set(t.ruleForm,"name",e)},expression:"ruleForm.name"}})],1),r("u-form-item",{attrs:{label:"账户类型",prop:"name"}}),r("u-form-item",{attrs:{label:"收款人姓名",placeholder:"请输入收款人姓名",prop:"name"}},[r("u-input",{model:{value:t.ruleForm.name,callback:function(e){t.$set(t.ruleForm,"name",e)},expression:"ruleForm.name"}})],1),r("u-form-item",{attrs:{label:"收款账号",placeholder:"请输入收款人账号",prop:"name"}},[r("u-input",{model:{value:t.ruleForm.name,callback:function(e){t.$set(t.ruleForm,"name",e)},expression:"ruleForm.name"}})],1),r("u-form-item",{attrs:{label:"银行名称",placeholder:"请输入开户银行支行名称",prop:"name"}},[r("u-input",{model:{value:t.ruleForm.name,callback:function(e){t.$set(t.ruleForm,"name",e)},expression:"ruleForm.name"}})],1)],1),r("u-button",{attrs:{customStyle:{background:t.$lightColor,color:"#fff"}},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.submit.apply(void 0,arguments)}}},[t._v("提交")])],1)],1)},o=[]},"1da1":function(t,e,r){"use strict";function n(t,e,r,n,a,o,i){try{var f=t[o](i),l=f.value}catch(c){return void r(c)}f.done?e(l):Promise.resolve(l).then(n,a)}function a(t){return function(){var e=this,r=arguments;return new Promise((function(a,o){var i=t.apply(e,r);function f(t){n(i,a,o,f,l,"next",t)}function l(t){n(i,a,o,f,l,"throw",t)}f(void 0)}))}}r("d3b7"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=a},"2f0a":function(t,e,r){"use strict";var n=r("3932"),a=r.n(n);a.a},3932:function(t,e,r){var n=r("07d9");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=r("4f06").default;a("24682a3c",n,!0,{sourceMap:!1,shadowMode:!1})},"39df":function(t,e,r){"use strict";var n=r("93b7"),a=r.n(n);a.a},"3cc0":function(t,e,r){var n=r("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 边框颜色 */\n/* 图片加载中颜色 */\n/* 行为相关颜色 */\n/*主题颜色 具体参考   https://ant.design/docs/spec/colors-cn */\n/**微信登录按钮颜色 */\n/**主颜色*/\n/*用于金钱等颜色 */\n/*主题高亮颜色*/\n/*辅助高亮颜色*/\n/*主题高亮背景颜色*/\n/*价格红高亮背景颜色*/\n/*辅助色*/.light-color[data-v-07fa1d91]{color:#ff6b35}.main-color[data-v-07fa1d91]{color:#ff3c2a!important}.bg-light-color[data-v-07fa1d91]{background-color:#ff6b35!important}.bg-light-color[data-v-07fa1d91] *{background-color:#ff6b35!important}.bg-main-color[data-v-07fa1d91]{background-color:#ff3c2a!important}.bg-linear-gradient[data-v-07fa1d91]{background-image:linear-gradient(25deg,#fa123b,#ff6b35,#ff9f28,#ffcc03)}.uni-tabbar .uni-tabbar__icon[data-v-07fa1d91]{width:20px;height:18px}.flex[data-v-07fa1d91]{display:flex}.btn[data-v-07fa1d91]{background-color:#ff6b35;color:#fff;border-width:0;border:none;border-radius:44px;height:44px;box-shadow:none;font-weight:400;font-style:normal;line-height:44px;text-align:center}.btn[data-v-07fa1d91]::after{border:none}.button-hover[data-v-07fa1d91]{opacity:.7}.margin[data-v-07fa1d91]{margin:10px}.tag[data-v-07fa1d91]{background-color:#f2f2f2;color:#333;height:28px;border-radius:28px;box-shadow:none;font-family:PingFangSC-Regular,PingFang SC,sans-serif;font-weight:400;font-style:normal;line-height:28px;text-align:center;width:90px}.c-content[data-v-07fa1d91]{background-color:#fff;border-top:1px solid #ebeef5;border-bottom:1px solid #ebeef5}.mt-30[data-v-07fa1d91]{margin-top:%?30?%}.border-top[data-v-07fa1d91]{border-top:1px solid #ebeef5}.describe[data-v-07fa1d91]{color:#909399;font-size:%?24?%;padding:%?30?%}.flex-center[data-v-07fa1d91]{display:flex;align-items:center;justify-content:center;flex-direction:column}.flex-a-c[data-v-07fa1d91]{align-items:center}.relative[data-v-07fa1d91]{position:relative}.wes[data-v-07fa1d91]{\n  /* 多出部分用省略号表示 , 用于一行 */overflow:hidden;word-wrap:normal;white-space:nowrap;text-overflow:ellipsis}.wes-2[data-v-07fa1d91]{\n  /* 适用于webkit内核和移动端 */display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;overflow:hidden}.u-btn[data-v-07fa1d91]::after{border:none}.u-btn[data-v-07fa1d91]{position:relative;border:0;display:inline-block;overflow:hidden;line-height:1;display:flex;align-items:center;justify-content:center;cursor:pointer;padding:0 %?40?%;z-index:1;box-sizing:border-box;transition:all .15s}.u-btn--bold-border[data-v-07fa1d91]{border:1px solid #fff}.u-btn--default[data-v-07fa1d91]{color:#606266;border-color:#c0c4cc;background-color:#fff}.u-btn--primary[data-v-07fa1d91]{color:#fff;border-color:#2979ff;background-color:#2979ff}.u-btn--success[data-v-07fa1d91]{color:#fff;border-color:#19be6b;background-color:#19be6b}.u-btn--error[data-v-07fa1d91]{color:#fff;border-color:#fa3534;background-color:#fa3534}.u-btn--warning[data-v-07fa1d91]{color:#fff;border-color:#f90;background-color:#f90}.u-btn--default--disabled[data-v-07fa1d91]{color:#fff;border-color:#e4e7ed;background-color:#fff}.u-btn--primary--disabled[data-v-07fa1d91]{color:#fff!important;border-color:#a0cfff!important;background-color:#a0cfff!important}.u-btn--success--disabled[data-v-07fa1d91]{color:#fff!important;border-color:#71d5a1!important;background-color:#71d5a1!important}.u-btn--error--disabled[data-v-07fa1d91]{color:#fff!important;border-color:#fab6b6!important;background-color:#fab6b6!important}.u-btn--warning--disabled[data-v-07fa1d91]{color:#fff!important;border-color:#fcbd71!important;background-color:#fcbd71!important}.u-btn--primary--plain[data-v-07fa1d91]{color:#2979ff!important;border-color:#a0cfff!important;background-color:#ecf5ff!important}.u-btn--success--plain[data-v-07fa1d91]{color:#19be6b!important;border-color:#71d5a1!important;background-color:#dbf1e1!important}.u-btn--error--plain[data-v-07fa1d91]{color:#fa3534!important;border-color:#fab6b6!important;background-color:#fef0f0!important}.u-btn--warning--plain[data-v-07fa1d91]{color:#f90!important;border-color:#fcbd71!important;background-color:#fdf6ec!important}.u-hairline-border[data-v-07fa1d91]:after{content:" ";position:absolute;pointer-events:none;box-sizing:border-box;-webkit-transform-origin:0 0;transform-origin:0 0;left:0;top:0;width:199.8%;height:199.7%;-webkit-transform:scale(.5);transform:scale(.5);border:1px solid currentColor;z-index:1}.u-wave-ripple[data-v-07fa1d91]{z-index:0;position:absolute;border-radius:100%;background-clip:padding-box;pointer-events:none;-webkit-user-select:none;user-select:none;-webkit-transform:scale(0);transform:scale(0);opacity:1;-webkit-transform-origin:center;transform-origin:center}.u-wave-ripple.u-wave-active[data-v-07fa1d91]{opacity:0;-webkit-transform:scale(2);transform:scale(2);transition:opacity 1s linear,-webkit-transform .4s linear;transition:opacity 1s linear,transform .4s linear;transition:opacity 1s linear,transform .4s linear,-webkit-transform .4s linear}.u-round-circle[data-v-07fa1d91]{border-radius:%?100?%}.u-round-circle[data-v-07fa1d91]::after{border-radius:%?100?%}.u-loading[data-v-07fa1d91]::after{background-color:hsla(0,0%,100%,.35)}.u-size-default[data-v-07fa1d91]{font-size:%?30?%;height:%?80?%;line-height:%?80?%}.u-size-medium[data-v-07fa1d91]{display:inline-flex;width:auto;font-size:%?26?%;height:%?70?%;line-height:%?70?%;padding:0 %?80?%}.u-size-mini[data-v-07fa1d91]{display:inline-flex;width:auto;font-size:%?22?%;padding-top:1px;height:%?50?%;line-height:%?50?%;padding:0 %?20?%}.u-primary-plain-hover[data-v-07fa1d91]{color:#fff!important;background:#2b85e4!important}.u-default-plain-hover[data-v-07fa1d91]{color:#2b85e4!important;background:#ecf5ff!important}.u-success-plain-hover[data-v-07fa1d91]{color:#fff!important;background:#18b566!important}.u-warning-plain-hover[data-v-07fa1d91]{color:#fff!important;background:#f29100!important}.u-error-plain-hover[data-v-07fa1d91]{color:#fff!important;background:#dd6161!important}.u-info-plain-hover[data-v-07fa1d91]{color:#fff!important;background:#82848a!important}.u-default-hover[data-v-07fa1d91]{color:#2b85e4!important;border-color:#2b85e4!important;background-color:#ecf5ff!important}.u-primary-hover[data-v-07fa1d91]{background:#2b85e4!important;color:#fff}.u-success-hover[data-v-07fa1d91]{background:#18b566!important;color:#fff}.u-info-hover[data-v-07fa1d91]{background:#82848a!important;color:#fff}.u-warning-hover[data-v-07fa1d91]{background:#f29100!important;color:#fff}.u-error-hover[data-v-07fa1d91]{background:#dd6161!important;color:#fff}',""]),t.exports=e},"5b65":function(t,e,r){"use strict";var n;r.d(e,"b",(function(){return a})),r.d(e,"c",(function(){return o})),r.d(e,"a",(function(){return n}));var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-uni-view",{staticClass:"u-tabs",style:{background:t.bgColor}},[r("v-uni-view",{attrs:{id:t.id}},[r("v-uni-scroll-view",{staticClass:"u-scroll-view",attrs:{"scroll-x":!0,"scroll-left":t.scrollLeft,"scroll-with-animation":!0}},[r("v-uni-view",{staticClass:"u-scroll-box",class:{"u-tabs-scorll-flex":!t.isScroll}},[t._l(t.list,(function(e,n){return r("v-uni-view",{key:n,staticClass:"u-tab-item u-line-1",style:[t.tabItemStyle(n)],attrs:{id:"u-tab-item-"+n},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.clickTab(n)}}},[t._v(t._s(e[t.name]||e["name"]))])})),t.showBar?r("v-uni-view",{staticClass:"u-tab-bar",style:[t.tabBarStyle]}):t._e()],2)],1)],1)],1)},o=[]},"5be7":function(t,e,r){"use strict";r.r(e);var n=r("7a24"),a=r("8f10");for(var o in a)"default"!==o&&function(t){r.d(e,t,(function(){return a[t]}))}(o);r("c446");var i,f=r("f0c5"),l=Object(f["a"])(a["default"],n["b"],n["c"],!1,null,"07fa1d91",null,!1,n["a"],i);e["default"]=l.exports},"6c4c":function(t,e,r){"use strict";r.r(e);var n=r("c43c"),a=r.n(n);for(var o in n)"default"!==o&&function(t){r.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},7616:function(t,e,r){"use strict";r.r(e);var n=r("1631"),a=r("6c4c");for(var o in a)"default"!==o&&function(t){r.d(e,t,(function(){return a[t]}))}(o);r("39df");var i,f=r("f0c5"),l=Object(f["a"])(a["default"],n["b"],n["c"],!1,null,"16659b33",null,!1,n["a"],i);e["default"]=l.exports},"7a24":function(t,e,r){"use strict";var n;r.d(e,"b",(function(){return a})),r.d(e,"c",(function(){return o})),r.d(e,"a",(function(){return n}));var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-uni-button",{staticClass:"u-btn u-line-1 u-fix-ios-appearance",class:["u-size-"+t.size,t.plain?"u-btn--"+t.type+"--plain":"",t.loading?"u-loading":"","circle"==t.shape?"u-round-circle":"",t.hairLine?t.showHairLineBorder:"u-btn--bold-border","u-btn--"+t.type,t.disabled?"u-btn--"+t.type+"--disabled":""],style:[t.customStyle],attrs:{id:"u-wave-btn",disabled:t.disabled,"form-type":t.formType,"open-type":t.openType,"app-parameter":t.appParameter,"hover-stop-propagation":t.hoverStopPropagation,"send-message-title":t.sendMessageTitle,"send-message-path":"sendMessagePath",lang:t.lang,"data-name":t.dataName,"session-from":t.sessionFrom,"send-message-img":t.sendMessageImg,"show-message-card":t.showMessageCard,"hover-class":t.getHoverClass,loading:t.loading},on:{getphonenumber:function(e){arguments[0]=e=t.$handleEvent(e),t.getphonenumber.apply(void 0,arguments)},getuserinfo:function(e){arguments[0]=e=t.$handleEvent(e),t.getuserinfo.apply(void 0,arguments)},error:function(e){arguments[0]=e=t.$handleEvent(e),t.error.apply(void 0,arguments)},opensetting:function(e){arguments[0]=e=t.$handleEvent(e),t.opensetting.apply(void 0,arguments)},launchapp:function(e){arguments[0]=e=t.$handleEvent(e),t.launchapp.apply(void 0,arguments)},click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.click(e)}}},[t._t("default"),t.ripple?r("v-uni-view",{staticClass:"u-wave-ripple",class:[t.waveActive?"u-wave-active":""],style:{top:t.rippleTop+"px",left:t.rippleLeft+"px",width:t.fields.targetWidth+"px",height:t.fields.targetWidth+"px","background-color":t.rippleBgColor||"rgba(0, 0, 0, 0.15)"}}):t._e()],2)},o=[]},"8f10":function(t,e,r){"use strict";r.r(e);var n=r("143c"),a=r.n(n);for(var o in n)"default"!==o&&function(t){r.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},"90ed":function(t,e,r){var n=r("3cc0");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=r("4f06").default;a("70aed38d",n,!0,{sourceMap:!1,shadowMode:!1})},"93b7":function(t,e,r){var n=r("93e4");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=r("4f06").default;a("22e535b6",n,!0,{sourceMap:!1,shadowMode:!1})},"93e4":function(t,e,r){var n=r("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 边框颜色 */\n/* 图片加载中颜色 */\n/* 行为相关颜色 */\n/*主题颜色 具体参考   https://ant.design/docs/spec/colors-cn */\n/**微信登录按钮颜色 */\n/**主颜色*/\n/*用于金钱等颜色 */\n/*主题高亮颜色*/\n/*辅助高亮颜色*/\n/*主题高亮背景颜色*/\n/*价格红高亮背景颜色*/\n/*辅助色*/.light-color[data-v-16659b33]{color:#ff6b35}.main-color[data-v-16659b33]{color:#ff3c2a!important}.bg-light-color[data-v-16659b33]{background-color:#ff6b35!important}.bg-light-color[data-v-16659b33] *{background-color:#ff6b35!important}.bg-main-color[data-v-16659b33]{background-color:#ff3c2a!important}.bg-linear-gradient[data-v-16659b33]{background-image:linear-gradient(25deg,#fa123b,#ff6b35,#ff9f28,#ffcc03)}.uni-tabbar .uni-tabbar__icon[data-v-16659b33]{width:20px;height:18px}.flex[data-v-16659b33]{display:flex}.btn[data-v-16659b33]{background-color:#ff6b35;color:#fff;border-width:0;border:none;border-radius:44px;height:44px;box-shadow:none;font-weight:400;font-style:normal;line-height:44px;text-align:center}.btn[data-v-16659b33]::after{border:none}.button-hover[data-v-16659b33]{opacity:.7}.margin[data-v-16659b33]{margin:10px}.tag[data-v-16659b33]{background-color:#f2f2f2;color:#333;height:28px;border-radius:28px;box-shadow:none;font-family:PingFangSC-Regular,PingFang SC,sans-serif;font-weight:400;font-style:normal;line-height:28px;text-align:center;width:90px}.c-content[data-v-16659b33]{background-color:#fff;border-top:1px solid #ebeef5;border-bottom:1px solid #ebeef5}.mt-30[data-v-16659b33]{margin-top:%?30?%}.border-top[data-v-16659b33]{border-top:1px solid #ebeef5}.describe[data-v-16659b33]{color:#909399;font-size:%?24?%;padding:%?30?%}.flex-center[data-v-16659b33]{display:flex;align-items:center;justify-content:center;flex-direction:column}.flex-a-c[data-v-16659b33]{align-items:center}.relative[data-v-16659b33]{position:relative}.wes[data-v-16659b33]{\n  /* 多出部分用省略号表示 , 用于一行 */overflow:hidden;word-wrap:normal;white-space:nowrap;text-overflow:ellipsis}.wes-2[data-v-16659b33]{\n  /* 适用于webkit内核和移动端 */display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;overflow:hidden}.menu[data-v-16659b33]{height:%?88?%;line-height:%?88?%;background:#ff3c2a;display:flex}.menu > .menu-item[data-v-16659b33]{flex:1;text-align:center;color:#ff6b35}.active[data-v-16659b33]{color:#fff!important}.message[data-v-16659b33]{padding:0 %?32?%}',""]),t.exports=e},"96cf":function(t,e){!function(e){"use strict";var r,n=Object.prototype,a=n.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",f=o.asyncIterator||"@@asyncIterator",l=o.toStringTag||"@@toStringTag",c="object"===typeof t,d=e.regeneratorRuntime;if(d)c&&(t.exports=d);else{d=e.regeneratorRuntime=c?t.exports:{},d.wrap=w;var u="suspendedStart",s="suspendedYield",p="executing",b="completed",h={},v={};v[i]=function(){return this};var g=Object.getPrototypeOf,m=g&&g(g(P([])));m&&m!==n&&a.call(m,i)&&(v=m);var y=L.prototype=k.prototype=Object.create(v);S.prototype=y.constructor=L,L.constructor=S,L[l]=S.displayName="GeneratorFunction",d.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===S||"GeneratorFunction"===(e.displayName||e.name))},d.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,L):(t.__proto__=L,l in t||(t[l]="GeneratorFunction")),t.prototype=Object.create(y),t},d.awrap=function(t){return{__await:t}},_(F.prototype),F.prototype[f]=function(){return this},d.AsyncIterator=F,d.async=function(t,e,r,n){var a=new F(w(t,e,r,n));return d.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},_(y),y[l]="Generator",y[i]=function(){return this},y.toString=function(){return"[object Generator]"},d.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){while(e.length){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},d.values=P,j.prototype={constructor:j,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(T),!t)for(var e in this)"t"===e.charAt(0)&&a.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,a){return f.type="throw",f.arg=t,e.next=n,a&&(e.method="next",e.arg=r),!!a}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],f=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var l=a.call(i,"catchLoc"),c=a.call(i,"finallyLoc");if(l&&c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(l){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&a.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,h):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),T(r),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var a=n.arg;T(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:P(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),h}}}function w(t,e,r,n){var a=e&&e.prototype instanceof k?e:k,o=Object.create(a.prototype),i=new j(n||[]);return o._invoke=E(t,r,i),o}function x(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(n){return{type:"throw",arg:n}}}function k(){}function S(){}function L(){}function _(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function F(t){function e(r,n,o,i){var f=x(t[r],t,n);if("throw"!==f.type){var l=f.arg,c=l.value;return c&&"object"===typeof c&&a.call(c,"__await")?Promise.resolve(c.__await).then((function(t){e("next",t,o,i)}),(function(t){e("throw",t,o,i)})):Promise.resolve(c).then((function(t){l.value=t,o(l)}),(function(t){return e("throw",t,o,i)}))}i(f.arg)}var r;function n(t,n){function a(){return new Promise((function(r,a){e(t,n,r,a)}))}return r=r?r.then(a,a):a()}this._invoke=n}function E(t,e,r){var n=u;return function(a,o){if(n===p)throw new Error("Generator is already running");if(n===b){if("throw"===a)throw o;return B()}r.method=a,r.arg=o;while(1){var i=r.delegate;if(i){var f=C(i,r);if(f){if(f===h)continue;return f}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===u)throw n=b,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=p;var l=x(t,e,r);if("normal"===l.type){if(n=r.done?b:s,l.arg===h)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n=b,r.method="throw",r.arg=l.arg)}}}function C(t,e){var n=t.iterator[e.method];if(n===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=r,C(t,e),"throw"===e.method))return h;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var a=x(n,t.iterator,e.arg);if("throw"===a.type)return e.method="throw",e.arg=a.arg,e.delegate=null,h;var o=a.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,h):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,h)}function $(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function T(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function j(t){this.tryEntries=[{tryLoc:"root"}],t.forEach($,this),this.reset(!0)}function P(t){if(t){var e=t[i];if(e)return e.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){while(++n<t.length)if(a.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=r,e.done=!0,e};return o.next=o}}return{next:B}}function B(){return{value:r,done:!0}}}(function(){return this||"object"===typeof self&&self}()||Function("return this")())},b52c:function(t,e,r){"use strict";r.r(e);var n=r("5b65"),a=r("0728");for(var o in a)"default"!==o&&function(t){r.d(e,t,(function(){return a[t]}))}(o);r("2f0a");var i,f=r("f0c5"),l=Object(f["a"])(a["default"],n["b"],n["c"],!1,null,"796ff26f",null,!1,n["a"],i);e["default"]=l.exports},c43c:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={components:{},onReady:function(){this.$refs.uForm.setRules(this.rules)},data:function(){return{current:0,list:[{name:"推广人资料"},{name:"平台审核"},{name:"完成"}],ruleForm:{name:"",radio:""},rules:{name:[{required:!0,message:"请输入姓名",trigger:"blur"}]}}}};e.default=n},c446:function(t,e,r){"use strict";var n=r("90ed"),a=r.n(n);a.a},fe20:function(t,e,r){"use strict";var n=r("4ea4");r("a9e3"),r("ac1f"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,r("96cf");var a=n(r("1da1")),o={name:"u-tabs",props:{isScroll:{type:Boolean,default:!0},list:{type:Array,default:function(){return[]}},current:{type:[Number,String],default:0},height:{type:[String,Number],default:80},fontSize:{type:[String,Number],default:30},duration:{type:[String,Number],default:.5},activeColor:{type:String,default:"#2979ff"},inactiveColor:{type:String,default:"#303133"},barWidth:{type:[String,Number],default:40},barHeight:{type:[String,Number],default:6},gutter:{type:[String,Number],default:30},bgColor:{type:String,default:"#ffffff"},name:{type:String,default:"name"},bold:{type:Boolean,default:!0},activeItemStyle:{type:Object,default:function(){return{}}},showBar:{type:Boolean,default:!0},barStyle:{type:Object,default:function(){return{}}},itemWidth:{type:[Number,String],default:"auto"}},data:function(){return{scrollLeft:0,tabQueryInfo:[],componentWidth:0,scrollBarLeft:0,parentLeft:0,id:this.$u.guid(),currentIndex:this.current,barFirstTimeMove:!0}},watch:{list:function(t,e){var r=this;t.length!==e.length&&(this.currentIndex=0),this.$nextTick((function(){r.init()}))},current:{immediate:!0,handler:function(t,e){var r=this;this.$nextTick((function(){r.currentIndex=t,r.scrollByIndex()}))}}},computed:{tabBarStyle:function(){var t={width:this.barWidth+"rpx",transform:"translate(".concat(this.scrollBarLeft,"px, -100%)"),"transition-duration":"".concat(this.barFirstTimeMove?0:this.duration,"s"),"background-color":this.activeColor,height:this.barHeight+"rpx","border-radius":"".concat(this.barHeight/2,"px")};return Object.assign(t,this.barStyle),t},tabItemStyle:function(){var t=this;return function(e){var r={height:t.height+"rpx","line-height":t.height+"rpx","font-size":t.fontSize+"rpx","transition-duration":"".concat(t.duration,"s"),padding:t.isScroll?"0 ".concat(t.gutter,"rpx"):"",flex:t.isScroll?"auto":"1",width:t.$u.addUnit(t.itemWidth)};return e==t.currentIndex&&t.bold&&(r.fontWeight="bold"),e==t.currentIndex?(r.color=t.activeColor,r=Object.assign(r,t.activeItemStyle)):r.color=t.inactiveColor,r}}},methods:{init:function(){var t=this;return(0,a.default)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$uGetRect("#"+t.id);case 2:r=e.sent,t.parentLeft=r.left,t.componentWidth=r.width,t.getTabRect();case 6:case"end":return e.stop()}}),e)})))()},clickTab:function(t){t!=this.currentIndex&&this.$emit("change",t)},getTabRect:function(){for(var t=uni.createSelectorQuery().in(this),e=0;e<this.list.length;e++)t.select("#u-tab-item-".concat(e)).fields({size:!0,rect:!0});t.exec(function(t){this.tabQueryInfo=t,this.scrollByIndex()}.bind(this))},scrollByIndex:function(){var t=this,e=this.tabQueryInfo[this.currentIndex];if(e){var r=e.width,n=e.left-this.parentLeft,a=n-(this.componentWidth-r)/2;this.scrollLeft=a<0?0:a;var o=e.left+e.width/2-this.parentLeft;this.scrollBarLeft=o-uni.upx2px(this.barWidth)/2,1==this.barFirstTimeMove&&setTimeout((function(){t.barFirstTimeMove=!1}),100)}}},mounted:function(){this.init()}};e.default=o}}]);