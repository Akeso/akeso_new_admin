(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-d374"],{"+y3I":function(t,e,s){"use strict";var a=s("JJHx");s.n(a).a},"4CkC":function(t,e,s){"use strict";var a=s("rVsc");s.n(a).a},"6aZ5":function(t,e,s){"use strict";s.r(e);var a=s("SF+J"),r={props:{userId:{type:String,default:""}},data:function(){return{avatarUrl:"http://www.pptbz.com/pptpic/UploadFiles_6909/201203/2012031220134655.jpg",emptyText:"",child:{name:".",gender:".",age:".",height:".",weight:"."}}},created:function(){this.getInformation()},methods:{getInformation:function(){var t=this;Object(a.a)({id:this.userId}).then(function(e){t.child=e.data})}}},l=(s("+y3I"),s("KHd+")),n=Object(l.a)(r,function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("el-row",[s("el-card",{staticClass:"box-card"},[s("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[s("span",[t._v("儿童基本信息")])]),t._v(" "),s("el-row",{staticClass:"row-bg",attrs:{type:"flex"}},[s("el-col",{attrs:{span:6}},[s("div",[s("img",{staticClass:"pan-thumb",attrs:{src:t.avatarUrl}})]),t._v(" "),s("div",{staticClass:"btn-user"},[s("el-button",{attrs:{type:"success"}},[t._v("编辑用户信息")])],1),t._v(" "),s("div",{staticClass:"btn-user"},[s("el-button",{attrs:{type:"success"}},[t._v("联系用户")])],1),t._v(" "),s("div",{staticClass:"btn-user"},[s("el-button",{attrs:{type:"success"}},[t._v("编辑标签")])],1)]),t._v(" "),s("el-col",{attrs:{span:24}},[s("el-row",{attrs:{gutter:6}},[s("el-col",{attrs:{span:4}},[s("div",{staticClass:"grid-content bg-purple box-center"},[t._v("姓名")])]),t._v(" "),s("el-col",{attrs:{span:4}},[s("div",{staticClass:"grid-content bg-purple box-center"},[t._v(t._s(t.child.name))])]),t._v(" "),s("el-col",{attrs:{span:4}},[s("div",{staticClass:"grid-content bg-purple"},[t._v("性别")])]),t._v(" "),s("el-col",{attrs:{span:4}},[s("div",{staticClass:"grid-content bg-purple"},[t._v(t._s(t.child.gender))])]),t._v(" "),s("el-col",{attrs:{span:4}},[s("div",{staticClass:"grid-content bg-purple"},[t._v("年龄")])]),t._v(" "),s("el-col",{attrs:{span:4}},[s("div",{staticClass:"grid-content bg-purple"},[t._v(t._s(t.child.age))])])],1),t._v(" "),s("el-row",{attrs:{gutter:6}},[s("el-col",{attrs:{span:4}},[s("div",{staticClass:"grid-content bg-purple box-center"},[t._v("身高(cm)")])]),t._v(" "),s("el-col",{attrs:{span:4}},[s("div",{staticClass:"grid-content bg-purple box-center"},[t._v(t._s(t.child.height))])]),t._v(" "),s("el-col",{attrs:{span:4}},[s("div",{staticClass:"grid-content bg-purple"},[t._v("体重(kg)")])]),t._v(" "),s("el-col",{attrs:{span:4}},[s("div",{staticClass:"grid-content bg-purple"},[t._v(t._s(t.child.weight))])]),t._v(" "),s("el-col",{attrs:{span:4}},[s("div",{staticClass:"grid-content bg-purple"},[t._v("体重指数BMI")])]),t._v(" "),s("el-col",{attrs:{span:4}},[s("div",{staticClass:"grid-content bg-purple"},[t._v(t._s(t.child.bmi||0))])])],1),t._v(" "),s("el-row",{attrs:{gutter:6}},[s("el-col",{attrs:{span:6}},[s("div",{staticClass:"grid-content bg-purple box-center"},[t._v("近家族史")])]),t._v(" "),s("el-col",{attrs:{span:6}},[s("div",{staticClass:"grid-content bg-purple box-center"},[t._v(t._s(t.child.mother_eye)+" - "+t._s(t.child.father_eye))])]),t._v(" "),s("el-col",{attrs:{span:6}},[s("div",{staticClass:"grid-content bg-purple"},[t._v("联系电话")])]),t._v(" "),s("el-col",{attrs:{span:6}},[s("div",{staticClass:"grid-content bg-purple"},[t._v(t._s(t.child.phone))])])],1),t._v(" "),s("el-row",{attrs:{gutter:6}},[s("el-col",{attrs:{span:6}},[s("div",{staticClass:"grid-content bg-purple box-center"},[t._v("眼病史")])]),t._v(" "),s("el-col",{attrs:{span:18}},[s("div",{staticClass:"grid-content bg-purple box-center"},[t._v(t._s(t.child.eye_illness_history||"-"))])])],1),t._v(" "),s("el-row",{attrs:{gutter:6}},[s("el-col",{attrs:{span:6}},[s("div",{staticClass:"grid-content bg-purple box-center"},[t._v("居住地")])]),t._v(" "),s("el-col",{attrs:{span:6}},[s("div",{staticClass:"grid-content bg-purple box-center"},[t._v(t._s(t.child.location_string||"-"))])]),t._v(" "),s("el-col",{attrs:{span:6}},[s("div",{staticClass:"grid-content bg-purple"},[t._v("学校")])]),t._v(" "),s("el-col",{attrs:{span:6}},[s("div",{staticClass:"grid-content bg-purple"},[t._v(t._s(t.child.school||"-"))])])],1),t._v(" "),s("el-row",{attrs:{gutter:6}},[s("el-col",{attrs:{span:6}},[s("div",{staticClass:"grid-content bg-purple box-center"},[t._v("用户标签")])]),t._v(" "),s("el-col",{attrs:{span:18}},[s("div",{staticClass:"grid-content bg-purple box-center"},[t._v(t._s(t.child.user_tags||"-"))])])],1),t._v(" "),s("el-row",{attrs:{gutter:6}},[s("el-col",{attrs:{span:6}},[s("div",{staticClass:"grid-content bg-purple box-center"},[t._v("绑定设备")])]),t._v(" "),s("el-col",{attrs:{span:6}},[s("div",{staticClass:"grid-content bg-purple box-center"},[t._v(t._s(t.child.device||"-"))])]),t._v(" "),s("el-col",{attrs:{span:6}},[s("div",{staticClass:"grid-content bg-purple"},[t._v("绑定医生")])]),t._v(" "),s("el-col",{attrs:{span:6}},[s("div",{staticClass:"grid-content bg-purple"},[t._v(t._s(t.child.doctor||"-"))])])],1),t._v(" "),s("el-row",{attrs:{gutter:10}},[s("el-col",{attrs:{span:6}},[s("div",{staticClass:"grid-content bg-purple"},[t._v("用户资料完成度")])]),t._v(" "),s("el-col",{attrs:{span:18}},[s("el-progress",{staticStyle:{"margin-top":"10px"},attrs:{"text-inside":!0,"stroke-width":20,percentage:t.child.integrity,status:"success"}})],1)],1)],1)],1)],1)],1)},[],!1,null,"6ea978ec",null);n.options.__file="information.vue";var c=n.exports,o=s("t3Un");var i={props:{userId:{type:String,default:""}},data:function(){return this.chartSettings={labelMap:{score:"分数"}},{offsetV:1,selectDate:new Date,chartData:{columns:["date","score"],rows:[{date:"00:00",score:0},{date:"01:00",score:2},{date:"02:00",score:4},{date:"03:00",score:2},{date:"04:00",score:6},{date:"05:00",score:2},{date:"06:00",score:2},{date:"07:00",score:2},{date:"08:00",score:2},{date:"09:00",score:2},{date:"10:00",score:2},{date:"11:00",score:2},{date:"12:00",score:2},{date:"13:00",score:19},{date:"14:00",score:2},{date:"15:00",score:2},{date:"16:00",score:2},{date:"17:00",score:2},{date:"18:00",score:2},{date:"19:00",score:2},{date:"20:00",score:2},{date:"21:00",score:2},{date:"22:00",score:2},{date:"23:00",score:2}]},healthScore:{}}},created:function(){console.log("health score created."),this.getDaily()},mounted:function(){console.log("health score mounted.")},methods:{getDaily:function(){var t=this;(function(t){return Object(o.a)({url:"/api/a1/reports/daily",method:"get",params:t})})({child_id:this.userId,selectDate:this.selectDate}).then(function(e){t.healthScore=e.data;var s=e.data.healthIndexHour;t.chartData.rows.forEach(function(t,e){t.score=s[e]})})},changeDate:function(){this.getDaily()}}},d=(s("4CkC"),Object(l.a)(i,function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("el-row",[s("el-col",{attrs:{span:24}},[s("el-row",[s("el-col",{attrs:{offset:1}},[s("el-date-picker",{attrs:{type:"date",placeholder:"选择日期","value-format":"yyyy-MM-dd"},on:{change:t.changeDate},model:{value:t.selectDate,callback:function(e){t.selectDate=e},expression:"selectDate"}})],1)],1),t._v(" "),s("el-row",[s("el-col",{attrs:{span:5}},[s("div",{staticStyle:{"text-align":"center"}},[s("span",{staticClass:"text-score"},[t._v(t._s(t.healthScore.healthIndex))])]),t._v(" "),s("div",{staticStyle:{"text-align":"center","margin-top":"20px"}},[s("span",{staticStyle:{"font-size":"14px",background:"#2bd710",padding:"8px 16px","border-radius":"25px",color:"#fff"}},[t._v("总加分"+t._s(t.healthScore.upScoreMax)+",总减分"+t._s(t.healthScore.downScoreMax))])]),t._v(" "),s("div",{staticStyle:{"text-align":"center","margin-top":"20px"}},[s("span",{staticStyle:{"font-size":"16px"}},[t._v("戴镜时间"+t._s(t.healthScore.wearTime))])])]),t._v(" "),s("el-col",{attrs:{span:19}},[s("el-row",{staticClass:"margin-bottom",attrs:{span:24}},[s("el-col",{staticClass:"text-right text-standard-font",attrs:{span:3}},[t._v("户外时间")]),t._v(" "),s("el-col",{attrs:{span:6}},[s("el-progress",{staticClass:"progress-l-r",attrs:{"text-inside":!0,"stroke-width":24,percentage:t.healthScore.outTimePercent,color:"#000000",status:"success"}})],1),t._v(" "),s("el-col",{staticClass:"text-standard-font",attrs:{span:3}},[t._v(t._s(t.healthScore.outTime)+"/120分钟")]),t._v(" "),s("el-col",{staticClass:"text-right text-standard-font",attrs:{span:3}},[t._v("用眼负荷")]),t._v(" "),s("el-col",{attrs:{span:6}},[s("el-progress",{staticClass:"progress-l-r",attrs:{"text-inside":!0,"stroke-width":24,percentage:t.healthScore.nearworkBurdenPercent,status:"success"}})],1),t._v(" "),s("el-col",{staticClass:"text-standard-font",attrs:{span:3}},[t._v(t._s(t.healthScore.nearworkBurdenDay)+"/750D")])],1),t._v(" "),s("el-row",{staticClass:"margin-bottom",attrs:{span:24}},[s("el-col",{staticClass:"text-right text-standard-font",attrs:{span:3}},[t._v("护眼光照时间")]),t._v(" "),s("el-col",{attrs:{span:6}},[s("el-progress",{staticClass:"progress-l-r",attrs:{"text-inside":!0,"stroke-width":24,percentage:t.healthScore.protectLuxTimePercent,status:"success"}})],1),t._v(" "),s("el-col",{staticClass:"text-standard-font",attrs:{span:3}},[t._v(t._s(t.healthScore.protectLuxTime)+"/35分钟")]),t._v(" "),s("el-col",{staticClass:"text-right text-standard-font",attrs:{span:3}},[t._v("近距离用眼时间")]),t._v(" "),s("el-col",{attrs:{span:6}},[s("el-progress",{staticClass:"progress-l-r",attrs:{"text-inside":!0,"stroke-width":24,percentage:t.healthScore.nearworkPercent,status:"success"}})],1),t._v(" "),s("el-col",{staticClass:"text-standard-font",attrs:{span:3}},[t._v(t._s(t.healthScore.nearworkTotal)+"/240分钟")])],1),t._v(" "),s("el-row",{staticClass:"margin-bottom",attrs:{span:24}},[s("el-col",{staticClass:"text-right text-standard-font",attrs:{span:3}},[t._v("户外阳光摄入")]),t._v(" "),s("el-col",{attrs:{span:6}},[s("el-progress",{staticClass:"progress-l-r",attrs:{"text-inside":!0,"stroke-width":24,percentage:t.healthScore.luxDayPercent,status:"success"}})],1),t._v(" "),s("el-col",{attrs:{span:3}},[t._v(t._s(t.healthScore.outTimeLux)+"/300000lux")]),t._v(" "),s("el-col",{staticClass:"text-right text-standard-font",attrs:{span:3}},[t._v("不良姿势提醒")]),t._v(" "),s("el-col",{attrs:{span:6}},[s("el-progress",{staticClass:"progress-l-r",attrs:{"text-inside":!0,"stroke-width":24,percentage:t.healthScore.badPostureDayPercent,status:"success"}})],1),t._v(" "),s("el-col",{staticClass:"text-standard-font",attrs:{span:3}},[t._v(t._s(t.healthScore.badPostureTimes)+"/90次")])],1),t._v(" "),s("el-row",{staticClass:"margin-bottom",attrs:{span:24}},[s("el-col",{staticClass:"text-right text-standard-font",attrs:{span:3}},[t._v("运动步数")]),t._v(" "),s("el-col",{attrs:{span:6}},[s("el-progress",{staticClass:"progress-l-r",attrs:{"text-inside":!0,"stroke-width":24,percentage:t.healthScore.stepCountPercent,status:"success"}})],1),t._v(" "),s("el-col",{staticClass:"text-standard-font",attrs:{span:3}},[t._v(t._s(t.healthScore.stepCount)+"/10000步")])],1)],1)],1),t._v(" "),s("el-row",{attrs:{span:24}},[s("el-col",{attrs:{span:24}},[s("ve-line",{attrs:{data:t.chartData,settings:t.chartSettings,"set-option-opts":!0}})],1)],1)],1)],1)},[],!1,null,null,null));d.options.__file="health_score.vue";var p={components:{HealthScore:d.exports},props:{userId:{type:String,default:""}},data:function(){return{tabName:"first",menuItemIndex:"1"}},computed:{showFirst:function(){return"first"===this.tabName}},methods:{handleClick:function(t,e){this.tabName=t.name},menuItemSelect:function(t,e){this.menuItemIndex=t,console.log(t,"-",e)}}},u=(s("xSE4"),Object(l.a)(p,function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("el-tabs",{attrs:{value:t.tabName},on:{"tab-click":t.handleClick}},[s("el-tab-pane",{attrs:{name:"first"}},[s("span",{attrs:{slot:"label"},slot:"label"},[t._v("健康数据")]),t._v(" "),s("el-row",{staticClass:"tac"},[s("el-col",{attrs:{span:3}},[s("el-menu",{staticClass:"el-menu-vertical-demo",attrs:{collapse:!1,"default-active":t.menuItemIndex},on:{select:t.menuItemSelect}},[s("el-menu-item",{attrs:{index:"1"}},[s("span",{attrs:{slot:"title"},slot:"title"},[t._v("健康评分")])]),t._v(" "),s("el-menu-item",{attrs:{index:"2"}},[s("span",{attrs:{slot:"title"},slot:"title"},[t._v("健康周报")])]),t._v(" "),s("el-menu-item",{attrs:{index:"3"}},[s("span",{attrs:{slot:"title"},slot:"title"},[t._v("健康月报")])])],1)],1),t._v(" "),s("el-col",{attrs:{span:21}},["1"===t.menuItemIndex?s("HealthScore",{attrs:{"user-id":t.userId}}):t._e()],1)],1)],1),t._v(" "),s("el-tab-pane",{attrs:{label:"近视预测",name:"second"}},[s("div",[t._v("\n      近视预测\n    ")])]),t._v(" "),s("el-tab-pane",{attrs:{label:"屈光档案",name:"third"}},[t._v("屈光档案")]),t._v(" "),s("el-tab-pane",{attrs:{label:"防控意见",name:"four"}},[t._v("防控意见")])],1)},[],!1,null,"75fcf2cc",null));u.options.__file="health_data.vue";var v={components:{Information:c,HealthData:u.exports},data:function(){return{userId:this.$route.params.id,avatarUrl:"http://www.pptbz.com/pptpic/UploadFiles_6909/201203/2012031220134655.jpg",emptyText:"",user:{}}},mounted:function(){},created:function(){},methods:{}},_=(s("Z3vx"),Object(l.a)(v,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"mixin-components-container"},[e("Information",{attrs:{"user-id":this.userId}}),this._v(" "),e("HealthData",{attrs:{"user-id":this.userId}})],1)},[],!1,null,"c6ddd898",null));_.options.__file="show.vue";e.default=_.exports},BZlz:function(t,e,s){},JJHx:function(t,e,s){},"SF+J":function(t,e,s){"use strict";s.d(e,"c",function(){return r}),s.d(e,"a",function(){return l}),s.d(e,"b",function(){return n});var a=s("t3Un");function r(t){return Object(a.a)({url:"/api/a1/children",method:"get",params:t})}function l(t){return Object(a.a)({url:"/api/a1/children/"+t.id,method:"get"})}function n(t){return Object(a.a)({url:"/api/a1/children/with_equipment",method:"get",params:t})}},XZIr:function(t,e,s){},Z3vx:function(t,e,s){"use strict";var a=s("BZlz");s.n(a).a},rVsc:function(t,e,s){},xSE4:function(t,e,s){"use strict";var a=s("XZIr");s.n(a).a}}]);