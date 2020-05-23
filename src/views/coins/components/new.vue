<template>
  <el-dialog :visible.sync="dialogVisible" :modal="true" :close-on-click-modal="false" :close-on-press-escape="false" :show-close="false" title="新增机构/医生账号" width="70%" top="30px">
    <el-form style="width: 90%; margin-left:20px;">
      <el-form-item :label-width="formLabelWidth" label="套餐类别">
        <el-select v-model="temp.kind" placeholder="请选择" style="width: 130px;">
          <el-option v-for="item in kinds" :key="item.key" :label="item.value" :value="item.key"/>
        </el-select>
      </el-form-item>
      <el-form-item :label-width="formLabelWidth" prop="name" label="名称">
        <el-input v-model="temp.name" autocomplete="off" clearable style="width: 50%;" placeholder="机构/医生名称"/>
      </el-form-item>
      <el-form-item :label-width="formLabelWidth" label="兑换积分">
        <el-input v-model="temp.akeso_coin" clearable style="width: 50%;" placeholder="0" />积分
      </el-form-item>
      <el-form-item :label-width="formLabelWidth" label="原价">
        <el-input v-model="temp.origin_price" clearable style="width: 50%;"/>元
      </el-form-item>
      <el-form-item :label-width="formLabelWidth" label="产品图片">
        <el-upload
          :action="uploadUrl"
          :show-file-list="false"
          :on-success="uploadLogoSuccess"
          class="avatar-uploader">
          <img v-if="temp.logo_url" :src="temp.logo_url" class="avatar">
          <i v-else class="el-icon-plus avatar-uploader-icon"/>
        </el-upload>
      </el-form-item>
      <el-form-item :label-width="formLabelWidth" label="产品详情图">
        <el-upload
          :action="uploadUrl"
          :show-file-list="false"
          :on-success="uploadContentuccess"
          class="avatar-uploader">
          <img v-if="temp.content_url" :src="temp.content_url" class="avatar">
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
import { createItem } from '@/api/coin_products'
const kinds = [{ key: 1, value: '检查类套餐' }, { key: 2, value: '验配类' }, { key: 3, value: '视功能训练类' }, { key: 4, value: '调节或集合训练仪器' }, { key: 5, value: '护理液' }]
export default {
  props: {
    dialogVisible: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      uploadUrl: '/api/common/uploads/common',
      formLabelWidth: '120px',
      kinds: kinds,
      temp: {
        logo_url: undefined,
        content_url: undefined,
        name: undefined,
        kind: undefined,
        akeso_coin: undefined,
        origin_price: undefined
      },
      loading: false
    }
  },
  created() {
  },
  methods: {
    uploadLogoSuccess(res, file) {
      // console.log('res = > ', res)
      this.temp.logo_url = res.data.url
    },
    uploadContentuccess(res, file) {
      this.temp.content_url = res.data.url
    },
    handleClickCancel() {
      this.$emit('hidden', false)
    },
    handleClickSubmit() {
      createItem(this.temp).then(res => {
        this.$emit('hidden', true)
      })
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
