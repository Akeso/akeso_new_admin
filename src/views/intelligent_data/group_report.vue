<template>
  <div class="box-container">
    <el-row :gutter="20">
      <el-col :xs="24" :sm="24" :lg="10">
        <el-upload
          :on-preview="handlePreview"
          :on-remove="handleRemove"
          :before-remove="beforeRemove"
          :on-success="handleSuccess"
          :limit="1"
          class="upload-demo"
          accept=".xlsx, .xls"
          action="/api/common/excels/upload_report">
          <div class="overflow">
            <el-button size="small" type="primary" class="left">上传Excel</el-button>
            <el-button size="small" class="left m-l-2" @click.stop="downloadExc">下载Excel模板</el-button>
            <div slot="tip" class="el-upload__tip c-red left tit-btn">只能上传.xlsx, .xls文件</div>
          </div>
        </el-upload>
      </el-col>
    </el-row>
    <el-row :gutter="20" class="m-t-2">
      <el-col>
        选择日期
        <el-date-picker
          :clearable="false"
          v-model="selectSection.startDate"
          type="date"
          style="width: 150px;"
          format="yyyy-MM-dd"
          value-format="yyyy-MM-dd"
          placeholder="选择日期"/>
        至
        <el-date-picker
          :clearable="false"
          v-model="selectSection.endDate"
          type="date"
          style="width: 150px;"
          format="yyyy-MM-dd"
          value-format="yyyy-MM-dd"
          placeholder="选择日期"/>
        <el-button class="filter-item" type="primary" @click="handleClick">生成报告</el-button>
      </el-col>
    </el-row>
    <el-card id="pdfDom" class="box-card">
      <div class="clearfix header">
        <h1>学生用眼健康因素监测报告</h1>
        <div class="header-info">
          <span>学校：育才街小学</span>
          <span>班级：三年级（2）班</span>
          <span>人数：169人</span>
        </div>
        <div class="header-info">
          <span>男生：89人</span>
          <span>女生：80人</span>
        </div>
        <div class="header-info">
          <span>测评时间：2019.5.28 - 2019.6.28</span>
          <p class="right no-margin" @click="getPdf()">导出PDF</p>
          <!--<button type="button" class="btn btn-primary right" @click="getPdf()">导出PDF</button>-->
        </div>
      </div>
      <el-row>
        <el-col class="info b-oblue c-blue">文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容</el-col>
      </el-row>
      <!--<el-row>
        <el-col :span="4">总人数</el-col>
        <el-col :span="4">男生</el-col>
        <el-col :span="4">女生</el-col>
      </el-row>-->
      <el-row :gutter="32">
        <el-col :xs="24" :sm="24" :lg="12">
          <el-row>
            <el-col class="item-name"><span class="border-left"/><span>健康因素</span></el-col>
          </el-row>
          <el-row :gutter="32">
            <el-col :xs="24" :sm="24" :lg="24">
              <div class="title-header">
                <p class="left">户外时间</p>
                <p class="right">参考值60次/天</p>
              </div>
              <echarts-legend/>
              <div class="chart-wrapper">
                <bar-chart/>
              </div>
              <div class="info-con b-gray">
                <h3 class="c-blue">班级不良用眼姿势平均值90次/天</h3>
                <p>优代表说了上面的前奏之后，接下来就是纳入正题了，就是开篇说的state的玩法。回到store文件的index.js里面，我们先声明一个state变量，并赋值一个空对象给它，里面随便定义两个初始属性值；</p>
              </div>
              <div class="b-bottom" />
            </el-col>
          </el-row>
          <el-row :gutter="32">
            <el-col :xs="24" :sm="24" :lg="24">
              <div class="title-header">
                <p class="left">户外阳光摄入量</p>
                <p class="right">参考值60次/天</p>
              </div>
              <echarts-legend/>
              <div class="chart-wrapper">
                <sunshine-bar-chart/>
              </div>
              <div class="info-con b-gray">
                <h3 class="c-blue">班级阳光摄入量平均值24W lux/天</h3>
                <p>优代表说了上面的前奏之后，接下来就是纳入正题了，就是开篇说的state的玩法。回到store文件的index.js里面，我们先声明一个state变量，并赋值一个空对象给它，里面随便定义两个初始属性值；</p>
              </div>
              <div class="b-bottom" />
            </el-col>
          </el-row>
          <el-row :gutter="32">
            <el-col :xs="24" :sm="24" :lg="24">
              <div class="title-header">
                <p class="left">运动步数</p>
                <p class="right">参考值5400步/天</p>
              </div>
              <echarts-legend/>
              <div class="chart-wrapper">
                <step-bar-chart/>
              </div>
              <div class="info-con b-gray">
                <h3 class="c-blue">班级运动步数平均值3800步/天</h3>
                <p>优代表说了上面的前奏之后，接下来就是纳入正题了，就是开篇说的state的玩法。回到store文件的index.js里面，我们先声明一个state变量，并赋值一个空对象给它，里面随便定义两个初始属性值；</p>
              </div>
              <div class="b-bottom" />
            </el-col>
          </el-row>
        </el-col>
        <el-col :xs="24" :sm="24" :lg="12">
          <el-row>
            <el-col class="item-name"><span class="border-left"/><span>危险因素</span></el-col>
          </el-row>
          <el-row :gutter="32">
            <el-col :xs="24" :sm="24" :lg="24">
              <div class="title-header">
                <p class="left">颈椎与用眼负担</p>
                <p class="right">参考值360D/天</p>
              </div>
              <echarts-legend/>
              <div class="chart-wrapper">
                <bad-eye-bar-chart/>
              </div>
              <div class="info-con b-gray">
                <h3 class="c-blue">班级颈椎与用眼负担平均值360D/天</h3>
                <p>优代表说了上面的前奏之后，接下来就是纳入正题了，就是开篇说的state的玩法。回到store文件的index.js里面，我们先声明一个state变量，并赋值一个空对象给它，里面随便定义两个初始属性值；</p>
              </div>
              <div class="b-bottom" />
            </el-col>
          </el-row>
          <el-row :gutter="32">
            <el-col :xs="24" :sm="24" :lg="24">
              <div class="title-header">
                <p class="left">不良用眼姿势</p>
                <p class="right">参考值60次/天</p>
              </div>
              <echarts-legend/>
              <div class="chart-wrapper">
                <bad-posture-bar-chart/>
              </div>
              <div class="info-con b-gray">
                <h3 class="c-blue">班级不良用眼姿势平均值90次/天</h3>
                <p>优代表说了上面的前奏之后，接下来就是纳入正题了，就是开篇说的state的玩法。回到store文件的index.js里面，我们先声明一个state变量，并赋值一个空对象给它，里面随便定义两个初始属性值；</p>
              </div>
              <div class="b-bottom" />
            </el-col>
          </el-row>
          <el-row :gutter="32">
            <el-col :xs="24" :sm="24" :lg="24">
              <div class="title-header">
                <p class="left">近距用眼时间</p>
                <p class="right">参考值120分钟/天</p>
              </div>
              <echarts-legend/>
              <div class="chart-wrapper">
                <eyestrain-bar-chart/>
              </div>
              <div class="info-con b-gray">
                <h3 class="c-blue">班级近距用眼时间平均值90次/天</h3>
                <p>优代表说了上面的前奏之后，接下来就是纳入正题了，就是开篇说的state的玩法。回到store文件的index.js里面，我们先声明一个state变量，并赋值一个空对象给它，里面随便定义两个初始属性值；</p>
              </div>
              <div class="b-bottom" />
            </el-col>
          </el-row>
        </el-col>
      </el-row>
      <el-row>
        <el-col class="item-name"><span class="border-left"/><span>本班级近视高危人群</span></el-col>
      </el-row>
      <el-row>
        <el-col>
          <div class="info-con b-gray">
            <p>优代表说了上面的前奏之后，接下来就是纳入正题了，就是开篇说的state的玩法。回到store文件的index.js里面，我们先声明一个state变量，并赋值一个空对象给它，里面随便定义两个初始属性值；</p>
          </div>
        </el-col>
      </el-row>
    </el-card>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span style="font-weight: bold;">眼健康行为模式风险分析报告(健康因素)</span>
      </div>
      <el-row>
        <el-col :span="4">总人数</el-col>
        <el-col :span="4">男生</el-col>
        <el-col :span="4">女生</el-col>
      </el-row>
    </el-card>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span style="font-weight: bold;">眼健康行为模式风险分析报告(危险因素)</span>
      </div>
      <el-row>
        <el-col :span="4">总人数</el-col>
        <el-col :span="4">男生</el-col>
        <el-col :span="4">女生</el-col>
      </el-row>
    </el-card>
  </div>
