<template>
  <div class="dashboard-container">
    <el-tag>相关数据</el-tag>
    <panel-group :statistics-data="statisticsData" @handleSetLineChartData="handleSetLineChartData" />
    <el-row type="flex" class="row-bg" justify="space-between">
      <el-tag>时段分布</el-tag>
      <el-date-picker
        v-model="paramsQuery.dateSection"
        :picker-options="pickerOptions2"
        type="daterange"
        align="right"
        unlink-panels
        range-separator="至"
        start-placeholder="开始日期"
        end-placeholder="结束日期"
        value-format="yyyy-MM-dd"/>
    </el-row>
    <el-radio-group v-model="paramsQuery.radioValue" @change="radioCountChange">
      <el-radio-button label="newChild">新增用户</el-radio-button>
      <el-radio-button label="newDeviceChild">新增智能用户</el-radio-button>
      <el-radio-button label="syncChild">同步用户</el-radio-button>
    </el-radio-group>
    <ve-line :data="chartData" :settings="chartSettings" :set-option-opts="true"/>

    <el-tag>用户标签统计</el-tag>
    <el-row :gutter="20" style="margin-top:10px; margin-bottom: 20px;">
      <el-col v-for="item in userTags" :key="item.id" :span="4">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>{{ item.name }}</span>
          </div>
          <div class="component-item">{{ item.childrenCount }}</div>
        </el-card>
      </el-col>
    </el-row>

    <el-tag>临床标签统计</el-tag>
    <el-row :gutter="20" style="margin-top:10px; margin-bottom: 20px;">
      <el-col v-for="item in clinicalTags" :key="item.id" :span="6">
        <el-card class="box-card" >
          <div slot="header" class="clearfix">
            <span>{{ item.name }}</span>
          </div>
          <div class="component-item">{{ item.childrenCount }}</div>
        </el-card>
      </el-col>
    </el-row>

  </div>
</template>

<script>
import PanelGroup from './components/PanelGroup'
import { fetchIndex, fetchGrowth } from '@/api/statistics'

export default {
  name: 'Dashboard',
  components: {
    PanelGroup
  },
  data() {
    this.chartSettings = {
      labelMap: {
        newChild: '新增用户量',
        newDeviceChild: '新增智能用户量',
        syncChild: '同步数据用户'
      }
    }
    return {
      pickerOptions2: {
        shortcuts: [{
          text: '最近一周',
          onClick(picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
            picker.$emit('pick', [start, end])
          }
        }, {
          text: '最近一个月',
          onClick(picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
            picker.$emit('pick', [start, end])
          }
        }, {
          text: '最近三个月',
          onClick(picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
            picker.$emit('pick', [start, end])
          }
        }]
      },
      paramsQuery: {
        dateSection: [new Date(new Date() - 7 * 24 * 3600 * 1000), new Date()],
        radioValue: 'newChild'
      },
      statisticsData: {
        childrenCount: 0,
        deviceChildrenCount: 0,
        usersCount: 0,
        doctorsCount: 0
      },
      userTags: [],
      clinicalTags: [],
      chartData: {
        columns: ['date', 'newChild', 'newDeviceChild', 'syncChild'],
        rows: [
          { 'date': '2018-01-01', 'newChild': 2 },
          { 'date': '2018-01-02', 'newChild': 3 },
          { 'date': '2018-01-03', 'newChild': 9 },
          { 'date': '2018-01-05', 'newChild': 1 },
          { 'date': '2018-01-10', 'newChild': 12 },
          { 'date': '2018-01-20', 'newChild': 45 }
        ]
      }
    }
  },
  watch: {
    'paramsQuery.dateSection': function(val, oldVal) {
      this.getGrowthData()
    }
  },
  created() {
    this.getStatisticsData()
    this.getGrowthData()
  },
  methods: {
    radioCountChange() {
      this.getGrowthData()
    },
    handleSetLineChartData() {
    },
    getStatisticsData() {
      fetchIndex().then(response => {
        this.statisticsData.childrenCount = response.data.childrenCount
        this.statisticsData.deviceChildrenCount = response.data.deviceChildrenCount
        this.statisticsData.usersCount = response.data.usersCount
        this.statisticsData.doctorsCount = response.data.doctorsCount
        this.userTags = response.data.userTags
        this.clinicalTags = response.data.clinicalTags
      })
    },
    getGrowthData() {
      // fetchGrowth({ start_at: this.paramsQuery.dateSection[0], end_at: this.paramsQuery.dateSection[1], radioValue: this.paramsQuery.radioValue }).then(response => {
      fetchGrowth(this.paramsQuery).then(response => {
        this.chartData.rows = response.data.items
      })
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
