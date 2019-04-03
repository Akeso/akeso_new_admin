<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span>户外时间</span>
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
            <!--<ve-histogram :data="chartData" :settings="chartSettings" :set-option-opts="true"/>-->
            <ve-histogram :color="colorHistogram" :legend="legendHistogram" :x-axis="xAxisHistogram" :y-axis="yAxisHistogram" :series="seriesHistogram"/>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </el-card>
</template>

<script>
import { fetchOutTime } from '@/api/reports'
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
      selectDate: new Date(),
      titleHistogram: {
        text: '保护因素分析'
      },
      colorHistogram: ['#26c281', '#003366'],
      xAxisHistogram: {
        type: 'category',
        boundaryGap: true,
        data: [
          '00:00',
          '01:00',
          '02:00',
          '03:00',
          '04:00',
          '05:00',
          '06:00',
          '07:00',
          '08:00',
          '09:00',
          '10:00',
          '11:00',
          '12:00',
          '13:00',
          '14:00',
          '15:00',
          '16:00',
          '17:00',
          '18:00',
          '19:00',
          '20:00',
          '21:00',
          '22:00',
          '23:00'
        ]
      },
      legendHistogram: {
        data: ['户外时长', '室内时长']
      },
      yAxisHistogram: {
        type: 'value'
      },
      seriesHistogram: [
        {
          name: '户外时长',
          type: 'bar',
          barWidth: '30%',
          label: {
            // normal: {
            show: true,
            formatter: '{c}',
            position: 'top',
            fontSize: 12,
            fontWeight: 'bold',
            color: '#000000'
          },
          itemStyle: {
            color: '#26c281'
          },
          data: []
        },
        {
          name: '室内时长',
          type: 'bar',
          barWidth: '30%',
          label: {
            // normal: {
            show: true,
            formatter: '{c}',
            position: 'top',
            fontSize: 12,
            fontWeight: 'bold',
            color: '#000000'
          },
          itemStyle: {
            color: '#003366'
          },
          data: []
        }
      ]
    }
  },
  created() {
    this.getDaily()
  },
  mounted() {
  },
  methods: {
    getDaily() {
      fetchOutTime({ child_id: this.userId, selectDate: this.selectDate }).then(response => {
        this.seriesHistogram[0].data = response.data.outTimeHour
        this.seriesHistogram[1].data = response.data.inTimeHour
        // this.healthScore = response.data
        // const healthIndexes = response.data.healthIndexHour
        // this.chartData.rows.forEach(function(item, index) {
        //   item.score = healthIndexes[index]
        // })
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
