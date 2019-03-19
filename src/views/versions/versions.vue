<template>
  <div class="app-container">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>版本管理</span>
      </div>

      <el-table
        :data="list"
        border
        style="width: 100%"
        @sort-change="handleColumnSort">
        <el-table-column
          prop="name"
          label="平台"
          min-width="80"/>
        <el-table-column
          prop="description"
          label="描述"
          min-width="100"/>
        <el-table-column
          prop="first"
          label="大版本"
          min-width="60"/>
        <el-table-column
          prop="second"
          label="次版本"
          min-width="60"/>
        <el-table-column
          prop="third"
          label="小版本"
          min-width="60"/>
        <el-table-column
          prop="version"
          label="版本"
          min-width="90"/>
        <el-table-column
          prop="versioncode"
          label="版本code"
          min-width="60"/>
        <el-table-column
          label="操作"
          min-width="60" >
          <template slot-scope="scope">
            <el-button type="text" size="small" @click="handleClick(scope.row)">编辑</el-button>
          </template>
        </el-table-column>
      </el-table>

      <div class="pagination-container">
        <el-pagination v-show="total>0" :current-page="listQuery.page" :page-sizes="[10,20,30, 50]" :page-size="listQuery.limit" :total="total" background layout="total, sizes, prev, pager, next, jumper" @size-change="handleSizeChange" @current-change="handleCurrentChange"/>
      </div>
    </el-card>
    <Edit ref="edit" @updateVersionSuccess="getList"/>
  </div>
</template>
<script>
import { fetchList } from '@/api/versions'
import Edit from './components/edit'
const deviceTypeOptions = [
  { key: '', value: '全部' },
  { key: 'v1', value: '一代' },
  { key: 'v2', value: '二代' }
]
const stateOptions = [
  { key: '', value: '全部' },
  { key: 'bind', value: '已绑定' },
  { key: 'unbind', value: '未绑定' }
]
export default {
  components: { Edit },
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
      deviceTypeOptions,
      stateOptions,
      list: null,
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

