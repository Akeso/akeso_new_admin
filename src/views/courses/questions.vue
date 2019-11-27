<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>问题列表</span>
      </div>

      <div class="filter-container">
        <el-button class="filter-item" type="success" icon="el-icon-plus" @click="handleClickNew">新增题目</el-button>
      </div>

      <el-table
        :data="list"
        border
        style="width: 100%; margin-top: 10px;">
        <el-table-column
          label="题目"
          prop="title"
          min-width="160"/>
        <el-table-column
          :label="generateShow('common.operate')"
          min-width="60" >
          <template slot-scope="scope">
            <el-button type="text" size="small" @click="handleClickUpdate(scope.row)">修改</el-button>
            <el-button type="text" size="small">查看</el-button>
            <el-button type="text" size="small" @click="handleClickDestroy(scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
    <NewQuestion ref="newQuestion" @create-success="getList"/>
    <EditCourse ref="editCourse" @update-success="getList"/>
  </div>
</template>
<script>
import { fetchList, deleteItem } from '@/api/questions'
import NewQuestion from './components/new_question'
import EditCourse from './components/edit_course'
export default {
  components: { NewQuestion, EditCourse },
  data() {
    return {
      course_id: this.$route.params.id,
      list: null,
      listLoading: true
    }
  },
  created() {
    this.getList()
  },
  methods: {
    getList() {
      fetchList({ course_id: this.course_id }).then(response => {
        this.list = response.data.items
        // Just to simulate the time of the request
        setTimeout(() => {
          this.listLoading = false
        }, 1.5 * 1000)
      })
    },
    handleClickNew() {
      this.$refs.newQuestion.show(this.course_id)
    },
    handleClickUpdate(val) {
      this.$refs.editCourse.show(val)
    },
    handleClickDestroy(val) {
      this.$confirm('确认删除该课程?', '提示', {
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
    }
  }
}
</script>

