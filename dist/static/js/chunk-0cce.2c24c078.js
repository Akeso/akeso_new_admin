(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-0cce"],{"9A4T":function(t,e,l){"use strict";var i=l("THlk"),a={data:function(){return{dialogFormVisible:!1,formLabelWidth:"120px",passwork_valid:!1,temp:{name:void 0,brand:void 0,serial:void 0,number:void 0,des:void 0,price:void 0,total:0},rules:{name:[{required:!0,message:"请输入名称",trigger:"blur"}]},loading:!1}},computed:{},watch:{},created:function(){},methods:{handleClickCancel:function(){this.resetData(),this.dialogFormVisible=!1},handleClickSubmit:function(){var t=this;this.$refs.ruleForm.validate(function(e){if(!e)return!1;Object(i.d)(t.temp).then(function(e){t.resetData(),t.dialogFormVisible=!1,t.$emit("create-success")})})},show:function(t){this.temp=t,this.dialogFormVisible=!0},resetData:function(){this.$refs.ruleForm.resetFields(),this.temp={name:void 0,brand:void 0,serial:void 0,number:void 0,des:void 0,price:void 0,total:0}}}},n=l("KHd+"),o=Object(n.a)(a,function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("el-dialog",{attrs:{visible:t.dialogFormVisible,"close-on-click-modal":!1,title:"新增产品",width:"70%"},on:{"update:visible":function(e){t.dialogFormVisible=e}}},[l("el-form",{ref:"ruleForm",staticStyle:{width:"90%","margin-left":"20px"},attrs:{model:t.temp,rules:t.rules}},[l("el-form-item",{attrs:{"label-width":t.formLabelWidth,prop:"name",label:"名称"}},[l("el-input",{staticStyle:{width:"50%"},attrs:{autocomplete:"off",clearable:"",placeholder:"产品名称"},model:{value:t.temp.name,callback:function(e){t.$set(t.temp,"name",e)},expression:"temp.name"}})],1),t._v(" "),l("el-form-item",{attrs:{"label-width":t.formLabelWidth,prop:"brand",label:"品牌"}},[l("el-input",{staticStyle:{width:"50%"},attrs:{autocomplete:"off",clearable:"",placeholder:"品牌"},model:{value:t.temp.brand,callback:function(e){t.$set(t.temp,"brand",e)},expression:"temp.brand"}})],1),t._v(" "),l("el-form-item",{attrs:{"label-width":t.formLabelWidth,prop:"serial",label:"系列"}},[l("el-input",{staticStyle:{width:"50%"},attrs:{autocomplete:"off",clearable:"",placeholder:"系列"},model:{value:t.temp.serial,callback:function(e){t.$set(t.temp,"serial",e)},expression:"temp.serial"}})],1),t._v(" "),l("el-form-item",{attrs:{"label-width":t.formLabelWidth,prop:"price",label:"价格"}},[l("el-input",{staticStyle:{width:"50%"},attrs:{autocomplete:"off",clearable:"",placeholder:"价格"},model:{value:t.temp.price,callback:function(e){t.$set(t.temp,"price",e)},expression:"temp.price"}})],1),t._v(" "),l("el-form-item",{attrs:{"label-width":t.formLabelWidth,prop:"total",label:"总量"}},[l("el-input",{staticStyle:{width:"50%"},attrs:{autocomplete:"off",clearable:"",placeholder:"总量"},model:{value:t.temp.total,callback:function(e){t.$set(t.temp,"total",e)},expression:"temp.total"}})],1),t._v(" "),l("el-form-item",{attrs:{"label-width":t.formLabelWidth,prop:"unit",label:"单位"}},[l("el-input",{staticStyle:{width:"50%"},attrs:{autocomplete:"off",clearable:"",placeholder:"单位"},model:{value:t.temp.unit,callback:function(e){t.$set(t.temp,"unit",e)},expression:"temp.unit"}})],1)],1),t._v(" "),l("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[l("el-button",{on:{click:t.handleClickCancel}},[t._v("取 消")]),t._v(" "),l("el-button",{attrs:{type:"primary"},on:{click:t.handleClickSubmit}},[t._v("确 定")])],1)],1)},[],!1,null,null,null);o.options.__file="edit_product.vue";e.a=o.exports},Q8Zy:function(t,e,l){},"SF+J":function(t,e,l){"use strict";l.d(e,"e",function(){return a}),l.d(e,"b",function(){return n}),l.d(e,"d",function(){return o}),l.d(e,"c",function(){return r}),l.d(e,"a",function(){return s}),l.d(e,"g",function(){return c}),l.d(e,"h",function(){return u}),l.d(e,"i",function(){return d}),l.d(e,"f",function(){return p});var i=l("t3Un");function a(t){return Object(i.a)({url:"/api/a1/children",method:"get",params:t})}function n(t){return Object(i.a)({url:"/api/a1/children/"+t.id,method:"get"})}function o(t){return Object(i.a)({url:"/api/a1/children/with_equipment",method:"get",params:t})}function r(t){return Object(i.a)({url:"/api/a1/children/index_en",method:"get",params:t})}function s(t){return Object(i.a)({url:"/api/a1/children",method:"post",data:t})}function c(t){return Object(i.a)({url:"/api/a1/children/"+t.id+"/unbind_doctor",method:"get"})}function u(t){return Object(i.a)({url:"/api/a1/children/"+t.id,method:"put",data:t})}function d(t){return Object(i.a)({url:"/api/a1/children/update_tags",method:"put",data:t})}function p(t){return console.log("query => ",t),Object(i.a)({url:"/api/a1/children/self_index",method:"get",params:t})}},THlk:function(t,e,l){"use strict";l.d(e,"c",function(){return a}),l.d(e,"a",function(){return n}),l.d(e,"d",function(){return o}),l.d(e,"b",function(){return r});var i=l("t3Un");function a(t){return Object(i.a)({url:"/api/a1/products",method:"get",params:t})}function n(t){return Object(i.a)({url:"/api/a1/products",method:"post",data:t})}function o(t){return Object(i.a)({url:"/api/a1/products/"+t.id,method:"put",data:t})}function r(t){return Object(i.a)({url:"/api/a1/products/"+t.id,method:"delete",params:t})}},fCTw:function(t,e,l){"use strict";l.r(e);var i=l("qzXL"),a=l("9A4T"),n=l("SF+J"),o={filters:{genderFilter:function(t){return{male:"男",female:"女",unknown:"未知"}[t]}},data:function(){return{dialogFormVisible:!1,list:null,total:null,listQuery:{page:1,limit:10,name:void 0,phone:void 0}}},computed:{},watch:{},created:function(){},methods:{getList:function(){var t=this;Object(n.e)(this.listQuery).then(function(e){t.list=e.data.items,t.total=e.data.total})},handleClickSelect:function(t){console.log("val => ",t),this.$router.push({path:"/billings/billing/"+t.id})},handleClickSearch:function(t){this.getList()},handleCurrentChange:function(t){this.listQuery.page=t,this.getList()},handleSizeChange:function(t){this.listQuery.limit=t,this.getList()},show:function(){this.getList(),this.dialogFormVisible=!0}}},r=l("KHd+"),s=Object(r.a)(o,function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("el-dialog",{attrs:{visible:t.dialogFormVisible,"close-on-click-modal":!1,title:"选择用户",width:"70%",top:"30px"},on:{"update:visible":function(e){t.dialogFormVisible=e}}},[l("el-row",[l("el-col",[l("el-input",{staticClass:"filter-item",staticStyle:{width:"200px"},attrs:{placeholder:"输入姓名",label:"名称",clearable:""},model:{value:t.listQuery.name,callback:function(e){t.$set(t.listQuery,"name",e)},expression:"listQuery.name"}}),t._v(" "),l("el-input",{staticClass:"filter-item",staticStyle:{width:"180px"},attrs:{placeholder:"输入手机号",label:"手机号",clearable:""},model:{value:t.listQuery.phone,callback:function(e){t.$set(t.listQuery,"phone",e)},expression:"listQuery.phone"}}),t._v(" "),l("el-button",{staticClass:"filter-item",attrs:{type:"primary",icon:"el-icon-search"},on:{click:t.handleClickSearch}},[t._v(t._s(t.generateShow("common.search")))])],1)],1),t._v(" "),l("el-table",{staticStyle:{width:"100%","margin-top":"10px"},attrs:{data:t.list,border:""}},[l("el-table-column",{attrs:{label:t.generateShow("common.name"),"min-width":"60"},scopedSlots:t._u([{key:"default",fn:function(e){return[l("router-link",{attrs:{to:"/preview/child/"+e.row.id}},[l("el-button",{attrs:{type:"text",size:"small"}},[t._v(t._s(e.row.name))])],1)]}}])}),t._v(" "),l("el-table-column",{attrs:{label:t.generateShow("common.age"),prop:"age","min-width":"40"}}),t._v(" "),l("el-table-column",{attrs:{label:t.generateShow("common.gender"),prop:"gender",sortable:"","min-width":"40"},scopedSlots:t._u([{key:"default",fn:function(e){return[l("el-button",{attrs:{type:"text",size:"small"}},[t._v(t._s(t._f("genderFilter")(e.row.gender)))])]}}])}),t._v(" "),l("el-table-column",{attrs:{label:t.generateShow("common.phone"),prop:"phone","min-width":"100"}}),t._v(" "),l("el-table-column",{attrs:{label:t.generateShow("common.operate"),"min-width":"80"},scopedSlots:t._u([{key:"default",fn:function(e){return[l("el-button",{attrs:{size:"small"},on:{click:function(l){t.handleClickSelect(e.row)}}},[t._v("选择")])]}}])})],1),t._v(" "),l("div",{staticClass:"pagination-container"},[l("el-pagination",{directives:[{name:"show",rawName:"v-show",value:t.total>0,expression:"total>0"}],attrs:{"current-page":t.listQuery.page,"page-sizes":[10,20,30,50],"page-size":t.listQuery.limit,total:t.total,background:"",layout:"total, sizes, prev, pager, next, jumper"},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1)],1)},[],!1,null,null,null);s.options.__file="child_select.vue";var c=s.exports,u={data:function(){return{dialogFormVisible:!1,product_log:{child_name:"-",seller:"-",created_at:"-",total_price:"-",products:[]}}},computed:{},watch:{},created:function(){},methods:{handleClickCancel:function(){this.dialogFormVisible=!1},show:function(t){console.log("val => ",t),this.product_log=t,this.dialogFormVisible=!0}}},d=Object(r.a)(u,function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("el-dialog",{attrs:{visible:t.dialogFormVisible,"close-on-click-modal":!1,title:"开单详情",width:"70%",top:"30px"},on:{"update:visible":function(e){t.dialogFormVisible=e}}},[l("div",{staticStyle:{padding:"10px"}},[l("el-row",{staticStyle:{"margin-bottom":"20px"},attrs:{gutter:10}},[l("el-col",{attrs:{span:4}},[l("span",[t._v("开单儿童：")]),t._v(t._s(t.product_log.child_name))]),t._v(" "),l("el-col",{attrs:{span:4}},[l("span",[t._v("接诊医生：")]),t._v(t._s(t.product_log.seller))]),t._v(" "),l("el-col",{attrs:{span:4}},[l("span",[t._v("总价：")]),t._v(t._s(t.product_log.total_price))]),t._v(" "),l("el-col",{attrs:{span:6}},[l("span",[t._v("开单日期：")]),t._v(t._s(t.product_log.selled_at))])],1),t._v(" "),l("el-table",{staticStyle:{width:"100%"},attrs:{data:t.product_log.products,border:""}},[l("el-table-column",{attrs:{prop:"name",label:"名称","min-width":"120"}}),t._v(" "),l("el-table-column",{attrs:{prop:"brand",label:"品牌","min-width":"180"}}),t._v(" "),l("el-table-column",{attrs:{prop:"serial",label:"系列","min-width":"180"}}),t._v(" "),l("el-table-column",{attrs:{prop:"price",label:"价格","min-width":"180"}})],1)],1),t._v(" "),l("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[l("el-button",{on:{click:t.handleClickCancel}},[t._v("关    闭")])],1)])},[],!1,null,null,null);d.options.__file="log_info.vue";var p=d.exports,m={components:{EditProduct:a.a,ChildSelect:c,LogInfo:p},data:function(){return{list:[],total:0,listQuery:{page:1,limit:20,name:void 0,brand:void 0,serial:void 0}}},created:function(){this.getList()},methods:{handleClickNew:function(){this.$refs.childSelect.show()},handleClickDelete:function(t){var e=this;this.$confirm("此操作将永久删除该记录, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){Object(i.b)({id:t.id}).then(function(t){e.$message({type:"success",message:t.message}),e.getList()})}).catch(function(){e.$message({type:"info",message:"已取消删除"})})},handleClickShow:function(t){this.$refs.logInfo.show(t)},handleClickEdit:function(t){console.log("aaaaa")},getList:function(){var t=this;Object(i.c)(this.listQuery).then(function(e){t.list=e.data.items,t.total=e.data.total})},handleCurrentChange:function(t){this.listQuery.page=t,this.getList()},handleSizeChange:function(t){this.listQuery.limit=t,this.getList()},handleFilterClear:function(){this.listQuery.name=void 0,this.listQuery.brand=void 0,this.listQuery.serial=void 0}}},h=(l("gKFr"),Object(r.a)(m,function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",[l("el-card",{staticClass:"box-card"},[l("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[l("span",[t._v("开单列表")])]),t._v(" "),l("div",{staticClass:"filter-container"},[l("el-button",{staticClass:"filter-item",attrs:{type:"success",icon:"el-icon-plus"},on:{click:t.handleClickNew}},[t._v("销售开单")])],1),t._v(" "),l("el-table",{staticStyle:{width:"100%","margin-top":"10px"},attrs:{data:t.list,border:""}},[l("el-table-column",{attrs:{label:"儿童姓名","min-width":"80"},scopedSlots:t._u([{key:"default",fn:function(e){return[l("router-link",{attrs:{to:"/preview/child/"+e.row.child_id}},[l("el-button",{attrs:{type:"text",size:"small"}},[t._v(t._s(e.row.child_name))])],1)]}}])}),t._v(" "),l("el-table-column",{attrs:{label:"接诊医生",prop:"seller","min-width":"80"}}),t._v(" "),l("el-table-column",{attrs:{label:"开单日期",prop:"selled_at","min-width":"80"}}),t._v(" "),l("el-table-column",{attrs:{label:"总价",prop:"total_price","min-width":"80"}}),t._v(" "),l("el-table-column",{attrs:{label:t.generateShow("common.operate"),"min-width":"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[l("el-button",{attrs:{size:"mini",type:"primary",plain:""},on:{click:function(l){t.handleClickShow(e.row)}}},[t._v("查看")]),t._v(" "),l("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(l){t.handleClickEdit(e.row)}}},[t._v("修改")]),t._v(" "),l("el-button",{attrs:{size:"mini"},on:{click:function(l){t.handleClickDelete(e.row)}}},[t._v("删除")])]}}])})],1),t._v(" "),l("div",{staticClass:"pagination-container"},[l("el-pagination",{directives:[{name:"show",rawName:"v-show",value:t.total>0,expression:"total>0"}],attrs:{"current-page":t.listQuery.page,"page-sizes":[10,20,30,50],"page-size":t.listQuery.limit,total:t.total,background:"",layout:"total, sizes, prev, pager, next, jumper"},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1)],1),t._v(" "),l("EditProduct",{ref:"editProduct",on:{"create-success":t.getList}}),t._v(" "),l("ChildSelect",{ref:"childSelect"}),t._v(" "),l("LogInfo",{ref:"logInfo"})],1)},[],!1,null,null,null));h.options.__file="logs.vue";e.default=h.exports},gKFr:function(t,e,l){"use strict";var i=l("Q8Zy");l.n(i).a},qzXL:function(t,e,l){"use strict";l.d(e,"c",function(){return a}),l.d(e,"a",function(){return n}),l.d(e,"b",function(){return o});var i=l("t3Un");function a(t){return Object(i.a)({url:"/api/a1/product_logs",method:"get",params:t})}function n(t){return Object(i.a)({url:"/api/a1/product_logs",method:"post",data:t})}function o(t){return Object(i.a)({url:"/api/a1/product_logs/"+t.id,method:"delete",params:t})}}}]);