(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-64e1"],{"+qG1":function(t,e,i){"use strict";i.d(e,"d",function(){return n}),i.d(e,"a",function(){return c}),i.d(e,"c",function(){return d}),i.d(e,"b",function(){return o});var r=i("t3Un");function n(t){return Object(r.a)({url:"/api/m1/children",method:"get",params:t})}function c(t){return Object(r.a)({url:"/api/m1/children/bind_doctor",method:"get",params:t})}function d(t){return Object(r.a)({url:"/api/m1/children/"+t.child_id,method:"get",params:t})}function o(t){return Object(r.a)({url:"/api/m1/children",method:"post",data:t})}},lg3p:function(t,e,i){"use strict";i.r(e);var r=i("+qG1"),n={data:function(){return{errorVisible:!1,errorText:"请选择绑定儿童",children:[],child_id:void 0,user_id:this.$route.query.user_id,doctor_id:this.$route.query.doctor_id}},created:function(){this.getList()},methods:{getList:function(){var t=this;this.children=Object(r.d)({user_id:this.user_id}).then(function(e){t.children=e.data.items,console.log("chidlren => ",t.children)})},handleClickAdd:function(){this.$router.push({path:"/mobile/create_child",query:{user_id:this.user_id,doctor_id:this.doctor_id}})},handleClickNext:function(){var t=this;void 0!==this.child_id?Object(r.a)({child_id:this.child_id,doctor_id:this.doctor_id}).then(function(e){t.$confirm("绑定成功?","提示",{confirmButtonText:"下一步",cancelButtonText:"",type:"success"}).then(function(){t.$router.push({path:"/mobile/bind_success",query:{child_id:t.child_id}})}).catch(function(){}),console.log("绑定成功")}):this.errorVisible=!0},changeSelectChild:function(t){this.errorVisible=!1}}},c=i("KHd+"),d=Object(c.a)(n,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticStyle:{padding:"20px"}},[t._m(0),t._v(" "),t.errorVisible?i("el-alert",{staticStyle:{"margin-bottom":"10px"},attrs:{title:t.errorText,type:"error"}}):t._e(),t._v(" "),i("el-radio-group",{on:{change:t.changeSelectChild},model:{value:t.child_id,callback:function(e){t.child_id=e},expression:"child_id"}},t._l(t.children,function(e){return i("div",{key:e.id},[i("el-radio",{staticStyle:{margin:"10px"},attrs:{disabled:e.bindState,label:e.id,border:""}},[t._v(t._s(e.name)+"("+t._s(e.age)+"岁) "+t._s(e.bindState?"已绑定":""))]),t._v(" "),i("br")],1)})),t._v(" "),i("div",{staticStyle:{"text-align":"center"}},[i("el-button",{attrs:{type:"primary"},on:{click:t.handleClickAdd}},[t._v("添加孩子")]),t._v(" "),i("el-button",{attrs:{type:"primary"},on:{click:t.handleClickNext}},[t._v("下一步")])],1)],1)},[function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticStyle:{"font-size":"18px","line-height":"30px"}},[e("span",[this._v("您已注册成为AKESO的用户，")]),e("br"),this._v(" "),e("span",[this._v("请您选择您需要绑定医生的孩子。")])])}],!1,null,null,null);d.options.__file="child_select.vue";e.default=d.exports}}]);