<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>{{ generateShow('route.removements') }}</span>
      </div>

      <el-row>
        {{ generateShow('common.mac_address') }}:
        <el-input v-model="listQuery.macAddress" :placeholder="generateShow('common.mac_address')" style="width: 180px;" class="filter-item" clearable/>
        {{ generateShow('common.child_name') }}:
        <el-input v-model="listQuery.childName" :placeholder="generateShow('common.child_name')" style="width: 120px;" class="filter-item" clearable/>
      </el-row>
      <el-row style="margin-top: 10px;">
        <el-button class="filter-item" type="primary" icon="el-icon-search" @click="handleFilter">{{ generateShow('common.search') }}</el-button>
        <el-button class="filter-item" type="primary" @click="handleFilterClear">{{ generateShow('common.clear') }}</el-button>
      </el-row>

      <el-table
        :data="list"
        border
        style="width: 100%; margin-top: 10px;"
        @sort-change="handleColumnSort">
        <el-table-column
          :label="generateShow('common.child_name')"
          min-width="120">
          <template slot-scope="scope">
            <router-link :to="'/preview/child/'+scope.row.childId">
              <el-button type="text" size="small">{{ scope.row.childName }}</el-button>
            </router-link>
          </template>
        </el-table-column>
        <el-table-column
          :label="generateShow('common.apply_time')"
          prop="createdAt"
          min-width="160"/>
        <el-table-column
          :label="generateShow('common.bind_doctor')"
          prop="doctorName"
          min-width="140"/>
        <el-table-column
          :label="generateShow('common.state')"
          min-width="90">
          <template slot-scope="scope">
            <el-tag :type="scope.row.state | stateFilter">{{ scope.row.state | stateFilterVal }}</el-tag>
          </template>
        </el-table-column>
        <el-table-column
          :label="generateShow('common.operate')"
          min-width="60" >
          <template slot-scope="scope">
            <el-button type="text" size="small" @click="handleClick(scope.row)">解绑</el-button>
          </template>
        </el-table-column>
      </el-table>

      <div class="pagination-container">
        <el-pagination v-show="total>0" :current-page="listQuery.page" :page-sizes="[10,20,30, 50]" :page-size="listQuery.limit" :total="total" background layout="total, sizes, prev, pager, next, jumper" @size-change="handleSizeChange" @current-change="handleCurrentChange"/>
      </div>
    </el-card>
  </div>
</template>
<script>
import { fetchList } from '@/api/removements'
import { unbind } from '@/api/removements'

export default {
  filters: {
    stateFilter(status) {
      const statusMap = {
        pending: 'success',
        done: 'info'
      }
      return statusMap[status]
    },
    stateFilterVal(status) {
      const statusMap = {
        pending: '申请中',
        done: '完成'
      }
      return statusMap[status]
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
        macAddress: undefined,
        state: undefined,
        deviceType: undefined,
        childName: undefined
      }
    }
  },
  created() {
    this.getList()
  },
  methods: {
    handleClick(val) {
      this.$confirm('确定要解绑该用户绑定的医生吗？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        unbind({ id: val.id }).then(res => {
          this.$message({
            message: '解绑成功',
            type: 'success'
          })
          this.getList()
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
      this.listQuery.page = 1
      this.getList()
    },
    handleFilterClear() {
      this.listQuery.page = 1
      this.listQuery.limit = 20
      this.listQuery.macAddress = ''
      this.listQuery.state = ''
      this.listQuery.deviceType = ''
      this.listQuery.childName = ''
    }
  }
}
</script>

