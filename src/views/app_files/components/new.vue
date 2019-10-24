<template>
  <el-dialog :visible.sync="dialogFormVisible" title="新增安装文件">
    <el-form :model="form">
      <el-form-item :label-width="formLabelWidth" label="名称">
        <el-input v-model="form.name" autocomplete="off"/>
      </el-form-item>
      <el-form-item :label-width="formLabelWidth" label="版本号">
        <el-input v-model="form.version" autocomplete="off"/>
      </el-form-item>
      <el-form-item :label-width="formLabelWidth" label="文件">
        <el-upload
          :limit="1"
          :on-success="handleSuccess"
          class="upload-demo"
          action="/api/common/uploads/app_files">
          <el-button size="small" type="primary">点击上传</el-button>
        </el-upload>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="dialogFormVisible = false">取 消</el-button>
      <el-button type="primary" @click="handClickSubmit">确 定</el-button>
    </div>
  </el-dialog>
</template>

<script>
import { createItem } from '@/api/app_files'
// /api/common/uploads/server_app_files
export default {
  data() {
    return {
      dialogFormVisible: false,
      formLabelWidth: '120px',
      form: {
        name: undefined,
        version: undefined,
        file_id: undefined
      }
    }
  },
  methods: {
    show: function() {
      this.resetData()
      this.dialogFormVisible = true
    },
    handleSuccess(res, file) {
      console.log('res => ', res)
      this.form.file_id = res.data.id
    },
    handClickSubmit: function() {
      createItem(this.form).then(response => {
        this.$emit('updateVersionSuccess')
        this.dialogFormVisible = false
      })
    },
    resetData: function() {
      this.form = {
        name: undefined,
        version: undefined,
        file_id: undefined
      }
    }
  }
}
</script>
