<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span>用眼姿势</span>
    </div>
    <el-row>
      <el-col :span="24">
        <el-row style="margin-bottom: 10px;">
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
        <!--<el-row>-->
        <!--<el-col :span="24">-->
        <!--<ve-line :data="chartData" :settings="chartSettings" :set-option-opts="true"/>-->
        <!--</el-col>-->
        <!--</el-row>-->
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
