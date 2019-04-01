<template>
  <div class="app-container">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>建立/查询档案</span>
      </div>

      <div class="filter-container">
        <el-button class="filter-item" type="success" icon="el-icon-plus" @click="handleFilter">新建儿童档案</el-button>
        <el-button class="filter-item" type="primary" icon="el-icon-plus" @click="handleFilterClear">
          <i class="el-icon-plus"/>
          批量上传档案
        </el-button>
      </div>

      <div class="filter-container">
        姓名:
        <el-input v-model="listQuery.name" label="姓名" placeholder="姓名" style="width: 200px;" class="filter-item" clearable/>
        <el-button class="filter-item" type="primary" icon="el-icon-search" @click="handleFilter">查询</el-button>
        <el-button class="filter-item" type="primary" @click="handleFilterClear">清空</el-button>
      </div>

      <el-table
        :data="list"
        border
        style="width: 100%"
        @sort-change="handleColumnSort">
        <el-table-column
          prop="date"
          label="姓名"
          min-width="80"/>
        <el-table-column
          prop="code"
          label="裸眼远视力(右)"
          min-width="80"/>
        <el-table-column
          prop="childName"
          label="裸眼远视力(左)"
          min-width="80"/>
        <el-table-column
          prop="gender"
          label="戴镜远视力(右)"
          min-width="80"/>
        <el-table-column
          prop="age"
          label="戴镜远视力(左)"
          min-width="80"/>
        <el-table-column
          prop="stateName"
          label="眼轴长度(右)"
          min-width="80"/>
        <el-table-column
          prop="reachTime"
          label="眼轴长度(左)"
          min-width="80"/>
        <el-table-column
          prop="reachTime"
          label="是否匹配OK镜"
          min-width="80"/>
        <el-table-column
          prop="reachTime"
          label="是否参与视功能训练"
          min-width="80"/>
        <el-table-column
          prop="reachTime"
          label="下次复查时间"
          min-width="80"/>
      </el-table>

      <div class="pagination-container">
        <el-pagination v-show="total>0" :current-page="listQuery.page" :page-sizes="[10,20,30, 50]" :page-size="listQuery.limit" :total="total" background layout="total, sizes, prev, pager, next, jumper" @size-change="handleSizeChange" @current-change="handleCurrentChange"/>
      </div>
    </el-card>
  </div>
</template>
<script>
// import { fetchList, putConfirm } from '@/api/appointments'
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
        name: undefined
      }
    }
  },
  computed: {
    todayText: function() {
      return '今日将有' + this.todayCount + '个用户预约到店建档'
    }
  },
  created() {
    this.getList()
  },
  methods: {
    getList() {
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
      this.getList()
    }
  }
}
</script>

