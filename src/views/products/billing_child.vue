<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="4">
        <div>
          <h3>{{ child.name }}</h3>
          <p>性别：{{ child.gender | genderFilter }}</p>
          <p>年龄：{{ child.age }}岁</p>
          <p>身高：{{ child.height }}CM</p>
          <p>体重：{{ child.weight }}KG</p>
          <p>手机号：{{ child.phone }}</p>
        </div>
      </el-col>
      <el-col :span="20">
        <el-button type="primary" @click="handleClickProduct">添加产品</el-button>
        <el-row>
          <el-col>
            问诊医生：<el-input v-model="seller" placeholder="输入问诊医生" label="名称" style="width: 200px;" class="filter-item" clearable/>
          </el-col>
        </el-row>
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
              <el-button size="mini" @click="handleClickDelete(scope.$index)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
        <el-button type="primary" @click="handleClickSave">保存</el-button>
      </el-col>
    </el-row>
    <ProductSelect ref="productSelect" @select-product="selectProduct"/>
  </div>
</template>

<script>
import ProductSelect from './components/product_select'
import { createItem } from '@/api/product_logs'
import { fetchChild } from '@/api/children'
export default {
  components: { ProductSelect },
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
      child_id: this.$route.params.id,
      child: {
        name: '',
        gender: 'unknown',
        age: undefined,
        height: undefined,
        weight: undefined,
        phone: undefined
      },
      dialogFormVisible: false,
      seller: '',
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
    this.getChild()
  },
  methods: {
    getChild() {
      fetchChild({ id: this.child_id }).then(res => {
        this.child = res.data
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
          sums[index] += ' 元'
        } else {
          sums[index] = 'N/A'
        }
      })
      this.total_price = sums
      return sums
    },
    handleClickSave() {
      if (this.list.length === 0) {
        this.$message({ message: '请选择商品', type: 'warning' })
        return
      }
      var product_ids = this.list.map(item => { return item.id })
      var prices = this.list.map(item => { return item.price })
      createItem({ child_id: this.child_id, seller: this.seller, products: this.list, product_ids: product_ids, prices: prices, total_price: 1 }).then(res => {
        console.log('res => ', res.data)
        this.$router.back()
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
