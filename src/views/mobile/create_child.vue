<template>
  <div style="padding: 20px;">
    <p style="font-size: 22px;">
      我们已用短信方式告诉您登录信息，您还需填写孩子信息，方便医生沟通。
    </p>
    <el-form :model="temp" label-width="80px">
      <el-form-item label="孩子姓名">
        <el-input v-model="temp.child_name"/>
      </el-form-item>
      <el-form-item label="性别">
        <el-select v-model="temp.gender" class="filter-item">
          <el-option v-for="item in genderOptions" :key="item.key" :label="item.display_name" :value="item.key"/>
        </el-select>
      </el-form-item>
      <el-form-item label="出生日期">
        <el-date-picker
          v-model="temp.birthday"
          type="date"
          placeholder="选择日期"/>
      </el-form-item>
    </el-form>
    <div>
      <el-button type="primary" style="width: 100%;margin-top: 10px;" @click="handleClickSave">保存</el-button>
    </div>
  </div>
</template>
<script>
const genderOptions = [
  { key: 'male', display_name: '男' },
  { key: 'female', display_name: '女' }
]
export default {
  data() {
    return {
      genderOptions: genderOptions,
      temp: {
        child_name: undefined,
        gender: undefined,
        birthday: undefined
      }
    }
  },
  methods: {
    handleClickSave() {
      this.$router.push({ path: '/mobile/bind_success' })
    }
  }
}
</script>
