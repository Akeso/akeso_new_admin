<template>
  <div>
    <el-row style="height: 300px; background-color: #409EFF;"/>
    <div style="text-align: center;padding: 20px;">
      <h2>{{ doctor.name }}</h2>
      <div>
        <span style="font-size: 16px; color: #409EFF;">{{ doctor.workingYears }}年</span>视光经验
      </div>
      <el-row style="margin-bottom: 30px;">
        <p style="float: left;">
          {{ doctor.description }}
        </p>
      </el-row>
      <el-button type="primary" round style="width: 60%;" @click="handleClickBind">绑定此视光师</el-button>
    </div>
  </div>
</template>

<script>
import { fetchItem } from '@/api/mobile/doctors'
export default {
  data() {
    return {
      id: this.$route.query.id,
      doctor: {
        id: undefined,
        workingYears: undefined,
        name: undefined,
        description: undefined
      }
    }
  },
  created() {
    this.getData()
  },
  methods: {
    handleClickBind() {
      this.$router.push({ path: '/mobile/sign_in', query: { doctor_id: this.id }})
    },
    getData() {
      fetchItem({ id: this.id }).then(response => {
        this.doctor = response.data
      })
    }
  }
}
</script>
