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
      default: '150px'
    },
    badPostureTimes: {
      type: Object,
      default() {
        return {
          counts: [0, 0, 0, 0],
          percents: [0, 0, 0, 0]
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
    badPostureTimes: {
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
    this.initChart(this.badPostureTimes)
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
    initChart(badPostureTimesData) {
      this.chart = echarts.init(this.$el, 'macarons')
      this.chart.setOption({
        tooltip: {
          trigger: 'axis',
          axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
          },
          formatter: function(params) {
            return params[0].seriesName + ' : ' + params[0].name + '<br/>' + '占比' + ' : ' + params[0].value + '%'
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
          name: '次',
          data: badPostureTimesData.counts, // ['20', '40', '60', '80'],
          axisTick: {
            // alignWithLabel: true
          },
          axisLabel: {
            interval: 0,
            formatter: function(value) {
              // console.log('value', value)
              // var name = ''
              // switch (value) {
              //   case '20':
              //     name = '0 ~ 20 次'
              //     break
              //   case '40':
              //     name = '20 ~ 40 次'
              //     break
              //   case '60':
              //     name = '40 ~ 60 次'
              //     break
              //   case '80':
              //     name = '60 次以上'
              //     break
              // }
              // return '{' + value + '| }\n{value|' + '' + '}' // + value + '分钟'
            },
            margin: 10
            // rich: {
            //   value: {
            //     lineHeight: 20,
            //     align: 'center'
            //   },
            //   '20': {
            //     height: 40,
            //     align: 'center',
            //     backgroundColor: {
            //       image: echartsIcon
            //     }
            //   },
            //   '40': {
            //     height: 40,
            //     align: 'center',
            //     backgroundColor: {
            //       image: echartsIcon
            //     }
            //   },
            //   '60': {
            //     height: 40,
            //     align: 'center',
            //     backgroundColor: {
            //       image: echartsIcon
            //     }
            //   },
            //   '80': {
            //     height: 40,
            //     align: 'center',
            //     backgroundColor: {
            //       image: echartsIcon
            //     }
            //   }
            // }
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
          name: '人数',
          type: 'bar',
          // stack: 'vistors',
          barWidth: '30',
          data: badPostureTimesData.percents,
          label: {
            normal: {
              show: true,
              position: 'top',
              formatter: function(params) {
                var data = badPostureTimesData.counts
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
