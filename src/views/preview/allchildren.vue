<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>{{ generateShow('common.all_children') }}</span>
      </div>

      <el-row>
        {{ generateShow('common.name') }}:
        <el-input v-model="listQuery.name" :label="generateShow('common.name')" :placeholder="generateShow('common.name')" style="width: 100px;" class="filter-item" clearable />
        {{ generateShow('common.parent_phone') }}:
        <el-input v-model="listQuery.parentPhone" :label="generateShow('common.parent_phone')" :placeholder="generateShow('common.parent_phone')" style="width: 150px;" class="filter-item" clearable />
        {{ generateShow('common.created_at') }}:
        <el-date-picker v-model="listQuery.startDate" :placeholder="generateShow('common.start_date')" type="date" style="width: 150px;" /> -
        <el-date-picker v-model="listQuery.endDate" :placeholder="generateShow('common.end_date')" type="date" style="width: 150px;"/>
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
          min-width="40"/>
        <el-table-column
          :label="generateShow('common.gender')"
          prop="gender"
          sortable
          min-width="40">
          <template slot-scope="scope">
            <el-button type="text" size="small">{{ scope.row.gender | genderFilter }}</el-button>
          </template>
        </el-table-column>
        <el-table-column
          :label="generateShow('common.location')"
          prop="location_string"
          min-width="120"/>
        <el-table-column
          :label="generateShow('common.phone')"
          prop="phone"
          min-width="100"/>
        <el-table-column
          :label="generateShow('common.created_at')"
          prop="created_at"
          sortable
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
import { fetchList } from '@/api/children'
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
        parent_phone: undefined,
        start_date: '',
        end_date: '',
        sort_prop: '',
        sort_order: ''
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
      console.log('val => ', val)
      this.listQuery.sort_prop = val.prop
      this.listQuery.sort_order = val.order
      this.getList()
    },
    handleFilter() {
      this.getList()
    },
    handleFilterClear() {
      this.listQuery.name = ''
      this.listQuery.parentPhone = ''
      this.listQuery.startDate = ''
      this.listQuery.endDate = ''
    }
  }
}
</script>
