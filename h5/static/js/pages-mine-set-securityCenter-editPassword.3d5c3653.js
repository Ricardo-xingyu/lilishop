(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-mine-set-securityCenter-editPassword"],{"2fda":function(e,t,a){var i=a("358e");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var o=a("4f06").default;o("0e75f494",i,!0,{sourceMap:!1,shadowMode:!1})},"358e":function(e,t,a){var i=a("24fb");t=i(!1),t.push([e.i,'@charset "UTF-8";\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 边框颜色 */\n/* 图片加载中颜色 */\n/* 行为相关颜色 */\n/*主题颜色 具体参考   https://ant.design/docs/spec/colors-cn */\n/**微信登录按钮颜色 */\n/**主颜色*/\n/*用于金钱等颜色 */\n/*主题高亮颜色*/\n/*辅助高亮颜色*/\n/*主题高亮背景颜色*/\n/*价格红高亮背景颜色*/\n/*辅助色*/.sub-title[data-v-4289e19b]{font-size:%?24?%;color:#999}.cell[data-v-4289e19b]{margin:%?40?% 0}.login-ball[data-v-4289e19b]{border-bottom-left-radius:%?300?%;height:%?400?%;position:relative}[data-v-4289e19b] .u-form-item--right__content__slot{width:100%;display:block}.title[data-v-4289e19b]{font-size:%?48?%;color:#000;text-align:center}.privacy[data-v-4289e19b]{font-size:%?24?%;color:#999;text-align:center;margin-top:%?360?%;width:100%;display:flex;justify-content:center}span[data-v-4289e19b]{color:$aider-light-color}.form[data-v-4289e19b]{padding:0 %?72?%}.divider[data-v-4289e19b]{margin:%?30?% 0!important}.submit[data-v-4289e19b]{height:%?80?%;line-height:%?80?%;color:#fff;text-align:center;font-size:%?30?%;border-radius:100px}.logo[data-v-4289e19b]{margin-top:%?20?%;width:%?200?%;height:%?200?%;text-align:center}.logo-cell[data-v-4289e19b]{text-align:center}.text-tips[data-v-4289e19b]{text-align:center}.tips[data-v-4289e19b]{position:absolute;bottom:%?10?%;width:100%;text-align:center}.light-color[data-v-4289e19b]{color:#ff6b35}.main-color[data-v-4289e19b]{color:#ff3c2a!important}.bg-light-color[data-v-4289e19b]{background-color:#ff6b35!important}.bg-light-color[data-v-4289e19b] *{background-color:#ff6b35!important}.bg-main-color[data-v-4289e19b]{background-color:#ff3c2a!important}.bg-linear-gradient[data-v-4289e19b]{background-image:linear-gradient(25deg,#fa123b,#ff6b35,#ff9f28,#ffcc03)}.uni-tabbar .uni-tabbar__icon[data-v-4289e19b]{width:20px;height:18px}.flex[data-v-4289e19b]{display:flex}.btn[data-v-4289e19b]{background-color:#ff6b35;color:#fff;border-width:0;border:none;border-radius:44px;height:44px;box-shadow:none;font-weight:400;font-style:normal;line-height:44px;text-align:center}.btn[data-v-4289e19b]::after{border:none}.button-hover[data-v-4289e19b]{opacity:.7}.margin[data-v-4289e19b]{margin:10px}.tag[data-v-4289e19b]{background-color:#f2f2f2;color:#333;height:28px;border-radius:28px;box-shadow:none;font-family:PingFangSC-Regular,PingFang SC,sans-serif;font-weight:400;font-style:normal;line-height:28px;text-align:center;width:90px}.c-content[data-v-4289e19b]{background-color:#fff;border-top:1px solid #ebeef5;border-bottom:1px solid #ebeef5}.mt-30[data-v-4289e19b]{margin-top:%?30?%}.border-top[data-v-4289e19b]{border-top:1px solid #ebeef5}.describe[data-v-4289e19b]{color:#909399;font-size:%?24?%;padding:%?30?%}.flex-center[data-v-4289e19b]{display:flex;align-items:center;justify-content:center;flex-direction:column}.flex-a-c[data-v-4289e19b]{align-items:center}.relative[data-v-4289e19b]{position:relative}.wes[data-v-4289e19b]{\n  /* 多出部分用省略号表示 , 用于一行 */overflow:hidden;word-wrap:normal;white-space:nowrap;text-overflow:ellipsis}.wes-2[data-v-4289e19b]{\n  /* 适用于webkit内核和移动端 */display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;overflow:hidden}.u-form-item[data-v-4289e19b]{margin:%?40?% 0}.sendCode[data-v-4289e19b] .u-form-item--right__content__slot{display:flex}uni-page-body[data-v-4289e19b]{background:#fff}.box[data-v-4289e19b]{padding:%?80?% 0;border-radius:%?20?%}.submit[data-v-4289e19b]{background:#ff6b35}.box-tips[data-v-4289e19b]{margin:0 %?72?%}.verification[data-v-4289e19b]{font-size:%?24?%;color:#999;margin-top:%?10?%}body.?%PAGE?%[data-v-4289e19b]{background:#fff}',""]),e.exports=t},"3b86":function(e,t,a){"use strict";a.r(t);var i=a("5ad4"),o=a.n(i);for(var n in i)"default"!==n&&function(e){a.d(t,e,(function(){return i[e]}))}(n);t["default"]=o.a},"5ad4":function(e,t,a){"use strict";var i=a("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a("5967"),n=a("dd5b"),r=i(a("bd3f")),d=i(a("33cb")),s={components:{myVerification:r.default},data:function(){var e=this;return{uuid:d.default,validateFlage:!1,verificationTitle:[{title:"安全验证",desc:"请输入当前手机号进行安全验证"},{title:"修改密码",desc:"请输入新密码"}],step:0,flage:!1,codeForm:{mobile:"",code:""},newPassword:"",password:"",tips:"",seconds:60,codeRules:{mobile:[{validator:function(t,a,i){return e.$u.test.mobile(a)},message:"手机号码不正确",trigger:["blur"]}],code:[{min:4,max:6,required:!0,message:"请输入验证码",trigger:["blur"]}]}}},onReady:function(){this.$refs.validateCodeForm.setRules(this.codeRules)},watch:{flage:function(e){var t=this;e&&(this.$refs.uCode.canGetCode?(uni.showLoading({title:"正在获取验证码"}),(0,o.sendMobile)(this.codeForm.mobile,"FIND_USER").then((function(e){uni.hideLoading(),200==e.data.code?t.$refs.uCode.start():uni.showToast({title:e.data.message,duration:2e3,icon:"none"})}))):this.$u.toast("请倒计时结束后再发送"))}},methods:{updatePassword:function(){(0,o.modifyPass)({newPassword:(0,n.md5)(this.newPassword),password:(0,n.md5)(this.password)}).then((function(e){e.data.success&&(uni.showToast({title:"修改成功!",duration:2e3,icon:"none"}),setTimeout((function(){uni.navigateBack({delta:1})}),1e3))}))},verification:function(e){this.flage=e==this.$store.state.verificationKey},validatePhone:function(){var e=this;this.$refs.validateCodeForm.validate((function(t){t&&(0,o.resetByMobile)(e.codeForm).then((function(t){t.data.success&&(e.validateFlage=!e.validateFlage,uni.showToast({title:"验证成功!",icon:"none"}))}))}))},codeChange:function(e){this.tips=e},end:function(){},isUserPhone:function(){var e=!1,t=this.$options.filters.isLogin();return t.mobile!=this.codeForm.mobile?(uni.showToast({title:"请输入当前绑定手机号",icon:"none"}),e=!1):e=!0,e},getCode:function(){if(this.isUserPhone()){if("重新获取"==this.tips&&(this.flage=!0),!this.$u.test.mobile(this.codeForm.mobile))return uni.showToast({title:"请输入正确手机号",icon:"none"}),!1;if(!this.flage)return this.$refs.verification.hide(),!1}},start:function(){this.$u.toast("验证码已发送"),this.flage=!1}}};t.default=s},bd49:function(e,t,a){"use strict";a.d(t,"b",(function(){return o})),a.d(t,"c",(function(){return n})),a.d(t,"a",(function(){return i}));var i={uForm:a("3663").default,uFormItem:a("6690").default,uInput:a("f665").default,uVerificationCode:a("2a9f").default},o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-uni-view",{staticClass:"box"},[a("v-uni-view",{staticClass:"box-tips"},[a("h2",[e._v(e._s(e.verificationTitle[0==e.validateFlage?0:1].title))]),a("v-uni-view",{staticClass:"verification"},[e._v(e._s(e.verificationTitle[e.step].desc))])],1),a("u-form",{ref:"validateCodeForm",staticClass:"form",attrs:{model:e.codeForm}},[e.validateFlage?e._e():a("v-uni-view",[a("u-form-item",{attrs:{"label-width":"120",label:"手机号",prop:"mobile"}},[a("u-input",{attrs:{maxlength:"11",placeholder:"请输入您的手机号"},model:{value:e.codeForm.mobile,callback:function(t){e.$set(e.codeForm,"mobile",t)},expression:"codeForm.mobile"}})],1),a("u-form-item",{staticClass:"sendCode",attrs:{"label-width":"120",prop:"code",label:"验证码"}},[a("u-input",{attrs:{placeholder:"请输入验证码"},model:{value:e.codeForm.code,callback:function(t){e.$set(e.codeForm,"code",t)},expression:"codeForm.code"}}),a("u-verification-code",{ref:"uCode",attrs:{"unique-key":"page-edit",seconds:e.seconds},on:{end:function(t){arguments[0]=t=e.$handleEvent(t),e.end.apply(void 0,arguments)},start:function(t){arguments[0]=t=e.$handleEvent(t),e.start.apply(void 0,arguments)},change:function(t){arguments[0]=t=e.$handleEvent(t),e.codeChange.apply(void 0,arguments)}}}),a("v-uni-view",{staticClass:"text-tips",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.getCode.apply(void 0,arguments)}}},[e._v(e._s(e.tips))])],1),a("v-uni-view",{staticClass:"submit",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.validatePhone.apply(void 0,arguments)}}},[e._v("验证")]),a("myVerification",{ref:"verification",staticClass:"verification",attrs:{"keep-running":!0,business:"FIND_USER"},on:{send:function(t){arguments[0]=t=e.$handleEvent(t),e.verification.apply(void 0,arguments)}}})],1),e.validateFlage?a("v-uni-view",[a("u-form-item",{attrs:{"label-width":"120",label:"旧密码"}},[a("u-input",{attrs:{type:"password",placeholder:"请输入您的旧密码"},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}})],1),a("u-form-item",{attrs:{"label-width":"120",label:"新密码"}},[a("u-input",{attrs:{type:"password",placeholder:"请输入您的新密码"},model:{value:e.newPassword,callback:function(t){e.newPassword=t},expression:"newPassword"}})],1),a("v-uni-view",{staticClass:"submit",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.updatePassword.apply(void 0,arguments)}}},[e._v("修改密码")])],1):e._e()],1)],1)},n=[]},efbc:function(e,t,a){"use strict";a.r(t);var i=a("bd49"),o=a("3b86");for(var n in o)"default"!==n&&function(e){a.d(t,e,(function(){return o[e]}))}(n);a("f8f3");var r,d=a("f0c5"),s=Object(d["a"])(o["default"],i["b"],i["c"],!1,null,"4289e19b",null,!1,i["a"],r);t["default"]=s.exports},f8f3:function(e,t,a){"use strict";var i=a("2fda"),o=a.n(i);o.a}}]);