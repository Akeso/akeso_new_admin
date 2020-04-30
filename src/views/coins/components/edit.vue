<template>
  <el-dialog :visible.sync="dialogVisible" :modal="true" :close-on-click-modal="false" :close-on-press-escape="false" :show-close="false" title="修改医生信息" width="70%" top="30px">
    <el-form :model="temp" style="width: 90%; margin-left:20px;">
      <el-form-item :label-width="formLabelWidth" label="套餐类别">
        <el-select v-model="temp.kind" placeholder="请选择" style="width: 130px;">
          <el-option v-for="item in kinds" :key="item.key" :label="item.value" :value="item.key"/>
        </el-select>
      </el-form-item>
      <el-form-item :label-width="formLabelWidth" prop="name" label="名称">
        <el-input v-model="temp.name" autocomplete="off" clearable style="width: 50%;" placeholder="机构/医生名称"/>
      </el-form-item>
      <el-form-item :label-width="formLabelWidth" label="兑换积分">
        <el-input v-model="temp.akeso_coin" clearable style="width: 50%;" placeholder="0" />积分
      </el-form-item>
      <el-form-item :label-width="formLabelWidth" label="原价">
        <el-input v-model="temp.origin_price" clearable style="width: 50%;"/>元
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="handlerClickCancel">取消</el-button>
      <el-button type="primary" @click="handleClickSubmit">提交</el-button>
    </div>
  </el-dialog>
</template>
<script>
import { updateItem } from '@/api/coin_products'
const kinds = [{ key: 1, value: '检查类套餐' }, { key: 2, value: '验配类' }, { key: 3, value: '视功能训练类' }, { key: 4, value: '调节或集合训练仪器' }, { key: 5, value: '护理液' }]
export default {
  props: {
    dialogVisible: {
      type: Boolean,
      default: true
    },
    item: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {
      formLabelWidth: '100px',
      kinds: kinds,
      temp: {
        id: this.item.id,
        kind: this.item.kind,
        name: this.item.name,
        akeso_coin: this.item.akeso_coin,
        origin_price: this.item.origin_price
      }
    }
  },
  methods: {
    handlerClickCancel() { this.$emit('hidden', false) },
    handleClickSubmit() {
      this.$confirm('确定修改该信息吗？, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        updateItem(this.temp).then(response => {
          this.$emit('hidden', true)
          this.$message({ type: 'success', message: '修改成功!' })
        })
      }).catch(() => {})
    }
  }
}
</script>
