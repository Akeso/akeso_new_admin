<template>
  <el-tabs :value="tabName" type="border-card" @tab-click="handleClick">
    <el-tab-pane name="first">
      <span slot="label">健康数据</span>
      <el-row v-if="tabName === 'first'" class="tac">
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
            <!--<el-menu-item index="out_time">-->
            <!--<span slot="title">户外时间</span>-->
            <!--</el-menu-item>-->
            <!--<el-menu-item index="lux_take">-->
            <!--<span slot="title">光照摄入</span>-->
            <!--</el-menu-item>-->
            <!--<el-menu-item index="posture">-->
            <!--<span slot="title">用眼姿势</span>-->
            <!--</el-menu-item>-->
            <!--<el-menu-item index="step_count">-->
            <!--<span slot="title">运动步数</span>-->
            <!--</el-menu-item>-->
          </el-menu>
        </el-col>
        <el-col :span="21">
          <DailyScore v-if="menuItemIndex === 'daily_score'" :user-id="userId"/>
          <WeeklyScore v-if="menuItemIndex === 'weekly_score'" :user-id="userId" :child="child"/>
          <MonthlyScore v-if="menuItemIndex === 'monthly_score'" :user-id="userId" :child="child"/>
          <!--<OutTime v-if="menuItemIndex === 'out_time'" :user-id="userId"/>-->
          <!--<LuxTake v-if="menuItemIndex === 'lux_take'" :user-id="userId"/>-->
          <!--<Posture v-if="menuItemIndex === 'posture'" :user-id="userId"/>-->
          <!--<StepCount v-if="menuItemIndex === 'step_count'" :user-id="userId"/>-->
        </el-col>
      </el-row>
    </el-tab-pane>
    <el-tab-pane label="近视预测" name="second">
      <Forecast v-if="tabName === 'second'" />
    </el-tab-pane>
    <el-tab-pane label="屈光档案" name="third">
      <EyeExaminations v-if="tabName === 'third'" :user-id="userId"/>
    </el-tab-pane>
    <el-tab-pane label="视觉健康检查档案1" name="visual_health1">
      视觉健康检查档案1
      <!--<EyeExaminations v-if="tabName === 'third'" :user-id="userId"/>-->
    </el-tab-pane>
    <el-tab-pane label="视觉健康检查档案2" name="visual_health2">
      视觉健康检查档案2
    </el-tab-pane>
    <el-tab-pane label="角塑筛查表" name="angle_screen_table">
      角塑筛查表
    </el-tab-pane>
    <el-tab-pane label="特检表" name="special_inspect_table">
      特检表
    </el-tab-pane>
    <el-tab-pane label="角塑配适单" name="angle_match_form">
      角塑配适单
    </el-tab-pane>
    <el-tab-pane label="复查单" name="review_form">
      复查单
    </el-tab-pane>
    <!--<el-tab-pane label="防控意见" name="four">防控意见</el-tab-pane>-->
  </el-tabs>
</template>

<script>
import Forecast from './forecast'
import EyeExaminations from './eye_examinations'
import DailyScore from './daily_score'
import WeeklyScore from './weekly_score'
import MonthlyScore from './monthly_score'
import OutTime from './out_time'
import LuxTake from './lux_take'
import Posture from './posture'
import StepCount from './step_count'
export default {
  components: {
    DailyScore, WeeklyScore, MonthlyScore, Forecast, OutTime, LuxTake, Posture, StepCount, EyeExaminations
  },
  props: {
    userId: {
      type: String,
      default: ''
    },
    defaultTabName: {
      type: String,
      default: 'first'
    }
  },
  data() {
    return {
      tabName: this.defaultTabName,
      menuItemIndex: 'daily_score',
      child: {}
    }
  },
  computed: {
    showFirst: function() {
      return this.tabName === 'first'
    }
  },
  created() {
    this.eventBus.$on('updateChild', (data) => {
      this.child = data
    })
  },
  methods: {
    handleClick(tab, event) {
      this.tabName = tab.name
    },
    menuItemSelect(index, indexPath) {
      this.menuItemIndex = index
    }
  }
}
</script>

<style scoped>
</style>
