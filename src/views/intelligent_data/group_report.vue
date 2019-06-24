<template>
  <div class="box-container">
    <el-upload
      :on-preview="handlePreview"
      :on-remove="handleRemove"
      :before-remove="beforeRemove"
      :on-success="handleSuccess"
      :limit="1"
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
      <el-row :gutter="32">
        <el-col :xs="24" :sm="24" :lg="12">
          <echarts-legend/>
          <div class="chart-wrapper">
            <bar-chart/>
          </div>
        </el-col>
        <el-col :xs="24" :sm="24" :lg="12">
          <echarts-legend/>
          <div class="chart-wrapper">
            <bar-chart/>
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="32">
        <el-col :xs="24" :sm="24" :lg="12">
          <echarts-legend/>
          <div class="chart-wrapper">
            <bar-chart/>
          </div>
        </el-col>
        <el-col :xs="24" :sm="24" :lg="12">
          <echarts-legend/>
          <div class="chart-wrapper">
            <bar-chart/>
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="32">
        <el-col :xs="24" :sm="24" :lg="12">
          <echarts-legend/>
          <div class="chart-wrapper">
            <bar-chart/>
          </div>
        </el-col>
        <el-col :xs="24" :sm="24" :lg="12">
          <echarts-legend/>
          <div class="chart-wrapper">
            <bar-chart/>
          </div>
        </el-col>
      </el-row>
    </el-card>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span style="font-weight: bold;">眼健康行为模式风险分析报告(健康因素)</span>
      </div>
      <el-row>
        <el-col :span="4">总人数</el-col>
        <el-col :span="4">男生</el-col>
        <el-col :span="4">女生</el-col>
      </el-row>
    </el-card>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span style="font-weight: bold;">眼健康行为模式风险分析报告(危险因素)</span>
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
import BarChart from './components/BarChart'
import echartsLegend from './components/echarts-legend'
export default {
  components: { UploadExcelComponent, BarChart, echartsLegend },
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
    handleSuccess(res, file) {
      console.log('res => ', res)
      console.log('file => ', file)
    },
    beforeRemove(file, fileList) {
    }
  }
}
</script>
<style scope>
  .box-container{
    padding: 10px;
  }
  .chart-wrapper{
    overflow: hidden;
  }
  .b-green{
    background:#54CE50;
  }
  .b-yellow{
    background: #F5A623;
  }
  .b-red{
    background: #D0021B;
  }
</style>
