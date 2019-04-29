<template>
  <div style="padding: 20px;">
    <p style="font-size: 18px;line-height: 30px;">
      <span>您已注册成为AKESO的用户，</span><br>
      <span>请您选择您需要绑定医生的孩子。</span>
    </p>
    <div>
      <el-radio v-model="radio1" label="1" style="margin: 10px;" border>王娜娜(5岁)</el-radio>
      <br>
      <el-radio v-model="radio1" label="2" style="margin: 10px;" border>备选项2</el-radio>
    </div>
    <div style="text-align: center;">
      <el-button type="primary" @click="handleClickAdd">添加孩子</el-button>
      <el-button type="primary" @click="handleClickNext">下一步</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      radio1: '1'
    }
  },
  methods: {
    handleClickAdd() {
      this.$router.push({ path: '/mobile/create_child' })
    },
    handleClickNext() {
      this.$router.push({ path: '/mobile/bind_success' })
    }
  }
}
</script>
