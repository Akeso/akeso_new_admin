(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-7e40"],{"SF+J":function(t,e,a){"use strict";a.d(e,"c",function(){return l}),a.d(e,"a",function(){return n}),a.d(e,"b",function(){return r});var i=a("t3Un");function l(t){return Object(i.a)({url:"/api/a1/children",method:"get",params:t})}function n(t){return Object(i.a)({url:"/api/a1/children/"+t.id,method:"get"})}function r(t){return Object(i.a)({url:"/api/a1/children/with_equipment",method:"get",params:t})}},yPQJ:function(t,e,a){"use strict";a.r(e);var i=a("SF+J"),l={data:function(){return{list:null,total:null,listLoading:!0,listQuery:{page:1,limit:20,name:"",startDate:"",endDate:""}}},created:function(){this.getList()},methods:{getList:function(){var t=this;Object(i.c)(this.listQuery).then(function(e){t.list=e.data.items,t.total=e.data.total,setTimeout(function(){t.listLoading=!1},1500)})},handleCurrentChange:function(t){this.listQuery.page=t,this.getList()},handleSizeChange:function(t){this.listQuery.limit=t,this.getList()},handleColumnSort:function(t){this.listQuery.sortProp=t.prop,this.listQuery.sortOrder=t.order,this.getList()},handleFilter:function(){this.getList()},handleFilterClear:function(){this.listQuery.name="",this.listQuery.startDate="",this.listQuery.endDate=""}}},n=a("KHd+"),r=Object(n.a)(l,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[t._v(t._s(t.$t("route.enChildren")))])]),t._v(" "),a("div",{staticClass:"filter-container"},[t._v("\n    姓名:\n    "),a("el-input",{staticClass:"filter-item",staticStyle:{width:"100px"},attrs:{label:"姓名",placeholder:"姓名"},model:{value:t.listQuery.name,callback:function(e){t.$set(t.listQuery,"name",e)},expression:"listQuery.name"}}),t._v("\n    创建时间:\n    "),a("el-date-picker",{staticStyle:{width:"150px"},attrs:{type:"date",placeholder:"开始日期"},model:{value:t.listQuery.startDate,callback:function(e){t.$set(t.listQuery,"startDate",e)},expression:"listQuery.startDate"}}),t._v(" -\n    "),a("el-date-picker",{staticStyle:{width:"150px"},attrs:{type:"date",placeholder:"截止日期"},model:{value:t.listQuery.endDate,callback:function(e){t.$set(t.listQuery,"endDate",e)},expression:"listQuery.endDate"}}),t._v(" "),a("el-button",{staticClass:"filter-item",attrs:{type:"primary",icon:"el-icon-search"},on:{click:t.handleFilter}},[t._v("搜索")]),t._v(" "),a("el-button",{staticClass:"filter-item",attrs:{type:"primary"},on:{click:t.handleFilterClear}},[t._v("清空")])],1),t._v(" "),a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.list,border:""},on:{"sort-change":t.handleColumnSort}},[a("el-table-column",{attrs:{prop:"name",label:"姓名","min-width":"90"}}),t._v(" "),a("el-table-column",{attrs:{prop:"age",label:"年龄","min-width":"90"}}),t._v(" "),a("el-table-column",{attrs:{prop:"gender",label:"性别","min-width":"90"}}),t._v(" "),a("el-table-column",{attrs:{prop:"createdAt",label:"创建时间",sortable:"custom","min-width":"180"}}),t._v(" "),a("el-table-column",{attrs:{label:"操作","min-width":"90"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("router-link",{attrs:{to:"/enChildren/child/"+e.row.id}},[a("el-button",{attrs:{type:"text",size:"small"}},[t._v("查看")])],1)]}}])})],1),t._v(" "),a("div",{staticClass:"pagination-container"},[a("el-pagination",{directives:[{name:"show",rawName:"v-show",value:t.total>0,expression:"total>0"}],attrs:{"current-page":t.listQuery.page,"page-sizes":[10,20,30,50],"page-size":t.listQuery.limit,total:t.total,background:"",layout:"total, sizes, prev, pager, next, jumper"},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1)],1)},[],!1,null,null,null);r.options.__file="enChildren.vue";e.default=r.exports}}]);