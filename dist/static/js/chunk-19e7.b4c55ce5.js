(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-19e7"],{"78iF":function(t,e,i){},agR8:function(t,e,i){"use strict";var a=i("78iF");i.n(a).a},vpsm:function(t,e,i){"use strict";i.r(e);var a=i("t3Un");var l={data:function(){return{dialogFormVisible:!1,formLabelWidth:"120px",temp:{class_value:void 0,grade_value:void 0},num_values:[1,2,3,4,5,6,7,8,9,10],loading:!1}},created:function(){},methods:{handleClickCancel:function(){this.resetData(),this.dialogFormVisible=!1},handleClickSubmit:function(){var t=this;(function(t){return Object(a.a)({url:"/api/a1/examines",method:"post",data:t})})(this.temp).then(function(e){t.resetData(),t.dialogFormVisible=!1,t.$emit("create-success")})},show:function(){this.dialogFormVisible=!0},resetData:function(){this.temp={class_value:void 0,grade_value:void 0}}}},s=i("KHd+"),n=Object(s.a)(l,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("el-dialog",{attrs:{visible:t.dialogFormVisible,"close-on-click-modal":!1,title:"新增筛查",width:"70%",top:"30px"},on:{"update:visible":function(e){t.dialogFormVisible=e}}},[i("el-form",{staticStyle:{width:"90%","margin-left":"20px"},attrs:{model:t.temp}},[i("el-form-item",{attrs:{"label-width":t.formLabelWidth,label:"年级"}},[i("el-select",{staticStyle:{width:"120px"},attrs:{placeholder:"请选择"},model:{value:t.temp.class_value,callback:function(e){t.$set(t.temp,"class_value",e)},expression:"temp.class_value"}},t._l(t.num_values,function(t){return i("el-option",{key:t,attrs:{label:t,value:t}})})),t._v("\n      年级\n    ")],1),t._v(" "),i("el-form-item",{attrs:{"label-width":t.formLabelWidth,label:"班级"}},[i("el-select",{staticStyle:{width:"120px"},attrs:{placeholder:"请选择"},model:{value:t.temp.grade_value,callback:function(e){t.$set(t.temp,"grade_value",e)},expression:"temp.grade_value"}},t._l(t.num_values,function(t){return i("el-option",{key:t,attrs:{label:t,value:t}})})),t._v("\n      班\n    ")],1)],1),t._v(" "),i("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:t.handleClickCancel}},[t._v("取 消")]),t._v(" "),i("el-button",{attrs:{type:"primary"},on:{click:t.handleClickSubmit}},[t._v("确 定")])],1)],1)},[],!1,null,null,null);n.options.__file="new_examine.vue";var o=n.exports,r={data:function(){return{dialogFormVisible:!1,formLabelWidth:"120px",temp:{id:void 0,class_value:void 0,grade_value:void 0},num_values:[1,2,3,4,5,6,7,8,9,10],loading:!1}},created:function(){},methods:{handleClickCancel:function(){this.resetData(),this.dialogFormVisible=!1},handleClickSubmit:function(){var t=this;(function(t){return Object(a.a)({url:"/api/a1/examines/"+t.id,method:"put",data:t})})(this.temp).then(function(e){t.resetData(),t.dialogFormVisible=!1,t.$emit("update-success")})},show:function(t){this.temp=t,console.log("aaa => ",this.temp),this.dialogFormVisible=!0},resetData:function(){this.temp={id:void 0,class_value:void 0,grade_value:void 0}}}},c=Object(s.a)(r,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("el-dialog",{attrs:{visible:t.dialogFormVisible,"close-on-click-modal":!1,title:"新增筛查",width:"70%",top:"30px"},on:{"update:visible":function(e){t.dialogFormVisible=e}}},[i("el-form",{staticStyle:{width:"90%","margin-left":"20px"},attrs:{model:t.temp}},[i("el-form-item",{attrs:{"label-width":t.formLabelWidth,label:"年级"}},[i("el-select",{staticStyle:{width:"120px"},attrs:{placeholder:"请选择"},model:{value:t.temp.class_value,callback:function(e){t.$set(t.temp,"class_value",e)},expression:"temp.class_value"}},t._l(t.num_values,function(t){return i("el-option",{key:t,attrs:{label:t,value:t}})})),t._v("\n      年级\n    ")],1),t._v(" "),i("el-form-item",{attrs:{"label-width":t.formLabelWidth,label:"班级"}},[i("el-select",{staticStyle:{width:"120px"},attrs:{placeholder:"请选择"},model:{value:t.temp.grade_value,callback:function(e){t.$set(t.temp,"grade_value",e)},expression:"temp.grade_value"}},t._l(t.num_values,function(t){return i("el-option",{key:t,attrs:{label:t,value:t}})})),t._v("\n      班\n    ")],1)],1),t._v(" "),i("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:t.handleClickCancel}},[t._v("取 消")]),t._v(" "),i("el-button",{attrs:{type:"primary"},on:{click:t.handleClickSubmit}},[t._v("确 定")])],1)],1)},[],!1,null,null,null);c.options.__file="edit_examine.vue";var u=c.exports,d={data:function(){return this.grid={show:!0,top:50,left:10,backgroundColor:"#ccc",borderColor:"#000"},this.chartSettings={metrics:["人数"],dimension:["左眼视力"]},{chartData:{columns:["左眼视力","人数"],rows:[{"左眼视力":"4.5以下","人数":2},{"左眼视力":"4.6","人数":3},{"左眼视力":"4.7","人数":4},{"左眼视力":"4.8","人数":3},{"左眼视力":"4.9","人数":6},{"左眼视力":"5.0","人数":4},{"左眼视力":"5.0以上","人数":5}]},dialogFormVisible:!1,formLabelWidth:"120px",loading:!1}},created:function(){},methods:{show:function(t){this.dialogFormVisible=!0}}},m=(i("agR8"),Object(s.a)(d,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("el-dialog",{attrs:{visible:t.dialogFormVisible,"close-on-click-modal":!1,title:"",width:"70%",top:"30px"},on:{"update:visible":function(e){t.dialogFormVisible=e}}},[i("el-row",[i("el-col",{attrs:{span:24}},[i("div",[i("p",{staticClass:"header-title"},[t._v("班级近视筛查报告统计")])]),t._v(" "),i("table",{staticClass:"table-a",attrs:{border:"0",cellspacing:"0",cellpadding:"4"}},[i("tr",[i("td",{staticClass:"table-td"},[t._v("近视率")]),t._v(" "),i("td",{staticClass:"table-td"},[t._v("80%")]),t._v(" "),i("td",{staticClass:"table-td"},[t._v("左眼平均视力情况")]),t._v(" "),i("td",{staticClass:"table-td"},[t._v("4.0")]),t._v(" "),i("td",{staticClass:"table-td"},[t._v("右眼平均视力情况")]),t._v(" "),i("td",{staticClass:"table-td"},[t._v("4.0")])])])]),t._v(" "),i("el-row",[i("el-col",{attrs:{span:12}},[i("ve-histogram",{attrs:{data:t.chartData,settings:t.chartSettings}})],1),t._v(" "),i("el-col",{attrs:{span:12}},[i("ve-histogram",{attrs:{data:t.chartData,settings:t.chartSettings}})],1)],1)],1),t._v(" "),i("div",{attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:function(e){t.dialogFormVisible=!1}}},[t._v("确    定")])],1)],1)},[],!1,null,"0ae7cff7",null));m.options.__file="examine_statistics.vue";var h={components:{NewExamine:o,EditExamine:u,ExamineStatistics:m.exports},data:function(){return{list:null,total:null,listLoading:!0,listQuery:{page:1,limit:20,importance:void 0,name:void 0,phone:void 0,email:void 0,type:void 0,sort_prop:void 0,sort_order:void 0}}},created:function(){this.getList()},methods:{handleClickLocation:function(t){this.$refs.location.show(t)},handleClickSkilled:function(t){this.$refs.services.show(t)},handleClickEdit:function(t){this.$refs.editExamine.show(t)},handleClickStatics:function(t){this.$refs.examineStatistics.show(t)},handleClickNew:function(){this.$refs.newExamine.show()},handleClickShow:function(t){this.$router.push({path:"/schools/simple_archives?examine_id="+t.id})},handleClickDelete:function(t){var e=this;this.$confirm("确认删除本次筛查?","提示",{confirmButtonText:"是",cancelButtonText:"否",type:"warning"}).then(function(){(function(t){return Object(a.a)({url:"/api/a1/examines/"+t.id,method:"delete"})})({id:t.id}).then(function(t){e.getList(),e.$message({type:"success",message:"删除成功!"})})}).catch(function(){})},getList:function(){var t=this;(function(t){return Object(a.a)({url:"/api/a1/examines",method:"get",params:t})})(this.listQuery).then(function(e){t.list=e.data.items,t.total=e.data.total,setTimeout(function(){t.listLoading=!1},1500)})},handleCurrentChange:function(t){this.listQuery.page=t,this.getList()},handleSizeChange:function(t){this.listQuery.limit=t,this.getList()},handleColumnSort:function(t){this.listQuery.sort_prop=t.prop,this.listQuery.sort_order=t.order,this.getList()},handleFilter:function(){this.getList()},handleFilterClear:function(){this.listQuery.name="",this.listQuery.phone="",this.listQuery.email=""}}},v=Object(s.a)(h,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("el-card",{staticClass:"box-card"},[i("div",{staticClass:"filter-container"},[i("el-button",{staticClass:"filter-item",attrs:{type:"success",icon:"el-icon-plus"},on:{click:t.handleClickNew}},[t._v("新增")])],1),t._v(" "),i("el-table",{staticStyle:{width:"100%","margin-top":"10px"},attrs:{data:t.list,border:""},on:{"sort-change":t.handleColumnSort}},[i("el-table-column",{attrs:{label:"学校",prop:"school_name","min-width":"90"}}),t._v(" "),i("el-table-column",{attrs:{label:"班级",prop:"class_grade","min-width":"90"}}),t._v(" "),i("el-table-column",{attrs:{label:"创建日期",prop:"created_at","min-width":"120"}}),t._v(" "),i("el-table-column",{attrs:{label:"操作","min-width":"120"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(i){t.handleClickEdit(e.row)}}},[t._v("编辑")]),t._v(" "),i("el-button",{attrs:{type:"success",size:"small"},on:{click:function(i){t.handleClickShow(e.row)}}},[t._v("查看")]),t._v(" "),i("el-button",{attrs:{type:"danger",size:"small"},on:{click:function(i){t.handleClickDelete(e.row)}}},[t._v("删除")]),t._v(" "),i("el-button",{attrs:{size:"small"},on:{click:function(i){t.handleClickStatics(e.row)}}},[t._v("统计")])]}}])})],1),t._v(" "),i("div",{staticClass:"pagination-container"},[i("el-pagination",{directives:[{name:"show",rawName:"v-show",value:t.total>0,expression:"total>0"}],attrs:{"current-page":t.listQuery.page,"page-sizes":[10,20,30,50],"page-size":t.listQuery.limit,total:t.total,background:"",layout:"total, sizes, prev, pager, next, jumper"},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1)],1),t._v(" "),i("NewExamine",{ref:"newExamine",on:{"create-success":t.getList}}),t._v(" "),i("EditExamine",{ref:"editExamine",on:{"update-success":t.getList}}),t._v(" "),i("ExamineStatistics",{ref:"examineStatistics"})],1)},[],!1,null,null,null);v.options.__file="examines.vue";e.default=v.exports}}]);