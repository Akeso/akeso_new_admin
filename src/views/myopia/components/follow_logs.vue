<template>
  <el-dialog :visible.sync="dialogVisible" :modal="true" title="随访记录" width="70%">
    <el-table :data="list">
      <el-table-column property="name" label="姓名" min-width="60"/>
      <el-table-column property="content" label="备注" min-width="100"/>
      <el-table-column property="createdAt" label="随访时间" min-width="80"/>
      <el-table-column property="operater" label="随访人" min-width="60"/>
    </el-table>
  </el-dialog>
</template>
<script>
import { fetchFollowList } from '@/api/followers'

export default {
  data() {
    return {
      dialogVisible: false,
      list: [],
      child_id: undefined
    }
  },
  methods: {
    handlerClickCancel() {
      this.list = []
      this.dialogVisible = false
    },
    handleShow(val) {
      this.child_id = val.childId
      this.getData()
      this.dialogVisible = true
    },
    getData() {
      fetchFollowList({ child_id: this.child_id }).then(response => {
        this.list = response.data
      })
    }
  }
}
</script>
