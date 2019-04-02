<template>
  <el-card :body-style="{ padding: '0px 10px 10px 20px' }">
    <div slot="header">
      <span>智能排序</span>
    </div>
    <el-card :body-style="{ padding: '5px 10px 10px 20px' }">
      <div slot="header">
        <span>设置显示字段</span>
      </div>
      <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
      <div style="margin: 15px 0;"/>
      <el-checkbox-group v-model="checkedOptions" @change="handleCheckedOptionsChange">
        <el-checkbox v-for="item in options" :label="item.key" :key="item.key">{{ item.label }}</el-checkbox>
      </el-checkbox-group>
    </el-card>
    <el-row>
      <div style="padding: 10px 0px 10px 0px;">
        <span>选择日期</span>
        <el-date-picker
          v-model="listQuery.selectDate"
          type="date"
          placeholder="选择日期"/>
        <el-select v-model="listQuery.period" placeholder="请选择">
          <el-option
            v-for="item in periodOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"/>
        </el-select>
      </div>
    </el-row>
    <el-table
      :data="list"
      border
      style="width: 100%"
      @sort-change="handleColumnSort">
      <el-table-column
        prop="childName"
        label="姓名"
        min-width="60"/>
      <el-table-column
        v-if="hasOptions('healthIndex')"
        prop="healthIndex"
        label="用眼健康评分"
        min-width="80"/>
      <el-table-column
        v-if="hasOptions('wearTime')"
        prop="wearTime"
        label="戴镜时间(分钟)"
        min-width="80"/>
      <el-table-column
        v-if="hasOptions('outTime')"
        prop="outTime"
        label="户外时间(分钟)"
        min-width="80"/>
      <el-table-column
        v-if="hasOptions('protectLuxTime')"
        prop="protectLuxTime"
        label="护眼光照时间(分钟)"
        min-width="80"/>
      <el-table-column
        v-if="hasOptions('luxDay')"
        prop="luxDay"
        label="阳光摄入(Lux)"
        min-width="80"/>
      <el-table-column
        v-if="hasOptions('nearworkDay')"
        prop="nearworkDay"
        label="近距离用眼时间(分钟)"
        min-width="80"/>
      <el-table-column
        v-if="hasOptions('nearworkBurdenDay')"
        prop="nearworkBurdenDay"
        label="用眼负荷(D)"
        min-width="80"/>
      <el-table-column
        v-if="hasOptions('badPostureTimes')"
        prop="badPostureTimes"
        label="不良姿势提醒(次)"
        min-width="80"/>
      <el-table-column
        v-if="hasOptions('stepCount')"
        prop="stepCount"
        label="步数(步)"
        min-width="60"/>
      <el-table-column
        prop="healthIndex"
        label="同步天数"
        min-width="80"/>
    </el-table>
  </el-card>
</template>
<script>
import { fetchSorting } from '@/api/summary'
const optionsData = [
  { key: 'healthIndex', label: '健康评分' },
  { key: 'wearTime', label: '戴镜时间' },
  { key: 'outTime', label: '户外时间' },
  { key: 'protectLuxTime', label: '护眼光照时间' },
  { key: 'luxDay', label: '阳光摄入' },
  { key: 'nearworkDay', label: '近距离用眼时间' },
  { key: 'nearworkBurdenDay', label: '用眼负荷' },
  { key: 'badPostureTimes', label: '不良姿势提醒' },
  { key: 'stepCount', label: '步数' }
]
const checkedData = ['healthIndex', 'wearTime', 'outTime', 'protectLuxTime', 'luxDay', 'nearworkDay', 'nearworkBurdenDay', 'badPostureTimes', 'stepCount']
export default {
  data() {
    return {
      checkAll: true,
      checkedOptions: checkedData,
      options: optionsData,
      isIndeterminate: false,
      list: null,
      total: null,
      todayCount: 0,
      listLoading: true,
      listQuery: {
        page: 1,
        limit: 20,
        importance: undefined,
        selectDate: new Date(),
        period: 'day'
      },
      periodOptions: [{
        value: 'day',
        label: '日'
      }, {
        value: 'week',
        label: '周'
      }, {
        value: 'month',
        label: '月'
      }]
    }
  },
  created() {
    this.getList()
  },
  methods: {
    getList() {
      fetchSorting(this.listQuery).then(response => {
        this.list = response.data.items
        this.total = response.data.total
      })
    },
    hasOptions(val) {
      return this.checkedOptions.indexOf(val) > -1
    },
    handleColumnSort() {
    },
    handleCheckAllChange(val) {
      this.checkedOptions = val ? checkedData : []
      this.isIndeterminate = false
    },
    handleCheckedOptionsChange(value) {
      const checkedCount = value.length
      this.checkAll = checkedCount === this.options.length
      this.isIndeterminate = checkedCount > 0 && checkedCount < this.options.length
    }
  }
}
</script>

<style scoped>
</style>
