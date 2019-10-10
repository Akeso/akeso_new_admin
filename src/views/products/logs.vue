<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>{{ generateShow('route.products') }}</span>
      </div>

      <div class="filter-container">
        <el-button class="filter-item" type="success" icon="el-icon-plus" @click="handleClickNew">销售开单</el-button>
      </div>

      <!--<el-row>-->
      <!--<el-col>-->
      <!--{{ generateShow('product.name') }}:-->
      <!--<el-input v-model="listQuery.name" :placeholder="generateShow('product.name')" label="名称" style="width: 200px;" class="filter-item" clearable/>-->
      <!--{{ generateShow('product.brand') }}:-->
      <!--<el-input v-model="listQuery.brand" :placeholder="generateShow('product.brand')" label="品牌" style="width: 180px;" class="filter-item" clearable/>-->
      <!--{{ generateShow('product.serial') }}:-->
      <!--<el-input v-model="listQuery.serial" :placeholder="generateShow('product.serial')" label="系列" style="width: 180px;" class="filter-item" clearable/>-->
      <!--</el-col>-->
      <!--</el-row>-->
      <!--<el-row style="margin-top: 10px;">-->
      <!--<el-col>-->
      <!--<el-button class="filter-item" type="primary" icon="el-icon-search" @click="getList">{{ generateShow('common.search') }}</el-button>-->
      <!--<el-button class="filter-item" type="primary" @click="handleFilterClear">{{ generateShow('common.clear') }}</el-button>-->
      <!--</el-col>-->
      <!--</el-row>-->

      <el-table
        :data="list"
        border
        style="width: 100%; margin-top: 10px;">
        <el-table-column
          type="expand">
          <template slot-scope="props">
            <el-form label-position="left" inline class="demo-table-expand">
              <div v-for="item in props.row.products" :key="item.key">
                <el-form-item label="商品">
                  <span>{{ item.name }}</span>
                </el-form-item>
                <el-form-item label="价格">
                  <span>{{ item.price }}</span>
                </el-form-item>
              </div>
              <el-form-item label="接诊医生">
                <span>{{ props.row.seller }}</span>
              </el-form-item>
              <el-form-item label="备注">
                <span>{{ props.row.desc }}</span>
              </el-form-item>
            </el-form>
          </template>
        </el-table-column>
        <el-table-column
          label="儿童姓名"
          prop="child_name"
          min-width="80"/>
        <el-table-column
          label="接诊医生"
          prop="seller"
          min-width="80"/>
        <el-table-column
          label="时间"
          prop="created_at"
          min-width="80"/>
        <el-table-column
          label="总价"
          prop="total_price"
          min-width="80"/>
        <el-table-column
          :label="generateShow('common.operate')"
          min-width="100" >
          <template slot-scope="scope">
            <el-button size="mini" @click="handleClickDelete(scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>

      <div class="pagination-container">
        <el-pagination v-show="total>0" :current-page="listQuery.page" :page-sizes="[10,20,30, 50]" :page-size="listQuery.limit" :total="total" background layout="total, sizes, prev, pager, next, jumper" @size-change="handleSizeChange" @current-change="handleCurrentChange"/>
      </div>
    </el-card>
    <EditProduct ref="editProduct" @create-success="getList"/>
    <ChildSelect ref="childSelect" />
  </div>
</template>
<script>
import { fetchList, deleteItem } from '@/api/product_logs'
import EditProduct from './components/edit_product'
import ChildSelect from './components/child_select'
export default {
  components: { EditProduct, ChildSelect },
  data() {
    return {
      list: [],
      total: 0,
      listQuery: {
        page: 1,
        limit: 20,
        name: undefined,
        brand: undefined,
        serial: undefined
      }
    }
  },
  created() {
    this.getList()
  },
  methods: {
    handleClickNew() {
      this.$refs.childSelect.show()
    },
    handleClickDelete(val) {
      this.$confirm('此操作将永久删除该记录, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        deleteItem({ id: val.id }).then(res => {
          this.$message({
            type: 'success',
            message: res.message
          })
          this.getList()
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
    },
    getList() {
      fetchList(this.listQuery).then(res => {
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
    },
    handleFilterClear() {
      this.listQuery.name = undefined
      this.listQuery.brand = undefined
      this.listQuery.serial = undefined
    }
  }
}
</script>
<style>
  .demo-table-expand {
    font-size: 0;
  }
  .demo-table-expand label {
    width: 90px;
    color: #99a9bf;
  }
  .demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
  }
</style>
