<template>
  <el-dialog :visible.sync="dialogVisible" :modal="true" :close-on-click-modal="false" title="修改医生信息" width="70%">
    <el-form ref="ruleForm" :model="temp" :rules="rules" style="width: 90%; margin-left:20px;">
      <el-form-item :label-width="formLabelWidth" label="名称" prop="name">
        <el-input v-model="temp.name" class="filter-item" placeholder="名称" style="width: 50%;"/>
      </el-form-item>
      <el-form-item :label-width="formLabelWidth" label="账户类型">
        <el-select v-model="temp.baseType" placeholder="请选择" style="width: 130px;">
          <el-option
            v-for="item in base_types"
            :key="item.key"
            :label="item.value"
            :value="item.key"/>
        </el-select>
      </el-form-item>
      <el-form-item :label-width="formLabelWidth" label="负责人" prop="gender">
        <el-input v-model="temp.principal" class="filter-item" placeholder="负责人" style="width: 50%;"/>
      </el-form-item>
      <el-form-item :label-width="formLabelWidth" prop="phone" label="联系方式">
        <el-input v-model="temp.phone" clearable style="width: 50%;"/>
      </el-form-item>
      <el-form-item :label-width="formLabelWidth" prop="email" label="登录账号">
        <el-input v-model="temp.email" clearable style="width: 50%;"/>
      </el-form-item>
      <el-form-item :label-width="formLabelWidth" prop="phone" label="详细地址">
        <el-input v-model="temp.address" clearable style="width: 50%;"/>
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
const base_types = [
  { key: 'organization', value: '机构' },
  { key: 'doctor', value: '医生' }
]
export default {
  data() {
    return {
      dialogVisible: false,
      formLabelWidth: '100px',
      temp: {
        id: undefined,
        name: undefined,
        baseType: 'organization',
        principal: undefined,
        phone: undefined,
        email: undefined,
        start_work_date: undefined,
        description: undefined,
        address: undefined
      },
      rules: {
        name: [
          { required: true, message: '请输入名称', trigger: 'blur' }
        ],
        email: [
          { required: true, message: '请输入登录账号', trigger: 'blur' }
        ]
      },
      base_types: base_types
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
      console.log('temp => ', this.temp)
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
