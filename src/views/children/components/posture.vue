<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span>用眼姿势</span>
      <el-tooltip effect="light" placement="right">
        <div slot="content">
          该数值指孩子近距离用眼时低头、歪头过度时<br>
          智能眼镜提醒矫正姿势的时间。
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
      </el-col>
    </el-row>
  </el-card>
</template>

<script>
import { fetchPosture } from '@/api/reports'
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
        data: ['不良用眼姿势']
      },
      tooltip: {
        trigger: 'axis',
        formatter: '{b}<br />不良用眼姿势：{c} 分钟'
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
        name: '分钟',
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
      fetchPosture({ child_id: this.userId, selectDate: this.selectDate }).then(response => {
        this.series.data = response.data.postureHour
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
