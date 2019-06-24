<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>预警随访</span>
      </div>
      <div style="margin-bottom: 10px;">
        <span class="demonstration">月份选择：</span>
        <el-date-picker
          v-model="month"
          type="month"
          placeholder="选择月"
          value-format="yyyy-MM-dd"
          @change="changeDate"/>
      </div>
      <el-tabs :value="tabName" type="border-card" @tab-click="handleClickTab">
        <el-tab-pane name="first" label="差">
          <FollowOne v-if="tabName==='first'" :date="month"/>
        </el-tab-pane>
        <el-tab-pane name="second" label="良">
          <span v-if="tabName === 'second'">
            <FollowTwo v-if="tabName==='second'" :date="month"/>
          </span>
        </el-tab-pane>
        <el-tab-pane name="third" label="优">
          <FollowThree v-if="tabName==='third'" :date="month"/>
        </el-tab-pane>
      </el-tabs>
    </el-card>
  </div>
</template>

<script>
import FollowOne from './components/follow_one'
import FollowTwo from './components/follow_two'
import FollowThree from './components/follow_three'
export default {
  components: {
    FollowOne, FollowTwo, FollowThree
  },
  data() {
    return {
      tabName: 'first',
      month: ''
    }
  },
  computed: {
    showFirst: function() {
      return this.tabName === 'first'
    }
  },
  methods: {
    handleClickTab(tab, event) {
      this.tabName = tab.name
    },
    menuItemSelect(index, indexPath) {
      this.menuItemIndex = index
    },
    changeDate(val) {
      console.log('val => ', val)
    }
  }
}
</script>
