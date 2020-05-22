<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>兑换记录</span>
      </div>

      <el-row style="margin-top: 10px;">
        <el-col>
          名称：
          <el-input v-model="listQuery.name" :placeholder="generateShow('common.name_field')" size="mini" label="名称" style="width: 200px;" class="filter-item" clearable/>
          <el-button class="filter-item" size="mini" type="primary" icon="el-icon-search" @click="handleFilter">搜索</el-button>
          <el-button size="mini" @click="handleClickExchange">核销</el-button>
        </el-col>
      </el-row>

      <el-table :data="list" border style="width: 100%; margin-top: 10px;" highlight-current-row @current-change="handleCurrentSelect">
        <el-table-column label="手机号" prop="phone" min-width="90"/>
        <el-table-column label="商品" min-width="120">
          <template slot-scope="scope" row>
            <span>{{ scope.row.product_name }}</span>
          </template>
        </el-table-column>
        <el-table-column label="兑换积分" prop="take_coins" min-width="120"/>
        <el-table-column label="兑换时间" prop="created_at" min-width="120"/>
        <el-table-column label="核销状态" min-width="120">
          <template slot-scope="scope" row>
            <span>{{ scope.row.state === 0 ? '未核销' : '已核销' }}</span>
          </template>
        </el-table-column>
      </el-table>

      <div class="pagination-container">
        <el-pagination v-show="total>0" :current-page="listQuery.page" :page-sizes="[10,20,30, 50]" :page-size="listQuery.limit" :total="total" background layout="total, sizes, prev, pager, next, jumper" @size-change="handleSizeChange" @current-change="handleCurrentChange"/>
      </div>
    </el-card>
  </div>
</template>
<script>
import { fetchList, putExchange } from '@/api/coin_product_logs'

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
    handleClickExchange() {
      this.$confirm('确认核销本条记录?', '提示', { confirmButtonText: '是', cancelButtonText: '否', type: 'warning' }).then(() => {
        putExchange(this.currentItem).then(res => {
          this.getList()
          this.$message({ type: 'success', message: '核销成功!' })
        })
      }).catch(() => {})
    },
    handleCurrentSelect(item) { this.currentItem = item },
    getList() {
      fetchList(this.listQuery).then(response => {
        console.log('response -> ', response)
        this.list = response.data.items
        this.total = response.data.total
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

