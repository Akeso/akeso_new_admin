<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>{{ generateShow('route.admin_appoints') }}</span>
      </div>

      <el-row style="margin-bottom: 10px;">
        {{ generateShow('common.appointment_code') }}:
        <el-input v-model="listQuery.code" :placeholder="generateShow('common.appointment_code')" label="预约码" style="width: 100px;" class="filter-item" clearable/>
        {{ generateShow('common.name') }}:
        <el-input v-model="listQuery.childName" :placeholder="generateShow('common.name')" label="姓名" style="width: 100px;" class="filter-item" clearable/>
        {{ generateShow('common.phone') }}:
        <el-input v-model="listQuery.phone" :placeholder="generateShow('common.phone')" label="手机号" style="width: 150px;" class="filter-item" clearable/>
        <el-button class="filter-item" type="primary" icon="el-icon-search" @click="handleFilter">{{ generateShow('common.search') }}</el-button>
        <el-button class="filter-item" type="primary" @click="handleFilterClear">{{ generateShow('common.clear') }}</el-button>
      </el-row>

      <el-table
        :data="list"
        border
        style="width: 100%"
        @sort-change="handleColumnSort">
        <el-table-column
          :label="generateShow('common.appointment_date')"
          prop="date"
          min-width="100"/>
        <el-table-column
          :label="generateShow('common.appointment_code')"
          prop="code"
          min-width="80"/>
        <el-table-column
          :label="generateShow('common.name')"
          prop="childName"
          min-width="80"/>
        <el-table-column
          :label="generateShow('common.gender')"
          prop="genderCn"
          min-width="60"/>
        <el-table-column
          :label="generateShow('common.age')"
          prop="age"
          min-width="60"/>
        <el-table-column
          :label="generateShow('common.appointment_object')"
          prop="merchantName"
          min-width="110"/>
        <el-table-column
          :label="generateShow('common.appointment_state')"
          prop="stateName"
          min-width="80"/>
        <el-table-column
          :label="generateShow('common.arrive_date')"
          prop="reachTime"
          min-width="110"/>
          <!--<el-table-column-->
          <!--label="操作"-->
          <!--min-width="120" >-->
          <!--<template slot-scope="scope">-->
          <!--<el-button type="text" size="small" @click="handleClickShow(scope.row)">查看</el-button>-->
          <!--<el-button v-if="scope.row.state === 'pending'" type="text" size="small" @click="handleClickConfirm(scope.row)">确认预约</el-button>-->
          <!--<el-button v-if="scope.row.state === 'pending'" type="text" size="small" @click="handleClickCancel(scope.row)">取消</el-button>-->
          <!--</template>-->
          <!--</el-table-column>-->
      </el-table>

      <div class="pagination-container">
        <el-pagination v-show="total>0" :current-page="listQuery.page" :page-sizes="[10,20,30, 50]" :page-size="listQuery.limit" :total="total" background layout="total, sizes, prev, pager, next, jumper" @size-change="handleSizeChange" @current-change="handleCurrentChange"/>
      </div>
    </el-card>
    <AppointShow ref="show"/>
    <AppointConfirm ref="confirm" @confirmSuccess="getList"/>
    <AppointCancel ref="cancel" @cancelSuccess="getList"/>
  </div>
</template>
<script>
import { fetchList } from '@/api/appoints'
import AppointShow from './components/appoint_show'
import AppointConfirm from './components/appoint_confirm'
import AppointCancel from './components/appoint_cancel'
export default {
  components: {
    AppointShow, AppointConfirm, AppointCancel
  },
  data() {
    return {
      list: null,
      total: null,
      todayCount: 0,
      listLoading: true,
      listQuery: {
        page: 1,
        limit: 20,
        importance: undefined,
        code: undefined,
        childName: undefined,
        phone: undefined
      }
    }
  },
  created() {
    this.getList()
  },
  methods: {
    handleClickCancel(val) {
      this.$refs.cancel.show(val)
    },
    handleClickShow(val) {
      this.$refs.show.show(val)
    },
    handleClickConfirm(val) {
      this.$refs.confirm.show(val)
    },
    getList() {
      fetchList(this.listQuery).then(response => {
        this.list = response.data.items
        this.total = response.data.total
        this.todayCount = response.data.todayCount
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
      this.listQuery.code = ''
      this.listQuery.childName = ''
      this.phone = ''
      this.getList()
    }
  }
}
</script>

