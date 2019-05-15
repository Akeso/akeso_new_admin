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
        <el-input v-model="temp.min_condition" autocomplete="off" clearable style="width: 50%;"/>
      </el-form-item>
      <el-form-item :label-width="formLabelWidth" prop="title" label="有效天数">
        <el-input v-model="temp.valid_days" autocomplete="off" clearable style="width: 50%;"/>
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
// const genderOptions = [
//   { key: 'male', display_name: '男' },
//   { key: 'female', display_name: '女' }
// ]
import { createItem } from '@/api/weapp/awards'
export default {
  data() {
    return {
      dialogFormVisible: false,
      formLabelWidth: '120px',
      temp: {
        name: undefined,
        description: undefined,
        price: undefined,
        min_condition: undefined,
        valid_days: undefined
      }
    }
  },
  created() {
  },
  methods: {
    handleClickCancel() {
      this.dialogFormVisible = false
    },
    show() {
      this.dialogFormVisible = true
    },
    handleClickSubmit() {
      createItem(this.temp).then(res => {
        this.$emit('create-success')
        this.dialogFormVisible = false
      })
      // this.$refs['ruleForm'].validate((valid) => {
      //   if (valid) {
      //     if (this.temp.password !== this.temp.password_confirmation) {
      //       this.passwork_valid = true
      //       return
      //     }
      //     createItem(this.temp).then(response => {
      //       this.resetData()
      //       this.dialogFormVisible = false
      //       this.$emit('create-success')
      //     })
      //   } else {
      //     return false
      //   }
      // })
    }
  }
}
</script>
