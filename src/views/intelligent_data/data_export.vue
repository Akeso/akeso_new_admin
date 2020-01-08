<template>
  <div>
    <el-card :body-style="{ padding: '0px 10px 10px 20px' }">
      <el-row style="margin: 10px 0px 10px 0px;">
        <div style="margin-bottom: 5px; color: gray; font-size: 14px;">查询某个用户，在某个时间周期内的所有数据。</div>
        <el-col>
          {{ generateShow('common.phone') }}:
          <el-input v-model="listQuery.phone" :label="generateShow('common.phone')" :placeholder="generateShow('common.phone')" style="width: 200px;" class="filter-item" clearable/>
          {{ generateShow('common.period') }}
          <el-date-picker
            :clearable="false"
            :placeholder="generateShow('common.start_date')"
            v-model="listQuery.start_date"
            type="date"
            style="width: 150px;"
            format="yyyy-MM-dd"
            value-format="yyyy-MM-dd"/>
          至
          <el-date-picker
            :clearable="false"
            :placeholder="generateShow('common.end_date')"
            v-model="listQuery.end_date"
            type="date"
            style="width: 150px;"
            format="yyyy-MM-dd"
            value-format="yyyy-MM-dd"/>
          <el-button class="filter-item" type="primary" icon="el-icon-search" @click="handleFilter(1)">{{ generateShow('common.query') }}</el-button>
          <el-button class="filter-item" type="primary" icon="el-icon-download">
            <a :href="downloadOneUrl + '?phone=' + listQuery.phone + '&start_date=' + listQuery.start_date + '&end_date=' + listQuery.end_date">导出Excel</a>
          </el-button>
        </el-col>
      </el-row>
      <el-row style="margin: 10px 0px 10px 0px;">
        <div style="margin-bottom: 5px; color: gray; font-size: 14px;">查询某一天所有的用户数据。</div>
        <el-col>
          {{ generateShow('common.select_date') }}:
          <el-date-picker
            v-model="listQuery.date"
            type="date"
            placeholder="选择日期"
            value-format="yyyy-MM-dd"/>
          <el-button class="filter-item" type="primary" icon="el-icon-search" @click="handleFilter(2)">{{ generateShow('common.query') }}</el-button>
          <el-button class="filter-item" type="primary" icon="el-icon-download">
            <a :href="downloadMoreUrl + '?date=' + listQuery.date + '&authenticationToken=' + $store.getters.authenticationToken">导出一天Excel</a>
          </el-button>
          <el-button class="filter-item" type="primary" icon="el-icon-download">
            <a :href="downloadMoreHalfUrl + '?date=' + listQuery.date + '&authenticationToken=' + $store.getters.authenticationToken">导出节点Excel</a>
          </el-button>
        </el-col>
      </el-row>
      <el-table
        :data="list"
        border
        style="width: 100%">
        <el-table-column
          label="姓名"
          min-width="60">
          <template slot-scope="scope">
            <router-link :to="'/preview/child/'+scope.row.child_id">
              <el-button type="text" size="small">{{ scope.row.child_name }}</el-button>
            </router-link>
          </template>
        </el-table-column>
        <el-table-column
          :label="generateShow('common.healthIndex')"
          prop="health_index"
          min-width="80"/>
        <el-table-column
          :label="generateShow('common.wearTime')"
          prop="wear_time"
          min-width="80"/>
        <el-table-column
          :label="generateShow('common.outTime')"
          prop="out_time"
          min-width="80"/>
        <el-table-column
          :label="generateShow('common.luxDay')"
          prop="lux_day"
          min-width="80"/>
        <el-table-column
          :label="generateShow('common.nearworkDay')"
          prop="nearwork_day"
          min-width="80"/>
        <el-table-column
          :label="generateShow('common.nearworkBurdenDay')"
          prop="nearwork_burden_day"
          min-width="80"/>
        <el-table-column
          :label="generateShow('common.badPostureTimes')"
          prop="bad_posture_times"
          min-width="80"/>
        <el-table-column
          :label="generateShow('common.stepCount')"
          prop="step_count"
          min-width="60"/>
        <el-table-column
          label="同步时间"
          prop="device_time"
          min-width="100"/>
      </el-table>
      <div class="pagination-container">
        <el-pagination v-show="total>0" :current-page="listQuery.page" :page-sizes="[10,20,30, 50]" :page-size="listQuery.limit" :total="total" background layout="total, sizes, prev, pager, next, jumper" @size-change="handleSizeChange" @current-change="handleCurrentChange"/>
      </div>
    </el-card>
  </div>
</template>
<script>
import { fetchReports, fetchPeriod } from '@/api/daily_eye_reports'
export default {
  data() {
    return {
      downloadOneUrl: '/api/a1/excels/daily_one',
      downloadMoreUrl: '/api/a1/excels/daily_more',
      downloadMoreHalfUrl: '/api/a1/excels/daily_more_half',
      isPeriod: 1,
      list: null,
      total: null,
      todayCount: 0,
      listLoading: true,
      listQuery: {
        page: 1,
        limit: 20,
        phone: undefined,
        start_date: undefined,
        end_date: undefined,
        date: undefined
      }
    }
  },
  created() {
  },
  methods: {
    handleFilter(val) {
      this.isPeriod = val
      if (this.isPeriod === 1) {
        fetchReports(this.listQuery).then(res => {
          this.list = res.data.items
          this.total = res.data.total
        })
      } else {
        fetchPeriod(this.listQuery).then(res => {
          this.list = res.data.items
          this.total = res.data.total
        })
      }
    },
    hasOptions(val) {
      return this.checkedOptions.indexOf(val) > -1
    },
    handleCurrentChange(val) {
      this.listQuery.page = val
      this.handleFilter(this.isPeriod)
    },
    handleSizeChange(val) {
      this.listQuery.limit = val
      this.handleFilter(this.isPeriod)
    }
  }
}
</script>

<style scoped>
</style>
