<template>
  <el-dialog :visible.sync="dialogVisible" :modal="true" :close-on-click-modal="false" title="修改代理商账号" width="70%" top="30px">
    <el-form ref="ruleForm" :model="temp" :rules="rules" style="width: 90%; margin-left:20px;">
      <el-form-item :label-width="formLabelWidth" label="名称" prop="name">
        <el-input v-model="temp.name" class="filter-item" placeholder="名称" style="width: 50%;"/>
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
      <el-form-item :label-width="formLabelWidth" prop="password" label="登录密码">
        <el-input v-model="temp.password" type="password" style="width: 50%;"/>
      </el-form-item>
      <el-form-item :label-width="formLabelWidth" prop="password_confirmation" label="确认密码">
        <el-input v-model="temp.password_confirmation" type="password" style="width: 50%;"/>
        <el-alert v-if="passwork_valid" title="两次输入密码不一致" type="error"/>
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
import { updateItem } from '@/api/agents'
export default {
  data() {
    return {
      dialogVisible: false,
      formLabelWidth: '100px',
      passwork_valid: false,
      temp: {
        id: undefined,
        name: undefined,
        baseType: 'agent',
        principal: undefined,
        phone: undefined,
        email: undefined,
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
      this.dialogVisible = true
    },
    handleClickSubmit() {
      this.$refs['ruleForm'].validate((valid) => {
        if (valid) {
          if (this.temp.password !== this.temp.password_confirmation) {
            this.passwork_valid = true
            return
          }
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
