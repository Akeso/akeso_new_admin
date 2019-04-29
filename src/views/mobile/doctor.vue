<template>
  <div>
    <el-row style="height: 300px; background-color: #409EFF;"/>
    <div style="text-align: center;padding: 20px;">
      <h2>蒙寒花</h2>
      <div>
        <span style="font-size: 16px; color: #409EFF;">10年</span>视光经验
      </div>
      <el-row style="margin-bottom: 30px;">
        <p style="float: left;">
          暂无简介
        </p>
      </el-row>
      <el-button type="primary" round style="width: 60%;" @click="handleClickBind">绑定此视光师</el-button>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
    }
  },
  methods: {
    handleClickBind() {
      this.$router.push({ path: '/mobile/sign_in' })
    }
  }
}
</script>
