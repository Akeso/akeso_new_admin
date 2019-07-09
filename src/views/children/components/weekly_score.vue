<template>
  <div>
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
    <el-card id="pdfDom" class="box-card">
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
</template>

<script>
import { fetchWeekly } from '@/api/reports'
import WeekHealthItem from '../components/week_health_item'
export default {
  components: { WeekHealthItem },
  props: {
    userId: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      downloadUrl: '/api/a1/excels/weekly',
      timeArray: ['2019-01-01', '2019-01-01', '2019-01-01', '2019-01-01', '2019-01-01', '2019-01-01', '2019-01-01'],
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
      selectDate: new Date()
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
        this.outTimeArray = response.data.outTimeArray
        this.luxDayArray = response.data.luxDayArray
        this.stepCountArray = response.data.stepCountArray
        this.nearworkBurdenDayArray = response.data.nearworkBurdenDayArray
        this.nearworkDayArray = response.data.nearworkDayArray
        this.badPostureTimesArray = response.data.badPostureTimesArray
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
</style>
