(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-mine-msgTips-sysMsg-index"],{"0047":function(e,a,t){var n=t("24fb");a=n(!1),a.push([e.i,'@charset "UTF-8";\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 边框颜色 */\n/* 图片加载中颜色 */\n/* 行为相关颜色 */\n/*主题颜色 具体参考   https://ant.design/docs/spec/colors-cn */\n/**微信登录按钮颜色 */\n/**主颜色*/\n/*用于金钱等颜色 */\n/*主题高亮颜色*/\n/*辅助高亮颜色*/\n/*主题高亮背景颜色*/\n/*价格红高亮背景颜色*/\n/*辅助色*/.light-color[data-v-2adf7e54]{color:#ff6b35}.main-color[data-v-2adf7e54]{color:#ff3c2a!important}.bg-light-color[data-v-2adf7e54]{background-color:#ff6b35!important}.bg-light-color[data-v-2adf7e54] *{background-color:#ff6b35!important}.bg-main-color[data-v-2adf7e54]{background-color:#ff3c2a!important}.bg-linear-gradient[data-v-2adf7e54]{background-image:linear-gradient(25deg,#fa123b,#ff6b35,#ff9f28,#ffcc03)}.uni-tabbar .uni-tabbar__icon[data-v-2adf7e54]{width:20px;height:18px}.flex[data-v-2adf7e54]{display:flex}.btn[data-v-2adf7e54]{background-color:#ff6b35;color:#fff;border-width:0;border:none;border-radius:44px;height:44px;box-shadow:none;font-weight:400;font-style:normal;line-height:44px;text-align:center}.btn[data-v-2adf7e54]::after{border:none}.button-hover[data-v-2adf7e54]{opacity:.7}.margin[data-v-2adf7e54]{margin:10px}.tag[data-v-2adf7e54]{background-color:#f2f2f2;color:#333;height:28px;border-radius:28px;box-shadow:none;font-family:PingFangSC-Regular,PingFang SC,sans-serif;font-weight:400;font-style:normal;line-height:28px;text-align:center;width:90px}.c-content[data-v-2adf7e54]{background-color:#fff;border-top:1px solid #ebeef5;border-bottom:1px solid #ebeef5}.mt-30[data-v-2adf7e54]{margin-top:%?30?%}.border-top[data-v-2adf7e54]{border-top:1px solid #ebeef5}.describe[data-v-2adf7e54]{color:#909399;font-size:%?24?%;padding:%?30?%}.flex-center[data-v-2adf7e54]{display:flex;align-items:center;justify-content:center;flex-direction:column}.flex-a-c[data-v-2adf7e54]{align-items:center}.relative[data-v-2adf7e54]{position:relative}.wes[data-v-2adf7e54]{\n  /* 多出部分用省略号表示 , 用于一行 */overflow:hidden;word-wrap:normal;white-space:nowrap;text-overflow:ellipsis}.wes-2[data-v-2adf7e54]{\n  /* 适用于webkit内核和移动端 */display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;overflow:hidden}.is_read[data-v-2adf7e54]{position:absolute;right:25px;top:%?80?%;z-index:999}.container[data-v-2adf7e54]{background:#f9f9f9;min-height:100vh}.red[data-v-2adf7e54]{color:coral;font-size:%?100?%}.msgMsg[data-v-2adf7e54]{text-align:center;color:#909399}.msgItem[data-v-2adf7e54]{padding:1em 0;position:relative}',""]),e.exports=a},"4fb4":function(e,a,t){"use strict";var n=t("ff32"),i=t.n(n);i.a},"759f":function(e,a,t){"use strict";t.d(a,"b",(function(){return i})),t.d(a,"c",(function(){return r})),t.d(a,"a",(function(){return n}));var n={uCard:t("343c").default,uniLoadMore:t("24a9").default},i=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("v-uni-view",{staticClass:"container"},[e._l(e.messageList,(function(a,n){return[t("v-uni-view",{key:n+"_0",staticClass:"msgItem"},[t("div",{staticClass:"is_read"},[a.is_read?t("span"):t("span",{staticClass:"red"},[e._v("·")])]),t("div",{staticClass:"msgMsg"},[e._v(e._s(e.$u.timeFormat(a.send_time,"yyyy-mm-dd")))]),t("u-card",{attrs:{title:e.title,"title-size":35,border:!1}},[t("v-uni-view",{attrs:{slot:"body"},slot:"body"},[t("v-uni-view",{staticClass:"u-body-item u-flex u-row-between u-p-b-0"},[t("v-uni-view",{staticClass:"u-body-item-title u-line-2"},[e._v(e._s(a.content))])],1)],1)],1)],1)]})),t("uni-load-more",{attrs:{status:e.loadStatus}})],2)},r=[]},"86a4":function(e,a,t){"use strict";t.r(a);var n=t("759f"),i=t("d1a0");for(var r in i)"default"!==r&&function(e){t.d(a,e,(function(){return i[e]}))}(r);t("4fb4");var o,s=t("f0c5"),d=Object(s["a"])(i["default"],n["b"],n["c"],!1,null,"2adf7e54",null,!1,n["a"],o);a["default"]=d.exports},"96a1":function(e,a,t){"use strict";var n=t("dbce"),i=t("4ea4");t("d81d"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var r=i(t("2909"));t("96cf");var o=i(t("1da1")),s=i(t("5530")),d=t("26cb"),f=n(t("7bae")),c={data:function(){return{title:"系统消息",subTitle:"未读",finished:!1,loadStatus:"more",params:{pageNumber:0,pageSize:5},messageList:[]}},onLoad:function(){this.GET_MessageList(!0)},onReachBottom:function(){this.params.pageNumber++,this.GET_MessageList(!1)},methods:(0,s.default)((0,s.default)({},(0,d.mapMutations)(["logout"])),{},{GET_MessageList:function(e){var a=this;e&&(this.params.pageNumber=1,this.messageList=[]),uni.showLoading({title:"加载中"}),f.getMessages(this.params).then(function(){var e=(0,o.default)(regeneratorRuntime.mark((function e(t){var n,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:uni.hideLoading(),n=t.data,n&&n.length||((i=a.messageList).push.apply(i,(0,r.default)(n.data)),a.handleReadPageMessages());case 3:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}())},handleReadPageMessages:function(){var e=this.messageList.map((function(e){return e.id})).join(",");f.messageMarkAsRead(e).then((0,o.default)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)}))))}})};a.default=c},d1a0:function(e,a,t){"use strict";t.r(a);var n=t("96a1"),i=t.n(n);for(var r in n)"default"!==r&&function(e){t.d(a,e,(function(){return n[e]}))}(r);a["default"]=i.a},ff32:function(e,a,t){var n=t("0047");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var i=t("4f06").default;i("7f62de2e",n,!0,{sourceMap:!1,shadowMode:!1})}}]);