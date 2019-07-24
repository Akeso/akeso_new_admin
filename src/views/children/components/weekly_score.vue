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
        <el-button class="filter-item" type="primary" icon="el-icon-download" @click="getPdf()">导出PDF</el-button>
        <el-button class="filter-item" type="primary" icon="el-icon-download">
          <a :href="downloadUrl + '?child_id=' + userId + '&selectDate=' + selectDate">导出Excel</a>
        </el-button>
      </el-row>
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>健康周报</span>
        </div>
        <el-row>
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>得分情况</span>
            </div>
            <p style="font-size: 20px; font-weight: bold;">本周平均分 {{ weekData.healthIndex }}</p>
            <el-row :gutter="20">
              <el-col :span="8"><span>总戴镜时间 {{ weekData.wearTime }}</span></el-col>
              <el-col :span="8"><span>累计保护因素 {{ weekData.upElement }}</span></el-col>
              <el-col :span="8"><span>累计危险因素 {{ weekData.downElement }}</span></el-col>
            </el-row>
            <el-row :gutter="20">
              <el-col :span="8"><span>周一到周五平均分 {{ weekData.weekScoreAvg }}</span></el-col>
              <el-col :span="8"><span>周六周日平均分 {{ weekData.weekendScoreAvg }}</span></el-col>
            </el-row>
          </el-card>
        </el-row>
        <el-row style="margin-top: 20px;" class="margin-bottom">
          <el-col :span="3" class="text-center text-standard-font">户外时间</el-col>
          <el-col :span="16">
            <el-progress :text-inside="true" :stroke-width="18" :percentage="weekData.outTimePercent" status="success" class="progress-l-r"/>
          </el-col>
          <el-col :span="4" class="text-standard-font">{{ weekData.outTime }}/120分钟</el-col>
        </el-row>
        <el-row class="margin-bottom">
          <el-col :span="3" class="text-center text-standard-font">光照摄入</el-col>
          <el-col :span="16">
            <el-progress :text-inside="true" :stroke-width="18" :percentage="weekData.luxDayPercent" status="success" class="progress-l-r"/>
          </el-col>
          <el-col :span="3" class="text-standard-font">{{ weekData.luxDay }}/360000lux</el-col>
        </el-row>
        <el-row class="margin-bottom">
          <el-col :span="3" class="text-center text-standard-font">运动步数</el-col>
          <el-col :span="16">
            <el-progress :text-inside="true" :stroke-width="18" :percentage="weekData.stepCountPercent" status="success" class="progress-l-r"/>
          </el-col>
          <el-col :span="3" class="text-standard-font">{{ weekData.stepCount }}/12000步</el-col>
        </el-row>
        <el-row class="margin-bottom">
          <el-col :span="3" class="text-center text-standard-font">用眼负荷</el-col>
          <el-col :span="16">
            <el-progress :text-inside="true" :stroke-width="18" :percentage="weekData.nearworkBurdenDayPercent" status="exception" class="progress-l-r"/>
          </el-col>
          <el-col :span="3" class="text-standard-font">{{ weekData.nearworkBurdenDay }}/720D</el-col>
        </el-row>
        <el-row class="margin-bottom">
          <el-col :span="3" class="text-center text-standard-font">近距离用眼时间</el-col>
          <el-col :span="16">
            <el-progress :text-inside="true" :stroke-width="18" :percentage="weekData.nearworkDayPercent" status="exception" class="progress-l-r"/>
          </el-col>
          <el-col :span="3" class="text-standard-font">{{ weekData.nearworkDay }}/260分钟</el-col>
        </el-row>
        <el-row class="margin-bottom">
          <el-col :span="3" class="text-center text-standard-font">不良姿势提醒</el-col>
          <el-col :span="16">
            <el-progress :text-inside="true" :stroke-width="18" :percentage="weekData.badPostureTimesPercent" status="exception" class="progress-l-r"/>
          </el-col>
          <el-col :span="3" class="text-standard-font">{{ weekData.badPostureTimes }}/45次</el-col>
        </el-row>
        <WeekHealthItem :text="textOutTime" :hours="outTimeArray" :times="timeArray"/>
        <WeekHealthItem :text="textLux" :hours="luxDayArray" :times="timeArray"/>
        <WeekHealthItem :text="textStepCount" :hours="stepCountArray" :times="timeArray"/>
        <WeekHealthItem :text="textBurden" :hours="nearworkBurdenDayArray" :times="timeArray"/>
        <WeekHealthItem :text="textNearwork" :hours="nearworkDayArray" :times="timeArray"/>
        <WeekHealthItem :text="textBadPosture" :hours="badPostureTimesArray" :times="timeArray"/>
      </el-card>
    </div>
    <div id="pdfDom" class="pdf-container" style="">
      <div class="clear">
        <div class="header">
          <h1>儿童用眼健康行为模式风险分析报告周报1111</h1>
          <!--<img :src="avatar" class="avatar" alt="">-->
        </div>
        <!--<div class="info">
          <ul>
            <li>
              <span class="title">姓名</span>
              <span class="right-bar">{{ child.name }}</span>
            </li>
            <li>
              <span class="title">年龄</span>
              <span class="right-bar">{{ child.age }}</span>
            </li>
            <li>
              <span class="title">性别</span>
              <span class="right-bar">{{ child.gender }}</span>
            </li>
          </ul>
          <ul>
            <li>
              <span class="title">检查日期</span>
              <span class="right-bar">{{ startDate }} 到 {{ endDate }}</span>
            </li>
          </ul>
        </div>
        <div class="weekly-contents">
          <h2 class="c-blue">本周评价得分 {{ weekData.healthIndex }}</h2>
          <ul class="weekle-list">
            <li>总戴镜时间 <span class="c-blue">{{ weekData.wearTime }}</span></li>
            <li>总戴镜时间 <span class="c-blue">{{ weekData.upElement }}</span></li>
            <li>累计危险因素 <span class="c-blue">{{ weekData.downElement }}</span></li>
            <li>周一到周五平均分 <span class="c-blue">{{ weekData.weekScoreAvg }}</span></li>
            <li>周六周日平均分 <span class="c-blue">{{ weekData.weekendScoreAvg }}</span></li>
          </ul>
        </div>
        <el-row style="margin:0 10px;">
          <el-col :span="16">
            <div style="padding-right:10px;">
              <WeekHealthItemPdf :hours="healthIndexArray" :times="timeArray" style="margin-top: -30px;"/>
            </div>
            <div class="assess-box" style="padding-right:10px;">
              该数值指当天孩子健康用眼得分情况。
            </div>
          </el-col>
          <el-col :span="8" class="progress-bar">
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
              <el-col :span="12" class="text-standard-font text-right">{{ weekData.badPostureTimes }}/45次</el-col>
            </el-row>
            <el-row>
              <el-progress :text-inside="true" :stroke-width="18" :percentage="weekData.badPostureTimesPercent" status="exception" class="progress-l-r"/>
            </el-row>
          </el-col>
        </el-row>-->
      </div>
    </div>
  </div>
