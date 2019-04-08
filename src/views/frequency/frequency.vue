<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>上传频次</span>
      </div>

      <div class="filter-container">
        <el-input v-model="listQuery.childName" placeholder="搜索姓名" style="width: 200px;" class="filter-item" />
        <el-button class="filter-item" type="primary" icon="el-icon-search" @click="handleFilter">搜索</el-button>
      </div>

      <el-table
        :data="list"
        border
        style="width: 100%"
        @sort-change="handleColumnSort">
        <el-table-column
          label="姓名"
          width="90">
          <template slot-scope="scope">
            <router-link :to="'/preview/child/'+scope.row.childId">
              <el-button type="text" size="small">{{ scope.row.childName }}</el-button>
            </router-link>
          </template>
        </el-table-column>
        <el-table-column
          prop="uploadTime"
          label="上传时间"
          sortable="custom"
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
          width="120"/>
        <el-table-column
          prop="daysCount"
          label="数据分布"/>
      </el-table>

      <div class="pagination-container">
        <el-pagination v-show="total>0" :current-page="listQuery.page" :page-sizes="[10,20,30, 50]" :page-size="listQuery.limit" :total="total" background layout="total, sizes, prev, pager, next, jumper" @size-change="handleSizeChange" @current-change="handleCurrentChange"/>
      </div>
    </el-card>
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
        childName: undefined,
        type: undefined,
        sortProp: undefined,
        sortOrder: undefined
      }
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
    },
    handleColumnSort(val) {
      this.listQuery.sortProp = val.prop
      this.listQuery.sortOrder = val.order
      this.getList()
    },
    handleFilter() {
      this.getList()
    }
  }
}
</script>

