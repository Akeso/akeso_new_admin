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
          <span>学校：{{ infoData.school }}</span>
          <span>班级：{{ infoData.clasGrade }}</span>
          <span>人数：{{ infoData.totalCount }}人</span>
        </div>
        <div class="header-info">
          <span>男生：{{ infoData.maleCount }}人</span>
          <span>女生：{{ infoData.femaleCount }}人</span>
        </div>
        <div class="header-info">
          <span>测评时间：{{ infoStart }} - {{ infoEnd }}</span>
          <p class="right no-margin" @click="getPdf()">导出PDF</p>
          <!--<button type="button" class="btn btn-primary right" @click="getPdf()">导出PDF</button>-->
        </div>
      </div>
      <el-row>
        <el-col class="info b-oblue c-blue">为积极响应国家号召，紧跟习近平总书记和教育部等八部委联合印发的《综合防控儿童青少年近视实施方案》中“一增一减”（即增加户外活动时间，减少用眼负担）的重要指导政策，建立以在校学生为主体，基于可穿戴健康设备的青少年用眼健康体质大数据监测，通过家庭学生共同参与方式进行健康教育及预防近视健康行为促进行动。该报告将协助当地政府掌握当地近视情况，落实国家近视防控工作，帮助医生确定近视度数增长主因，为学生提供个性化精准近视防控诊疗方案，帮助学校和父母更有针对性地采取行动，为儿童青少年视力健康发育的全过程、全周期提供保障，切实有效降低当地在校学生近视率。</el-col>
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
                <bar-chart :out-time = "outTime"/>
              </div>
              <div class="info-con b-gray">
                <h3 class="c-blue">班级不良用眼姿势平均值90次/天</h3>
                <h3 class="c-blue">当前班级整体达标率为xx%</h3>
                <h3 class="c-blue">未达标率为xx%</h3>
                <p>未达标的学生建议培养户外运动爱好，在课间，上学放学路上及周末有意识增加户外时间，尽量争取每天不少于2小时的户外时间；已达标的学生请给予鼓励，同时在户外活动时注意防晒和安全。</p>
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
                <sunshine-bar-chart :lux-day="luxDay"/>
              </div>
              <div class="info-con b-gray" style="height: 238px;">
                <h3 class="c-blue">户外阳光摄入量平均值XX分钟/天</h3>
                <h3 class="c-blue">当前班级整体达标率为xx%</h3>
                <h3 class="c-blue">未达标率为xx%</h3>
                <p>未达标的学生建议有意识地在课间，上学路上及周末去户外沐浴阳光；已达标的学生在给予鼓励的同时，在阳光过强时请提醒佩戴太阳帽或太阳镜等避免紫外线对眼睛与皮肤的伤害。</p>
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
                <step-bar-chart :step-count = "stepCount"/>
              </div>
              <div class="info-con b-gray" style="height: 236px;">
                <h3 class="c-blue">运动步数平均值XX步/天</h3>
                <h3 class="c-blue">当前班级整体达标率为xx%</h3>
                <h3 class="c-blue">未达标率为xx%</h3>
                <p>未达标的学生建议培养运动类的兴趣爱好，增加户外运动课程，如球类运动等；已达标的学生请给予鼓励的同时，提醒户外运动时需注意安全。</p>
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
                <bad-eye-bar-chart :nearwork-burden-day="nearworkBurdenDay"/>
              </div>
              <div class="info-con b-gray">
                <h3 class="c-blue">颈椎与用眼负担平均值XXD/天</h3>
                <h3 class="c-blue">当前班级整体达标率为xx%</h3>
                <h3 class="c-blue">未达标率为xx%</h3>
                <p>未达标的学生建议依从智能设备的提醒，连续用眼30分钟后及时抬头远眺，避免因近视关键因素的累积，导致不可逆的近视发生发展，影响眼睛正常发育。已达标的学生请给予鼓励的同时，建议积极参与户外活动，放松眼睛与大脑。</p>
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
                <bad-posture-bar-chart :bad-posture-times="badPostureTimes"/>
              </div>
              <div class="info-con b-gray">
                <h3 class="c-blue">不良用眼姿势平均值XX次/天</h3>
                <h3 class="c-blue">当前班级整体达标率为xx%</h3>
                <h3 class="c-blue">未达标率为xx%</h3>
                <p>针对未达标的学生，首先需要学校老师与家长的积极配合，同时督促孩子依从智能设备针对错误用眼姿势带来的提醒，及时纠正错误用眼行为，保证读写坐姿正确，规范用眼距离。针对达标的学生还需提醒用眼姿势正确不仅局限在课堂和书桌前，也不要趴着、躺着或在过暗过亮的环境下看书。</p>
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
                <eyestrain-bar-chart :nearwork-day="nearworkDay"/>
              </div>
              <div class="info-con b-gray">
                <h3 class="c-blue">近距用眼时间平均值XX分钟/天</h3>
                <h3 class="c-blue">当前班级整体达标率为xx%</h3>
                <h3 class="c-blue">未达标率为xx%</h3>
                <p>针对未达标的学生，需要学校老师与家长积极配合，督促学生依从智能设备的提醒，眼睛与书本（电子产品）保持33厘米的距离，多去户外看远，使眼睛能够远近交替使用。针对达标的学生还需教会孩子在更多场景中合理用眼，不要趴或躺着看书、不要过多地使用手机、ipad等电子产品。</p>
              </div>
              <div class="b-bottom" />
            </el-col>
          </el-row>
        </el-col>
      </el-row>
      <el-row>
        <table border="5" cellspacing="0" cellpadding="10" class="table-cls">
          <tr>
            <td rowspan="4" class="td-20 title-font">近视健康因素情况</td>
            <td class="td-20 title-font tab-header" style="width: 30%;">监测项目</td>
            <td class="td-20 title-font tab-header" style="width: 20%;">监测结果</td>
            <td class="td-20 title-font tab-header" style="width: 20%;">建议参考值</td>
            <td class="td-20 title-font tab-header" style="width: 10%;">达标情况</td>
          </tr>
          <tr>
            <td class="title-font">户外时间120分钟/天</td>
            <td>111分钟</td>
            <td>≥80分钟</td>
            <td>111</td>
          </tr>
          <tr>
            <td class="title-font">阳光摄入36万lux/天</td>
            <td>lux</td>
            <td>≥24万lux</td>
            <td>111</td>
          </tr>
          <tr>
            <td class="title-font">运动步数12000步/天</td>
            <td>111步</td>
            <td>≥8000步</td>
            <td>1</td>
          </tr>
          <tr>
            <td rowspan="3" class="title-font">近视危险因素情况</td>
            <td class="title-font">近距离用眼时长260分钟/天</td>
            <td>11分钟</td>
            <td>≤160分钟</td>
            <td>22</td>
          </tr>
          <tr>
            <td class="title-font">不良用眼姿态90次/天</td>
            <td>22次</td>
            <td>≤60次</td>
            <td>1</td>
          </tr>
          <tr>
            <td class="title-font">颈椎与用眼负荷720D/天</td>
            <td>1D</td>
            <td>≤480D</td>
            <td>333</td>
          </tr>
          <tr>
            <td class="title-font">初步提示</td>
            <td colspan="4">若想达到近视防控效果最大化，请多去户外运动，沐浴光照，三项健康因素全部达到参考值；同时避免错误用眼习惯增加近视风险，将导致近视加深的近视危险因素下降到参考值以下。</td>
          </tr>
        </table>
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
import { FormatDay } from '@/utils/index'
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
      },
      outTime: { },
      luxDay: { },
      stepCount: {},
      nearworkBurdenDay: {},
      badPostureTimes: {},
      nearworkDay: {},
      infoData: {
        school: '某某学校',
        clasGrade: '某某班级',
        totalCount: 0,
        maleCount: 0,
        femaleCount: 0
      },
      infoStart: '', // FormatDay(new Date()), // this.selectSection.startDate
      infoEnd: ''// FormatDay(new Date())
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
      const ppp = { excel_roll_id: this.info.id, start_date: this.selectSection.startDate, end_date: this.selectSection.endDate }
      console.log('info => ', this.info, ppp)
      fetchExcelReport(ppp).then(res => {
        console.log('res => ', res.data)
        this.outTime = res.data.outTime
        this.luxDay = res.data.luxDay
        this.stepCount = res.data.stepCount
        this.nearworkBurdenDay = res.data.nearworkBurdenDay // 颈椎与用眼负担
        this.nearworkDay = res.data.nearworkDay // 近距用眼时间
        this.badPostureTimes = res.data.badPostureTimes // 不良姿势
        this.infoData = res.data.info
        this.infoStart = FormatDay(this.selectSection.startDate)
        this.infoEnd = FormatDay(this.selectSection.endDate)
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
    padding-bottom: 8px;
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
  .table-cls{
    margin-top: 20px;
    width: 100%;
    border:.5px solid #979797;
    border-left: 0.5px solid #979797;
    border-top: .5px;
  }
  .table-cls td{
    border-right: 0.5px solid #979797;
    border-bottom: 0.5px;
    border-left: 0.5px;
  }
  .tab-header{
    background: #27adff;
    color: #fff;
  }
</style>
