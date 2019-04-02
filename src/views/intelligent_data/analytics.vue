<template>
  <el-card :body-style="{ padding: '10px' }">
    <div slot="header" class="clearfix">
      <span>智能分析</span>
    </div>
    <el-row>
      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
        <el-menu-item index="whole">整体分析</el-menu-item>
        <el-menu-item index="contrast">对比分析</el-menu-item>
      </el-menu>
    </el-row>
    <el-row>
      <el-col>
        <Whole v-if="activeIndex === 'whole'"/>
        <Constrast v-if="activeIndex === 'contrast'"/>
      </el-col>
    </el-row>
  </el-card>
</template>

<script>
import Whole from './components/whole'
import Constrast from './components/contrast'
export default {
  components: {
    Whole, Constrast
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
