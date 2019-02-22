<template>
  <div class="dashboard-container">
    <el-tag>相关数据</el-tag>

    <panel-group :statistics-data="statisticsData" @handleSetLineChartData="handleSetLineChartData" />
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
        <el-card class="box-card">
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
import { fetchIndex } from '@/api/statistics'

export default {
  name: 'Dashboard',
  components: {
    PanelGroup
  },
  data() {
    return {
      statisticsData: {
        childrenCount: 0,
        deviceChildrenCount: 0,
        usersCount: 0,
        doctorsCount: 0
      },
      userTags: [],
      clinicalTags: []
    }
  },
  created() {
    this.getStatisticsData()
  },
  methods: {
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
