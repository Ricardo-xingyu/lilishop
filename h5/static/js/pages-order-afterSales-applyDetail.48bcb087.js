(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-order-afterSales-applyDetail"],{2401:function(e,t,i){var a=i("700e");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var o=i("4f06").default;o("533a8146",a,!0,{sourceMap:!1,shadowMode:!1})},"323b":function(e,t,i){"use strict";i.r(t);var a=i("9e7e"),o=i.n(a);for(var s in a)"default"!==s&&function(e){i.d(t,e,(function(){return a[e]}))}(s);t["default"]=o.a},"3da1":function(e,t,i){var a=i("24fb");t=a(!1),t.push([e.i,'@charset "UTF-8";\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 边框颜色 */\n/* 图片加载中颜色 */\n/* 行为相关颜色 */\n/*主题颜色 具体参考   https://ant.design/docs/spec/colors-cn */\n/**微信登录按钮颜色 */\n/**主颜色*/\n/*用于金钱等颜色 */\n/*主题高亮颜色*/\n/*辅助高亮颜色*/\n/*主题高亮背景颜色*/\n/*价格红高亮背景颜色*/\n/*辅助色*/.light-color[data-v-7d8c5495]{color:#ff6b35}.main-color[data-v-7d8c5495]{color:#ff3c2a!important}.bg-light-color[data-v-7d8c5495]{background-color:#ff6b35!important}.bg-light-color[data-v-7d8c5495] *{background-color:#ff6b35!important}.bg-main-color[data-v-7d8c5495]{background-color:#ff3c2a!important}.bg-linear-gradient[data-v-7d8c5495]{background-image:linear-gradient(25deg,#fa123b,#ff6b35,#ff9f28,#ffcc03)}.uni-tabbar .uni-tabbar__icon[data-v-7d8c5495]{width:20px;height:18px}.flex[data-v-7d8c5495]{display:flex}.btn[data-v-7d8c5495]{background-color:#ff6b35;color:#fff;border-width:0;border:none;border-radius:44px;height:44px;box-shadow:none;font-weight:400;font-style:normal;line-height:44px;text-align:center}.btn[data-v-7d8c5495]::after{border:none}.button-hover[data-v-7d8c5495]{opacity:.7}.margin[data-v-7d8c5495]{margin:10px}.tag[data-v-7d8c5495]{background-color:#f2f2f2;color:#333;height:28px;border-radius:28px;box-shadow:none;font-family:PingFangSC-Regular,PingFang SC,sans-serif;font-weight:400;font-style:normal;line-height:28px;text-align:center;width:90px}.c-content[data-v-7d8c5495]{background-color:#fff;border-top:1px solid #ebeef5;border-bottom:1px solid #ebeef5}.mt-30[data-v-7d8c5495]{margin-top:%?30?%}.border-top[data-v-7d8c5495]{border-top:1px solid #ebeef5}.describe[data-v-7d8c5495]{color:#909399;font-size:%?24?%;padding:%?30?%}.flex-center[data-v-7d8c5495]{display:flex;align-items:center;justify-content:center;flex-direction:column}.flex-a-c[data-v-7d8c5495]{align-items:center}.relative[data-v-7d8c5495]{position:relative}.wes[data-v-7d8c5495]{\n  /* 多出部分用省略号表示 , 用于一行 */overflow:hidden;word-wrap:normal;white-space:nowrap;text-overflow:ellipsis}.wes-2[data-v-7d8c5495]{\n  /* 适用于webkit内核和移动端 */display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;overflow:hidden}.u-image[data-v-7d8c5495]{position:relative;transition:opacity .5s ease-in-out}.u-image__image[data-v-7d8c5495]{width:100%;height:100%}.u-image__loading[data-v-7d8c5495], .u-image__error[data-v-7d8c5495]{position:absolute;top:0;left:0;width:100%;height:100%;display:flex;align-items:center;justify-content:center;background-color:#f3f4f6;color:#909399;font-size:%?46?%}',""]),e.exports=t},4507:function(e,t,i){"use strict";i("a9e3"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={name:"u-image",props:{src:{type:String,default:""},mode:{type:String,default:"aspectFill"},width:{type:[String,Number],default:"100%"},height:{type:[String,Number],default:"auto"},shape:{type:String,default:"square"},borderRadius:{type:[String,Number],default:0},lazyLoad:{type:Boolean,default:!0},showMenuByLongpress:{type:Boolean,default:!0},loadingIcon:{type:String,default:"photo"},errorIcon:{type:String,default:"error-circle"},showLoading:{type:Boolean,default:!0},showError:{type:Boolean,default:!0},fade:{type:Boolean,default:!0},webp:{type:Boolean,default:!1},duration:{type:[String,Number],default:500},bgColor:{type:String,default:"#f3f4f6"}},data:function(){return{isError:!1,loading:!0,opacity:1,durationTime:this.duration,backgroundStyle:{}}},watch:{src:function(e){this.isError=!e}},computed:{wrapStyle:function(){var e={};return e.width=this.$u.addUnit(this.width),e.height=this.$u.addUnit(this.height),e.borderRadius="circle"==this.shape?"50%":this.$u.addUnit(this.borderRadius),e.overflow=this.borderRadius>0?"hidden":"visible",this.fade&&(e.opacity=this.opacity,e.transition="opacity ".concat(Number(this.durationTime)/1e3,"s ease-in-out")),e}},methods:{onClick:function(){this.$emit("click")},onErrorHandler:function(){this.loading=!1,this.isError=!0,this.$emit("error")},onLoadHandler:function(){var e=this;if(this.loading=!1,this.isError=!1,this.$emit("load"),!this.fade)return this.removeBgColor();this.opacity=0,this.durationTime=0,setTimeout((function(){e.durationTime=e.duration,e.opacity=1,setTimeout((function(){e.removeBgColor()}),e.durationTime)}),50)},removeBgColor:function(){this.backgroundStyle={backgroundColor:"transparent"}}}};t.default=a},4717:function(e,t,i){"use strict";var a=i("2401"),o=i.n(a);o.a},"4a9c":function(e,t,i){"use strict";i.d(t,"b",(function(){return o})),i.d(t,"c",(function(){return s})),i.d(t,"a",(function(){return a}));var a={uIcon:i("673b").default,uImage:i("fcf9").default},o=function(){var e=this,t=e.$createElement,i=e._self._c||t;return e.serviceDetail?i("v-uni-view",[i("v-uni-view",{staticClass:"after-sales-goods-detail-view"},[i("v-uni-view",{staticClass:"header"},[i("v-uni-view",[e._v("本次售后服务将由"),i("v-uni-text",{staticClass:"seller-name"},[e._v(e._s(e.serviceDetail.storeName))]),e._v("为您提供")],1)],1),i("v-uni-view",{staticClass:"apply-info-view"},[i("v-uni-view",{staticClass:"status-info"},[i("v-uni-view",{staticClass:"status-info-box"},[i("v-uni-view",{staticClass:"status-val"},[e._v(e._s(e._f("serviceStatusList")(e.serviceDetail.serviceStatus)))]),i("v-uni-view",{staticClass:"status-tip"},[e._v(e._s(e._f("statusFilter")(e.serviceDetail.serviceStatus)))])],1)],1),i("v-uni-view",{staticClass:"log-box-bottom"}),i("v-uni-view",{staticClass:"log-box-top",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.onProgress()}}},[i("v-uni-view",{staticClass:"top01"},[i("v-uni-view",[e._v("审核日志")]),e.logs[0]?i("v-uni-view",{staticClass:"log-first-show"},[e._v(e._s(e.logs[0].message))]):e._e()],1),i("u-icon",{staticStyle:{"margin-right":"5px"},attrs:{name:"arrow-right",size:"30",color:"#999"}})],1)],1),i("v-uni-view",{staticClass:"goods-info"},[i("v-uni-view",{staticClass:"info-box"},[i("v-uni-view",{staticClass:"goods-item-view",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.navgiateToGoodsDetail(e.serviceDetail)}}},[i("v-uni-view",{staticClass:"goods-img"},[i("u-image",{attrs:{"border-radius":"6",width:"131rpx",height:"131rpx",src:e.serviceDetail.goodsImage}})],1),i("v-uni-view",{staticClass:"goods-info"},[i("v-uni-view",{staticClass:"goods-title u-line-2"},[e._v(e._s(e.serviceDetail.goodsName))]),i("v-uni-view",{staticClass:"goods-price"},[i("v-uni-view",{staticClass:"price"},[e._v("￥"+e._s(e._f("unitPrice")(e.serviceDetail.flowPrice)))]),i("v-uni-view",[i("v-uni-view",[e._v("申请售后数量："+e._s(e.serviceDetail.num))])],1)],1)],1)],1)],1)],1)],1),i("v-uni-view",{staticClass:"apply-detail-view"},[i("v-uni-view",{staticClass:"detail-item"},[i("v-uni-view",{staticClass:"title"},[e._v("服务单号:")]),i("v-uni-view",{staticClass:"value"},[e._v(e._s(e.serviceDetail.sn))])],1),i("v-uni-view",{staticClass:"detail-item"},[i("v-uni-view",{staticClass:"title"},[e._v("订单编号:")]),i("v-uni-view",{staticClass:"value"},[e._v(e._s(e.serviceDetail.orderSn))])],1),e.serviceDetail.new_order_sn?i("v-uni-view",{staticClass:"detail-item"},[i("v-uni-view",{staticClass:"title"},[e._v("新订单编号:")]),i("v-uni-view",{staticClass:"value"},[e._v(e._s(e.serviceDetail.new_order_sn))])],1):e._e(),i("v-uni-view",{staticClass:"detail-item"},[i("v-uni-view",{staticClass:"title"},[e._v("服务类型:")]),i("v-uni-view",{staticClass:"value"},[e._v(e._s(e.serviceTypeList[e.serviceDetail.serviceType]))])],1),i("v-uni-view",{staticClass:"detail-item"},[i("v-uni-view",{staticClass:"title"},[e._v("申请原因:")]),i("v-uni-view",{staticClass:"value"},[e._v(e._s(e.reason))])],1),e.serviceDetail.problemDesc?i("v-uni-view",{staticClass:"detail-item"},[i("v-uni-view",{staticClass:"title"},[e._v("问题描述:")]),i("v-uni-view",{staticClass:"value"},[e._v(e._s(e.serviceDetail.problemDesc))])],1):e._e(),e.serviceDetail.afterSaleImage&&0!=e.serviceDetail.afterSaleImage.split(",").length?i("v-uni-view",{staticClass:"detail-item"},e._l(e.serviceDetail.afterSaleImage.split(","),(function(t,a){return i("v-uni-view",{key:a},[i("u-image",{attrs:{width:"100",height:"100",src:t},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.preview(e.serviceDetail.afterSaleImage.split(","),a)}}})],1)})),1):e._e(),"RETURN_MONEY"!=e.serviceDetail.serviceType&&"APPLY"!=e.serviceDetail.serviceStatus?i("v-uni-view",{staticClass:"detail-item"},[i("v-uni-view",{staticClass:"title"},[e._v("收货地址:")]),i("v-uni-view",{staticClass:"value"},[e.storeAfterSaleAddress.salesConsigneeAddressPath?i("span",[e._v(e._s(e.storeAfterSaleAddress.salesConsigneeAddressPath))]):e._e()])],1):e._e(),"RETURN_MONEY"!=e.serviceDetail.serviceType&&"APPLY"!=e.serviceDetail.serviceStatus?i("v-uni-view",{staticClass:"detail-item"},[i("v-uni-view",{staticClass:"title"},[e._v("联系人:")]),i("v-uni-view",{staticClass:"value"},[e._v(e._s(e.storeAfterSaleAddress.salesConsigneeName))])],1):e._e(),"RETURN_MONEY"!=e.serviceDetail.serviceType&&"APPLY"!=e.serviceDetail.serviceStatus?i("v-uni-view",{staticClass:"detail-item"},[i("v-uni-view",{staticClass:"title"},[e._v("联系方式:")]),i("v-uni-view",{staticClass:"value"},[e._v(e._s(e._f("secrecyMobile")(e.storeAfterSaleAddress.salesConsigneeMobile||"")))])],1):e._e(),e.refundShow?i("v-uni-view",[i("v-uni-view",{staticClass:"detail-item"},[i("v-uni-view",{staticClass:"title"},[e._v("退款金额:")]),i("v-uni-view",{staticClass:"value"},[e._v(e._s(e._f("unitPrice")(e.serviceDetail.flowPrice,"￥")))])],1),e.serviceDetail.agree_price?i("v-uni-view",{staticClass:"detail-item"},[i("v-uni-view",{staticClass:"title"},[e._v("同意退款:")]),i("v-uni-view",{staticClass:"value"},[e._v(e._s(e._f("unitPrice")(e.serviceDetail.agree_price,"￥")))])],1):e._e(),e.serviceDetail.actual_price?i("v-uni-view",{staticClass:"detail-item"},[i("v-uni-view",{staticClass:"title"},[e._v("实际退款:")]),i("v-uni-view",{staticClass:"value"},[e._v(e._s(e._f("unitPrice")(e.serviceDetail.actual_price,"￥")))])],1):e._e(),e.serviceDetail.actual_price?i("v-uni-view",{staticClass:"detail-item"},[i("v-uni-view",{staticClass:"title"},[e._v("退款时间:")]),i("v-uni-view",{staticClass:"value"},[e._v(e._s(e._f("unixToDate")(e.serviceDetail.refund_time)))])],1):e._e(),0!==e.serviceDetail.refund_price?i("v-uni-view",{staticClass:"detail-item"},[i("v-uni-view",{staticClass:"title"},[e._v("退款方式:")]),i("v-uni-view",{staticClass:"value"},[e._v(e._s(e._f("refundWayFilter")(e.serviceDetail.refundWay)))])],1):e._e(),e.accountShow&&0!=e.serviceDetail.refund_price?i("v-uni-view",{staticClass:"detail-item"},[i("v-uni-view",{staticClass:"title"},[e._v("账户类型:")]),i("v-uni-view",{staticClass:"value"},[e._v(e._s(e._f("accountTypeFilter")(e.serviceDetail.accountType)))])],1):e._e(),e.accountShow&&!e.bankShow&&0!=e.serviceDetail.actualRefundPrice?i("v-uni-view",{staticClass:"detail-item"},[i("v-uni-view",{staticClass:"title"},[e._v("退款账号:")]),i("v-uni-view",{staticClass:"value"},[e._v(e._s(e.serviceDetail.bankAccountNumber))])],1):e._e(),e.bankShow?i("v-uni-view",{staticClass:"detail-item"},[i("v-uni-view",{staticClass:"title"},[e._v("银行名称:")]),i("v-uni-view",{staticClass:"value"},[e._v(e._s(e.serviceDetail.bankAccountName))])],1):e._e(),e.bankShow?i("v-uni-view",{staticClass:"detail-item"},[i("v-uni-view",{staticClass:"title"},[e._v("银行账号:")]),i("v-uni-view",{staticClass:"value"},[e._v(e._s(e.serviceDetail.bankAccountNumber))])],1):e._e(),e.bankShow?i("v-uni-view",{staticClass:"detail-item"},[i("v-uni-view",{staticClass:"title"},[e._v("银行开户名:")]),i("v-uni-view",{staticClass:"value"},[e._v(e._s(e.serviceDetail.bankAccountName))])],1):e._e(),e.bankShow?i("v-uni-view",{staticClass:"detail-item"},[i("v-uni-view",{staticClass:"title"},[e._v("银行开户行:")]),i("v-uni-view",{staticClass:"value"},[e._v(e._s(e.serviceDetail.bankDepositName))])],1):e._e(),e.serviceDetail.mlogisticsName?i("v-uni-view",{staticClass:"detail-item"},[i("v-uni-view",{staticClass:"title"},[e._v("回寄快递:")]),i("v-uni-view",{staticClass:"value"},[e._v(e._s(e.serviceDetail.mlogisticsName))])],1):e._e(),e.serviceDetail.mlogisticsNo?i("v-uni-view",{staticClass:"detail-item"},[i("v-uni-view",{staticClass:"title"},[e._v("回寄运单号:")]),i("v-uni-view",{staticClass:"value"},[e._v(e._s(e.serviceDetail.mlogisticsNo))])],1):e._e(),e.serviceDetail.mDeliverTime?i("v-uni-view",{staticClass:"detail-item"},[i("v-uni-view",{staticClass:"title"},[e._v("回寄时间:")]),i("v-uni-view",{staticClass:"value"},[e._v(e._s(e.serviceDetail.mDeliverTime))])],1):e._e()],1):e._e()],1)],1):e._e()},s=[]},"700e":function(e,t,i){var a=i("24fb");t=a(!1),t.push([e.i,'@charset "UTF-8";\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 边框颜色 */\n/* 图片加载中颜色 */\n/* 行为相关颜色 */\n/*主题颜色 具体参考   https://ant.design/docs/spec/colors-cn */\n/**微信登录按钮颜色 */\n/**主颜色*/\n/*用于金钱等颜色 */\n/*主题高亮颜色*/\n/*辅助高亮颜色*/\n/*主题高亮背景颜色*/\n/*价格红高亮背景颜色*/\n/*辅助色*/.light-color[data-v-04180bb8]{color:#ff6b35}.main-color[data-v-04180bb8]{color:#ff3c2a!important}.bg-light-color[data-v-04180bb8]{background-color:#ff6b35!important}.bg-light-color[data-v-04180bb8] *{background-color:#ff6b35!important}.bg-main-color[data-v-04180bb8]{background-color:#ff3c2a!important}.bg-linear-gradient[data-v-04180bb8]{background-image:linear-gradient(25deg,#fa123b,#ff6b35,#ff9f28,#ffcc03)}.uni-tabbar .uni-tabbar__icon[data-v-04180bb8]{width:20px;height:18px}.flex[data-v-04180bb8]{display:flex}.btn[data-v-04180bb8]{background-color:#ff6b35;color:#fff;border-width:0;border:none;border-radius:44px;height:44px;box-shadow:none;font-weight:400;font-style:normal;line-height:44px;text-align:center}.btn[data-v-04180bb8]::after{border:none}.button-hover[data-v-04180bb8]{opacity:.7}.margin[data-v-04180bb8]{margin:10px}.tag[data-v-04180bb8]{background-color:#f2f2f2;color:#333;height:28px;border-radius:28px;box-shadow:none;font-family:PingFangSC-Regular,PingFang SC,sans-serif;font-weight:400;font-style:normal;line-height:28px;text-align:center;width:90px}.c-content[data-v-04180bb8]{background-color:#fff;border-top:1px solid #ebeef5;border-bottom:1px solid #ebeef5}.mt-30[data-v-04180bb8]{margin-top:%?30?%}.border-top[data-v-04180bb8]{border-top:1px solid #ebeef5}.describe[data-v-04180bb8]{color:#909399;font-size:%?24?%;padding:%?30?%}.flex-center[data-v-04180bb8]{display:flex;align-items:center;justify-content:center;flex-direction:column}.flex-a-c[data-v-04180bb8]{align-items:center}.relative[data-v-04180bb8]{position:relative}.wes[data-v-04180bb8]{\n  /* 多出部分用省略号表示 , 用于一行 */overflow:hidden;word-wrap:normal;white-space:nowrap;text-overflow:ellipsis}.wes-2[data-v-04180bb8]{\n  /* 适用于webkit内核和移动端 */display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;overflow:hidden}uni-page-body[data-v-04180bb8],\n.content[data-v-04180bb8]{background:#f8f8f8;height:100%}.after-sales-goods-detail-view[data-v-04180bb8]{background-color:#fff}.after-sales-goods-detail-view .header[data-v-04180bb8]{background-color:#f7f7f7;color:#999;font-size:%?22?%;display:flex;flex-direction:row;align-items:center;justify-content:center;line-height:%?70?%}.after-sales-goods-detail-view .header .header-text[data-v-04180bb8]{background-color:#999;padding:%?10?% %?30?%;border-radius:%?50?%}.after-sales-goods-detail-view .header .seller-name[data-v-04180bb8]{color:#ff3c2a}.after-sales-goods-detail-view .apply-info-view[data-v-04180bb8]{background:#f8f8f8}.after-sales-goods-detail-view .goods-item-view[data-v-04180bb8]{display:flex;flex-direction:row;padding:%?20?% %?30?%;background-color:#eef1f2}.after-sales-goods-detail-view .goods-item-view .goods-info[data-v-04180bb8]{padding-left:%?30?%;flex:1}.after-sales-goods-detail-view .goods-item-view .goods-info .goods-title[data-v-04180bb8]{margin-bottom:%?10?%;font-size:%?28?%;color:#303133}.after-sales-goods-detail-view .goods-item-view .goods-info .goods-specs[data-v-04180bb8]{font-size:%?24?%;margin-bottom:%?10?%;color:#ccc}.after-sales-goods-detail-view .goods-item-view .goods-info .goods-price[data-v-04180bb8]{display:flex;justify-content:space-between;font-size:%?24?%;color:#999}.after-sales-goods-detail-view .goods-item-view .goods-info .price[data-v-04180bb8]{color:#ff6b35}.after-sales-goods-detail-view .goods-item-view .goods-num[data-v-04180bb8]{width:%?60?%;color:#ff3c2a}.apply-detail-view[data-v-04180bb8]{background-color:#f7f7f7;margin-top:%?10?%;padding:%?20?%;color:#666}.apply-detail-view .detail-item[data-v-04180bb8]{padding:%?12?%;display:flex;flex-direction:row;align-items:center;font-size:%?24?%}.apply-detail-view .detail-item .title[data-v-04180bb8]{padding-left:%?10?%;width:%?140?%}.apply-detail-view .detail-item .value[data-v-04180bb8]{padding-left:%?40?%}.log-box-bottom[data-v-04180bb8]{height:%?120?%;flex-direction:column;background-color:#f7f7f7}.log-box-top[data-v-04180bb8]{height:%?153?%;display:flex;flex-direction:row;background-color:#fff;position:absolute;top:%?200?%;left:%?0?%;right:%?0?%;bottom:%?0?%;margin-left:%?22?%;margin-right:%?22?%;margin-top:%?22?%;border-radius:%?22?%;justify-content:space-between;align-items:center;padding-bottom:%?52?%;padding-top:%?52?%;padding-left:%?32?%}.log-box-top .top01[data-v-04180bb8]{width:90%;font-family:PingFangSC-Regular;font-size:%?28?%;line-height:%?30?%;color:#2e2d2d;overflow:hidden;text-overflow:ellipsis;overflow-wrap:break-word;-webkit-line-clamp:2;-webkit-box-orient:vertical;white-space:normal}.log-box-top .top01 .log-first-show[data-v-04180bb8]{flex-direction:row;margin-top:%?16?%;margin-right:%?44?%;font-family:PingFangSC-Regular;font-size:%?22?%;color:#8c8c8c;line-height:%?30?%}.status-info[data-v-04180bb8]{flex-direction:row;background-color:#ff6b35}.status-info .status-info-box[data-v-04180bb8]{height:%?180?%;flex-direction:row;padding-left:%?54?%;padding-right:%?54?%;padding-top:%?20?%;font-family:PingFangSC-Regular;color:#fff;background-color:transparent;line-height:%?50?%}.status-info .status-info-box .status-val[data-v-04180bb8]{font-size:%?32?%}.status-info .status-info-box .status-tip[data-v-04180bb8]{font-size:%?24?%}.info-box[data-v-04180bb8]{padding-right:%?40?% %?0?%;background-color:#eef1f2}body.?%PAGE?%[data-v-04180bb8]{background:#f8f8f8}',""]),e.exports=t},8048:function(e,t,i){"use strict";i.r(t);var a=i("4a9c"),o=i("323b");for(var s in o)"default"!==s&&function(e){i.d(t,e,(function(){return o[e]}))}(s);i("4717");var n,r=i("f0c5"),l=Object(r["a"])(o["default"],a["b"],a["c"],!1,null,"04180bb8",null,!1,a["a"],n);t["default"]=l.exports},8800:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getAfterSale=o,t.applyCancelOrder=s,t.getStoreAfterSaleAddress=n,t.cancelAfterSale=r,t.getAfterSaleList=l,t.getServiceDetail=c,t.addComplain=d,t.clearComplain=u,t.getAfterSaleLog=v,t.getComplain=f,t.getAfterSaleReason=g,t.getClearReason=b,t.getComplainReason=p,t.getComplainDetail=h,t.getAfterSaleInfo=w,t.applyReturn=m,t.fillShipInfo=_;var a=i("9d47");function o(e){return a.http.request({url:"after-sales/refunds",method:a.Method.GET,needToken:!0,loading:!1,params:e})}function s(e){return a.http.request({url:"after-sales/apply/cancel/order",method:a.Method.POST,needToken:!0,params:e})}function n(e){return a.http.request({url:"/order/afterSale/getStoreAfterSaleAddress/".concat(e),method:a.Method.GET,needToken:!0})}function r(e){return a.http.request({url:"/order/afterSale/cancel/".concat(e),method:a.Method.POST,needToken:!0})}function l(e){return a.http.request({url:"/order/afterSale/page",method:a.Method.GET,needToken:!0,params:e})}function c(e){return a.http.request({url:"/order/afterSale/get/".concat(e),method:a.Method.GET,needToken:!0})}function d(e){return a.http.request({url:"/order/complain",method:a.Method.POST,needToken:!0,header:{"Content-Type":"application/x-www-form-urlencoded"},data:e})}function u(e,t){return a.http.request({url:"/order/complain/status/".concat(e),method:a.Method.PUT,needToken:!0,params:t})}function v(e){return a.http.request({url:"/order/afterSale/get/getAfterSaleLog/".concat(e),method:a.Method.GET,needToken:!0})}function f(e){return a.http.request({url:"/order/complain",method:a.Method.GET,needToken:!0,params:e})}function g(e){return a.http.request({url:"/order/afterSale/get/afterSaleReason/".concat(e),method:a.Method.GET,needToken:!0})}function b(){return a.http.request({url:"/order/afterSale/get/afterSaleReason/CANCEL",method:a.Method.GET,needToken:!0})}function p(){return a.http.request({url:"/order/afterSale/get/afterSaleReason/COMPLAIN",method:a.Method.GET,needToken:!0})}function h(e){return a.http.request({url:"/order/complain/".concat(e),method:a.Method.GET,needToken:!0})}function w(e){return a.http.request({url:"/order/afterSale/applyAfterSaleInfo/".concat(e),method:a.Method.GET,needToken:!0})}function m(e,t){return a.http.request({url:"/order/afterSale/save/".concat(e),method:a.Method.POST,header:{"Content-Type":"application/x-www-form-urlencoded"},data:t})}function _(e,t){return a.http.request({url:"/order/afterSale/delivery/".concat(e),method:a.Method.POST,header:{"Content-Type":"application/x-www-form-urlencoded"},data:t})}},"9e7e":function(e,t,i){"use strict";i("99af"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i("8800"),o={data:function(){return{reason:"",serviceTypeList:{CANCEL:"取消",RETURN_GOODS:"退货",EXCHANGE_GOODS:"换货",RETURN_MONEY:"退款"},serviceDetail:{},logs:[],goodsList:[],storeAfterSaleAddress:{},refundShow:!1,accountShow:!1,bankShow:!1,sn:""}},onLoad:function(e){uni.setNavigationBarTitle({title:"服务单详情"}),this.sn=e.sn,this.loadDetail(),this.getAddress(),this.getLog(e.sn)},filters:{statusFilter:function(e){switch(e){case"APPLY":return"售后服务申请成功，等待商家审核";case"PASS":return"售后服务申请审核通过";case"REFUSE":return"售后服务申请已被商家拒绝，如有疑问请及时联系商家";case"FULL_COURIER":return"申请售后的商品已经寄出，等待商家收货";case"STOCK_IN":return"商家已将售后商品入库";case"WAIT_FOR_MANUAL":return"等待平台进行人工退款";case"REFUNDING":return"商家退款中，请您耐心等待";case"COMPLETED":return"售后服务已完成，感谢您的支持";case"ERROR_EXCEPTION":return"系统生成新订单异常，等待商家手动创建新订单";case"CLOSED":return"售后服务已关闭";case"WAIT_REFUND":return"等待平台进行退款";default:return""}},refundWayFilter:function(e){switch(e){case"OFFLINE":return"账户退款";case"OFFLINE":return"线下退款";case"ORIGINAL":return"原路退回";default:return""}},accountTypeFilter:function(e){switch(e){case"WEIXINPAY":return"微信";case"ALIPAY":return"支付宝";case"BANK_TRANSFER":return"银行卡";default:return""}}},methods:{preview:function(e,t){uni.previewImage({current:t,urls:e,longPressActions:{itemList:["保存图片"],success:function(e){},fail:function(e){}}})},getAddress:function(){var e=this;(0,a.getStoreAfterSaleAddress)(this.sn).then((function(t){t.data.success&&(e.storeAfterSaleAddress=t.data.result)}))},getLog:function(e){var t=this;(0,a.getAfterSaleLog)(e).then((function(e){t.logs=e.data.result}))},getReasonList:function(e){var t=this;(0,a.getAfterSaleReason)(e).then((function(e){e.data.success&&(t.reason=t.serviceDetail.reason)}))},loadDetail:function(){var e=this;uni.showLoading({title:"加载中"}),(0,a.getServiceDetail)(this.sn).then((function(t){uni.hideLoading(),e.serviceDetail=t.data.result,"RETURN_GOODS"!=e.serviceDetail.serviceType&&"RETURN_MONEY"!==e.serviceDetail.serviceType||(e.refundShow=!0),e.accountShow=("RETURN_GOODS"===e.serviceDetail.serviceType||"ORDER_CANCEL"===e.serviceDetail.serviceType)&&"OFFLINE"===e.serviceDetail.refundWay,e.bankShow="BANK_TRANSFER"===e.serviceDetail.accountType&&"OFFLINE"===e.serviceDetail.refundWay&&("RETURN_GOODS"===e.serviceDetail.serviceType|"ORDER_CANCEL"===e.serviceDetail.serviceType||"RETURN_MONEY"===e.serviceDetail.serviceType),e.getReasonList(e.serviceDetail.serviceType)}))},navgiateToGoodsDetail:function(e){uni.navigateTo({url:"/pages/product/goods?id=".concat(e.id,"&goodsId=").concat(e.goodsId)})},onProgress:function(){uni.navigateTo({url:"./applyProgress?sn=".concat(this.serviceDetail.sn,"&createTime=").concat(encodeURIComponent(this.serviceDetail.createTime),"\n         &logs=").concat(encodeURIComponent(JSON.stringify(this.logs)),"&serviceStatus=").concat(this.serviceDetail.serviceStatus)})}}};t.default=o},a948:function(e,t,i){"use strict";var a=i("ffea"),o=i.n(a);o.a},bb34:function(e,t,i){"use strict";i.r(t);var a=i("4507"),o=i.n(a);for(var s in a)"default"!==s&&function(e){i.d(t,e,(function(){return a[e]}))}(s);t["default"]=o.a},bc33:function(e,t,i){"use strict";i.d(t,"b",(function(){return o})),i.d(t,"c",(function(){return s})),i.d(t,"a",(function(){return a}));var a={uIcon:i("673b").default},o=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"u-image",style:[e.wrapStyle,e.backgroundStyle],on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.onClick.apply(void 0,arguments)}}},[e.isError?e._e():i("v-uni-image",{staticClass:"u-image__image",style:{borderRadius:"circle"==e.shape?"50%":e.$u.addUnit(e.borderRadius)},attrs:{src:e.src,mode:e.mode,"lazy-load":e.lazyLoad},on:{error:function(t){arguments[0]=t=e.$handleEvent(t),e.onErrorHandler.apply(void 0,arguments)},load:function(t){arguments[0]=t=e.$handleEvent(t),e.onLoadHandler.apply(void 0,arguments)}}}),e.showLoading&&e.loading?i("v-uni-view",{staticClass:"u-image__loading",style:{borderRadius:"circle"==e.shape?"50%":e.$u.addUnit(e.borderRadius),backgroundColor:this.bgColor}},[e.$slots.loading?e._t("loading"):i("u-icon",{attrs:{name:e.loadingIcon,width:e.width,height:e.height}})],2):e._e(),e.showError&&e.isError&&!e.loading?i("v-uni-view",{staticClass:"u-image__error",style:{borderRadius:"circle"==e.shape?"50%":e.$u.addUnit(e.borderRadius)}},[e.$slots.error?e._t("error"):i("u-icon",{attrs:{name:e.errorIcon,width:e.width,height:e.height}})],2):e._e()],1)},s=[]},fcf9:function(e,t,i){"use strict";i.r(t);var a=i("bc33"),o=i("bb34");for(var s in o)"default"!==s&&function(e){i.d(t,e,(function(){return o[e]}))}(s);i("a948");var n,r=i("f0c5"),l=Object(r["a"])(o["default"],a["b"],a["c"],!1,null,"7d8c5495",null,!1,a["a"],n);t["default"]=l.exports},ffea:function(e,t,i){var a=i("3da1");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var o=i("4f06").default;o("189c4be9",a,!0,{sourceMap:!1,shadowMode:!1})}}]);