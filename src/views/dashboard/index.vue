<template>
  <div class="dashboard-container">
    <span>相关数据</span>

    <panel-group :statistics-data="statisticsData" @handleSetLineChartData="handleSetLineChartData" />
    <span>用户标签统计</span>
    <div>aaa</div>
    <span>临床标签统计</span>
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
      }
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