</template>
<script>
import { fetchExcelReport } from '@/api/reports'
import UploadExcelComponent from '@/components/UploadExcel/index.vue'
import BarChart from './components/BarChart'
import SunshineBarChart from './components/SunshineBarChart'
import StepBarChart from './components/StepBarChart'
import BadEyeBarChart from './components/BadEyeBarChart'
import BadPostureBarChart from './components/BadPostureBarChart'
import EyestrainBarChart from './components/EyestrainBarChart'
import echartsLegend from './components/echarts-legend'
import QRcode from '@/components/QRCode'
export default {
  components: {
    UploadExcelComponent,
    BarChart,
    echartsLegend,
    SunshineBarChart,
    StepBarChart,
    BadEyeBarChart,
    BadPostureBarChart,
    EyestrainBarChart,
    QRcode
  },
  data() {
    return {
      multiple: false,
      fileName: '',
      selectDate: '',
      // selectSection: [new Date(), new Date()],
      selectSection: {
        startDate: new Date(),
        endDate: new Date()
      },
      info: {
        id: undefined
      }
    }
  },
  computed: {
    htmlTitle: function() {
      return '导出报告'
    }
  },
  methods: {
    handleRemove(file, fileList) {
      console.log(file, fileList)
    },
    handlePreview(file) {
      console.log(file)
    },
    handleSuccess(res, file) {
      console.log('res => ', res)
      console.log('file => ', file)
      this.info = res.data
    },
    beforeRemove(file, fileList) {
    },
    handleClick() {
      console.log(111)
      console.log('info => ', this.info)
      const ppp = { excel_roll_id: this.info.id, start_date: this.selectSection.startDate, end_date: this.selectSection.endDate }
      fetchExcelReport(ppp).then(res => {
        console.log('res => ', res.data)
      })
    },
    downloadExc() {
      window.location.href = 'http://akeso.com.cn/template/report_template.xlsx'
      // window.open('http://akeso.com.cn/template/report_template.xlsx')
    }
  }
}
</script>
<style scope>
  .box-container{
    padding: 10px;
  }
  .chart-wrapper{
    overflow: hidden;
  }
  .b-green{
    background:#54CE50;
  }
  .b-yellow{
    background: #F5A623;
  }
  .b-red{
    background: #D0021B;
  }
  .b-blue{
    background: #27adff;
  }
  .b-oblue{
    background: #e9f7ff;
  }
  .b-gray{
    background: #f0f0f0;
  }
  .c-blue{
    color: #27adff;
  }
  .c-red{
    color: red;
  }
  .tit-btn{
    font-size: 14px;
    margin-left:16px;
  }
  .overflow{
    overflow: hidden;
  }
  .m-t-2{
    margin-top:14px;
    margin-bottom: 20px;
  }
  .m-l-2{
    margin-left:20px;
  }
  .filter-item{
    margin-left:14px;
  }
  .title-header{
    padding: 10px 16px;
    background: #e0f3ff;
    color:#27adff;
    overflow: hidden;
    font-size: 18px;
    border-radius: 4px;
  }
  .title-header p{
    margin: 0;
  }
  .left{
    float: left;
  }
  .right{
    float: right;
  }
  .header-info{
    padding-bottom: 10px;
  }
  .header-info span{
    font-size: 18px;
    margin-right: 26px;
  }
  .header{
    padding-bottom: 10px;
    border-bottom: 1px solid #ebeef5;
    margin-bottom: 20px;
  }
  .no-margin{
    margin: 0;
  }
  .info{
    padding: 20px;
    font-size: 18px;
  }
  .item-name{
    font-size: 26px;
    font-weight: 500;
    padding: 24px 0;
  }
  .item-name span.border-left{
    display: inline-block;
    background: #27adff;
    height: 30px;
    width: 6px;
    border-radius: 3px;
    margin-right: 10px;
  }
  .item-name span{
    vertical-align: middle;
  }
  .info-con{
    margin-top:20px;
    padding: 20px 20px;
  }
  .info-con h3{
    margin: 0;
    padding-bottom: 16px;
  }
  .info-con p{
    line-height: 22px;
    margin: 0;
  }
  .b-bottom{
    border-bottom: 1px solid #ebeef5;
    margin-top: 20px;
    margin-bottom: 20px;
  }
</style>
