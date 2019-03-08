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
        <ve-line :data="chartData" :settings="chartSettings" :set-option-opts="true"/>
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
        score: '分数'
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
      chartData: {
        columns: ['age', 'score'],
        rows: [
          { 'age': '6', 'score': 0 },
          { 'age': '7', 'score': 0 },
          { 'age': '8', 'score': 0 },
          { 'age': '9', 'score': 0 },
          { 'age': '10', 'score': 0 },
          { 'age': '11', 'score': 0 },
          { 'age': '12', 'score': 0 },
          { 'age': '13', 'score': 0 },
          { 'age': '14', 'score': 0 },
          { 'age': '15', 'score': 0 },
          { 'age': '16', 'score': 0 }
        ]
      }
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
        this.conditionQuery.ctrl_type = this.options.ctrlTypeOptions[0].value
        this.conditionQuery.health_data = this.options.healthDataOptions[0].value
        this.getForecasts()
      })
    },
    getForecasts: function() {
      fetchForecasts(this.conditionQuery).then(response => {
      })
    }
  }
}
</script>

<style scope>
</style>
