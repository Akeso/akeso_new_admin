<template>
  <div>
    <div style="padding: 20px;background-color: #151e41;">
      <h3 style="margin-left: 20px;color: white;">儿童眼视光专家</h3>
      <a href="http://a.app.qq.com/o/simple.jsp?pkgname=cn.akeso.akesokid">
        <el-button type="primary" style="width: 100%;">下载APP</el-button>
      </a>
    </div>
    <div style="text-align: center;padding: 20px;">
      <h2>{{ user.name }}</h2>
      <div>
        <p style="font-size: 16px;"><span style="margin-right: 10px;">女</span>5岁</p>
      </div>
    </div>
    <div style="border-radius: 6px;border: 1px solid #c4c4c4;margin: 20px;padding: 10px;">
      <p style="font-size: 18px;">专属视光师</p>
      <br>
      <span style="font-size: 22px;">{{ user.doctorName }}</span>
      <a href="http://a.app.qq.com/o/simple.jsp?pkgname=cn.akeso.akesokid">
        <el-button type="primary" style="width: 100%;margin-top: 10px;">联系视光师</el-button>
      </a>
    </div>
  </div>
</template>

<script>
import { fetchItem } from '@/api/mobile/children'
export default {
  data() {
    return {
      child_id: this.$route.query.child_id,
      user: {}
    }
  },
  created() {
    this.getData()
  },
  methods: {
    getData() {
      fetchItem({ child_id: this.child_id }).then(response => {
        this.user = response.data
      })
    }
  }
}
</script>
