<template>
  <div>
    <el-tag type="danger">{{ month }}月眼健康评分 1-50分，用眼行为差，建议尽快随访或预约到店咨询</el-tag>
    <el-table
      :data="list"
      border
      style="width: 100%; margin-top: 10px;"
      @sort-change="handleColumnSort">
      <el-table-column
        :label="generateShow('common.name')"
        min-width="60">
        <template slot-scope="scope">
          <router-link :to="'/preview/child/'+scope.row.childId">
            <el-button type="text" size="small">{{ scope.row.childName }}</el-button>
          </router-link>
        </template>
      </el-table-column>
      <el-table-column
        :label="generateShow('common.age')"
        prop="childAge"
        min-width="60"/>
      <el-table-column
        :label="generateShow('common.phone')"
        prop="phone"
        min-width="80"/>
      <el-table-column
        :label="generateShow('common.healthIndex')"
        prop="healthIndex"
        min-width="80"/>
      <el-table-column
        :label="generateShow('common.wearTime')"
        prop="outTime"
        min-width="80"/>
      <el-table-column
        :label="generateShow('common.nearworkBurdenDay')"
        prop="nearworkBurdenDay"
        min-width="80"/>
      <el-table-column
        :label="generateShow('common.last_follow_at')"
        prop="lastFollowAt"
        min-width="80"/>
      <el-table-column
        :label="generateShow('common.last_operation')"
        prop="lastFollowType"
        min-width="80"/>
      <el-table-column
        :label="generateShow('common.follow_state')"
        prop="followState"
        min-width="80">
        <template slot-scope="scope">
          {{ scope.row.followState ? '已随访' : '待随访' }}
        </template>
      </el-table-column>
      <el-table-column
        :label="generateShow('common.operate')"
        min-width="120">
        <template slot-scope="scope">
          <el-button type="text" size="small" @click="handleClickChannel(scope.row)">{{ generateShow('common.contact_user') }}</el-button>
          <el-button v-if="!scope.row.followState" type="text" size="small" @click="handleClickPhone(scope.row)">电话联系</el-button>
          <el-button type="text" size="small" @click="handleClickLogs(scope.row)">{{ generateShow('common.follow_logs') }}</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="pagination-container">
      <el-pagination v-show="total>0" :current-page="listQuery.page" :page-sizes="[10,20,30, 50]" :page-size="listQuery.limit" :total="total" background layout="total, sizes, prev, pager, next, jumper" @size-change="handleSizeChange" @current-change="handleCurrentChange"/>
    </div>
    <NewFollow ref="new_follow" @createSuccess="getList"/>
    <FollowLogs ref="follow_logs"/>
    <Channel ref="channel"/>
  </div>
</template>

<script>
import { fetchList } from '@/api/followers'
import NewFollow from './new_follow'
import FollowLogs from './follow_logs'
import Channel from '../../components/channel'
export default {
  components: { NewFollow, FollowLogs, Channel },
  props: {
    date: {
      type: String,
      default: new Date()
    }
  },
  data() {
    return {
      list: null,
      total: null,
      todayCount: 0,
      listLoading: true,
      month: '',
      listQuery: {
        page: 1,
        limit: 20,
        importance: undefined,
        sortProp: '',
        sortOrder: '',
        type: 'one',
        month: this.date
      }
    }
  },
  watch: {
    'date': function(newVal, oldVal) {
      this.listQuery.month = newVal
      this.getList()
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
    handleClickLogs(val) {
      this.$refs.follow_logs.handleShow(val)
    },
    handleClickPhone(val) {
      this.$refs.new_follow.handleShow(val)
    },
    getList() {
      fetchList(this.listQuery).then(response => {
        this.list = response.data.items
        this.total = response.data.total
        this.month = response.data.month
      })
    },
    handleColumnSort: function() {
    },
    handleCurrentChange(val) {
      this.listQuery.page = val
      this.getList()
    },
    handleSizeChange(val) {
      this.listQuery.limit = val
      this.getList()
    }
  }
}
</script>
