(window.webpackJsonp=window.webpackJsonp||[]).push([["mjA4"],{mjA4:function(e,t,i){"use strict";i.r(t);var o=i("t3Un");var l={data:function(){return{dialogFormVisible:!1,formLabelWidth:"120px",form:{id:void 0,deviceType:void 0,secondType:void 0,des:void 0,version:void 0,file_id:void 0}}},methods:{show:function(e){this.form.id=e.id,this.form.deviceType=e.deviceType,this.form.secondType=e.secondType,this.form.des=e.des,this.form.version=e.version,this.dialogFormVisible=!0},handleSuccess:function(e,t){console.log("res => ",e),this.form.file_id=e.data.id},handClickSubmit:function(){var e=this;(function(e){return Object(o.a)({url:"/api/a1/server_app_files/"+e.id,method:"put",data:e})})(this.form).then(function(t){e.$emit("updateVersionSuccess"),e.dialogFormVisible=!1})}}},a=i("KHd+"),s=Object(a.a)(l,function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("el-dialog",{attrs:{visible:e.dialogFormVisible,title:"修改蓝牙文件"},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[i("el-form",{attrs:{model:e.form}},[i("el-form-item",{attrs:{"label-width":e.formLabelWidth,label:"镜腿大版本名"}},[i("el-input",{attrs:{autocomplete:"off"},model:{value:e.form.deviceType,callback:function(t){e.$set(e.form,"deviceType",t)},expression:"form.deviceType"}})],1),e._v(" "),i("el-form-item",{attrs:{"label-width":e.formLabelWidth,label:"镜腿小版本名"}},[i("el-input",{attrs:{autocomplete:"off"},model:{value:e.form.secondType,callback:function(t){e.$set(e.form,"secondType",t)},expression:"form.secondType"}})],1),e._v(" "),i("el-form-item",{attrs:{"label-width":e.formLabelWidth,label:"升级版本号"}},[i("el-input",{attrs:{autocomplete:"off"},model:{value:e.form.version,callback:function(t){e.$set(e.form,"version",t)},expression:"form.version"}})],1),e._v(" "),i("el-form-item",{attrs:{"label-width":e.formLabelWidth,label:"描述"}},[i("el-input",{attrs:{autocomplete:"off"},model:{value:e.form.des,callback:function(t){e.$set(e.form,"des",t)},expression:"form.des"}})],1),e._v(" "),i("el-form-item",{attrs:{"label-width":e.formLabelWidth,label:"文件"}},[i("el-upload",{staticClass:"upload-demo",attrs:{limit:1,"on-success":e.handleSuccess,action:"/api/common/uploads/server_app_files"}},[i("el-button",{attrs:{size:"small",type:"primary"}},[e._v("点击上传")])],1)],1)],1),e._v(" "),i("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:function(t){e.dialogFormVisible=!1}}},[e._v("取 消")]),e._v(" "),i("el-button",{attrs:{type:"primary"},on:{click:e.handClickSubmit}},[e._v("确 定")])],1)],1)},[],!1,null,null,null);s.options.__file="edit.vue";var r=s.exports,n={data:function(){return{dialogFormVisible:!1,formLabelWidth:"120px",form:{deviceType:void 0,secondType:void 0,des:void 0,version:void 0,file_id:void 0}}},methods:{show:function(){this.dialogFormVisible=!0},handleSuccess:function(e,t){console.log("res => ",e),this.form.file_id=e.data.id},handClickSubmit:function(){var e=this;(function(e){return Object(o.a)({url:"/api/a1/server_app_files",method:"post",data:e})})(this.form).then(function(t){e.$emit("updateVersionSuccess"),e.dialogFormVisible=!1})}}},c=Object(a.a)(n,function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("el-dialog",{attrs:{visible:e.dialogFormVisible,title:"新增蓝牙文件"},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[i("el-form",{attrs:{model:e.form}},[i("el-form-item",{attrs:{"label-width":e.formLabelWidth,label:"镜腿大版本名"}},[i("el-input",{attrs:{autocomplete:"off"},model:{value:e.form.deviceType,callback:function(t){e.$set(e.form,"deviceType",t)},expression:"form.deviceType"}})],1),e._v(" "),i("el-form-item",{attrs:{"label-width":e.formLabelWidth,label:"镜腿小版本名"}},[i("el-input",{attrs:{autocomplete:"off"},model:{value:e.form.secondType,callback:function(t){e.$set(e.form,"secondType",t)},expression:"form.secondType"}})],1),e._v(" "),i("el-form-item",{attrs:{"label-width":e.formLabelWidth,label:"升级版本号"}},[i("el-input",{attrs:{autocomplete:"off"},model:{value:e.form.version,callback:function(t){e.$set(e.form,"version",t)},expression:"form.version"}})],1),e._v(" "),i("el-form-item",{attrs:{"label-width":e.formLabelWidth,label:"描述"}},[i("el-input",{attrs:{autocomplete:"off"},model:{value:e.form.des,callback:function(t){e.$set(e.form,"des",t)},expression:"form.des"}})],1),e._v(" "),i("el-form-item",{attrs:{"label-width":e.formLabelWidth,label:"文件"}},[i("el-upload",{staticClass:"upload-demo",attrs:{limit:1,"on-success":e.handleSuccess,action:"/api/common/uploads/server_app_files"}},[i("el-button",{attrs:{size:"small",type:"primary"}},[e._v("点击上传")])],1)],1)],1),e._v(" "),i("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:function(t){e.dialogFormVisible=!1}}},[e._v("取 消")]),e._v(" "),i("el-button",{attrs:{type:"primary"},on:{click:e.handClickSubmit}},[e._v("确 定")])],1)],1)},[],!1,null,null,null);c.options.__file="new.vue";var d={components:{Edit:r,New:c.exports},filters:{stateFilter:function(e){return{bind:"success",unbind:"info"}[e]}},data:function(){return{list:[],total:null,listLoading:!0,listQuery:{page:1,limit:20}}},created:function(){this.getList()},methods:{handleClickNew:function(){this.$refs.new.show()},handleClick:function(e){this.$refs.edit.show(e)},getList:function(){var e=this;(function(e){return Object(o.a)({url:"/api/a1/server_app_files",method:"get",params:e})})(this.listQuery).then(function(t){e.list=t.data.items,e.total=t.data.total})},handleCurrentChange:function(e){this.listQuery.page=e,this.getList()},handleSizeChange:function(e){this.listQuery.limit=e,this.getList()},handleColumnSort:function(e){this.listQuery.sortProp=e.prop,this.listQuery.sortOrder=e.order,this.getList()},handleFilter:function(){this.getList()}}},u=Object(a.a)(d,function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"app-container"},[i("el-card",{staticClass:"box-card"},[i("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[i("span",[e._v("蓝牙文件")])]),e._v(" "),i("div",{staticClass:"filter-container"},[i("el-button",{staticClass:"filter-item",attrs:{type:"success",icon:"el-icon-plus"},on:{click:e.handleClickNew}},[e._v("新增")])],1),e._v(" "),i("el-table",{staticStyle:{width:"100%"},attrs:{data:e.list,border:""},on:{"sort-change":e.handleColumnSort}},[i("el-table-column",{attrs:{prop:"deviceType",label:"镜腿大版本名","min-width":"60"}}),e._v(" "),i("el-table-column",{attrs:{prop:"secondType",label:"镜腿小版本名","min-width":"60"}}),e._v(" "),i("el-table-column",{attrs:{prop:"version",label:"升级版本号","min-width":"50"}}),e._v(" "),i("el-table-column",{attrs:{prop:"fileName",label:"文件名","min-width":"120"}}),e._v(" "),i("el-table-column",{attrs:{prop:"fileSize",label:"文件大小(B)","min-width":"50"}}),e._v(" "),i("el-table-column",{attrs:{prop:"createdAt",label:"创建时间","min-width":"60"}}),e._v(" "),i("el-table-column",{attrs:{label:"操作","min-width":"40"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("el-button",{attrs:{type:"text",size:"small"},on:{click:function(i){e.handleClick(t.row)}}},[e._v("编辑")])]}}])})],1),e._v(" "),i("div",{staticClass:"pagination-container"},[i("el-pagination",{directives:[{name:"show",rawName:"v-show",value:e.total>0,expression:"total>0"}],attrs:{"current-page":e.listQuery.page,"page-sizes":[10,20,30,50],"page-size":e.listQuery.limit,total:e.total,background:"",layout:"total, sizes, prev, pager, next, jumper"},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)],1),e._v(" "),i("Edit",{ref:"edit",on:{updateVersionSuccess:e.getList}}),e._v(" "),i("New",{ref:"new",on:{updateVersionSuccess:e.getList}})],1)},[],!1,null,null,null);u.options.__file="index.vue";t.default=u.exports}}]);