<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span>{{ $t('route.enChildren') }}</span>
    </div>
    <div class="filter-container">
      Name:
      <el-input v-model="listQuery.name" label="name" placeholder="name" style="width: 100px;" class="filter-item" />
      Creation Time:
      <el-date-picker v-model="listQuery.startDate" type="date" style="width: 150px;" placeholder="start date"/> -
      <el-date-picker v-model="listQuery.endDate" type="date" style="width: 150px;" placeholder="end date"/>
      <el-button class="filter-item" type="primary" icon="el-icon-search" @click="handleFilter">Search</el-button>
      <el-button class="filter-item" type="primary" @click="handleFilterClear">Clear</el-button>
    </div>

    <el-table
      :data="list"
      border
      style="width: 100%"
      @sort-change="handleColumnSort">
      <el-table-column
        prop="name"
        label="Name"
        min-width="90"/>
      <el-table-column
        prop="age"
        label="Age"
        min-width="90"/>
      <el-table-column
        prop="gender"
        label="Gender"
        min-width="90"/>
      <el-table-column
        prop="createdAt"
        label="Creation time"
        sortable="custom"
        min-width="180"/>
      <el-table-column
        label="Operation"
        min-width="90" >
        <template slot-scope="scope">
          <router-link :to="'/enChildren/child/'+scope.row.id">
            <el-button type="text" size="small">Show</el-button>
          </router-link>
        </template>
      </el-table-column>
    </el-table>

    <div class="pagination-container">
      <el-pagination v-show="total>0" :current-page="listQuery.page" :page-sizes="[10,20,30, 50]" :page-size="listQuery.limit" :total="total" background layout="total, sizes, prev, pager, next, jumper" @size-change="handleSizeChange" @current-change="handleCurrentChange"/>
    </div>
  </el-card>
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
