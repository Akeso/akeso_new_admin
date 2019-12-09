<template>
  <el-dialog :visible.sync="dialogFormVisible" :close-on-click-modal="false" title="开单详情" width="70%" top="30px">
    <div style="padding: 10px;">
      <el-row :gutter="10" style="margin-bottom: 20px;">
        <el-col :span="4"><span>开单儿童：</span>{{ indent.child_name }}</el-col>
        <el-col :span="4"><span>接诊医生：</span>{{ indent.seller }}</el-col>
        <el-col :span="4"><span>总价：</span>{{ indent.total_price }}</el-col>
        <el-col :span="6"><span>开单日期：</span>{{ indent.selled_at }}</el-col>
      </el-row>
      <el-table :data="indent.products" border style="width: 100%">
        <el-table-column
          prop="name"
          label="名称"
          min-width="120"/>
        <el-table-column
          prop="brand"
          label="品牌"
          min-width="180"/>
        <el-table-column
          prop="serial"
          label="系列"
          min-width="180"/>
        <el-table-column
          prop="price"
          label="价格"
          min-width="180"/>
      </el-table>
    </div>
    <div slot="footer" class="dialog-footer">
      <el-button @click="handleClickCancel">关    闭</el-button>
    </div>
  </el-dialog>
</template>

<script>
// import { showItem } from '@/api/indents'
export default {
  data() {
    return {
      dialogFormVisible: false,
      indent: {
        child_name: '-',
        seller: '-',
        created_at: '-',
        total_price: '-',
        products: []
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
    handleClickCancel() {
      this.dialogFormVisible = false
    },
    show(val) {
      console.log('val => ', val)
      // showItem({ id: val.id }).then(res => {
      //   this.indent = res.data
      // })
      this.indent = val
      this.dialogFormVisible = true
    }
  }
}
</script>
