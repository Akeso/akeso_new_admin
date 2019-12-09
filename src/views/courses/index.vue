<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>课程列表</span>
      </div>

      <div class="filter-container">
        <el-button class="filter-item" type="success" icon="el-icon-plus" @click="handleClickNew">新增课程</el-button>
      </div>

      <el-table
        :data="list"
        border
        style="width: 100%; margin-top: 10px;">
        <el-table-column
          label="标题"
          prop="title"
          min-width="160"/>
        <el-table-column
          :label="generateShow('common.operate')"
          min-width="60" >
          <template slot-scope="scope">
            <el-button type="text" size="small" @click="handleClickUpdate(scope.row)">修改</el-button>
            <el-button type="text" size="small" @click="handleClickShow(scope.row)">查看</el-button>
            <el-button type="text" size="small" @click="handleClickDestroy(scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
    <NewCourse ref="newCourse" @create-success="getList"/>
    <EditCourse ref="editCourse" @update-success="getList"/>
  </div>
</template>
<script>
import { fetchList, deleteItem } from '@/api/courses'
import NewCourse from './components/new_course'
import EditCourse from './components/edit_course'
export default {
  components: { NewCourse, EditCourse },
  data() {
    return {
      list: null,
      listLoading: true
    }
  },
  created() {
    this.getList()
  },
  methods: {
    getList() {
      fetchList().then(response => {
        this.list = response.data.items
        // Just to simulate the time of the request
        setTimeout(() => {
          this.listLoading = false
        }, 1.5 * 1000)
      })
    },
    handleClickNew() {
      this.$refs.newCourse.show()
    },
    handleClickUpdate(val) {
      this.$refs.editCourse.show(val)
    },
    handleClickShow(val) {
      this.$router.push({ path: '/courses/courses/' + val.id })
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

