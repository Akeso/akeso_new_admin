<template>
  <div class="app-container">
    <div class="title-container">
      <svg-icon icon-class="list" />医生管理
    </div>

    <div class="filter-container">
      姓名:
      <el-input v-model="listQuery.name" label="姓名" placeholder="姓名" style="width: 100px;" class="filter-item" />
      联系电话:
      <el-input v-model="listQuery.phone" label="联系电话" placeholder="联系电话" style="width: 180px;" class="filter-item" />
      登录账号:
      <el-input v-model="listQuery.email" label="姓名" placeholder="登录账号" style="width: 180px;" class="filter-item" />
      注册时间:
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
        width="180"/>
      <el-table-column
        prop="hospital"
        label="组织"
        width="180"/>
      <el-table-column
        prop="childrenCount"
        label="孩子数量"
        width="80"/>
      <el-table-column
        prop="phone"
        label="联系电话"
        width="120"/>
      <el-table-column
        prop="email"
        label="登录账号"
        width="180"/>
      <el-table-column
        prop="gender"
        label="性别"
        width="60"/>
      <el-table-column
        prop="locationStreet"
        label="地区"
        width="180"/>
      <el-table-column
        prop="jobTitle"
        label="职称"
        width="90"/>
      <el-table-column
        prop="workingYears"
        label="工作时间"
        width="90"/>
      <el-table-column
        prop="createdAt"
        label="创建时间"
        width="180"/>
      <el-table-column
        label="操作"
        width="180" >
        <template slot-scope="scope">
          <el-button type="text" size="small" @click="handleClick(scope.row)">查看</el-button>
          <el-button type="text" size="small" @click="handleClick(scope.row)">修改</el-button>
          <el-button type="text" size="small" @click="handleClick(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <div class="pagination-container">
      <el-pagination v-show="total>0" :current-page="listQuery.page" :page-sizes="[10,20,30, 50]" :page-size="listQuery.limit" :total="total" background layout="total, sizes, prev, pager, next, jumper" @size-change="handleSizeChange" @current-change="handleCurrentChange"/>
    </div>

  </div>
</template>
<script>
import { fetchList } from '@/api/doctors'
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
        name: undefined,
        phone: undefined,
        email: undefined,
        startDate: undefined,
        endDate: undefined,
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
    handleClick(val) {
    },
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
      this.listQuery.phone = ''
      this.listQuery.email = ''
      this.listQuery.startDate = ''
      this.listQuery.endDate = ''
    }
  }
}
</script>
