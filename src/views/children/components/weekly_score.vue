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
      <el-button class="filter-item" type="primary" icon="el-icon-download" >导出Excel</el-button>
    </el-row>
    <el-card id="pdfDom" class="box-card">
      <div slot="header" class="clearfix">
        <span>健康周报</span>
      </div>
      <el-row>
        <el-col :span="14">
          <ve-histogram :color="colorHistogram" :x-axis="xAxisHistogram" :y-axis="yAxisHistogram" :series="seriesHistogram"/>
          <ve-radar :title="titleRadarGood" :tooltip="tooltipRadarGood" :radar="radarRadarGood" :series="seriesRadarGood"/>
          <ve-radar :title="titleRadarBad" :tooltip="tooltipRadarBad" :radar="radarRadarBad" :series="seriesRadarBad"/>
        </el-col>
        <el-col :span="10">
          <el-row>
            <el-card class="box-card">
              <div slot="header" class="clearfix">
                <span>得分情况</span>
              </div>
              <p style="font-size: 20px; font-weight: bold;">本周平均分 {{ weekData.healthIndex }}</p>
              <p>总戴镜时间 {{ weekData.wearTime }}</p>
              <p>累计保护因素 {{ weekData.upElement }}</p>
              <p>累计危险因素 {{ weekData.downElement }}</p>
              <p>周一到周五平均分 {{ weekData.weekScoreAvg }}</p>
              <p>周六周日平均分 {{ weekData.weekendScoreAvg }}</p>
            </el-card>
          </el-row>
          <el-row>
            <el-card class="box-card">
              <div slot="header" class="clearfix">
                <span>加分项</span>
              </div>
              <label for="">户外时间/天</label>
              <el-progress :stroke-width="14" :percentage="weekData.outTimePercent * 100" :show-text="true" :status="statusText" class="progress-l-r">
                <div>
                  <span>{{ weekData.outTime }}</span>
                </div>
              </el-progress>
              <label for="">护眼光照时间/天</label>
              <el-progress :stroke-width="14" :percentage="weekData.protectLuxTimePercent * 100" :show-text="true" :status="statusText" class="progress-l-r">
                <div>
                  <span>{{ weekData.protectLuxTime }}</span>
                </div>
              </el-progress>
              <label for="">阳光摄入量/天</label>
              <el-progress :stroke-width="14" :percentage="weekData.luxDayPercent * 100" :show-text="true" :status="statusText" class="progress-l-r">
                <div>
                  <span>{{ weekData.luxDay }}</span>
                </div>
              </el-progress>
              <label for="">运动步数/天</label>
              <el-progress :stroke-width="14" :percentage="weekData.stepCountPercent * 100" :show-text="true" :status="statusText" class="progress-l-r">
                <div>
                  <span>{{ weekData.stepCount }}</span>
                </div>
              </el-progress>
            </el-card>
            <el-card class="box-card">
              <div slot="header" class="clearfix">
                <span>减分项</span>
              </div>
              <label for="">用眼负荷/天</label>
              <el-progress :stroke-width="14" :percentage="weekData.nearworkBurdenDayPercent * 100" :show-text="true" :status="statusText" class="progress-l-r">
                <div>
                  <span>{{ weekData.nearworkBurdenDay }}</span>
                </div>
              </el-progress>
              <label for="">不良姿势提醒/天</label>
              <el-progress :stroke-width="14" :percentage="weekData.badPostureTimesPercent * 100" :show-text="true" :status="statusText" class="progress-l-r">
                <div>
                  <span>{{ weekData.badPostureTimes }}</span>
                </div>
              </el-progress>
              <label for="">近距离用眼时间/天</label>
              <el-progress :stroke-width="14" :percentage="weekData.nearworkDayPercent * 100" :show-text="true" :status="statusText" class="progress-l-r">
                <div>
                  <span>{{ weekData.nearworkBurdenDay }}</span>
                </div>
              </el-progress>
            </el-card>
          </el-row>
          <el-row>
            <el-card class="box-card">
              <div slot="header" class="clearfix">
                <span>医生建议</span>
                <el-button style="float: right; padding: 3px 0" type="text">编辑建议</el-button>
              </div>
              <div>
                {{ weekData.suggest }}
              </div>
            </el-card>
          </el-row>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script>
