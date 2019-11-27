<template>
  <el-dialog :visible.sync="dialogFormVisible" :close-on-click-modal="false" title="新增课程标题" width="70%" top="30px">
    <el-form :model="temp" style="width: 90%; margin-left:20px;">
      <el-form-item :label-width="formLabelWidth" prop="name" label="名称">
        <el-input v-model="temp.title" autocomplete="off" clearable style="width: 50%;" placeholder="课程标题"/>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="handleClickCancel">取 消</el-button>
      <el-button type="primary" @click="handleClickSubmit">确 定</el-button>
    </div>
  </el-dialog>
</template>

<script>
import { createItem } from '@/api/courses'
export default {
  data() {
    return {
      dialogFormVisible: false,
      formLabelWidth: '120px',
      passwork_valid: false,
      temp: {
        title: undefined
      },
      loading: false
    }
  },
  created() {
  },
  methods: {
    handleClickCancel() {
      this.resetData()
      this.dialogFormVisible = false
    },
    handleClickSubmit() {
      if (this.temp.title !== undefined && this.temp.title !== '') {
        createItem(this.temp).then(response => {
          this.resetData()
          this.dialogFormVisible = false
          this.$emit('create-success')
        })
      }
    },
    show() {
      this.dialogFormVisible = true
    },
    resetData() {
      this.temp = {
        title: undefined
      }
    }
  }
}
</script>
