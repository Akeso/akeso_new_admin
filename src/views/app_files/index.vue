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
          prop="name"
          label="名称"
          min-width="40"/>
        <el-table-column
          prop="version"
          label="版本名"
          min-width="40"/>
        <el-table-column
          prop="url"
          label="下载地址"
          min-width="120"/>
        <el-table-column
          prop="fileSize"
          label="文件大小(B)"
          min-width="40"/>
        <el-table-column
          :label="generateShow('common.created_at')"
          prop="createdAt"
          min-width="60"/>
        <el-table-column
          :label="generateShow('common.operate')"
          min-width="40" >
          <template slot-scope="scope">
            <el-button type="text" size="small" @click="handleClickDelete(scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>

      <div class="pagination-container">
        <el-pagination v-show="total>0" :current-page="listQuery.page" :page-sizes="[10,20,30, 50]" :page-size="listQuery.limit" :total="total" background layout="total, sizes, prev, pager, next, jumper" @size-change="handleSizeChange" @current-change="handleCurrentChange"/>
      </div>
    </el-card>
    <New ref="new" @updateVersionSuccess="getList"/>
  </div>
</template>
<script>
import { fetchList, deleteItem } from '@/api/app_files'
import New from './components/new'
export default {
  components: { New },
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
    handleClickDelete(val) {
      this.$confirm('确定要删除该文件吗?', '提示', {
        confirmButtonText: '是',
        cancelButtonText: '否',
        type: 'warning'
      }).then(() => {
        deleteItem(val).then(res => {
          this.getList()
        })
      }).catch(() => {
      })
    },
    handleClickNew() {
      this.$refs.new.show()
    },
    getList() {
      fetchList(this.listQuery).then(response => {
        this.list = response.data.items
        this.total = response.data.total
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

