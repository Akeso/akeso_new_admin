<template>
  <el-dialog :visible.sync="dialogVisible" :modal="true" :close-on-click-modal="false" title="修改机构信息" width="70%">
    <el-form :model="temp" style="width: 90%; margin-left:20px;">
      <el-form-item :label-width="formLabelWidth" label="机构名称" prop="title">
        <el-input v-model="temp.title" class="filter-item" placeholder="机构名称" style="width: 50%;"/>
      </el-form-item>
      <el-form-item :label-width="formLabelWidth" prop="phone" label="联系方式">
        <el-input v-model="temp.phone" clearable style="width: 50%;"/>
      </el-form-item>
      <el-form-item :label-width="formLabelWidth" prop="address" label="详细地址">
        <el-input v-model="temp.address" style="width: 60%;"/>
      </el-form-item>
      <el-form-item :label-width="formLabelWidth" label="简介">
        <el-input v-model="temp.description" type="textarea" style="width: 60%;"/>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="handlerClickCancel">取消</el-button>
      <el-button type="primary" @click="handleClickSubmit">提交</el-button>
    </div>
  </el-dialog>
</template>
<script>
import { updateItem } from '@/api/weapp/wx_organizations'

export default {
  data() {
    return {
      dialogVisible: false,
      formLabelWidth: '100px',
      temp: {
        id: undefined,
        title: undefined,
        phone: undefined,
        province_code: undefined,
        city_code: undefined,
        district_code: undefined,
        description: undefined
      }
    }
  },
  created() {
  },
  methods: {
    handlerClickCancel() {
      this.dialogVisible = false
    },
    handleShow(val) {
      this.temp = JSON.parse(JSON.stringify(val))
      // this.temp = val
      this.dialogVisible = true
    },
    handleClickSubmit() {
      this.$confirm('确定修改该机构吗？, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        updateItem(this.temp).then(response => {
          this.dialogVisible = false
          this.$emit('update-success')
          this.$message({
            type: 'success',
            message: '修改成功!'
          })
        })
      }).catch(() => {})
    }
  }
}
</script>
