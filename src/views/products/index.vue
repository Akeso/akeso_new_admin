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
          prop="name"
          min-width="80"/>
        <el-table-column
          :label="generateShow('product.brand')"
          prop="brand"
          min-width="80"/>
        <el-table-column
          :label="generateShow('product.serial')"
          prop="serial"
          min-width="80"/>
        <el-table-column
          :label="generateShow('product.price')"
          prop="price"
          min-width="80"/>
        <el-table-column
          :label="generateShow('product.total')"
          prop="total"
          min-width="80"/>
        <el-table-column
          :label="generateShow('common.operate')"
          min-width="100" >
          <template slot-scope="scope">
            <el-button type="text" size="small" @click="handleClickEdit(scope.row)">修改</el-button>
            <el-button type="text" size="small" @click="handleClickDelete(scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>

      <div class="pagination-container">
        <el-pagination v-show="total>0" :current-page="listQuery.page" :page-sizes="[10,20,30, 50]" :page-size="listQuery.limit" :total="total" background layout="total, sizes, prev, pager, next, jumper" @size-change="handleSizeChange" @current-change="handleCurrentChange"/>
      </div>
    </el-card>
    <NewProduct ref="newProduct" @create-success="getList"/>
    <EditProduct ref="editProduct" @create-success="getList"/>
  </div>
</template>
<script>
import { fetchList, deleteItem } from '@/api/products'
import NewProduct from './components/new_product'
import EditProduct from './components/edit_product'
export default {
  components: { NewProduct, EditProduct },
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
    handleClickEdit(val) {
      this.$refs.editProduct.show(val)
    },
    handleClickDelete(val) {
      this.$confirm('确定要删除该产品吗?', '提示', {
        confirmButtonText: '是',
        cancelButtonText: '否',
        type: 'warning'
      }).then(() => {
        deleteItem(val).then(res => {
          this.getList()
        })
      }).catch(() => {
      })
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

