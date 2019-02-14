<template>
  <div class="app-container">
    <div class="title-container">
      <svg-icon icon-class="list" />上传频次
    </div>

    <div class="filter-container">
      <el-input v-model="listQuery.title" placeholder="搜索" style="width: 200px;" class="filter-item" />
    </div>

    <el-table
      :data="list"
      border
      style="width: 100%">
      <el-table-column
        prop="childName"
        label="姓名"
        width="90"/>
      <el-table-column
        prop="uploadTime"
        label="上传时间"
        width="180"/>
      <el-table-column
        prop="electricity"
        label="电量"
        width="90"/>
      <el-table-column
        prop="platform"
        label="平台"
        width="90"/>
      <el-table-column
        prop="uploadCount"
        label="上传总条数"
        width="90"/>
      <el-table-column
        prop="daysCount"
        label="数据分布"/>
    </el-table>

    <div class="pagination-container">
      <el-pagination v-show="total>0" :current-page="listQuery.page" :page-sizes="[10,20,30, 50]" :page-size="listQuery.limit" :total="total" background layout="total, sizes, prev, pager, next, jumper" @size-change="handleSizeChange" @current-change="handleCurrentChange"/>
    </div>

  </div>
</template>
<script>
import { fetchList } from '@/api/frequency'
export default {
  data() {
    return {
      list: null,
      total: null,
      listLoading: true,
      listQuery: {
        page: 1,
        limit: 20,
        importance: undefined,
        title: undefined,
        type: undefined
      },
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }]
    }
  },
  created() {
    this.getList()
  },
  methods: {
    getList() {
      fetchList(this.listQuery).then(response => {
        this.list = response.data.items
        this.total = response.data.total
        // Just to simulate the time of the request
        setTimeout(() => {
          this.listLoading = false
        }, 1.5 * 1000)
      })
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

