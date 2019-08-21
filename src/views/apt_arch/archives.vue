<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>{{ generateShow('route.archives') }}</span>
      </div>

      <div class="filter-container">
        <el-button class="filter-item" type="success" icon="el-icon-plus" @click="handleClickNew">{{ generateShow('common.new_child') }}</el-button>
        <!--<el-button class="filter-item" type="primary" icon="el-icon-plus" @click="handleFilterClear">-->
        <!--<i class="el-icon-plus"/>-->
        <!--批量上传档案-->
        <!--</el-button>-->
      </div>

      <el-row>
        {{ generateShow('common.name') }}:
        <el-input v-model="listQuery.name" label="姓名" placeholder="姓名" style="width: 100px;" class="filter-item" clearable/>
        <el-button class="filter-item" type="primary" icon="el-icon-search" @click="handleFilter">{{ generateShow('common.search') }}</el-button>
        <el-button class="filter-item" type="primary" @click="handleFilterClear">{{ generateShow('common.clear') }}</el-button>
      </el-row>

      <el-table
        v-loading="listLoading"
        :data="list"
        border
        style="width: 100%;margin-top: 10px;"
        @sort-change="handleColumnSort">
        <el-table-column
          :label="generateShow('common.name')"
          min-width="80">
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
          min-width="50"/>
        <!--<el-table-column-->
        <!--prop="schoolName"-->
        <!--label="学校名称"-->
        <!--min-width="90"/>-->
        <el-table-column
          :label="generateShow('common.location')"
          prop="locationString"
          min-width="120"/>
        <el-table-column
          :label="generateShow('common.phone')"
          prop="phone"
          min-width="100"/>
        <el-table-column
          :label="generateShow('common.created_at')"
          prop="createdAt"
          sortable="custom"
          min-width="120"/>
        <el-table-column
          label="操作"
          min-width="80" >
          <template slot-scope="scope">
            <router-link :to="'/preview/child/'+scope.row.id+'?tabName=third'">
              <el-button type="text" size="small">{{ generateShow('common.create_eye_examination') }}</el-button>
            </router-link>
          </template>
        </el-table-column>
      </el-table>

      <div class="pagination-container">
        <el-pagination v-show="total>0" :current-page="listQuery.page" :page-sizes="[10,20,30, 50]" :page-size="listQuery.limit" :total="total" background layout="total, sizes, prev, pager, next, jumper" @size-change="handleSizeChange" @current-change="handleCurrentChange"/>
      </div>
    </el-card>
    <NewArchive ref="newArchive" />
  </div>
</template>
<script>
import { fetchList } from '@/api/archives'
import NewArchive from './components/new_archive'
export default {
  components: {
    NewArchive
  },
  data() {
    return {
      list: null,
      total: null,
      listLoading: true,
      listQuery: {
        page: 1,
        limit: 20,
        importance: undefined,
        name: undefined
      }
    }
  },
  created() {
    this.getList()
  },
  methods: {
    handleClickNew() {
      this.$refs.newArchive.handleShow()
    },
    getList() {
      fetchList(this.listQuery).then(response => {
        this.list = response.data.items
        this.total = response.data.total
        // Just to simulate the time of the request
        setTimeout(() => {
          this.listLoading = false
        }, 1 * 1000)
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
      this.getList()
    }
  }
}
</script>

