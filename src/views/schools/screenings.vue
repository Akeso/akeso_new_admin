<template>
  <div>
    <el-card class="box-card">

      <div class="filter-container">
        <router-link :to="'/schools/new_screening'">
          <el-button size="mini" plain icon="el-icon-plus">新增</el-button>
        </router-link>
        <el-button size="mini" plain icon="el-icon-search" @click="handleClickShow">查看</el-button>
        <el-button size="mini" plain icon="el-icon-edit" @click="handleClickEdit">编辑</el-button>
        <el-button size="mini" plain icon="el-icon-delete" @click="handleClickDelete(currentSelected)">删除</el-button>
        <el-button size="mini" plain icon="el-icon-upload2" @click="uploadDialogVisible = true">导入</el-button>
        <el-button size="mini" plain icon="el-icon-download" @click="downloadExc">模板下载</el-button>
      </div>

      <el-table
        :data="list"
        border
        style="width: 100%; margin-top: 10px;"
        highlight-current-row
        @sort-change="handleColumnSort"
        @selection-change="handleSelectionChange"
        @current-change="handleCurrentSelect">
        <!--<el-table-column-->
        <!--type="selection"-->
        <!--min-width="10"/>-->
        <el-table-column
          label="学校"
          prop="school_name"
          min-width="60"/>
        <el-table-column
          label="筛查批次"
          prop="examine_name"
          min-width="90"/>
        <el-table-column
          label="姓名"
          prop="name"
          min-width="60"/>
        <el-table-column
          label="联系电话"
          prop="phone"
          min-width="80"/>
        <el-table-column
          label="性别"
          min-width="40">
          <template slot-scope="scope">
            {{ scope.row.sex | genderFilter }}
          </template>
        </el-table-column>
        <el-table-column
          label="年龄"
          min-width="40">
          <template slot-scope="scope">
            {{ scope.row.birthday | ageFilter }}
          </template>
        </el-table-column>
        <el-table-column label="裸眼视力">
          <el-table-column
            label="右眼"
            prop="ucva_od"
            min-width="40"/>
          <el-table-column
            label="左眼"
            prop="ucva_os"
            min-width="40"/>
        </el-table-column>
        <el-table-column label="戴镜视力">
          <el-table-column
            label="右眼"
            prop="wear_eyesight_od"
            min-width="40"/>
          <el-table-column
            label="左眼"
            prop="wear_eyesight_os"
            min-width="40"/>
        </el-table-column>
        <el-table-column prop="iop" label="眼压" min-width="40"></el-table-column>
        <el-table-column label="眼轴">
          <el-table-column prop="left_axis_oculi" label="左眼" min-width="40"></el-table-column>
          <el-table-column prop="right_axis_oculi" label="右眼" min-width="40"></el-table-column>
        </el-table-column>
        <el-table-column label="曲率">
          <el-table-column prop="left_curvature_k1" label="右眼K1" min-width="40"></el-table-column>
          <el-table-column prop="left_curvature_k2" label="右眼K2" min-width="40"></el-table-column>
          <el-table-column prop="right_curvature_k1" label="左眼K1" min-width="40"></el-table-column>
          <el-table-column prop="right_curvature_k2" label="左眼K2" min-width="40"></el-table-column>
        </el-table-column>
        <el-table-column
          label="所属机构"
          prop="merchant_name"
          min-width="80"/>
      </el-table>

      <div class="pagination-container">
        <el-pagination v-show="total>0" :current-page="listQuery.page" :page-sizes="[10,20,30, 50]" :page-size="listQuery.limit" :total="total" background layout="total, sizes, prev, pager, next, jumper" @size-change="handleSizeChange" @current-change="handleCurrentChange"/>
      </div>
    </el-card>
    <div>
      <el-dialog
        :visible.sync="uploadDialogVisible"
        title="提示"
        width="40%">
        <el-upload
          :limit="1"
          :data="uploadData"
          :on-success="uploadSuccess"
          :file-list="fileList"
          drag
          class="upload-demo"
          action="/api/common/excels/upload_screenings">
          <i class="el-icon-upload"/>
          <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
          <div slot="tip" class="el-upload__tip">只能上传excel文件</div>
        </el-upload>
      </el-dialog>
    </div>
    <ShowScreening ref="show_screening"/>
  </div>
</template>

<script>
import { fetchList, deleteItem } from '@/api/screenings'
import ShowScreening from './components/show_screening'
export default {
  components: { ShowScreening },
  data() {
    return {
      uploadDialogVisible: false,
      uploadData: {
        authenticationToken: this.$store.state.user.authenticationToken
      },
      fileList: [],
      list: [],
      currentSelected: {},
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
    downloadExc() {
      window.location.href = 'https://akeso.com.cn/template/筛查记录录入模板.xlsx'
    },
    uploadSuccess(res, fileList) {
      this.$message({ type: 'warning', message: res.message })
      console.log('fileList => ', fileList)
      this.fileList = []
      this.uploadDialogVisible = false
      this.getList()
    },
    handleClickShow() {
      if (this.noSelectMessage()) { return }
      this.$refs.show_screening.show(this.currentSelected)
    },
    handleClickDelete() {
      if (this.noSelectMessage()) { return }
      this.$confirm('确认删除本条筛查记录?', '提示', {
        confirmButtonText: '是',
        cancelButtonText: '否',
        type: 'warning'
      }).then(() => {
        deleteItem({ id: this.currentSelected.id }).then(response => {
          this.getList()
          this.$message({
            type: 'success',
            message: '删除成功!'
          })
        })
      }).catch(() => {
      })
    },
    handleClickEdit() {
      if (this.noSelectMessage()) { return }
      this.$router.push({ path: '/schools/edit_screening/' + this.currentSelected.id })
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
    handleSelectionChange(value) {
      console.log('handleSelectionChange => ', value)
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

<style scoped>
</style>
