<template>
  <el-dialog :visible.sync="dialogFormVisible" title="新增蓝牙文件">
    <el-form :model="form">
      <el-form-item :label-width="formLabelWidth" label="镜腿大版本名">
        <el-input v-model="form.deviceType" autocomplete="off"/>
      </el-form-item>
      <el-form-item :label-width="formLabelWidth" label="镜腿小版本名">
        <el-input v-model="form.secondType" autocomplete="off"/>
      </el-form-item>
      <el-form-item :label-width="formLabelWidth" label="升级版本号">
        <el-input v-model="form.version" autocomplete="off"/>
      </el-form-item>
      <el-form-item :label-width="formLabelWidth" label="描述">
        <el-input v-model="form.des" autocomplete="off"/>
      </el-form-item>
      <el-form-item :label-width="formLabelWidth" label="文件">
        <el-upload
          :limit="1"
          :on-success="handleSuccess"
          class="upload-demo"
          action="/api/common/uploads/server_app_files">
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
import { createItem } from '@/api/server_app_files'
// /api/common/uploads/server_app_files
export default {
  data() {
    return {
      dialogFormVisible: false,
      formLabelWidth: '120px',
      form: {
        deviceType: undefined,
        secondType: undefined,
        des: undefined,
        version: undefined,
        file_id: undefined
      }
    }
  },
  methods: {
    show: function() {
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
    }
  }
}
</script>
