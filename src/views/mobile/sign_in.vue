<template>
  <div>
    <img style="width: 100%;" src="@/assets/images/sign_up.png" alt="404">
    <div style="padding: 20px;">
      <p>请您先注册为AKESO用户，方便您随时查看绑定医生。</p>
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
export default {
  data() {
    return {
      imageUrl: '',
      btnVisible: true,
      temp: {
        phone: undefined,
        code: undefined
      },
      countDown: 60
    }
  },
  methods: {
    handleClickSend() {
      console.log('aaaaaaaaa')
      this.btnVisible = false
      this.setTimeDown()
    },
    handleClickLogin() {
      this.$router.push({ path: '/mobile/child_select' })
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
