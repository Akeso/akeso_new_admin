(window.webpackJsonp=window.webpackJsonp||[]).push([["6Awf"],{"6Awf":function(t,e,i){"use strict";i.r(e);var l=i("t3Un");var o={data:function(){return{dialogFormVisible:!1,formLabelWidth:"120px",temp:{name:void 0},num_values:[1,2,3,4,5,6,7,8,9,10],loading:!1}},created:function(){},methods:{handleClickCancel:function(){this.resetData(),this.dialogFormVisible=!1},handleClickSubmit:function(){var t=this;(function(t){return Object(l.a)({url:"/api/a1/schools",method:"post",data:t})})(this.temp).then(function(e){t.resetData(),t.dialogFormVisible=!1,t.$emit("create-success")})},show:function(){this.dialogFormVisible=!0},resetData:function(){this.temp={name:void 0}}}},a=i("KHd+"),n=Object(a.a)(o,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("el-dialog",{attrs:{visible:t.dialogFormVisible,"close-on-click-modal":!1,title:"新增学校",width:"70%",top:"30px"},on:{"update:visible":function(e){t.dialogFormVisible=e}}},[i("el-form",{staticStyle:{width:"90%","margin-left":"20px"},attrs:{model:t.temp}},[i("el-form-item",{attrs:{"label-width":t.formLabelWidth,label:"学校名称"}},[i("el-input",{attrs:{clearable:""},model:{value:t.temp.name,callback:function(e){t.$set(t.temp,"name",e)},expression:"temp.name"}})],1)],1),t._v(" "),i("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:t.handleClickCancel}},[t._v("取 消")]),t._v(" "),i("el-button",{attrs:{type:"primary"},on:{click:t.handleClickSubmit}},[t._v("确 定")])],1)],1)},[],!1,null,null,null);n.options.__file="new_school.vue";var s=n.exports,r=[{key:"nursery",value:"幼儿园"},{key:"small",value:"小学"},{key:"medium",value:"初中"},{key:"high",value:"高中"}],c={data:function(){return{dialogFormVisible:!1,formLabelWidth:"120px",temp:{id:void 0,name:void 0,kind:void 0},schoolOptions:r,num_values:[1,2,3,4,5,6,7,8,9,10],loading:!1}},created:function(){},methods:{handleClickCancel:function(){this.resetData(),this.dialogFormVisible=!1},handleClickSubmit:function(){var t=this;(function(t){return Object(l.a)({url:"/api/a1/schools/"+t.id,method:"put",data:t})})(this.temp).then(function(e){t.resetData(),t.dialogFormVisible=!1,t.$emit("update-success")})},show:function(t){this.temp=t,this.dialogFormVisible=!0},resetData:function(){this.temp={id:void 0,name:void 0}}}},u=Object(a.a)(c,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("el-dialog",{attrs:{visible:t.dialogFormVisible,"close-on-click-modal":!1,title:"新增筛查",width:"70%",top:"30px"},on:{"update:visible":function(e){t.dialogFormVisible=e}}},[i("el-form",{staticStyle:{width:"90%","margin-left":"20px"},attrs:{model:t.temp}},[i("el-form-item",{attrs:{"label-width":t.formLabelWidth,label:"学校名称"}},[i("el-input",{attrs:{clearable:""},model:{value:t.temp.name,callback:function(e){t.$set(t.temp,"name",e)},expression:"temp.name"}})],1),t._v(" "),i("el-form-item",{attrs:{"label-width":t.formLabelWidth,label:"学校类别"}},[i("el-select",{attrs:{placeholder:"请选择"},model:{value:t.temp.kind,callback:function(e){t.$set(t.temp,"kind",e)},expression:"temp.kind"}},t._l(t.schoolOptions,function(t){return i("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}))],1)],1),t._v(" "),i("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:t.handleClickCancel}},[t._v("取 消")]),t._v(" "),i("el-button",{attrs:{type:"primary"},on:{click:t.handleClickSubmit}},[t._v("确 定")])],1)],1)},[],!1,null,null,null);u.options.__file="edit_school.vue";var d={components:{NewSchool:s,EditSchool:u.exports},data:function(){return{list:[],total:null,listLoading:!0,listQuery:{page:1,limit:20,importance:void 0,name:void 0,phone:void 0,email:void 0,type:void 0,sort_prop:void 0,sort_order:void 0}}},created:function(){this.getList()},methods:{handleClickEdit:function(t){this.$refs.edit_school.show(t)},handleClickNew:function(){this.$refs.new_school.show()},handleClickDelete:function(t){var e=this;this.$confirm("确认删除本次筛查?","提示",{confirmButtonText:"是",cancelButtonText:"否",type:"warning"}).then(function(){(function(t){return Object(l.a)({url:"/api/a1/schools/"+t.id,method:"delete"})})({id:t.id}).then(function(t){e.getList(),e.$message({type:"success",message:"删除成功!"})})}).catch(function(){})},getList:function(){var t=this;(function(t){return Object(l.a)({url:"/api/a1/schools",method:"get",params:t})})(this.listQuery).then(function(e){t.list=e.data.items,t.total=e.data.total,setTimeout(function(){t.listLoading=!1},1500)})},handleCurrentChange:function(t){this.listQuery.page=t,this.getList()},handleSizeChange:function(t){this.listQuery.limit=t,this.getList()},handleColumnSort:function(t){this.listQuery.sort_prop=t.prop,this.listQuery.sort_order=t.order,this.getList()},handleFilter:function(){this.getList()},handleFilterClear:function(){this.listQuery.name="",this.listQuery.phone="",this.listQuery.email=""}}},h=Object(a.a)(d,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("el-card",{staticClass:"box-card"},[i("div",{staticClass:"filter-container"},[i("el-button",{staticClass:"filter-item",attrs:{size:"small",explain:"",icon:"el-icon-plus"},on:{click:t.handleClickNew}},[t._v("新增")])],1),t._v(" "),i("el-table",{staticStyle:{width:"100%","margin-top":"10px"},attrs:{data:t.list,border:""},on:{"sort-change":t.handleColumnSort}},[i("el-table-column",{attrs:{label:"学校",prop:"name","min-width":"90"}}),t._v(" "),i("el-table-column",{attrs:{label:"创建日期",prop:"created_at","min-width":"120"}}),t._v(" "),i("el-table-column",{attrs:{label:"操作","min-width":"120"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(i){t.handleClickEdit(e.row)}}},[t._v("编辑")]),t._v(" "),i("el-button",{attrs:{type:"danger",size:"mini"},on:{click:function(i){t.handleClickDelete(e.row)}}},[t._v("删除")])]}}])})],1),t._v(" "),i("div",{staticClass:"pagination-container"},[i("el-pagination",{directives:[{name:"show",rawName:"v-show",value:t.total>0,expression:"total>0"}],attrs:{"current-page":t.listQuery.page,"page-sizes":[10,20,30,50],"page-size":t.listQuery.limit,total:t.total,background:"",layout:"total, sizes, prev, pager, next, jumper"},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1)],1),t._v(" "),i("NewSchool",{ref:"new_school",on:{"create-success":t.getList}}),t._v(" "),i("EditSchool",{ref:"edit_school",on:{"update-success":t.getList}})],1)},[],!1,null,null,null);h.options.__file="list.vue";e.default=h.exports}}]);