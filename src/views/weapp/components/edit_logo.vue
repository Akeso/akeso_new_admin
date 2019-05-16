<template>
  <el-dialog :visible.sync="dialogFormVisible" :close-on-click-modal="false" title="配置图片" width="70%">
    <el-form ref="ruleForm" :model="temp" style="width: 90%; margin-left:20px;">
      <el-form-item :label-width="formLabelWidth" prop="title" label="名称">
        <el-input v-model="temp.title" autocomplete="off" clearable style="width: 50%;" disabled/>
      </el-form-item>
      <el-form-item :label-width="formLabelWidth" label="Logo图">
        <el-upload
          :show-file-list="false"
          :on-success="handleLogoSuccess"
          :before-upload="beforeLogoUpload"
          :action="actionUrl"
          :data="data_logo">
          <img v-if="imageLogoUrl" :src="imageLogoUrl" class="avatar">
          <i v-else class="el-icon-plus avatar-uploader-icon"/>
        </el-upload>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="handleClickCancel">取 消</el-button>
      <el-button type="primary" @click="handleClickSubmit">确 定</el-button>
    </div>
  </el-dialog>
</template>

<script>
import { changeLogo } from '@/api/weapp/awards'
export default {
  data() {
    return {
      dialogFormVisible: false,
      formLabelWidth: '120px',
      temp: {
        id: undefined,
        name: undefined,
        imageLogoUrl: undefined
      },
      asset_id: undefined,
      actionUrl: '/api/common/uploads',
      imageLogoUrl: undefined,
      data_logo: {
        asset_type: 'AwardLogo'
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
      this.imageLogoUrl = val.logo
      this.dialogFormVisible = true
    },
    handleClickSubmit() {
      changeLogo({ id: this.temp.id, asset_id: this.asset_id }).then(res => {
        this.asset_id = undefined
        this.imageLogoUrl = undefined
        this.$emit('update-success')
        this.dialogFormVisible = false
      })
    },
    handleLogoSuccess(res, file) {
      console.log('上传之后 => ', res)
      this.asset_id = res.data.id
      this.imageLogoUrl = res.data.url
    },
    beforeLogoUpload(file) {
      console.log('上传之前。。')
    }
  }
}
</script>
