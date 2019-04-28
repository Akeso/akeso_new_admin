<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span>光照摄入</span>
      <el-tooltip effect="light" placement="right">
        <div slot="content">
          总光照摄入，记录一天中暴露在所有光照的总和。<br>
          白天总光照摄入，记录6:00-18:00这段时间内暴露的光照总和。<br>
          白天平均光照摄入，单位分钟内的白天总光照摄入的平均值。<br>
          夜晚总光照摄入，记录18:00-6:00这段时间内暴露的光照总和。<br>
          夜晚平均光照摄入，单位分钟内的夜晚总光照摄入的平均值。
        </div>
        <i class="el-icon-question"/>
      </el-tooltip>
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
            <ve-line :x-axis="xAxis" :tooltip="tooltip" :legend="legend" :y-axis="yAxis" :series="series" />
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="4">
            <el-tag>{{ luxData.luxDay }} lux</el-tag>
            <h4>总光照摄入</h4>
          </el-col>
          <el-col :span="5">
            <el-tag>{{ luxData.luxDaytime }} lux</el-tag>
            <h4>白天总光照摄入</h4>
          </el-col>
          <el-col :span="5">
            <el-tag>{{ luxData.luxDaytimeAvg }} lux</el-tag>
            <h4>白天平均光照摄入</h4>
          </el-col>
          <el-col :span="5">
            <el-tag>{{ luxData.luxNighttime }} lux</el-tag>
            <h4>夜晚总光照摄入</h4>
          </el-col>
          <el-col :span="5">
            <el-tag>{{ luxData.luxNighttimeAvg }} lux</el-tag>
            <h4>夜晚平均光照摄入</h4>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </el-card>
</template>

<script>
import { fetchLuxTake } from '@/api/reports'
export default {
  props: {
    userId: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      luxData: {},
      selectDate: new Date(),
      legend: {
        data: ['光照摄入量']
      },
      tooltip: {
        trigger: 'axis',
        formatter: '{b}<br />光照摄入：{c} lux'
      },
      xAxis: {
        type: 'category',
        data: [
          '01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00',
          '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00',
          '20:00', '21:00', '22:00', '23:00', '24:00'
        ]
      },
      yAxis: {
        name: '           光照摄入量(lux)',
        nameLocation: 'end',
        nameTextStyle: {
          align: 'right'
        },
        type: 'value'
      },
      series: {
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        type: 'line'
      }
    }
  },
  created() {
    this.getData()
  },
  mounted() {
  },
  methods: {
    getData() {
      fetchLuxTake({ child_id: this.userId, selectDate: this.selectDate }).then(response => {
        this.luxData = response.data
        this.series.data = response.data.luxHour
      })
    },
    changeDate() {
      this.getData()
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
