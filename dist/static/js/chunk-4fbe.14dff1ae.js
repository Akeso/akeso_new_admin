(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-4fbe"],{FOVV:function(t,e,n){},LDya:function(t,e,n){"use strict";n.r(e);var r=n("P2sY"),i=n.n(r),a=n("jFur"),l=n("benB"),o=n("SF+J"),c={components:{ProductSelect:a.a},filters:{genderFilter:function(t){return{male:"男",female:"女",unknown:"未知"}[t]}},data:function(){return{child:{name:"",gender:"unknown",age:void 0,height:void 0,weight:void 0,phone:void 0},dialogFormVisible:!1,product_log:{child_id:this.$route.params.id,seller:"",selled_at:new Date,des:"",products:[]},total:null,total_price:0}},created:function(){this.getChild()},methods:{getChild:function(){var t=this;Object(o.b)({id:this.product_log.child_id}).then(function(e){t.child=e.data})},getSummaries:function(t){var e=this,n=t.columns,r=t.data,i=[];return n.forEach(function(t,n){if(0!==n){if(1!==n&&2!==n&&4!==n){var a=r.map(function(e){return Number(e[t.property])});a.every(function(t){return isNaN(t)})?i[n]="N/A":(i[n]=a.reduce(function(t,e){var n=Number(e);return isNaN(n)?t:t+e},0),e.total_price=i[n],i[n]+=" 元")}}else i[n]="总价"}),i},handleClickSave:function(){var t=this;if(0!==this.product_log.products.length){var e=this.product_log.products.map(function(t){return t.id}),n=this.product_log.products.map(function(t){return t.price});Object(l.a)(i()(this.product_log,{product_ids:e,prices:n,total_price:this.total_price})).then(function(e){console.log("res => ",e.data),t.$router.back()})}else this.$message({message:"请选择商品",type:"warning"})},handleClickDelete:function(t){this.product_log.products.splice(t,1)},selectProduct:function(t){console.log("val => ",t,"===> ",this.product_log),this.product_log.products.push(t)},handleClickProduct:function(){this.$refs.productSelect.show()}}},u=(n("akZT"),n("KHd+")),s=Object(u.a)(c,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("el-row",{staticStyle:{margin:"0px 5px"},attrs:{gutter:20}},[n("el-col",{attrs:{span:4}},[n("div",{staticStyle:{"margin-top":"60px"}},[n("h3",[t._v(t._s(t.child.name))]),t._v(" "),n("p",[t._v("性别："+t._s(t._f("genderFilter")(t.child.gender)))]),t._v(" "),n("p",[t._v("年龄："+t._s(t.child.age)+"岁")]),t._v(" "),n("p",[t._v("身高："+t._s(t.child.height)+"CM")]),t._v(" "),n("p",[t._v("体重："+t._s(t.child.weight)+"KG")]),t._v(" "),n("p",[t._v("手机号："+t._s(t.child.phone))])])]),t._v(" "),n("el-col",{attrs:{span:20}},[n("el-row",{staticClass:"mg-t"},[n("el-col",[n("el-button",{attrs:{type:"primary"},on:{click:t.handleClickProduct}},[t._v("添加产品")]),t._v(" "),n("span",[t._v("问诊医生：")]),n("el-input",{staticClass:"filter-item",staticStyle:{width:"200px"},attrs:{placeholder:"输入问诊医生",label:"名称",clearable:""},model:{value:t.product_log.seller,callback:function(e){t.$set(t.product_log,"seller",e)},expression:"product_log.seller"}}),t._v(" "),n("span",[t._v("销售日期：")]),n("el-date-picker",{attrs:{type:"date",placeholder:"选择日期"},model:{value:t.product_log.selled_at,callback:function(e){t.$set(t.product_log,"selled_at",e)},expression:"product_log.selled_at"}})],1)],1),t._v(" "),n("el-table",{staticStyle:{width:"100%","margin-top":"10px"},attrs:{data:t.product_log.products,"summary-method":t.getSummaries,border:"","show-summary":"",height:"450"}},[n("el-table-column",{attrs:{label:t.generateShow("product.name"),prop:"name","min-width":"80"}}),t._v(" "),n("el-table-column",{attrs:{label:t.generateShow("product.brand"),prop:"brand","min-width":"80"}}),t._v(" "),n("el-table-column",{attrs:{label:t.generateShow("product.serial"),prop:"serial","min-width":"80"}}),t._v(" "),n("el-table-column",{attrs:{label:t.generateShow("product.price"),prop:"price","min-width":"80"},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.row;return[n("el-input",{attrs:{placeholder:"请输入价格"},model:{value:r.price,callback:function(e){t.$set(r,"price",e)},expression:"row.price"}})]}}])}),t._v(" "),n("el-table-column",{attrs:{label:t.generateShow("common.operate"),"min-width":"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-button",{attrs:{size:"mini"},on:{click:function(n){t.handleClickDelete(e.$index)}}},[t._v("删除")])]}}])})],1),t._v(" "),n("div",{staticStyle:{"margin-top":"5px"}},[t._v("\n        备注："),n("br"),t._v(" "),n("el-input",{staticClass:"filter-item",staticStyle:{width:"400px","margin-top":"5px"},attrs:{rows:2,placeholder:"输入备注",label:"备注",type:"textarea",clearable:""},model:{value:t.product_log.des,callback:function(e){t.$set(t.product_log,"des",e)},expression:"product_log.des"}})],1),t._v(" "),n("div",{staticClass:"mg-t"},[n("el-button",{attrs:{type:"primary"},on:{click:t.handleClickSave}},[t._v("保存")])],1)],1)],1),t._v(" "),n("ProductSelect",{ref:"productSelect",on:{"select-product":t.selectProduct}})],1)},[],!1,null,null,null);s.options.__file="billing_child.vue";e.default=s.exports},"SF+J":function(t,e,n){"use strict";n.d(e,"e",function(){return i}),n.d(e,"b",function(){return a}),n.d(e,"d",function(){return l}),n.d(e,"c",function(){return o}),n.d(e,"a",function(){return c}),n.d(e,"g",function(){return u}),n.d(e,"h",function(){return s}),n.d(e,"i",function(){return d}),n.d(e,"f",function(){return p});var r=n("t3Un");function i(t){return Object(r.a)({url:"/api/a1/children",method:"get",params:t})}function a(t){return Object(r.a)({url:"/api/a1/children/"+t.id,method:"get"})}function l(t){return Object(r.a)({url:"/api/a1/children/with_equipment",method:"get",params:t})}function o(t){return Object(r.a)({url:"/api/a1/children/index_en",method:"get",params:t})}function c(t){return Object(r.a)({url:"/api/a1/children",method:"post",data:t})}function u(t){return Object(r.a)({url:"/api/a1/children/"+t.id+"/unbind_doctor",method:"get"})}function s(t){return Object(r.a)({url:"/api/a1/children/"+t.id,method:"put",data:t})}function d(t){return Object(r.a)({url:"/api/a1/children/update_tags",method:"put",data:t})}function p(t){return console.log("query => ",t),Object(r.a)({url:"/api/a1/children/self_index",method:"get",params:t})}},THlk:function(t,e,n){"use strict";n.d(e,"c",function(){return i}),n.d(e,"a",function(){return a}),n.d(e,"d",function(){return l}),n.d(e,"b",function(){return o});var r=n("t3Un");function i(t){return Object(r.a)({url:"/api/a1/products",method:"get",params:t})}function a(t){return Object(r.a)({url:"/api/a1/products",method:"post",data:t})}function l(t){return Object(r.a)({url:"/api/a1/products/"+t.id,method:"put",data:t})}function o(t){return Object(r.a)({url:"/api/a1/products/"+t.id,method:"delete",params:t})}},akZT:function(t,e,n){"use strict";var r=n("FOVV");n.n(r).a},benB:function(t,e,n){"use strict";n.d(e,"c",function(){return i}),n.d(e,"a",function(){return a}),n.d(e,"d",function(){return l}),n.d(e,"b",function(){return o});var r=n("t3Un");function i(t){return Object(r.a)({url:"/api/a1/indents",method:"get",params:t})}function a(t){return Object(r.a)({url:"/api/a1/indents",method:"post",data:t})}function l(t){return Object(r.a)({url:"/api/a1/indents/"+t.id,method:"put",data:t})}function o(t){return Object(r.a)({url:"/api/a1/indents/"+t.id,method:"delete",params:t})}},jFur:function(t,e,n){"use strict";var r=n("THlk"),i={filters:{genderFilter:function(t){return{male:"男",female:"女",unknown:"未知"}[t]}},data:function(){return{dialogFormVisible:!1,list:null,total:null,listQuery:{page:1,limit:10,name:void 0}}},computed:{},watch:{},created:function(){},methods:{getList:function(){var t=this;Object(r.c)(this.listQuery).then(function(e){t.list=e.data.items,t.total=e.data.total})},handleClickSelect:function(t){this.$emit("select-product",t),this.dialogFormVisible=!1},handleClickSearch:function(t){this.getList()},handleCurrentChange:function(t){this.listQuery.page=t,this.getList()},handleSizeChange:function(t){this.listQuery.limit=t,this.getList()},show:function(){this.getList(),this.dialogFormVisible=!0}}},a=n("KHd+"),l=Object(a.a)(i,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-dialog",{attrs:{visible:t.dialogFormVisible,"close-on-click-modal":!1,title:"选择商品",width:"70%",top:"30px","append-to-body":""},on:{"update:visible":function(e){t.dialogFormVisible=e}}},[n("el-row",[n("el-col",[n("el-input",{staticClass:"filter-item",staticStyle:{width:"200px"},attrs:{placeholder:"输入名称",label:"名称",clearable:""},model:{value:t.listQuery.name,callback:function(e){t.$set(t.listQuery,"name",e)},expression:"listQuery.name"}}),t._v(" "),n("el-button",{staticClass:"filter-item",attrs:{type:"primary",icon:"el-icon-search"},on:{click:t.handleClickSearch}},[t._v(t._s(t.generateShow("common.search")))])],1)],1),t._v(" "),n("el-table",{staticStyle:{width:"100%","margin-top":"10px"},attrs:{data:t.list,border:""}},[n("el-table-column",{attrs:{label:"名称","min-width":"60",prop:"name"}}),t._v(" "),n("el-table-column",{attrs:{label:"品牌",prop:"brand","min-width":"40"}}),t._v(" "),n("el-table-column",{attrs:{label:"类别",prop:"serial","min-width":"40"}}),t._v(" "),n("el-table-column",{attrs:{label:"价格",prop:"price","min-width":"100"}}),t._v(" "),n("el-table-column",{attrs:{label:t.generateShow("common.operate"),"min-width":"80"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-button",{attrs:{size:"small"},on:{click:function(n){t.handleClickSelect(e.row)}}},[t._v("选择")])]}}])})],1),t._v(" "),n("div",{staticClass:"pagination-container"},[n("el-pagination",{directives:[{name:"show",rawName:"v-show",value:t.total>0,expression:"total>0"}],attrs:{"current-page":t.listQuery.page,"page-sizes":[10,20,30,50],"page-size":t.listQuery.limit,total:t.total,background:"",layout:"total, sizes, prev, pager, next, jumper"},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1)],1)},[],!1,null,null,null);l.options.__file="product_select.vue";e.a=l.exports}}]);