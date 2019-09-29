<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>{{ generateShow('route.products') }}</span>
      </div>

      <div class="filter-container">
        <el-button class="filter-item" type="success" icon="el-icon-plus" @click="handleClickNew">新增产品</el-button>
      </div>

      <el-table
        :data="list"
        border
        style="width: 100%; margin-top: 10px;">
        <el-table-column
          :label="generateShow('product.name')"
          min-width="80"/>
        <el-table-column
          :label="generateShow('product.brand')"
          min-width="80"/>
        <el-table-column
          :label="generateShow('product.serial')"
          min-width="80"/>
        <el-table-column
          :label="generateShow('product.price')"
          min-width="80"/>
        <el-table-column
          :label="generateShow('common.operate')"
          min-width="100" >
          <template slot-scope="scope">
            <el-button type="text" size="small" @click="handleClick(scope.row)">解绑</el-button>
          </template>
        </el-table-column>
      </el-table>

      <div class="pagination-container">
        <el-pagination v-show="total>0" :current-page="listQuery.page" :page-sizes="[10,20,30, 50]" :page-size="listQuery.limit" :total="total" background layout="total, sizes, prev, pager, next, jumper" @size-change="handleSizeChange" @current-change="handleCurrentChange"/>
      </div>
    </el-card>
    <NewProduct ref="newProduct" @create-success="getList"/>
  </div>
</template>
<script>
import { fetchList } from '@/api/products'
import NewProduct from './components/new_product'
export default {
  components: { NewProduct },
  data() {
    return {
      list: [],
      total: 0,
      listQuery: {
        page: 1,
        limit: 20
      }
    }
  },
  created() {
    this.getList()
  },
  methods: {
    handleClickNew() {
      this.$refs.newProduct.show()
    },
    getList() {
      fetchList().then(res => {
        this.list = res.data.items
        this.total = res.data.total
      })
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

