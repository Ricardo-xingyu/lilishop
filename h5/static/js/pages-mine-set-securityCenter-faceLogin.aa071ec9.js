(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-mine-set-securityCenter-faceLogin"],{"415a":function(t,e,a){"use strict";(function(t){var n=a("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=n(a("9ea5")),i=a("2719"),r={data:function(){return{lightColor:this.$lightColor,checked:!0}},methods:{faceSwitchChange:function(e){if(!0===e){var a=uni.getSystemInfoSync();plus.device.getInfo({success:function(t){var e={mobile_type:a.model,secret_key:t.uuid};(0,i.setBiolofy)(e).then((function(t){200===t.statusCode&&o.default.setFaceLogin(!0)}))},fail:function(e){t.error("getDeviceInfo failed: "+JSON.stringify(e))}})}else o.default.setFaceLogin(!1)}},onLoad:function(){}};e.default=r}).call(this,a("5a52")["default"])},"474a":function(t,e,a){var n=a("9381");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=a("4f06").default;o("d087f7f4",n,!0,{sourceMap:!1,shadowMode:!1})},6736:function(t,e,a){"use strict";a.r(e);var n=a("415a"),o=a.n(n);for(var i in n)"default"!==i&&function(t){a.d(e,t,(function(){return n[t]}))}(i);e["default"]=o.a},"8c7e":function(t,e,a){"use strict";a.d(e,"b",(function(){return o})),a.d(e,"c",(function(){return i})),a.d(e,"a",(function(){return n}));var n={uCellGroup:a("8a15").default,uCellItem:a("abd5").default,uSwitch:a("5a71").default},o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"face-login"},[a("u-cell-group",[a("u-cell-item",{staticClass:"border-top",attrs:{arrow:!1,title:"面容登录"}},[a("u-switch",{attrs:{slot:"right-icon","active-color":"#1abc9c",size:"40"},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.faceSwitchChange.apply(void 0,arguments)}},slot:"right-icon",model:{value:t.checked,callback:function(e){t.checked=e},expression:"checked"}})],1)],1),a("v-uni-view",{staticClass:"describe"},[t._v("开启后可使用面容认证完成快捷登录，设置仅对本机生效。")])],1)},i=[]},9381:function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 边框颜色 */\n/* 图片加载中颜色 */\n/* 行为相关颜色 */\n/*主题颜色 具体参考   https://ant.design/docs/spec/colors-cn */\n/**微信登录按钮颜色 */\n/**主颜色*/\n/*用于金钱等颜色 */\n/*主题高亮颜色*/\n/*辅助高亮颜色*/\n/*主题高亮背景颜色*/\n/*价格红高亮背景颜色*/\n/*辅助色*/.light-color[data-v-9195a656]{color:#ff6b35}.main-color[data-v-9195a656]{color:#ff3c2a!important}.bg-light-color[data-v-9195a656]{background-color:#ff6b35!important}.bg-light-color[data-v-9195a656] *{background-color:#ff6b35!important}.bg-main-color[data-v-9195a656]{background-color:#ff3c2a!important}.bg-linear-gradient[data-v-9195a656]{background-image:linear-gradient(25deg,#fa123b,#ff6b35,#ff9f28,#ffcc03)}.uni-tabbar .uni-tabbar__icon[data-v-9195a656]{width:20px;height:18px}.flex[data-v-9195a656]{display:flex}.btn[data-v-9195a656]{background-color:#ff6b35;color:#fff;border-width:0;border:none;border-radius:44px;height:44px;box-shadow:none;font-weight:400;font-style:normal;line-height:44px;text-align:center}.btn[data-v-9195a656]::after{border:none}.button-hover[data-v-9195a656]{opacity:.7}.margin[data-v-9195a656]{margin:10px}.tag[data-v-9195a656]{background-color:#f2f2f2;color:#333;height:28px;border-radius:28px;box-shadow:none;font-family:PingFangSC-Regular,PingFang SC,sans-serif;font-weight:400;font-style:normal;line-height:28px;text-align:center;width:90px}.c-content[data-v-9195a656]{background-color:#fff;border-top:1px solid #ebeef5;border-bottom:1px solid #ebeef5}.mt-30[data-v-9195a656]{margin-top:%?30?%}.border-top[data-v-9195a656]{border-top:1px solid #ebeef5}.describe[data-v-9195a656]{color:#909399;font-size:%?24?%;padding:%?30?%}.flex-center[data-v-9195a656]{display:flex;align-items:center;justify-content:center;flex-direction:column}.flex-a-c[data-v-9195a656]{align-items:center}.relative[data-v-9195a656]{position:relative}.wes[data-v-9195a656]{\n  /* 多出部分用省略号表示 , 用于一行 */overflow:hidden;word-wrap:normal;white-space:nowrap;text-overflow:ellipsis}.wes-2[data-v-9195a656]{\n  /* 适用于webkit内核和移动端 */display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;overflow:hidden}',""]),t.exports=e},d5db:function(t,e,a){"use strict";a.r(e);var n=a("8c7e"),o=a("6736");for(var i in o)"default"!==i&&function(t){a.d(e,t,(function(){return o[t]}))}(i);a("f0b8");var r,c=a("f0c5"),l=Object(c["a"])(o["default"],n["b"],n["c"],!1,null,"9195a656",null,!1,n["a"],r);e["default"]=l.exports},f0b8:function(t,e,a){"use strict";var n=a("474a"),o=a.n(n);o.a}}]);