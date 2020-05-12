<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>产品管理</span>
      </div>

      <div class="filter-container">
        名称：
        <el-input v-model="listQuery.name" :placeholder="generateShow('common.name_field')" size="mini" label="名称" style="width: 200px;" class="filter-item" clearable/>
        <el-button class="filter-item" size="mini" type="primary" icon="el-icon-search" @click="handleFilter">搜索</el-button>
        <el-button size="mini" icon="el-icon-plus" @click="handleClickNew">新增</el-button>
        <el-button size="mini" icon="el-icon-edit" @click="handleClickEdit">修改</el-button>
        <el-button size="mini" icon="el-icon-delete" @click="handleClickDelete">删除</el-button>
      </div>

      <el-table :data="list" border style="width: 100%; margin-top: 10px;" highlight-current-row @current-change="handleCurrentSelect">
        <el-table-column label="名称" prop="name" min-width="90"/>
        <el-table-column label="类别" prop="kind" min-width="120"/>
        <el-table-column label="兑换积分" prop="akeso_coin" min-width="120"/>
        <el-table-column label="原价(元)" prop="origin_price" min-width="120"/>
        <el-table-column label="创建时间" prop="created_at" min-width="120"/>
      </el-table>

      <div class="pagination-container">
        <el-pagination v-show="total>0" :current-page="listQuery.page" :page-sizes="[10,20,30, 50]" :page-size="listQuery.limit" :total="total" background layout="total, sizes, prev, pager, next, jumper" @size-change="handleSizeChange" @current-change="handleCurrentChange"/>
      </div>
    </el-card>
    <New v-if="newDoctorVisible" :dialog-visible="newDoctorVisible" @hidden="hideChangeEmit"/>
    <Edit v-if="editDoctorVisible" :dialog-visible="editDoctorVisible" :item="currentItem" @hidden="hideChangeEmit"/>
  </div>
</template>
<script>
import { fetchList, deleteItem } from '@/api/coin_products'
import New from './components/new'
import Edit from './components/edit'

export default {
  components: { New, Edit },
  data() {
    return {
      newDoctorVisible: false,
      editDoctorVisible: false,
      currentItem: undefined,
      list: null,
      total: null,
      listLoading: true,
      listQuery: {
        page: 1,
        limit: 20,
        name: undefined
      }
    }
  },
  created() { this.getList() },
  methods: {
    hideChangeEmit(refreshState) {
      if (refreshState) { this.getList() }
      this.newDoctorVisible = false
      this.editDoctorVisible = false
    },
    handleCurrentSelect(item) { this.currentItem = item },
    handleClickEdit() {
      if (!this.currentItem) { this.$message({ type: 'warning', message: '请先选择一项进行操作!' }); return }
      this.editDoctorVisible = true
    },
    handleClickNew() { this.newDoctorVisible = true },
    handleClickDelete() {
      if (!this.currentItem) { this.$message({ type: 'warning', message: '请先选择一项进行操作!' }); return }
      this.$confirm('确认删除该条信息?', '提示', { confirmButtonText: '是', cancelButtonText: '否', type: 'warning' }).then(() => {
        deleteItem({ id: this.currentItem.id }).then(res => {
          this.getList()
          this.$message({ type: 'success', message: '删除成功!' })
        })
      }).catch(() => {})
    },
    getList() {
      if (this.$store.getters.baseType === 'agent') {
        Object.assign(this.listQuery, { agent_id: this.$store.getters.id })
      }
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