import { fetchWeekly } from '@/api/reports'
export default {
  props: {
    userId: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
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
      // 以上是单项指标，以下是图表样式
      selectDate: new Date(),
      statusText: 'text',
      colorHistogram: ['#26c281'],
      xAxisHistogram: {
        type: 'category',
        boundaryGap: true,
        data: []
      },
      yAxisHistogram: {
        type: 'value'
      },
      seriesHistogram: {
        name: '分数',
        type: 'bar',
        barWidth: '40%',
        label: {
          // normal: {
          show: true,
          formatter: '{c}分',
          position: 'top',
          fontSize: 12,
          fontWeight: 'bold',
          color: '#000000'
        },
        data: []
      },
      titleRadarGood: {
        text: '保护因素分析'
      },
      indicatorGood: [],
      tooltipRadarGood: {
      },
      radarRadarGood: {
        indicator: [
          { text: '户外时间' },
          { text: '运动步数' },
          { text: '户外阳光摄入' }
        ],
        center: ['50%', '50%'],
        radius: '60%',
        startAngle: 90,
        splitNumber: 2,
        shape: 'circle',
        name: {
          formatter: '【{value}】',
          textStyle: {
            color: '#72ACD1'
          }
        },
        splitArea: {
          areaStyle: {
            color: ['#eeeeee', '#ffffff'],
            shadowColor: 'rgba(0, 0, 0, 0.3)'
          }
        },
        axisLine: {
          lineStyle: {
            color: '#bbbbbb'
          }
        },
        splitLine: {
          lineStyle: {
            color: '#d4d4d4'
          }
        }
      },
      seriesRadarGood: {
        type: 'radar',
        data: [
          {
            value: [120, 10000, 300000],
            name: '标准值',
            symbol: 'rect',
            symbolSize: 5,
            lineStyle: {
              color: '#8e8e8e',
              type: 'dashed'
            }
          },
          {
            value: [],
            name: '实际值',
            lineStyle: {
              color: '#00a600'
            }
          }
        ]
      },
      titleRadarBad: {
        text: '危险因素分析'
      },
      tooltipRadarBad: {},
      radarRadarBad: {
        indicator: [
          { text: '户外时间' },
          { text: '运动步数' },
          { text: '户外阳光摄入' }
        ],
        center: ['50%', '50%'],
        radius: '60%',
        startAngle: 90,
        splitNumber: 2,
        shape: 'circle',
        name: {
          formatter: '【{value}】',
          textStyle: {
            color: '#72ACD1'
          }
        },
        splitArea: {
          areaStyle: {
            color: ['#adadad', '#f0f0f0'],
            shadowColor: 'rgba(0, 0, 0, 0.3)'
          }
        },
        axisLine: {
          lineStyle: {
            color: 'rgba(255, 255, 255, 0.5)'
          }
        },
        splitLine: {
          lineStyle: {
            color: 'rgba(255, 255, 255, 0.5)'
          }
        }
      },
      seriesRadarBad: {
        type: 'radar',
        data: [
          {
            value: [750, 240, 90],
            name: '标准值',
            symbol: 'rect',
            symbolSize: 5,
            lineStyle: {
              color: '#8e8e8e',
              type: 'dashed'
            }
          },
          {
            value: [],
            name: '实际值',
            lineStyle: {
              color: '#ff0000'
            }
          }
        ]
      }
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
        this.xAxisHistogram.data = response.data.timeArray
        this.seriesHistogram.data = response.data.healthIndexArray
        this.radarRadarGood.indicator = response.data.goodIndicator
        this.seriesRadarGood.data[1].value = response.data.goodValues
        this.radarRadarBad.indicator = response.data.badIndicator
        this.seriesRadarBad.data[1].value = response.data.badValues
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
