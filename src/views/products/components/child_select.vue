<template>
  <el-dialog :visible.sync="dialogFormVisible" :close-on-click-modal="false" title="选择用户" width="70%" top="30px">
    <el-row>
      <el-col>
        <el-input v-model="listQuery.name" placeholder="输入姓名" label="名称" style="width: 200px;" class="filter-item" clearable/>
        <el-input v-model="listQuery.phone" placeholder="输入手机号" label="手机号" style="width: 180px;" class="filter-item" clearable/>
        <el-button class="filter-item" type="primary" icon="el-icon-search" @click="handleClickSearch">{{ generateShow('common.search') }}</el-button>
      </el-col>
    </el-row>
    <el-table
      :data="list"
      border
      style="width: 100%; margin-top: 10px;">
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
        :label="generateShow('common.phone')"
        prop="phone"
        min-width="100"/>
      <el-table-column
        :label="generateShow('common.operate')"
        min-width="80" >
        <template slot-scope="scope">
          <el-button size="small" @click="handleClickSelect(scope.row)">选择</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="pagination-container">
      <el-pagination v-show="total>0" :current-page="listQuery.page" :page-sizes="[10,20,30, 50]" :page-size="listQuery.limit" :total="total" background layout="total, sizes, prev, pager, next, jumper" @size-change="handleSizeChange" @current-change="handleCurrentChange"/>
    </div>
  </el-dialog>
</template>

<script>
import { fetchList } from '@/api/children'
export default {
  data() {
    return {
      dialogFormVisible: false,
      list: null,
      total: null,
      listQuery: {
        page: 1,
        limit: 10,
        name: undefined,
        phone: undefined
      }
    }
  },
  computed: {
  },
  watch: {
  },
  created() {
  },
  methods: {
    getList() {
      fetchList(this.listQuery).then(res => {
        this.list = res.data.items
        this.total = res.data.total
      })
    },
    handleClickSelect(val) {
      console.log('val => ', val)
      this.$router.push({ path: '/billings/billing/' + val.id })
    },
    handleClickSearch(row) {
      this.getList()
    },
    handleCurrentChange(val) {
      this.listQuery.page = val
      this.getList()
    },
    handleSizeChange(val) {
      this.listQuery.limit = val
      this.getList()
    },
    show() {
      this.getList()
      this.dialogFormVisible = true
    }
  }
}
</script>
