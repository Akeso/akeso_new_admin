<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>健康咨询</span>
      </div>

      <el-table
        :data="list"
        border
        style="width: 100%; margin-top: 10px;"
        @sort-change="handleColumnSort">
        <el-table-column
          prop="content"
          label="最后咨询内容"
          min-width="180"/>
        <el-table-column
          label="咨询儿童"
          min-width="90">
          <template slot-scope="scope">
            <router-link :to="'/preview/child/'+scope.row.childId">
              <el-button type="text" size="small">{{ scope.row.childName }}</el-button>
            </router-link>
          </template>
        </el-table-column>
        <el-table-column
          prop="userCount"
          label="未读消息"
          min-width="60"/>
        <el-table-column
          prop="lastDate"
          label="最后咨询时间"
          min-width="100"/>
        <el-table-column
          prop="merchantName"
          label="咨询医生"
          min-width="100"/>
        <el-table-column
          label="操作"
          min-width="120" >
          <template slot-scope="scope">
            <el-button type="text" size="small" @click="handleClickChannel(scope.row)">联系用户</el-button>
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
import { fetchList } from '@/api/channels'
import Channel from '../components/channel'
export default {
  components: { Channel },
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
    handleClickChannel(val) {
      if (val) {
        this.$refs.channel.handleShow(val.childId)
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

