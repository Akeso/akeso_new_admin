(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-044b"],{CHLb:function(e,t,a){"use strict";a.r(t);var l=a("RLrD"),r={data:function(){return{userId:this.$route.params.id,selectDate:new Date,healthScore:{},downloadUrl:"/api/a1/excels/original_data"}},mounted:function(){},created:function(){this.getDaily()},methods:{getDaily:function(){var e=this;Object(l.b)({child_id:this.userId,selectDate:this.selectDate}).then(function(t){e.healthScore=t.data})},changeDate:function(){this.getDaily()}}},o=a("KHd+"),s=Object(o.a)(r,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container"},[a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[e._v("Child Information")]),e._v(" "),a("el-button",{staticStyle:{float:"right",padding:"3px 0"},attrs:{type:"text"}},[a("a",{attrs:{href:e.downloadUrl+"?child_id="+e.userId+"&selectDate="+e.selectDate}},[e._v("export data")])])],1),e._v(" "),a("el-row",{staticStyle:{"margin-bottom":"10px"}},[a("el-col",[a("label",{attrs:{for:""}},[e._v("Select Date")]),e._v(" "),a("el-date-picker",{attrs:{editable:!1,clearable:!1,type:"date",placeholder:"Select Date","value-format":"yyyy-MM-dd"},on:{change:e.changeDate},model:{value:e.selectDate,callback:function(t){e.selectDate=t},expression:"selectDate"}})],1)],1),e._v(" "),a("el-row",[a("el-col",{staticStyle:{border:"5px #000000"},attrs:{span:6}},[a("p",[e._v("Name")])]),e._v(" "),a("el-col",{attrs:{span:18}},[a("p",[e._v(e._s(e.healthScore.childName))])])],1),e._v(" "),a("el-row",[a("el-col",{attrs:{span:6}},[a("p",[e._v("Out Time")])]),e._v(" "),a("el-col",{attrs:{span:18}},[a("p",[e._v(e._s(e.healthScore.outTime)+" minutes")])])],1),e._v(" "),a("el-row",[a("el-col",{attrs:{span:6}},[a("p",[e._v("Eye protection lighting time")])]),e._v(" "),a("el-col",{attrs:{span:18}},[a("p",[e._v(e._s(e.healthScore.protectLuxTime)+" minutes")])])],1),e._v(" "),a("el-row",[a("el-col",{attrs:{span:6}},[a("p",[e._v("Outdoor sunlight intake")])]),e._v(" "),a("el-col",{attrs:{span:18}},[a("p",[e._v(e._s(e.healthScore.outTimeLux)+" lux")])])],1),e._v(" "),a("el-row",[a("el-col",{attrs:{span:6}},[a("p",[e._v("Movement steps")])]),e._v(" "),a("el-col",{attrs:{span:18}},[a("p",[e._v(e._s(e.healthScore.stepCount)+" 步")])])],1),e._v(" "),a("el-row",[a("el-col",{attrs:{span:6}},[a("p",[e._v("Neck burden")])]),e._v(" "),a("el-col",{attrs:{span:18}},[a("p",[e._v(e._s(e.healthScore.nearworkBurdenDay)+" D")])])],1),e._v(" "),a("el-row",[a("el-col",{attrs:{span:6}},[a("p",[e._v("Time near-word")])]),e._v(" "),a("el-col",{attrs:{span:18}},[a("p",[e._v(e._s(e.healthScore.nearworkTotal)+" minutes")])])],1),e._v(" "),a("el-row",[a("el-col",{attrs:{span:6}},[a("p",[e._v("Poor eye position")])]),e._v(" "),a("el-col",{attrs:{span:18}},[a("p",[e._v(e._s(e.healthScore.badPostureTimes)+" times")])])],1),e._v(" "),a("el-row",[a("el-col",{attrs:{span:6}},[a("p",[e._v("Average eye distance")])]),e._v(" "),a("el-col",{attrs:{span:18}},[a("p",[e._v(e._s(e.healthScore.avgEyeDistance)+" cm")])])],1),e._v(" "),a("el-row",[a("el-col",{attrs:{span:6}},[a("p",[e._v("Use eye time continuously")])]),e._v(" "),a("el-col",{attrs:{span:18}},[a("p",[e._v(e._s(e.healthScore.eyeTimeContinuously)+" hours")])])],1),e._v(" "),a("el-row",[a("el-col",{attrs:{span:6}},[a("p",[e._v("Use eye frequency continuously")])]),e._v(" "),a("el-col",{attrs:{span:18}},[a("p",[e._v(e._s(e.healthScore.eyeFrequencyContinuously)+" times")])])],1),e._v(" "),a("el-row",[a("el-col",{attrs:{span:6}},[a("p",[e._v("Accommodation burden")])]),e._v(" "),a("el-col",{attrs:{span:18}},[a("p",[e._v(e._s(e.healthScore.accommodationBurden)+" D/hour")])])],1),e._v(" "),a("el-row",[a("el-col",{attrs:{span:6}},[a("p",[e._v("Mean daily light exposure")])]),e._v(" "),a("el-col",{attrs:{span:18}},[a("p",[e._v(e._s(e.healthScore.dailyLightExposure)+" lux/min")])])],1),e._v(" "),a("el-row",[a("el-col",{attrs:{span:6}},[a("p",[e._v("Mean night light exposure")])]),e._v(" "),a("el-col",{attrs:{span:18}},[a("p",[e._v(e._s(e.healthScore.dailyNightExposure)+" lux/min")])])],1)],1)],1)},[],!1,null,null,null);s.options.__file="show.vue";t.default=s.exports},RLrD:function(e,t,a){"use strict";a.d(t,"a",function(){return r}),a.d(t,"b",function(){return o}),a.d(t,"d",function(){return s}),a.d(t,"c",function(){return n});var l=a("t3Un");function r(e){return Object(l.a)({url:"/api/a1/reports/daily",method:"get",params:e})}function o(e){return Object(l.a)({url:"/api/a1/reports/daily_en",method:"get",params:e})}function s(e){return Object(l.a)({url:"/api/a1/reports/weekly",methods:"get",params:e})}function n(e){return Object(l.a)({url:"/api/a1/reports/monthly",methods:"get",params:e})}}}]);