<template>
  <el-row :gutter="20" class="panel-group">
    <el-col :xs="4" :sm="4" :lg="4" class="card-panel-col">
      <div class="card-panel" @click="handleSetLineChartData('Allchildren')">
        <div class="card-panel-icon-wrapper icon-people">
          <svg-icon icon-class="bear01" class-name="card-panel-icon" />
        </div>
        <div class="card-panel-description">
          <div class="card-panel-text">{{ generateShow('home.all_children') }}</div>
          <count-to :start-val="0" :end-val="statisticsData.childrenCount" :duration="2000" class="card-panel-num"/>
        </div>
      </div>
    </el-col>
    <el-col :xs="4" :sm="4" :lg="4" class="card-panel-col">
      <div class="card-panel" @click="handleSetLineChartData('Intelligent')">
        <div class="card-panel-icon-wrapper icon-message">
          <svg-icon icon-class="bear02" class-name="card-panel-icon" />
        </div>
        <div class="card-panel-description">
          <div class="card-panel-text">{{ generateShow('home.intelligent_children') }}</div>
          <count-to :start-val="0" :end-val="statisticsData.deviceChildrenCount" :duration="2000" class="card-panel-num"/>
        </div>
      </div>
    </el-col>
    <el-col :xs="4" :sm="5" :lg="5" class="card-panel-col">
      <div class="card-panel" @click="handleSetLineChartData('Appointments')">
        <div class="card-panel-icon-wrapper icon-people">
          <svg-icon icon-class="bear01" class-name="card-panel-icon" />
        </div>
        <div class="card-panel-description">
          <div class="card-panel-text">{{ generateShow('home.today_appoint') }}</div>
          <count-to :start-val="0" :end-val="statisticsData.appointCount" :duration="2000" class="card-panel-num"/>
        </div>
      </div>
    </el-col>
    <el-col :xs="5" :sm="5" :lg="5" class="card-panel-col">
      <div class="card-panel" @click="handleSetLineChartData('highWarn')">
        <div class="card-panel-icon-wrapper icon-message">
          <svg-icon icon-class="bear02" class-name="card-panel-icon" />
        </div>
        <div class="card-panel-description">
          <div class="card-panel-text">{{ generateShow('home.today_warning') }}</div>
          <count-to :start-val="0" :end-val="statisticsData.followCount" :duration="2000" class="card-panel-num"/>
        </div>
      </div>
    </el-col>
    <el-col :xs="5" :sm="5" :lg="5" class="card-panel-col">
      <div class="card-panel" @click="handleSetLineChartData('children', '本周复查儿童')">
        <div class="card-panel-icon-wrapper icon-message">
          <svg-icon icon-class="bear02" class-name="card-panel-icon" />
        </div>
        <div class="card-panel-description">
          <div class="card-panel-text">{{ generateShow('home.to_week_children') }}</div>
          <count-to :start-val="0" :end-val="statisticsData.toWeekUpdateCount" :duration="2000" class="card-panel-num"/>
        </div>
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
      this.$router.push({ name: type, query: { title: title }})
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .panel-group {
    margin-top: 18px;
    .card-panel-col{
      margin-bottom: 32px;
    }
    .card-panel {
      height: 108px;
      cursor: pointer;
      font-size: 12px;
      position: relative;
      overflow: hidden;
      color: #666;
      background: #fff;
      box-shadow: 4px 4px 40px rgba(0, 0, 0, .05);
      border-color: rgba(0, 0, 0, .05);
      &:hover {
        .card-panel-icon-wrapper {
          color: #fff;
        }
        .icon-people {
          background: #40c9c6;
        }
        .icon-message {
          background: #36a3f7;
        }
        .icon-money {
          background: #f4516c;
        }
        .icon-shoppingCard {
          background: #34bfa3
        }
      }
      .icon-people {
        color: #40c9c6;
      }
      .icon-message {
        color: #36a3f7;
      }
      .icon-money {
        color: #f4516c;
      }
      .icon-shoppingCard {
        color: #34bfa3
      }
      .card-panel-icon-wrapper {
        float: left;
        margin: 14px 0 0 14px;
        padding: 8px;
        transition: all 0.38s ease-out;
        border-radius: 6px;
      }
      .card-panel-icon {
        float: left;
        font-size: 48px;
      }
      .card-panel-description {
        float: right;
        font-weight: bold;
        margin: 26px;
        margin-left: 0px;
        .card-panel-text {
          line-height: 18px;
          color: rgba(0, 0, 0, 0.45);
          font-size: 16px;
          margin-bottom: 12px;
        }
        .card-panel-num {
          font-size: 20px;
        }
      }
    }
  }
</style>
