(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-mine-set-securityCenter-editPassword"],{"0204":function(t,e,a){"use strict";a.r(e);var i=a("879c"),o=a.n(i);for(var n in i)"default"!==n&&function(t){a.d(e,t,(function(){return i[t]}))}(n);e["default"]=o.a},"0bfe":function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 边框颜色 */\n/* 图片加载中颜色 */\n/* 行为相关颜色 */\n/*主题颜色 具体参考   https://ant.design/docs/spec/colors-cn */\n/**微信登录按钮颜色 */\n/**主颜色*/\n/*用于金钱等颜色 */\n/*主题高亮颜色*/\n/*辅助高亮颜色*/\n/*主题高亮背景颜色*/\n/*价格红高亮背景颜色*/\n/*辅助色*/.sub-title[data-v-2108ab5b]{font-size:%?24?%;color:#999}.cell[data-v-2108ab5b]{margin:%?40?% 0}.login-ball[data-v-2108ab5b]{border-bottom-left-radius:%?300?%;height:%?400?%;position:relative}[data-v-2108ab5b] .u-form-item--right__content__slot{width:100%;display:block}.title[data-v-2108ab5b]{font-size:%?48?%;color:#000;text-align:center}.privacy[data-v-2108ab5b]{font-size:%?24?%;color:#999;text-align:center;margin-top:%?360?%;width:100%;display:flex;justify-content:center}span[data-v-2108ab5b]{color:$aider-light-color}.form[data-v-2108ab5b]{padding:0 %?72?%}.divider[data-v-2108ab5b]{margin:%?30?% 0!important}.submit[data-v-2108ab5b]{height:%?80?%;line-height:%?80?%;color:#fff;text-align:center;font-size:%?30?%;border-radius:100px}.logo[data-v-2108ab5b]{margin-top:%?20?%;width:%?200?%;height:%?200?%;text-align:center}.logo-cell[data-v-2108ab5b]{text-align:center}.text-tips[data-v-2108ab5b]{text-align:center}.tips[data-v-2108ab5b]{position:absolute;bottom:%?10?%;width:100%;text-align:center}.light-color[data-v-2108ab5b]{color:#ff6b35}.main-color[data-v-2108ab5b]{color:#ff3c2a!important}.bg-light-color[data-v-2108ab5b]{background-color:#ff6b35!important}.bg-light-color[data-v-2108ab5b] *{background-color:#ff6b35!important}.bg-main-color[data-v-2108ab5b]{background-color:#ff3c2a!important}.bg-linear-gradient[data-v-2108ab5b]{background-image:linear-gradient(25deg,#fa123b,#ff6b35,#ff9f28,#ffcc03)}.uni-tabbar .uni-tabbar__icon[data-v-2108ab5b]{width:20px;height:18px}.flex[data-v-2108ab5b]{display:flex}.btn[data-v-2108ab5b]{background-color:#ff6b35;color:#fff;border-width:0;border:none;border-radius:44px;height:44px;box-shadow:none;font-weight:400;font-style:normal;line-height:44px;text-align:center}.btn[data-v-2108ab5b]::after{border:none}.button-hover[data-v-2108ab5b]{opacity:.7}.margin[data-v-2108ab5b]{margin:10px}.tag[data-v-2108ab5b]{background-color:#f2f2f2;color:#333;height:28px;border-radius:28px;box-shadow:none;font-family:PingFangSC-Regular,PingFang SC,sans-serif;font-weight:400;font-style:normal;line-height:28px;text-align:center;width:90px}.c-content[data-v-2108ab5b]{background-color:#fff;border-top:1px solid #ebeef5;border-bottom:1px solid #ebeef5}.mt-30[data-v-2108ab5b]{margin-top:%?30?%}.border-top[data-v-2108ab5b]{border-top:1px solid #ebeef5}.describe[data-v-2108ab5b]{color:#909399;font-size:%?24?%;padding:%?30?%}.flex-center[data-v-2108ab5b]{display:flex;align-items:center;justify-content:center;flex-direction:column}.flex-a-c[data-v-2108ab5b]{align-items:center}.relative[data-v-2108ab5b]{position:relative}.wes[data-v-2108ab5b]{\n  /* 多出部分用省略号表示 , 用于一行 */overflow:hidden;word-wrap:normal;white-space:nowrap;text-overflow:ellipsis}.wes-2[data-v-2108ab5b]{\n  /* 适用于webkit内核和移动端 */display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;overflow:hidden}.u-form-item[data-v-2108ab5b]{margin:%?40?% 0}.sendCode[data-v-2108ab5b] .u-form-item--right__content__slot{display:flex}uni-page-body[data-v-2108ab5b]{background:#fff}.box[data-v-2108ab5b]{padding:%?80?% 0;border-radius:%?20?%}.submit[data-v-2108ab5b]{background:#ff6b35}.box-tips[data-v-2108ab5b]{margin:0 %?72?%}.verification[data-v-2108ab5b]{font-size:%?24?%;color:#999;margin-top:%?10?%}body.?%PAGE?%[data-v-2108ab5b]{background:#fff}',""]),t.exports=e},7132:function(t,e,a){var i=a("0bfe");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=a("4f06").default;o("158ced65",i,!0,{sourceMap:!1,shadowMode:!1})},"879c":function(t,e,a){"use strict";var i=a("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=a("8773"),n=a("3cb2"),r=i(a("5eaf")),s=i(a("548a")),d={components:{myVerification:r.default},data:function(){var t=this;return{uuid:s.default,validateFlage:!1,verificationTitle:[{title:"安全验证",desc:"请输入当前手机号进行安全验证"},{title:"修改密码",desc:"请输入新密码"}],step:0,flage:!1,codeForm:{mobile:"",code:""},newPassword:"",password:"",tips:"",seconds:60,codeRules:{mobile:[{validator:function(e,a,i){return t.$u.test.mobile(a)},message:"手机号码不正确",trigger:["blur"]}],code:[{min:4,max:6,required:!0,message:"请输入验证码",trigger:["blur"]}]}}},onReady:function(){this.$refs.validateCodeForm.setRules(this.codeRules)},watch:{flage:function(t){var e=this;t&&(this.$refs.uCode.canGetCode?(uni.showLoading({title:"正在获取验证码"}),(0,o.sendMobile)(this.codeForm.mobile,"FIND_USER").then((function(t){uni.hideLoading(),200==t.data.code?e.$refs.uCode.start():uni.showToast({title:t.data.message,duration:2e3,icon:"none"})}))):this.$u.toast("请倒计时结束后再发送"))}},methods:{updatePassword:function(){(0,o.modifyPass)({newPassword:(0,n.md5)(this.newPassword),password:(0,n.md5)(this.password)}).then((function(t){t.data.success&&(uni.showToast({title:"修改成功!",duration:2e3,icon:"none"}),setTimeout((function(){uni.navigateBack({delta:1})}),1e3))}))},verification:function(t){this.flage=t==this.$store.state.verificationKey},validatePhone:function(){var t=this;this.$refs.validateCodeForm.validate((function(e){e&&(0,o.resetByMobile)(t.codeForm).then((function(e){e.data.success&&(t.validateFlage=!t.validateFlage,uni.showToast({title:"验证成功!",icon:"none"}))}))}))},codeChange:function(t){this.tips=t},end:function(){},isUserPhone:function(){var t=!1,e=this.$options.filters.isLogin();return e.mobile!=this.codeForm.mobile?(uni.showToast({title:"请输入当前绑定手机号",icon:"none"}),t=!1):t=!0,t},getCode:function(){if(this.isUserPhone()){if("重新获取"==this.tips&&(this.flage=!0),!this.$u.test.mobile(this.codeForm.mobile))return uni.showToast({title:"请输入正确手机号",icon:"none"}),!1;if(!this.flage)return this.$refs.verification.hide(),!1}},start:function(){this.$u.toast("验证码已发送"),this.flage=!1}}};e.default=d},"881d":function(t,e,a){"use strict";var i=a("7132"),o=a.n(i);o.a},"8a95":function(t,e,a){"use strict";a.d(e,"b",(function(){return o})),a.d(e,"c",(function(){return n})),a.d(e,"a",(function(){return i}));var i={uForm:a("7dc7").default,uFormItem:a("f73c").default,uInput:a("2c52").default,uVerificationCode:a("13c3").default},o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"box"},[a("v-uni-view",{staticClass:"box-tips"},[a("h2",[t._v(t._s(t.verificationTitle[0==t.validateFlage?0:1].title))]),a("v-uni-view",{staticClass:"verification"},[t._v(t._s(t.verificationTitle[t.step].desc))])],1),a("u-form",{ref:"validateCodeForm",staticClass:"form",attrs:{model:t.codeForm}},[t.validateFlage?t._e():a("v-uni-view",[a("u-form-item",{attrs:{"label-width":"120",label:"手机号",prop:"mobile"}},[a("u-input",{attrs:{maxlength:"11",placeholder:"请输入您的手机号"},model:{value:t.codeForm.mobile,callback:function(e){t.$set(t.codeForm,"mobile",e)},expression:"codeForm.mobile"}})],1),a("u-form-item",{staticClass:"sendCode",attrs:{"label-width":"120",prop:"code",label:"验证码"}},[a("u-input",{attrs:{placeholder:"请输入验证码"},model:{value:t.codeForm.code,callback:function(e){t.$set(t.codeForm,"code",e)},expression:"codeForm.code"}}),a("u-verification-code",{ref:"uCode",attrs:{"unique-key":"page-edit",seconds:t.seconds},on:{end:function(e){arguments[0]=e=t.$handleEvent(e),t.end.apply(void 0,arguments)},start:function(e){arguments[0]=e=t.$handleEvent(e),t.start.apply(void 0,arguments)},change:function(e){arguments[0]=e=t.$handleEvent(e),t.codeChange.apply(void 0,arguments)}}}),a("v-uni-view",{staticClass:"text-tips",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.getCode.apply(void 0,arguments)}}},[t._v(t._s(t.tips))])],1),a("v-uni-view",{staticClass:"submit",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.validatePhone.apply(void 0,arguments)}}},[t._v("验证")]),a("myVerification",{ref:"verification",staticClass:"verification",attrs:{"keep-running":!0,business:"FIND_USER"},on:{send:function(e){arguments[0]=e=t.$handleEvent(e),t.verification.apply(void 0,arguments)}}})],1),t.validateFlage?a("v-uni-view",[a("u-form-item",{attrs:{"label-width":"120",label:"旧密码"}},[a("u-input",{attrs:{type:"password",placeholder:"请输入您的旧密码"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1),a("u-form-item",{attrs:{"label-width":"120",label:"新密码"}},[a("u-input",{attrs:{type:"password",placeholder:"请输入您的新密码"},model:{value:t.newPassword,callback:function(e){t.newPassword=e},expression:"newPassword"}})],1),a("v-uni-view",{staticClass:"submit",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.updatePassword.apply(void 0,arguments)}}},[t._v("修改密码")])],1):t._e()],1)],1)},n=[]},ba64:function(t,e,a){"use strict";a.r(e);var i=a("8a95"),o=a("0204");for(var n in o)"default"!==n&&function(t){a.d(e,t,(function(){return o[t]}))}(n);a("881d");var r,s=a("f0c5"),d=Object(s["a"])(o["default"],i["b"],i["c"],!1,null,"2108ab5b",null,!1,i["a"],r);e["default"]=d.exports}}]);