<template>
  <div>
    <el-card class="box-card">

      <div class="filter-container">
        <el-button class="filter-item" type="success" icon="el-icon-plus">新增</el-button>
      </div>

      <el-table
        :data="list"
        border
        style="width: 100%; margin-top: 10px;"
        @sort-change="handleColumnSort">
        <el-table-column
          label="学校"
          prop="name"
          min-width="90"/>
        <el-table-column
          label="创建日期"
          prop="created_at"
          min-width="120"/>
        <el-table-column
          label="操作"
          min-width="120" >
          <template slot-scope="scope">
            <el-button type="primary" size="small" @click="handleClickEdit(scope.row)">编辑</el-button>
            <el-button type="danger" size="small" @click="handleClickDelete(scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>

      <div class="pagination-container">
        <el-pagination v-show="total>0" :current-page="listQuery.page" :page-sizes="[10,20,30, 50]" :page-size="listQuery.limit" :total="total" background layout="total, sizes, prev, pager, next, jumper" @size-change="handleSizeChange" @current-change="handleCurrentChange"/>
      </div>
    </el-card>
    <NewScreening />
  </div>
</template>

<script>
import NewScreening from './components/new_screening'
export default {
  components: { NewScreening },
  data() {
    return {
      list: [],
      total: null,
      listLoading: true,
      listQuery: {
        page: 1,
        limit: 20,
        importance: undefined,
        name: undefined,
        phone: undefined,
        email: undefined,
        type: undefined,
        sort_prop: undefined,
        sort_order: undefined
      }
    }
  },
  created() {
    this.getList()
  },
  methods: {
    handleClickDelete(val) {
      this.$confirm('确认删除本次筛查?', '提示', {
        confirmButtonText: '是',
        cancelButtonText: '否',
        type: 'warning'
      }).then(() => {
        deleteItem({ id: val.id }).then(response => {
          this.getList()
          this.$message({
            type: 'success',
            message: '删除成功!'
          })
        })
      }).catch(() => {
      })
    },
    getList() {
      // fetchList(this.listQuery).then(response => {
      //   this.list = response.data.items
      //   this.total = response.data.total
      //   // Just to simulate the time of the request
      //   setTimeout(() => {
      //     this.listLoading = false
      //   }, 1.5 * 1000)
      // })
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
      this.listQuery.sort_prop = val.prop
      this.listQuery.sort_order = val.order
      this.getList()
    },
    handleFilter() {
      this.getList()
    },
    handleFilterClear() {
      this.listQuery.name = ''
      this.listQuery.phone = ''
      this.listQuery.email = ''
    }
  }
}
</script>

<style scoped>

</style>
