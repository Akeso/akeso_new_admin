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
    outTime: {
      type: Object,
      default() {
        return {
          maleCounts: [0, 0, 0, 0],
          malePercents: [0, 0, 0, 0],
          femaleCounts: [0, 0, 0, 0],
          femalePercents: [0, 0, 0, 0]
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
    outTime: {
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
    this.initChart(this.outTime)
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
    initChart(outData) {
      this.chart = echarts.init(this.$el, 'macarons')
      this.chart.setOption({
        tooltip: {
          trigger: 'axis',
          axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
          },
          formatter: function(params) {
            return params[0].name + '<br/>' + params[0].seriesName + '占比' + ' : ' + params[0].value + '%' + '<br/>' + params[1].seriesName + '占比' + ' : ' + params[1].value + '%'
          }
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
          name: '分钟',
          data: ['30', '60', '90', '120'],
          axisTick: {
            // alignWithLabel: true
          },
          axisLabel: {
            interval: 0,
            formatter: function(value) {
              // var name = ''
              // switch (value) {
              //   case '30':
              //     name = '0 ~ 30 分钟'
              //     break
              //   case '60':
              //     name = '30 ~ 60 分钟'
              //     break
              //   case '90':
              //     name = '60 ~ 90 分钟 '
              //     break
              //   case '120':
              //     name = '90 分钟以上 '
              //     break
              // }
              return '{' + value + '| }\n{value|' + '' + '}' // + value + '分钟'
            },
            margin: 10,
            rich: {
              value: {
                lineHeight: 20,
                align: 'center'
              },
              '30': {
                height: 40,
                align: 'center',
                backgroundColor: {
                  image: echartsIcon
                }
              },
              '60': {
                height: 40,
                align: 'center',
                backgroundColor: {
                  image: echartsIcon
                }
              },
              '90': {
                height: 40,
                align: 'center',
                backgroundColor: {
                  image: echartsIcon
                }
              },
              '120': {
                height: 40,
                align: 'center',
                backgroundColor: {
                  image: echartsIcon
                }
              }
            }
          }
        }],
        yAxis: [{
          type: 'value',
          axisTick: {
            show: false
          },
          scale: true,
          name: '占比%',
          max: 100,
          min: 0,
          boundaryGap: [0.2, 0.2]
        }],
        series: [{
          name: '男生',
          type: 'bar',
          // stack: 'vistors',
          barWidth: '30',
          data: outData.malePercents,
          label: {
            normal: {
              show: true,
              position: 'top',
              formatter: function(params) {
                var data = outData.maleCounts
                return data[params.dataIndex] + '人'
              }
            }
          },
          itemStyle: {
            normal: {
              color: function(params) {
                // build a color map as your need.
                var colorList = ['#D0021B', '#F5A623', '#54CE50', '#27adff']
                return colorList[params.dataIndex]
              }
            }
          },
          animationDuration
        }, {
          name: '女生',
          type: 'bar',
          // stack: 'vistors',
          barWidth: '30',
          data: outData.femalePercents,
          label: {
            normal: {
              show: true,
              position: 'top',
              formatter: function(params) {
                var data = outData.femaleCounts
                return data[params.dataIndex] + '人'
              }
            }
          },
          itemStyle: {
            normal: {
              color: function(params) {
                // build a color map as your need.
                var colorList = ['#D0021B', '#F5A623', '#54CE50', '#27adff']
                return colorList[params.dataIndex]
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
