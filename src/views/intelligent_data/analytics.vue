<template>
  <el-card :body-style="{ padding: '10px' }">
    <div slot="header" class="clearfix">
      <span>{{ generateShow('common.analytics') }}</span>
    </div>
    <el-row>
      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
        <el-menu-item index="whole">{{ generateShow('common.whole_analytics') }}</el-menu-item>
        <el-menu-item index="whole_report">{{ generateShow('common.whole_report') }}</el-menu-item>
      </el-menu>
    </el-row>
    <el-row>
      <el-col>
        <Whole v-if="activeIndex === 'whole'"/>
        <WholeReport v-if="activeIndex === 'whole_report'"/>
      </el-col>
    </el-row>
  </el-card>
</template>

<script>
import Whole from './components/whole'
import WholeReport from './components/WholeReport'
export default {
  components: {
    Whole, WholeReport
  },
  data() {
    return {
      activeIndex: 'whole'
    }
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log('key => ', key)
      this.activeIndex = key
    }
  }
}
</script>
<style scoped>
</style>
