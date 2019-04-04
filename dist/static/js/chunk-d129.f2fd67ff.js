(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-d129"],{AYxv:function(t,e,a){},Hv8Z:function(t,e,a){"use strict";a.d(e,"b",function(){return l}),a.d(e,"a",function(){return o});var n=a("t3Un");function l(t){return Object(n.a)({url:"/api/a1/summaries/whole",method:"get",params:t})}function o(t){return Object(n.a)({url:"/api/a1/summaries/sorting",method:"get",params:t})}},N2rx:function(t,e,a){"use strict";var n=a("c4TA");a.n(n).a},Vb3a:function(t,e,a){"use strict";a.r(e);var n=a("Hv8Z"),l={props:{title:{type:String,default:"户外时间"},doneCount:{type:Number,default:0},totalCount:{type:Number,default:0},donePercent:{type:Number,default:0}},data:function(){return{titlePie:{text:this.title,x:"center"},tooltip:{trigger:"item",formatter:"{a} <br/>{b} : {c} ({d}%)"},legend:{orient:"vertical",left:"left",data:["达标","未达标"]},series:{name:"是否达标",type:"pie",radius:"55%",center:["50%","60%"],data:[{value:0,name:"达标"},{value:0,name:"未达标"}],itemStyle:{emphasis:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"}}}}},computed:{undonePercent:function(){return 0===this.totalCount?50:100-this.donePercent}},watch:{doneCount:function(){this.series.data=[{value:this.doneCount,name:"达标"},{value:this.totalCount-this.doneCount,name:"未达标"}]}}},o=(a("N2rx"),a("KHd+")),s=Object(o.a)(l,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("table",{staticClass:"table-cls",attrs:{border:"5",cellspacing:"0",cellpadding:"10"}},[a("tr",[a("td",[t._v(t._s(t.title))]),t._v(" "),a("td",[t._v("筛查人数")]),t._v(" "),a("td",[t._v("对应占比")])]),t._v(" "),a("tr",[a("td",[t._v("达标")]),t._v(" "),a("td",[t._v(t._s(t.doneCount))]),t._v(" "),a("td",[t._v(t._s(100-t.undonePercent)+"%")])]),t._v(" "),a("tr",[a("td",[t._v("不达标")]),t._v(" "),a("td",[t._v(t._s(t.totalCount-t.doneCount))]),t._v(" "),a("td",[t._v(t._s(t.undonePercent)+"%")])]),t._v(" "),a("tr",[a("td",[t._v("合计人数")]),t._v(" "),a("td",[t._v(t._s(t.totalCount))]),t._v(" "),a("td",[t._v("100%")])])]),t._v(" "),a("ve-pie",{attrs:{title:t.titlePie,tooltip:t.tooltip,legend:t.legend,series:t.series}})],1)},[],!1,null,"88ff7e5a",null);s.options.__file="standard_item.vue";var r=[{key:"first",label:"近一周"},{key:"second",label:"近一个月"},{key:"third",label:"近三个月"}],i={components:{StandardItem:s.exports},data:function(){return{dateOptions:r,selectDate:"",selectSection:[new Date,new Date],wholeData:{}}},created:function(){this.getData()},methods:{handleFilter:function(){this.getData()},getData:function(){var t=this;Object(n.b)({selectSection:this.selectSection}).then(function(e){t.wholeData=e.data})},radioChange:function(){if("first"===this.selectDate){var t=new Date,e=new Date(t.getTime()-6048e5);this.selectSection=[e,t]}else if("second"===this.selectDate){var a=new Date,n=new Date(a.getTime()-2592e6);this.selectSection=[n,a]}else{var l=new Date,o=new Date(l.getTime()-7776e6);this.selectSection=[o,l]}this.getData()}}},c=(a("qgMh"),Object(o.a)(i,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:14}},[t._v("\n      选择日期\n      "),a("el-date-picker",{attrs:{clearable:!1,format:"yyyy-MM-dd","value-format":"yyyy-MM-dd",type:"daterange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期"},model:{value:t.selectSection,callback:function(e){t.selectSection=e},expression:"selectSection"}}),t._v(" "),a("el-button",{staticClass:"filter-item",attrs:{type:"primary",icon:"el-icon-search"},on:{click:t.handleFilter}},[t._v("查询")])],1)],1),t._v(" "),a("el-row",{staticStyle:{"margin-top":"10px"}},[a("el-radio-group",{on:{change:t.radioChange},model:{value:t.selectDate,callback:function(e){t.selectDate=e},expression:"selectDate"}},[a("el-radio-button",{attrs:{label:"first"}},[t._v("近一周")]),t._v(" "),a("el-radio-button",{attrs:{label:"second"}},[t._v("近一个月")]),t._v(" "),a("el-radio-button",{attrs:{label:"third"}},[t._v("近三个月")])],1)],1),t._v(" "),a("el-row",[a("table",{staticClass:"table-cls",attrs:{border:"5",cellspacing:"0",cellpadding:"10"}},[a("tr",[a("td",{staticClass:"td-30"},[t._v("名称")]),t._v(" "),a("td",{staticClass:"td-70"},[t._v("统计值")])]),t._v(" "),a("tr",[a("td",[t._v("智能儿童")]),t._v(" "),a("td",[t._v(t._s(t.wholeData.deviceChildrenCount))])]),t._v(" "),a("tr",[a("td",[t._v("全部儿童")]),t._v(" "),a("td",[t._v(t._s(t.wholeData.childrenCount))])]),t._v(" "),a("tr",[a("td",[t._v("智能/全部儿童占比")]),t._v(" "),a("td",[t._v(t._s(t.wholeData.deviceChildrenPercent)+"%")])]),t._v(" "),a("tr",[a("td",[t._v("户外活动情况达标率")]),t._v(" "),a("td",[a("el-progress",{attrs:{"text-inside":!0,"stroke-width":18,percentage:t.wholeData.outTimePercent,status:"success"}})],1)]),t._v(" "),a("tr",[a("td",[t._v("体育运动情况达标率")]),t._v(" "),a("td",[a("el-progress",{attrs:{"text-inside":!0,"stroke-width":18,percentage:t.wholeData.stepCountPercent,status:"success"}})],1)]),t._v(" "),a("tr",[a("td",[t._v("近视用眼不良未达标率")]),t._v(" "),a("td",[a("el-progress",{attrs:{"text-inside":!0,"stroke-width":18,percentage:t.wholeData.nearworkDayPercent,status:"success"}})],1)])])]),t._v(" "),a("el-row",{attrs:{gutter:10}},[a("el-col",{attrs:{span:12}},[a("StandardItem",{attrs:{title:"户外时间","done-count":t.wholeData.outTimeCount,"total-count":t.wholeData.totalCount,"done-percent":t.wholeData.outTimePercent}})],1),t._v(" "),a("el-col",{attrs:{span:12}},[a("StandardItem",{attrs:{title:"阳光摄入量","done-count":t.wholeData.luxDayCount,"total-count":t.wholeData.totalCount,"done-percent":t.wholeData.luxDayPercent}})],1)],1),t._v(" "),a("el-row",{attrs:{gutter:10}},[a("el-col",{attrs:{span:12}},[a("StandardItem",{attrs:{title:"运动步数","done-count":t.wholeData.stepCountCount,"total-count":t.wholeData.totalCount,"done-percent":t.wholeData.stepCountPercent}})],1),t._v(" "),a("el-col",{attrs:{span:12}},[a("StandardItem",{attrs:{title:"护眼光照时间","done-count":t.wholeData.protectLuxTimeCount,"total-count":t.wholeData.totalCount,"done-percent":t.wholeData.protectLuxTimePercent}})],1)],1),t._v(" "),a("el-row",[a("table",{staticClass:"table-cls",attrs:{border:"5",cellspacing:"0",cellpadding:"10"}},[a("tr",[a("td",{staticClass:"td-20"}),t._v(" "),a("td",{staticClass:"td-20"},[t._v("监测项目")]),t._v(" "),a("td",{staticClass:"td-20"},[t._v("监测结果")]),t._v(" "),a("td",{staticClass:"td-20"},[t._v("建议参考值")]),t._v(" "),a("td",{staticClass:"td-20"},[t._v("异常描述")])]),t._v(" "),a("tr",[a("td",{attrs:{rowspan:"3"}},[t._v("近视健康因子情况")]),t._v(" "),a("td",[t._v("户外时间/天")]),t._v(" "),a("td",[t._v(t._s(t.wholeData.outTimeAvg)+"分钟")]),t._v(" "),a("td",[t._v("≥120分钟")]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("阳光摄入/天")]),t._v(" "),a("td",[t._v(t._s(t.wholeData.luxDayAvg)+"lux")]),t._v(" "),a("td",[t._v("≥30万lux")]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("运动步数/天")]),t._v(" "),a("td",[t._v(t._s(t.wholeData.stepCountAvg)+"步")]),t._v(" "),a("td",[t._v("≥10000步")]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",{attrs:{rowspan:"3"}},[t._v("近视危险因子情况")]),t._v(" "),a("td",[t._v("近距离用眼时长/天")]),t._v(" "),a("td",[t._v(t._s(t.wholeData.nearworkDayAvg)+"分钟")]),t._v(" "),a("td",[t._v("≤240分钟")]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("不良用眼姿态/天")]),t._v(" "),a("td",[t._v(t._s(t.wholeData.badPostureTimesAvg)+"次")]),t._v(" "),a("td",[t._v("≤90分钟")]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("颈椎与用眼负荷/天")]),t._v(" "),a("td",[t._v(t._s(t.wholeData.nearworkBurdenDayAvg)+"D")]),t._v(" "),a("td",[t._v("≤750D")]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("初步提示")]),t._v(" "),a("td",{attrs:{colspan:"4"}},[t._v("若想达到近视防控效果最大化，请多去户外运动，沐浴光照，三项健康因子全部达到参考值；同时避免错误用眼习惯增加近视风险，将导致近视加深的近视危险因子下降到参考值以下。")])])])])],1)},[],!1,null,"96e2e7f6",null));c.options.__file="whole.vue";var d=c.exports,v=[{key:"first",label:"近一周"},{key:"second",label:"近一个月"},{key:"third",label:"近三个月"}],u=[{key:"area",label:"区域对比"},{key:"gender",label:"性别对比"},{key:"age",label:"年龄对比"}],_={data:function(){return{dateOptions:v,conditionOptions:u,selectDate:"first",selectCondition:"area"}},methods:{handleFilter:function(){}}},h=(a("YFCR"),Object(o.a)(_,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:12}},[t._v("\n      选择日期\n      "),a("el-select",{attrs:{placeholder:"请选择"},model:{value:t.selectDate,callback:function(e){t.selectDate=e},expression:"selectDate"}},t._l(t.dateOptions,function(t){return a("el-option",{key:t.key,attrs:{label:t.label,value:t.key}})}))],1)],1),t._v(" "),a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:12}},[t._v("\n      条件选择\n      "),a("el-select",{attrs:{placeholder:"请选择"},model:{value:t.selectCondition,callback:function(e){t.selectCondition=e},expression:"selectCondition"}},t._l(t.conditionOptions,function(t){return a("el-option",{key:t.key,attrs:{label:t.label,value:t.key}})}))],1),t._v(" "),a("el-button",{staticClass:"filter-item",attrs:{type:"primary",icon:"el-icon-search"},on:{click:t.handleFilter}},[t._v("查询")])],1)],1)},[],!1,null,"ede40c4a",null));h.options.__file="contrast.vue";var p={components:{Whole:d,Constrast:h.exports},data:function(){return{activeIndex:"whole"}},methods:{handleSelect:function(t,e){console.log("key => ",t),this.activeIndex=t}}},f=(a("d0RO"),Object(o.a)(p,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-card",{attrs:{"body-style":{padding:"10px"}}},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[t._v("智能分析")])]),t._v(" "),a("el-row",[a("el-menu",{staticClass:"el-menu-demo",attrs:{"default-active":t.activeIndex,mode:"horizontal"},on:{select:t.handleSelect}},[a("el-menu-item",{attrs:{index:"whole"}},[t._v("整体分析")]),t._v(" "),a("el-menu-item",{attrs:{index:"contrast"}},[t._v("对比分析")])],1)],1),t._v(" "),a("el-row",[a("el-col",["whole"===t.activeIndex?a("Whole"):t._e(),t._v(" "),"contrast"===t.activeIndex?a("Constrast"):t._e()],1)],1)],1)},[],!1,null,"6a2c2e45",null));f.options.__file="analytics.vue";e.default=f.exports},YFCR:function(t,e,a){"use strict";var n=a("AYxv");a.n(n).a},c4TA:function(t,e,a){},d0RO:function(t,e,a){"use strict";var n=a("g3pA");a.n(n).a},f0bU:function(t,e,a){},g3pA:function(t,e,a){},qgMh:function(t,e,a){"use strict";var n=a("f0bU");a.n(n).a}}]);