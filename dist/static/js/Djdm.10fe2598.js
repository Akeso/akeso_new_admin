(window.webpackJsonp=window.webpackJsonp||[]).push([["Djdm"],{Djdm:function(t,e,l){"use strict";l.r(e);var a=l("t3Un");var o={data:function(){return{dialogVisible:!1,childName:void 0,child_id:void 0,report_id:void 0,content:void 0,operater:void 0}},methods:{handlerClickCancel:function(){this.content=void 0,this.operater=void 0,this.dialogVisible=!1},handleShow:function(t){this.child_id=t.childId,this.childName=t.childName,this.report_id=t.id,this.dialogVisible=!0},handleClickSubmit:function(){var t=this;(function(t){return Object(a.a)({url:"/api/a1/followers",method:"post",data:t})})({child_id:this.child_id,report_id:this.report_id,content:this.content,operater:this.operater}).then(function(e){t.$emit("createSuccess"),t.dialogVisible=!1})}}},i=l("KHd+"),n=Object(i.a)(o,function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("el-dialog",{attrs:{visible:t.dialogVisible,modal:!0,"close-on-click-modal":!1,title:"随访备注",width:"70%"},on:{"update:visible":function(e){t.dialogVisible=e}}},[l("el-form",{staticStyle:{width:"60%","margin-left":"80px"},attrs:{"label-position":"right","label-width":"100px"}},[l("el-form-item",{attrs:{label:"随访儿童"}},[t._v("\n      "+t._s(t.childName)+"\n    ")]),t._v(" "),l("el-form-item",{attrs:{label:"备注"}},[l("el-input",{staticClass:"filter-item",attrs:{type:"textarea",placeholder:"输入备注"},model:{value:t.content,callback:function(e){t.content=e},expression:"content"}})],1),t._v(" "),l("el-form-item",{attrs:{label:"随访人签名"}},[l("el-input",{staticClass:"filter-item",attrs:{placeholder:"输入随访人"},model:{value:t.operater,callback:function(e){t.operater=e},expression:"operater"}})],1)],1),t._v(" "),l("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[l("el-button",{on:{click:t.handlerClickCancel}},[t._v("取消")]),t._v(" "),l("el-button",{attrs:{type:"primary"},on:{click:t.handleClickSubmit}},[t._v("提交")])],1)],1)},[],!1,null,null,null);n.options.__file="new_follow.vue";var r=n.exports,s={data:function(){return{dialogVisible:!1,list:[],child_id:void 0}},methods:{handlerClickCancel:function(){this.list=[],this.dialogVisible=!1},handleShow:function(t){this.child_id=t.childId,this.getData(),this.dialogVisible=!0},getData:function(){var t=this;(function(t){return Object(a.a)({url:"/api/a1/followers/logs",method:"get",params:t})})({child_id:this.child_id}).then(function(e){t.list=e.data})}}},c=Object(i.a)(s,function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("el-dialog",{attrs:{visible:t.dialogVisible,modal:!0,title:"随访记录",width:"70%"},on:{"update:visible":function(e){t.dialogVisible=e}}},[l("el-table",{attrs:{data:t.list}},[l("el-table-column",{attrs:{property:"name",label:"姓名","min-width":"60"}}),t._v(" "),l("el-table-column",{attrs:{property:"content",label:"备注","min-width":"100"}}),t._v(" "),l("el-table-column",{attrs:{property:"createdAt",label:"随访时间","min-width":"80"}}),t._v(" "),l("el-table-column",{attrs:{property:"operater",label:"随访人","min-width":"60"}})],1)],1)},[],!1,null,null,null);c.options.__file="follow_logs.vue";var u={components:{NewFollow:r,FollowLogs:c.exports},data:function(){return{list:null,total:null,todayCount:0,listLoading:!0,listQuery:{page:1,limit:20,importance:void 0,sortProp:"",sortOrder:"",type:"one"}}},created:function(){this.getData()},methods:{handleClickLogs:function(t){this.$refs.follow_logs.handleShow(t)},handleClickPhone:function(t){this.$refs.new_follow.handleShow(t)},getData:function(){var t=this;(function(t){return Object(a.a)({url:"/api/a1/followers",method:"get",params:t})})(this.listQuery).then(function(e){t.list=e.data.items,t.total=e.data.total})},handleColumnSort:function(){},handleCurrentChange:function(t){this.listQuery.page=t,this.getList()},handleSizeChange:function(t){this.listQuery.limit=t,this.getList()}}},d=Object(i.a)(u,function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",[l("el-tag",{attrs:{type:"danger"}},[t._v("上月眼健康评分 1-50分")]),t._v(" "),l("el-table",{staticStyle:{width:"100%","margin-top":"10px"},attrs:{data:t.list,border:""},on:{"sort-change":t.handleColumnSort}},[l("el-table-column",{attrs:{label:"姓名","min-width":"60"},scopedSlots:t._u([{key:"default",fn:function(e){return[l("router-link",{attrs:{to:"/preview/child/"+e.row.childId}},[l("el-button",{attrs:{type:"text",size:"small"}},[t._v(t._s(e.row.childName))])],1)]}}])}),t._v(" "),l("el-table-column",{attrs:{prop:"childAge",label:"年龄","min-width":"60"}}),t._v(" "),l("el-table-column",{attrs:{prop:"phone",label:"联系方式","min-width":"80"}}),t._v(" "),l("el-table-column",{attrs:{prop:"healthIndex",label:"上月眼健康评分","min-width":"80"}}),t._v(" "),l("el-table-column",{attrs:{prop:"lastFollowAt",label:"上次随访时间","min-width":"80"}}),t._v(" "),l("el-table-column",{attrs:{prop:"lastFollowType",label:"上次操作方式","min-width":"80"}}),t._v(" "),l("el-table-column",{attrs:{prop:"followState",label:"随访状态","min-width":"80"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n        "+t._s(e.row.followState?"已随访":"待随访")+"\n      ")]}}])}),t._v(" "),l("el-table-column",{attrs:{label:"操作","min-width":"120"},scopedSlots:t._u([{key:"default",fn:function(e){return[e.row.followState?t._e():l("el-button",{attrs:{type:"text",size:"small"},on:{click:function(l){t.handleClickPhone(e.row)}}},[t._v("电话联系")]),t._v(" "),l("el-button",{attrs:{type:"text",size:"small"},on:{click:function(l){t.handleClickLogs(e.row)}}},[t._v("随访记录")])]}}])})],1),t._v(" "),l("div",{staticClass:"pagination-container"},[l("el-pagination",{directives:[{name:"show",rawName:"v-show",value:t.total>0,expression:"total>0"}],attrs:{"current-page":t.listQuery.page,"page-sizes":[10,20,30,50],"page-size":t.listQuery.limit,total:t.total,background:"",layout:"total, sizes, prev, pager, next, jumper"},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1),t._v(" "),l("NewFollow",{ref:"new_follow",on:{createSuccess:t.getData}}),t._v(" "),l("FollowLogs",{ref:"follow_logs"})],1)},[],!1,null,null,null);d.options.__file="follow_one.vue";var h=d.exports,m={components:{NewFollow:r},data:function(){return{list:null,total:null,todayCount:0,listLoading:!0,listQuery:{page:1,limit:20,importance:void 0,sortProp:"",sortOrder:""}}},created:function(){console.log("follow two")},methods:{getList:function(){},handleColumnSort:function(){},handleCurrentChange:function(t){this.listQuery.page=t,this.getList()},handleSizeChange:function(t){this.listQuery.limit=t,this.getList()}}},p=Object(i.a)(m,function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",[l("el-tag",{attrs:{type:"warning"}},[t._v("上月眼健康评分 51-100分")]),t._v(" "),l("el-table",{staticStyle:{width:"100%","margin-top":"10px"},attrs:{data:t.list,border:""},on:{"sort-change":t.handleColumnSort}},[l("el-table-column",{attrs:{prop:"childName",label:"姓名","min-width":"60"}}),t._v(" "),l("el-table-column",{attrs:{prop:"40",label:"年龄","min-width":"60"}}),t._v(" "),l("el-table-column",{attrs:{prop:"healthIndex",label:"用眼健康评分",sortable:"custom","min-width":"80"}}),t._v(" "),l("el-table-column",{attrs:{prop:"wearTime",label:"戴镜时间(分钟)",sortable:"custom","min-width":"80"}}),t._v(" "),l("el-table-column",{attrs:{prop:"outTime",label:"户外时间(分钟)",sortable:"custom","min-width":"80"}}),t._v(" "),l("el-table-column",{attrs:{prop:"protectLuxTime",label:"护眼光照时间(分钟)",sortable:"custom","min-width":"80"}}),t._v(" "),l("el-table-column",{attrs:{prop:"luxDay",label:"阳光摄入(Lux)",sortable:"custom","min-width":"80"}}),t._v(" "),l("el-table-column",{attrs:{prop:"nearworkDay",label:"近距离用眼时间(分钟)",sortable:"custom","min-width":"80"}}),t._v(" "),l("el-table-column",{attrs:{prop:"nearworkBurdenDay",label:"用眼负荷(D)",sortable:"custom","min-width":"80"}}),t._v(" "),l("el-table-column",{attrs:{prop:"badPostureTimes",label:"不良姿势提醒(次)",sortable:"custom","min-width":"80"}}),t._v(" "),l("el-table-column",{attrs:{prop:"stepCount",label:"步数(步)",sortable:"custom","min-width":"60"}}),t._v(" "),l("el-table-column",{attrs:{prop:"effectiveDays",label:"同步天数",sortable:"custom","min-width":"80"}})],1),t._v(" "),l("div",{staticClass:"pagination-container"},[l("el-pagination",{directives:[{name:"show",rawName:"v-show",value:t.total>0,expression:"total>0"}],attrs:{"current-page":t.listQuery.page,"page-sizes":[10,20,30,50],"page-size":t.listQuery.limit,total:t.total,background:"",layout:"total, sizes, prev, pager, next, jumper"},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1),t._v(" "),l("NewFollow",{ref:"new_follow"})],1)},[],!1,null,null,null);p.options.__file="follow_two.vue";var b=p.exports,v={data:function(){return{list:null,total:null,todayCount:0,listLoading:!0,listQuery:{page:1,limit:20,importance:void 0,sortProp:"",sortOrder:""}}},created:function(){console.log("follow three")},methods:{getList:function(){},handleColumnSort:function(){},handleCurrentChange:function(t){this.listQuery.page=t,this.getList()},handleSizeChange:function(t){this.listQuery.limit=t,this.getList()}}},w=Object(i.a)(v,function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",[l("el-tag",{attrs:{type:"success"}},[t._v("上月眼健康评分 ＞100分")]),t._v(" "),l("el-table",{staticStyle:{width:"100%","margin-top":"10px"},attrs:{data:t.list,border:""},on:{"sort-change":t.handleColumnSort}},[l("el-table-column",{attrs:{prop:"childName",label:"姓名","min-width":"60"}}),t._v(" "),l("el-table-column",{attrs:{prop:"40",label:"年龄","min-width":"60"}}),t._v(" "),l("el-table-column",{attrs:{prop:"healthIndex",label:"用眼健康评分",sortable:"custom","min-width":"80"}}),t._v(" "),l("el-table-column",{attrs:{prop:"wearTime",label:"戴镜时间(分钟)",sortable:"custom","min-width":"80"}}),t._v(" "),l("el-table-column",{attrs:{prop:"outTime",label:"户外时间(分钟)",sortable:"custom","min-width":"80"}}),t._v(" "),l("el-table-column",{attrs:{prop:"protectLuxTime",label:"护眼光照时间(分钟)",sortable:"custom","min-width":"80"}}),t._v(" "),l("el-table-column",{attrs:{prop:"luxDay",label:"阳光摄入(Lux)",sortable:"custom","min-width":"80"}}),t._v(" "),l("el-table-column",{attrs:{prop:"nearworkDay",label:"近距离用眼时间(分钟)",sortable:"custom","min-width":"80"}}),t._v(" "),l("el-table-column",{attrs:{prop:"nearworkBurdenDay",label:"用眼负荷(D)",sortable:"custom","min-width":"80"}}),t._v(" "),l("el-table-column",{attrs:{prop:"badPostureTimes",label:"不良姿势提醒(次)",sortable:"custom","min-width":"80"}}),t._v(" "),l("el-table-column",{attrs:{prop:"stepCount",label:"步数(步)",sortable:"custom","min-width":"60"}}),t._v(" "),l("el-table-column",{attrs:{prop:"effectiveDays",label:"同步天数",sortable:"custom","min-width":"80"}})],1),t._v(" "),l("div",{staticClass:"pagination-container"},[l("el-pagination",{directives:[{name:"show",rawName:"v-show",value:t.total>0,expression:"total>0"}],attrs:{"current-page":t.listQuery.page,"page-sizes":[10,20,30,50],"page-size":t.listQuery.limit,total:t.total,background:"",layout:"total, sizes, prev, pager, next, jumper"},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1)],1)},[],!1,null,null,null);w.options.__file="follow_three.vue";var _={components:{FollowOne:h,FollowTwo:b,FollowThree:w.exports},data:function(){return{tabName:"first"}},computed:{showFirst:function(){return"first"===this.tabName}},methods:{handleClickTab:function(t,e){this.tabName=t.name},menuItemSelect:function(t,e){this.menuItemIndex=t}}},f=Object(i.a)(_,function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",[l("el-card",{staticClass:"box-card"},[l("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[l("span",[t._v("预警随访")])]),t._v(" "),l("el-tabs",{attrs:{value:t.tabName,type:"border-card"},on:{"tab-click":t.handleClickTab}},[l("el-tab-pane",{attrs:{name:"first",label:"差"}},["first"===t.tabName?l("FollowOne"):t._e()],1),t._v(" "),l("el-tab-pane",{attrs:{name:"second",label:"良"}},["second"===t.tabName?l("span",["second"===t.tabName?l("FollowTwo"):t._e()],1):t._e()]),t._v(" "),l("el-tab-pane",{attrs:{name:"third",label:"优"}},["third"===t.tabName?l("FollowThree"):t._e()],1)],1)],1)],1)},[],!1,null,null,null);f.options.__file="high_warn.vue";e.default=f.exports}}]);