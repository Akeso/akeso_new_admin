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
    }
  },
  data() {
    return {
      chart: null,
      echartsIcon: echartsIcon
    }
  },
  mounted() {
    this.initChart()
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
    initChart() {
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
          bottom: '12%',
          containLabel: true
        },
        xAxis: [{
          type: 'category',
          name: 'D',
          data: ['180', '360', '540', '720'],
          axisTick: {
            // alignWithLabel: true
          },
          axisLabel: {
            interval: 0,
            formatter: function(value) {
              console.log('value', value)
              var name = ''
              switch (value) {
                case '180':
                  name = '0 ~ 180 D'
                  break
                case '360':
                  name = '180 ~ 360 D'
                  break
                case '540':
                  name = '360 ~ 540 D '
                  break
                case '720':
                  name = '540 D以上 '
                  break
              }
              return '{' + value + '| }\n{value|' + name + '}' // + value + '分钟'
            },
            margin: 10,
            rich: {
              value: {
                lineHeight: 20,
                align: 'center'
              },
              '180': {
                height: 40,
                align: 'center',
                backgroundColor: {
                  image: echartsIcon
                }
              },
              '360': {
                height: 40,
                align: 'center',
                backgroundColor: {
                  image: echartsIcon
                }
              },
              '540': {
                height: 40,
                align: 'center',
                backgroundColor: {
                  image: echartsIcon
                }
              },
              '720': {
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
          data: [39, 31, 20, 10],
          label: {
            normal: {
              show: true,
              position: 'top',
              formatter: function(params) {
                var data = [20, 25, 16, 20]
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
          data: [19, 10, 16, 20],
          label: {
            normal: {
              show: true,
              position: 'top',
              formatter: function(params) {
                var data = [20, 25, 16, 30]
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
