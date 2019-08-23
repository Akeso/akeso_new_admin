<template>
  <div class="app-container">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>{{ generateShow('route.app_files') }}</span>
      </div>

      <div class="filter-container">
        <el-button class="filter-item" type="success" icon="el-icon-plus" @click="handleClickNew">{{ generateShow('common.new') }}</el-button>
      </div>

      <el-table
        :data="list"
        border
        style="width: 100%"
        @sort-change="handleColumnSort">
        <el-table-column
          prop="deviceType"
          label="镜腿大版本名"
          min-width="60"/>
        <el-table-column
          prop="secondType"
          label="镜腿小版本名"
          min-width="60"/>
        <el-table-column
          prop="version"
          label="升级版本号"
          min-width="50"/>
        <el-table-column
          prop="fileName"
          label="文件名"
          min-width="120"/>
        <el-table-column
          prop="fileSize"
          label="文件大小(B)"
          min-width="50"/>
        <el-table-column
          :label="generateShow('common.created_at')"
          prop="createdAt"
          min-width="60"/>
        <el-table-column
          :label="generateShow('common.operate')"
          min-width="40" >
          <template slot-scope="scope">
            <el-button type="text" size="small" @click="handleClick(scope.row)">{{ generateShow('common.modify') }}</el-button>
          </template>
        </el-table-column>
      </el-table>

      <div class="pagination-container">
        <el-pagination v-show="total>0" :current-page="listQuery.page" :page-sizes="[10,20,30, 50]" :page-size="listQuery.limit" :total="total" background layout="total, sizes, prev, pager, next, jumper" @size-change="handleSizeChange" @current-change="handleCurrentChange"/>
      </div>
    </el-card>
    <Edit ref="edit" @updateVersionSuccess="getList"/>
    <New ref="new" @updateVersionSuccess="getList"/>
  </div>
</template>
<script>
import { fetchList } from '@/api/server_app_files'
import Edit from './components/edit'
import New from './components/new'
export default {
  components: { Edit, New },
  filters: {
    stateFilter(status) {
      const statusMap = {
        bind: 'success',
        unbind: 'info'
      }
      return statusMap[status]
    }
  },
  data() {
    return {
      list: [],
      total: null,
      listLoading: true,
      listQuery: {
        page: 1,
        limit: 20
      }
    }
  },
  created() {
    this.getList()
  },
  methods: {
    handleClickNew() {
      this.$refs.new.show()
    },
    handleClick(val) {
      this.$refs.edit.show(val)
    },
    getList() {
      fetchList(this.listQuery).then(response => {
        this.list = response.data.items
        this.total = response.data.total
        // Just to simulate the time of the request
        // setTimeout(() => {
        //   this.listLoading = false
        // }, 1.5 * 1000)
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

