<template>
  <div class="dashboard-container">
    <span>相关数据</span>

    <panel-group @handleSetLineChartData="handleSetLineChartData"/>
  </div>
</template>

<script>
import PanelGroup from './components/PanelGroup'

export default {
  name: 'Dashboard',
  components: {
    PanelGroup
  },
  methods: {
    handleSetLineChartData() {
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
