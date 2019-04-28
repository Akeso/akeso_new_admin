<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>机构管理</span>
      </div>

      <div class="filter-container">
        <el-button class="filter-item" type="success" icon="el-icon-plus" @click="handleClickNew">新增</el-button>
      </div>

      <el-row>
        机构名称:
        <el-input v-model="listQuery.title" label="机构名称" placeholder="机构名称" style="width: 150px;" class="filter-item" clearable/>
        <el-button class="filter-item" type="primary" icon="el-icon-search" @click="handleFilter">搜索</el-button>
        <el-button class="filter-item" type="primary" @click="handleFilterClear">清空</el-button>
      </el-row>

      <el-table
        :data="list"
        border
        style="width: 100%; margin-top: 10px;"
        @sort-change="handleColumnSort">
        <el-table-column
          prop="title"
          label="名称"
          min-width="80"/>
        <el-table-column
          prop="location"
          label="地区"
          min-width="80"/>
        <el-table-column
          prop="address"
          label="地址"
          min-width="100"/>
        <el-table-column
          prop="phone"
          label="联系电话"
          min-width="80"/>
        <el-table-column
          label="操作"
          min-width="100" >
          <template slot-scope="scope">
            <el-button type="text" size="small" @click="handleClickShow(scope.row)">查看医生</el-button>
            <el-button type="text" size="small" @click="handleClickModify(scope.row)">修改</el-button>
            <el-button type="text" size="small" @click="handleClickDel(scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>

      <div class="pagination-container">
        <el-pagination v-show="total>0" :current-page="listQuery.page" :page-sizes="[10,20,30, 50]" :page-size="listQuery.limit" :total="total" background layout="total, sizes, prev, pager, next, jumper" @size-change="handleSizeChange" @current-change="handleCurrentChange"/>
      </div>
    </el-card>
    <Edit ref="edit" />
    <NewOrganization ref="new_organization" @create-success="getList"/>
  </div>
</template>
<script>
import Edit from './components/edit'
import NewOrganization from './components/new_organization'
import { fetchList, deleteItem } from '@/api/organizations'
export default {
  components: { Edit, NewOrganization },
  data() {
    return {
      list: null,
      total: null,
      listLoading: true,
      listQuery: {
        page: 1,
        limit: 20,
        importance: undefined,
        title: undefined
      }
    }
  },
  created() {
    this.getList()
  },
  methods: {
    handleClickNew() {
      this.$refs.new_organization.show()
    },
    handleClickShow(val) {
    },
    handleClickModify(val) {
      this.$refs.edit.handleShow()
    },
    handleClickDel(val) {
      this.$confirm('是否删除该机构?', '提示', {
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
      this.listQuery.sortProp = val.prop
      this.listQuery.sortOrder = val.order
      this.getList()
    },
    handleFilter() {
      this.getList()
    },
    handleFilterClear() {
      this.listQuery.title = ''
      this.getList()
    }
  }
}
</script>

