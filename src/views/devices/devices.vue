<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>{{ generateShow('route.devices') }}</span>
      </div>

      <el-row>
        {{ generateShow('common.mac_address') }}:
        <el-input v-model="listQuery.macAddress" :placeholder="generateShow('common.mac_address')" style="width: 180px;" class="filter-item" clearable/>
        {{ generateShow('common.child_name') }}:
        <el-input v-model="listQuery.childName" :placeholder="generateShow('common.child_name')" style="width: 120px;" class="filter-item" clearable/>
      </el-row>
      <el-row style="margin-top: 10px;">
        {{ generateShow('common.device_version') }}：
        <el-select v-model="listQuery.deviceType" :placeholder="$t('device.deviceType')" clearable class="filter-item" style="width: 120px">
          <el-option v-for="item in deviceTypeOptions" :key="item.key" :label="item.value" :value="item.key"/>
        </el-select>
        {{ generateShow('common.bind_state') }}：
        <el-select v-model="listQuery.state" style="width: 120px" class="filter-item" @change="handleFilter">
          <el-option v-for="item in stateOptions" :key="item.key" :label="item.value" :value="item.key"/>
        </el-select>
        <el-button class="filter-item" type="primary" icon="el-icon-search" @click="handleFilter">{{ generateShow('common.search') }}</el-button>
        <el-button class="filter-item" type="primary" @click="handleFilterClear">{{ generateShow('common.clear') }}</el-button>
      </el-row>

      <el-table
        :data="list"
        border
        style="width: 100%; margin-top: 10px;"
        @sort-change="handleColumnSort">
        <el-table-column
          :label="generateShow('common.mac_address')"
          prop="macAddress"
          min-width="160"/>
        <el-table-column
          :label="generateShow('common.device_version')"
          prop="deviceType"
          min-width="60"/>
        <el-table-column
          :label="generateShow('common.bind_state')"
          min-width="90">
          <template slot-scope="scope">
            <el-tag :type="scope.row.state | stateFilter">{{ scope.row.stateName }}</el-tag>
          </template>
        </el-table-column>
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
          :label="generateShow('common.bind_at')"
          prop="deviceBindAt"
          min-width="120"/>
        <el-table-column
          :label="generateShow('common.created_at')"
          prop="createdAt"
          min-width="120"/>
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
import { fetchList, unbindDevice } from '@/api/devices'
const deviceTypeOptions = [
  { key: '', value: '全部' },
  { key: 'v1', value: '一代' },
  { key: 'v2', value: '二代' },
  { key: 'v3', value: '三代' }
]
const stateOptions = [
  { key: '', value: '全部' },
  { key: 'bind', value: '已绑定' },
  { key: 'unbind', value: '未绑定' }
]
export default {
  filters: {
    stateFilter(status) {
      const statusMap = {
        bind: 'success',
        unbind: 'info'
      }
      return statusMap[status]
    }
  },
  data() {
    return {
      deviceTypeOptions,
      stateOptions,
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
      this.$confirm('此操作将解绑镜腿, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        unbindDevice({ id: val.id }).then(response => {
          this.$message({
            type: 'success',
            message: '解绑成功!'
          })
          this.getList()
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消'
        })
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

