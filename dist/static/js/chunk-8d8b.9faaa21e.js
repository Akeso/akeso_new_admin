(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-8d8b"],{Hssm:function(t,e,i){},MJfN:function(t,e,i){},Zev4:function(t,e,i){"use strict";var l=i("Hssm");i.n(l).a},fBaO:function(t,e,i){"use strict";i.r(e);var l=i("P2sY"),a=i.n(l),n=i("t3Un");var o=[{key:1,value:"检查类套餐"},{key:2,value:"验配类"},{key:3,value:"视功能训练类"},{key:4,value:"调节或集合训练仪器"},{key:5,value:"护理液"}],s={props:{dialogVisible:{type:Boolean,default:!0}},data:function(){return{uploadUrl:"/api/common/uploads/common",formLabelWidth:"120px",kinds:o,temp:{logo_url:void 0,content_url:void 0,name:void 0,kind:void 0,akeso_coin:void 0,origin_price:void 0},loading:!1}},created:function(){},methods:{uploadLogoSuccess:function(t,e){this.temp.logo_url=t.data.url},uploadContentuccess:function(t,e){this.temp.content_url=t.data.url},handleClickCancel:function(){this.$emit("hidden",!1)},handleClickSubmit:function(){var t=this;(function(t){return Object(n.a)({url:"/api/a1/coin_products",method:"post",data:t})})(this.temp).then(function(e){t.$emit("hidden",!0)})}}},r=(i("pf7J"),i("KHd+")),c=Object(r.a)(s,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("el-dialog",{attrs:{visible:t.dialogVisible,modal:!0,"close-on-click-modal":!1,"close-on-press-escape":!1,"show-close":!1,title:"新增机构/医生账号",width:"70%",top:"30px"},on:{"update:visible":function(e){t.dialogVisible=e}}},[i("el-form",{staticStyle:{width:"90%","margin-left":"20px"}},[i("el-form-item",{attrs:{"label-width":t.formLabelWidth,label:"套餐类别"}},[i("el-select",{staticStyle:{width:"130px"},attrs:{placeholder:"请选择"},model:{value:t.temp.kind,callback:function(e){t.$set(t.temp,"kind",e)},expression:"temp.kind"}},t._l(t.kinds,function(t){return i("el-option",{key:t.key,attrs:{label:t.value,value:t.key}})}))],1),t._v(" "),i("el-form-item",{attrs:{"label-width":t.formLabelWidth,prop:"name",label:"名称"}},[i("el-input",{staticStyle:{width:"50%"},attrs:{autocomplete:"off",clearable:"",placeholder:"机构/医生名称"},model:{value:t.temp.name,callback:function(e){t.$set(t.temp,"name",e)},expression:"temp.name"}})],1),t._v(" "),i("el-form-item",{attrs:{"label-width":t.formLabelWidth,label:"兑换积分"}},[i("el-input",{staticStyle:{width:"50%"},attrs:{clearable:"",placeholder:"0"},model:{value:t.temp.akeso_coin,callback:function(e){t.$set(t.temp,"akeso_coin",e)},expression:"temp.akeso_coin"}}),t._v("积分\n    ")],1),t._v(" "),i("el-form-item",{attrs:{"label-width":t.formLabelWidth,label:"原价"}},[i("el-input",{staticStyle:{width:"50%"},attrs:{clearable:""},model:{value:t.temp.origin_price,callback:function(e){t.$set(t.temp,"origin_price",e)},expression:"temp.origin_price"}}),t._v("元\n    ")],1),t._v(" "),i("el-form-item",{attrs:{"label-width":t.formLabelWidth,label:"产品图片"}},[i("el-upload",{staticClass:"avatar-uploader",attrs:{action:t.uploadUrl,"show-file-list":!1,"on-success":t.uploadLogoSuccess}},[t.temp.logo_url?i("img",{staticClass:"avatar",attrs:{src:t.temp.logo_url}}):i("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1),t._v(" "),i("el-form-item",{attrs:{"label-width":t.formLabelWidth,label:"产品详情图"}},[i("el-upload",{staticClass:"avatar-uploader",attrs:{action:t.uploadUrl,"show-file-list":!1,"on-success":t.uploadContentuccess}},[t.temp.content_url?i("img",{staticClass:"avatar",attrs:{src:t.temp.content_url}}):i("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1)],1),t._v(" "),i("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:t.handleClickCancel}},[t._v("取 消")]),t._v(" "),i("el-button",{attrs:{type:"primary"},on:{click:t.handleClickSubmit}},[t._v("确 定")])],1)],1)},[],!1,null,"7b506154",null);c.options.__file="new.vue";var u=c.exports,d=[{key:1,value:"检查类套餐"},{key:2,value:"验配类"},{key:3,value:"视功能训练类"},{key:4,value:"调节或集合训练仪器"},{key:5,value:"护理液"}],m={props:{dialogVisible:{type:Boolean,default:!0},item:{type:Object,default:function(){return{}}}},data:function(){return{uploadUrl:"/api/common/uploads/common",formLabelWidth:"100px",kinds:d,temp:{id:this.item.id,kind:this.item.kind,name:this.item.name,akeso_coin:this.item.akeso_coin,origin_price:this.item.origin_price,logo_url:this.item.logo_url,content_url:this.item.content_url}}},methods:{uploadLogoSuccess:function(t,e){this.temp.logo_url=t.data.url},uploadContentuccess:function(t,e){this.temp.content_url=t.data.url},handlerClickCancel:function(){this.$emit("hidden",!1)},handleClickSubmit:function(){var t=this;this.$confirm("确定修改该信息吗？, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){(function(t){return Object(n.a)({url:"/api/a1/coin_products/"+t.id,method:"put",data:t})})(t.temp).then(function(e){t.$emit("hidden",!0),t.$message({type:"success",message:"修改成功!"})})}).catch(function(){})}}},p=(i("Zev4"),Object(r.a)(m,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("el-dialog",{attrs:{visible:t.dialogVisible,modal:!0,"close-on-click-modal":!1,"close-on-press-escape":!1,"show-close":!1,title:"修改医生信息",width:"70%",top:"30px"},on:{"update:visible":function(e){t.dialogVisible=e}}},[i("el-form",{staticStyle:{width:"90%","margin-left":"20px"},attrs:{model:t.temp}},[i("el-form-item",{attrs:{"label-width":t.formLabelWidth,label:"套餐类别"}},[i("el-select",{staticStyle:{width:"130px"},attrs:{placeholder:"请选择"},model:{value:t.temp.kind,callback:function(e){t.$set(t.temp,"kind",e)},expression:"temp.kind"}},t._l(t.kinds,function(t){return i("el-option",{key:t.key,attrs:{label:t.value,value:t.key}})}))],1),t._v(" "),i("el-form-item",{attrs:{"label-width":t.formLabelWidth,prop:"name",label:"名称"}},[i("el-input",{staticStyle:{width:"50%"},attrs:{autocomplete:"off",clearable:"",placeholder:"机构/医生名称"},model:{value:t.temp.name,callback:function(e){t.$set(t.temp,"name",e)},expression:"temp.name"}})],1),t._v(" "),i("el-form-item",{attrs:{"label-width":t.formLabelWidth,label:"兑换积分"}},[i("el-input",{staticStyle:{width:"50%"},attrs:{clearable:"",placeholder:"0"},model:{value:t.temp.akeso_coin,callback:function(e){t.$set(t.temp,"akeso_coin",e)},expression:"temp.akeso_coin"}}),t._v("积分\n    ")],1),t._v(" "),i("el-form-item",{attrs:{"label-width":t.formLabelWidth,label:"原价"}},[i("el-input",{staticStyle:{width:"50%"},attrs:{clearable:""},model:{value:t.temp.origin_price,callback:function(e){t.$set(t.temp,"origin_price",e)},expression:"temp.origin_price"}}),t._v("元\n    ")],1),t._v(" "),i("el-form-item",{attrs:{"label-width":t.formLabelWidth,label:"产品图片"}},[i("el-upload",{staticClass:"avatar-uploader",attrs:{action:t.uploadUrl,"show-file-list":!1,"on-success":t.uploadLogoSuccess}},[t.temp.logo_url?i("img",{staticClass:"avatar",attrs:{src:t.temp.logo_url}}):i("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1),t._v(" "),i("el-form-item",{attrs:{"label-width":t.formLabelWidth,label:"产品详情图"}},[i("el-upload",{staticClass:"avatar-uploader",attrs:{action:t.uploadUrl,"show-file-list":!1,"on-success":t.uploadContentuccess}},[t.temp.content_url?i("img",{staticClass:"avatar",attrs:{src:t.temp.content_url}}):i("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1)],1),t._v(" "),i("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:t.handlerClickCancel}},[t._v("取消")]),t._v(" "),i("el-button",{attrs:{type:"primary"},on:{click:t.handleClickSubmit}},[t._v("提交")])],1)],1)},[],!1,null,"9c22dcb6",null));p.options.__file="edit.vue";var h={components:{New:u,Edit:p.exports},data:function(){return{newDoctorVisible:!1,editDoctorVisible:!1,currentItem:void 0,list:null,total:null,listLoading:!0,listQuery:{page:1,limit:20,name:void 0}}},created:function(){this.getList()},methods:{hideChangeEmit:function(t){t&&this.getList(),this.newDoctorVisible=!1,this.editDoctorVisible=!1},handleCurrentSelect:function(t){this.currentItem=t},handleClickEdit:function(){this.currentItem?this.editDoctorVisible=!0:this.$message({type:"warning",message:"请先选择一项进行操作!"})},handleClickNew:function(){this.newDoctorVisible=!0},handleClickDelete:function(){var t=this;this.currentItem?this.$confirm("确认删除该条信息?","提示",{confirmButtonText:"是",cancelButtonText:"否",type:"warning"}).then(function(){(function(t){return Object(n.a)({url:"/api/a1/coin_products/"+t.id,method:"delete",data:t})})({id:t.currentItem.id}).then(function(e){t.getList(),t.$message({type:"success",message:"删除成功!"})})}).catch(function(){}):this.$message({type:"warning",message:"请先选择一项进行操作!"})},getList:function(){var t=this;"agent"===this.$store.getters.baseType&&a()(this.listQuery,{agent_id:this.$store.getters.id}),function(t){return Object(n.a)({url:"/api/a1/coin_products",method:"get",params:t})}(this.listQuery).then(function(e){t.list=e.data.items,t.total=e.data.total,setTimeout(function(){t.listLoading=!1},1500)})},handleCurrentChange:function(t){this.listQuery.page=t,this.getList()},handleSizeChange:function(t){this.listQuery.limit=t,this.getList()},handleFilter:function(){this.getList()},handleFilterClear:function(){this.listQuery.name="",this.listQuery.phone="",this.listQuery.email=""}}},f=Object(r.a)(h,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("el-card",{staticClass:"box-card"},[i("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[i("span",[t._v("产品管理")])]),t._v(" "),i("div",{staticClass:"filter-container"},[t._v("\n      名称：\n      "),i("el-input",{staticClass:"filter-item",staticStyle:{width:"200px"},attrs:{placeholder:t.generateShow("common.name_field"),size:"mini",label:"名称",clearable:""},model:{value:t.listQuery.name,callback:function(e){t.$set(t.listQuery,"name",e)},expression:"listQuery.name"}}),t._v(" "),i("el-button",{staticClass:"filter-item",attrs:{size:"mini",type:"primary",icon:"el-icon-search"},on:{click:t.handleFilter}},[t._v("搜索")]),t._v(" "),i("el-button",{attrs:{size:"mini",icon:"el-icon-plus"},on:{click:t.handleClickNew}},[t._v("新增")]),t._v(" "),i("el-button",{attrs:{size:"mini",icon:"el-icon-edit"},on:{click:t.handleClickEdit}},[t._v("修改")]),t._v(" "),i("el-button",{attrs:{size:"mini",icon:"el-icon-delete"},on:{click:t.handleClickDelete}},[t._v("删除")])],1),t._v(" "),i("el-table",{staticStyle:{width:"100%","margin-top":"10px"},attrs:{data:t.list,border:"","highlight-current-row":""},on:{"current-change":t.handleCurrentSelect}},[i("el-table-column",{attrs:{label:"名称",prop:"name","min-width":"90"}}),t._v(" "),i("el-table-column",{attrs:{label:"类别",prop:"kind","min-width":"120"}}),t._v(" "),i("el-table-column",{attrs:{label:"兑换积分",prop:"akeso_coin","min-width":"120"}}),t._v(" "),i("el-table-column",{attrs:{label:"原价(元)",prop:"origin_price","min-width":"120"}}),t._v(" "),i("el-table-column",{attrs:{label:"创建时间",prop:"created_at","min-width":"120"}})],1),t._v(" "),i("div",{staticClass:"pagination-container"},[i("el-pagination",{directives:[{name:"show",rawName:"v-show",value:t.total>0,expression:"total>0"}],attrs:{"current-page":t.listQuery.page,"page-sizes":[10,20,30,50],"page-size":t.listQuery.limit,total:t.total,background:"",layout:"total, sizes, prev, pager, next, jumper"},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1)],1),t._v(" "),t.newDoctorVisible?i("New",{attrs:{"dialog-visible":t.newDoctorVisible},on:{hidden:t.hideChangeEmit}}):t._e(),t._v(" "),t.editDoctorVisible?i("Edit",{attrs:{"dialog-visible":t.editDoctorVisible,item:t.currentItem},on:{hidden:t.hideChangeEmit}}):t._e()],1)},[],!1,null,null,null);f.options.__file="products.vue";e.default=f.exports},pf7J:function(t,e,i){"use strict";var l=i("MJfN");i.n(l).a}}]);