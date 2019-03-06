<template>
  <div class="app-container">
    <div class="title-container">
      <svg-icon icon-class="list" />全部儿童
    </div>

    <div class="filter-container">
      姓名:
      <el-input v-model="listQuery.name" label="姓名" placeholder="姓名" style="width: 100px;" class="filter-item" />
      创建时间:
      <el-date-picker v-model="listQuery.startDate" type="date" style="width: 150px;" placeholder="开始日期"/> -
      <el-date-picker v-model="listQuery.endDate" type="date" style="width: 150px;" placeholder="截止日期"/>
      <el-button class="filter-item" type="primary" icon="el-icon-search" @click="handleFilter">搜索</el-button>
      <el-button class="filter-item" type="primary" @click="handleFilterClear">清空</el-button>
    </div>

    <el-table
      :data="list"
      border
      style="width: 100%"
      @sort-change="handleColumnSort">
      <el-table-column
        prop="name"
        label="姓名"
        width="90"/>
      <el-table-column
        prop="age"
        label="年龄"
        width="90"/>
      <el-table-column
        prop="gender"
        label="性别"
        width="90"/>
      <el-table-column
        prop="schoolName"
        label="学校名称"
        width="180"/>
      <el-table-column
        prop="locationString"
        label="地区"
        width="180"/>
      <el-table-column
        prop="phone"
        label="联系电话"
        width="120"/>
      <el-table-column
        prop="createdAt"
        label="创建时间"
        sortable="custom"
        width="180"/>
      <el-table-column
        label="操作"
        width="180" >
        <template slot-scope="scope">
          <router-link :to="'/preview/child/'+scope.row.id">
            <el-button type="text" size="small">查看</el-button>
          </router-link>
        </template>
      </el-table-column>
    </el-table>

    <div class="pagination-container">
      <el-pagination v-show="total>0" :current-page="listQuery.page" :page-sizes="[10,20,30, 50]" :page-size="listQuery.limit" :total="total" background layout="total, sizes, prev, pager, next, jumper" @size-change="handleSizeChange" @current-change="handleCurrentChange"/>
    </div>

  </div>
</template>
<script>
import { fetchList } from '@/api/children'
export default {
  data() {
    return {
      list: null,
      total: null,
      listLoading: true,
      listQuery: {
        page: 1,
        limit: 20,
        name: '',
        startDate: '',
        endDate: ''
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
    },
    handleFilterClear() {
      this.listQuery.name = ''
      this.listQuery.startDate = ''
      this.listQuery.endDate = ''
    }
  }
}
</script>
