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
            <el-menu-item index="1">
              <span slot="title">健康评分</span>
            </el-menu-item>
            <el-menu-item index="2">
              <span slot="title">健康周报</span>
            </el-menu-item>
            <el-menu-item index="3">
              <span slot="title">健康月报</span>
            </el-menu-item>
          </el-menu>
        </el-col>
        <el-col :span="21">
          <HealthScore v-if="menuItemIndex === '1'" :user-id="userId"/>
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
import HealthScore from './health_score'
export default {
  components: {
    HealthScore
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
      menuItemIndex: '1'
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
