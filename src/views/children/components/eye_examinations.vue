<template>
  <div class="table-box">
    <div slot="header" class="clearfix">
      <span>屈光档案</span>
      <el-button type="success" class="right" @click="handleAddfiles">新增</el-button>
    </div>
    <div v-if="shengji">
      <!--正在升级中，敬请期待哦！-->
    </div>
    <el-table
      :data="tableData"
      stripe
      class="table-archives"
      style="width: 100%">
      <el-table-column
        prop="createFileTime"
        label="建档时间"
        min-width="60"/>
      <el-table-column
        prop="name"
        label="档案名称"
        min-width="100"/>
      <el-table-column
        prop="belongTo"
        label="所属机构"
        min-width="140"/>
      <el-table-column
        label="操作"
        min-width="260"
      >
        <template slot-scope="scope">
          <el-button type="text" size="small" @click="handleData('optometry', scope.row.id)">验光数据{{ scope.row.id }}</el-button>
          <el-button type="text" size="small" @click="handleData('visual')">视功能检查</el-button>
          <el-button type="text" size="small" @click="handleData('review')">复查验光</el-button>
          <el-button type="text" size="small" @click="handleData('eye')">眼部检查(主观、客观)</el-button>
          <el-button type="text" size="small" @click="handleData('all')">查看全部</el-button>
        </template>
      </el-table-column>
    </el-table>
    <create-modal ref="modal" :user-id= "userId" @handleDateList="handleList"/>
    <dataModal ref="dataModal" :user-id= "userId" class="modal-w" />
  </div>
</template>

<script>
import { fetchList, QueryOptometricData } from '@/api/eye_examinations'
import createModal from './create_modal'
import dataModal from './data_modal'
export default {
  components: {
    createModal,
    dataModal
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
      tableData: [],
      optometricData: {}
    }
  },
  created() {
    this.getList()
  },
  mounted: function() {
  },
  methods: {
    getList: function() {
      fetchList({ child_id: this.userId }).then(response => {
        console.log('response=>>', response)
        this.tableData = response.data.items
      })
    },
    handleAddfiles: function() {
      this.$refs.modal.show()
    },
    handleData: function(str, id) {
      switch (str) {
        case 'optometry':
          this.QueryOptometricData(str, id)
          break
      }
    },
    handleList: function(data) {
      console.log('监听子集传值', data)
      this.tableData = data.items
    },
    // 获取验光数据
    QueryOptometricData: function(str, id) {
      QueryOptometricData({ eye_examination_id: id }).then(response => {
        this.$refs.dataModal.show(str, id)
        const resData = response.data
        resData.eye_examination_id = id
        this.$store.commit('handleData', resData)
      })
    }
  }
}
</script>

<style scoped>
.table-archives {
  border: 1px solid #ebeef5;
  border-bottom: none;
  margin-top: 20px;
}
.table-box >>> .el-table td,.table-box >>> .el-table th.is-leaf {
  border-right: 1px solid #ebeef5;
}
.right{
  float: right;
}
.modal-w >>> .el-dialog{
  width: 80%;
  margin-top:5vh !important;
}
</style>
