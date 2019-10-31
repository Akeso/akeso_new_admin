<template>
  <div>
    <div style="position: relative; background:#fff; z-index:1;">
      <el-row style="margin: 10px;">
        <el-col>
          <label for="">选择日期</label>
          <el-date-picker
            :editable="false"
            :clearable="false"
            v-model="selectDate"
            type="date"
            placeholder="选择日期"
            value-format="yyyy-MM-dd"
            @change="changeDate"/>
        </el-col>
      </el-row>
      <el-row style="margin: 10px;">
        <el-button class="filter-item" type="primary" icon="el-icon-download" @click="getPdf()">导出为PDF</el-button>
        <el-button class="filter-item" type="primary" icon="el-icon-download">
          <a :href="downloadUrl + '?child_id=' + userId + '&selectDate=' + selectDate">导出Excel</a>
        </el-button>
      </el-row>
    </div>
    <el-card class="box-card">
      <div id="pdfDom">
        <div style="padding: 20px;">
          <div class="header">
            <span style="font-size: 32px; color: white;">儿童用眼健康行为模式风险分析报告</span>
            <div class="header-avatar">
              <img :src="headerUrl" class="imgUrl">
            </div>
          </div>
          <el-row>
            <el-col :span="8">
              <span class="title">姓名</span>
              <span class="right-bar">{{ child.name }}</span>
            </el-col>
            <el-col :span="8">
              <span class="title">年龄</span>
              <span class="right-bar">{{ child.age }}</span>
            </el-col>
            <el-col :span="8">
              <span class="title">性别</span>
              <span class="right-bar">{{ child.gender | genderFilter }}</span>
            </el-col>
          </el-row>
          <el-row style="margin-top: 20px;">
            <el-col>
              <span class="title">检查日期</span>
              <span class="right-bar">{{ startDate }} 到 {{ endDate }}</span>
            </el-col>
          </el-row>
          <div>
            <div class="tags">
              <h3>近视高危临床分类</h3>
              <label><input v-model="child.tagIds" name="type_clinical" type="checkbox" value="7">&nbsp;&nbsp;近视家族史</label>
              <label><input v-model="child.tagIds" name="type_clinical" type="checkbox" value="8">&nbsp;&nbsp;远视储备不足</label>
              <label><input v-model="child.tagIds" name="type_clinical" type="checkbox" value="9">&nbsp;&nbsp;视力不良/弱视</label>
              <label><input v-model="child.tagIds" name="type_clinical" type="checkbox" value="10">&nbsp;&nbsp;高AC/A</label>
              <!--<label><input v-model="child.tagIds" name="type_clinical" type="checkbox" value="11">&nbsp;&nbsp;调节痉挛</label>-->
              <!--<label><input v-model="child.tagIds" name="type_clinical" type="checkbox" value="12">&nbsp;&nbsp;视近内隐斜</label>-->
              <label><input v-model="child.tagIds" name="type_clinical" type="checkbox" value="13">&nbsp;&nbsp;调节灵敏度下降</label>
              <label><input v-model="child.tagIds" name="type_clinical" type="checkbox" value="14">&nbsp;&nbsp;眼球调节/集合功能紊乱</label>
            </div>
            <div class="weekly-contents">
              <h2 class="c-blue">本周平均得分 {{ weekData.healthIndex }}</h2>
              <ul class="score-list">
                <li>总戴镜时间 <span class="c-blue">{{ weekData.wearTime }}</span></li>
                <li>总戴镜时间 <span class="c-blue">{{ weekData.upElement }}</span></li>
                <li>累计危险因素 <span class="c-blue">{{ weekData.downElement }}</span></li>
                <li>周一到周五平均分 <span class="c-blue">{{ weekData.weekScoreAvg }}</span></li>
                <li>周六周日平均分 <span class="c-blue">{{ weekData.weekendScoreAvg }}</span></li>
              </ul>
            </div>
            <el-row style="margin:0 10px;">
              <el-col :span="16">
                <WeekHealthItem :text="textHealthIndex" :hours="healthIndexArray" :times="timeArray"/>
                <div class="assess-box" style="padding-right:10px;">
                  {{ weekData.suggest }}
                </div>
              </el-col>
              <el-col :span="8" class="progress-bar">
                <div class="score-des green-back">
                  <span>左边为本周平均数据，右边为参考范围</span>
                </div>
                <div class="adding-score c-green">加分项</div>
                <el-row class="indicator-title">
                  <el-col :span="12" class="text-left text-standard-font">户外时间</el-col>
                  <el-col :span="12" class="text-standard-font text-right">{{ weekData.outTime }}/120分钟</el-col>
                </el-row>
                <el-row>
                  <el-progress :text-inside="true" :stroke-width="18" :percentage="weekData.outTimePercent" status="success" class="progress-l-r"/>
                </el-row>
                <el-row class="indicator-title m-t">
                  <el-col :span="12" class="text-left text-standard-font">光照摄入</el-col>
                  <el-col :span="12" class="text-standard-font text-right">{{ weekData.luxDay }}/360000lux</el-col>
                </el-row>
                <el-row>
                  <el-progress :text-inside="true" :stroke-width="18" :percentage="weekData.luxDayPercent" status="success" class="progress-l-r"/>
                </el-row>
                <el-row class="indicator-title m-t">
                  <el-col :span="12" class="text-left text-standard-font">运动步数</el-col>
                  <el-col :span="12" class="text-standard-font text-right">{{ weekData.stepCount }}/12000步</el-col>
                </el-row>
                <el-row>
                  <el-progress :text-inside="true" :stroke-width="18" :percentage="weekData.stepCountPercent" status="success" class="progress-l-r"/>
                </el-row>
                <div class="score-des red-back">
                  <span>左边为本周平均数据，右边为参考范围</span>
                </div>
                <div class="adding-score c-red m-t-1">减分项</div>
                <el-row class="indicator-title">
                  <el-col :span="12" class="text-left text-standard-font">用眼负荷</el-col>
                  <el-col :span="12" class="text-standard-font text-right">{{ weekData.nearworkBurdenDay }}/720D</el-col>
                </el-row>
                <el-row>
                  <el-progress :text-inside="true" :stroke-width="18" :percentage="weekData.nearworkBurdenDayPercent" status="exception" class="progress-l-r"/>
                </el-row>
                <el-row class="indicator-title m-t">
                  <el-col :span="12" class="text-left text-standard-font">近距离用眼时间</el-col>
                  <el-col :span="12" class="text-standard-font text-right">{{ weekData.nearworkDay }}/260分钟</el-col>
                </el-row>
                <el-row>
                  <el-progress :text-inside="true" :stroke-width="18" :percentage="weekData.nearworkDayPercent" status="exception" class="progress-l-r"/>
                </el-row>
                <el-row class="indicator-title m-t">
                  <el-col :span="12" class="text-left text-standard-font">不良姿势提醒</el-col>
                  <el-col :span="12" class="text-standard-font text-right">{{ weekData.badPostureTimes }}/24次</el-col>
                </el-row>
                <el-row>
                  <el-progress :text-inside="true" :stroke-width="18" :percentage="weekData.badPostureTimesPercent" status="exception" class="progress-l-r"/>
                </el-row>
              </el-col>
            </el-row>
            <div class="tags">
              <h3>诊断意见</h3>
              <label><input v-model="child.tagIds" name="type_clinical" type="checkbox" value="1">&nbsp;&nbsp;行为追踪干预</label>
              <label><input v-model="child.tagIds" name="type_clinical" type="checkbox" value="2">&nbsp;&nbsp;框架眼镜</label>
              <label><input v-model="child.tagIds" name="type_clinical" type="checkbox" value="3">&nbsp;&nbsp;视功能训练</label>
              <label><input v-model="child.tagIds" name="type_clinical" type="checkbox" value="4">&nbsp;&nbsp;角膜塑形镜</label>
              <label><input v-model="child.tagIds" name="type_clinical" type="checkbox" value="5">&nbsp;&nbsp;低浓度阿托品</label>
              <label><input v-model="child.tagIds" name="type_clinical" type="checkbox" value="6">&nbsp;&nbsp;病理性近视</label>
            </div>
          </div>
        </div>
      </div>
      <div style="padding: 40px 20px 0px 20px;">
        <el-row :gutter="20">
          <el-col :span="8">
            <WeekHealthItem :text="textOutTime" :hours="outTimeArray" :times="timeArray"/>
          </el-col>
          <el-col :span="8">
            <WeekHealthItem :text="textLux" :hours="luxDayArray" :times="timeArray"/>
          </el-col>
          <el-col :span="8">
            <WeekHealthItem :text="textStepCount" :hours="stepCountArray" :times="timeArray"/>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="8">
            <WeekHealthItem :text="textBurden" :hours="nearworkBurdenDayArray" :times="timeArray"/>
          </el-col>
          <el-col :span="8">
            <WeekHealthItem :text="textNearwork" :hours="nearworkDayArray" :times="timeArray"/>
          </el-col>
          <el-col :span="8">
            <WeekHealthItem :text="textBadPosture" :hours="badPostureTimesArray" :times="timeArray"/>
          </el-col>
        </el-row>
      </div>
    </el-card>
  </div>
