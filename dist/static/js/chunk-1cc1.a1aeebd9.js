(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-1cc1"],{"6OI3":function(e,n,t){"use strict";var o=t("Yec0");t.n(o).a},Yec0:function(e,n,t){},c11S:function(e,n,t){"use strict";var o=t("gTgX");t.n(o).a},gTgX:function(e,n,t){},ntYl:function(e,n,t){"use strict";t.r(n);var o={name:"Login",data:function(){return{loginForm:{username:"test@akeso.cn",password:"akeso_110"},loginRules:{username:[{required:!0,trigger:"blur",validator:function(e,n,t){!function(e){return e.length>=0}(n)?t(new Error("请输入正确的用户名")):t()}}],password:[{required:!0,trigger:"blur",validator:function(e,n,t){n.length<5?t(new Error("密码不能小于5位")):t()}}]},loading:!1,pwdType:"password",redirect:void 0}},watch:{$route:{handler:function(e){this.redirect=e.query&&e.query.redirect},immediate:!0}},methods:{showPwd:function(){"password"===this.pwdType?this.pwdType="":this.pwdType="password"},handleLogin:function(){var e=this;this.$refs.loginForm.validate(function(n){if(!n)return console.log("error submit!!"),!1;e.loading=!0,e.$store.dispatch("Login",e.loginForm).then(function(){e.loading=!1,e.$router.push({path:e.redirect||"/"})}).catch(function(n){e.loading=!1})})}}},s=(t("c11S"),t("6OI3"),t("KHd+")),r=Object(s.a)(o,function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"login-container"},[t("el-form",{ref:"loginForm",staticClass:"login-form",attrs:{model:e.loginForm,rules:e.loginRules,"auto-complete":"on","label-position":"left"}},[t("h3",{staticClass:"title"},[e._v("Akeso")]),e._v(" "),t("el-form-item",{attrs:{prop:"username"}},[t("span",{staticClass:"svg-container"},[t("svg-icon",{attrs:{"icon-class":"user"}})],1),e._v(" "),t("el-input",{attrs:{placeholder:e.$t("login.username"),name:"username",type:"text","auto-complete":"on"},model:{value:e.loginForm.username,callback:function(n){e.$set(e.loginForm,"username",n)},expression:"loginForm.username"}})],1),e._v(" "),t("el-form-item",{attrs:{prop:"password"}},[t("span",{staticClass:"svg-container"},[t("svg-icon",{attrs:{"icon-class":"password"}})],1),e._v(" "),t("el-input",{attrs:{type:e.pwdType,name:"password","auto-complete":"on",placeholder:"密码"},nativeOn:{keyup:function(n){return"button"in n||!e._k(n.keyCode,"enter",13,n.key,"Enter")?e.handleLogin(n):null}},model:{value:e.loginForm.password,callback:function(n){e.$set(e.loginForm,"password",n)},expression:"loginForm.password"}}),e._v(" "),t("span",{staticClass:"show-pwd",on:{click:e.showPwd}},[t("svg-icon",{attrs:{"icon-class":"password"===e.pwdType?"eye":"eye-open"}})],1)],1),e._v(" "),t("el-form-item",[t("el-button",{staticStyle:{width:"100%"},attrs:{loading:e.loading,type:"primary"},nativeOn:{click:function(n){return n.preventDefault(),e.handleLogin(n)}}},[e._v("\n        "+e._s(e.$t("login.logIn"))+"\n      ")])],1),e._v(" "),t("div",{staticClass:"tips"},[t("span",{staticStyle:{"margin-right":"20px"}},[e._v("AKESO信息管理平台 技术支持：400-778-0080")])])],1)],1)},[],!1,null,"7e6b730d",null);r.options.__file="index.vue";n.default=r.exports}}]);