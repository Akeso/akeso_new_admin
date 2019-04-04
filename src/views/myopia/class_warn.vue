<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>分级预警</span>
      </div>
      <el-tabs :value="tabName" type="border-card" @tab-click="handleClick">
        <el-tab-pane name="first" label="一级预防">
          <FirstWarn v-if="tabName==='first'"/>
        </el-tab-pane>
        <el-tab-pane name="second" label="二级干预">
          <span v-if="tabName === 'second'">二二二二</span>
        </el-tab-pane>
        <el-tab-pane name="third" label="三级控制">三级控制</el-tab-pane>
      </el-tabs>
    </el-card>
  </div>
</template>

<script>
import FirstWarn from './components/first_warn'
export default {
  components: {
    FirstWarn
  },
  data() {
    return {
      tabName: 'first'
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
    },
    menuItemSelect(index, indexPath) {
      this.menuItemIndex = index
    }
  }
}
</script>
