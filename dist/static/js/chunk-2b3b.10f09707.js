(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-2b3b"],{"7BsA":function(t,a,e){t.exports=function(t){function a(n){if(e[n])return e[n].exports;var i=e[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,a),i.l=!0,i.exports}var e={};return a.m=t,a.c=e,a.i=function(t){return t},a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:n})},a.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},a.p="/dist/",a(a.s=2)}([function(t,a,e){var n=e(4)(e(1),e(5),null,null);t.exports=n.exports},function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=e(3);a.default={props:{startVal:{type:Number,required:!1,default:0},endVal:{type:Number,required:!1,default:2017},duration:{type:Number,required:!1,default:3e3},autoplay:{type:Boolean,required:!1,default:!0},decimals:{type:Number,required:!1,default:0,validator:function(t){return t>=0}},decimal:{type:String,required:!1,default:"."},separator:{type:String,required:!1,default:","},prefix:{type:String,required:!1,default:""},suffix:{type:String,required:!1,default:""},useEasing:{type:Boolean,required:!1,default:!0},easingFn:{type:Function,default:function(t,a,e,n){return e*(1-Math.pow(2,-10*t/n))*1024/1023+a}}},data:function(){return{localStartVal:this.startVal,displayValue:this.formatNumber(this.startVal),printVal:null,paused:!1,localDuration:this.duration,startTime:null,timestamp:null,remaining:null,rAF:null}},computed:{countDown:function(){return this.startVal>this.endVal}},watch:{startVal:function(){this.autoplay&&this.start()},endVal:function(){this.autoplay&&this.start()}},mounted:function(){this.autoplay&&this.start(),this.$emit("mountedCallback")},methods:{start:function(){this.localStartVal=this.startVal,this.startTime=null,this.localDuration=this.duration,this.paused=!1,this.rAF=(0,n.requestAnimationFrame)(this.count)},pauseResume:function(){this.paused?(this.resume(),this.paused=!1):(this.pause(),this.paused=!0)},pause:function(){(0,n.cancelAnimationFrame)(this.rAF)},resume:function(){this.startTime=null,this.localDuration=+this.remaining,this.localStartVal=+this.printVal,(0,n.requestAnimationFrame)(this.count)},reset:function(){this.startTime=null,(0,n.cancelAnimationFrame)(this.rAF),this.displayValue=this.formatNumber(this.startVal)},count:function(t){this.startTime||(this.startTime=t),this.timestamp=t;var a=t-this.startTime;this.remaining=this.localDuration-a,this.useEasing?this.countDown?this.printVal=this.localStartVal-this.easingFn(a,0,this.localStartVal-this.endVal,this.localDuration):this.printVal=this.easingFn(a,this.localStartVal,this.endVal-this.localStartVal,this.localDuration):this.countDown?this.printVal=this.localStartVal-(this.localStartVal-this.endVal)*(a/this.localDuration):this.printVal=this.localStartVal+(this.localStartVal-this.startVal)*(a/this.localDuration),this.countDown?this.printVal=this.printVal<this.endVal?this.endVal:this.printVal:this.printVal=this.printVal>this.endVal?this.endVal:this.printVal,this.displayValue=this.formatNumber(this.printVal),a<this.localDuration?this.rAF=(0,n.requestAnimationFrame)(this.count):this.$emit("callback")},isNumber:function(t){return!isNaN(parseFloat(t))},formatNumber:function(t){t=t.toFixed(this.decimals);var a=(t+="").split("."),e=a[0],n=a.length>1?this.decimal+a[1]:"",i=/(\d+)(\d{3})/;if(this.separator&&!this.isNumber(this.separator))for(;i.test(e);)e=e.replace(i,"$1"+this.separator+"$2");return this.prefix+e+n+this.suffix}},destroyed:function(){(0,n.cancelAnimationFrame)(this.rAF)}}},function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=e(0),i=function(t){return t&&t.__esModule?t:{default:t}}(n);a.default=i.default,"undefined"!=typeof window&&window.Vue&&window.Vue.component("count-to",i.default)},function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=0,i="webkit moz ms o".split(" "),s=void 0,r=void 0;if("undefined"==typeof window)a.requestAnimationFrame=s=function(){},a.cancelAnimationFrame=r=function(){};else{a.requestAnimationFrame=s=window.requestAnimationFrame,a.cancelAnimationFrame=r=window.cancelAnimationFrame;for(var l=void 0,o=0;o<i.length&&(!s||!r);o++)l=i[o],a.requestAnimationFrame=s=s||window[l+"RequestAnimationFrame"],a.cancelAnimationFrame=r=r||window[l+"CancelAnimationFrame"]||window[l+"CancelRequestAnimationFrame"];s&&r||(a.requestAnimationFrame=s=function(t){var a=(new Date).getTime(),e=Math.max(0,16-(a-n)),i=window.setTimeout(function(){t(a+e)},e);return n=a+e,i},a.cancelAnimationFrame=r=function(t){window.clearTimeout(t)})}a.requestAnimationFrame=s,a.cancelAnimationFrame=r},function(t,a){t.exports=function(t,a,e,n){var i,s=t=t||{},r=typeof t.default;"object"!==r&&"function"!==r||(i=t,s=t.default);var l="function"==typeof s?s.options:s;if(a&&(l.render=a.render,l.staticRenderFns=a.staticRenderFns),e&&(l._scopeId=e),n){var o=Object.create(l.computed||null);Object.keys(n).forEach(function(t){var a=n[t];o[t]=function(){return a}}),l.computed=o}return{esModule:i,exports:s,options:l}}},function(t,a){t.exports={render:function(){var t=this,a=t.$createElement;return(t._self._c||a)("span",[t._v("\n  "+t._s(t.displayValue)+"\n")])},staticRenderFns:[]}}])},YM5p:function(t,a,e){},a64B:function(t,a,e){},lAbF:function(t,a,e){"use strict";e.r(a);var n=e("7BsA"),i={components:{CountTo:e.n(n).a},props:{statisticsData:{type:Object,default:function(){return{childrenCount:0,deviceChildrenCount:0,appointCount:0,followCount:0}}}},methods:{handleSetLineChartData:function(t){this.$router.push({name:t})}}},s=(e("qIQ+"),e("KHd+")),r=Object(s.a)(i,function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("el-row",{staticClass:"panel-group",attrs:{gutter:20}},[e("el-col",{staticClass:"card-panel-col",attrs:{xs:6,sm:6,lg:6}},[e("div",{staticClass:"card-panel",on:{click:function(a){t.handleSetLineChartData("Allchildren")}}},[e("div",{staticClass:"card-panel-icon-wrapper icon-people"},[e("svg-icon",{attrs:{"icon-class":"bear01","class-name":"card-panel-icon"}})],1),t._v(" "),e("div",{staticClass:"card-panel-description"},[e("div",{staticClass:"card-panel-text"},[t._v("全部儿童")]),t._v(" "),e("count-to",{staticClass:"card-panel-num",attrs:{"start-val":0,"end-val":t.statisticsData.childrenCount,duration:2e3}})],1)])]),t._v(" "),e("el-col",{staticClass:"card-panel-col",attrs:{xs:6,sm:6,lg:6}},[e("div",{staticClass:"card-panel",on:{click:function(a){t.handleSetLineChartData("Intelligent")}}},[e("div",{staticClass:"card-panel-icon-wrapper icon-message"},[e("svg-icon",{attrs:{"icon-class":"bear02","class-name":"card-panel-icon"}})],1),t._v(" "),e("div",{staticClass:"card-panel-description"},[e("div",{staticClass:"card-panel-text"},[t._v("智能儿童")]),t._v(" "),e("count-to",{staticClass:"card-panel-num",attrs:{"start-val":0,"end-val":t.statisticsData.deviceChildrenCount,duration:2e3}})],1)])]),t._v(" "),e("el-col",{staticClass:"card-panel-col",attrs:{xs:6,sm:6,lg:6}},[e("div",{staticClass:"card-panel",on:{click:function(a){t.handleSetLineChartData("Appointments")}}},[e("div",{staticClass:"card-panel-icon-wrapper icon-people"},[e("svg-icon",{attrs:{"icon-class":"bear01","class-name":"card-panel-icon"}})],1),t._v(" "),e("div",{staticClass:"card-panel-description"},[e("div",{staticClass:"card-panel-text"},[t._v("今日预约建档")]),t._v(" "),e("count-to",{staticClass:"card-panel-num",attrs:{"start-val":0,"end-val":t.statisticsData.appointCount,duration:2e3}})],1)])]),t._v(" "),e("el-col",{staticClass:"card-panel-col",attrs:{xs:6,sm:6,lg:6}},[e("div",{staticClass:"card-panel",on:{click:function(a){t.handleSetLineChartData("highWarn")}}},[e("div",{staticClass:"card-panel-icon-wrapper icon-message"},[e("svg-icon",{attrs:{"icon-class":"bear02","class-name":"card-panel-icon"}})],1),t._v(" "),e("div",{staticClass:"card-panel-description"},[e("div",{staticClass:"card-panel-text"},[t._v("今日预警随访")]),t._v(" "),e("count-to",{staticClass:"card-panel-num",attrs:{"start-val":0,"end-val":t.statisticsData.followCount,duration:2e3}})],1)])])],1)},[],!1,null,"bbfd61be",null);r.options.__file="PanelGroup.vue";var l=r.exports,o=e("t3Un");var c={name:"Dashboard",components:{PanelGroup:l},data:function(){return this.chartSettings={labelMap:{newChild:"新增用户量",newDeviceChild:"新增智能用户量",syncChild:"同步数据用户"},area:!0},{pickerOptions2:{shortcuts:[{text:"最近一周",onClick:function(t){var a=new Date,e=new Date;e.setTime(e.getTime()-6048e5),t.$emit("pick",[e,a])}},{text:"最近一个月",onClick:function(t){var a=new Date,e=new Date;e.setTime(e.getTime()-2592e6),t.$emit("pick",[e,a])}},{text:"最近三个月",onClick:function(t){var a=new Date,e=new Date;e.setTime(e.getTime()-7776e6),t.$emit("pick",[e,a])}}]},paramsQuery:{dateSection:[new Date(new Date-6048e5),new Date]},statisticsData:{childrenCount:0,deviceChildrenCount:0,appointCount:0,followCount:0},userTags:[],clinicalTags:[],chartData:{columns:["date","newChild","newDeviceChild","syncChild"],rows:[{date:"2018-01-01",newChild:2},{date:"2018-01-02",newChild:3},{date:"2018-01-03",newChild:9},{date:"2018-01-05",newChild:1},{date:"2018-01-10",newChild:12},{date:"2018-01-20",newChild:45}]}}},watch:{"paramsQuery.dateSection":function(t,a){this.getGrowthData()}},created:function(){this.getStatisticsData(),this.getGrowthData()},methods:{handleSetLineChartData:function(){},getStatisticsData:function(){var t=this;(function(t){return Object(o.a)({url:"/api/a1/statistics",method:"get",params:t})})().then(function(a){t.statisticsData.childrenCount=a.data.childrenCount,t.statisticsData.deviceChildrenCount=a.data.deviceChildrenCount,t.statisticsData.appointCount=a.data.appointCount,t.statisticsData.followCount=a.data.followCount,t.userTags=a.data.userTags,t.clinicalTags=a.data.clinicalTags})},getGrowthData:function(){var t=this;(function(t){return Object(o.a)({url:"/api/a1/statistics/growth",method:"get",params:t})})(this.paramsQuery).then(function(a){t.chartData.rows=a.data.items})}}},u=(e("yur6"),Object(s.a)(c,function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"dashboard-container"},[e("panel-group",{attrs:{"statistics-data":t.statisticsData},on:{handleSetLineChartData:t.handleSetLineChartData}}),t._v(" "),e("el-row",{staticClass:"row-bg",attrs:{type:"flex",justify:"space-between"}},[e("el-tag",[t._v("时段分布")]),t._v(" "),e("el-date-picker",{attrs:{"picker-options":t.pickerOptions2,type:"daterange",align:"right","unlink-panels":"","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期","value-format":"yyyy-MM-dd"},model:{value:t.paramsQuery.dateSection,callback:function(a){t.$set(t.paramsQuery,"dateSection",a)},expression:"paramsQuery.dateSection"}})],1),t._v(" "),e("ve-line",{attrs:{data:t.chartData,settings:t.chartSettings,"set-option-opts":!0}}),t._v(" "),e("el-tag",[t._v("用户标签统计")]),t._v(" "),e("el-row",{staticStyle:{"margin-top":"10px","margin-bottom":"10px"},attrs:{gutter:20}},t._l(t.userTags,function(a){return e("el-col",{key:a.id,attrs:{span:4}},[e("el-card",{staticClass:"box-card"},[e("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[e("span",[t._v(t._s(a.name))])]),t._v(" "),e("div",{staticClass:"component-item"},[t._v(t._s(a.childrenCount))])])],1)})),t._v(" "),e("el-tag",[t._v("临床标签统计")]),t._v(" "),e("el-row",{staticStyle:{"margin-top":"10px","margin-bottom":"20px"},attrs:{gutter:20}},t._l(t.clinicalTags,function(a){return e("el-col",{key:a.id,attrs:{span:3}},[e("el-card",{staticClass:"box-card"},[e("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[e("span",[t._v(t._s(a.name))])]),t._v(" "),e("div",{staticClass:"component-item"},[t._v(t._s(a.childrenCount))])])],1)}))],1)},[],!1,null,"2bdc0c09",null));u.options.__file="index.vue";a.default=u.exports},"qIQ+":function(t,a,e){"use strict";var n=e("YM5p");e.n(n).a},yur6:function(t,a,e){"use strict";var n=e("a64B");e.n(n).a}}]);