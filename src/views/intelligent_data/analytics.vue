<template>
  <el-card :body-style="{ padding: '10px' }">
    <div slot="header" class="clearfix">
      <span>{{ generateShow('route.analytics') }}</span>
    </div>
    <!--<el-row>-->
    <!--<el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">-->
    <!--<el-menu-item index="whole">{{ generateShow('common.whole_analytics') }}</el-menu-item>-->
    <!--<el-menu-item index="whole_report">{{ generateShow('common.whole_report') }}</el-menu-item>-->
    <!--<el-menu-item index="data_export">{{ generateShow('common.data_export') }}</el-menu-item>-->
    <!--</el-menu>-->
    <!--</el-row>-->
    <el-row>
      <el-radio-group v-model="activeIndex">
        <el-radio-button label="whole">{{ generateShow('common.whole_analytics') }}</el-radio-button>
        <el-radio-button label="whole_report">{{ generateShow('common.whole_report') }}</el-radio-button>
      </el-radio-group>
    </el-row>
    <el-row>
      <el-col>
        <Whole v-if="activeIndex === 'whole'"/>
        <WholeReport v-if="activeIndex === 'whole_report'"/>
        <!--<DataExport v-if="activeIndex === 'data_export'"/>-->
      </el-col>
    </el-row>
  </el-card>
</template>

<script>
import Whole from './components/whole'
import WholeReport from './components/WholeReport'
import DataExport from './components/data_export'
export default {
  components: {
    Whole, WholeReport, DataExport
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
  .el-menu-item {
    font-weight: 800;
  }
</style>
