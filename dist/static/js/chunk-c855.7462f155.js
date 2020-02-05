(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-c855"],{"7BsA":function(t,e,a){t.exports=function(t){function e(n){if(a[n])return a[n].exports;var i=a[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,e),i.l=!0,i.exports}var a={};return e.m=t,e.c=a,e.i=function(t){return t},e.d=function(t,a,n){e.o(t,a)||Object.defineProperty(t,a,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var a=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(a,"a",a),a},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/dist/",e(e.s=2)}([function(t,e,a){var n=a(4)(a(1),a(5),null,null);t.exports=n.exports},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(3);e.default={props:{startVal:{type:Number,required:!1,default:0},endVal:{type:Number,required:!1,default:2017},duration:{type:Number,required:!1,default:3e3},autoplay:{type:Boolean,required:!1,default:!0},decimals:{type:Number,required:!1,default:0,validator:function(t){return t>=0}},decimal:{type:String,required:!1,default:"."},separator:{type:String,required:!1,default:","},prefix:{type:String,required:!1,default:""},suffix:{type:String,required:!1,default:""},useEasing:{type:Boolean,required:!1,default:!0},easingFn:{type:Function,default:function(t,e,a,n){return a*(1-Math.pow(2,-10*t/n))*1024/1023+e}}},data:function(){return{localStartVal:this.startVal,displayValue:this.formatNumber(this.startVal),printVal:null,paused:!1,localDuration:this.duration,startTime:null,timestamp:null,remaining:null,rAF:null}},computed:{countDown:function(){return this.startVal>this.endVal}},watch:{startVal:function(){this.autoplay&&this.start()},endVal:function(){this.autoplay&&this.start()}},mounted:function(){this.autoplay&&this.start(),this.$emit("mountedCallback")},methods:{start:function(){this.localStartVal=this.startVal,this.startTime=null,this.localDuration=this.duration,this.paused=!1,this.rAF=(0,n.requestAnimationFrame)(this.count)},pauseResume:function(){this.paused?(this.resume(),this.paused=!1):(this.pause(),this.paused=!0)},pause:function(){(0,n.cancelAnimationFrame)(this.rAF)},resume:function(){this.startTime=null,this.localDuration=+this.remaining,this.localStartVal=+this.printVal,(0,n.requestAnimationFrame)(this.count)},reset:function(){this.startTime=null,(0,n.cancelAnimationFrame)(this.rAF),this.displayValue=this.formatNumber(this.startVal)},count:function(t){this.startTime||(this.startTime=t),this.timestamp=t;var e=t-this.startTime;this.remaining=this.localDuration-e,this.useEasing?this.countDown?this.printVal=this.localStartVal-this.easingFn(e,0,this.localStartVal-this.endVal,this.localDuration):this.printVal=this.easingFn(e,this.localStartVal,this.endVal-this.localStartVal,this.localDuration):this.countDown?this.printVal=this.localStartVal-(this.localStartVal-this.endVal)*(e/this.localDuration):this.printVal=this.localStartVal+(this.localStartVal-this.startVal)*(e/this.localDuration),this.countDown?this.printVal=this.printVal<this.endVal?this.endVal:this.printVal:this.printVal=this.printVal>this.endVal?this.endVal:this.printVal,this.displayValue=this.formatNumber(this.printVal),e<this.localDuration?this.rAF=(0,n.requestAnimationFrame)(this.count):this.$emit("callback")},isNumber:function(t){return!isNaN(parseFloat(t))},formatNumber:function(t){t=t.toFixed(this.decimals);var e=(t+="").split("."),a=e[0],n=e.length>1?this.decimal+e[1]:"",i=/(\d+)(\d{3})/;if(this.separator&&!this.isNumber(this.separator))for(;i.test(a);)a=a.replace(i,"$1"+this.separator+"$2");return this.prefix+a+n+this.suffix}},destroyed:function(){(0,n.cancelAnimationFrame)(this.rAF)}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(0),i=function(t){return t&&t.__esModule?t:{default:t}}(n);e.default=i.default,"undefined"!=typeof window&&window.Vue&&window.Vue.component("count-to",i.default)},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=0,i="webkit moz ms o".split(" "),s=void 0,r=void 0;if("undefined"==typeof window)e.requestAnimationFrame=s=function(){},e.cancelAnimationFrame=r=function(){};else{e.requestAnimationFrame=s=window.requestAnimationFrame,e.cancelAnimationFrame=r=window.cancelAnimationFrame;for(var o=void 0,c=0;c<i.length&&(!s||!r);c++)o=i[c],e.requestAnimationFrame=s=s||window[o+"RequestAnimationFrame"],e.cancelAnimationFrame=r=r||window[o+"CancelAnimationFrame"]||window[o+"CancelRequestAnimationFrame"];s&&r||(e.requestAnimationFrame=s=function(t){var e=(new Date).getTime(),a=Math.max(0,16-(e-n)),i=window.setTimeout(function(){t(e+a)},a);return n=e+a,i},e.cancelAnimationFrame=r=function(t){window.clearTimeout(t)})}e.requestAnimationFrame=s,e.cancelAnimationFrame=r},function(t,e){t.exports=function(t,e,a,n){var i,s=t=t||{},r=typeof t.default;"object"!==r&&"function"!==r||(i=t,s=t.default);var o="function"==typeof s?s.options:s;if(e&&(o.render=e.render,o.staticRenderFns=e.staticRenderFns),a&&(o._scopeId=a),n){var c=Object.create(o.computed||null);Object.keys(n).forEach(function(t){var e=n[t];c[t]=function(){return e}}),o.computed=c}return{esModule:i,exports:s,options:o}}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("span",[t._v("\n  "+t._s(t.displayValue)+"\n")])},staticRenderFns:[]}}])},BbVs:function(t,e,a){"use strict";var n=a("pxRa");a.n(n).a},HlqA:function(t,e,a){"use strict";var n=a("abrT");a.n(n).a},abrT:function(t,e,a){},lAbF:function(t,e,a){"use strict";a.r(e);var n=a("7BsA"),i={components:{CountTo:a.n(n).a},props:{statisticsData:{type:Object,default:function(){return{childrenCount:0,deviceChildrenCount:0,appointCount:0,followCount:0,toWeekUpdateCount:0}}}},methods:{handleSetLineChartData:function(t,e){this.$router.push({name:t,query:{type:t,title:e}})}}},s=(a("HlqA"),a("KHd+")),r=Object(s.a)(i,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-row",{staticClass:"panel-group",attrs:{gutter:20}},[a("el-col",{staticClass:"card-panel-col",attrs:{xs:4,sm:4,lg:4}},[a("div",{staticClass:"card-panel",on:{click:function(e){t.handleSetLineChartData("Allchildren")}}},[a("div",{staticClass:"card-panel-icon-wrapper icon-people"},[a("svg-icon",{attrs:{"icon-class":"bear01","class-name":"card-panel-icon"}})],1),t._v(" "),a("div",{staticClass:"card-panel-description"},[a("div",{staticClass:"card-panel-text"},[t._v(t._s(t.generateShow("home.all_children")))]),t._v(" "),a("count-to",{staticClass:"card-panel-num",attrs:{"start-val":0,"end-val":t.statisticsData.childrenCount,duration:2e3}})],1)])]),t._v(" "),a("el-col",{staticClass:"card-panel-col",attrs:{xs:4,sm:4,lg:4}},[a("div",{staticClass:"card-panel",on:{click:function(e){t.handleSetLineChartData("Intelligent")}}},[a("div",{staticClass:"card-panel-icon-wrapper icon-message"},[a("svg-icon",{attrs:{"icon-class":"bear02","class-name":"card-panel-icon"}})],1),t._v(" "),a("div",{staticClass:"card-panel-description"},[a("div",{staticClass:"card-panel-text"},[t._v(t._s(t.generateShow("home.intelligent_children")))]),t._v(" "),a("count-to",{staticClass:"card-panel-num",attrs:{"start-val":0,"end-val":t.statisticsData.deviceChildrenCount,duration:2e3}})],1)])]),t._v(" "),a("el-col",{staticClass:"card-panel-col",attrs:{xs:4,sm:5,lg:4}},[a("div",{staticClass:"card-panel",on:{click:function(e){t.handleSetLineChartData("Appointments")}}},[a("div",{staticClass:"card-panel-icon-wrapper icon-people"},[a("svg-icon",{attrs:{"icon-class":"bear01","class-name":"card-panel-icon"}})],1),t._v(" "),a("div",{staticClass:"card-panel-description"},[a("div",{staticClass:"card-panel-text"},[t._v(t._s(t.generateShow("home.today_appoint")))]),t._v(" "),a("count-to",{staticClass:"card-panel-num",attrs:{"start-val":0,"end-val":t.statisticsData.appointCount,duration:2e3}})],1)])]),t._v(" "),a("el-col",{staticClass:"card-panel-col",attrs:{xs:5,sm:5,lg:4}},[a("div",{staticClass:"card-panel",on:{click:function(e){t.handleSetLineChartData("highWarn")}}},[a("div",{staticClass:"card-panel-icon-wrapper icon-message"},[a("svg-icon",{attrs:{"icon-class":"bear02","class-name":"card-panel-icon"}})],1),t._v(" "),a("div",{staticClass:"card-panel-description"},[a("div",{staticClass:"card-panel-text"},[t._v(t._s(t.generateShow("home.today_warning")))]),t._v(" "),a("count-to",{staticClass:"card-panel-num",attrs:{"start-val":0,"end-val":t.statisticsData.followCount,duration:2e3}})],1)])]),t._v(" "),a("el-col",{staticClass:"card-panel-col",attrs:{xs:5,sm:5,lg:4}},[a("div",{staticClass:"card-panel",on:{click:function(e){t.handleSetLineChartData("children","本周复查儿童")}}},[a("div",{staticClass:"card-panel-icon-wrapper icon-message"},[a("svg-icon",{attrs:{"icon-class":"bear02","class-name":"card-panel-icon"}})],1),t._v(" "),a("div",{staticClass:"card-panel-description"},[a("div",{staticClass:"card-panel-text"},[t._v(t._s(t.generateShow("home.to_week_children")))]),t._v(" "),a("count-to",{staticClass:"card-panel-num",attrs:{"start-val":0,"end-val":t.statisticsData.toWeekUpdateCount,duration:2e3}})],1)])])],1)},[],!1,null,"ad8f9c46",null);r.options.__file="PanelGroup.vue";var o=r.exports,c=a("t3Un");function l(t){return Object(c.a)({url:"/api/a1/statistics/growth",method:"get",params:t})}var u={name:"StatisticsLine",data:function(){return this.chartSettings={labelMap:{newChild:"新增用户量",newDeviceChild:"新增智能用户量",syncChild:"同步数据用户"},area:!0},{pickerOptions2:{shortcuts:[{text:"最近一周",onClick:function(t){var e=new Date,a=new Date;a.setTime(a.getTime()-6048e5),t.$emit("pick",[a,e])}},{text:"最近一个月",onClick:function(t){var e=new Date,a=new Date;a.setTime(a.getTime()-2592e6),t.$emit("pick",[a,e])}},{text:"最近三个月",onClick:function(t){var e=new Date,a=new Date;a.setTime(a.getTime()-7776e6),t.$emit("pick",[a,e])}}]},query:{dateSection:[new Date(new Date-6048e5),new Date]},chartData:{columns:["date","newChild","newDeviceChild","syncChild"],rows:[{date:"2018-01-01",newChild:2},{date:"2018-01-02",newChild:3},{date:"2018-01-03",newChild:9},{date:"2018-01-05",newChild:1},{date:"2018-01-10",newChild:12},{date:"2018-01-20",newChild:45}]}}},watch:{"query.dateSection":function(t,e){this.getGrowthData()}},created:function(){this.getGrowthData()},methods:{getGrowthData:function(){var t=this;l(this.query).then(function(e){t.chartData.rows=e.data.items})}}},d=Object(s.a)(u,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-row",{staticClass:"row-bg",attrs:{type:"flex",justify:"space-between"}},[a("el-date-picker",{attrs:{"picker-options":t.pickerOptions2,type:"daterange",align:"right","unlink-panels":"","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期","value-format":"yyyy-MM-dd"},model:{value:t.query.dateSection,callback:function(e){t.$set(t.query,"dateSection",e)},expression:"query.dateSection"}})],1),t._v(" "),a("ve-line",{attrs:{data:t.chartData,settings:t.chartSettings,"set-option-opts":!0}})],1)},[],!1,null,null,null);d.options.__file="statistics_line.vue";var h=d.exports;function p(t){return Object(c.a)({url:"/api/a1/indents_statistics/growth",method:"get",params:t})}var m={name:"IndentsLine",data:function(){return this.chartSettings={labelMap:{identsCount:"订单数量",productLogsCount:"产品数量"},area:!0},{pickerOptions2:{shortcuts:[{text:"最近一周",onClick:function(t){var e=new Date,a=new Date;a.setTime(a.getTime()-6048e5),t.$emit("pick",[a,e])}},{text:"最近一个月",onClick:function(t){var e=new Date,a=new Date;a.setTime(a.getTime()-2592e6),t.$emit("pick",[a,e])}},{text:"最近三个月",onClick:function(t){var e=new Date,a=new Date;a.setTime(a.getTime()-7776e6),t.$emit("pick",[a,e])}}]},query:{dateSection:[new Date(new Date-6048e5),new Date]},chartData:{columns:["date","identsCount","productLogsCount"],rows:[{date:"2018-01-01",identsCount:2},{date:"2018-01-02",identsCount:3},{date:"2018-01-03",identsCount:9},{date:"2018-01-05",identsCount:1},{date:"2018-01-10",identsCount:12},{date:"2018-01-20",identsCount:45}]}}},watch:{"query.dateSection":function(t,e){this.getGrowthData()}},created:function(){this.getGrowthData()},methods:{getGrowthData:function(){var t=this;p(this.query).then(function(e){t.chartData.rows=e.data.items})}}},f=Object(s.a)(m,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-row",{staticClass:"row-bg",attrs:{type:"flex",justify:"space-between"}},[a("el-date-picker",{attrs:{"picker-options":t.pickerOptions2,type:"daterange",align:"right","unlink-panels":"","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期","value-format":"yyyy-MM-dd"},model:{value:t.query.dateSection,callback:function(e){t.$set(t.query,"dateSection",e)},expression:"query.dateSection"}})],1),t._v(" "),a("ve-line",{attrs:{data:t.chartData,settings:t.chartSettings,"set-option-opts":!0}})],1)},[],!1,null,null,null);f.options.__file="indents_line.vue";var v=f.exports,w={name:"IndentsLine",data:function(){return this.chartSettings={labelMap:{totalPrice:"销售额"},area:!0},{pickerOptions2:{shortcuts:[{text:"最近一周",onClick:function(t){var e=new Date,a=new Date;a.setTime(a.getTime()-6048e5),t.$emit("pick",[a,e])}},{text:"最近一个月",onClick:function(t){var e=new Date,a=new Date;a.setTime(a.getTime()-2592e6),t.$emit("pick",[a,e])}},{text:"最近三个月",onClick:function(t){var e=new Date,a=new Date;a.setTime(a.getTime()-7776e6),t.$emit("pick",[a,e])}}]},query:{dateSection:[new Date(new Date-6048e5),new Date]},chartData:{columns:["date","totalPrice"],rows:[{date:"2018-01-01",totalPrice:2},{date:"2018-01-02",totalPrice:3},{date:"2018-01-03",totalPrice:9},{date:"2018-01-05",totalPrice:1},{date:"2018-01-10",totalPrice:12},{date:"2018-01-20",totalPrice:45}]}}},watch:{"query.dateSection":function(t,e){this.getGrowthData()}},created:function(){this.getGrowthData()},methods:{getGrowthData:function(){var t=this;(function(t){return Object(c.a)({url:"/api/a1/indents_statistics/total_price",method:"get",params:t})})(this.query).then(function(e){t.chartData.rows=e.data.items})}}},C=Object(s.a)(w,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-row",{staticClass:"row-bg",attrs:{type:"flex",justify:"space-between"}},[a("el-date-picker",{attrs:{"picker-options":t.pickerOptions2,type:"daterange",align:"right","unlink-panels":"","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期","value-format":"yyyy-MM-dd"},model:{value:t.query.dateSection,callback:function(e){t.$set(t.query,"dateSection",e)},expression:"query.dateSection"}})],1),t._v(" "),a("ve-line",{attrs:{data:t.chartData,settings:t.chartSettings,"set-option-opts":!0}})],1)},[],!1,null,null,null);C.options.__file="indent_price_line.vue";var g={name:"Dashboard",components:{PanelGroup:o,StatisticsLine:h,IndentsLine:v,IndentPriceLine:C.exports},data:function(){return this.chartSettings={labelMap:{newChild:"新增用户量",newDeviceChild:"新增智能用户量",syncChild:"同步数据用户"},area:!0},{pickerOptions2:{shortcuts:[{text:"最近一周",onClick:function(t){var e=new Date,a=new Date;a.setTime(a.getTime()-6048e5),t.$emit("pick",[a,e])}},{text:"最近一个月",onClick:function(t){var e=new Date,a=new Date;a.setTime(a.getTime()-2592e6),t.$emit("pick",[a,e])}},{text:"最近三个月",onClick:function(t){var e=new Date,a=new Date;a.setTime(a.getTime()-7776e6),t.$emit("pick",[a,e])}}]},queryStatistics:{dateSection:[new Date(new Date-6048e5),new Date]},queryIndents:{dateSection:[new Date(new Date-6048e5),new Date]},statisticsData:{childrenCount:0,deviceChildrenCount:0,appointCount:0,followCount:0,toWeekUpdateCount:0},userTags:[],clinicalTags:[],chartStatisticsData:{columns:["date","newChild","newDeviceChild","syncChild"],rows:[{date:"2018-01-01",newChild:2},{date:"2018-01-02",newChild:3},{date:"2018-01-03",newChild:9},{date:"2018-01-05",newChild:1},{date:"2018-01-10",newChild:12},{date:"2018-01-20",newChild:45}]},chartIndentsData:{columns:["date","newChild","newDeviceChild","syncChild"],rows:[{date:"2018-01-01",newChild:2},{date:"2018-01-02",newChild:3},{date:"2018-01-03",newChild:9},{date:"2018-01-05",newChild:1},{date:"2018-01-10",newChild:12},{date:"2018-01-20",newChild:45}]},examineChildren:[]}},watch:{},created:function(){this.getStatisticsData()},methods:{handleClickTag:function(t,e){this.$router.push({name:"children",query:{type:t,title:e.name,tag_id:e.id}})},getStatisticsData:function(){var t=this;(function(t){return Object(c.a)({url:"/api/a1/statistics",method:"get",params:t})})().then(function(e){t.statisticsData.childrenCount=e.data.childrenCount,t.statisticsData.deviceChildrenCount=e.data.deviceChildrenCount,t.statisticsData.appointCount=e.data.appointCount,t.statisticsData.followCount=e.data.followCount,t.statisticsData.toWeekUpdateCount=e.data.toWeekUpdateCount,t.userTags=e.data.userTags,t.clinicalTags=e.data.clinicalTags})},getGrowthData:function(){var t=this;l(this.queryStatistics).then(function(e){t.chartStatisticsData.rows=e.data.items})},getIndentsGrowthData:function(){var t=this;p(this.queryIndents).then(function(e){t.chartIndentsData.rows=e.data.items})}}},_=(a("BbVs"),Object(s.a)(g,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"dashboard-container"},[a("panel-group",{attrs:{"statistics-data":t.statisticsData}}),t._v(" "),a("h3",[t._v(t._s(t.generateShow("home.time_section")))]),t._v(" "),a("StatisticsLine"),t._v(" "),a("h3",[t._v("开单统计")]),t._v(" "),a("IndentsLine"),t._v(" "),a("h3",[t._v("销售额统计")]),t._v(" "),a("IndentPriceLine"),t._v(" "),a("h3",[t._v(t._s(t.generateShow("home.user_tag_statics")))]),t._v(" "),a("el-row",{staticStyle:{"margin-top":"10px","margin-bottom":"10px"},attrs:{gutter:20}},t._l(t.userTags,function(e){return a("el-col",{key:e.id,attrs:{span:4}},[a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",staticStyle:{cursor:"pointer"},attrs:{slot:"header"},on:{click:function(a){t.handleClickTag("tag",e)}},slot:"header"},[a("span",[t._v(t._s(e.name))])]),t._v(" "),a("div",{staticClass:"component-item"},[t._v(t._s(e.childrenCount))])])],1)})),t._v(" "),a("h3",[t._v(t._s(t.generateShow("home.clinical_tag_statics")))]),t._v(" "),a("el-row",{staticStyle:{"margin-top":"10px","margin-bottom":"20px"},attrs:{gutter:20}},t._l(t.clinicalTags,function(e){return a("el-col",{key:e.id,attrs:{span:3}},[a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",staticStyle:{cursor:"pointer"},attrs:{slot:"header"},on:{click:function(a){t.handleClickTag("tag",e)}},slot:"header"},[a("span",[t._v(t._s(e.name))])]),t._v(" "),a("div",{staticClass:"component-item"},[t._v(t._s(e.childrenCount))])])],1)}))],1)},[],!1,null,"2efe0629",null));_.options.__file="index.vue";e.default=_.exports},pxRa:function(t,e,a){}}]);