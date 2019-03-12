<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span>近视预测</span>
    </div>
    <el-row>
      <el-form :inline="true" :model="conditionQuery" class="demo-form-inline">
        <el-form-item label="年龄">
          <el-select v-model="conditionQuery.age" placeholder="请选择">
            <el-option
              v-for="item in options.ageStartOptions"
              :key="item"
              :label="item + '岁'"
              :value="item"/>
          </el-select>
        </el-form-item>
        <el-form-item label="近视度数">
          <el-select v-model="conditionQuery.re" placeholder="请选择">
            <el-option
              v-for="item in options.reOptions"
              :key="item.value"
              :label="item.key"
              :value="item.value"/>
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
          <el-select v-model="conditionQuery.health_data" placeholder="请选择">
            <el-option
              v-for="item in options.healthDataOptions"
              :key="item.value"
              :label="item.key"
              :value="item.value"/>
          </el-select>
        </el-form-item>
      </el-form>
    </el-row>
    <el-row>
      <el-col :span="24">
        <ve-line :series="series" :title="title" :tooltip="tooltip" :legend="legend" :settings="chartSettings" :x-axis="xAxis" :y-axis="yAxis" :set-option-opts="true"/>
      </el-col>
    </el-row>
  </el-card>
</template>

<script>
import { fetchOptions, fetchForecasts } from '@/api/forecast'
export default {
  data() {
    this.chartSettings = {
      labelMap: {
        noCtrlData: '不进行近视防控',
        ctrlAkesoData: '健康数据分数影响'
      }
    }
    return {
      options: {
        ageStartOptions: [],
        reOptions: [],
        ctrlTypeOptions: [],
        healthDataOptions: []
      },
      conditionQuery: {
        age: '',
        re: '',
        ctrl_type: '',
        health_data: ''
      },
      title: {
        text: '近视预测'
      },
      tooltip: {
        trigger: 'axis',
        formatter: function(params) {
          return params[0].name + '<br/>' + params[0].seriesName + '：' + params[0].value + '<br/>' + params[3].seriesName + '：' + params[3].value
        }
      },
      legend: {
        data: ['不采取控制', '健康数据分数影响']
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: []
      },
      yAxis: {
        type: 'value'
      },
      series: [
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
          name: 'CL',
          type: 'line',
          data: [],
          lineStyle: {
            normal: {
              opacity: 0
            }
          },
          stack: 'confidence-band',
          symbol: 'none'
        },
        {
          name: '采取控制',
          type: 'line',
          data: [],
          lineStyle: {
            normal: {
              opacity: 0
            }
          },
          areaStyle: {
            normal: {
              color: '#26c281'
            }
          },
          stack: 'confidence-band',
          symbol: 'none'
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
      fetchOptions().then(response => {
        this.options = response.data
        this.conditionQuery.age = this.options.ageStartOptions[0]
        this.conditionQuery.re = this.options.reOptions[0].value
        this.conditionQuery.ctrl_type = this.options.ctrlTypeOptions[3].value
        this.conditionQuery.health_data = this.options.healthDataOptions[0].value
        this.getForecasts()
      })
    },
    getForecasts: function() {
      fetchForecasts(this.conditionQuery).then(response => {
        this.xAxis.data = response.data.ages
        this.series[0].data = response.data.noCtrlData
        this.series[1].data = response.data.ctrlDataDefault
        this.series[2].data = response.data.ctrlDataSection
        this.series[3].data = response.data.ctrlAkesoData
      })
    }
  }
}
</script>

<style scope>
</style>
