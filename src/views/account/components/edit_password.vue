<template>
  <!-- Table -->
  <el-dialog :visible.sync="dialogVisible" title="修改密码">
    <el-form :model="temp" style="width: 90%; margin-left:20px;">
      <el-form-item :label-width="formLabelWidth" prop="password" label="登录密码">
        <el-input v-model="temp.password" type="password" style="width: 50%;"/>
      </el-form-item>
      <el-form-item :label-width="formLabelWidth" prop="password_confirmation" label="确认密码">
        <el-input v-model="temp.password_confirmation" type="password" style="width: 50%;"/>
        <el-alert v-if="passwork_valid" title="两次输入密码不一致" type="error"/>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button type="primary" @click="handleClickSubmit">提交</el-button>
      <el-button @click="dialogVisible = false">取消</el-button>
    </div>
  </el-dialog>
</template>

<script>
import { updateData } from '@/api/accounts'
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      formLabelWidth: '120px',
      dialogVisible: false,
      value: undefined,
      loading: false,
      passwork_valid: false,
      temp: {
        password: undefined,
        password_confirmation: undefined
      }
    }
  },
  computed: {
    ...mapGetters([
      'id',
      'name'
    ])
  },
  methods: {
    handleShow() {
      this.value = this.name
      this.dialogVisible = true
    },
    handleClickSubmit() {
      if (this.temp.password !== this.temp.password_confirmation) {
        this.passwork_valid = true
        return
      }
      updateData({ id: this.id, password: this.temp.password, password_confirmation: this.temp.password_confirmation }).then(response => {
        console.log('res => ', response)
        this.$store.commit('updateUserInfo', response.data)
        this.$emit('update-success', this.value)
        this.dialogVisible = false
      })
    }
  }
}
</script>