</template>

<script>
import { fetchWeekly } from '@/api/reports'
import WeekHealthItem from '../components/week_health_item'
import WeekHealthItemPdf from '../components/week_health_item_pdf'
import avatar from '@/assets/images/child_boy.png'
export default {
  components: { WeekHealthItem, WeekHealthItemPdf },
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
.el-progress__text {
  display: none !important;
}
.pdf-container{
  width: 800px;
  position: absolute;
  top: 20px;
}
.clear:after{ display:block; content:""; clear:both;}
.clear{ zoom:1;}
.header{
  height: 280px;
  width: 100%;
  /*background-image: url(../../../assets/images/combined.png);
  background-repeat: no-repeat;
  background-size: 100% 100%;*/
  position: relative;
  background: red;
}
.avatar{
  width:120px;
  height: 120px;
  display: inline-block;
  position: absolute;
  left: 50%;
  top: 120px;
  margin-left: -60px;
}
.header h1{
  margin: 0;
  padding-top: 32px;
  font-weight: 400;
  text-align: center;
  color: #fff;
  font-size: 40px;
}
.info{
  padding-top:20px;
  margin: -17px 1px 0;
  background: #fff;
  position: relative;
}
.info ul, li{
  padding: 0;
  list-style: none;
}
.info ul{
  overflow: hidden;
  padding-left: 60px;
  padding-bottom: 20px;
}
.info li{
  float: left;
  margin-right: 50px;
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
.weekly-contents{
  padding: 10px 20px;
}
.weekly-contents h2{
  font-weight: 20px;
  font-weight: 400;
}
.weekle-list, li{
  list-style: none;
  padding:0;
  margin:0;
}
.weekle-list{
  overflow: hidden;
  padding-bottom: 20px;
}
.weekle-list li{
  float: left;
  margin-right:20px;
}
.weekle-list.next li{
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
.adding-score{
  margin:0 8px 8px;
  padding-bottom: 6px;
  border-bottom: 1px solid #ccc;
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
