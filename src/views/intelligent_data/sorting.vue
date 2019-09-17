<template>
  <div>
    <el-card :body-style="{ padding: '0px 10px 10px 20px' }">

      <div slot="header">
        <span>{{ generateShow('common.setting_show_fields') }}</span>
      </div>
      <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">{{ generateShow('common.check_all') }}</el-checkbox>
      <div style="margin: 15px 0;"/>
      <el-checkbox-group v-model="checkedOptions" @change="handleCheckedOptionsChange">
        <el-checkbox v-for="item in options" :label="item.key" :key="item.key" size="small">{{ item.label }}</el-checkbox>
      </el-checkbox-group>

      <el-row style="margin: 10px 0px 10px 0px;">
        <el-col>
          {{ generateShow('common.select_date') }}
          <el-date-picker
            :clearable="false"
            :placeholder="generateShow('common.start_date')"
            v-model="listQuery.startDate"
            type="date"
            style="width: 150px;"
            format="yyyy-MM-dd"
            value-format="yyyy-MM-dd"/>
          至
          <el-date-picker
            :clearable="false"
            :placeholder="generateShow('common.end_date')"
            v-model="listQuery.endDate"
            type="date"
            style="width: 150px;"
            format="yyyy-MM-dd"
            value-format="yyyy-MM-dd"/>
          <el-button class="filter-item" type="primary" icon="el-icon-search" @click="handleFilter">{{ generateShow('common.search') }}</el-button>
          <el-button class="filter-item" type="primary" icon="el-icon-phone" @click="handleClickSendMessages">{{ generateShow('common.send_messages') }}</el-button>
        </el-col>
      </el-row>
      <el-table
        :data="list"
        border
        style="width: 100%"
        @sort-change="handleColumnSort"
        @selection-change="handleSelectionChange">
        <el-table-column
          type="selection"
          width="55"/>
        <el-table-column
          label="姓名"
          min-width="60">
          <template slot-scope="scope">
            <router-link :to="'/preview/child/'+scope.row.childId">
              <el-button type="text" size="small">{{ scope.row.name }}</el-button>
            </router-link>
          </template>
        </el-table-column>
        <el-table-column
          v-if="hasOptions('healthIndex')"
          :label="generateShow('common.healthIndex')"
          prop="healthIndex"
          sortable="custom"
          min-width="80"/>
        <el-table-column
          v-if="hasOptions('wearTime')"
          :label="generateShow('common.wearTime')"
          prop="wearTime"
          sortable="custom"
          min-width="80"/>
        <el-table-column
          v-if="hasOptions('outTime')"
          :label="generateShow('common.outTime')"
          prop="outTime"
          sortable="custom"
          min-width="80"/>
        <el-table-column
          v-if="hasOptions('luxDay')"
          :label="generateShow('common.luxDay')"
          prop="luxDay"
          sortable="custom"
          min-width="80"/>
        <el-table-column
          v-if="hasOptions('nearworkDay')"
          :label="generateShow('common.nearworkDay')"
          prop="nearworkDay"
          sortable="custom"
          min-width="80"/>
        <el-table-column
          v-if="hasOptions('nearworkBurdenDay')"
          :label="generateShow('common.nearworkBurdenDay')"
          prop="nearworkBurdenDay"
          sortable="custom"
          min-width="80"/>
        <el-table-column
          v-if="hasOptions('badPostureTimes')"
          :label="generateShow('common.badPostureTimes')"
          prop="badPostureTimes"
          sortable="custom"
          min-width="80"/>
        <el-table-column
          v-if="hasOptions('stepCount')"
          :label="generateShow('common.stepCount')"
          prop="stepCount"
          sortable="custom"
          min-width="60"/>
        <el-table-column
          :label="generateShow('common.sync_days_count')"
          prop="daysCount"
          sortable="custom"
          min-width="80"/>
      </el-table>
      <div class="pagination-container">
        <el-pagination v-show="total>0" :current-page="listQuery.page" :page-sizes="[10,20,30, 50]" :page-size="listQuery.limit" :total="total" background layout="total, sizes, prev, pager, next, jumper" @size-change="handleSizeChange" @current-change="handleCurrentChange"/>
      </div>
    </el-card>
    <group_channel ref="group_channel"/>
  </div>
</template>
<script>
import { fetchSorting } from '@/api/summary'
import group_channel from '../components/group_channel'
const optionsData = [
  { key: 'healthIndex', label: '健康评分' },
  { key: 'wearTime', label: '戴镜时间' },
  { key: 'outTime', label: '户外时间(120分钟)' },
  { key: 'luxDay', label: '阳光摄入(36万Lux)' },
  { key: 'stepCount', label: '步数(12000步)' },
  { key: 'nearworkDay', label: '近距离用眼时间(260分钟)' },
  { key: 'nearworkBurdenDay', label: '用眼负荷(720D)' },
  { key: 'badPostureTimes', label: '不良姿势提醒(45次)' }
]
const checkedData = ['healthIndex', 'wearTime', 'outTime', 'luxDay', 'nearworkDay', 'nearworkBurdenDay', 'badPostureTimes', 'stepCount']
export default {
  components: { group_channel },
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
        startDate: new Date(),
        endDate: new Date(),
        sortProp: '',
        sortOrder: ''
      },
      multipleSelection: []
    }
  },
  created() {
    this.getList()
  },
  methods: {
    handleClickSendMessages() {
      if (this.multipleSelection.length === 0) {
        this.$message({
          message: '请选择要批量发送的用户！',
          type: 'warning'
        })
        return
      }
      var aa = this.multipleSelection.map(row => {
        // console.log('row => ', row.childId)
        // this.$refs.multipleTable.toggleRowSelection(row);
        return row.childId
      })
      console.log('批量发送消息 => ', aa)
      this.$refs.group_channel.handleShow(aa)
    },
    handleSelectionChange(val) {
      this.multipleSelection = val
    },
    handleFilter() {
      this.getList()
    },
    getList() {
      fetchSorting(this.listQuery).then(response => {
        this.list = response.data.items
        this.total = response.data.total
      })
    },
    hasOptions(val) {
      return this.checkedOptions.indexOf(val) > -1
    },
    handleColumnSort(val) {
      this.listQuery.sortProp = val.prop
      this.listQuery.sortOrder = val.order
      this.getList()
    },
    handleCheckAllChange(val) {
      this.checkedOptions = val ? checkedData : []
      this.isIndeterminate = false
    },
    handleCheckedOptionsChange(value) {
      const checkedCount = value.length
      this.checkAll = checkedCount === this.options.length
      this.isIndeterminate = checkedCount > 0 && checkedCount < this.options.length
    },
    handleCurrentChange(val) {
      this.listQuery.page = val
      this.getList()
    },
    handleSizeChange(val) {
      this.listQuery.limit = val
      this.getList()
    }
  }
}
</script>

<style scoped>
</style>
