<template>
  <div class="box-container">
    <el-upload
      :on-preview="handlePreview"
      :on-remove="handleRemove"
      :before-remove="beforeRemove"
      :on-exceed="handleExceed"
      class="upload-demo"
      action="/api/common/excels/upload_report">
      <el-button size="small" type="primary">点击上传</el-button>
      <div slot="tip" class="el-upload__tip">只能上传.xlsx, .xls文件</div>
    </el-upload>
    <h1>学生用眼健康因素监测报告</h1>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span style="font-weight: bold;">基本信息</span>
      </div>
      <el-row>
        <el-col :span="4">总人数</el-col>
        <el-col :span="4">男生</el-col>
        <el-col :span="4">女生</el-col>
      </el-row>
    </el-card>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span style="font-weight: bold;">眼健康行为模式风险分析报告(健康因子)</span>
      </div>
      <el-row>
        <el-col :span="4">总人数</el-col>
        <el-col :span="4">男生</el-col>
        <el-col :span="4">女生</el-col>
      </el-row>
    </el-card>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span style="font-weight: bold;">眼健康行为模式风险分析报告(危险因子)</span>
      </div>
      <el-row>
        <el-col :span="4">总人数</el-col>
        <el-col :span="4">男生</el-col>
        <el-col :span="4">女生</el-col>
      </el-row>
    </el-card>
  </div>
</template>
<script>
import UploadExcelComponent from '@/components/UploadExcel/index.vue'
export default {
  components: { UploadExcelComponent },
  data() {
    return {
      multiple: false,
      fileName: ''
    }
  },
  methods: {
    handleRemove(file, fileList) {
      console.log(file, fileList)
    },
    handlePreview(file) {
      console.log(file)
    },
    handleExceed(files, fileList) {
    },
    beforeRemove(file, fileList) {
    }
  }
}
</script>
<style>
  .box-container{
    padding: 10px;
  }
</style>
