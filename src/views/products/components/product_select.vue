<template>
  <el-dialog :visible.sync="dialogFormVisible" :close-on-click-modal="false" title="选择商品" width="70%" top="30px" append-to-body>
    <el-row>
      <el-col>
        <el-input v-model="listQuery.name" placeholder="输入名称" label="名称" style="width: 200px;" class="filter-item" clearable/>
        <el-button class="filter-item" type="primary" icon="el-icon-search" @click="handleClickSearch">{{ generateShow('common.search') }}</el-button>
      </el-col>
    </el-row>
    <el-table
      :data="list"
      border
      style="width: 100%; margin-top: 10px;">
      <el-table-column
        label="名称"
        min-width="60"
        prop="name"/>
      <el-table-column
        label="品牌"
        prop="brand"
        min-width="40"/>
      <el-table-column
        label="类别"
        prop="serial"
        min-width="40"/>
      <el-table-column
        label="价格"
        prop="price"
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
import { fetchList } from '@/api/products'
export default {
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
      dialogFormVisible: false,
      list: null,
      total: null,
      listQuery: {
        page: 1,
        limit: 10,
        name: undefined
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
      this.$emit('select-product', val)
      this.dialogFormVisible = false
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
