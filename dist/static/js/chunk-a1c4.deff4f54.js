(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-a1c4"],{CCno:function(t,e,i){"use strict";i.d(e,"a",function(){return l});var a=i("t3Un");function l(t){return Object(a.a)({url:"/api/a1/city_maps",method:"get",params:t})}},lHnu:function(t,e,i){"use strict";i.d(e,"c",function(){return l}),i.d(e,"d",function(){return o}),i.d(e,"f",function(){return n}),i.d(e,"e",function(){return r}),i.d(e,"a",function(){return s}),i.d(e,"b",function(){return c});var a=i("t3Un");function l(t){return Object(a.a)({url:"/api/a1/doctors",method:"get",params:t})}function o(t){return Object(a.a)({url:"/api/a1/doctors/"+t.id,method:"get",params:t})}function n(t){return Object(a.a)({url:"/api/a1/doctors/"+t.id,method:"put",data:t})}function r(t){return Object(a.a)({url:"/api/a1/doctors/"+t.id+"/update_doctor_organization",method:"put",data:t})}function s(t){return Object(a.a)({url:"/api/a1/doctors",method:"post",data:t})}function c(t){return Object(a.a)({url:"/api/a1/doctors/"+t.id,method:"delete",data:t})}},oZst:function(t,e,i){"use strict";i.r(e);var a=i("lHnu"),l=i("sNvZ"),o=i("CCno"),n=[{key:"male",display_name:"男"},{key:"female",display_name:"女"}],r={data:function(){return{genderOptions:n,dialogFormVisible:!1,formLabelWidth:"120px",passwork_valid:!1,temp:{name:void 0,gender:void 0,phone:void 0,email:void 0,password:void 0,password_confirmation:void 0,organization_id:void 0,description:void 0,start_work_date:void 0,province_code:void 0,city_code:void 0,district_code:void 0},rules:{name:[{required:!0,message:"请输入姓名",trigger:"blur"}],email:[{required:!0,message:"请输入登录账号",trigger:"blur"}],password:[{required:!0,message:"请输入登录密码",trigger:"blur"},{min:6,message:"最少6个字符",trigger:"blur"}],password_confirmation:[{required:!0,message:"请输入登录确认密码",trigger:"blur"},{min:6,message:"最少6个字符",trigger:"blur"}]},loading:!1,organizationsData:[],provinceData:[],cityData:[],districtData:[]}},watch:{"temp.province_code":function(t,e){void 0!==t&&(this.getCityData(t),this.temp.city_code=void 0,this.temp.district_code=void 0)},"temp.city_code":function(t,e){void 0!==t&&(this.getDistrictData(t),this.temp.district_code=void 0)}},created:function(){this.getProvinceData()},methods:{handleClickCancel:function(){this.resetData(),this.dialogFormVisible=!1},handleClickSubmit:function(){var t=this;this.$refs.ruleForm.validate(function(e){if(!e)return!1;t.temp.password===t.temp.password_confirmation?Object(a.a)(t.temp).then(function(e){t.resetData(),t.dialogFormVisible=!1,t.$emit("create-success")}):t.passwork_valid=!0})},show:function(){this.dialogFormVisible=!0},resetData:function(){this.$refs.ruleForm.resetFields(),this.temp={name:void 0,gender:void 0,phone:void 0,email:void 0,password:void 0,password_confirmation:void 0,organization_id:void 0,description:"",start_work_date:void 0,province_code:void 0,city_code:void 0,district_code:void 0}},remoteMethod:function(t){var e=this;""!==t?(this.loading=!0,Object(l.a)({title:t}).then(function(t){e.organizationsData=t.data,e.loading=!1})):this.organizationsData=[]},getProvinceData:function(){var t=this;Object(o.a)().then(function(e){t.provinceData=e.data})},getCityData:function(t){var e=this;Object(o.a)({province_code:t}).then(function(t){e.cityData=t.data})},getDistrictData:function(t){var e=this;Object(o.a)({city_code:t}).then(function(t){e.districtData=t.data})}}},s=i("KHd+"),c=Object(s.a)(r,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("el-dialog",{attrs:{visible:t.dialogFormVisible,"close-on-click-modal":!1,title:"新增医生账号",width:"70%"},on:{"update:visible":function(e){t.dialogFormVisible=e}}},[i("el-form",{ref:"ruleForm",staticStyle:{width:"90%","margin-left":"20px"},attrs:{model:t.temp,rules:t.rules}},[i("el-form-item",{attrs:{"label-width":t.formLabelWidth,prop:"name",label:"姓名"}},[i("el-input",{staticStyle:{width:"50%"},attrs:{autocomplete:"off",clearable:""},model:{value:t.temp.name,callback:function(e){t.$set(t.temp,"name",e)},expression:"temp.name"}})],1),t._v(" "),i("el-form-item",{attrs:{"label-width":t.formLabelWidth,label:"性别",prop:"gender"}},[i("el-select",{staticClass:"filter-item",model:{value:t.temp.gender,callback:function(e){t.$set(t.temp,"gender",e)},expression:"temp.gender"}},t._l(t.genderOptions,function(t){return i("el-option",{key:t.key,attrs:{label:t.display_name,value:t.key}})}))],1),t._v(" "),i("el-form-item",{attrs:{"label-width":t.formLabelWidth,label:"联系方式"}},[i("el-input",{staticStyle:{width:"50%"},attrs:{clearable:""},model:{value:t.temp.phone,callback:function(e){t.$set(t.temp,"phone",e)},expression:"temp.phone"}})],1),t._v(" "),i("el-form-item",{attrs:{"label-width":t.formLabelWidth,prop:"email",label:"登录邮箱"}},[i("el-input",{staticStyle:{width:"50%"},model:{value:t.temp.email,callback:function(e){t.$set(t.temp,"email",e)},expression:"temp.email"}})],1),t._v(" "),i("el-form-item",{attrs:{"label-width":t.formLabelWidth,prop:"password",label:"登录密码"}},[i("el-input",{staticStyle:{width:"50%"},attrs:{type:"password"},model:{value:t.temp.password,callback:function(e){t.$set(t.temp,"password",e)},expression:"temp.password"}})],1),t._v(" "),i("el-form-item",{attrs:{"label-width":t.formLabelWidth,prop:"password_confirmation",label:"确认密码"}},[i("el-input",{staticStyle:{width:"50%"},attrs:{type:"password"},model:{value:t.temp.password_confirmation,callback:function(e){t.$set(t.temp,"password_confirmation",e)},expression:"temp.password_confirmation"}}),t._v(" "),t.passwork_valid?i("el-alert",{attrs:{title:"两次输入密码不一致",type:"error"}}):t._e()],1),t._v(" "),i("el-form-item",{attrs:{"label-width":t.formLabelWidth,label:"地区"}},[i("el-select",{staticStyle:{width:"130px"},attrs:{placeholder:"请选择"},model:{value:t.temp.province_code,callback:function(e){t.$set(t.temp,"province_code",e)},expression:"temp.province_code"}},t._l(t.provinceData,function(t){return i("el-option",{key:t.code,attrs:{label:t.name,value:t.code}})})),t._v(" "),i("el-select",{staticStyle:{width:"120px"},attrs:{placeholder:"请选择"},model:{value:t.temp.city_code,callback:function(e){t.$set(t.temp,"city_code",e)},expression:"temp.city_code"}},t._l(t.cityData,function(t){return i("el-option",{key:t.code,attrs:{label:t.name,value:t.code}})})),t._v(" "),i("el-select",{staticStyle:{width:"120px"},attrs:{placeholder:"请选择"},model:{value:t.temp.district_code,callback:function(e){t.$set(t.temp,"district_code",e)},expression:"temp.district_code"}},t._l(t.districtData,function(t){return i("el-option",{key:t.code,attrs:{label:t.name,value:t.code}})}))],1),t._v(" "),i("el-form-item",{attrs:{"label-width":t.formLabelWidth,label:"简介"}},[i("el-input",{staticStyle:{width:"50%"},attrs:{type:"textarea"},model:{value:t.temp.description,callback:function(e){t.$set(t.temp,"description",e)},expression:"temp.description"}})],1)],1),t._v(" "),i("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:t.handleClickCancel}},[t._v("取 消")]),t._v(" "),i("el-button",{attrs:{type:"primary"},on:{click:t.handleClickSubmit}},[t._v("确 定")])],1)],1)},[],!1,null,null,null);c.options.__file="new_doctor.vue";var d=c.exports,u=i("gDS+"),p=i.n(u),m=[{key:"male",display_name:"男"},{key:"female",display_name:"女"}],h={data:function(){return{genderOptions:m,dialogVisible:!1,formLabelWidth:"100px",temp:{id:void 0,name:void 0,gender:void 0,phone:void 0,email:void 0,start_work_date:void 0,description:void 0},rules:{name:[{required:!0,message:"请输入姓名",trigger:"blur"}],email:[{required:!0,message:"请输入登录账号",trigger:"blur"}]}}},created:function(){},methods:{handlerClickCancel:function(){this.dialogVisible=!1},handleShow:function(t){this.temp=JSON.parse(p()(t)),this.dialogVisible=!0},handleClickSubmit:function(){var t=this;this.$refs.ruleForm.validate(function(e){if(!e)return!1;t.$confirm("确定修改该账号信息吗？, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){Object(a.f)(t.temp).then(function(e){t.dialogVisible=!1,t.$emit("update-success"),t.$message({type:"success",message:"修改成功!"})})}).catch(function(){})})}}},f=Object(s.a)(h,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("el-dialog",{attrs:{visible:t.dialogVisible,modal:!0,"close-on-click-modal":!1,title:"修改医生信息",width:"70%"},on:{"update:visible":function(e){t.dialogVisible=e}}},[i("el-form",{ref:"ruleForm",staticStyle:{width:"90%","margin-left":"20px"},attrs:{model:t.temp,rules:t.rules}},[i("el-form-item",{attrs:{"label-width":t.formLabelWidth,label:"姓名",prop:"name"}},[i("el-input",{staticClass:"filter-item",staticStyle:{width:"50%"},attrs:{placeholder:"姓名"},model:{value:t.temp.name,callback:function(e){t.$set(t.temp,"name",e)},expression:"temp.name"}})],1),t._v(" "),i("el-form-item",{attrs:{"label-width":t.formLabelWidth,label:"性别",prop:"gender"}},[i("el-select",{staticClass:"filter-item",model:{value:t.temp.gender,callback:function(e){t.$set(t.temp,"gender",e)},expression:"temp.gender"}},t._l(t.genderOptions,function(t){return i("el-option",{key:t.key,attrs:{label:t.display_name,value:t.key}})}))],1),t._v(" "),i("el-form-item",{attrs:{"label-width":t.formLabelWidth,prop:"phone",label:"联系方式"}},[i("el-input",{staticStyle:{width:"50%"},attrs:{clearable:""},model:{value:t.temp.phone,callback:function(e){t.$set(t.temp,"phone",e)},expression:"temp.phone"}})],1),t._v(" "),i("el-form-item",{attrs:{"label-width":t.formLabelWidth,prop:"email",label:"登录邮箱"}},[i("el-input",{staticStyle:{width:"50%"},attrs:{clearable:""},model:{value:t.temp.email,callback:function(e){t.$set(t.temp,"email",e)},expression:"temp.email"}})],1),t._v(" "),i("el-form-item",{attrs:{"label-width":t.formLabelWidth,label:"简介"}},[i("el-input",{staticStyle:{width:"60%"},attrs:{type:"textarea"},model:{value:t.temp.description,callback:function(e){t.$set(t.temp,"description",e)},expression:"temp.description"}})],1)],1),t._v(" "),i("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:t.handlerClickCancel}},[t._v("取消")]),t._v(" "),i("el-button",{attrs:{type:"primary"},on:{click:t.handleClickSubmit}},[t._v("提交")])],1)],1)},[],!1,null,null,null);f.options.__file="edit_doctor.vue";var v={components:{NewDoctor:d,EditDoctor:f.exports},data:function(){return{list:null,total:null,listLoading:!0,listQuery:{page:1,limit:20,importance:void 0,name:void 0,phone:void 0,email:void 0,type:void 0,sortProp:void 0,sortOrder:void 0}}},created:function(){this.getList()},methods:{handleClickEdit:function(t){this.$refs.editDoctor.handleShow(t)},handleClickNew:function(){this.$refs.newDoctor.show()},handleClick:function(t){},handleClickDelete:function(t){var e=this;this.$confirm("确认删除该医生账号?","提示",{confirmButtonText:"是",cancelButtonText:"否",type:"warning"}).then(function(){Object(a.b)({id:t.id}).then(function(t){e.getList(),e.$message({type:"success",message:"删除成功!"})})}).catch(function(){})},getList:function(){var t=this;Object(a.c)(this.listQuery).then(function(e){t.list=e.data.items,t.total=e.data.total,setTimeout(function(){t.listLoading=!1},1500)})},handleCurrentChange:function(t){this.listQuery.page=t,this.getList()},handleSizeChange:function(t){this.listQuery.limit=t,this.getList()},handleColumnSort:function(t){this.listQuery.sortProp=t.prop,this.listQuery.sortOrder=t.order,this.getList()},handleFilter:function(){this.getList()},handleFilterClear:function(){this.listQuery.name="",this.listQuery.phone="",this.listQuery.email=""}}},b=Object(s.a)(v,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("el-card",{staticClass:"box-card"},[i("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[i("span",[t._v("账户管理")])]),t._v(" "),i("div",{staticClass:"filter-container"},[i("el-button",{staticClass:"filter-item",attrs:{type:"success",icon:"el-icon-plus"},on:{click:t.handleClickNew}},[t._v("新增")])],1),t._v(" "),i("el-row",[i("el-col",[t._v("\n        姓名:\n        "),i("el-input",{staticClass:"filter-item",staticStyle:{width:"100px"},attrs:{label:"姓名",placeholder:"姓名",clearable:""},model:{value:t.listQuery.name,callback:function(e){t.$set(t.listQuery,"name",e)},expression:"listQuery.name"}}),t._v("\n        联系电话:\n        "),i("el-input",{staticClass:"filter-item",staticStyle:{width:"180px"},attrs:{label:"联系电话",placeholder:"联系电话",clearable:""},model:{value:t.listQuery.phone,callback:function(e){t.$set(t.listQuery,"phone",e)},expression:"listQuery.phone"}}),t._v("\n        登录账号:\n        "),i("el-input",{staticClass:"filter-item",staticStyle:{width:"180px"},attrs:{label:"姓名",placeholder:"登录账号",clearable:""},model:{value:t.listQuery.email,callback:function(e){t.$set(t.listQuery,"email",e)},expression:"listQuery.email"}})],1)],1),t._v(" "),i("el-row",{staticStyle:{"margin-top":"10px"}},[i("el-col",[i("el-button",{staticClass:"filter-item",attrs:{type:"primary",icon:"el-icon-search"},on:{click:t.handleFilter}},[t._v("搜索")]),t._v(" "),i("el-button",{staticClass:"filter-item",attrs:{type:"primary"},on:{click:t.handleFilterClear}},[t._v("清空")])],1)],1),t._v(" "),i("el-table",{staticStyle:{width:"100%","margin-top":"10px"},attrs:{data:t.list,border:""},on:{"sort-change":t.handleColumnSort}},[i("el-table-column",{attrs:{prop:"name",label:"姓名","min-width":"90"}}),t._v(" "),i("el-table-column",{attrs:{prop:"organizationTitle",label:"所属机构","min-width":"120"}}),t._v(" "),i("el-table-column",{attrs:{prop:"childrenCount",label:"孩子数量","min-width":"80"}}),t._v(" "),i("el-table-column",{attrs:{prop:"phone",label:"联系电话","min-width":"100"}}),t._v(" "),i("el-table-column",{attrs:{prop:"email",label:"登录账号","min-width":"160"}}),t._v(" "),i("el-table-column",{attrs:{prop:"genderCn",label:"性别","min-width":"50"}}),t._v(" "),i("el-table-column",{attrs:{prop:"createdAt",label:"创建时间","min-width":"120"}}),t._v(" "),i("el-table-column",{attrs:{label:"操作","min-width":"120"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("el-button",{attrs:{type:"text",size:"small"},on:{click:function(i){t.handleClickEdit(e.row)}}},[t._v("修改")]),t._v(" "),i("el-button",{attrs:{type:"text",size:"small"},on:{click:function(i){t.handleClickDelete(e.row)}}},[t._v("删除")])]}}])})],1),t._v(" "),i("div",{staticClass:"pagination-container"},[i("el-pagination",{directives:[{name:"show",rawName:"v-show",value:t.total>0,expression:"total>0"}],attrs:{"current-page":t.listQuery.page,"page-sizes":[10,20,30,50],"page-size":t.listQuery.limit,total:t.total,background:"",layout:"total, sizes, prev, pager, next, jumper"},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1)],1),t._v(" "),i("NewDoctor",{ref:"newDoctor",on:{"create-success":t.getList}}),t._v(" "),i("EditDoctor",{ref:"editDoctor",on:{"update-success":t.getList}})],1)},[],!1,null,null,null);b.options.__file="doctors.vue";e.default=b.exports},sNvZ:function(t,e,i){"use strict";i.d(e,"a",function(){return l});var a=i("t3Un");function l(t){return Object(a.a)({url:"/api/a1/selects/organizations",method:"get",params:t})}}}]);