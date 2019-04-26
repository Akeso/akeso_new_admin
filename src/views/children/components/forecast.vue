<template>
  <div style="margin: 0px 20px 0px 20px">
    <el-row style="background-color: #eeeeee; padding: 20px 0px 0px 10px; border-radius: 6px;">
      <el-form :inline="true" :model="conditionQuery" class="demo-form-inline">
        <el-form-item label="度数">
          <el-select v-model="conditionQuery.sight_type" placeholder="请选择" style="width: 70px;">
            <el-option
              v-for="item in optionSights"
              :key="item.value"
              :label="item.label"
              :value="item.value"/>
          </el-select>
          <el-select v-model="conditionQuery.re" placeholder="请选择" style="width: 100px;">
            <el-option
              v-for="item in options.reOptions"
              :key="item.value"
              :label="item.key"
              :value="item.value"/>
          </el-select>
        </el-form-item>
        <el-form-item label="年龄" min-width="100">
          <el-select v-model="conditionQuery.age" placeholder="请选择" style="width: 80px;">
            <el-option
              v-for="item in options.ageStartOptions"
              :key="item"
              :label="item + '岁'"
              :value="item"/>
          </el-select>
        </el-form-item>
        <el-form-item label="防控方式">
          <el-select v-model="conditionQuery.ctrl_type" placeholder="请选择">
            <el-option
              v-for="item in options.ctrlTypeOptions"
              :key="item.value"
              :label="item.key"
              :value="item.value"/>
          </el-select>
        </el-form-item>
        <el-form-item label="健康评分">
          <el-select v-model="conditionQuery.health_data" placeholder="请选择" style="width: 140px;">
            <el-option
              v-for="item in options.healthDataOptions"
              :key="item.value"
              :label="item.key"
              :value="item.value"/>
          </el-select>
        </el-form-item>
      </el-form>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="16" style="margin-top: 10px;">
        <ve-line v-if="conditionQuery.sight_type === 'short'" :series="series_short" :title="title" :tooltip="tooltip" :legend="legend_short" :x-axis="xAxis" :y-axis="yAxis"/>
        <ve-line v-else :series="series_long" :title="title" :tooltip="tooltip" :x-axis="xAxis" :y-axis="yAxis"/>
      </el-col>
      <el-col :span="8">
        <p class="ng-binding" style="margin-top: 20px;">亲爱的小朋友，你现在{{ textIndicator.age }}岁</p>
        <p class="ng-binding">眼睛度数是{{ textIndicator.sightType }}{{ textIndicator.re }}</p>
        <p class="ng-binding">如果没有及时进行近视防控，日常眼健康评分差，有可能会在17岁变成近视{{ textIndicator.badMax }}度。</p>
        <p class="sky ng-binding-v"/>
        <p class="ng-binding">如果及时采取了近视防控，例如诺瞳智能眼镜，每天户外达标2小时，且日常眼健康评分优，17岁时近视的最终度数可能是{{ textIndicator.goodMax }}度。</p>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { fetchOptions, fetchForecasts, fetchForecastsLong } from '@/api/forecast'
