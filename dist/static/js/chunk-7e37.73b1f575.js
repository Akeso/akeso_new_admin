(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-7e37"],{"SF+J":function(t,e,a){"use strict";a.d(e,"b",function(){return i}),a.d(e,"a",function(){return n});var l=a("t3Un");function i(t){return Object(l.a)({url:"/api/a1/children",method:"get",params:t})}function n(t){return Object(l.a)({url:"/api/a1/children/"+t.id,method:"get"})}},gB3A:function(t,e,a){"use strict";a.r(e);var l=a("SF+J"),i={data:function(){return{list:null,total:null,listLoading:!0,listQuery:{page:1,limit:20,name:"",startDate:"",endDate:""}}},created:function(){this.getList()},methods:{getList:function(){var t=this;Object(l.b)(this.listQuery).then(function(e){t.list=e.data.items,t.total=e.data.total,setTimeout(function(){t.listLoading=!1},1500)})},handleCurrentChange:function(t){this.listQuery.page=t,this.getList()},handleSizeChange:function(t){this.listQuery.limit=t,this.getList()},handleColumnSort:function(t){this.listQuery.sortProp=t.prop,this.listQuery.sortOrder=t.order,this.getList()},handleFilter:function(){this.getList()},handleFilterClear:function(){this.listQuery.name="",this.listQuery.startDate="",this.listQuery.endDate=""}}},n=a("KHd+"),r=Object(n.a)(i,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container"},[a("div",{staticClass:"title-container"},[a("svg-icon",{attrs:{"icon-class":"list"}}),t._v("全部儿童\n  ")],1),t._v(" "),a("div",{staticClass:"filter-container"},[t._v("\n    姓名:\n    "),a("el-input",{staticClass:"filter-item",staticStyle:{width:"100px"},attrs:{label:"姓名",placeholder:"姓名"},model:{value:t.listQuery.name,callback:function(e){t.$set(t.listQuery,"name",e)},expression:"listQuery.name"}}),t._v("\n    创建时间:\n    "),a("el-date-picker",{staticStyle:{width:"150px"},attrs:{type:"date",placeholder:"开始日期"},model:{value:t.listQuery.startDate,callback:function(e){t.$set(t.listQuery,"startDate",e)},expression:"listQuery.startDate"}}),t._v(" -\n    "),a("el-date-picker",{staticStyle:{width:"150px"},attrs:{type:"date",placeholder:"截止日期"},model:{value:t.listQuery.endDate,callback:function(e){t.$set(t.listQuery,"endDate",e)},expression:"listQuery.endDate"}}),t._v(" "),a("el-button",{staticClass:"filter-item",attrs:{type:"primary",icon:"el-icon-search"},on:{click:t.handleFilter}},[t._v("搜索")]),t._v(" "),a("el-button",{staticClass:"filter-item",attrs:{type:"primary"},on:{click:t.handleFilterClear}},[t._v("清空")])],1),t._v(" "),a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.list,border:""},on:{"sort-change":t.handleColumnSort}},[a("el-table-column",{attrs:{prop:"name",label:"姓名",width:"90"}}),t._v(" "),a("el-table-column",{attrs:{prop:"age",label:"年龄",width:"90"}}),t._v(" "),a("el-table-column",{attrs:{prop:"gender",label:"性别",width:"90"}}),t._v(" "),a("el-table-column",{attrs:{prop:"schoolName",label:"学校名称",width:"180"}}),t._v(" "),a("el-table-column",{attrs:{prop:"locationString",label:"地区",width:"180"}}),t._v(" "),a("el-table-column",{attrs:{prop:"phone",label:"联系电话",width:"120"}}),t._v(" "),a("el-table-column",{attrs:{prop:"createdAt",label:"创建时间",sortable:"custom",width:"180"}}),t._v(" "),a("el-table-column",{attrs:{label:"操作",width:"180"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("router-link",{attrs:{to:"/preview/child/"+e.row.id}},[a("el-button",{attrs:{type:"text",size:"small"}},[t._v("查看")])],1)]}}])})],1),t._v(" "),a("div",{staticClass:"pagination-container"},[a("el-pagination",{directives:[{name:"show",rawName:"v-show",value:t.total>0,expression:"total>0"}],attrs:{"current-page":t.listQuery.page,"page-sizes":[10,20,30,50],"page-size":t.listQuery.limit,total:t.total,background:"",layout:"total, sizes, prev, pager, next, jumper"},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1)],1)},[],!1,null,null,null);r.options.__file="allchildren.vue";e.default=r.exports}}]);