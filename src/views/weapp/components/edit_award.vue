<template>
  <el-dialog :visible.sync="dialogFormVisible" :close-on-click-modal="false" title="新增奖品" width="70%">
    <el-form ref="ruleForm" :model="temp" style="width: 90%; margin-left:20px;">
      <el-form-item :label-width="formLabelWidth" prop="title" label="名称">
        <el-input v-model="temp.title" autocomplete="off" clearable style="width: 50%;"/>
      </el-form-item>
      <el-form-item :label-width="formLabelWidth" label="价格">
        <el-input v-model="temp.price" autocomplete="off" clearable style="width: 50%;"/>
      </el-form-item>
      <el-form-item :label-width="formLabelWidth" label="兑换标准">
        <el-input v-model="temp.minCondition" autocomplete="off" clearable style="width: 50%;"/>
      </el-form-item>
      <el-form-item :label-width="formLabelWidth" prop="title" label="有效天数">
        <el-input v-model="temp.validDays" autocomplete="off" clearable style="width: 50%;"/>
      </el-form-item>
      <el-form-item :label-width="formLabelWidth" label="简介">
        <el-input v-model="temp.description" type="textarea" style="width: 50%;"/>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="handleClickCancel">取 消</el-button>
      <el-button type="primary" @click="handleClickSubmit">确 定</el-button>
    </div>
  </el-dialog>
</template>

<script>
import { updateItem } from '@/api/weapp/awards'
export default {
  data() {
    return {
      dialogFormVisible: false,
      formLabelWidth: '120px',
      temp: {
        name: undefined,
        description: undefined,
        price: undefined,
        minCondition: undefined,
        validDays: undefined
      },
      actionUrl: '/api/common/uploads',
      imageUrl: undefined,
      data: {
        asset_type: 'AwardImage'
      }
    }
  },
  created() {
  },
  methods: {
    handleClickCancel() {
      this.dialogFormVisible = false
    },
    show(val) {
      this.temp = val
      this.dialogFormVisible = true
    },
    handleClickSubmit() {
      updateItem(this.temp).then(res => {
        this.$emit('update-success')
        this.dialogFormVisible = false
      })
    }
  }
}
</script>
