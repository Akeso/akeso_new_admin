<template>
  <div style="padding: 20px;">
    <p style="font-size: 18px;line-height: 30px;">
      <span>您已注册成为AKESO的用户，</span><br>
      <span>请您选择您需要绑定医生的孩子。</span>
    </p>
    <el-alert v-if="errorVisible" :title="errorText" type="error" style="margin-bottom: 10px;"/>
    <el-radio-group v-model="child_id" @change="changeSelectChild">
      <div v-for="item in children" :key="item.id">
        <el-radio :disabled="item.bindState" :label="item.id" style="margin: 10px;" border>{{ item.name }}({{ item.age }}岁) {{ item.bindState ? '已绑定' : '' }}</el-radio>
        <br>
      </div>
    </el-radio-group>

    <div style="text-align: center;">
      <el-button type="primary" @click="handleClickAdd">添加孩子</el-button>
      <el-button type="primary" @click="handleClickNext">下一步</el-button>
    </div>
  </div>
</template>

<script>
import { fetchList, bindDoctor } from '@/api/mobile/children'
export default {
  data() {
    return {
      errorVisible: false,
      errorText: '请选择绑定儿童',
      children: [],
      child_id: undefined,
      user_id: this.$route.query.user_id,
      doctor_id: this.$route.query.doctor_id
    }
  },
  created() {
    this.getList()
  },
  methods: {
    getList() {
      this.children = fetchList({ user_id: this.user_id }).then(response => {
        this.children = response.data.items
      })
    },
    handleClickAdd() {
      this.$router.push({ path: '/mobile/create_child', query: { user_id: this.user_id, doctor_id: this.doctor_id }})
    },
    handleClickNext() {
      if (this.child_id === undefined) {
        this.errorVisible = true
        return
      }
      bindDoctor({ child_id: this.child_id, doctor_id: this.doctor_id }).then(response => {
        this.$confirm('绑定成功?', '提示', {
          confirmButtonText: '下一步',
          cancelButtonText: '',
          type: 'success'
        }).then(() => {
          this.$router.push({ path: '/mobile/bind_success', query: { child_id: this.child_id }})
        }).catch(() => {
        })
      })
    },
    changeSelectChild(val) {
      this.errorVisible = false
    }
  }
}
</script>
