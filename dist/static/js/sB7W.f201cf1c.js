(window.webpackJsonp=window.webpackJsonp||[]).push([["sB7W"],{sB7W:function(t,e,a){"use strict";a.r(e);var i=a("t3Un");var n={data:function(){return{list:null,total:null,todayCount:0,listLoading:!0,listQuery:{page:1,limit:20,importance:void 0,code:void 0}}},computed:{todayText:function(){return"今日将有"+this.todayCount+"个用户预约到店建档"}},created:function(){this.getList()},methods:{handleClickOk:function(t){var e=this;this.$confirm("是否确认该用户已到店?","提示",{confirmButtonText:"是",cancelButtonText:"否",type:"warning"}).then(function(){(function(t){return Object(i.a)({url:"/api/a1/appointments/"+t.id+"/confirm",method:"put",data:t})})(t).then(function(t){e.getList(),e.$message({type:"success",message:"确认成功!"})})}).catch(function(){})},getList:function(){var t=this;(function(t){return Object(i.a)({url:"/api/a1/appointments",method:"get",params:t})})(this.listQuery).then(function(e){t.list=e.data.items,t.total=e.data.total,t.todayCount=e.data.todayCount,setTimeout(function(){t.listLoading=!1},1500)})},handleCurrentChange:function(t){this.listQuery.page=t,this.getList()},handleSizeChange:function(t){this.listQuery.limit=t,this.getList()},handleColumnSort:function(t){this.listQuery.sortProp=t.prop,this.listQuery.sortOrder=t.order,this.getList()},handleFilter:function(){this.getList()},handleFilterClear:function(){this.listQuery.code="",this.getList()}}},l=a("KHd+"),s=Object(l.a)(n,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container"},[a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[t._v("新的预约")])]),t._v(" "),a("div",{staticClass:"filter-container"},[a("el-alert",{attrs:{closable:!1,title:t.todayText,type:"success"}})],1),t._v(" "),a("div",{staticClass:"filter-container"},[t._v("\n      预约码:\n      "),a("el-input",{staticClass:"filter-item",staticStyle:{width:"200px"},attrs:{label:"预约码",placeholder:"预约码"},model:{value:t.listQuery.code,callback:function(e){t.$set(t.listQuery,"code",e)},expression:"listQuery.code"}}),t._v(" "),a("el-button",{staticClass:"filter-item",attrs:{type:"primary",icon:"el-icon-search"},on:{click:t.handleFilter}},[t._v("查询")]),t._v(" "),a("el-button",{staticClass:"filter-item",attrs:{type:"primary"},on:{click:t.handleFilterClear}},[t._v("清空")])],1),t._v(" "),a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.list,border:""},on:{"sort-change":t.handleColumnSort}},[a("el-table-column",{attrs:{prop:"date",label:"预约时间","min-width":"120"}}),t._v(" "),a("el-table-column",{attrs:{prop:"code",label:"预约码","min-width":"80"}}),t._v(" "),a("el-table-column",{attrs:{prop:"childName",label:"姓名","min-width":"80"}}),t._v(" "),a("el-table-column",{attrs:{prop:"gender",label:"性别","min-width":"60"}}),t._v(" "),a("el-table-column",{attrs:{prop:"age",label:"年龄","min-width":"60"}}),t._v(" "),a("el-table-column",{attrs:{prop:"stateName",label:"预约状态","min-width":"100"}}),t._v(" "),a("el-table-column",{attrs:{prop:"reachTime",label:"到店时间","min-width":"120"}}),t._v(" "),a("el-table-column",{attrs:{label:"操作","min-width":"120"},scopedSlots:t._u([{key:"default",fn:function(e){return["confirmed"!=e.row.state?a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){t.handleClickOk(e.row)}}},[t._v("确认到店")]):t._e(),t._v(" "),a("router-link",{attrs:{to:"/apt_arch/archives"}},[a("el-button",{attrs:{type:"text",size:"small"}},[t._v("建立档案")])],1)]}}])})],1),t._v(" "),a("div",{staticClass:"pagination-container"},[a("el-pagination",{directives:[{name:"show",rawName:"v-show",value:t.total>0,expression:"total>0"}],attrs:{"current-page":t.listQuery.page,"page-sizes":[10,20,30,50],"page-size":t.listQuery.limit,total:t.total,background:"",layout:"total, sizes, prev, pager, next, jumper"},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1)],1)],1)},[],!1,null,null,null);s.options.__file="appointments.vue";e.default=s.exports}}]);