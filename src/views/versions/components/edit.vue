<template>
  <el-dialog :visible.sync="dialogFormVisible" title="修改版本">
    <el-form :model="form">
      <el-form-item :label-width="formLabelWidth" label="版本名称">
        <el-input v-model="form.name" :disabled="true" autocomplete="off"/>
      </el-form-item>
      <el-form-item :label-width="formLabelWidth" label="版本描述">
        <el-input v-model="form.description" autocomplete="off"/>
      </el-form-item>
      <el-form-item :label-width="formLabelWidth" label="大版本">
        <el-input v-model="form.first" autocomplete="off"/>
      </el-form-item>
      <el-form-item :label-width="formLabelWidth" label="次版本">
        <el-input v-model="form.second" autocomplete="off"/>
      </el-form-item>
      <el-form-item :label-width="formLabelWidth" label="小版本">
        <el-input v-model="form.third" autocomplete="off"/>
      </el-form-item>
      <el-form-item :label-width="formLabelWidth" label="版本code">
        <el-input v-model="form.versioncode" autocomplete="off"/>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="dialogFormVisible = false">取 消</el-button>
      <el-button type="primary" @click="handClick">确 定</el-button>
    </div>
  </el-dialog>
</template>

<script>
import { updateItem } from '@/api/versions'
export default {
  data() {
    return {
      dialogFormVisible: false,
      form: {
        id: '',
        name: '',
        description: '',
        first: '',
        second: '',
        third: 0,
        versioncode: 0
      },
      formLabelWidth: '120px'
    }
  },
  methods: {
    show: function(val) {
      this.dialogFormVisible = true
      this.form = val
    },
    handClick: function() {
      updateItem(this.form).then(response => {
        this.dialogFormVisible = false
        this.$emit('updateVersionSuccess')
      })
    }
  }
}
</script>
