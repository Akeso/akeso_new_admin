(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-69fa"],{"6ySL":function(t,e,a){"use strict";a.r(e);var i=a("k65F"),o=a("RPJT"),n=a("9QD0"),l=a("U7XQ"),s={components:{AppointShow:o.a,AppointConfirm:n.a,AppointCancel:l.a},data:function(){return{list:null,total:null,todayCount:0,listLoading:!0,listQuery:{page:1,limit:20,importance:void 0,code:void 0,childName:void 0,phone:void 0}}},created:function(){this.getList()},methods:{handleClickCancel:function(t){this.$refs.cancel.show(t)},handleClickShow:function(t){this.$refs.show.show(t)},handleClickConfirm:function(t){this.$refs.confirm.show(t)},getList:function(){var t=this;Object(i.a)(this.listQuery).then(function(e){t.list=e.data.items,t.total=e.data.total,t.todayCount=e.data.todayCount,setTimeout(function(){t.listLoading=!1},1500)})},handleCurrentChange:function(t){this.listQuery.page=t,this.getList()},handleSizeChange:function(t){this.listQuery.limit=t,this.getList()},handleColumnSort:function(t){this.listQuery.sortProp=t.prop,this.listQuery.sortOrder=t.order,this.getList()},handleFilter:function(){this.getList()},handleFilterClear:function(){this.listQuery.code="",this.listQuery.childName="",this.phone="",this.getList()}}},r=a("KHd+"),c=Object(r.a)(s,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[t._v(t._s(t.generateShow("route.admin_appoints")))])]),t._v(" "),a("el-row",{staticStyle:{"margin-bottom":"10px"}},[t._v("\n      "+t._s(t.generateShow("common.appointment_code"))+":\n      "),a("el-input",{staticClass:"filter-item",staticStyle:{width:"100px"},attrs:{placeholder:t.generateShow("common.appointment_code"),label:"预约码",clearable:""},model:{value:t.listQuery.code,callback:function(e){t.$set(t.listQuery,"code",e)},expression:"listQuery.code"}}),t._v("\n      "+t._s(t.generateShow("common.name"))+":\n      "),a("el-input",{staticClass:"filter-item",staticStyle:{width:"100px"},attrs:{placeholder:t.generateShow("common.name"),label:"姓名",clearable:""},model:{value:t.listQuery.childName,callback:function(e){t.$set(t.listQuery,"childName",e)},expression:"listQuery.childName"}}),t._v("\n      "+t._s(t.generateShow("common.phone"))+":\n      "),a("el-input",{staticClass:"filter-item",staticStyle:{width:"150px"},attrs:{placeholder:t.generateShow("common.phone"),label:"手机号",clearable:""},model:{value:t.listQuery.phone,callback:function(e){t.$set(t.listQuery,"phone",e)},expression:"listQuery.phone"}}),t._v(" "),a("el-button",{staticClass:"filter-item",attrs:{type:"primary",icon:"el-icon-search"},on:{click:t.handleFilter}},[t._v(t._s(t.generateShow("common.search")))]),t._v(" "),a("el-button",{staticClass:"filter-item",attrs:{type:"primary"},on:{click:t.handleFilterClear}},[t._v(t._s(t.generateShow("common.clear")))])],1),t._v(" "),a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.list,border:""},on:{"sort-change":t.handleColumnSort}},[a("el-table-column",{attrs:{label:t.generateShow("common.appointment_date"),prop:"date","min-width":"100"}}),t._v(" "),a("el-table-column",{attrs:{label:t.generateShow("common.appointment_code"),prop:"code","min-width":"80"}}),t._v(" "),a("el-table-column",{attrs:{label:t.generateShow("common.name"),prop:"childName","min-width":"80"}}),t._v(" "),a("el-table-column",{attrs:{label:t.generateShow("common.gender"),prop:"genderCn","min-width":"60"}}),t._v(" "),a("el-table-column",{attrs:{label:t.generateShow("common.age"),prop:"age","min-width":"60"}}),t._v(" "),a("el-table-column",{attrs:{label:t.generateShow("common.appointment_object"),prop:"merchantName","min-width":"110"}}),t._v(" "),a("el-table-column",{attrs:{label:t.generateShow("common.appointment_state"),prop:"stateName","min-width":"80"}}),t._v(" "),a("el-table-column",{attrs:{label:t.generateShow("common.arrive_date"),prop:"reachTime","min-width":"110"}})],1),t._v(" "),a("div",{staticClass:"pagination-container"},[a("el-pagination",{directives:[{name:"show",rawName:"v-show",value:t.total>0,expression:"total>0"}],attrs:{"current-page":t.listQuery.page,"page-sizes":[10,20,30,50],"page-size":t.listQuery.limit,total:t.total,background:"",layout:"total, sizes, prev, pager, next, jumper"},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1)],1),t._v(" "),a("AppointShow",{ref:"show"}),t._v(" "),a("AppointConfirm",{ref:"confirm",on:{confirmSuccess:t.getList}}),t._v(" "),a("AppointCancel",{ref:"cancel",on:{cancelSuccess:t.getList}})],1)},[],!1,null,null,null);c.options.__file="admin_appoints.vue";e.default=c.exports},"9QD0":function(t,e,a){"use strict";var i=a("k65F"),o={data:function(){return{dialogFormVisible:!1,dialogStatus:"",temp:{id:void 0,childName:void 0,returnInformation:void 0}}},created:function(){},methods:{show:function(t){this.dialogFormVisible=!0,this.temp=t},handleClickConfirm:function(){var t=this;this.$confirm("是否确认该用户预约?","提示",{confirmButtonText:"是",cancelButtonText:"否",type:"warning"}).then(function(){Object(i.c)({id:t.temp.id,information:t.temp.returnInformation}).then(function(e){t.$emit("confirmSuccess"),t.dialogFormVisible=!1,t.$message({type:"success",message:"确认成功!"})})}).catch(function(){})}}},n=a("KHd+"),l=Object(n.a)(o,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-dialog",{attrs:{title:"确认预约",visible:t.dialogFormVisible},on:{"update:visible":function(e){t.dialogFormVisible=e}}},[a("el-form",{staticStyle:{width:"400px","margin-left":"50px"},attrs:{model:t.temp,"label-position":"left","label-width":"70px"}},[a("el-form-item",{attrs:{label:"联系电话",prop:"timestamp"}},[a("el-input",{attrs:{disabled:""},model:{value:t.temp.phone,callback:function(e){t.$set(t.temp,"phone",e)},expression:"temp.phone"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"预约反馈",prop:"timestamp"}},[a("el-input",{attrs:{autosize:{minRows:4,maxRows:10},type:"textarea"},model:{value:t.temp.returnInformation,callback:function(e){t.$set(t.temp,"returnInformation",e)},expression:"temp.returnInformation"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"约定时间",prop:"timestamp"}},[a("el-input",{attrs:{disabled:""},model:{value:t.temp.date,callback:function(e){t.$set(t.temp,"date",e)},expression:"temp.date"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"备注",prop:"timestamp"}},[a("span",{staticStyle:{color:"red"}},[t._v("请联系用户，协商预约！预约反馈中写清楚预约的详细信息.")])])],1),t._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary"},on:{click:t.handleClickConfirm}},[t._v("确定")]),t._v(" "),a("el-button",{on:{click:function(e){t.dialogFormVisible=!1}}},[t._v("取消")])],1)],1)},[],!1,null,null,null);l.options.__file="appoint_confirm.vue";e.a=l.exports},RPJT:function(t,e,a){"use strict";var i={data:function(){return{dialogFormVisible:!1,dialogStatus:"",temp:{id:void 0,childName:void 0,remark:"",timestamp:new Date,title:"",type:"",status:"published"}}},created:function(){},methods:{show:function(t){this.dialogFormVisible=!0,this.temp=t}}},o=a("KHd+"),n=Object(o.a)(i,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-dialog",{attrs:{title:"预约信息",visible:t.dialogFormVisible},on:{"update:visible":function(e){t.dialogFormVisible=e}}},[a("el-form",{staticStyle:{width:"400px","margin-left":"50px"},attrs:{model:t.temp,"label-position":"left","label-width":"70px"}},[a("el-form-item",{attrs:{label:"儿童姓名",prop:"timestamp"}},[a("el-input",{attrs:{disabled:""},model:{value:t.temp.childName,callback:function(e){t.$set(t.temp,"childName",e)},expression:"temp.childName"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"联系方式",prop:"timestamp"}},[a("el-input",{attrs:{disabled:""},model:{value:t.temp.phone,callback:function(e){t.$set(t.temp,"phone",e)},expression:"temp.phone"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"预约时间",prop:"timestamp"}},[a("el-input",{attrs:{disabled:""},model:{value:t.temp.date,callback:function(e){t.$set(t.temp,"date",e)},expression:"temp.date"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"预约描述",prop:"timestamp"}},[a("el-input",{attrs:{disabled:""},model:{value:t.temp.note,callback:function(e){t.$set(t.temp,"note",e)},expression:"temp.note"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"状态",prop:"timestamp"}},[a("el-input",{attrs:{disabled:""},model:{value:t.temp.stateName,callback:function(e){t.$set(t.temp,"stateName",e)},expression:"temp.stateName"}})],1),t._v(" "),"confirmed"===t.temp.state?a("el-form-item",{attrs:{label:"预约反馈",prop:"timestamp"}},[a("el-input",{attrs:{autosize:{minRows:4,maxRows:10},type:"textarea",disabled:""},model:{value:t.temp.returnInformation,callback:function(e){t.$set(t.temp,"returnInformation",e)},expression:"temp.returnInformation"}})],1):t._e(),t._v(" "),"user_cancelled"===t.temp.state||"doctor_cancelled"===t.temp.state||"admin_cancelled"===t.temp.state?a("el-form-item",{attrs:{label:"取消原因",prop:"timestamp"}},[a("el-input",{attrs:{disabled:""},model:{value:t.temp.cancelledReason,callback:function(e){t.$set(t.temp,"cancelledReason",e)},expression:"temp.cancelledReason"}})],1):t._e()],1),t._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.dialogFormVisible=!1}}},[t._v("确定")])],1)],1)},[],!1,null,null,null);n.options.__file="appoint_show.vue";e.a=n.exports},U7XQ:function(t,e,a){"use strict";var i=a("k65F"),o={data:function(){return{dialogFormVisible:!1,dialogStatus:"",temp:{id:void 0,childName:void 0,cancelledReason:void 0}}},created:function(){},methods:{show:function(t){this.dialogFormVisible=!0,this.temp=t},handleClickCancel:function(){var t=this;this.$confirm("是否取消该用户预约?","提示",{confirmButtonText:"是",cancelButtonText:"否",type:"warning"}).then(function(){Object(i.b)({id:t.temp.id,information:t.temp.cancelledReason}).then(function(e){t.$emit("cancelSuccess"),t.dialogFormVisible=!1,t.$message({type:"success",message:"确认成功!"})})}).catch(function(){})}}},n=a("KHd+"),l=Object(n.a)(o,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-dialog",{attrs:{title:"确认预约",visible:t.dialogFormVisible},on:{"update:visible":function(e){t.dialogFormVisible=e}}},[a("el-form",{staticStyle:{width:"400px","margin-left":"50px"},attrs:{model:t.temp,"label-position":"left","label-width":"70px"}},[a("el-form-item",{attrs:{label:"联系电话",prop:"timestamp"}},[a("el-input",{attrs:{disabled:""},model:{value:t.temp.phone,callback:function(e){t.$set(t.temp,"phone",e)},expression:"temp.phone"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"取消原因",prop:"timestamp"}},[a("el-input",{attrs:{autosize:{minRows:2,maxRows:4},type:"textarea"},model:{value:t.temp.cancelledReason,callback:function(e){t.$set(t.temp,"cancelledReason",e)},expression:"temp.cancelledReason"}})],1)],1),t._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary"},on:{click:t.handleClickCancel}},[t._v("提交")]),t._v(" "),a("el-button",{on:{click:function(e){t.dialogFormVisible=!1}}},[t._v("取消")])],1)],1)},[],!1,null,null,null);l.options.__file="appoint_cancel.vue";e.a=l.exports},k65F:function(t,e,a){"use strict";a.d(e,"a",function(){return o}),a.d(e,"c",function(){return n}),a.d(e,"d",function(){return l}),a.d(e,"b",function(){return s});var i=a("t3Un");function o(t){return Object(i.a)({url:"/api/a1/appoints",method:"get",params:t})}function n(t){return Object(i.a)({url:"/api/a1/appoints/"+t.id+"/confirm",method:"put",data:t})}function l(t){return Object(i.a)({url:"/api/a1/appoints/"+t.id+"/done",method:"put",data:t})}function s(t){return Object(i.a)({url:"/api/a1/appoints/"+t.id+"/cancel",method:"put",data:t})}}}]);