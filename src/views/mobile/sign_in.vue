<template>
  <div>
    <img style="width: 100%;" src="@/assets/images/sign_up.png" alt="404">
    <div style="padding: 20px;">
      <p>请您先注册为AKESO用户，方便您随时查看绑定医生。</p>
      <el-alert v-if="errorVisible" :title="errorText" type="error" style="margin-bottom: 10px;"/>
      <el-form :model="temp" >
        <el-form-item>
          <el-input v-model="temp.phone" placeholder="输入手机号"/>
        </el-form-item>
        <el-form-item>
          <el-input v-model="temp.code" placeholder="输入验证码"/>
          <el-button v-if="btnVisible" type="primary" @click="handleClickSend">发送验证码</el-button>
          <el-tag v-else style="font-size: 18px;">{{ countDown }}秒</el-tag>
        </el-form-item>
      </el-form>
      <div style="text-align: center;">
        <el-button type="primary" style="width: 50%;" @click="handleClickLogin">登录</el-button>
      </div>
    </div>
  </div>
</template>
<script>
import { sendSignUpIn } from '@/api/mobile/codes'
import { createItem } from '@/api/mobile/users'
export default {
  data() {
    return {
      user_id: undefined,
      btnVisible: true,
      temp: {
        phone: undefined,
        code: undefined
      },
      countDown: 60,
      doctor_id: this.$route.query.doctor_id,
      errorVisible: false,
      errorText: undefined
    }
  },
  methods: {
    handleClickSend() {
      sendSignUpIn(this.temp).then(response => {
        this.btnVisible = false
        this.setTimeDown()
      })
    },
    handleClickLogin() {
      if (this.temp.phone === undefined || this.temp.phone === '') {
        this.errorVisible = true
        this.errorText = '手机号不能为空'
        return
      }
      if (this.temp.code === undefined || this.temp.code === '') {
        this.errorVisible = true
        this.errorText = '验证码不能为空'
        return
      }
      createItem(this.temp).then(response => {
        this.user_id = response.data.userId
        this.$router.push({ path: '/mobile/child_select', query: { doctor_id: this.doctor_id, user_id: this.user_id }})
      })
    },
    setTimeDown() {
      this.count = this.countDown - 1
      if (this.countDown === 0) {
        this.btnVisible = true
        this.countDown = 60
      } else {
        this.countDown = this.countDown - 1
      }
      const _self = this
      setTimeout(() => {
        _self.setTimeDown()
      }, 1000)
    }
  }
}
</script>
<style scoped>
  .el-input--medium {
    width: 60%;
  }
</style>
