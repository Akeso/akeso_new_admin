<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>{{ generateShow('route.products') }}</span>
      </div>
      <el-row :gutter="20" style="margin-bottom: 10px;">
        <el-col>
          <el-upload
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :before-remove="beforeRemove"
            :on-success="handleSuccess"
            :limit="1"
            class="upload-demo"
            accept=".xlsx, .xls"
            action="/api/common/excels/upload_products">
            <!--<div class="overflow">-->
            <el-button class="filter-item" size="small" type="success" icon="el-icon-plus" @click.stop="handleClickNew">新增产品</el-button>
            <el-button size="small" type="primary" class="left">{{ generateShow('common.upload') }}Excel</el-button>
            <el-button size="small" class="left m-l-2" @click.stop="downloadExc">{{ generateShow('common.download') }}Excel模板</el-button>
            <span slot="tip" class="el-upload__tip c-red left tit-btn">只能{{ generateShow('common.upload') }}.xlsx, .xls文件</span>
            <!--</div>-->
          </el-upload>
        </el-col>
      </el-row>

      <!--<div class="filter-container">-->
      <!--<el-button class="filter-item" type="success" icon="el-icon-plus" @click="handleClickNew">新增产品</el-button>-->
      <!--</div>-->

      <el-row>
        <el-col>
          {{ generateShow('product.name') }}:
          <el-input v-model="listQuery.name" :placeholder="generateShow('product.name')" size="small" label="名称" style="width: 160px;" class="filter-item" clearable/>
          {{ generateShow('product.brand') }}:
          <el-input v-model="listQuery.brand" :placeholder="generateShow('product.brand')" size="small" label="品牌" style="width: 160px;" class="filter-item" clearable/>
          {{ generateShow('product.serial') }}:
          <el-input v-model="listQuery.serial" :placeholder="generateShow('product.serial')" size="small" label="系列" style="width: 160px;" class="filter-item" clearable/>
          <el-button class="filter-item" size="small" type="primary" icon="el-icon-search" @click="getList">{{ generateShow('common.search') }}</el-button>
          <el-button class="filter-item" size="small" type="primary" @click="handleFilterClear">{{ generateShow('common.clear') }}</el-button>
        </el-col>
      </el-row>

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
            <el-button type="primary" icon="el-icon-edit" size="small" @click="handleClickEdit(scope.row)">修改</el-button>
            <el-button type="danger" icon="el-icon-delete" size="small" @click="handleClickDelete(scope.row)">删除</el-button>
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
  channels: {
    ProductChannel: {
      connected() {
        console.log('ChatChannel => connected.')
      },
      rejected() {
        console.log('ChatChannel => rejected.')
      },
      received(data) {
        console.log('ChatChannel => received. => ', data)
      },
      disconnected() {
        console.log('ChatChannel => disconnected.')
      }
    }
  },
  mounted() {
    // this.$cable.subscribe({ channel: 'ProductChannel' })
  },
  methods: {
    handleRemove(file, fileList) {
      console.log(file, fileList)
    },
    handlePreview(file) {
      console.log(file)
    },
    beforeRemove(file, fileList) {
    },

    handleSuccess(res, file) {
      console.log('res => ', res)
      console.log('file => ', file)
    },
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
    },
    downloadExc() {
      window.location.href = 'https://akeso.com.cn/template/import_products.xlsx'
    }
  }
}
</script>
<style scoped>
  .c-blue{
    color: #27adff;
  }
  .c-red{
    color: red;
  }
  .tit-btn{
    font-size: 14px;
    margin-left:16px;
  }
</style>

