<template>
  <el-tabs :value="tabName" @tab-click="handleClick">
    <el-tab-pane name="first">
      <span slot="label">健康数据</span>
      <el-row class="tac">
        <el-col :span="3">
          <el-menu
            :collapse="false"
            :default-active="menuItemIndex"
            class="el-menu-vertical-demo"
            @select="menuItemSelect">
            <el-menu-item index="daily_score">
              <span slot="title">健康评分</span>
            </el-menu-item>
            <el-menu-item index="weekly_score">
              <span slot="title">健康周报</span>
            </el-menu-item>
            <el-menu-item index="monthly_score">
              <span slot="title">健康月报</span>
            </el-menu-item>
            <el-menu-item index="out_time">
              <span slot="title">户外时间</span>
            </el-menu-item>
            <el-menu-item index="lux_take">
              <span slot="title">光照摄入</span>
            </el-menu-item>
            <el-menu-item index="posture">
              <span slot="title">用眼姿势</span>
            </el-menu-item>
            <el-menu-item index="step_count">
              <span slot="title">运动步数</span>
            </el-menu-item>
          </el-menu>
        </el-col>
        <el-col :span="21">
          <DailyScore v-if="menuItemIndex === 'daily_score'" :user-id="userId"/>
          <WeeklyScore v-if="menuItemIndex === 'weekly_score'"/>
          <MonthlyScore v-if="menuItemIndex === 'monthly_score'"/>
        </el-col>
      </el-row>
    </el-tab-pane>
    <el-tab-pane label="近视预测" name="second">
      <div>
        近视预测
      </div>
    </el-tab-pane>
    <el-tab-pane label="屈光档案" name="third">屈光档案</el-tab-pane>
    <el-tab-pane label="防控意见" name="four">防控意见</el-tab-pane>
  </el-tabs>
</template>

<script>
import DailyScore from './daily_score'
import WeeklyScore from './weekly_score'
import MonthlyScore from './monthly_score'
export default {
  components: {
    DailyScore, WeeklyScore, MonthlyScore
  },
  props: {
    userId: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      tabName: 'first',
      menuItemIndex: 'daily_score'
    }
  },
  computed: {
    showFirst: function() {
      return this.tabName === 'first'
    }
  },
  methods: {
    handleClick(tab, event) {
      this.tabName = tab.name
      // console.log(tab, event)
    },
    menuItemSelect(index, indexPath) {
      this.menuItemIndex = index
      console.log(index, '-', indexPath)
    }
  }
}
</script>

<style scoped>
</style>
