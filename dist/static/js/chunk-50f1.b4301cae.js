(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-50f1"],{"9YUW":function(t,e,a){},P8la:function(t,e,a){"use strict";var i=a("m+1l");a.n(i).a},Ph8Z:function(t,e,a){"use strict";a.r(e);var i=a("QbLZ"),s=a.n(i),n=a("lHnu"),o=a("L2JU"),l=a("sNvZ"),r={data:function(){return{dialogVisible:!1,optionsData:[],value:void 0,loading:!1}},methods:{handleShow:function(){this.value=void 0,this.dialogVisible=!0},handleClickSubmit:function(){this.$emit("select-success",this.value),this.dialogVisible=!1},remoteMethod:function(t){var e=this;""!==t?(this.loading=!0,Object(l.a)({title:t}).then(function(t){e.optionsData=t.data,e.loading=!1})):this.optionsData=[]}}},c=a("KHd+"),u=Object(c.a)(r,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-dialog",{attrs:{visible:t.dialogVisible,title:"选择机构"},on:{"update:visible":function(e){t.dialogVisible=e}}},[a("el-select",{attrs:{"remote-method":t.remoteMethod,loading:t.loading,filterable:"",remote:"","reserve-keyword":"",clearable:"",placeholder:"请输入关键词"},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}},t._l(t.optionsData,function(t){return a("el-option",{key:t.id,attrs:{label:t.title,value:t.id}})})),t._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary"},on:{click:t.handleClickSubmit}},[t._v("提交")]),t._v(" "),a("el-button",{on:{click:function(e){t.dialogVisible=!1}}},[t._v("取消")])],1)],1)},[],!1,null,null,null);u.options.__file="index.vue";var d=u.exports,v=a("t3Un");var p={data:function(){return{dialogVisible:!1,value:void 0,loading:!1}},computed:s()({},Object(o.b)(["id","name"])),methods:{handleShow:function(){this.value=this.name,this.dialogVisible=!0},handleClickSubmit:function(){var t=this;(function(t){return Object(v.a)({url:"/api/a1/accounts/"+t.id,method:"put",params:t})})({id:this.id,name:this.value}).then(function(e){console.log("res => ",e),t.$store.commit("updateUserInfo",e.data),t.$emit("update-success",t.value),t.dialogVisible=!1})}}},f=Object(c.a)(p,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-dialog",{attrs:{visible:t.dialogVisible,title:"修改名称"},on:{"update:visible":function(e){t.dialogVisible=e}}},[a("el-row",[a("el-input",{attrs:{placeholder:"请输入名称"},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}})],1),t._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary"},on:{click:t.handleClickSubmit}},[t._v("提交")]),t._v(" "),a("el-button",{on:{click:function(e){t.dialogVisible=!1}}},[t._v("取消")])],1)],1)},[],!1,null,null,null);f.options.__file="edit_name.vue";var m=f.exports,_=a("0FX9"),h=a.n(_),b={components:{QRCode:h.a},data:function(){return{msg:"hello vue",codes:""}},mounted:function(){this.useqrcode()},methods:{useqrcode:function(){var t=document.querySelector("canvas"),e=window.location.origin,a=e+"/m/doctor?id="+this.$store.state.user.id;console.log("href => ",e),h.a.toCanvas(t,a,function(t){t&&console.error(t)})}}},g=(a("d/Kj"),a("P8la"),Object(c.a)(b,function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"qrcode-box",attrs:{id:"qrCode"}},[e("div",{attrs:{id:"code"}}),this._v(" "),e("canvas",{attrs:{id:"canvas"}})])}],!1,null,"0ac29492",null));g.options.__file="QRCode.vue";var C=g.exports,w={name:"PdfCode",components:{QRcode:C},props:{user:{type:Object,default:function(){return{name:"医生名称",jobTitle:"视光师",workingYears:0,description:"简介"}}}},data:function(){return{}},computed:s()({},Object(o.b)(["id","baseType"]))},x=(a("camu"),Object(c.a)(w,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{"text-align":"center"},attrs:{id:"pdfDom"}},[a("div",{staticClass:"container-doctor"},[t._m(0),t._v(" "),a("div",{staticClass:"doctor"},[a("h1",{staticClass:"title"},[t._v(t._s(t.user.organizationTitle))]),t._v(" "),a("div",{staticClass:"name"},[a("span",[t._v(t._s(t.user.name))]),t._v(" "),a("span",{staticClass:"c-color"},[t._v(t._s(t.user.jobTitle))])]),t._v(" "),a("div",{staticClass:"doctor-title"},[a("span",{staticClass:"c-blue"},[t._v(t._s(t.user.workingYears)+"年")]),t._v(" "),a("span",[t._v("视光经验")])]),t._v(" "),a("p",{staticClass:"info"},[t._v(t._s(t.user.description))])]),t._v(" "),"admin"!==t.baseType?a("QRcode"):t._e(),t._v(" "),a("p",[t._v("我是儿童视力健康的守门人")]),t._v(" "),a("p",[t._v("请扫码绑定我成为您的家庭视光师")])],1)])},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header"},[e("img",{attrs:{src:"",alt:""}})])}],!1,null,"26dc9dde",null));x.options.__file="pdf.vue";var y={components:{OrganizationSelect:d,QRcode:C,EditName:m,PdfCode:x.exports},data:function(){return{user:{id:void 0},exportVisible:!1}},computed:s()({},Object(o.b)(["id","baseType"]),{htmlTitle:function(){return"医生二维码"}}),created:function(){this.getData()},methods:{selectValue:function(t){var e=this;Object(n.e)({id:this.id,organization_id:t}).then(function(t){e.user=t.data})},handleClickEditName:function(){this.$refs.editName.handleShow()},handleClickOrganization:function(){this.$refs.organizationselect.handleShow()},getData:function(){var t=this;Object(n.d)({id:this.id}).then(function(e){t.exportVisible=!0,t.user=e.data,console.log(t.user)})}}},j=(a("R4D+"),Object(c.a)(y,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container"},[a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[t._v("账户信息")])]),t._v(" "),a("el-row",{staticStyle:{margin:"10px"}},[t.exportVisible?a("el-button",{staticClass:"filter-item",attrs:{type:"primary",icon:"el-icon-download"},on:{click:function(e){t.getPdf()}}},[t._v("导出医生二维码")]):t._e()],1),t._v(" "),a("el-row",{staticStyle:{"margin-bottom":"10px"},attrs:{type:"flex",justify:"space-around"}},[a("el-col",{attrs:{span:6}},[a("img",{staticStyle:{width:"100%"},attrs:{src:t.user.avatar}})])],1),t._v(" "),a("el-row",{staticStyle:{"margin-bottom":"20px"},attrs:{gutter:20}},[a("el-col",{attrs:{span:2,offset:1}},[a("span",{staticClass:"item-title"},[t._v("名称")])]),t._v(" "),a("el-col",{staticClass:"item-value",attrs:{span:18}},[a("span",[t._v(t._s(t.user.name||"无"))]),t._v(" "),a("a",{staticClass:"item-operate",on:{click:t.handleClickEditName}},[t._v("修改")])])],1),t._v(" "),a("el-row",{staticStyle:{"margin-bottom":"20px"},attrs:{gutter:20}},[a("el-col",{attrs:{span:2,offset:1}},[a("span",{staticClass:"item-title"},[t._v("所属机构")])]),t._v(" "),a("el-col",{staticClass:"item-value",attrs:{span:18}},[a("span",[t._v(t._s(t.user.organization||"无"))]),t._v(" "),"admin"!==t.baseType?a("a",{staticClass:"item-operate",on:{click:t.handleClickOrganization}},[t._v("设置")]):t._e()])],1),t._v(" "),a("el-row",{staticStyle:{"margin-bottom":"20px"},attrs:{gutter:20}},[a("el-col",{attrs:{span:2,offset:1}},[a("span",{staticClass:"item-title"},[t._v("创建日期")])]),t._v(" "),a("el-col",{staticClass:"item-value",attrs:{span:18}},[a("span",[t._v(t._s(t.user.createdAt))])])],1),t._v(" "),a("el-row",{staticStyle:{"margin-bottom":"20px"},attrs:{gutter:20}},[a("el-col",{attrs:{span:2,offset:1}},[a("span",{staticClass:"item-title"},[t._v("邮箱")])]),t._v(" "),a("el-col",{staticClass:"item-value",attrs:{span:18}},[a("span",[t._v(t._s(t.user.email||"无"))])])],1),t._v(" "),a("el-row",{staticStyle:{"margin-bottom":"20px"},attrs:{gutter:20}},[a("el-col",{attrs:{span:2,offset:1}},[a("span",{staticClass:"item-title"},[t._v("地址")])]),t._v(" "),a("el-col",{staticClass:"item-value",attrs:{span:18}},[a("span",[t._v(t._s(t.user.locationStreet||"无"))])])],1),t._v(" "),a("el-row",{staticStyle:{"margin-bottom":"20px"},attrs:{gutter:20}},[a("el-col",{attrs:{span:2,offset:1}},[a("span",{staticClass:"item-title"},[t._v("联系方式")])]),t._v(" "),a("el-col",{staticClass:"item-value",attrs:{span:18}},[a("span",[t._v(t._s(t.user.phone||"无"))])])],1),t._v(" "),a("el-row",{staticStyle:{"margin-bottom":"20px"},attrs:{gutter:20}},[a("el-col",{attrs:{span:2,offset:1}},[a("span",{staticClass:"item-title"},[t._v("简介")])]),t._v(" "),a("el-col",{staticClass:"item-value",attrs:{span:18}},[a("span",[t._v(t._s(t.user.description||"无"))])])],1),t._v(" "),a("div",{staticClass:"code-box"},[a("PdfCode",{attrs:{user:t.user}})],1)],1),t._v(" "),a("OrganizationSelect",{ref:"organizationselect",on:{"select-success":t.selectValue}}),t._v(" "),a("EditName",{ref:"editName",on:{"update-success":t.getData}})],1)},[],!1,null,"a59bc22c",null));j.options.__file="index.vue";e.default=j.exports},"R4D+":function(t,e,a){"use strict";var i=a("Uv/V");a.n(i).a},"Uv/V":function(t,e,a){},camu:function(t,e,a){"use strict";var i=a("sHXu");a.n(i).a},"d/Kj":function(t,e,a){"use strict";var i=a("9YUW");a.n(i).a},lHnu:function(t,e,a){"use strict";a.d(e,"c",function(){return s}),a.d(e,"d",function(){return n}),a.d(e,"f",function(){return o}),a.d(e,"e",function(){return l}),a.d(e,"a",function(){return r}),a.d(e,"b",function(){return c});var i=a("t3Un");function s(t){return Object(i.a)({url:"/api/a1/doctors",method:"get",params:t})}function n(t){return Object(i.a)({url:"/api/a1/doctors/"+t.id,method:"get",params:t})}function o(t){return Object(i.a)({url:"/api/a1/doctors/"+t.id,method:"put",data:t})}function l(t){return Object(i.a)({url:"/api/a1/doctors/"+t.id+"/update_doctor_organization",method:"put",data:t})}function r(t){return Object(i.a)({url:"/api/a1/doctors",method:"post",data:t})}function c(t){return Object(i.a)({url:"/api/a1/doctors/"+t.id,method:"delete",data:t})}},"m+1l":function(t,e,a){},sHXu:function(t,e,a){},sNvZ:function(t,e,a){"use strict";a.d(e,"a",function(){return s});var i=a("t3Un");function s(t){return Object(i.a)({url:"/api/a1/selects/organizations",method:"get",params:t})}}}]);