(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-9ab9"],{CHLb:function(t,e,s){"use strict";s.r(e);var a=s("RLrD"),r={data:function(){return{userId:this.$route.params.id,selectDate:new Date,healthScore:{},downloadUrl:"/api/a1/excels/original_data"}},mounted:function(){},created:function(){this.getDaily()},methods:{getDaily:function(){var t=this;Object(a.b)({child_id:this.userId,selectDate:this.selectDate}).then(function(e){t.healthScore=e.data})},changeDate:function(){this.getDaily()}}},n=(s("nx8v"),s("KHd+")),l=Object(n.a)(r,function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"app-container"},[s("el-card",{staticClass:"box-card"},[s("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[s("span",[t._v("Child Information")]),t._v(" "),s("el-button",{staticStyle:{float:"right",padding:"3px 0"},attrs:{type:"text"}},[s("a",{attrs:{href:t.downloadUrl+"?child_id="+t.userId+"&selectDate="+t.selectDate}},[t._v("export data")])])],1),t._v(" "),s("el-row",{staticStyle:{"margin-bottom":"10px"}},[s("el-col",[s("label",{attrs:{for:""}},[t._v("Select Date")]),t._v(" "),s("el-date-picker",{attrs:{editable:!1,clearable:!1,type:"date",placeholder:"Select Date","value-format":"yyyy-MM-dd"},on:{change:t.changeDate},model:{value:t.selectDate,callback:function(e){t.selectDate=e},expression:"selectDate"}})],1)],1),t._v(" "),s("el-row",{attrs:{gutter:6}},[s("el-col",{attrs:{span:6}},[s("div",{staticClass:"grid-content bg-purple"},[t._v("Name")])]),t._v(" "),s("el-col",{attrs:{span:18}},[s("div",{staticClass:"grid-content bg-purple"},[t._v(t._s(t.healthScore.childName))])])],1),t._v(" "),s("el-row",{attrs:{gutter:6}},[s("el-col",{attrs:{span:6}},[s("div",{staticClass:"grid-content bg-purple"},[t._v("Monitoring indicators")])]),t._v(" "),s("el-col",{attrs:{span:18}},[s("div",{staticClass:"grid-content bg-purple"},[t._v("Monitoring results")])])],1),t._v(" "),s("el-row",{attrs:{gutter:6}},[s("el-col",{attrs:{span:6}},[s("div",{staticClass:"grid-content bg-purple"},[s("svg-icon",{attrs:{"icon-class":"eye-open"}}),t._v(" Out Time")],1)]),t._v(" "),s("el-col",{attrs:{span:18}},[s("div",{staticClass:"grid-content bg-purple"},[t._v(t._s(t.healthScore.outTime)+" minutes")])])],1),t._v(" "),s("el-row",{attrs:{gutter:6}},[s("el-col",{attrs:{span:6}},[s("div",{staticClass:"grid-content bg-purple"},[s("svg-icon",{attrs:{"icon-class":"eye-open"}}),t._v("  Eye protection lighting time")],1)]),t._v(" "),s("el-col",{attrs:{span:18}},[s("div",{staticClass:"grid-content bg-purple"},[t._v(t._s(t.healthScore.protectLuxTime)+" minutes")])])],1),t._v(" "),s("el-row",{attrs:{gutter:6}},[s("el-col",{attrs:{span:6}},[s("div",{staticClass:"grid-content bg-purple"},[s("svg-icon",{attrs:{"icon-class":"eye-open"}}),t._v("  Outdoor sunlight intake")],1)]),t._v(" "),s("el-col",{attrs:{span:18}},[s("div",{staticClass:"grid-content bg-purple"},[t._v(t._s(t.healthScore.outTimeLux)+" lux")])])],1),t._v(" "),s("el-row",{attrs:{gutter:6}},[s("el-col",{attrs:{span:6}},[s("div",{staticClass:"grid-content bg-purple"},[s("svg-icon",{attrs:{"icon-class":"eye-open"}}),t._v("  Movement steps")],1)]),t._v(" "),s("el-col",{attrs:{span:18}},[s("div",{staticClass:"grid-content bg-purple"},[t._v(t._s(t.healthScore.stepCount)+" 步")])])],1),t._v(" "),s("el-row",{attrs:{gutter:6}},[s("el-col",{attrs:{span:6}},[s("div",{staticClass:"grid-content bg-purple"},[s("svg-icon",{attrs:{"icon-class":"eye-open"}}),t._v("  Neck burden")],1)]),t._v(" "),s("el-col",{attrs:{span:18}},[s("div",{staticClass:"grid-content bg-purple"},[t._v(t._s(t.healthScore.nearworkBurdenDay)+" D")])])],1),t._v(" "),s("el-row",{attrs:{gutter:6}},[s("el-col",{attrs:{span:6}},[s("div",{staticClass:"grid-content bg-purple"},[s("svg-icon",{attrs:{"icon-class":"eye-open"}}),t._v("  Time near-word")],1)]),t._v(" "),s("el-col",{attrs:{span:18}},[s("div",{staticClass:"grid-content bg-purple"},[t._v(t._s(t.healthScore.nearworkTotal)+" minutes")])])],1),t._v(" "),s("el-row",{attrs:{gutter:6}},[s("el-col",{attrs:{span:6}},[s("div",{staticClass:"grid-content bg-purple"},[s("svg-icon",{attrs:{"icon-class":"eye-open"}}),t._v("  Poor eye position")],1)]),t._v(" "),s("el-col",{attrs:{span:18}},[s("div",{staticClass:"grid-content bg-purple"},[t._v(t._s(t.healthScore.badPostureTimes)+" times")])])],1),t._v(" "),s("el-row",{attrs:{gutter:6}},[s("el-col",{attrs:{span:6}},[s("div",{staticClass:"grid-content bg-purple"},[s("svg-icon",{attrs:{"icon-class":"eye-open"}}),t._v("  Average eye distance")],1)]),t._v(" "),s("el-col",{attrs:{span:18}},[s("div",{staticClass:"grid-content bg-purple"},[t._v(t._s(t.healthScore.avgEyeDistance)+" cm")])])],1),t._v(" "),s("el-row",{attrs:{gutter:6}},[s("el-col",{attrs:{span:6}},[s("div",{staticClass:"grid-content bg-purple"},[s("svg-icon",{attrs:{"icon-class":"eye-open"}}),t._v("  Use eye time continuously")],1)]),t._v(" "),s("el-col",{attrs:{span:18}},[s("div",{staticClass:"grid-content bg-purple"},[t._v(t._s(t.healthScore.eyeTimeContinuously)+" hours")])])],1),t._v(" "),s("el-row",{attrs:{gutter:6}},[s("el-col",{attrs:{span:6}},[s("div",{staticClass:"grid-content bg-purple"},[s("svg-icon",{attrs:{"icon-class":"eye-open"}}),t._v("  Use eye frequency continuously")],1)]),t._v(" "),s("el-col",{attrs:{span:18}},[s("div",{staticClass:"grid-content bg-purple"},[t._v(t._s(t.healthScore.eyeFrequencyContinuously)+" times")])])],1),t._v(" "),s("el-row",{attrs:{gutter:6}},[s("el-col",{attrs:{span:6}},[s("div",{staticClass:"grid-content bg-purple"},[s("svg-icon",{attrs:{"icon-class":"eye-open"}}),t._v("  Accommodation burden")],1)]),t._v(" "),s("el-col",{attrs:{span:18}},[s("div",{staticClass:"grid-content bg-purple"},[t._v(t._s(t.healthScore.accommodationBurden)+" D/hour")])])],1),t._v(" "),s("el-row",{attrs:{gutter:6}},[s("el-col",{attrs:{span:6}},[s("div",{staticClass:"grid-content bg-purple"},[s("svg-icon",{attrs:{"icon-class":"eye-open"}}),t._v("  Mean daily light exposure")],1)]),t._v(" "),s("el-col",{attrs:{span:18}},[s("div",{staticClass:"grid-content bg-purple"},[t._v(t._s(t.healthScore.dailyLightExposure)+" lux/min")])])],1),t._v(" "),s("el-row",{attrs:{gutter:6}},[s("el-col",{attrs:{span:6}},[s("div",{staticClass:"grid-content bg-purple"},[s("svg-icon",{attrs:{"icon-class":"eye-open"}}),t._v(" Mean night light exposure")],1)]),t._v(" "),s("el-col",{attrs:{span:18}},[s("div",{staticClass:"grid-content bg-purple"},[t._v(t._s(t.healthScore.dailyNightExposure)+" lux/min")])])],1)],1)],1)},[],!1,null,"309a6f9c",null);l.options.__file="show.vue";e.default=l.exports},RLrD:function(t,e,s){"use strict";s.d(e,"a",function(){return r}),s.d(e,"b",function(){return n}),s.d(e,"d",function(){return l}),s.d(e,"c",function(){return o});var a=s("t3Un");function r(t){return Object(a.a)({url:"/api/a1/reports/daily",method:"get",params:t})}function n(t){return Object(a.a)({url:"/api/a1/reports/daily_en",method:"get",params:t})}function l(t){return Object(a.a)({url:"/api/a1/reports/weekly",methods:"get",params:t})}function o(t){return Object(a.a)({url:"/api/a1/reports/monthly",methods:"get",params:t})}},VBfA:function(t,e,s){},nx8v:function(t,e,s){"use strict";var a=s("VBfA");s.n(a).a}}]);