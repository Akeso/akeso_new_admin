<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span>户外时间</span>
      <el-tooltip effect="light" placement="right">
        <div slot="content">
          该数值指当天孩子在户外走路、玩耍、<br>
          运动等累积的时间。该数值与白天户外光照强度<br>
          及户外紫外线有关，傍晚及夜晚在室外不算户外时间。
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
            <!--<ve-histogram :data="chartData" :settings="chartSettings" :set-option-opts="true"/>-->
            <ve-pie :title="title" :tooltip="tooltipPie" :series="seriesPie"/>
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
      title: {
        text: '户内外时间'
      },
      colorHistogram: ['#26c281', '#003366'],
      xAxisHistogram: {
        type: 'category',
        boundaryGap: true,
        data: [
          '01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00',
          '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00',
          '20:00', '21:00', '22:00', '23:00', '24:00'
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
          itemStyle: { color: '#003366' },
          data: []
        }
      ],
      tooltipPie: {
        trigger: 'item',
        formatter: '{b} : {c}分钟 ({d}%)'
      },
      seriesPie: {
        type: 'pie',
        radius: '65%',
        center: ['50%', '60%'],
        data: [
          { value: 0, name: '户外时长', itemStyle: { color: '#26c281' }},
          { value: 0, name: '室内时长', itemStyle: { color: '#003366' }}
        ],
        itemStyle: {
          emphasis: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
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
      fetchOutTime({ child_id: this.userId, selectDate: this.selectDate }).then(response => {
        this.seriesHistogram[0].data = response.data.outTimeHour
        this.seriesHistogram[1].data = response.data.inTimeHour
        this.seriesPie.data[0].value = response.data.outTime
        this.seriesPie.data[1].value = response.data.inTime
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
