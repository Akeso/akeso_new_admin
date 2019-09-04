<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>{{ generateShow('common.intelligent_children') }}</span>
      </div>

      <el-row>
        {{ generateShow('common.name') }}:
        <el-input v-model="listQuery.name" :placeholder="generateShow('common.name')" label="姓名" style="width: 100px;" class="filter-item" clearable/>
        {{ generateShow('common.phone') }}:
        <el-input v-model="listQuery.phone" :placeholder="generateShow('common.phone')" label="联系电话" style="width: 180px;" class="filter-item" clearable/>
        {{ generateShow('common.mac_address') }}:
        <el-input v-model="listQuery.macAddress" :placeholder="generateShow('common.mac_address')" label="Mac地址" style="width: 180px;" class="filter-item" clearable/>
      </el-row>
      <el-row style="margin-top: 10px;">
        {{ generateShow('common.near_sync_date') }}:
        <el-date-picker v-model="listQuery.startDate" :placeholder="generateShow('common.start_date')" value-format="yyyy-MM-dd" type="date" style="width: 150px;"/> -
        <el-date-picker v-model="listQuery.endDate" :placeholder="generateShow('common.end_date')" value-format="yyyy-MM-dd" type="date" style="width: 150px;"/>
        <el-button class="filter-item" type="primary" icon="el-icon-search" @click="handleFilter">{{ generateShow('common.search') }}</el-button>
        <el-button class="filter-item" type="primary" @click="handleFilterClear">{{ generateShow('common.clear') }}</el-button>
      </el-row>

      <el-table
        :data="list"
        border
        style="width: 100%; margin-top: 10px;"
        @sort-change="handleColumnSort">
        <el-table-column
          :label="generateShow('common.name')"
          min-width="60">
          <template slot-scope="scope">
            <router-link :to="'/preview/child/'+scope.row.id">
              <el-button type="text" size="small">{{ scope.row.name }}</el-button>
            </router-link>
          </template>
        </el-table-column>
        <el-table-column
          :label="generateShow('common.age')"
          prop="age"
          min-width="50"/>
        <el-table-column
          :label="generateShow('common.gender')"
          prop="gender"
          sortable
          min-width="60">
          <template slot-scope="scope">
            <el-button type="text" size="small">{{ scope.row.gender | genderFilter }}</el-button>
          </template>
        </el-table-column>
        <el-table-column
          :label="generateShow('common.location')"
          prop="locationString"
          min-width="120"/>
        <el-table-column
          :label="generateShow('common.phone')"
          prop="phone"
          min-width="100"/>
        <el-table-column
          :label="generateShow('common.bind_doctor')"
          prop="doctor"
          min-width="80"/>
        <el-table-column
          :label="generateShow('common.device_address')"
          prop="device"
          min-width="120"/>
        <el-table-column
          :label="generateShow('common.bind_date')"
          prop="deviceBindAt"
          min-width="120"/>
        <el-table-column
          :label="generateShow('common.near_sync_date')"
          prop="lastUploadAt"
          min-width="120"/>
        <el-table-column
          :label="generateShow('common.operate')"
          min-width="80" >
          <template slot-scope="scope">
            <el-button type="text" size="small" @click="handleClickChannel(scope.row)">{{ generateShow('common.contact_user') }}</el-button>
          </template>
        </el-table-column>
      </el-table>

      <div class="pagination-container">
        <el-pagination v-show="total>0" :current-page="listQuery.page" :page-sizes="[10,20,30, 50]" :page-size="listQuery.limit" :total="total" background layout="total, sizes, prev, pager, next, jumper" @size-change="handleSizeChange" @current-change="handleCurrentChange"/>
      </div>
    </el-card>
    <Channel ref="channel"/>
  </div>
</template>
<script>
import { fetchIntelligentChildren } from '@/api/children'
import Channel from '../components/channel'
export default {
  components: { Channel },
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
      list: null,
      total: null,
      listLoading: true,
      listQuery: {
        page: 1,
        limit: 20,
        name: '',
        phone: '',
        macAddress: '',
        startDate: '',
        endDate: ''
      }
    }
  },
  created() {
    this.getList()
  },
  methods: {
    handleClickChannel(val) {
      if (val) {
        this.$refs.channel.handleShow(val.id)
      }
    },
    getList() {
      fetchIntelligentChildren(this.listQuery).then(response => {
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
      this.listQuery.name = ''
      this.listQuery.phone = ''
      this.listQuery.macAddress = ''
      this.listQuery.startDate = ''
      this.listQuery.endDate = ''
    }
  }
}
</script>
