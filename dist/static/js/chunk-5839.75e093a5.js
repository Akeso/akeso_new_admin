(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-5839"],{Hv8Z:function(e,t,n){"use strict";n.d(t,"b",function(){return o}),n.d(t,"a",function(){return l});var a=n("t3Un");function o(e){return Object(a.a)({url:"/api/a1/summaries/whole",method:"get",params:e})}function l(e){return Object(a.a)({url:"/api/a1/summaries/sorting",method:"get",params:e})}},"TFz/":function(e,t,n){},ZYYJ:function(e,t,n){"use strict";n.r(t);var a=n("Hv8Z"),o=n("xttN"),l={data:function(){return{dialogVisible:!1,formLabelWidth:"100px",content:"",childIds:[]}},created:function(){},methods:{handlerClickCancel:function(){this.content="",this.dialogVisible=!1},handleShow:function(e){this.childIds=e,this.dialogVisible=!0},handleClickSubmit:function(){var e=this;this.content&&Object(o.a)({child_ids:this.childIds,content:this.content}).then(function(t){e.content="",e.dialogVisible=!1})}}},i=(n("f7xa"),n("KHd+")),s=Object(i.a)(l,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-dialog",{attrs:{visible:e.dialogVisible,modal:!0,"close-on-click-modal":!1,title:"聊天",width:"60%"},on:{"update:visible":function(t){e.dialogVisible=t}}},[n("el-input",{attrs:{autosize:{minRows:6,maxRows:10},type:"textarea"},model:{value:e.content,callback:function(t){e.content=t},expression:"content"}}),e._v(" "),n("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{on:{click:e.handlerClickCancel}},[e._v("取消")]),e._v(" "),n("el-button",{attrs:{type:"primary"},on:{click:e.handleClickSubmit}},[e._v("发送")])],1)],1)},[],!1,null,"36e692d8",null);s.options.__file="group_channel.vue";var r=[{key:"healthIndex",label:"健康评分"},{key:"wearTime",label:"戴镜时间"},{key:"outTime",label:"户外时间(120分钟)"},{key:"outTimeLux",label:"阳光摄入(36万Lux)"},{key:"stepCount",label:"步数(12000步)"},{key:"nearworkDay",label:"近距离用眼时间(260分钟)"},{key:"nearworkBurdenDay",label:"用眼负荷(720D)"},{key:"badPostureTimes",label:"不良姿势提醒(45次)"}],c=["healthIndex","wearTime","outTime","outTimeLux","nearworkDay","nearworkBurdenDay","badPostureTimes","stepCount"],u={components:{group_channel:s.exports},data:function(){return{checkAll:!0,checkedOptions:c,options:r,isIndeterminate:!1,list:null,total:null,todayCount:0,listLoading:!0,listQuery:{page:1,limit:20,importance:void 0,startDate:new Date,endDate:new Date,sortProp:"",sortOrder:""},multipleSelection:[]}},created:function(){this.getList()},methods:{handleClickSendMessages:function(){if(0!==this.multipleSelection.length){var e=this.multipleSelection.map(function(e){return e.childId});console.log("批量发送消息 => ",e),this.$refs.group_channel.handleShow(e)}else this.$message({message:"请选择要批量发送的用户！",type:"warning"})},handleSelectionChange:function(e){this.multipleSelection=e},handleFilter:function(){this.getList()},getList:function(){var e=this;Object(a.a)(this.listQuery).then(function(t){e.list=t.data.items,e.total=t.data.total})},hasOptions:function(e){return this.checkedOptions.indexOf(e)>-1},handleColumnSort:function(e){this.listQuery.sortProp=e.prop,this.listQuery.sortOrder=e.order,this.getList()},handleCheckAllChange:function(e){this.checkedOptions=e?c:[],this.isIndeterminate=!1},handleCheckedOptionsChange:function(e){var t=e.length;this.checkAll=t===this.options.length,this.isIndeterminate=t>0&&t<this.options.length},handleCurrentChange:function(e){this.listQuery.page=e,this.getList()},handleSizeChange:function(e){this.listQuery.limit=e,this.getList()}}},h=(n("dKY6"),Object(i.a)(u,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("el-card",{attrs:{"body-style":{padding:"0px 10px 10px 20px"}}},[n("div",{attrs:{slot:"header"},slot:"header"},[n("span",[e._v(e._s(e.generateShow("common.setting_show_fields")))])]),e._v(" "),n("el-checkbox",{attrs:{indeterminate:e.isIndeterminate},on:{change:e.handleCheckAllChange},model:{value:e.checkAll,callback:function(t){e.checkAll=t},expression:"checkAll"}},[e._v(e._s(e.generateShow("common.check_all")))]),e._v(" "),n("div",{staticStyle:{margin:"15px 0"}}),e._v(" "),n("el-checkbox-group",{on:{change:e.handleCheckedOptionsChange},model:{value:e.checkedOptions,callback:function(t){e.checkedOptions=t},expression:"checkedOptions"}},e._l(e.options,function(t){return n("el-checkbox",{key:t.key,attrs:{label:t.key,size:"small"}},[e._v(e._s(t.label))])})),e._v(" "),n("el-row",{staticStyle:{margin:"10px 0px 10px 0px"}},[n("el-col",[e._v("\n        "+e._s(e.generateShow("common.select_date"))+"\n        "),n("el-date-picker",{staticStyle:{width:"150px"},attrs:{clearable:!1,placeholder:e.generateShow("common.start_date"),type:"date",format:"yyyy-MM-dd","value-format":"yyyy-MM-dd"},model:{value:e.listQuery.startDate,callback:function(t){e.$set(e.listQuery,"startDate",t)},expression:"listQuery.startDate"}}),e._v("\n        至\n        "),n("el-date-picker",{staticStyle:{width:"150px"},attrs:{clearable:!1,placeholder:e.generateShow("common.end_date"),type:"date",format:"yyyy-MM-dd","value-format":"yyyy-MM-dd"},model:{value:e.listQuery.endDate,callback:function(t){e.$set(e.listQuery,"endDate",t)},expression:"listQuery.endDate"}}),e._v(" "),n("el-button",{staticClass:"filter-item",attrs:{type:"primary",icon:"el-icon-search"},on:{click:e.handleFilter}},[e._v(e._s(e.generateShow("common.search")))]),e._v(" "),n("el-button",{staticClass:"filter-item",attrs:{type:"primary",icon:"el-icon-phone"},on:{click:e.handleClickSendMessages}},[e._v(e._s(e.generateShow("common.send_messages")))])],1)],1),e._v(" "),n("el-table",{staticStyle:{width:"100%"},attrs:{data:e.list,border:""},on:{"sort-change":e.handleColumnSort,"selection-change":e.handleSelectionChange}},[n("el-table-column",{attrs:{type:"selection",width:"55"}}),e._v(" "),n("el-table-column",{attrs:{label:"姓名","min-width":"60"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("router-link",{attrs:{to:"/preview/child/"+t.row.childId}},[n("el-button",{attrs:{type:"text",size:"small"}},[e._v(e._s(t.row.name))])],1)]}}])}),e._v(" "),e.hasOptions("healthIndex")?n("el-table-column",{attrs:{label:e.generateShow("common.healthIndex"),prop:"healthIndex",sortable:"custom","min-width":"80"}}):e._e(),e._v(" "),e.hasOptions("wearTime")?n("el-table-column",{attrs:{label:e.generateShow("common.wearTime"),prop:"wearTime",sortable:"custom","min-width":"80"}}):e._e(),e._v(" "),e.hasOptions("outTime")?n("el-table-column",{attrs:{label:e.generateShow("common.outTime"),prop:"outTime",sortable:"custom","min-width":"80"}}):e._e(),e._v(" "),e.hasOptions("outTimeLux")?n("el-table-column",{attrs:{label:e.generateShow("common.outTimeLux"),prop:"outTimeLux",sortable:"custom","min-width":"80"}}):e._e(),e._v(" "),e.hasOptions("nearworkDay")?n("el-table-column",{attrs:{label:e.generateShow("common.nearworkDay"),prop:"nearworkDay",sortable:"custom","min-width":"80"}}):e._e(),e._v(" "),e.hasOptions("nearworkBurdenDay")?n("el-table-column",{attrs:{label:e.generateShow("common.nearworkBurdenDay"),prop:"nearworkBurdenDay",sortable:"custom","min-width":"80"}}):e._e(),e._v(" "),e.hasOptions("badPostureTimes")?n("el-table-column",{attrs:{label:e.generateShow("common.badPostureTimes"),prop:"badPostureTimes",sortable:"custom","min-width":"80"}}):e._e(),e._v(" "),e.hasOptions("stepCount")?n("el-table-column",{attrs:{label:e.generateShow("common.stepCount"),prop:"stepCount",sortable:"custom","min-width":"60"}}):e._e(),e._v(" "),n("el-table-column",{attrs:{label:e.generateShow("common.sync_days_count"),prop:"daysCount",sortable:"custom","min-width":"80"}})],1),e._v(" "),n("div",{staticClass:"pagination-container"},[n("el-pagination",{directives:[{name:"show",rawName:"v-show",value:e.total>0,expression:"total>0"}],attrs:{"current-page":e.listQuery.page,"page-sizes":[10,20,30,50],"page-size":e.listQuery.limit,total:e.total,background:"",layout:"total, sizes, prev, pager, next, jumper"},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)],1),e._v(" "),n("group_channel",{ref:"group_channel"})],1)},[],!1,null,"6026fc08",null));h.options.__file="sorting.vue";t.default=h.exports},dKY6:function(e,t,n){"use strict";var a=n("TFz/");n.n(a).a},f7xa:function(e,t,n){"use strict";var a=n("sIyX");n.n(a).a},sIyX:function(e,t,n){},xttN:function(e,t,n){"use strict";n.d(t,"c",function(){return o}),n.d(t,"b",function(){return l}),n.d(t,"a",function(){return i});var a=n("t3Un");function o(e){return Object(a.a)({url:"/api/a1/channel_logs",method:"get",params:e})}function l(e){return Object(a.a)({url:"/api/a1/channel_logs",method:"post",data:e})}function i(e){return Object(a.a)({url:"/api/a1/channel_logs/create_group",method:"post",data:e})}}}]);