</template>

<script>
import { fetchWeekly } from '@/api/reports'
import WeekHealthItem from '../components/week_health_item'
import WeekHealthItemPdf from '../components/week_health_item_pdf'
import avatar from '@/assets/images/child_boy.png'
export default {
  components: { WeekHealthItem, WeekHealthItemPdf },
  filters: {
    genderFilter(status) {
      const statusMap = {
        male: '男',
        female: '女'
      }
      return statusMap[status]
    }
  },
  props: {
    userId: {
      type: String,
      default: ''
    },
    child: {
      type: Object,
      default: function() {
        return {}
      }
    }
  },
  data() {
    return {
      avatar,
      downloadUrl: '/api/a1/excels/weekly',
      headerUrl: require('../../../assets/images/child_boy.png'),
      timeArray: ['2019-01-01', '2019-01-01', '2019-01-01', '2019-01-01', '2019-01-01', '2019-01-01', '2019-01-01'],
      textHealthIndex: {
        title: '健康评分',
        des: '该数值指当天孩子健康用眼得分情况。',
        unit: '分'
      },
      textOutTime: {
        title: '户外时间',
        des: '该数值指当天孩子在户外走路、玩耍、运动等累积的时间。该数值与白天户外光照强度及户外紫外线有关，傍晚及夜晚在室外不算户外时间。',
        unit: '分钟'
      },
      textLux: {
        title: '光照摄入',
        des: '总光照摄入，记录一天中暴露在所有光照的总和。白天总光照摄入，记录7:00-19:00这段时间内暴露的光照总和。白天平均光照摄入，单位分钟内的白天总光照摄入的平均值。夜晚总光照摄入，记录19:00-7:00这段时间内暴露的光照总和。夜晚平均光照摄入，单位分钟内的夜晚总光照摄入的平均值。',
        unit: 'lux勒克斯'
      },
      textStepCount: {
        title: '运动步数',
        des: '该数值指孩子当天任何运动步数的总和。',
        unit: '步数'
      },
      textBurden: {
        title: '用眼负荷',
        des: '用眼负荷定义：室内状态下不同的低头角度（视物距离）的时间对应关系 放松：抬头或0-14度=0.5D，轻：15-29度=2D，中：30-44度=3D。',
        unit: 'D'
      },
      textNearwork: {
        title: '近距离用眼时间',
        des: '该数值指孩子看书、手机、电脑、玩乐高等近距离用眼的时间。采集计算标准： 室内情况下，低头角度大于等于15度累积的时间。',
        unit: '分钟'
      },
      textBadPosture: {
        title: '不良姿势提醒',
        des: ' 该数值指孩子近距离用眼时低头、歪头过度时智能眼镜提醒矫正姿势的次数。采集计算标准： 室内情况下，当低头超过30度或歪头超过20度时镜腿提醒的次数累积总和。',
        unit: '次数'
      },
      healthIndexArray: [0, 0, 0, 0, 0, 0, 0],
      outTimeArray: [0, 0, 0, 0, 0, 0, 0],
      luxDayArray: [0, 0, 0, 0, 0, 0, 0],
      stepCountArray: [0, 0, 0, 0, 0, 0, 0],
      nearworkBurdenDayArray: [0, 0, 0, 0, 0, 0, 0],
      nearworkDayArray: [0, 0, 0, 0, 0, 0, 0],
      badPostureTimesArray: [0, 0, 0, 0, 0, 0, 0],
      weekData: {
        healthIndex: 0,
        wearTime: 0,
        upElement: 0,
        downElement: 0,
        weekendScoreAvg: 0,
        weekScoreAvg: 0,
        outTime: 0,
        protectLuxTime: 0,
        luxDay: 0,
        stepCount: 0,
        nearworkBurdenDay: 0,
        badPostureTimes: 0,
        nearworkDay: 0,
        outTimePercent: 0,
        protectLuxTimePercent: 0,
        luxDayPercent: 0,
        stepCountPercent: 0,
        nearworkBurdenDayPercent: 0,
        badPostureTimesPercent: 0,
        nearworkDayPercent: 0,
        suggest: ''
      },
      selectDate: new Date(),
      startDate: '',
      endDate: ''
    }
  },
  computed: {
    htmlTitle: function() {
      return this.selectDate + '周报'
    }
  },
  created() {
    this.getData()
  },
  methods: {
    getData() {
      fetchWeekly({ child_id: this.userId, date: this.selectDate }).then(response => {
        this.timeArray = response.data.timeArray
        this.healthIndexArray = response.data.healthIndexArray
        this.outTimeArray = response.data.outTimeArray
        this.luxDayArray = response.data.luxDayArray
        this.stepCountArray = response.data.stepCountArray
        this.nearworkBurdenDayArray = response.data.nearworkBurdenDayArray
        this.nearworkDayArray = response.data.nearworkDayArray
        this.badPostureTimesArray = response.data.badPostureTimesArray
        this.startDate = response.data.startDate
        this.endDate = response.data.endDate
        this.weekData = response.data
      })
    },
    changeDate() {
      this.getData()
    }
  }
}
</script>
<style scoped>
.score-des {
  margin-top: 20px;
  padding: 10px;
  border-radius: 20px;
  font-size: 14px;
  text-align: center;
  color: #f1e6e6;
}
.green-back {
  background-color: #32CD32;
}
.red-back {
  background-color: #e30c40;
}
.adding-score{
  margin:10px 8px;
  padding-bottom: 6px;
  border-bottom: 1px solid #ccc;
  font-size: 20px;
  font-weight: 500;
}
#pdfDom .header{
  height: 200px;
  width: 100%;
  padding-top: 16px;
  background-image: url(../../../assets/images/code_banner.png);
  background-repeat: no-repeat;
  background-size: 100% 100%;
  text-align: center;
  position: relative;
  margin-bottom: 20px;
}
#pdfDom .header-avatar{
  width: 100%;
  text-align: center;
  position: absolute;
  top: 30%;
}
#pdfDom .imgUrl{
  width: 120px;
  height: 120px;
}
.el-progress__text {
  display: none !important;
}
.title{
  font-size: 18px;
  font-weight: 400;
}
.right-bar{
  min-width: 140px;
  padding: 0 16px 4px;
  border-bottom:1px solid #aaa;
  text-align: center;
  display: inline-block;
}
.weekly-contents h2{
  font-weight: 20px;
  font-weight: 400;
}
.score-list, li{
  list-style: none;
  padding:0;
  margin:0;
}
.score-list{
  overflow: hidden;
  padding-bottom: 20px;
}
.score-list li{
  float: left;
  margin-right:20px;
}
.score-list.next li{
  margin-right:76px;
}
.text-left{
  text-align: left;
}
.text-right{
  text-align: right;
}
.indicator-title{
  margin-left: 8px;
  margin-right: 8px;
  padding-bottom:4px;
}
.m-t{
  margin-top: 30px;
}
.m-t-1{
  margin-top:20px;
}
.c-green{
  color: limegreen;
}
.c-red{
  color: red;
}
.c-blue{
  color: #1197ff;
}
.progress-bar >>> .el-progress-bar__outer {
  background-color: #dcdfe6 !important;
}
.assess-box{
  background-color: #dcdfe6 !important;
  padding: 10px;
  border-radius: 4px;
  height: 148px;
  margin-top: -20px;
  font-size: 14px;
  line-height: 20px;
}
</style>
