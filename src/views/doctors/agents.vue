<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>代理商管理</span>
      </div>

      <div class="filter-container">
        <el-button class="filter-item" type="success" icon="el-icon-plus" @click="handleClickNew">新增</el-button>
      </div>

      <el-row>
        <el-col>
          {{ generateShow('common.name_field') }}:
          <el-input v-model="listQuery.name" :placeholder="generateShow('common.name_field')" label="名称" style="width: 120px;" class="filter-item" clearable/>
          {{ generateShow('common.phone') }}:
          <el-input v-model="listQuery.phone" :placeholder="generateShow('common.phone')" label="联系电话" style="width: 180px;" class="filter-item" clearable/>
          {{ generateShow('common.account_login') }}:
          <el-input v-model="listQuery.email" :placeholder="generateShow('common.account_login')" style="width: 180px;" class="filter-item" clearable/>
          <el-button class="filter-item" type="primary" icon="el-icon-search" @click="handleFilter">{{ generateShow('common.search') }}</el-button>
          <el-button class="filter-item" type="primary" @click="handleFilterClear">{{ generateShow('common.clear') }}</el-button>
        </el-col>
      </el-row>

      <el-table
        :data="list"
        border
        style="width: 100%; margin-top: 10px;"
        @sort-change="handleColumnSort">
        <el-table-column
          :label="generateShow('common.name_field')"
          prop="name"
          min-width="90"/>
        <el-table-column
          :label="generateShow('common.address')"
          prop="address"
          min-width="120"/>
        <el-table-column
          :label="generateShow('common.phone')"
          prop="phone"
          min-width="100"/>
        <el-table-column
          :label="generateShow('common.account_login')"
          prop="email"
          min-width="160"/>
        <el-table-column
          :label="generateShow('common.created_at')"
          prop="createdAt"
          min-width="120"/>
        <el-table-column
          label="操作"
          min-width="120" >
          <template slot-scope="scope">
            <el-button type="text" size="small" @click="handleClickEdit(scope.row)">{{ generateShow('common.modify') }}</el-button>
            <el-button type="text" size="small" @click="handleClickDelete(scope.row)">{{ generateShow('common.delete') }}</el-button>
          </template>
        </el-table-column>
      </el-table>

      <div class="pagination-container">
        <el-pagination v-show="total>0" :current-page="listQuery.page" :page-sizes="[10,20,30, 50]" :page-size="listQuery.limit" :total="total" background layout="total, sizes, prev, pager, next, jumper" @size-change="handleSizeChange" @current-change="handleCurrentChange"/>
      </div>
    </el-card>
    <NewAgent ref="newAgent" @create-success="getList"/>
    <EditAgent ref="editAgent" @update-success="getList"/>
  </div>
</template>
<script>
import { fetchList, deleteItem, authorizeDoctor } from '@/api/agents'
import NewAgent from './components/new_agent'
import EditAgent from './components/edit_agent'

export default {
  components: { NewAgent, EditAgent },
  filters: {
    stateFileter(state) {
      const stateMap = {
        pending: '审核中',
        pass: '审核通过',
        reject: '审核拒绝'
      }
      return stateMap[state]
    }
  },
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
      }
    }
  },
  created() {
    this.getList()
  },
  methods: {
    handleClickAuthorize(val) {
      this.$confirm('确定要审核通过该账户吗?', '提示', {
        confirmButtonText: '是',
        cancelButtonText: '否',
        type: 'warning'
      }).then(() => {
        authorizeDoctor({ id: val.id }).then(response => {
          this.getList()
          this.$message({
            type: 'success',
            message: '审核成功!'
          })
        })
      }).catch(() => {
      })
    },
    handleClickEdit(val) {
      this.$refs.editAgent.handleShow(val)
    },
    handleClickNew() {
      this.$refs.newAgent.show()
    },
    handleClick(val) {
    },
    handleClickDelete(val) {
      this.$confirm('确认删除该账号?', '提示', {
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
