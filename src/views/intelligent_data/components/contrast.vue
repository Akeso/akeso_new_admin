<template>
  <div class="container">
    <el-row :gutter="20">
      <el-col :span="12">
        选择日期
        <el-date-picker
          v-model="value1"
          type="date"
          placeholder="选择日期"/>
      </el-col>
      <el-col :span="6">
        <el-breadcrumb separator="/" class="breadcrumb">
          <el-breadcrumb-item><a href="/">近一周</a></el-breadcrumb-item>
          <el-breadcrumb-item>近一个月</el-breadcrumb-item>
          <el-breadcrumb-item>近三个月</el-breadcrumb-item>
        </el-breadcrumb>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value1: ''
    }
  }
}
</script>

<style scoped>
  .container {
    padding: 20px 5px 10px 5px;
  }
  .breadcrumb {
    line-height: 35px;
  }
  .table-cls {
    margin-top: 20px;
    width: 100%;
  }
  .td-50 {
    width: 50%;
  }
  .td-20 {
    width: 20%;
  }
</style>
