<template>
  <div :class="className" :style="{height:height,width:width}"/>
</template>

<script>
import echarts from 'echarts'
require('echarts/theme/macarons') // echarts theme
import { debounce } from '@/utils'
import echartsIcon from '@/assets/images/gender.png'

const animationDuration = 6000

export default {
  props: {
    className: {
      type: String,
      default: 'chart'
    },
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '300px'
    },
    grateData: {
      type: Object,
      default() {
        return {
          time_array: [
            '01', '02', '03', '04', '05', '06', '07', '08', '09', '10',
            '11', '12', '13', '14', '15', '16', '17', '18', '19', '20',
            '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'
          ],
          health_index_array: [
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
          ]
        }
      }
    }
  },
  data() {
    return {
      chart: null,
      echartsIcon: echartsIcon
    }
  },
  watch: {
    grateData: {
      handler(newV, oldV) {
        if (newV) {
          this.initChart(newV)
        } else {
          this.initChart(oldV)
        }
      }
    }
  },
  mounted() {
    this.initChart(this.grateData)
    this.__resizeHandler = debounce(() => {
      if (this.chart) {
        this.chart.resize()
      }
    }, 100)
    window.addEventListener('resize', this.__resizeHandler)
  },
  beforeDestroy() {
    if (!this.chart) {
      return
    }
    window.removeEventListener('resize', this.__resizeHandler)
    this.chart.dispose()
    this.chart = null
  },
  methods: {
    initChart(grateData) {
      this.chart = echarts.init(this.$el, 'macarons')
      this.chart.setOption({
        tooltip: {
          trigger: 'axis',
          axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
          }
          // formatter: function(params) {
          //   return params[0].seriesName + ' : ' + params[0].name + '<br/>' + '占比' + ' : ' + params[0].value + '%'
          // }
        },
        grid: {
          top: '10%',
          left: '2%',
          right: '10%',
          bottom: '8%',
          containLabel: true
        },
        xAxis: [{
          type: 'category',
          name: '时间',
          data: grateData.time_array,
          axisTick: {
            // alignWithLabel: true
          },
          axisLabel: {
            // interval: 0,
            // formatter: function(value) {
            // },
            margin: 10
          }
        }],
        yAxis: [{
          type: 'value',
          axisTick: {
            show: false
          },
          scale: true,
          name: '单位：分',
          max: 200,
          min: 0
          // boundaryGap: [0.2, 0.2]
        }],
        series: [{
          name: '分数',
          type: 'bar',
          // stack: 'vistors',
          // barWidth: '10',
          data: grateData.health_index_array,
          label: {
            normal: {
              show: true,
              position: 'top'
              // formatter: function(params) {
              //   var data = outData.counts
              //   return data[params.dataIndex] + '人'
              // }
            }
          },
          itemStyle: {
            normal: {
              color: function(params) {
                // build a color map as your need.
                var colorList = ''
                if (params.value <= 50) {
                  colorList = '#c82557'
                } else if (params.value > 50 && params.value <= 100) {
                  colorList = '#f5a623'
                } else if (params.value > 100 && params.value <= 150) {
                  colorList = '#54ce50'
                } else if (params.value > 150) {
                  colorList = '#27adff'
                }
                return colorList
              }
            }
          },
          animationDuration
        }]
      })
    }
  }
}
</script>
