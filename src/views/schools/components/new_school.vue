<template>
  <el-dialog :visible.sync="dialogFormVisible" :close-on-click-modal="false" title="新增学校" width="70%" top="30px">
    <el-form :model="temp" style="width: 90%; margin-left:20px;">
      <el-form-item :label-width="formLabelWidth" label="学校名称">
        <el-input v-model="temp.name" clearable/>
      </el-form-item>
      <el-form-item :label-width="formLabelWidth" label="学校类别">
        <el-select v-model="temp.level" placeholder="请选择">
          <el-option v-for="item in schoolOptions" :key="item.value" :label="item.value" :value="item.key"/>
        </el-select>
      </el-form-item>

      <el-form-item :label-width="formLabelWidth" label="地区">
        <el-cascader
          v-model="temp.address"
          :options="areaList"/>
      </el-form-item>

    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="handleClickCancel">取 消</el-button>
      <el-button type="primary" @click="handleClickSubmit">确 定</el-button>
    </div>
  </el-dialog>
</template>

<script>
import { createItem } from '@/api/schools'
import areaList from '@/utils/area.js'
const schoolOptions = [
  { key: 'primary', value: '小学' },
  { key: 'junior', value: '初中' }
]
export default {
  data() {
    return {
      dialogFormVisible: false,
      formLabelWidth: '120px',
      schoolOptions: schoolOptions,
      areaList: areaList,
      temp: {
        name: undefined,
        level: undefined,
        address: []
      },
      loading: false
    }
  },
  computed: {
  },
  created() {
  },
  methods: {
    handleClickCancel() {
      this.resetData()
      this.dialogFormVisible = false
    },
    handleClickSubmit() {
      createItem(this.temp).then(res => {
        this.resetData()
        this.dialogFormVisible = false
        this.$emit('create-success')
      })
    },
    show() {
      this.dialogFormVisible = true
    },
    resetData() {
      this.temp = {
        name: undefined
      }
    }
  }
}
</script>
<style scoped>
  .el-input {
    width: 200px;
  }
</style>
