(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-4351"],{Ph8Z:function(t,e,a){"use strict";a.r(e);var s=a("QbLZ"),i=a.n(s),n=a("lHnu"),o=a("L2JU"),l=a("sNvZ"),r={data:function(){return{dialogVisible:!1,optionsData:[],value:void 0,loading:!1}},methods:{handleShow:function(){this.value=void 0,this.dialogVisible=!0},handleClickSubmit:function(){this.$emit("select-success",this.value),this.dialogVisible=!1},remoteMethod:function(t){var e=this;""!==t?(this.loading=!0,Object(l.a)({title:t}).then(function(t){e.optionsData=t.data,e.loading=!1})):this.optionsData=[]}}},c=a("KHd+"),u=Object(c.a)(r,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-dialog",{attrs:{visible:t.dialogVisible,title:"选择机构"},on:{"update:visible":function(e){t.dialogVisible=e}}},[a("el-select",{attrs:{"remote-method":t.remoteMethod,loading:t.loading,filterable:"",remote:"","reserve-keyword":"",clearable:"",placeholder:"请输入关键词"},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}},t._l(t.optionsData,function(t){return a("el-option",{key:t.id,attrs:{label:t.title,value:t.id}})})),t._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary"},on:{click:t.handleClickSubmit}},[t._v("提交")]),t._v(" "),a("el-button",{on:{click:function(e){t.dialogVisible=!1}}},[t._v("取消")])],1)],1)},[],!1,null,null,null);u.options.__file="index.vue";var d={components:{OrganizationSelect:u.exports},data:function(){return{user:{id:void 0}}},computed:i()({},Object(o.b)(["id"])),created:function(){this.getData()},methods:{selectValue:function(t){var e=this;Object(n.e)({id:this.id,organization_id:t}).then(function(t){e.user=t.data})},handleClickOrganization:function(){this.$refs.organizationselect.handleShow()},getData:function(){var t=this;Object(n.d)({id:this.id}).then(function(e){t.user=e.data})}}},v=(a("v3fy"),Object(c.a)(d,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container"},[a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[t._v("账户信息")])]),t._v(" "),a("el-row",{staticStyle:{"margin-bottom":"10px"},attrs:{type:"flex",justify:"space-around"}},[a("el-col",{attrs:{span:6}},[a("img",{staticStyle:{width:"100%"},attrs:{src:t.user.avatar}})])],1),t._v(" "),a("el-row",{staticStyle:{"margin-bottom":"20px"},attrs:{gutter:20}},[a("el-col",{attrs:{span:2,offset:1}},[a("span",{staticClass:"item-title"},[t._v("名称")])]),t._v(" "),a("el-col",{staticClass:"item-value",attrs:{span:18}},[a("span",[t._v(t._s(t.user.name||"无"))]),t._v(" "),a("a",{staticClass:"item-operate"},[t._v("修改")])])],1),t._v(" "),a("el-row",{staticStyle:{"margin-bottom":"20px"},attrs:{gutter:20}},[a("el-col",{attrs:{span:2,offset:1}},[a("span",{staticClass:"item-title"},[t._v("所属机构")])]),t._v(" "),a("el-col",{staticClass:"item-value",attrs:{span:18}},[a("span",[t._v(t._s(t.user.organization||"无"))]),t._v(" "),a("a",{staticClass:"item-operate",on:{click:t.handleClickOrganization}},[t._v("设置")])])],1),t._v(" "),a("el-row",{staticStyle:{"margin-bottom":"20px"},attrs:{gutter:20}},[a("el-col",{attrs:{span:2,offset:1}},[a("span",{staticClass:"item-title"},[t._v("创建日期")])]),t._v(" "),a("el-col",{staticClass:"item-value",attrs:{span:18}},[a("span",[t._v(t._s(t.user.createdAt))])])],1),t._v(" "),a("el-row",{staticStyle:{"margin-bottom":"20px"},attrs:{gutter:20}},[a("el-col",{attrs:{span:2,offset:1}},[a("span",{staticClass:"item-title"},[t._v("邮箱")])]),t._v(" "),a("el-col",{staticClass:"item-value",attrs:{span:18}},[a("span",[t._v(t._s(t.user.email||"无"))])])],1),t._v(" "),a("el-row",{staticStyle:{"margin-bottom":"20px"},attrs:{gutter:20}},[a("el-col",{attrs:{span:2,offset:1}},[a("span",{staticClass:"item-title"},[t._v("地址")])]),t._v(" "),a("el-col",{staticClass:"item-value",attrs:{span:18}},[a("span",[t._v(t._s(t.user.locationStreet||"无"))])])],1),t._v(" "),a("el-row",{staticStyle:{"margin-bottom":"20px"},attrs:{gutter:20}},[a("el-col",{attrs:{span:2,offset:1}},[a("span",{staticClass:"item-title"},[t._v("联系方式")])]),t._v(" "),a("el-col",{staticClass:"item-value",attrs:{span:18}},[a("span",[t._v(t._s(t.user.phone||"无"))])])],1),t._v(" "),a("el-row",{staticStyle:{"margin-bottom":"20px"},attrs:{gutter:20}},[a("el-col",{attrs:{span:2,offset:1}},[a("span",{staticClass:"item-title"},[t._v("简介")])]),t._v(" "),a("el-col",{staticClass:"item-value",attrs:{span:18}},[a("span",[t._v(t._s(t.user.description||"无"))])])],1)],1),t._v(" "),a("OrganizationSelect",{ref:"organizationselect",on:{"select-success":t.selectValue}})],1)},[],!1,null,"141155e8",null));v.options.__file="index.vue";e.default=v.exports},lHnu:function(t,e,a){"use strict";a.d(e,"c",function(){return i}),a.d(e,"d",function(){return n}),a.d(e,"e",function(){return o}),a.d(e,"a",function(){return l}),a.d(e,"b",function(){return r});var s=a("t3Un");function i(t){return Object(s.a)({url:"/api/a1/doctors",method:"get",params:t})}function n(t){return Object(s.a)({url:"/api/a1/doctors/"+t.id,method:"get",params:t})}function o(t){return Object(s.a)({url:"/api/a1/doctors/"+t.id,method:"put",data:t})}function l(t){return Object(s.a)({url:"/api/a1/doctors",method:"post",data:t})}function r(t){return Object(s.a)({url:"/api/a1/doctors/"+t.id,method:"delete",data:t})}},sNvZ:function(t,e,a){"use strict";a.d(e,"a",function(){return i});var s=a("t3Un");function i(t){return Object(s.a)({url:"/api/a1/selects/organizations",method:"get",params:t})}},uHqe:function(t,e,a){},v3fy:function(t,e,a){"use strict";var s=a("uHqe");a.n(s).a}}]);