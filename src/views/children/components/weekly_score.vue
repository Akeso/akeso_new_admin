<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span>健康周报</span>
    </div>
    <div class="filter-container">
      <el-button class="filter-item" type="primary" icon="el-icon-download" >导出PDF</el-button>
      <el-button class="filter-item" type="primary" icon="el-icon-download" >导出Excel</el-button>
    </div>
    <el-row>
      <el-col :span="14">
        <el-tag>标签一</el-tag>
        <el-tag>标签一</el-tag>
        <el-tag>标签一</el-tag>
        <ve-histogram :color="colorHistogram" :x-axis="xAxisHistogram" :y-axis="yAxisHistogram" :series="seriesHistogram"/>
        <ve-radar :title="titleRadar1" :tooltip="tooltipRadar1" :radar="radarRadar1" :series="seriesRadar1"/>
        <ve-radar :title="titleRadar2" :tooltip="tooltipRadar2" :radar="radarRadar2" :series="seriesRadar2"/>
      </el-col>
      <el-col :span="10">分数</el-col>
    </el-row>
  </el-card>
</template>

<script>
export default {
  data() {
    return {
      colorHistogram: ['#26c281'],
      xAxisHistogram: {
        type: 'category',
        boundaryGap: true,
        data: ['1/1', '1/1', '1/1', '1/1', '1/1', '1/1', '1/1']
      },
      yAxisHistogram: {
        type: 'value'
      },
      seriesHistogram: [
        {
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
          data: [10, 52, 200, 334, 390, 330, 220]
        }
      ],
      titleRadar1: {
        text: '保护因素分析'
      },
      tooltipRadar1: {},
      radarRadar1: {
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
            // shadowBlur: 10
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
      seriesRadar1: {
        name: '雷达图',
        type: 'radar',
        itemStyle: {
          emphasis: {
            // color: 各异,
            lineStyle: {
              width: 4
            }
          }
        },
        data: [
          {
            value: [120, 10000, 300000],
            name: '标准',
            symbol: 'rect',
            symbolSize: 5,
            areaStyle: {
              color: '#ff5809'
              // type: 'dashed'
              // normal: {
              // }
            }
          },
          {
            value: [60, 15000, 250000],
            name: '实际值',
            lineStyle: {
              color: '#0000e3'
            }
          }
        ]
      },
      titleRadar2: {
        text: '保护因素分析'
      },
      tooltipRadar2: {},
      radarRadar2: {
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
            // shadowBlur: 10
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
      seriesRadar2: {
        name: '雷达图',
        type: 'radar',
        itemStyle: {
          emphasis: {
            // color: 各异,
            lineStyle: {
              width: 4
            }
          }
        },
        data: [
          {
            value: [120, 10000, 300000],
            name: '标准',
            symbol: 'rect',
            symbolSize: 5,
            areaStyle: {
              color: '#ff5809'
              // type: 'dashed'
              // normal: {
              // }
            }
          },
          {
            value: [60, 15000, 250000],
            name: '实际值',
            lineStyle: {
              color: '#0000e3'
            }
          }
        ]
      }
    }
  }
}
</script>
