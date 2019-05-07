<template>
  <el-dialog :visible.sync="dialogVisible" :modal="true" :close-on-click-modal="false" title="修改医生信息" width="70%">
    <el-form ref="ruleForm" :model="temp" :rules="rules" style="width: 90%; margin-left:20px;">
      <el-form-item :label-width="formLabelWidth" label="姓名" prop="name">
        <el-input v-model="temp.name" class="filter-item" placeholder="姓名" style="width: 50%;"/>
      </el-form-item>
      <el-form-item :label-width="formLabelWidth" label="性别" prop="gender">
        <el-select v-model="temp.gender" class="filter-item">
          <el-option v-for="item in genderOptions" :key="item.key" :label="item.display_name" :value="item.key"/>
        </el-select>
      </el-form-item>
      <el-form-item :label-width="formLabelWidth" prop="phone" label="联系方式">
        <el-input v-model="temp.phone" clearable style="width: 50%;"/>
      </el-form-item>
      <el-form-item :label-width="formLabelWidth" prop="email" label="登录邮箱">
        <el-input v-model="temp.email" clearable style="width: 50%;"/>
      </el-form-item>
      <el-form-item :label-width="formLabelWidth" label="简介">
        <el-input v-model="temp.description" type="textarea" style="width: 60%;"/>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="handlerClickCancel">取消</el-button>
      <el-button type="primary" @click="handleClickSubmit">提交</el-button>
    </div>
  </el-dialog>
</template>
<script>
import { updateItem } from '@/api/doctors'
const genderOptions = [
  { key: 'male', display_name: '男' },
  { key: 'female', display_name: '女' }
]
export default {
  data() {
    return {
      genderOptions,
      dialogVisible: false,
      formLabelWidth: '100px',
      temp: {
        id: undefined,
        name: undefined,
        gender: undefined,
        phone: undefined,
        email: undefined,
        start_work_date: undefined,
        description: undefined
      },
      rules: {
        name: [
          { required: true, message: '请输入姓名', trigger: 'blur' }
        ],
        email: [
          { required: true, message: '请输入登录账号', trigger: 'blur' }
        ]
      }
    }
  },
  created() {
  },
  methods: {
    handlerClickCancel() {
      this.dialogVisible = false
    },
    handleShow(val) {
      this.temp = JSON.parse(JSON.stringify(val))
      // this.temp = val
      this.dialogVisible = true
    },
    handleClickSubmit() {
      this.$refs['ruleForm'].validate((valid) => {
        if (valid) {
          this.$confirm('确定修改该账号信息吗？, 是否继续?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
            updateItem(this.temp).then(response => {
              this.dialogVisible = false
              this.$emit('update-success')
              this.$message({
                type: 'success',
                message: '修改成功!'
              })
            })
          }).catch(() => {})
        } else {
          return false
        }
      })
    }
  }
}
</script>