const optionSights = [
  { value: 'short', label: '近视' },
  { value: 'long', label: '远视' }
]
export default {
  data() {
    this.chartSettings = {
      labelMap: {
        noCtrlData: '不进行近视防控',
        ctrlAkesoData: '健康数据分数影响'
      }
    }
    return {
      optionSights,
      options: {
        ageStartOptions: [],
        reOptions: [],
        ctrlTypeOptions: [],
        healthDataOptions: []
      },
      textIndicator: {
      },
      conditionQuery: {
        sight_type: 'short',
        age: '',
        re: '',
        ctrl_type: '',
        health_data: ''
      },
      title: {
        text: '近视预测'
      },
      tooltip: {
        trigger: 'axis'
      },
      legend_short: {
        data: ['不采取控制', '健康数据分数影响']
      },
      xAxis: {
        type: 'category',
        // boundaryGap: false,
        data: []
      },
      yAxis: {
        type: 'value'
      },
      series_short: [
        {
          name: '不采取控制',
          type: 'line',
          stack: '总量',
          itemStyle: {
            normal: {
              color: '#ef4836'
            }
          },
          markPoint: {
            data: [
              { type: 'max', name: '最大值' },
              { type: 'min', name: '最小值' }
            ]
          },
          data: []
        },
        {
          name: '采取控制最优',
          type: 'line',
          data: [],
          lineStyle: {
            normal: {
              color: '#b3e0b9'
            }
          },
          stack: 'confidence-band'
          // symbol: 'none'
        },
        {
          name: '采取控制最差',
          type: 'line',
          data: [],
          lineStyle: {
            normal: {
              color: '#b3e0b9'
            }
          },
          areaStyle: {
            normal: {
              origin: 'start',
              color: '#b3e0b9'
            }
          },
          stack: 'confidence-band'
          // symbol: 'none'
        },
        {
          name: '健康数据分数影响',
          type: 'line',
          itemStyle: {
            normal: {
              color: '#4B8DF8'
            }
          },
          markPoint: {
            data: [
              { type: 'max', name: '最大值' },
              { type: 'min', name: '最小值' }
            ]
          },
          data: []
        }
      ],
      series_long: [
        {
          name: '采取控制最差',
          type: 'line',
          data: [],
          markPoint: {
            data: [
              { type: 'max', name: '最大值' },
              { type: 'min', name: '最小值' }
            ]
          },
          lineStyle: {
            normal: {
              color: '#b3e0b9'
            }
          }
        },
        {
          name: '健康数据分数影响',
          type: 'line',
          itemStyle: {
            normal: {
              color: '#4B8DF8'
            }
          },
          markPoint: {
            data: [
              { type: 'max', name: '最大值' },
              { type: 'min', name: '最小值' }
            ]
          },
          data: []
        }
      ]
    }
  },
  watch: {
    'conditionQuery.sight_type': function(newVal, oldVal) {
      this.getOptions()
    },
    'conditionQuery.age': function(newVal, oldVal) {
      if (oldVal !== '') {
        this.getForecasts()
      }
    },
    'conditionQuery.re': function(newVal, oldVal) {
      if (oldVal !== '') {
        this.getForecasts()
      }
    },
    'conditionQuery.ctrl_type': function(newVal, oldVal) {
      if (oldVal !== '') {
        this.getForecasts()
      }
    },
    'conditionQuery.health_data': function(newVal, oldVal) {
      if (oldVal !== '') {
        this.getForecasts()
      }
    }
  },
  created() {
    this.getOptions()
  },
  mounted() {
  },
  methods: {
    getOptions: function() {
      fetchOptions({ sight_type: this.conditionQuery.sight_type }).then(response => {
        this.options = response.data
        this.conditionQuery.age = this.options.ageStartOptions[0]
        this.conditionQuery.re = this.options.reOptions[0].value
        this.conditionQuery.ctrl_type = this.options.ctrlTypeOptions[1].value
        this.conditionQuery.health_data = this.options.healthDataOptions[0].value
        this.getForecasts()
      })
    },
    getForecasts: function() {
      if (this.conditionQuery.sight_type === 'short') {
        fetchForecasts(this.conditionQuery).then(response => {
          this.xAxis.data = response.data.ages
          this.series_short[0].data = response.data.noCtrlData
          this.series_short[1].data = response.data.ctrlDataDefault
          this.series_short[2].data = response.data.ctrlDataSection
          this.series_short[3].data = response.data.ctrlAkesoData
          this.textIndicator = response.data.indicator
        })
      } else {
        fetchForecastsLong(this.conditionQuery).then(response => {
          this.xAxis.data = response.data.ages
          this.series_long[0].data = response.data.ctrlDataDefaultTop
          this.series_long[1].data = response.data.ctrlAkesoData
          this.textIndicator = response.data.indicator
        })
      }
    }
  }
}
</script>

<style scope>
  .el-input__inner {
    padding-left: 10px !important;
  }
  .ng-binding {
    color: #333;
    font-size: 14px;
  }
  .sky {
    color: #00aeef;
  }
  .green {
    color: #00a651;
  }
  .red {
    color: #ed1c24;
  }
  .ng-binding-v {
    font-size: 20px;
    margin-top: 15px;
    margin-bottom: 15px;
    display: block;
  }
</style>
