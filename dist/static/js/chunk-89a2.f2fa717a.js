(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-89a2"],{"5I7U":function(t,a,e){"use strict";var s=e("klGT");e.n(s).a},gmZR:function(t,a,e){"use strict";e.r(a);var s=e("RLrD"),l=e("N5aa"),r=e("TrEY"),i=e("ZwYG"),o=e("10gM"),c=e("zdlf"),n=e("T1sT"),v=e("JJ3l"),d=e("d0DV"),_=e("XUEf"),u=e("7Qib"),p=e("xRWj"),C=e("TWaW"),h={components:{UploadExcelComponent:l.a,BarChart:r.a,echartsLegend:d.default,SunshineBarChart:i.a,StepBarChart:o.a,BadEyeBarChart:c.a,BadPostureBarChart:n.a,EyestrainBarChart:v.a,QRcode:_.a,factorsTab:p.a,highRisTabel:C.a},data:function(){return{multiple:!1,fileName:"",selectDate:"",selectSection:{startDate:new Date,endDate:new Date},info:{id:void 0},outTime:{average:0,upRate:0},luxDay:{average:0,upRate:0},stepCount:{average:0,upRate:0},nearworkBurdenDay:{average:0,upRate:0},badPostureTimes:{average:0,upRate:0},nearworkDay:{average:0,upRate:0},infoData:{school:"——",clasGrade:"——",totalCount:0,maleCount:0,femaleCount:0,visionBadCount:0,visionGoodCount:0},infoStart:"",infoEnd:"",riskChildren:[],healthScore:"无"}},computed:{htmlTitle:function(){return"导出报告"}},methods:{handleRemove:function(t,a){console.log(t,a)},handlePreview:function(t){console.log(t)},handleSuccess:function(t,a){console.log("res => ",t),console.log("file => ",a),this.info=t.data},beforeRemove:function(t,a){},handleClick:function(){var t=this,a={excel_roll_id:this.info.id,start_date:this.selectSection.startDate,end_date:this.selectSection.endDate};console.log("info => ",this.info,a),Object(s.c)(a).then(function(a){console.log("res => ",a.data),t.outTime=a.data.outTime,t.luxDay=a.data.luxDay,t.stepCount=a.data.stepCount,t.nearworkBurdenDay=a.data.nearworkBurdenDay,t.nearworkDay=a.data.nearworkDay,t.badPostureTimes=a.data.badPostureTimes,t.infoData=a.data.info,t.infoStart=Object(u.a)(t.selectSection.startDate),t.infoEnd=Object(u.a)(t.selectSection.endDate),t.riskChildren=a.data.riskChildren,t.healthScore=a.data.healthScore})},downloadExc:function(){window.location.href="https://akeso.com.cn/template/report_template.xlsx"}}},f=(e("5I7U"),e("KHd+")),m=Object(f.a)(h,function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"box-container"},[e("el-row",{attrs:{gutter:20}},[e("el-col",{attrs:{xs:24,sm:24,lg:10}},[e("el-upload",{staticClass:"upload-demo",attrs:{"on-preview":t.handlePreview,"on-remove":t.handleRemove,"before-remove":t.beforeRemove,"on-success":t.handleSuccess,limit:1,accept:".xlsx, .xls",action:"/api/common/excels/upload_report"}},[e("div",{staticClass:"overflow"},[e("el-button",{staticClass:"left",attrs:{size:"small",type:"primary"}},[t._v("上传Excel")]),t._v(" "),e("el-button",{staticClass:"left m-l-2",attrs:{size:"small"},on:{click:function(a){return a.stopPropagation(),t.downloadExc(a)}}},[t._v("下载Excel模板")]),t._v(" "),e("div",{staticClass:"el-upload__tip c-red left tit-btn",attrs:{slot:"tip"},slot:"tip"},[t._v("只能上传.xlsx, .xls文件")])],1)])],1)],1),t._v(" "),e("el-row",{staticClass:"m-t-2",attrs:{gutter:20}},[e("el-col",[t._v("\n      选择日期\n      "),e("el-date-picker",{staticStyle:{width:"150px"},attrs:{clearable:!1,type:"date",format:"yyyy-MM-dd","value-format":"yyyy-MM-dd",placeholder:"选择日期"},model:{value:t.selectSection.startDate,callback:function(a){t.$set(t.selectSection,"startDate",a)},expression:"selectSection.startDate"}}),t._v("\n      至\n      "),e("el-date-picker",{staticStyle:{width:"150px"},attrs:{clearable:!1,type:"date",format:"yyyy-MM-dd","value-format":"yyyy-MM-dd",placeholder:"选择日期"},model:{value:t.selectSection.endDate,callback:function(a){t.$set(t.selectSection,"endDate",a)},expression:"selectSection.endDate"}}),t._v(" "),e("el-button",{staticClass:"filter-item",attrs:{type:"primary"},on:{click:t.handleClick}},[t._v("生成报告")])],1)],1),t._v(" "),e("el-row",{staticClass:"position"},[e("el-button",{staticClass:"pdf-item right",attrs:{type:"primary"},on:{click:function(a){t.getPdfs("#pdfDom","报告")}}},[t._v("生成PDF")]),t._v(" "),e("el-card",{staticClass:"box-card",attrs:{id:"pdfDom"}},[e("div",{staticClass:"clearfix header"},[e("h1",[t._v("青少年校园用眼健康因素监测报告")]),t._v(" "),e("div",{staticClass:"header-info"},[e("span",{staticClass:"item"},[t._v("学校："+t._s(t.infoData.school))]),t._v(" "),e("span",{staticClass:"item"},[t._v("班级："+t._s(t.infoData.clasGrade))]),t._v(" "),e("span",{staticClass:"item"},[t._v("人数："+t._s(t.infoData.totalCount)+"人")]),t._v(" "),e("span",{staticClass:"item"},[t._v("男生："+t._s(t.infoData.maleCount)+"人")]),t._v(" "),e("span",{staticClass:"item"},[t._v("女生："+t._s(t.infoData.femaleCount)+"人")])]),t._v(" "),e("div",{staticClass:"header-info"},[e("span",{staticClass:"item"},[t._v("近视："+t._s(t.infoData.visionBadCount)+"人")]),t._v(" "),e("span",{staticClass:"item"},[t._v("非近视："+t._s(t.infoData.visionGoodCount)+"人")]),t._v(" "),e("span",[t._v("测评时间："+t._s(t.infoStart)+" - "+t._s(t.infoEnd))])]),t._v(" "),e("div",{staticClass:"score"},[t._v(t._s(t.healthScore))])]),t._v(" "),e("el-row",[e("el-col",{staticClass:"info-guide"},[t._v("为积极响应国家号召，紧跟习近平总书记和教育部等八部委联合印发的《综合防控儿童青少年近视实施方案》中“一增一减”（即增加户外活动时间，减少用眼负担）的重要指导政策，建立以在校学生为主体，基于可穿戴健康设备的青少年用眼健康体质大数据监测，通过家庭学生共同参与方式进行健康教育及预防近视健康行为促进行动。该报告将协助当地政府掌握当地近视情况，落实国家近视防控工作，帮助医生确定近视度数增长主因，为学生提供个性化精准近视防控诊疗方案，帮助学校和父母更有针对性地采取行动，为儿童青少年视力健康发育的全过程、全周期提供保障，切实有效降低当地在校学生近视率。")])],1),t._v(" "),e("el-row",{attrs:{gutter:32}},[e("el-col",{attrs:{xs:24,sm:24,lg:24}},[e("el-row",[e("el-col",{staticClass:"item-name"},[e("span",{staticClass:"border-left"}),e("span",[t._v("健康因素")])])],1),t._v(" "),e("el-row",{attrs:{gutter:32}},[e("el-col",{attrs:{xs:24,sm:24,lg:8}},[e("div",{staticClass:"title-header"},[e("p",{staticClass:"left"},[t._v("户外时间参考值120分钟/天")])]),t._v(" "),e("echarts-legend"),t._v(" "),e("div",{staticClass:"chart-wrapper"},[e("bar-chart",{attrs:{"out-time":t.outTime}})],1),t._v(" "),e("div",{staticClass:"info-con b-gray"},[e("h3",{staticClass:"c-blue"},[t._v("户外时间平均值为"+t._s(t.outTime.average)+" 分钟/天 ")]),t._v(" "),e("h3",{staticClass:"c-blue"},[t._v("当前班级整体达标率为"+t._s(t.outTime.upRate)+"%")]),t._v(" "),e("p",[t._v("未达标的学生建议培养户外运动爱好，利用好碎片时间去户外运动。")]),t._v(" "),e("p",[t._v("已达标的学生请给予鼓励，同时在户外活动时注意防晒和安全。")])])],1),t._v(" "),e("el-col",{attrs:{xs:24,sm:24,lg:8}},[e("div",{staticClass:"title-header"},[e("p",{staticClass:"left"},[t._v("户外阳光摄入量建议36Wlux/天 ")])]),t._v(" "),e("echarts-legend"),t._v(" "),e("div",{staticClass:"chart-wrapper"},[e("sunshine-bar-chart",{attrs:{"lux-day":t.luxDay}})],1),t._v(" "),e("div",{staticClass:"info-con b-gray"},[e("h3",{staticClass:"c-blue"},[t._v("户外阳光摄入量平均值"+t._s(t.luxDay.average)+"lux/天")]),t._v(" "),e("h3",{staticClass:"c-blue"},[t._v("当前班级整体达标率为"+t._s(t.luxDay.upRate)+"%")]),t._v(" "),e("p",[t._v("未达标的学生请有意识地在课间，上学路上及周末去户外沐浴阳光。")]),t._v(" "),e("p",[t._v("已达标的学生佩戴太阳帽或太阳镜避免紫外线对眼睛与皮肤的伤害。")])])],1),t._v(" "),e("el-col",{attrs:{xs:24,sm:24,lg:8}},[e("div",{staticClass:"title-header"},[e("p",{staticClass:"left"},[t._v("运动步数建议12000步/天")])]),t._v(" "),e("echarts-legend"),t._v(" "),e("div",{staticClass:"chart-wrapper"},[e("step-bar-chart",{attrs:{"step-count":t.stepCount}})],1),t._v(" "),e("div",{staticClass:"info-con b-gray"},[e("h3",{staticClass:"c-blue"},[t._v("运动步数平均值"+t._s(t.stepCount.average)+"步/天")]),t._v(" "),e("h3",{staticClass:"c-blue"},[t._v("当前班级整体达标率为"+t._s(t.stepCount.upRate)+"%")]),t._v(" "),e("p",[t._v("未达标的学生建议培养运动类的兴趣爱好，如球类运动等；")]),t._v(" "),e("p",[t._v("已达标的学生请给予鼓励的同时，提醒户外运动时需注意安全。")])])],1)],1)],1)],1),t._v(" "),e("el-row",{attrs:{gutter:32}},[e("el-col",{attrs:{xs:24,sm:24,lg:24}},[e("el-row",[e("el-col",{staticClass:"item-name"},[e("span",{staticClass:"border-left"}),e("span",[t._v("危险因素")])])],1),t._v(" "),e("el-row",{attrs:{gutter:32}},[e("el-col",{attrs:{xs:24,sm:24,lg:8}},[e("div",{staticClass:"title-header"},[e("p",{staticClass:"left"},[t._v("颈椎与用眼负担建议720D/天")])]),t._v(" "),e("echarts-legend"),t._v(" "),e("div",{staticClass:"chart-wrapper"},[e("bad-eye-bar-chart",{attrs:{"nearwork-burden-day":t.nearworkBurdenDay}})],1),t._v(" "),e("div",{staticClass:"info-con b-gray"},[e("h3",{staticClass:"c-blue"},[t._v("颈椎与用眼负担平均值"+t._s(t.nearworkBurdenDay.average)+"D/天")]),t._v(" "),e("h3",{staticClass:"c-blue"},[t._v("当前班级整体达标率为"+t._s(t.nearworkBurdenDay.upRate)+"%")]),t._v(" "),e("p",[t._v("未达标的学生请依从智能设备提醒，每用眼30分钟及时休息眼睛。")]),t._v(" "),e("p",[t._v("已达标的学生建议积极参与户外活动，注意放松眼睛与颈椎。")])]),t._v(" "),e("div",{staticClass:"b-bottom"})],1),t._v(" "),e("el-col",{attrs:{xs:24,sm:24,lg:8}},[e("div",{staticClass:"title-header"},[e("p",{staticClass:"left"},[t._v("不良用眼姿势建议45次/天")])]),t._v(" "),e("echarts-legend"),t._v(" "),e("div",{staticClass:"chart-wrapper"},[e("bad-posture-bar-chart",{attrs:{"bad-posture-times":t.badPostureTimes}})],1),t._v(" "),e("div",{staticClass:"info-con b-gray"},[e("h3",{staticClass:"c-blue"},[t._v("不良用眼姿势平均值"+t._s(t.badPostureTimes.average)+"次/天")]),t._v(" "),e("h3",{staticClass:"c-blue"},[t._v("当前班级整体达标率为"+t._s(t.badPostureTimes.upRate)+"%")]),t._v(" "),e("p",[t._v("未达标的学生请依从智能设备的闪灯+震动提醒，规范用眼距离。")]),t._v(" "),e("p",[t._v("已达标的学生还需记得不要趴着、躺着或在过暗过亮的环境下看书。")])]),t._v(" "),e("div",{staticClass:"b-bottom"})],1),t._v(" "),e("el-col",{attrs:{xs:24,sm:24,lg:8}},[e("div",{staticClass:"title-header"},[e("p",{staticClass:"left"},[t._v("近距用眼时间建议240分钟/天")])]),t._v(" "),e("echarts-legend"),t._v(" "),e("div",{staticClass:"chart-wrapper"},[e("eyestrain-bar-chart",{attrs:{"nearwork-day":t.nearworkDay}})],1),t._v(" "),e("div",{staticClass:"info-con b-gray"},[e("h3",{staticClass:"c-blue"},[t._v("近距用眼时间平均值"+t._s(t.nearworkDay.average)+"分钟/天")]),t._v(" "),e("h3",{staticClass:"c-blue"},[t._v("当前班级整体达标率为"+t._s(t.nearworkDay.upRate)+"%")]),t._v(" "),e("p",[t._v("未达标的学生需多看远，使眼睛能够远近交替使用，降低近视风险。")]),t._v(" "),e("p",[t._v("达标的学生还需学习在更多场景中合理用眼，同时鼓励户外运动。")])]),t._v(" "),e("div",{staticClass:"b-bottom"})],1)],1)],1)],1),t._v(" "),e("factors-tab",{attrs:{"out-time":t.outTime.average,"step-count":t.stepCount.average,"lux-day":t.luxDay.average,"nearwork-day":t.nearworkDay.average,"nearwork-burden-day":t.nearworkBurdenDay.average,"bad-posture-times":t.badPostureTimes.average}})],1),t._v(" "),e("el-row",{staticClass:"position"},[e("el-button",{staticClass:"pdf-itemt right",attrs:{type:"primary"},on:{click:function(a){t.getPdfs("#pdfT","高危人群报告")}}},[t._v("生成PDF")]),t._v(" "),e("el-card",{staticClass:"box-card position",attrs:{id:"pdfT"}},[e("el-row",[e("el-col",{staticClass:"item-name"},[e("span",{staticClass:"border-left"}),e("span",[t._v("本班级近视高危人群")])])],1),t._v(" "),e("el-row",[e("el-col",[e("div",{staticClass:"info-con b-gray"},[e("p",[t._v("通过智能设备对在校学生用眼行为的监测，我们将户外时间“中”以下和近距用眼“中”以下的学生定义为近视高危人群，由于用眼习惯较差，未来发展成高度近视的风险极高。建议学校与家长对该群体进行重点关注、科学指导、及时干预，定期去正规医院进行检查，同时建立屈光档案追踪视力发展情况，定制个性化精准的近视防控解决方案。")])]),t._v(" "),e("high-ris-tabel",{attrs:{"risk-children":t.riskChildren}})],1)],1)],1)],1)],1)],1)},[],!1,null,null,null);m.options.__file="group_report.vue";a.default=m.exports},klGT:function(t,a,e){}}]);