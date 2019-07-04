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
    <el-row class="position">
      <el-button class="pdf-item right" type="primary" @click="getPdf()">生成PDF</el-button>
      <el-card id="pdfDom" class="box-card">
        <div class="clearfix header">
          <h1>学生用眼健康因素监测报告</h1>
          <div class="header-info">
            <span class="item">学校：{{ infoData.school }}</span>
            <span class="item">班级：{{ infoData.clasGrade }}</span>
            <span class="item">人数：{{ infoData.totalCount }}人</span>
          </div>
          <div class="header-info">
            <span class="item">男生：{{ infoData.maleCount }}人</span>
            <span class="item">女生：{{ infoData.femaleCount }}人</span>
            <span class="item">近视：{{ infoData.visionBadCount }}人</span>
            <span class="item">非近视：{{ infoData.visionGoodCount }}人</span>
          </div>
          <div class="header-info">
            <span>测评时间：{{ infoStart }} - {{ infoEnd }}</span>
          </div>
        </div>
        <el-row>
          <el-col class="info b-oblue c-blue">为积极响应国家号召，紧跟习近平总书记和教育部等八部委联合印发的《综合防控儿童青少年近视实施方案》中“一增一减”（即增加户外活动时间，减少用眼负担）的重要指导政策，建立以在校学生为主体，基于可穿戴健康设备的青少年用眼健康体质大数据监测，通过家庭学生共同参与方式进行健康教育及预防近视健康行为促进行动。该报告将协助当地政府掌握当地近视情况，落实国家近视防控工作，帮助医生确定近视度数增长主因，为学生提供个性化精准近视防控诊疗方案，帮助学校和父母更有针对性地采取行动，为儿童青少年视力健康发育的全过程、全周期提供保障，切实有效降低当地在校学生近视率。</el-col>
        </el-row>
        <el-row :gutter="32">
          <el-col :xs="24" :sm="24" :lg="12">
            <el-row>
              <el-col class="item-name"><span class="border-left"/><span>健康因素</span></el-col>
            </el-row>
            <el-row :gutter="32">
              <el-col :xs="24" :sm="24" :lg="24">
                <div class="title-header">
                  <p class="left">户外时间120分钟/天</p>
                  <p class="right">参考值80分钟/天</p>
                </div>
                <echarts-legend/>
                <div class="chart-wrapper">
                  <bar-chart :out-time = "outTime"/>
                </div>
                <div class="info-con b-gray">
                  <h3 class="c-blue">户外时间平均值为{{ outTime.average }}分钟/天</h3>
                  <h3 class="c-blue">当前班级整体达标率为{{ outTime.upRate }}%</h3>
                  <p>未达标的学生建议培养户外运动爱好，在课间，上学放学路上及周末有意识增加户外时间，尽量争取每天不少于2小时的户外时间；已达标的学生请给予鼓励，同时在户外活动时注意防晒和安全。</p>
                </div>
                <div class="b-bottom" />
              </el-col>
            </el-row>
            <el-row :gutter="32">
              <el-col :xs="24" :sm="24" :lg="24">
                <div class="title-header">
                  <p class="left">户外阳光摄入量36Wlux/天</p>
                  <p class="right">参考值24Wlux/天</p>
                </div>
                <echarts-legend/>
                <div class="chart-wrapper">
                  <sunshine-bar-chart :lux-day="luxDay"/>
                </div>
                <div class="info-con b-gray" style="height: 208px;">
                  <h3 class="c-blue">户外阳光摄入量平均值{{ luxDay.average }}Wlux/天</h3>
                  <h3 class="c-blue">当前班级整体达标率为{{ luxDay.upRate }}%</h3>
                  <p>未达标的学生建议有意识地在课间，上学路上及周末去户外沐浴阳光；已达标的学生在给予鼓励的同时，在阳光过强时请提醒佩戴太阳帽或太阳镜等避免紫外线对眼睛与皮肤的伤害。</p>
                </div>
                <div class="b-bottom" />
              </el-col>
            </el-row>
            <el-row :gutter="32">
              <el-col :xs="24" :sm="24" :lg="24">
                <div class="title-header">
                  <p class="left">运动步数12000步/天</p>
                  <p class="right">参考值8000步/天</p>
                </div>
                <echarts-legend/>
                <div class="chart-wrapper">
                  <step-bar-chart :step-count = "stepCount"/>
                </div>
                <div class="info-con b-gray" style="height: 208px;">
                  <h3 class="c-blue">运动步数平均值{{ stepCount.average }}步/天</h3>
                  <h3 class="c-blue">当前班级整体达标率为{{ stepCount.upRate }}%</h3>
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
                  <p class="left">颈椎与用眼负担720D/天</p>
                  <p class="right">参考值480D/天</p>
                </div>
                <echarts-legend/>
                <div class="chart-wrapper">
                  <bad-eye-bar-chart :nearwork-burden-day="nearworkBurdenDay"/>
                </div>
                <div class="info-con b-gray">
                  <h3 class="c-blue">颈椎与用眼负担平均值{{ nearworkBurdenDay.average }}D/天</h3>
                  <h3 class="c-blue">当前班级整体达标率为{{ nearworkBurdenDay.upRate }}%</h3>
                  <p>未达标的学生建议依从智能设备的提醒，连续用眼30分钟后及时抬头远眺，避免因近视关键因素的累积，导致不可逆的近视发生发展，影响眼睛正常发育。已达标的学生请给予鼓励的同时，建议积极参与户外活动，放松眼睛与大脑。</p>
                </div>
                <div class="b-bottom" />
              </el-col>
            </el-row>
            <el-row :gutter="32">
              <el-col :xs="24" :sm="24" :lg="24">
                <div class="title-header">
                  <p class="left">不良用眼姿势45次/太难</p>
                  <p class="right">参考值30次/天</p>
                </div>
                <echarts-legend/>
                <div class="chart-wrapper">
                  <bad-posture-bar-chart :bad-posture-times="badPostureTimes"/>
                </div>
                <div class="info-con b-gray">
                  <h3 class="c-blue">不良用眼姿势平均值{{ badPostureTimes.average }}次/天</h3>
                  <h3 class="c-blue">当前班级整体达标率为{{ badPostureTimes.upRate }}%</h3>
                  <p>针对未达标的学生，首先需要学校老师与家长的积极配合，同时督促孩子依从智能设备针对错误用眼姿势带来的提醒，及时纠正错误用眼行为，保证读写坐姿正确，规范用眼距离。针对达标的学生还需提醒用眼姿势正确不仅局限在课堂和书桌前，也不要趴着、躺着或在过暗过亮的环境下看书。</p>
                </div>
                <div class="b-bottom" />
              </el-col>
            </el-row>
            <el-row :gutter="32">
              <el-col :xs="24" :sm="24" :lg="24">
                <div class="title-header">
                  <p class="left">近距用眼时间240分钟/天</p>
                  <p class="right">参考值160分钟/天</p>
                </div>
                <echarts-legend/>
                <div class="chart-wrapper">
                  <eyestrain-bar-chart :nearwork-day="nearworkDay"/>
                </div>
                <div class="info-con b-gray">
                  <h3 class="c-blue">近距用眼时间平均值{{ nearworkDay.average }}分钟/天</h3>
                  <h3 class="c-blue">当前班级整体达标率为{{ nearworkDay.upRate }}%</h3>
                  <p>针对未达标的学生，需要学校老师与家长积极配合，督促学生依从智能设备的提醒，眼睛与书本（电子产品）保持33厘米的距离，多去户外看远，使眼睛能够远近交替使用。针对达标的学生还需教会孩子在更多场景中合理用眼，不要趴或躺着看书、不要过多地使用手机、ipad等电子产品。</p>
                </div>
                <div class="b-bottom" />
              </el-col>
            </el-row>
          </el-col>
        </el-row>
        <factors-tab :out-time="outTime.average" :step-count="stepCount.average" :lux-day="luxDay.average" :nearwork-day="nearworkDay.average" :nearwork-burden-day="nearworkBurdenDay.average" :bad-posture-times="badPostureTimes.average"/>
        <el-row>
          <el-col class="item-name"><span class="border-left"/><span>本班级近视高危人群</span></el-col>
        </el-row>
        <el-row>
          <el-col>
            <div class="info-con b-gray">
              <p>通过智能设备对在校学生用眼行为的监测，我们将户外时间“中”以下和近距用眼“中”以下的学生定义为近视高危人群，由于用眼习惯较差，未来发展成高度近视的风险极高。建议学校与家长对该群体进行重点关注、科学指导、及时干预，定期去正规医院进行检查，同时建立屈光档案追踪视力发展情况，定制个性化精准的近视防控解决方案。</p>
            </div>
            <high-ris-tabel :risk-children="riskChildren"/>
          </el-col>
        </el-row>
      </el-card>
    </el-row>
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
import factorsTab from './components/factorsTab'
import highRisTabel from './components/tabel'
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
    QRcode,
    factorsTab,
    highRisTabel
  },
  data() {
    return {
      multiple: false,
      fileName: '',
      selectDate: '',
      selectSection: {
        startDate: new Date(),
        endDate: new Date()
      },
      info: {
        id: undefined
      },
      outTime: {
        average: 0,
        upRate: 0
      },
      luxDay: {
        average: 0,
        upRate: 0
      },
      stepCount: {
        average: 0,
        upRate: 0
      },
      nearworkBurdenDay: {
        average: 0,
        upRate: 0
      },
      badPostureTimes: {
        average: 0,
        upRate: 0
      },
      nearworkDay: {
        average: 0,
        upRate: 0
      },
      infoData: {
        school: '——',
        clasGrade: '——',
        totalCount: 0,
        maleCount: 0,
        femaleCount: 0,
        visionBadCount: 0,
        visionGoodCount: 0
      },
      infoStart: '', // FormatDay(new Date()), // this.selectSection.startDate
      infoEnd: '', // FormatDay(new Date())
      riskChildren: []
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
        this.riskChildren = res.data.riskChildren
      })
    },
    downloadExc() {
      window.location.href = 'https://akeso.com.cn/template/report_template.xlsx'
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
    color: #1197ff;
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
  .header-info span.item{
    font-size: 18px;
    margin-right: 26px;
  }
  .position{
    position: relative;
  }
  .pdf-item{
    position: absolute;
    right: 30px;
    top: 130px;
  }
  .header{
    padding-bottom: 10px;
    border-bottom: 1px solid #ebeef5;
    margin-bottom: 20px;
  }
  .info{
    padding: 16px;
    line-height: 24px;
    font-size: 16px;
  }
  .item-name{
    font-size: 26px;
    font-weight: 500;
    padding: 30px 0 24px;
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
    margin-top:10px;
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
</style>
