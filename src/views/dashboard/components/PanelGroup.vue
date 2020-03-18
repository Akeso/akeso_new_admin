<template>
  <el-row :gutter="20" class="panel-group">
    <el-col :xs="4" :sm="4" :lg="4" class="card-panel-col">
      <div class="card-item" @click="handleSetLineChartData('Allchildren')">
        <div class="card-item-icon">
          <svg-icon icon-class="bear01"/>
        </div>
        <div class="card-item-title">{{ generateShow('home.all_children') }}</div>
        <count-to :start-val="0" :end-val="statisticsData.childrenCount" :duration="2000" class="card-item-num"/>
      </div>
    </el-col>
    <el-col :xs="4" :sm="4" :lg="4" class="card-panel-col">
      <div class="card-item" @click="handleSetLineChartData('Intelligent')">
        <div class="card-item-icon">
          <svg-icon icon-class="bear02"/>
        </div>
        <div class="card-item-title">{{ generateShow('home.intelligent_children') }}</div>
        <count-to :start-val="0" :end-val="statisticsData.deviceChildrenCount" :duration="2000" class="card-item-num"/>
      </div>
    </el-col>
    <el-col :xs="4" :sm="5" :lg="4" class="card-panel-col">
      <div class="card-item" @click="handleSetLineChartData('Appointments')">
        <div class="card-item-icon">
          <svg-icon icon-class="bear01"/>
        </div>
        <div class="card-item-title">{{ generateShow('home.today_appoint') }}</div>
        <count-to :start-val="0" :end-val="statisticsData.appointCount" :duration="2000" class="card-item-num"/>
      </div>
    </el-col>
    <el-col :xs="5" :sm="5" :lg="4" class="card-panel-col">
      <div class="card-item" @click="handleSetLineChartData('highWarn')">
        <div class="card-item-icon">
          <svg-icon icon-class="bear02"/>
        </div>
        <div class="card-item-title">{{ generateShow('home.today_warning') }}</div>
        <count-to :start-val="0" :end-val="statisticsData.followCount" :duration="2000" class="card-item-num"/>
      </div>
    </el-col>
    <el-col :xs="5" :sm="5" :lg="4" class="card-panel-col">
      <div class="card-item" @click="handleSetLineChartData('children', '本周复查儿童')">
        <div class="card-item-icon">
          <svg-icon icon-class="bear02"/>
        </div>
        <div class="card-item-title">{{ generateShow('home.to_week_children') }}</div>
        <count-to :start-val="0" :end-val="statisticsData.toWeekUpdateCount" :duration="2000" class="card-item-num"/>
      </div>
    </el-col>
  </el-row>
</template>

<script>
import CountTo from 'vue-count-to'

export default {
  components: {
    CountTo
  },
  props: {
    statisticsData: {
      type: Object,
      default: function() {
        return {
          childrenCount: 0,
          deviceChildrenCount: 0,
          appointCount: 0,
          followCount: 0,
          toWeekUpdateCount: 0
        }
      }
    }
  },
  methods: {
    handleSetLineChartData(type, title) {
      this.$router.push({ name: type, query: { type: type, title: title }})
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .card-item {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 108px;
    align-items: center;
    background: #fff;
    padding: 15px 0;
  }

  .card-item-icon {
    font-size: 48px;
  }

  .card-item-title {
    font-size: 16px;
    color: gray;
    font-weight: bold;
  }

  .card-item-num {
    font-size: 16px;
    font-weight: bold;
    margin-top: 5px;
  }

  .panel-group {
    margin-top: 18px;
    .card-panel-col {
      margin-bottom: 32px;
    }
  }
</style>
