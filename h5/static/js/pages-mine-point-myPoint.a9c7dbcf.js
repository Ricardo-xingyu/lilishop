(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-mine-point-myPoint"],{1389:function(t,e,a){"use strict";var o=a("4ea4");a("99af"),Object.defineProperty(e,"__esModule",{value:!0}),e.feedBack=i,e.withdrawalApply=r,e.payCallback=d,e.recharge=l,e.getUserRecharge=u,e.getWalletLog=s,e.getCoupons=c,e.receiveCoupons=f,e.getPointsData=m,e.getComments=p,e.getFootprintNum=h,e.commentsMemberOrder=b,e.AppendCommentsOrder=v,e.consultating=g,e.getGoodsCollection=w,e.collectionGoods=x,e.deleteGoodsCollection=y,e.deleteStoreCollection=k,e.getGoodsIsCollect=T,e.collectionStore=_,e.getUserInfo=M,e.getUserWallet=C,e.saveUserInfo=E,e.addReceipt=q,e.getGoodsComments=P,e.getGoodsCommentsCount=G,e.getNoReadMessageNum=S,e.myTrackList=O,e.deleteHistoryListId=L,e.getMemberCoupons=D,e.getCouponsNum=j,e.getMemberPointSum=N;o(a("a3b0"));var n=a("75c7");function i(t){return n.http.request({url:"/other/feedback",method:n.Method.POST,needToken:!0,params:t})}function r(t){return n.http.request({url:"/wallet/wallet/withdrawal",method:n.Method.POST,needToken:!0,params:t})}function d(t){return n.http.request({url:"/payment/cashier/result",method:n.Method.GET,params:t})}function l(t){return n.http.request({url:"/trade/recharge",method:n.Method.POST,params:t})}function u(t){return n.http.request({url:"/member/recharge",method:n.Method.GET,needToken:!0,params:t})}function s(t){return n.http.request({url:"/wallet/log",method:n.Method.GET,needToken:!0,params:t})}function c(t){return n.http.request({url:"/promotion/coupon/getCoupons",method:n.Method.GET,needToken:!0,params:t})}function f(t){return n.http.request({url:"/promotion/coupon/receive/".concat(t),method:n.Method.GET,needToken:!0})}function m(t){return n.http.request({url:"member/memberPointsHistory/getByPage",method:n.Method.GET,needToken:!0,params:t})}function p(t){return n.http.request({url:"/member/evaluation",method:n.Method.GET,needToken:!0,params:t})}function h(t){return n.http.request({url:"/member/footprint/getFootprintNum",method:n.Method.GET,needToken:!0,params:t})}function b(t){return n.http.request({url:"/member/evaluation",method:n.Method.POST,needToken:!0,header:{"content-type":"application/x-www-form-urlencoded"},data:t})}function v(t){return n.http.request({url:"members/comments/additional",method:n.Method.POST,needToken:!0,header:{"content-type":"application/x-www-form-urlencoded"},data:t})}function g(t,e,a){return n.http.request({url:"members/asks",method:n.Method.POST,header:{"content-type":"application/x-www-form-urlencoded"},needToken:!0,data:{goods_id:t,ask_content:e,anonymous:a}})}function w(t,e){return n.http.request({url:"/member/collection/".concat(e),method:n.Method.GET,needToken:!0,loading:!1,message:!1,params:t})}function x(t,e){return n.http.request({url:"/member/collection/add/".concat(t,"/").concat(e),method:n.Method.POST,needToken:!0})}function y(t){return Array.isArray(t)&&(t=t.join(",")),n.http.request({url:"/member/collection/delete/GOODS/".concat(t),method:n.Method.DELETE,needToken:!0})}function k(t){return n.http.request({url:"/member/collection/delete/STORE/".concat(t),method:n.Method.DELETE,needToken:!0})}function T(t,e){return n.http.request({url:"/member/collection/isCollection/".concat(t,"/").concat(e),method:n.Method.GET,needToken:!0,loading:!1})}function _(t){return n.http.request({url:"members/collection/store",header:{"content-type":"application/x-www-form-urlencoded"},method:n.Method.POST,data:{store_id:t}})}function M(){return n.http.request({url:"/passport/member",method:n.Method.GET,needToken:!0})}function C(){return n.http.request({url:"/wallet/wallet",method:n.Method.GET,needToken:!0})}function E(t){return n.http.request({url:"/passport/member/editOwn",method:n.Method.PUT,header:{"content-type":"application/x-www-form-urlencoded"},needToken:!0,data:t})}function q(t){return n.http.request({url:"/trade/receipt",method:n.Method.POST,needToken:!0,params:t})}function P(t,e){return n.http.request({url:"/member/evaluation/".concat(t,"/goodsEvaluation"),method:n.Method.GET,loading:!1,params:e})}function G(t){return n.http.request({url:"/member/evaluation/".concat(t,"/evaluationNumber"),method:n.Method.GET,loading:!1})}function S(){return n.http.request({url:"members/member-nocice-logs/number",method:n.Method.GET,needToken:!0})}function O(t){return n.http.request({url:"/member/footprint",method:n.Method.GET,needToken:!0,params:t})}function L(t){return n.http.request({url:"/member/footprint/delByIds/".concat(t),method:n.Method.DELETE,needToken:!0})}function D(t){return n.http.request({url:"/promotion/coupon/getCoupons",method:n.Method.GET,needToken:!0,params:t})}function j(){return n.http.request({url:"/promotion/coupon/getCouponsNum",method:n.Method.GET,needToken:!0})}function N(){return n.http.request({url:"member/memberPointsHistory/getMemberPointsHistoryVO",method:n.Method.GET})}},"1d70":function(t,e,a){"use strict";a.r(e);var o=a("8fa6"),n=a.n(o);for(var i in o)"default"!==i&&function(t){a.d(e,t,(function(){return o[t]}))}(i);e["default"]=n.a},"21c7":function(t,e,a){var o=a("24fb");e=o(!1),e.push([t.i,".uni-load-more[data-v-4fa20b1a]{display:flex;flex-direction:row;height:%?80?%;align-items:center;justify-content:center}.uni-load-more__text[data-v-4fa20b1a]{font-size:%?28?%;color:#999}.uni-load-more__img[data-v-4fa20b1a]{height:24px;width:24px;margin-right:10px}.uni-load-more__img > uni-view[data-v-4fa20b1a]{position:absolute}.uni-load-more__img > uni-view uni-view[data-v-4fa20b1a]{width:6px;height:2px;border-top-left-radius:1px;border-bottom-left-radius:1px;background:#999;position:absolute;opacity:.2;-webkit-transform-origin:50%;transform-origin:50%;-webkit-animation:load-data-v-4fa20b1a 1.56s ease infinite;animation:load-data-v-4fa20b1a 1.56s ease infinite}.uni-load-more__img > uni-view uni-view[data-v-4fa20b1a]:nth-child(1){-webkit-transform:rotate(90deg);transform:rotate(90deg);top:2px;left:9px}.uni-load-more__img > uni-view uni-view[data-v-4fa20b1a]:nth-child(2){-webkit-transform:rotate(180deg);transform:rotate(180deg);top:11px;right:0}.uni-load-more__img > uni-view uni-view[data-v-4fa20b1a]:nth-child(3){-webkit-transform:rotate(270deg);transform:rotate(270deg);bottom:2px;left:9px}.uni-load-more__img > uni-view uni-view[data-v-4fa20b1a]:nth-child(4){top:11px;left:0}.load1[data-v-4fa20b1a],\n.load2[data-v-4fa20b1a],\n.load3[data-v-4fa20b1a]{height:24px;width:24px}.load2[data-v-4fa20b1a]{-webkit-transform:rotate(30deg);transform:rotate(30deg)}.load3[data-v-4fa20b1a]{-webkit-transform:rotate(60deg);transform:rotate(60deg)}.load1 uni-view[data-v-4fa20b1a]:nth-child(1){-webkit-animation-delay:0s;animation-delay:0s}.load2 uni-view[data-v-4fa20b1a]:nth-child(1){-webkit-animation-delay:.13s;animation-delay:.13s}.load3 uni-view[data-v-4fa20b1a]:nth-child(1){-webkit-animation-delay:.26s;animation-delay:.26s}.load1 uni-view[data-v-4fa20b1a]:nth-child(2){-webkit-animation-delay:.39s;animation-delay:.39s}.load2 uni-view[data-v-4fa20b1a]:nth-child(2){-webkit-animation-delay:.52s;animation-delay:.52s}.load3 uni-view[data-v-4fa20b1a]:nth-child(2){-webkit-animation-delay:.65s;animation-delay:.65s}.load1 uni-view[data-v-4fa20b1a]:nth-child(3){-webkit-animation-delay:.78s;animation-delay:.78s}.load2 uni-view[data-v-4fa20b1a]:nth-child(3){-webkit-animation-delay:.91s;animation-delay:.91s}.load3 uni-view[data-v-4fa20b1a]:nth-child(3){-webkit-animation-delay:1.04s;animation-delay:1.04s}.load1 uni-view[data-v-4fa20b1a]:nth-child(4){-webkit-animation-delay:1.17s;animation-delay:1.17s}.load2 uni-view[data-v-4fa20b1a]:nth-child(4){-webkit-animation-delay:1.3s;animation-delay:1.3s}.load3 uni-view[data-v-4fa20b1a]:nth-child(4){-webkit-animation-delay:1.43s;animation-delay:1.43s}@-webkit-keyframes load-data-v-4fa20b1a{0%{opacity:1}100%{opacity:.2}}",""]),t.exports=e},4496:function(t,e,a){"use strict";var o;a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return i})),a.d(e,"a",(function(){return o}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"uni-load-more"},[a("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:"loading"===t.status&&t.showIcon,expression:"status === 'loading' && showIcon"}],staticClass:"uni-load-more__img"},[a("v-uni-view",{staticClass:"load1"},[a("v-uni-view",{style:{background:t.color}}),a("v-uni-view",{style:{background:t.color}}),a("v-uni-view",{style:{background:t.color}}),a("v-uni-view",{style:{background:t.color}})],1),a("v-uni-view",{staticClass:"load2"},[a("v-uni-view",{style:{background:t.color}}),a("v-uni-view",{style:{background:t.color}}),a("v-uni-view",{style:{background:t.color}}),a("v-uni-view",{style:{background:t.color}})],1),a("v-uni-view",{staticClass:"load3"},[a("v-uni-view",{style:{background:t.color}}),a("v-uni-view",{style:{background:t.color}}),a("v-uni-view",{style:{background:t.color}}),a("v-uni-view",{style:{background:t.color}})],1)],1),t.showText?a("v-uni-text",{staticClass:"uni-load-more__text",style:{color:t.color}},[t._v(t._s("more"===t.status?t.contentText.contentdown:"loading"===t.status?t.contentText.contentrefresh:t.contentText.contentnomore))]):t._e()],1)},i=[]},"4b47":function(t,e,a){"use strict";var o=a("c149"),n=a.n(o);n.a},"4bc1":function(t,e,a){"use strict";a.r(e);var o=a("c828"),n=a.n(o);for(var i in o)"default"!==i&&function(t){a.d(e,t,(function(){return o[t]}))}(i);e["default"]=n.a},5469:function(t,e,a){"use strict";a.r(e);var o=a("4496"),n=a("1d70");for(var i in n)"default"!==i&&function(t){a.d(e,t,(function(){return n[t]}))}(i);a("6507");var r,d=a("f0c5"),l=Object(d["a"])(n["default"],o["b"],o["c"],!1,null,"4fa20b1a",null,!1,o["a"],r);e["default"]=l.exports},"58dd":function(t,e,a){"use strict";a.r(e);var o=a("7184"),n=a("4bc1");for(var i in n)"default"!==i&&function(t){a.d(e,t,(function(){return n[t]}))}(i);a("4b47");var r,d=a("f0c5"),l=Object(d["a"])(n["default"],o["b"],o["c"],!1,null,"b9547a84",null,!1,o["a"],r);e["default"]=l.exports},6507:function(t,e,a){"use strict";var o=a("f438"),n=a.n(o);n.a},7184:function(t,e,a){"use strict";a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return i})),a.d(e,"a",(function(){return o}));var o={uRow:a("0790").default,uCol:a("083f").default,uniLoadMore:a("5469").default},n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"content"},[a("v-uni-view",{staticClass:"portrait-box"},[a("v-uni-image",{attrs:{src:"/static/pointTrade/point_bg_1.png",mode:""}}),a("v-uni-image",{staticClass:"point-img",attrs:{src:"/static/pointTrade/tradehall.png"}}),a("v-uni-view",{staticClass:"position-point"})],1),a("u-row",{staticClass:"portrait-box2"},[a("u-col",{staticClass:"portrait-box2-col",attrs:{span:"6",gutter:16}},[a("v-uni-text",[t._v("累计获得：")]),a("v-uni-text",{staticClass:"pcolor"},[t._v(t._s(t.pointData.point||0))])],1),a("u-col",{staticClass:"portrait-box2-col",attrs:{span:"6"}},[a("v-uni-text",[t._v("未使用：")]),a("v-uni-text",{staticClass:"pcolor"},[t._v(t._s(t.pointData.variablePoint||0))])],1)],1),a("div",{staticClass:"point-list"},[t._l(t.pointList,(function(e,o){return a("v-uni-view",{key:o,staticClass:"point-item"},[a("v-uni-view",[a("v-uni-view",[t._v(t._s(e.content))]),a("v-uni-view",[t._v(t._s(e.createTime))])],1),a("v-uni-view",[a("span",[t._v(t._s("INCREASE"==e.pointType?"+":"-"))]),t._v(t._s(e.variablePoint))])],1)})),a("uni-load-more",{attrs:{status:t.count.loadStatus}})],2)],1)},i=[]},"8fa6":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o={name:"uni-load-more",props:{status:{type:String,default:"more"},showIcon:{type:Boolean,default:!0},showText:{type:Boolean,default:!0},color:{type:String,default:"#777777"},contentText:{type:Object,default:function(){return{contentdown:"上拉显示更多",contentrefresh:"正在加载...",contentnomore:"没有更多数据了"}}}},data:function(){return{}}};e.default=o},c149:function(t,e,a){var o=a("f99e");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var n=a("4f06").default;n("5185e450",o,!0,{sourceMap:!1,shadowMode:!1})},c828:function(t,e,a){"use strict";var o=a("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=o(a("2909")),i=a("1389"),r={data:function(){return{count:{loadStatus:"more"},pointList:[],params:{pageNumber:1,pageSize:10},pointData:{}}},onLoad:function(){this.initPointData(),this.getList()},onReachBottom:function(){this.params.pageNumber++,this.getList()},methods:{getList:function(){var t=this,e=this.params;uni.showLoading({title:"加载中"}),(0,i.getPointsData)(e).then((function(e){if(uni.hideLoading(),e.data.success){var a,o,i=e.data.result.records;if(i.length<10)t.$set(t.count,"loadStatus","noMore"),(a=t.pointList).push.apply(a,(0,n.default)(i));else(o=t.pointList).push.apply(o,(0,n.default)(i)),i.length<10&&t.$set(t.count,"loadStatus","noMore")}}))},initPointData:function(){var t=this;(0,i.getMemberPointSum)().then((function(e){t.pointData=e.data.result}))}}};e.default=r},f438:function(t,e,a){var o=a("21c7");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var n=a("4f06").default;n("d68fb5e4",o,!0,{sourceMap:!1,shadowMode:!1})},f99e:function(t,e,a){var o=a("24fb");e=o(!1),e.push([t.i,'@charset "UTF-8";\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 边框颜色 */\n/* 图片加载中颜色 */\n/* 行为相关颜色 */\n/*主题颜色 具体参考   https://ant.design/docs/spec/colors-cn */\n/**微信登录按钮颜色 */\n/**主颜色*/\n/*用于金钱等颜色 */\n/*主题高亮颜色*/\n/*辅助高亮颜色*/\n/*主题高亮背景颜色*/\n/*价格红高亮背景颜色*/\n/*辅助色*/.light-color[data-v-b9547a84]{color:#ff6b35}.main-color[data-v-b9547a84]{color:#ff3c2a!important}.bg-light-color[data-v-b9547a84]{background-color:#ff6b35!important}.bg-light-color[data-v-b9547a84] *{background-color:#ff6b35!important}.bg-main-color[data-v-b9547a84]{background-color:#ff3c2a!important}.bg-linear-gradient[data-v-b9547a84]{background-image:linear-gradient(25deg,#fa123b,#ff6b35,#ff9f28,#ffcc03)}.uni-tabbar .uni-tabbar__icon[data-v-b9547a84]{width:20px;height:18px}.flex[data-v-b9547a84]{display:flex}.btn[data-v-b9547a84]{background-color:#ff6b35;color:#fff;border-width:0;border:none;border-radius:44px;height:44px;box-shadow:none;font-weight:400;font-style:normal;line-height:44px;text-align:center}.btn[data-v-b9547a84]::after{border:none}.button-hover[data-v-b9547a84]{opacity:.7}.margin[data-v-b9547a84]{margin:10px}.tag[data-v-b9547a84]{background-color:#f2f2f2;color:#333;height:28px;border-radius:28px;box-shadow:none;font-family:PingFangSC-Regular,PingFang SC,sans-serif;font-weight:400;font-style:normal;line-height:28px;text-align:center;width:90px}.c-content[data-v-b9547a84]{background-color:#fff;border-top:1px solid #ebeef5;border-bottom:1px solid #ebeef5}.mt-30[data-v-b9547a84]{margin-top:%?30?%}.border-top[data-v-b9547a84]{border-top:1px solid #ebeef5}.describe[data-v-b9547a84]{color:#909399;font-size:%?24?%;padding:%?30?%}.flex-center[data-v-b9547a84]{display:flex;align-items:center;justify-content:center;flex-direction:column}.flex-a-c[data-v-b9547a84]{align-items:center}.relative[data-v-b9547a84]{position:relative}.wes[data-v-b9547a84]{\n  /* 多出部分用省略号表示 , 用于一行 */overflow:hidden;word-wrap:normal;white-space:nowrap;text-overflow:ellipsis}.wes-2[data-v-b9547a84]{\n  /* 适用于webkit内核和移动端 */display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;overflow:hidden}.point-list[data-v-b9547a84]{margin-top:%?50?%}.title[data-v-b9547a84]{height:%?80?%;text-align:center;line-height:%?80?%;font-size:%?32?%;font-weight:700}.point-item[data-v-b9547a84]{width:100%;height:%?130?%;padding:0 %?20?%;background:#fff;font-size:%?24?%;border-bottom:1px solid #ebeef5;display:flex;justify-content:end;align-items:center}.point-item > uni-view[data-v-b9547a84]:nth-child(1){flex:1;line-height:%?40?%}.point-item > uni-view:nth-child(1) uni-view[data-v-b9547a84]{color:#666}.point-item > uni-view[data-v-b9547a84]:nth-child(1) :last-child{color:#999}.point-item > uni-view[data-v-b9547a84]:nth-child(2){width:%?100?%;text-align:center}.portrait-box2[data-v-b9547a84]{height:%?100?%;background:#fff;border-radius:0 0 %?20?% %?20?%;margin:0 %?20?%;font-size:%?26?%}.portrait-box2[data-v-b9547a84] .u-col{text-align:center!important}.portrait-box2[data-v-b9547a84] .u-col:first-child{border-right:1px solid #ebeef5}.portrait-box2 .pcolor[data-v-b9547a84]{color:#4ebb9d}.content[data-v-b9547a84]{background:#f9f9f9}.more[data-v-b9547a84]{text-align:right;color:#909399;font-size:%?24?%;padding-right:%?40?%!important}.portrait-box[data-v-b9547a84]{background-color:#ff3c2a;height:%?250?%;background:linear-gradient(134deg,#28d094 2%,#1abc9c 98%);border-radius:%?20?% %?20?% 0 0;margin:%?20?% %?20?% 0;position:relative;display:flex;flex-direction:column;justify-content:center;align-items:center;color:#fff}.portrait-box > uni-image[data-v-b9547a84]:first-child{width:%?263?%;height:%?250?%;position:absolute;left:0;bottom:0;-webkit-transform:rotateY(180deg);transform:rotateY(180deg)}.portrait-box .position-point[data-v-b9547a84]{position:absolute;right:%?-2?%;top:0}.portrait-box .position-point .apply-point[data-v-b9547a84]{margin-top:%?30?%;text-align:center;line-height:%?40?%;font-size:%?24?%;color:#fff;width:%?142?%;height:%?40?%;background:hsla(0,0%,100%,.2);border-radius:%?20?% 0 0 %?20?%}.portrait-box .point-img[data-v-b9547a84]{height:%?108?%;width:%?108?%;margin-bottom:%?30?%}.portrait-box .point[data-v-b9547a84]{font-size:%?56?%}',""]),t.exports=e}}]);