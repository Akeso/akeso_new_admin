<template>
  <el-dialog :visible.sync="dialogFormVisible" :close-on-click-modal="false" title="修改记录" width="70%" top="30px" @closed="resetData">
    <div>
      <el-row>
        <el-row class="mg-t">
          <el-col>
            <el-button type="primary" @click="handleClickProduct">添加产品</el-button>
            <span>问诊医生：</span><el-input v-model="product_log.seller" placeholder="输入问诊医生" label="名称" style="width: 200px;" class="filter-item" clearable/>
            <span>销售日期：</span><el-date-picker v-model="product_log.selled_at" type="date" placeholder="选择日期"/>
          </el-col>
        </el-row>
        <el-table
          :data="product_log.products"
          :summary-method="getSummaries"
          border
          show-summary
          height="450"
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
            min-width="80">
            <template slot-scope="{row}">
              <el-input v-model="row.price" placeholder="请输入价格"/>
            </template>
          </el-table-column>
          <el-table-column
            :label="generateShow('common.operate')"
            min-width="100" >
            <template slot-scope="scope">
              <el-button size="mini" @click="handleClickDelete(scope.$index)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
        <div style="margin-top: 5px;">
          备注：<br>
          <el-input v-model="product_log.des" :rows="2" placeholder="输入备注" label="备注" type="textarea" style="width: 400px;margin-top: 5px;" class="filter-item" clearable/>
        </div>
        <div class="mg-t">
          <el-button type="primary" @click="handleClickSave">保存</el-button>
        </div>
      </el-row>
    </div>
    <ProductSelect ref="productSelect" @select-product="selectProduct"/>
  </el-dialog>
</template>

<script>
import ProductSelect from '../components/product_select'
// import { fetchList } from '@/api/products'
import { updateItem } from '@/api/indents'
export default {
  components: { ProductSelect },
  data() {
    return {
      dialogFormVisible: false,
      product_log: {
        id: '',
        seller: '',
        selled_at: '',
        des: '',
        products: []
      }
    }
  },
  created() {
  },
  methods: {
    handleClickSelect(val) {
      this.$emit('select-product', val)
      this.dialogFormVisible = false
    },
    show(val) {
      this.product_log = JSON.parse(JSON.stringify(val))
      // Object.assign(this.product_log, val)
      this.dialogFormVisible = true
    },
    handleClickProduct() {
      this.$refs.productSelect.show()
    },
    handleClickSave() {
      console.log('aaa => ', this.product_log)
      if (this.product_log.products.length === 0) {
        this.$message({ message: '请选择商品', type: 'warning' })
        return
      }
      var product_ids = this.product_log.products.map(item => { return item.id })
      var prices = this.product_log.products.map(item => { return item.price })
      updateItem(Object.assign(this.product_log, { product_ids: product_ids, prices: prices, total_price: this.total_price })).then(res => {
        console.log('res => ', res.data)
        this.$emit('edit-log-success')
        this.dialogFormVisible = false
      })
    },
    getSummaries(param) {
      const { columns, data } = param
      const sums = []
      columns.forEach((column, index) => {
        if (index === 0) {
          sums[index] = '总价'
          return
        }
        if (index === 1 || index === 2 || index === 4) {
          return
        }
        const values = data.map(item => Number(item[column.property]))
        if (!values.every(value => isNaN(value))) {
          sums[index] = values.reduce((prev, curr) => {
            const value = Number(curr)
            if (!isNaN(value)) {
              return prev + curr
            } else {
              return prev
            }
          }, 0)
          this.total_price = sums[index]
          sums[index] += ' 元'
        } else {
          sums[index] = 'N/A'
        }
      })
      return sums
    },
    handleClickDelete(index) {
      this.product_log.products.splice(index, 1)
    },
    selectProduct(val) {
      this.product_log.products.push(val)
    },
    resetData() {
      this.product_log = {
        seller: '',
        selled_at: '',
        des: '',
        products: []
      }
    }
  }
}
</script>
