<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>{{ listQuery.title }}</span>
      </div>

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
          <!--<el-table-column-->
          <!--:label="generateShow('common.operate')"-->
          <!--min-width="80" >-->
          <!--<template slot-scope="scope">-->
          <!--<el-button type="text" size="small" @click="handleClickChannel(scope.row)">{{ generateShow('common.contact_user') }}</el-button>-->
          <!--</template>-->
          <!--</el-table-column>-->
      </el-table>

      <div class="pagination-container">
        <el-pagination v-show="total>0" :current-page="listQuery.page" :page-sizes="[10,20,30, 50]" :page-size="listQuery.limit" :total="total" background layout="total, sizes, prev, pager, next, jumper" @size-change="handleSizeChange" @current-change="handleCurrentChange"/>
      </div>
    </el-card>
    <Channel ref="channel"/>
  </div>
</template>
<script>
import { fetchSelfItems } from '@/api/children'
import Channel from '../components/channel'
export default {
  components: { Channel },
  data() {
    return {
      list: null,
      total: null,
      listLoading: true,
      listQuery: {
        tag_id: undefined,
        title: undefined,
        type: undefined,
        page: 1,
        limit: 20
      }
    }
  },
  created() {
    this.listQuery.title = this.$route.query.title
    this.listQuery.type = this.$route.query.type
    this.listQuery.tag_id = this.$route.query.tag_id
    this.getList()
  },
  methods: {
    handleClickChannel(val) {
      if (val) {
        this.$refs.channel.handleShow(val.id)
      }
    },
    getList() {
      console.log('aaa => ', this.listQuery)
      fetchSelfItems(this.listQuery).then(response => {
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
