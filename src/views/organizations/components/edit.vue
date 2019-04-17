<template>
  <el-dialog :visible.sync="dialogVisible" :modal="true" :close-on-click-modal="false" title="修改机构信息" width="70%">
    <el-form :model="temp" label-position="right" label-width="100px" style="width: 60%; margin-left:80px;">
      <el-form-item label="机构名称" prop="title">
        <el-input v-model="temp.title" class="filter-item" placeholder="机构名称"/>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="handlerClickCancel">取消</el-button>
      <el-button type="primary" @click="handleClickSubmit">提交</el-button>
    </div>
  </el-dialog>
</template>
<script>
export default {
  data() {
    return {
      dialogVisible: false,
      temp: {
        title: undefined,
        phone: undefined,
        province_code: undefined,
        city_code: undefined,
        district_code: undefined
      }
    }
  },
  methods: {
    handlerClickCancel() {
      this.temp = {
        title: undefined,
        phone: undefined,
        province_code: undefined,
        city_code: undefined,
        district_code: undefined
      }
      this.dialogVisible = false
    },
    handleShow() {
      this.dialogVisible = true
    },
    handleClickSubmit() {
    }
  }
}
</script>
