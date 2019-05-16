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
          :data="data_logo"
          class="avatar-uploader">
          <img v-if="urls.imageLogoUrl" :src="urls.imageLogoUrl" class="avatar">
          <i v-else class="el-icon-plus avatar-uploader-icon"/>
        </el-upload>
      </el-form-item>
      <el-form-item :label-width="formLabelWidth" label="Banner图">
        <el-upload
          :show-file-list="false"
          :on-success="handleLogoSuccess"
          :before-upload="beforeLogoUpload"
          :action="actionUrl"
          :data="data_banner"
          class="avatar-uploader">
          <img v-if="urls.imageBannerUrls" :src="urls.imageLogoUrl" class="avatar">
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
export default {
  data() {
    return {
      dialogFormVisible: false,
      formLabelWidth: '120px',
      temp: {
        id: undefined,
        name: undefined
      },
      actionUrl: '/api/common/uploads/award_image',
      urls: {
        imageLogoUrl: undefined,
        imageBannerUrls: [],
        imagePictureUrls: []
      },
      data_logo: {
        id: undefined,
        asset_type: 'AwardLogo'
      },
      data_banner: {
        id: undefined,
        asset_type: 'AwardBanner'
      },
      data_picture: {
        id: undefined,
        asset_type: 'AwardPicture'
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
    },
    handleLogoSuccess(res, file) {
      this.urls = res.data
      console.log('上传成功。res => ', res)
      console.log('上传成功。file => ', file)
      console.log('image url => ', this.imageUrl)
    },
    beforeLogoUpload(file) {
      console.log('上传之前。。')
    }
  }
}
</script>
