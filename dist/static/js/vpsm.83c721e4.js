(window.webpackJsonp=window.webpackJsonp||[]).push([["vpsm"],{vpsm:function(e,t,i){"use strict";i.r(t);var l=i("t3Un");var a={data:function(){return{dialogFormVisible:!1,formLabelWidth:"120px",temp:{class_value:void 0,grade_value:void 0},num_values:[1,2,3,4,5,6,7,8,9,10],loading:!1}},created:function(){},methods:{handleClickCancel:function(){this.resetData(),this.dialogFormVisible=!1},handleClickSubmit:function(){var e=this;(function(e){return Object(l.a)({url:"/api/a1/examines",method:"post",data:e})})(this.temp).then(function(t){e.resetData(),e.dialogFormVisible=!1,e.$emit("create-success")})},show:function(){this.dialogFormVisible=!0},resetData:function(){this.temp={class_value:void 0,grade_value:void 0}}}},n=i("KHd+"),s=Object(n.a)(a,function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("el-dialog",{attrs:{visible:e.dialogFormVisible,"close-on-click-modal":!1,title:"新增筛查",width:"70%",top:"30px"},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[i("el-form",{staticStyle:{width:"90%","margin-left":"20px"},attrs:{model:e.temp}},[i("el-form-item",{attrs:{"label-width":e.formLabelWidth,label:"年级"}},[i("el-select",{staticStyle:{width:"120px"},attrs:{placeholder:"请选择"},model:{value:e.temp.class_value,callback:function(t){e.$set(e.temp,"class_value",t)},expression:"temp.class_value"}},e._l(e.num_values,function(e){return i("el-option",{key:e,attrs:{label:e,value:e}})})),e._v("\n      年级\n    ")],1),e._v(" "),i("el-form-item",{attrs:{"label-width":e.formLabelWidth,label:"班级"}},[i("el-select",{staticStyle:{width:"120px"},attrs:{placeholder:"请选择"},model:{value:e.temp.grade_value,callback:function(t){e.$set(e.temp,"grade_value",t)},expression:"temp.grade_value"}},e._l(e.num_values,function(e){return i("el-option",{key:e,attrs:{label:e,value:e}})})),e._v("\n      班\n    ")],1)],1),e._v(" "),i("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:e.handleClickCancel}},[e._v("取 消")]),e._v(" "),i("el-button",{attrs:{type:"primary"},on:{click:e.handleClickSubmit}},[e._v("确 定")])],1)],1)},[],!1,null,null,null);s.options.__file="new_examine.vue";var o=s.exports,r={data:function(){return{dialogFormVisible:!1,formLabelWidth:"120px",temp:{id:void 0,class_value:void 0,grade_value:void 0},num_values:[1,2,3,4,5,6,7,8,9,10],loading:!1}},created:function(){},methods:{handleClickCancel:function(){this.resetData(),this.dialogFormVisible=!1},handleClickSubmit:function(){var e=this;(function(e){return Object(l.a)({url:"/api/a1/examines/"+e.id,method:"put",data:e})})(this.temp).then(function(t){e.resetData(),e.dialogFormVisible=!1,e.$emit("update-success")})},show:function(e){this.temp=e,console.log("aaa => ",this.temp),this.dialogFormVisible=!0},resetData:function(){this.temp={id:void 0,class_value:void 0,grade_value:void 0}}}},c=Object(n.a)(r,function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("el-dialog",{attrs:{visible:e.dialogFormVisible,"close-on-click-modal":!1,title:"新增筛查",width:"70%",top:"30px"},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[i("el-form",{staticStyle:{width:"90%","margin-left":"20px"},attrs:{model:e.temp}},[i("el-form-item",{attrs:{"label-width":e.formLabelWidth,label:"年级"}},[i("el-select",{staticStyle:{width:"120px"},attrs:{placeholder:"请选择"},model:{value:e.temp.class_value,callback:function(t){e.$set(e.temp,"class_value",t)},expression:"temp.class_value"}},e._l(e.num_values,function(e){return i("el-option",{key:e,attrs:{label:e,value:e}})})),e._v("\n      年级\n    ")],1),e._v(" "),i("el-form-item",{attrs:{"label-width":e.formLabelWidth,label:"班级"}},[i("el-select",{staticStyle:{width:"120px"},attrs:{placeholder:"请选择"},model:{value:e.temp.grade_value,callback:function(t){e.$set(e.temp,"grade_value",t)},expression:"temp.grade_value"}},e._l(e.num_values,function(e){return i("el-option",{key:e,attrs:{label:e,value:e}})})),e._v("\n      班\n    ")],1)],1),e._v(" "),i("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:e.handleClickCancel}},[e._v("取 消")]),e._v(" "),i("el-button",{attrs:{type:"primary"},on:{click:e.handleClickSubmit}},[e._v("确 定")])],1)],1)},[],!1,null,null,null);c.options.__file="edit_examine.vue";var u={components:{NewExamine:o,EditExamine:c.exports},data:function(){return{list:null,total:null,listLoading:!0,listQuery:{page:1,limit:20,importance:void 0,name:void 0,phone:void 0,email:void 0,type:void 0,sort_prop:void 0,sort_order:void 0}}},created:function(){this.getList()},methods:{handleClickLocation:function(e){this.$refs.location.show(e)},handleClickSkilled:function(e){this.$refs.services.show(e)},handleClickEdit:function(e){this.$refs.editExamine.show(e)},handleClickNew:function(){this.$refs.newExamine.show()},handleClickShow:function(e){this.$router.push({path:"/schools/simple_archives?examine_id="+e.id})},handleClickDelete:function(e){var t=this;this.$confirm("确认删除本次筛查?","提示",{confirmButtonText:"是",cancelButtonText:"否",type:"warning"}).then(function(){(function(e){return Object(l.a)({url:"/api/a1/examines/"+e.id,method:"delete"})})({id:e.id}).then(function(e){t.getList(),t.$message({type:"success",message:"删除成功!"})})}).catch(function(){})},getList:function(){var e=this;(function(e){return Object(l.a)({url:"/api/a1/examines",method:"get",params:e})})(this.listQuery).then(function(t){e.list=t.data.items,e.total=t.data.total,setTimeout(function(){e.listLoading=!1},1500)})},handleCurrentChange:function(e){this.listQuery.page=e,this.getList()},handleSizeChange:function(e){this.listQuery.limit=e,this.getList()},handleColumnSort:function(e){this.listQuery.sort_prop=e.prop,this.listQuery.sort_order=e.order,this.getList()},handleFilter:function(){this.getList()},handleFilterClear:function(){this.listQuery.name="",this.listQuery.phone="",this.listQuery.email=""}}},d=Object(n.a)(u,function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("el-card",{staticClass:"box-card"},[i("div",{staticClass:"filter-container"},[i("el-button",{staticClass:"filter-item",attrs:{type:"success",icon:"el-icon-plus"},on:{click:e.handleClickNew}},[e._v("新增")])],1),e._v(" "),i("el-table",{staticStyle:{width:"100%","margin-top":"10px"},attrs:{data:e.list,border:""},on:{"sort-change":e.handleColumnSort}},[i("el-table-column",{attrs:{label:"学校",prop:"school_name","min-width":"90"}}),e._v(" "),i("el-table-column",{attrs:{label:"班级",prop:"class_grade","min-width":"90"}}),e._v(" "),i("el-table-column",{attrs:{label:"创建日期",prop:"created_at","min-width":"120"}}),e._v(" "),i("el-table-column",{attrs:{label:"操作","min-width":"120"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(i){e.handleClickEdit(t.row)}}},[e._v("编辑")]),e._v(" "),i("el-button",{attrs:{type:"success",size:"small"},on:{click:function(i){e.handleClickShow(t.row)}}},[e._v("查看")]),e._v(" "),i("el-button",{attrs:{type:"danger",size:"small"},on:{click:function(i){e.handleClickDelete(t.row)}}},[e._v("删除")])]}}])})],1),e._v(" "),i("div",{staticClass:"pagination-container"},[i("el-pagination",{directives:[{name:"show",rawName:"v-show",value:e.total>0,expression:"total>0"}],attrs:{"current-page":e.listQuery.page,"page-sizes":[10,20,30,50],"page-size":e.listQuery.limit,total:e.total,background:"",layout:"total, sizes, prev, pager, next, jumper"},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)],1),e._v(" "),i("NewExamine",{ref:"newExamine",on:{"create-success":e.getList}}),e._v(" "),i("EditExamine",{ref:"editExamine",on:{"update-success":e.getList}})],1)},[],!1,null,null,null);d.options.__file="examines.vue";t.default=d.exports}}]);