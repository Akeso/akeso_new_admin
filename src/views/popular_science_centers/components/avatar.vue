<template>
  <el-dialog :visible.sync="dialogFormVisible" :close-on-click-modal="false" title="修改Logo" width="70%" @close="resetData">
    <el-form ref="ruleForm" :model="temp" style="width: 90%; margin-left:20px;">
      <el-form-item :label-width="formLabelWidth" prop="avatar" label="请上传图片">
        <el-upload
          ref="avatar_upload"
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload"
          :auto-upload="false"
          :action="uploadUrl"
          :data="temp"
          class="avatar-uploader">
          <img v-if="temp.avatar_url" :src="temp.avatar_url" class="avatar">
          <i v-else class="el-icon-plus avatar-uploader-icon"/>
        </el-upload>
        <span>建议图片规格900 x 500</span>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="handleClickCancel">取 消</el-button>
      <el-button type="primary" @click="handleClickSubmit">确 定</el-button>
    </div>
  </el-dialog>
</template>

<script>
// import { createItem } from '@/api/popular_science_centers'
export default {
  data() {
    return {
      uploadUrl: '/api/a1/popular_science_centers/avatar',
      dialogFormVisible: false,
      formLabelWidth: '120px',
      article_types: [],
      temp: {
        id: undefined,
        avatar: undefined,
        avatar_url: undefined
      }
    }
  },
  created() {
    // console.log('aaa => ', this.$store.state.article_types)
  },
  methods: {
    handleClickSubmit() {
      this.$refs.avatar_upload.submit()
    },
    handleAvatarSuccess(res, file) {
      console.log('successssssss')
      this.$message({
        message: '修改成功',
        type: 'success'
      })
      this.$emit('updateSuccess')
      this.dialogFormVisible = false
    },
    beforeAvatarUpload(file) {
      console.log('file => ', file)
      this.temp.avatar = file
    },
    handleClickCancel() {
      this.resetData()
      this.dialogFormVisible = false
    },
    show(val) {
      Object.assign(this.temp, val)
      this.dialogFormVisible = true
    },
    resetData() {
      this.temp = {
        id: undefined,
        avatar: undefined,
        avatar_url: undefined
      }
    }
  }
}
</script>
<style>
  .ck-editor__editable {
    min-height: 200px;
  }
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>
