<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span>运动步数</span>
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
        <el-row>
          <el-col :span="24">
            <ve-line :legend="legend" :tooltip="tooltip" :x-axis="xAxis" :y-axis="yAxis" :series="series"/>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </el-card>
</template>

<script>
import { fetchStepCount } from '@/api/reports'
export default {
  props: {
    userId: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      selectDate: new Date(),
      legend: {
        data: ['光照摄入量']
      },
      tooltip: {
        trigger: 'axis',
        formatter: '{b}<br />运动步数：{c} 步'
      },
      xAxis: {
        type: 'category',
        data: [
          '00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00',
          '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00',
          '20:00', '21:00', '22:00', '23:00'
        ]
      },
      yAxis: {
        name: '步数',
        nameLocation: 'end',
        nameTextStyle: {
          align: 'right'
        },
        type: 'value'
      },
      series: {
        data: [],
        type: 'line'
      }
    }
  },
  created() {
    this.getDaily()
  },
  mounted() {
  },
  methods: {
    getDaily() {
      fetchStepCount({ child_id: this.userId, selectDate: this.selectDate }).then(response => {
        this.series.data = response.data.stepCountHour
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
