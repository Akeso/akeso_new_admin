<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>产品管理</span>
      </div>

      <el-row style="margin-top: 10px;">
        <el-col>
          名称：
          <el-input v-model="listQuery.name" :placeholder="generateShow('common.name_field')" size="mini" label="名称" style="width: 200px;" class="filter-item" clearable/>
          <el-button class="filter-item" size="mini" type="primary" icon="el-icon-search" @click="handleFilter">搜索</el-button>
        </el-col>
      </el-row>

      <el-table :data="list" border style="width: 100%; margin-top: 10px;" highlight-current-row @current-change="handleCurrentSelect">
        <el-table-column label="名称" prop="name" min-width="90"/>
        <el-table-column label="类别" prop="kind" min-width="120"/>
        <el-table-column label="兑换积分" prop="akeso_coin" min-width="120"/>
        <el-table-column label="原价(元)" prop="origin_price" min-width="120"/>
        <el-table-column label="创建时间" prop="created_at" min-width="120"/>
      </el-table>

      <div class="pagination-container">
        <el-pagination v-show="total>0" :current-page="listQuery.page" :page-sizes="[10,20,30, 50]" :page-size="listQuery.limit" :total="total" background layout="total, sizes, prev, pager, next, jumper" @size-change="handleSizeChange" @current-change="handleCurrentChange"/>
      </div>
    </el-card>
  </div>
</template>
<script>
import { fetchList } from '@/api/coin_products'

export default {
  data() {
    return {
      currentItem: undefined,
      list: null,
      total: null,
      listLoading: true,
      listQuery: {
        page: 1,
        limit: 20,
        name: undefined
      }
    }
  },
  created() { this.getList() },
  methods: {
    handleCurrentSelect(item) { this.currentItem = item },
    getList() {
      if (this.$store.getters.baseType === 'agent') {
        Object.assign(this.listQuery, { agent_id: this.$store.getters.id })
      }
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
    handleFilter() {
      this.getList()
    },
    handleFilterClear() {
      this.listQuery.name = ''
      this.listQuery.phone = ''
      this.listQuery.email = ''
    }
  }
}
</script>

