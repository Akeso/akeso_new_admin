<template>
  <div>
    <el-tag type="warning">上月眼健康评分 51-100分</el-tag>
    <el-table
      :data="list"
      border
      style="width: 100%; margin-top: 10px;"
      @sort-change="handleColumnSort">
      <el-table-column
        prop="childName"
        label="姓名"
        min-width="60"/>
      <el-table-column
        prop="40"
        label="年龄"
        min-width="60"/>
      <el-table-column
        prop="healthIndex"
        label="用眼健康评分"
        sortable="custom"
        min-width="80"/>
      <el-table-column
        prop="wearTime"
        label="戴镜时间(分钟)"
        sortable="custom"
        min-width="80"/>
      <el-table-column
        prop="outTime"
        label="户外时间(分钟)"
        sortable="custom"
        min-width="80"/>
      <el-table-column
        prop="protectLuxTime"
        label="护眼光照时间(分钟)"
        sortable="custom"
        min-width="80"/>
      <el-table-column
        prop="luxDay"
        label="阳光摄入(Lux)"
        sortable="custom"
        min-width="80"/>
      <el-table-column
        prop="nearworkDay"
        label="近距离用眼时间(分钟)"
        sortable="custom"
        min-width="80"/>
      <el-table-column
        prop="nearworkBurdenDay"
        label="用眼负荷(D)"
        sortable="custom"
        min-width="80"/>
      <el-table-column
        prop="badPostureTimes"
        label="不良姿势提醒(次)"
        sortable="custom"
        min-width="80"/>
      <el-table-column
        prop="stepCount"
        label="步数(步)"
        sortable="custom"
        min-width="60"/>
      <el-table-column
        prop="effectiveDays"
        label="同步天数"
        sortable="custom"
        min-width="80"/>
    </el-table>
    <div class="pagination-container">
      <el-pagination v-show="total>0" :current-page="listQuery.page" :page-sizes="[10,20,30, 50]" :page-size="listQuery.limit" :total="total" background layout="total, sizes, prev, pager, next, jumper" @size-change="handleSizeChange" @current-change="handleCurrentChange"/>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: null,
      total: null,
      todayCount: 0,
      listLoading: true,
      listQuery: {
        page: 1,
        limit: 20,
        importance: undefined,
        sortProp: '',
        sortOrder: ''
      }
    }
  },
  created() {
    console.log('follow two')
  },
  methods: {
    getList() {
      // fetchSorting(this.listQuery).then(response => {
      //   this.list = response.data.items
      //   this.total = response.data.total
      // })
    },
    handleColumnSort: function() {
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
