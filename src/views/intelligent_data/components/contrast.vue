<template>
  <div class="container">
    <el-row :gutter="20">
      <el-col :span="12">
        选择日期
        <el-select v-model="selectDate" placeholder="请选择">
          <el-option
            v-for="item in dateOptions"
            :key="item.key"
            :label="item.label"
            :value="item.key"/>
        </el-select>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="12">
        条件选择
        <el-select v-model="selectCondition" placeholder="请选择">
          <el-option
            v-for="item in conditionOptions"
            :key="item.key"
            :label="item.label"
            :value="item.key"/>
        </el-select>
      </el-col>
      <el-button class="filter-item" type="primary" icon="el-icon-search" @click="handleFilter">查询</el-button>
    </el-row>
  </div>
</template>
<script>
const dateOptions = [
  { key: 'first', label: '近一周' },
  { key: 'second', label: '近一个月' },
  { key: 'third', label: '近三个月' }
]
const conditionOptions = [
  { key: 'area', label: '区域对比' },
  { key: 'gender', label: '性别对比' },
  { key: 'age', label: '年龄对比' }
]
export default {
  data() {
    return {
      dateOptions,
      conditionOptions,
      selectDate: 'first',
      selectCondition: 'area'
    }
  },
  methods: {
    handleFilter: function() {
    }
  }
}
</script>

<style scoped>
  .container {
    padding: 10px 5px 10px 5px;
  }
  .el-row {
    margin-top: 10px;
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
