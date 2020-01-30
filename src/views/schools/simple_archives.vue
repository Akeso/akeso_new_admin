<template>
  <div>
    <el-card class="box-card">
      <el-row>
        <el-upload
          :on-preview="handlePreview"
          :on-remove="handleRemove"
          :on-success="handleSuccess"
          :limit="1"
          :data="uploadData"
          class="upload-demo"
          accept=".xlsx, .xls"
          action="/api/common/excels/upload_rosters">
          <div class="overflow">
            <el-button type="success" icon="el-icon-plus" @click.stop="handleClickNew">新增</el-button>
            <el-button size="small" type="primary" class="left">上传Excel</el-button>
            <el-button size="small" class="left m-l-2" @click.stop="downloadExc">下载Excel模板</el-button>
          </div>
        </el-upload>
      </el-row>

      <el-table
        :data="list"
        border
        style="width: 100%; margin-top: 10px;"
        @sort-change="handleColumnSort">
        <el-table-column
          label="姓名"
          prop="child_name"
          min-width="90"/>
        <el-table-column
          label="性别"
          min-width="90">
          <template slot-scope="scope">
            {{ scope.row.gender | genderFilter }}
          </template>
        </el-table-column>
        <el-table-column
          label="右眼裸眼视力"
          prop="ucva_od"
          min-width="90"/>
        <el-table-column
          label="左眼裸眼视力"
          prop="ucva_os"
          min-width="90"/>
        <el-table-column
          label="操作"
          min-width="120" >
          <template slot-scope="scope">
            <el-button type="primary" size="small" @click="handleClickEdit(scope.row)">编辑</el-button>
            <el-button type="success" size="small" @click="handleClickShow(scope.row)">查看</el-button>
            <el-button type="danger" size="small" @click="handleClickDelete(scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>

      <div class="pagination-container">
        <el-pagination v-show="total>0" :current-page="listQuery.page" :page-sizes="[10,20,30, 50]" :page-size="listQuery.limit" :total="total" background layout="total, sizes, prev, pager, next, jumper" @size-change="handleSizeChange" @current-change="handleCurrentChange"/>
      </div>
    </el-card>
    <NewSimpleArchive ref="new_simple_archive" @create-success="getList"/>
    <EditSimpleArchive ref="edit_simple_archive" @update-success="getList"/>
    <ShowSimpleArchive ref="show_simple_archive"/>
  </div>
</template>
<script>
import { fetchList, deleteItem } from '@/api/simple_archives'
import NewSimpleArchive from './components/new_simple_archive'
import EditSimpleArchive from './components/edit_simple_archive'
import ShowSimpleArchive from './components/show_simple_archive'
export default {
  components: { NewSimpleArchive, EditSimpleArchive, ShowSimpleArchive },
  filters: {
    genderFilter(status) {
      const statusMap = {
        male: '男',
        female: '女',
        unknown: '未知'
      }
      return statusMap[status]
    }
  },
  data() {
    return {
      uploadData: {
        authenticationToken: this.$store.state.user.authenticationToken
      },
      list: null,
      total: null,
      listLoading: true,
      listQuery: {
        examine_id: this.$route.query.examine_id,
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
    downloadExc() {
      window.location.href = 'https://akeso.com.cn/template/roster_template.xlsx'
    },
    handleRemove(file, fileList) {
      console.log(file, fileList)
    },
    handlePreview(file) {
      console.log(file)
    },
    handleSuccess(res, file) {
      console.log('res => ', res)
      console.log('file => ', file)
    },
    handleClickEdit(val) {
      this.$refs.edit_simple_archive.show(val)
    },
    handleClickNew() {
      this.$refs.new_simple_archive.show()
    },
    handleClickShow(val) {
      this.$refs.show_simple_archive.show(val)
    },
    handleClickDelete(val) {
      this.$confirm('确认删除该条筛查?', '提示', {
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
    }
  }
}
</script>

