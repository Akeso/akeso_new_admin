(window.webpackJsonp=window.webpackJsonp||[]).push([["kw0g"],{kw0g:function(t,e,o){"use strict";o.r(e);var n=o("t3Un");var a={filters:{followStateFilter:function(t){return{following:"待随访",confirmed:"已联系并确认预约",unconfirmed:"已联系无法确认预约时间",uncontact:"无法联系"}[t]}},data:function(){return{list:null,total:null,todayCount:0,listLoading:!0,listQuery:{page:1,limit:20,importance:void 0,sortProp:"",sortOrder:"",month:new Date,follow_radio:"following"}}},computed:{showFirst:function(){return"first"===this.tabName}},created:function(){this.getList(),console.log("lang => ",this.$store.getters.language)},methods:{radioChanged:function(t){this.getList()},handleClickContact:function(t,e){var o=this;this.$confirm("确认执行此操作?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){(function(t){return Object(n.a)({url:"/api/a1/followers/update_state",method:"put",data:t})})({id:t.id,state:e}).then(function(t){o.getList(),o.$message({type:"success",message:"操作成功!"})})}).catch(function(){o.$message({type:"info",message:"已取消操作"})})},changeDate:function(t){this.getList()},getList:function(){var t=this;(function(t){return Object(n.a)({url:"/api/a1/followers",method:"get",params:t})})(this.listQuery).then(function(e){t.list=e.data.items,t.total=e.data.total})},handleColumnSort:function(){},handleCurrentChange:function(t){this.listQuery.page=t,this.getList()},handleSizeChange:function(t){this.listQuery.limit=t,this.getList()}}},l=o("KHd+"),i=Object(l.a)(a,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("el-card",{staticClass:"box-card"},[o("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[o("span",[t._v(t._s(t.generateShow("route.by_data")))])]),t._v(" "),o("div",{staticStyle:{"margin-bottom":"10px"}},[o("span",{staticClass:"demonstration"},[t._v(t._s(t.generateShow("common.select_date"))+"：")]),t._v(" "),o("el-date-picker",{attrs:{type:"month",placeholder:"选择月","value-format":"yyyy-MM-dd"},on:{change:t.changeDate},model:{value:t.listQuery.month,callback:function(e){t.$set(t.listQuery,"month",e)},expression:"listQuery.month"}})],1),t._v(" "),o("el-radio-group",{on:{change:t.radioChanged},model:{value:t.listQuery.follow_radio,callback:function(e){t.$set(t.listQuery,"follow_radio",e)},expression:"listQuery.follow_radio"}},[o("el-radio-button",{attrs:{label:"following"}},[t._v("待随访")]),t._v(" "),o("el-radio-button",{attrs:{label:"followed"}},[t._v("已随访")])],1),t._v(" "),o("el-table",{staticStyle:{width:"100%","margin-top":"10px"},attrs:{data:t.list,border:""},on:{"sort-change":t.handleColumnSort}},[o("el-table-column",{attrs:{label:t.generateShow("common.name"),"min-width":"60"},scopedSlots:t._u([{key:"default",fn:function(e){return[o("router-link",{attrs:{to:"/preview/child/"+e.row.childId}},[o("el-button",{attrs:{type:"text",size:"small"}},[t._v(t._s(e.row.childName))])],1)]}}])}),t._v(" "),o("el-table-column",{attrs:{label:t.generateShow("common.age"),prop:"childAge","min-width":"60"}}),t._v(" "),o("el-table-column",{attrs:{label:t.generateShow("common.phone"),prop:"phone","min-width":"80"}}),t._v(" "),o("el-table-column",{attrs:{label:t.generateShow("common.healthIndex"),prop:"healthIndex","min-width":"60"}}),t._v(" "),o("el-table-column",{attrs:{label:t.generateShow("common.wearTime"),prop:"outTime","min-width":"60"}}),t._v(" "),o("el-table-column",{attrs:{label:t.generateShow("common.nearworkBurdenDay"),prop:"nearworkBurdenDay","min-width":"60"}}),t._v(" "),o("el-table-column",{attrs:{label:t.generateShow("common.follow_state"),prop:"followState","min-width":"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n          "+t._s(t._f("followStateFilter")(e.row.followState))+"\n        ")]}}])}),t._v(" "),o("el-table-column",{attrs:{label:t.generateShow("common.operate"),"min-width":"120"},scopedSlots:t._u([{key:"default",fn:function(e){return"following"===e.row.followState?[o("el-button",{attrs:{type:"text",size:"small"},on:{click:function(o){t.handleClickContact(e.row,"confirmed")}}},[t._v("已联系并确认预约")]),t._v(" "),o("br"),t._v(" "),o("el-button",{attrs:{type:"text",size:"small"},on:{click:function(o){t.handleClickContact(e.row,"unconfirmed")}}},[t._v("已联系尚无法确认时间")]),t._v(" "),o("br"),t._v(" "),o("el-button",{attrs:{type:"text",size:"small"},on:{click:function(o){t.handleClickContact(e.row,"uncontact")}}},[t._v("无法联系")])]:void 0}}])})],1),t._v(" "),o("div",{staticClass:"pagination-container"},[o("el-pagination",{directives:[{name:"show",rawName:"v-show",value:t.total>0,expression:"total>0"}],attrs:{"current-page":t.listQuery.page,"page-sizes":[10,20,30,50],"page-size":t.listQuery.limit,total:t.total,background:"",layout:"total, sizes, prev, pager, next, jumper"},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1)],1)],1)},[],!1,null,null,null);i.options.__file="by_data.vue";e.default=i.exports}}]);