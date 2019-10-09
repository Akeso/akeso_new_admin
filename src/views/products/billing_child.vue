<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="4">
        <div patient-info="" on-click="showPatient()" customer-id="fee.customerId" patient-id="patientId" class="ng-isolate-scope">
          <h3 class="mt5 ng-binding">王静</h3>
          <p class="ng-binding">性别：男</p>
          <p class="ng-binding">年龄：3月</p>
          <p>身高：<span ng-show="updatePatientFactory.object.height" class="ng-binding ng-hide">CM</span></p>
          <p>体重：<span ng-show="updatePatientFactory.object.weight" class="ng-binding ng-hide">KG</span></p>
          <p class="ng-binding">联系人：王静</p>
          <p class="ng-binding">手机号：13165029807</p>
        </div>
      </el-col>
      <el-col :span="20">
        <el-button type="success" @click="handleClickProduct">添加产品</el-button>
        <el-table
          :data="list"
          :summary-method="getSummaries"
          border
          show-summary
          height="500"
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
              <el-button type="text" size="small" @click="handleClickDelete(scope.$index)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
        <el-button type="success" @click="handleClickSave">保存</el-button>
      </el-col>
    </el-row>
    <ProductSelect ref="productSelect" @select-product="selectProduct"/>
  </div>
</template>

<script>
import ProductSelect from './components/product_select'
import { createItem } from '@/api/product_logs'
export default {
  components: { ProductSelect },
  data() {
    return {
      child_id: this.$route.params.id,
      dialogFormVisible: false,
      list: [],
      total: null,
      total_price: 0,
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
    console.log('child_id => ', this.child_id)
  },
  methods: {
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
          sums[index] += ' 元'
        } else {
          sums[index] = 'N/A'
        }
      })
      this.total_price = sums
      return sums
    },
    handleClickSave() {
      var product_ids = this.list.map(item => { return item.id })
      var prices = this.list.map(item => { return item.price })
      createItem({ child_id: this.child_id, seller: '测试销售', product_ids: product_ids, prices: prices, total_price: 1 }).then(res => {
        console.log('res => ', res.data)
      })
    },
    handleClickDelete(index) {
      this.list.splice(index, 1)
    },
    selectProduct(val) {
      this.list.push(val)
    },
    handleClickProduct() {
      this.$refs.productSelect.show()
    }
  }
}
</script>
