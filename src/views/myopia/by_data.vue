<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>{{ generateShow('route.by_data') }}</span>
      </div>
      <div style="margin-bottom: 10px;">
        <span class="demonstration">{{ generateShow('common.select_date') }}：</span>
        <el-date-picker
          v-model="listQuery.month"
          type="month"
          placeholder="选择月"
          value-format="yyyy-MM-dd"
          @change="changeDate"/>
      </div>
      <!--<el-tag type="danger">本月眼健康评分 1-50分，用眼行为差，建议尽快随访或预约到店咨询</el-tag>-->
      <el-radio-group v-model="listQuery.follow_radio" @change="radioChanged">
        <el-radio-button label="following">待随访</el-radio-button>
        <el-radio-button label="followed">已随访</el-radio-button>
      </el-radio-group>
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
          min-width="60"/>
        <el-table-column
          :label="generateShow('common.wearTime')"
          prop="outTime"
          min-width="60"/>
        <el-table-column
          :label="generateShow('common.nearworkBurdenDay')"
          prop="nearworkBurdenDay"
          min-width="60"/>
        <el-table-column
          :label="generateShow('common.follow_state')"
          prop="followState"
          min-width="100">
          <template slot-scope="scope">
            {{ scope.row.followState | followStateFilter }}
          </template>
        </el-table-column>
        <el-table-column
          :label="generateShow('common.operate')"
          min-width="120">
          <template v-if="scope.row.followState === 'following'" slot-scope="scope">
            <el-button type="text" size="small" @click="handleClickContact(scope.row, 'confirmed')">已联系并确认预约</el-button>
            <br>
            <el-button type="text" size="small" @click="handleClickContact(scope.row, 'unconfirmed')">已联系尚无法确认时间</el-button>
            <br>
            <el-button type="text" size="small" @click="handleClickContact(scope.row, 'uncontact')">无法联系</el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="pagination-container">
        <el-pagination v-show="total>0" :current-page="listQuery.page" :page-sizes="[10,20,30, 50]" :page-size="listQuery.limit" :total="total" background layout="total, sizes, prev, pager, next, jumper" @size-change="handleSizeChange" @current-change="handleCurrentChange"/>
      </div>
      <!--<NewFollow ref="new_follow" @createSuccess="getList"/>-->
      <!--<FollowLogs ref="follow_logs"/>-->
      <!--<Channel ref="channel"/>-->
    </el-card>
  </div>
</template>

<script>
import { fetchList, updateState } from '@/api/followers'
export default {
  filters: {
    followStateFilter(status) {
      const statusMap = {
        following: '待随访',
        confirmed: '已联系并确认预约',
        unconfirmed: '已联系无法确认预约时间',
        uncontact: '无法联系'
      }
      return statusMap[status]
    }
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
        sortProp: '',
        sortOrder: '',
        month: new Date(),
        follow_radio: 'following'
      }
    }
  },
  computed: {
    showFirst: function() {
      return this.tabName === 'first'
    }
  },
  created() {
    this.getList()
  },
  methods: {
    radioChanged(val) {
      this.getList()
    },
    handleClickContact(item, val) {
      this.$confirm('确认执行此操作?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        updateState({ id: item.id, state: val }).then(res => {
          this.getList()
          this.$message({
            type: 'success',
            message: '操作成功!'
          })
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消操作'
        })
      })
    },
    changeDate(val) {
      this.getList()
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
