<template>
  <div>
    <div v-if="shengji">
      正在升级中，敬请期待哦！
      <el-button type="success" @click="handleAddfiles">新增</el-button>
    </div>
    <el-table
      v-else
      :data="tableData"
      stripe
      style="width: 100%">
      <el-table-column
        prop="createFileTime"
        label="建档时间"
        min-width="180"/>
      <el-table-column
        prop="childName"
        label="儿童名称"
        min-width="180"/>
      <el-table-column
        prop="organizationTitle"
        label="机构名称"
        min-width="180"/>
      <el-table-column
        prop="belongTo"
        label="归属"
        min-width="180"/>
      <el-table-column
        label="操作"
        min-width="180">
        <template slot-scope="scope">
          <el-button type="text" size="small">查看</el-button>
        </template>
      </el-table-column>
    </el-table>
    <create-modal ref="modal" />
  </div>
</template>

<script>
import { fetchList } from '@/api/eye_examinations'
import createModal from './create_modal'
export default {
  components: {
    createModal
  },
  props: {
    userId: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      shengji: true,
      tableData: []
    }
  },
  created() {
    this.getList()
  },
  methods: {
    getList: function() {
      fetchList({ child_id: this.userId }).then(response => {
        this.tableData = response.data.items
      })
    },
    handleAddfiles: function() {
      console.log(111)
      this.$refs.modal.show()
    }
  }
}
</script>
