<template>
  <el-dialog :visible.sync="dialogVisible" :modal="true" :close-on-click-modal="false" :close-on-press-escape="false" :show-close="false" title="修改医生信息" width="70%" top="30px">
    <el-form :model="temp" style="width: 90%; margin-left:20px;">
      <el-form-item :label-width="formLabelWidth" label="套餐类别">
        <el-select v-model="temp.kind" placeholder="请选择" style="width: 130px;">
          <el-option v-for="item in kinds" :key="item.key" :label="item.value" :value="item.key" />
        </el-select>
      </el-form-item>
      <el-form-item :label-width="formLabelWidth" prop="name" label="名称">
        <el-input v-model="temp.name" autocomplete="off" clearable style="width: 50%;" placeholder="奖品名称" />
      </el-form-item>
      <el-form-item :label-width="formLabelWidth" label="兑换积分">
        <el-input v-model="temp.akeso_coin" clearable style="width: 50%;" placeholder="0" />积分
      </el-form-item>
      <el-form-item :label-width="formLabelWidth" label="原价">
        <el-input v-model="temp.origin_price" clearable style="width: 50%;" />元
      </el-form-item>
      <el-form-item :label-width="formLabelWidth" label="产品图片">
        <el-upload :action="uploadUrl" :show-file-list="false" :on-success="uploadLogoSuccess" class="avatar-uploader">
          <img v-if="temp.logo_url" :src="temp.logo_url" class="avatar">
          <i v-else class="el-icon-plus avatar-uploader-icon" />
        </el-upload>
      </el-form-item>
      <el-form-item :label-width="formLabelWidth" label="产品详情图">
        <el-upload :action="uploadUrl" :show-file-list="true" :on-success="uploadContentuccess" :on-progress="uploadProgress" :on-remove="onRemove" :file-list="fileList" list-type="picture" multiple class="avatar-uploader">
          <!--<img v-if="temp.content_url" :src="temp.content_url" class="avatar">-->
          <!--<i v-else class="el-icon-plus avatar-uploader-icon" />-->
          <el-button size="small" type="primary">点击上传</el-button>
          <div slot="tip" class="el-upload__tip">只能上传jpg/jpeg/png文件</div>
        </el-upload>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="handlerClickCancel">取消</el-button>
      <el-button type="primary" @click="handleClickSubmit">提交</el-button>
    </div>
  </el-dialog>
</template>
<script>
import { updateItem } from '@/api/coin_products'
const kinds = [{ key: 1, value: '检查类套餐' }, { key: 2, value: '验配类' }, { key: 3, value: '视功能训练类' }, { key: 4, value: '调节或集合训练仪器' }, { key: 5, value: '护理液' }]
export default {
  props: {
    dialogVisible: {
      type: Boolean,
      default: true
    },
    item: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {
      uploadUrl: '/api/common/uploads/common',
      formLabelWidth: '100px',
      kinds: kinds,
      fileList: this.item.content_urls,
      temp: {
        id: this.item.id,
        kind: this.item.kind,
        name: this.item.name,
        akeso_coin: this.item.akeso_coin,
        origin_price: this.item.origin_price,
        logo_url: this.item.logo_url,
        content_url: this.item.content_url,
        content_urls: this.item.content_urls
      }
    }
  },
  methods: {
    uploadLogoSuccess(res, file) {
      // console.log('res = > ', res)
      this.temp.logo_url = res.data.url
    },
    uploadContentuccess(res, file, fileList) {
      const uploadData = res.data
      if (file.response.status === 200 && file.response.data.id === res.data.id) {
        uploadData.sort = file.sort
      }
      // console.log('res.data == ', uploadData)
      this.temp.content_urls = this.temp.content_urls.concat(uploadData)
      this.temp.content_urls = this.temp.content_urls.sort(function(a, b) {
        return a.sort - b.sort
      })
      console.log(this.temp.content_urls)
    },
    beforeUpload() {
      // this.$refs.uploadFile.clearFiles()
    },
    onRemove(res, fileList) {
      console.log(res, fileList)
      for (const item in this.temp.content_urls) {
        if (this.temp.content_urls[item].id === res.id) {
          this.temp.content_urls.splice(item, 1)
        }
      }
      console.log('re==this.temp.content_urls', this.temp.content_urls)
    },
    uploadProgress(event, file, fileList) {
      fileList.map((item, index) => {
        item.sort = index + 1
      })
    },
    handlerClickCancel() { this.$emit('hidden', false) },
    handleClickSubmit() {
      this.$confirm('确定修改该信息吗？, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        updateItem(this.temp).then(response => {
          this.$emit('hidden', true)
          this.$message({ type: 'success', message: '修改成功!' })
        })
      }).catch(() => { })
    }
  }
}
</script>
<style scoped>
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
  width: 100px;
  height: 100px;
  line-height: 100px;
  text-align: center;
  border:1px solid #8c939d;
}

.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>
