<template>
  <div style="padding: 20px;">
    <p style="font-size: 22px;">
      我们已用短信方式告诉您登录信息，您还需填写孩子信息，方便医生沟通。
    </p>
    <el-alert v-if="errorVisible" :title="errorText" type="error" style="margin-bottom: 10px;"/>
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
import { createItem } from '@/api/mobile/children'
const genderOptions = [
  { key: 'male', display_name: '男' },
  { key: 'female', display_name: '女' }
]
export default {
  data() {
    return {
      genderOptions: genderOptions,
      errorVisible: false,
      errorText: '请输入姓名',
      child_id: undefined,
      temp: {
        child_name: undefined,
        gender: undefined,
        birthday: undefined,
        user_id: this.$route.query.user_id,
        doctor_id: this.$route.query.doctor_id
      }
    }
  },
  watch: {
    'temp.child_name': function(newVal, oldVal) {
      if (newVal !== '' && newVal !== undefined) {
        this.errorVisible = false
      }
    }
  },
  methods: {
    handleClickSave() {
      if (this.temp.child_name === undefined || this.temp.child_name === '') {
        this.errorVisible = true
        return
      }
      createItem(this.temp).then(response => {
        this.child_id = response.data.childId
        this.$router.push({ path: '/mobile/bind_success', query: { child_id: this.child_id }})
      })
      // this.$router.push({ path: '/mobile/bind_success' })
    }
  }
}
</script>
<style scoped>
  .el-input--medium {
    width: 70%;
  }
</style>
