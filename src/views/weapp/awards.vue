<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>奖品管理</span>
      </div>

      <div class="filter-container">
        <el-button class="filter-item" type="success" icon="el-icon-plus" @click="handleClickNew">新增</el-button>
      </div>

      <el-table
        :data="list"
        border
        style="width: 100%; margin-top: 10px;"
        @sort-change="handleColumnSort">
        <el-table-column
          prop="id"
          label="ID"
          min-width="90"/>
        <el-table-column
          prop="title"
          label="名称"
          min-width="120"/>
        <el-table-column
          label="操作"
          min-width="120" >
          <template slot-scope="scope">
            <el-button type="text" size="small" @click="handleClickEdit(scope.row)">修改</el-button>
            <el-button type="text" size="small" @click="handleClickEditLogo(scope.row)">设置Logo</el-button>
            <el-button type="text" size="small" @click="handleClickEditBanner(scope.row)">设置Banner</el-button>
            <el-button type="text" size="small" @click="handleClickEditPicture(scope.row)">设置Picture</el-button>
            <el-button type="text" size="small" @click="handleClickDelete(scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>

      <div class="pagination-container">
        <el-pagination v-show="total>0" :current-page="listQuery.page" :page-sizes="[10,20,30, 50]" :page-size="listQuery.limit" :total="total" background layout="total, sizes, prev, pager, next, jumper" @size-change="handleSizeChange" @current-change="handleCurrentChange"/>
      </div>
    </el-card>
    <NewAward ref="new_award" @create-success="getList"/>
    <EditAward ref="edit_award" @update-success="getList"/>
    <EditLogo ref="edit_logo" @update-success="getList"/>
    <EditBanner ref="edit_banner" @update-success="getList"/>
    <EditPicture ref="edit_picture" @update-success="getList"/>
  </div>
</template>
<script>
import { fetchList } from '@/api/weapp/awards'
import NewAward from './components/new_award'
import EditAward from './components/edit_award'
import EditLogo from './components/edit_logo'
import EditBanner from './components/edit_banner'
import EditPicture from './components/edit_picture'
export default {
  components: { NewAward, EditAward, EditLogo, EditBanner, EditPicture },
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
        startDate: undefined,
        endDate: undefined,
        type: undefined,
        sortProp: undefined,
        sortOrder: undefined
      }
    }
  },
  created() {
    this.getList()
  },
  methods: {
    handleClickEdit(val) {
      this.$refs.edit_award.show(val)
    },
    handleClickEditLogo(val) {
      this.$refs.edit_logo.show(val)
    },
    handleClickEditBanner(val) {
      this.$refs.edit_banner.show(val)
    },
    handleClickEditPicture(val) {
      this.$refs.edit_picture.show(val)
    },
    handleClickNew() {
      this.$refs.new_award.show()
    },
    handleClick(val) {
    },
    handleClickDelete(val) {
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
      this.listQuery.sortProp = val.prop
      this.listQuery.sortOrder = val.order
      this.getList()
    },
    handleFilter() {
      this.getList()
    },
    handleFilterClear() {
      this.listQuery.name = ''
      this.listQuery.phone = ''
      this.listQuery.email = ''
      this.listQuery.startDate = ''
      this.listQuery.endDate = ''
    }
  }
}
</script>

