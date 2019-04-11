<template>
  <div>
    <el-tag type="danger">上月眼健康评分 1-50分</el-tag>
    <el-table
      :data="list"
      border
      style="width: 100%; margin-top: 10px;"
      @sort-change="handleColumnSort">
      <el-table-column
        label="姓名"
        min-width="60">
        <template slot-scope="scope">
          <router-link :to="'/preview/child/'+scope.row.childId">
            <el-button type="text" size="small">{{ scope.row.childName }}</el-button>
          </router-link>
        </template>
      </el-table-column>
      <el-table-column
        prop="childAge"
        label="年龄"
        min-width="60"/>
      <el-table-column
        prop="phone"
        label="联系方式"
        min-width="80"/>
      <el-table-column
        prop="healthIndex"
        label="上月眼健康评分"
        min-width="80"/>
      <el-table-column
        prop="lastFollowAt"
        label="上次随访时间"
        min-width="80"/>
      <el-table-column
        prop="lastFollowType"
        label="上次操作方式"
        min-width="80"/>
      <el-table-column
        prop="followState"
        label="随访状态"
        min-width="80">
        <template slot-scope="scope">
          {{ scope.row.followState ? '已随访' : '待随访' }}
        </template>
      </el-table-column>
      <el-table-column
        label="操作"
        min-width="120">
        <template slot-scope="scope">
          <!--<el-button type="text" size="small">APP联系</el-button>-->
          <el-button v-if="!scope.row.followState" type="text" size="small" @click="handleClickPhone(scope.row)">电话联系</el-button>
          <el-button type="text" size="small" @click="handleClickLogs(scope.row)">随访记录</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="pagination-container">
      <el-pagination v-show="total>0" :current-page="listQuery.page" :page-sizes="[10,20,30, 50]" :page-size="listQuery.limit" :total="total" background layout="total, sizes, prev, pager, next, jumper" @size-change="handleSizeChange" @current-change="handleCurrentChange"/>
    </div>
    <NewFollow ref="new_follow" @createSuccess="getList"/>
    <FollowLogs ref="follow_logs"/>
  </div>
</template>

<script>
import { fetchList } from '@/api/followers'
import NewFollow from './new_follow'
import FollowLogs from './follow_logs'
export default {
  components: { NewFollow, FollowLogs },
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
        sortProp: '',
        sortOrder: '',
        type: 'one'
      }
    }
  },
  created() {
    this.getList()
  },
  methods: {
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
