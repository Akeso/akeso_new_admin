(window.webpackJsonp=window.webpackJsonp||[]).push([["rxia"],{rxia:function(t,e,n){"use strict";n.r(e);var a=n("t3Un");var i={data:function(){return{currentItem:void 0,list:null,total:null,listLoading:!0,listQuery:{page:1,limit:20,name:void 0}}},created:function(){this.getList()},methods:{handleClickExchange:function(){var t=this;this.$confirm("确认核销本条记录?","提示",{confirmButtonText:"是",cancelButtonText:"否",type:"warning"}).then(function(){(function(t){return Object(a.a)({url:"/api/a1/user_coin_products/"+t.id+"/exchange",method:"put"})})(t.currentItem).then(function(e){t.getList(),t.$message({type:"success",message:"核销成功!"})})}).catch(function(){})},handleCurrentSelect:function(t){this.currentItem=t},getList:function(){var t=this;(function(t){return Object(a.a)({url:"/api/a1/user_coin_products",method:"get",params:t})})(this.listQuery).then(function(e){console.log("response -> ",e),t.list=e.data.items,t.total=e.data.total})},handleCurrentChange:function(t){this.listQuery.page=t,this.getList()},handleSizeChange:function(t){this.listQuery.limit=t,this.getList()},handleFilter:function(){this.getList()},handleFilterClear:function(){this.listQuery.name="",this.listQuery.phone="",this.listQuery.email=""}}},l=n("KHd+"),s=Object(l.a)(i,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("el-card",{staticClass:"box-card"},[n("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[n("span",[t._v("兑换记录")])]),t._v(" "),n("el-row",{staticStyle:{"margin-top":"10px"}},[n("el-col",[t._v("\n        名称：\n        "),n("el-input",{staticClass:"filter-item",staticStyle:{width:"200px"},attrs:{placeholder:t.generateShow("common.name_field"),size:"mini",label:"名称",clearable:""},model:{value:t.listQuery.name,callback:function(e){t.$set(t.listQuery,"name",e)},expression:"listQuery.name"}}),t._v(" "),n("el-button",{staticClass:"filter-item",attrs:{size:"mini",type:"primary",icon:"el-icon-search"},on:{click:t.handleFilter}},[t._v("搜索")]),t._v(" "),n("el-button",{attrs:{size:"mini"},on:{click:t.handleClickExchange}},[t._v("核销")])],1)],1),t._v(" "),n("el-table",{staticStyle:{width:"100%","margin-top":"10px"},attrs:{data:t.list,border:"","highlight-current-row":""},on:{"current-change":t.handleCurrentSelect}},[n("el-table-column",{attrs:{label:"手机号",prop:"phone","min-width":"90"}}),t._v(" "),n("el-table-column",{attrs:{label:"商品","min-width":"120"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",[t._v(t._s(e.row.product.name))])]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"兑换积分",prop:"take_coins","min-width":"120"}}),t._v(" "),n("el-table-column",{attrs:{label:"兑换时间",prop:"created_at","min-width":"120"}}),t._v(" "),n("el-table-column",{attrs:{label:"核销状态","min-width":"120"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",[t._v(t._s(0===e.row.state?"未核销":"已核销"))])]}}])})],1),t._v(" "),n("div",{staticClass:"pagination-container"},[n("el-pagination",{directives:[{name:"show",rawName:"v-show",value:t.total>0,expression:"total>0"}],attrs:{"current-page":t.listQuery.page,"page-sizes":[10,20,30,50],"page-size":t.listQuery.limit,total:t.total,background:"",layout:"total, sizes, prev, pager, next, jumper"},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1)],1)],1)},[],!1,null,null,null);s.options.__file="product_logs.vue";e.default=s.exports}}]);