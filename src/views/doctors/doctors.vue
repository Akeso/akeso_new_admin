<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>账户管理</span>
      </div>

      <div class="filter-container">
        <el-button class="filter-item" type="success" icon="el-icon-plus" @click="handleClickNew">新增</el-button>
      </div>

      <el-row>
        <el-col>
          姓名:
          <el-input v-model="listQuery.name" label="姓名" placeholder="姓名" style="width: 100px;" class="filter-item" clearable/>
          联系电话:
          <el-input v-model="listQuery.phone" label="联系电话" placeholder="联系电话" style="width: 180px;" class="filter-item" clearable/>
          登录账号:
          <el-input v-model="listQuery.email" label="姓名" placeholder="登录账号" style="width: 180px;" class="filter-item" clearable/>
        </el-col>
      </el-row>
      <el-row style="margin-top: 10px;">
        <el-col>
          注册时间:
          <el-date-picker v-model="listQuery.startDate" type="date" style="width: 150px;" placeholder="开始日期"/> -
          <el-date-picker v-model="listQuery.endDate" type="date" style="width: 150px;" placeholder="截止日期"/>
          <el-button class="filter-item" type="primary" icon="el-icon-search" @click="handleFilter">搜索</el-button>
          <el-button class="filter-item" type="primary" @click="handleFilterClear">清空</el-button>
        </el-col>
      </el-row>

      <el-table
        :data="list"
        border
        style="width: 100%; margin-top: 10px;"
        @sort-change="handleColumnSort">
        <el-table-column
          prop="name"
          label="姓名"
          min-width="90"/>
        <el-table-column
          prop="organizationTitle"
          label="所属机构"
          min-width="120"/>
        <el-table-column
          prop="childrenCount"
          label="孩子数量"
          min-width="80"/>
        <el-table-column
          prop="phone"
          label="联系电话"
          min-width="100"/>
        <el-table-column
          prop="email"
          label="登录账号"
          min-width="160"/>
        <el-table-column
          prop="genderCn"
          label="性别"
          min-width="50"/>
        <el-table-column
          prop="workingYears"
          label="工作时间"
          min-width="80"/>
        <el-table-column
          prop="createdAt"
          label="创建时间"
          min-width="120"/>
        <el-table-column
          label="操作"
          min-width="120" >
          <template slot-scope="scope">
            <el-button type="text" size="small" @click="handleClickEdit(scope.row)">修改</el-button>
            <el-button type="text" size="small" @click="handleClickDelete(scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>

      <div class="pagination-container">
        <el-pagination v-show="total>0" :current-page="listQuery.page" :page-sizes="[10,20,30, 50]" :page-size="listQuery.limit" :total="total" background layout="total, sizes, prev, pager, next, jumper" @size-change="handleSizeChange" @current-change="handleCurrentChange"/>
      </div>
    </el-card>
    <NewDoctor ref="newDoctor" @create-success="getList"/>
    <EditDoctor ref="editDoctor" @update-success="getList"/>
  </div>
</template>
<script>
import { fetchList, deleteItem } from '@/api/doctors'
import NewDoctor from './components/new_doctor'
import EditDoctor from './components/edit_doctor'
export default {
  components: { NewDoctor, EditDoctor },
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
      this.$refs.editDoctor.handleShow(val)
    },
    handleClickNew() {
      this.$refs.newDoctor.show()
    },
    handleClick(val) {
    },
    handleClickDelete(val) {
      this.$confirm('确认删除该医生账号?', '提示', {
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
      this.listQuery.name = ''
      this.listQuery.phone = ''
      this.listQuery.email = ''
      this.listQuery.startDate = ''
      this.listQuery.endDate = ''
    }
  }
}
</script>

