<template>
  <div>
    <el-card class="box-card">

      <div class="filter-container">
        <el-button explain size="mini" icon="el-icon-plus" @click="handleClickNew">新增</el-button>
        <el-button size="mini" @click="handleClickEdit">编辑</el-button>
        <el-button size="mini" @click="handleClickDelete">删除</el-button>
        <!--<el-button size="mini" @click="handleClickStatics(scope.row)">生成班级报告</el-button>-->
      </div>

      <el-table :data="list" border highlight-current-row style="width: 100%; margin-top: 10px;" @current-change="handleCurrentSelect" @sort-change="handleColumnSort">
        <el-table-column label="批次名称" prop="name" min-width="60"/>
        <el-table-column label="学校" prop="school_name" min-width="60"/>
        <el-table-column label="年级" prop="class_value" min-width="30"/>
        <el-table-column label="班级" prop="grade_value" min-width="30"/>
        <el-table-column label="筛查数量" prop="screenings_count" min-width="30"/>
        <el-table-column label="所属机构" prop="merchant_name" min-width="60"/>
        <el-table-column label="创建日期" prop="created_at" min-width="60"/>
      </el-table>

      <div class="pagination-container">
        <el-pagination v-show="total>0" :current-page="listQuery.page" :page-sizes="[10,20,30, 50]" :page-size="listQuery.limit" :total="total" background layout="total, sizes, prev, pager, next, jumper" @size-change="handleSizeChange" @current-change="handleCurrentChange"/>
      </div>
    </el-card>
    <NewExamine ref="newExamine" @create-success="getList"/>
    <EditExamine ref="editExamine" @update-success="getList"/>
    <ExamineStatistics ref="examineStatistics"/>
  </div>
</template>
<script>
import { fetchList, deleteItem } from '@/api/examines'
import NewExamine from './components/new_examine'
import EditExamine from './components/edit_examine'
import ExamineStatistics from './components/examine_statistics'
export default {
  components: { NewExamine, EditExamine, ExamineStatistics },
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
        type: undefined,
        sort_prop: undefined,
        sort_order: undefined
      },
      currentSelected: {}
    }
  },
  created() {
    this.getList()
  },
  methods: {
    handleClickEdit() {
      if (this.noSelectMessage()) { return }
      this.$refs.editExamine.show(this.currentSelected)
    },
    handleClickStatics(val) {
      this.$refs.examineStatistics.show(val)
    },
    handleClickNew() {
      this.$refs.newExamine.show()
    },
    handleClickShow(val) {
      this.$router.push({ path: '/schools/simple_archives?examine_id=' + val.id })
    },
    handleClickDelete() {
      if (this.noSelectMessage()) { return }
      this.$confirm('确认删除本次筛查?', '提示', {
        confirmButtonText: '是',
        cancelButtonText: '否',
        type: 'warning'
      }).then(() => {
        deleteItem({ id: this.currentSelected.id }).then(res => {
          this.getList()
          this.$message({ type: 'success', message: '删除成功!' })
        })
      }).catch(() => {
      })
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
    },
    handleCurrentSelect(value) {
      this.currentSelected = value
    },
    noSelectMessage() {
      if (this.currentSelected.id) {
        return false
      }
      this.$message({ type: 'warning', message: '请选择一条数据!' })
      return true
    }
  }
}
</script>

