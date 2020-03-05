<template>
  <el-dialog :visible.sync="dialogFormVisible" :close-on-click-modal="false" title="新增筛查" width="70%" top="30px">
    <el-form :model="temp" style="width: 90%; margin-left:20px;">
      <el-form-item :label-width="formLabelWidth" label="本次筛查名称" style="width: 400px;">
        <el-input v-model="temp.name" clearable/>
      </el-form-item>
      <el-form-item :label-width="formLabelWidth" label="学校">
        <el-select v-model="temp.school_id" placeholder="请选择" style="width: 240px;">
          <el-option
            v-for="item in schools"
            :key="item.name"
            :label="item.name"
            :value="item.id"/>
        </el-select>
      </el-form-item>
      <el-form-item :label-width="formLabelWidth" label="年级">
        <el-select v-model="temp.class_value" placeholder="请选择" style="width: 120px;">
          <el-option
            v-for="item in [1, 2, 3, 4, 5, 6]"
            :key="item"
            :label="item"
            :value="item"/>
        </el-select>年级
      </el-form-item>
      <el-form-item :label-width="formLabelWidth" label="班级">
        <el-select v-model="temp.grade_value" placeholder="请选择" style="width: 120px;">
          <el-option
            v-for="item in [1, 2, 3, 4, 5, 6, 7, 8, 9]"
            :key="item"
            :label="item"
            :value="item"/>
        </el-select>班
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="handleClickCancel">取 消</el-button>
      <el-button type="primary" @click="handleClickSubmit">确 定</el-button>
    </div>
  </el-dialog>
</template>

<script>
import { fetchList } from '@/api/schools'
import { updateItem } from '@/api/examines'
export default {
  data() {
    return {
      dialogFormVisible: false,
      formLabelWidth: '120px',
      temp: {
        id: undefined,
        name: undefined,
        school_id: undefined,
        class_value: undefined,
        grade_value: undefined
      },
      schools: [],
      num_values: [1, 2, 3, 4, 5, 6],
      loading: false
    }
  },
  created() {
    this.getSchools()
  },
  methods: {
    getSchools() {
      fetchList().then(res => {
        this.schools = res.data.items
      })
    },
    handleClickCancel() {
      this.resetData()
      this.dialogFormVisible = false
    },
    handleClickSubmit() {
      updateItem(this.temp).then(response => {
        this.resetData()
        this.dialogFormVisible = false
        this.$emit('update-success')
      })
    },
    show(val) {
      this.temp = val
      console.log('aaa => ', this.temp)
      this.dialogFormVisible = true
    },
    resetData() {
      this.temp = {
        id: undefined,
        class_value: undefined,
        grade_value: undefined
      }
    }
  }
}
</script>
