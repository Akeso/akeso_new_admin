<template>
  <el-dialog :visible.sync="dialogFormVisible" :close-on-click-modal="false" title="配置图片" width="70%">
    <el-form ref="ruleForm" :model="temp" style="width: 90%; margin-left:20px;">
      <el-form-item :label-width="formLabelWidth" prop="title" label="名称">
        <el-input v-model="temp.title" autocomplete="off" clearable style="width: 50%;" disabled/>
      </el-form-item>
      <el-form-item :label-width="formLabelWidth" prop="title" label="Banner图">
        <el-upload
          ref="upload"
          :on-preview="handlePreview"
          :on-remove="handleRemove"
          :on-success="handleSuccess"
          :on-change="handleChange"
          :data="data_banner"
          :auto-upload="false"
          :file-list="fileList"
          list-type="picture"
          action="/api/common/uploads">
          <el-button slot="trigger" size="small" type="primary">选取</el-button>
          <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传</el-button>
        </el-upload>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="resetData">取 消</el-button>
      <el-button type="primary" @click="handleClickSubmit">确 定</el-button>
    </div>
  </el-dialog>
</template>

<script>
import { fetchImages, changeImages } from '@/api/weapp/awards'
export default {
  data() {
    return {
      dialogFormVisible: false,
      formLabelWidth: '120px',
      award_id: undefined,
      temp: {
        id: undefined,
        name: undefined
      },
      fileList: [],
      asset_ids: [],
      data_banner: {
        asset_type: 'AwardBanner'
      }
    }
  },
  created() {
  },
  methods: {
    submitUpload() {
      this.$refs.upload.submit()
    },
    show(val) {
      this.temp = val
      this.award_id = val.id
      this.asset_ids = []
      fetchImages({ id: val.id, type: 'banner' }).then(res => {
        this.fileList = res.data
        this.fileList.forEach(item => {
          this.asset_ids.push(item.id)
        })
        this.dialogFormVisible = true
      })
    },
    handleClickSubmit() {
      changeImages({ id: this.award_id, asset_ids: this.asset_ids, type: 'banner' }).then(res => {
        this.resetData()
      })
    },
    resetData() {
      this.award_id = undefined
      this.temp = {
        id: undefined,
        name: undefined
      }
      this.fileList = []
      this.asset_ids = []
      this.dialogFormVisible = false
    },
    handlePreview(file) {
      console.log('file => ', file)
    },
    handleRemove(file, fileList) {
      const iii = this.asset_ids.indexOf(file.id)
      if (iii > -1) {
        this.asset_ids.splice(iii, 1)
      }
      console.log('asset_ids => ', this.asset_ids)
    },
    handleChange(file, fileList) {
      console.log('handleChange.')
    },
    handleSuccess(res, file) {
      this.asset_ids.push(res.data.id)
      console.log('上传成功。asset_ids => ', this.asset_ids)
    }
  }
}
</script>
