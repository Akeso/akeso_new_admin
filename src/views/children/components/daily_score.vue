<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span>近视预测</span>
    </div>
    <el-row>
      <el-col :span="24">
        <el-row style="margin-bottom: 10px;">
          <el-col>
            <label for="">选择日期</label>
            <el-date-picker
              v-model="selectDate"
              type="date"
              placeholder="选择日期"
              value-format="yyyy-MM-dd"
              @change="changeDate"/>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="5">
            <div style="text-align: center;">
              <span class="text-score">{{ healthScore.healthIndex }}</span>
            </div>
            <div style="text-align: center; margin-top: 20px;">
              <span style="font-size: 14px; background: #2bd710; padding: 8px 16px; border-radius:25px; color: #fff;">总加分{{ healthScore.upScoreMax }},总减分{{ healthScore.downScoreMax }}</span>
            </div>
            <div style="text-align: center; margin-top: 20px;">
              <span style="font-size: 16px;">戴镜时间{{ healthScore.wearTime }}</span>
            </div>
          </el-col>
          <el-col :span="19">
            <el-row :span="24" class="margin-bottom">
              <el-col :span="3" class="text-right text-standard-font">户外时间</el-col>
              <el-col :span="6">
                <el-progress :text-inside="true" :stroke-width="24" :percentage="healthScore.outTimePercent" status="success" class="progress-l-r"/>
              </el-col>
              <el-col :span="3" class="text-standard-font">{{ healthScore.outTime }}/120分钟</el-col>
              <el-col :span="3" class="text-right text-standard-font">用眼负荷</el-col>
              <el-col :span="6">
                <el-progress :text-inside="true" :stroke-width="24" :percentage="healthScore.nearworkBurdenPercent" status="success" class="progress-l-r"/>
              </el-col>
              <el-col :span="3" class="text-standard-font">{{ healthScore.nearworkBurdenDay }}/750D</el-col>
            </el-row>
            <el-row :span="24" class="margin-bottom">
              <el-col :span="3" class="text-right text-standard-font">护眼光照时间</el-col>
              <el-col :span="6">
                <el-progress :text-inside="true" :stroke-width="24" :percentage="healthScore.protectLuxTimePercent" status="success" class="progress-l-r"/>
              </el-col>
              <el-col :span="3" class="text-standard-font">{{ healthScore.protectLuxTime }}/35分钟</el-col>
              <el-col :span="3" class="text-right text-standard-font">近距离用眼时间</el-col>
              <el-col :span="6">
                <el-progress :text-inside="true" :stroke-width="24" :percentage="healthScore.nearworkPercent" status="success" class="progress-l-r"/>
              </el-col>
              <el-col :span="3" class="text-standard-font">{{ healthScore.nearworkTotal }}/240分钟</el-col>
            </el-row>
            <el-row :span="24" class="margin-bottom">
              <el-col :span="3" class="text-right text-standard-font">户外阳光摄入</el-col>
              <el-col :span="6">
                <el-progress :text-inside="true" :stroke-width="24" :percentage="healthScore.luxDayPercent" status="success" class="progress-l-r"/>
              </el-col>
              <el-col :span="3">{{ healthScore.outTimeLux }}/300000lux</el-col>
              <el-col :span="3" class="text-right text-standard-font">不良姿势提醒</el-col>
              <el-col :span="6">
                <el-progress :text-inside="true" :stroke-width="24" :percentage="healthScore.badPostureDayPercent" status="success" class="progress-l-r"/>
              </el-col>
              <el-col :span="3" class="text-standard-font">{{ healthScore.badPostureTimes }}/90次</el-col>
            </el-row>
            <el-row :span="24" class="margin-bottom">
              <el-col :span="3" class="text-right text-standard-font">运动步数</el-col>
              <el-col :span="6">
                <el-progress :text-inside="true" :stroke-width="24" :percentage="healthScore.stepCountPercent" status="success" class="progress-l-r"/>
              </el-col>
              <el-col :span="3" class="text-standard-font">{{ healthScore.stepCount }}/10000步</el-col>
            </el-row>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <ve-line :data="chartData" :settings="chartSettings" :set-option-opts="true"/>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </el-card>
</template>

<script>
import { fetchDaily } from '@/api/reports'
export default {
  props: {
    userId: {
      type: String,
      default: ''
    }
  },
  data() {
    this.chartSettings = {
      labelMap: {
        score: '分数'
      }
    }
    return {
      offsetV: 1,
      selectDate: new Date(),
      chartData: {
        columns: ['date', 'score'],
        rows: [
          { 'date': '00:00', 'score': 0 },
          { 'date': '01:00', 'score': 0 },
          { 'date': '02:00', 'score': 0 },
          { 'date': '03:00', 'score': 0 },
          { 'date': '04:00', 'score': 0 },
          { 'date': '05:00', 'score': 0 },
          { 'date': '06:00', 'score': 0 },
          { 'date': '07:00', 'score': 0 },
          { 'date': '08:00', 'score': 0 },
          { 'date': '09:00', 'score': 0 },
          { 'date': '10:00', 'score': 0 },
          { 'date': '11:00', 'score': 0 },
          { 'date': '12:00', 'score': 0 },
          { 'date': '13:00', 'score': 0 },
          { 'date': '14:00', 'score': 0 },
          { 'date': '15:00', 'score': 0 },
          { 'date': '16:00', 'score': 0 },
          { 'date': '17:00', 'score': 0 },
          { 'date': '18:00', 'score': 0 },
          { 'date': '19:00', 'score': 0 },
          { 'date': '20:00', 'score': 0 },
          { 'date': '21:00', 'score': 0 },
          { 'date': '22:00', 'score': 0 },
          { 'date': '23:00', 'score': 0 }
        ]
      },
      healthScore: {}
    }
  },
  created() {
    this.getDaily()
  },
  mounted() {
  },
  methods: {
    getDaily() {
      fetchDaily({ child_id: this.userId, selectDate: this.selectDate }).then(response => {
        this.healthScore = response.data
        const healthIndexes = response.data.healthIndexHour
        this.chartData.rows.forEach(function(item, index) {
          item.score = healthIndexes[index]
        })
      })
    },
    changeDate() {
      this.getDaily()
    }
  }
}
</script>

<style scope>
.el-progress-bar__outer {
  background-color: gray !important;
}
.text-score {
  width: 100%; font-size: 80px; color: #2bd710;
}
.text-right {
  text-align: right;
}
.text-standard-font {
  font-size: 14px;
}
.margin-bottom {
  margin-bottom: 20px;
}
.progress-l-r {
  margin-left: 8px;
  margin-right: 8px;
}
</style>
