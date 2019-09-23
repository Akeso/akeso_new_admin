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
      <!--<el-table-column-->
      <!--prop="name"-->
      <!--label="档案名称"-->
      <!--min-width="100"/>-->
      <el-table-column
        prop="doctorName"
        label="所属机构"
        min-width="140"/>
      <el-table-column
        prop="lastUpdateAt"
        label="下次复查时间"
        min-width="100"/>
      <el-table-column
        label="操作"
        min-width="260"
      >
        <template slot-scope="scope">
          <el-button type="text" size="small" @click="handleData('optometry', scope.row.id)">验光数据</el-button>
          <el-button type="text" size="small" @click="handleData('visual', scope.row.id)">视功能检查</el-button>
          <el-button type="text" size="small" @click="handleData('review', scope.row.id)">复查验光</el-button>
          <el-button type="text" size="small" @click="handleData('eye', scope.row.id)">眼部检查</el-button>
          <el-button type="text" size="small" @click="handleDataUpdate(scope.row)">下次复查时间</el-button>
          <!--<el-button type="text" size="small" @click="handleData('all', scope.row.id)">查看全部</el-button>-->
        </template>
      </el-table-column>
    </el-table>
    <create-modal ref="modal" :user-id= "userId" @handleDateList="handleList"/>
    <dataModal ref="dataModal" :user-id= "userId" class="modal-w" />
    <last-update-modal ref="updateModal" @update-success="getList"/>
  </div>
</template>

<script>
import { fetchList, QueryOptometricData, showVisualFunctionTests, showReviewOptometry, showObjectiveOcular, showSubjectiveOcular } from '@/api/eye_examinations'
import createModal from './create_modal'
import lastUpdateModal from './last_update_modal'
import dataModal from './data_modal'
export default {
  components: {
    createModal, dataModal, lastUpdateModal
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
      optometricData: {},
      resData: {
        showSubjectiveOcular: { }
      }
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
        case 'visual':
          this.showVisualFunctionTests(str, id)
          break
        case 'review':
          this.showReviewOptometry(str, id)
          break
        case 'eye':
          this.showObjectiveOcular(str, id)
          // this.showSubjectiveOcular(str, id)
          break
      }
    },
    handleList: function(data) {
      console.log('监听子集传值', data)
      this.tableData = data.items
    },
    handleDataUpdate: function(val) {
      this.$refs['updateModal'].show(val)
    },
    // 获取验光数据
    QueryOptometricData: function(str, id) {
      QueryOptometricData({ eye_examination_id: id }).then(response => {
        this.$refs.dataModal.show(str, id)
        const resData = response.data
        resData.eye_examination_id = id
        this.$store.commit('handleData', resData)
      })
    },
    // 视功能检查
    showVisualFunctionTests: function(str, id) {
      showVisualFunctionTests({ eye_examination_id: id }).then(response => {
        this.$refs.dataModal.show(str, id)
        const resData = response.data
        resData.eye_examination_id = id
        resData.isStereoTests = resData.isStereoTests ? resData.isStereoTests : false
        this.$store.commit('handleData', resData)
      })
    },
    // 获取复查验光 reviewOptometry
    showReviewOptometry: function(str, id) {
      showReviewOptometry({ eye_examination_id: id }).then(response => {
        this.$refs.dataModal.show(str, id)
        const resData = response.data
        resData.eye_examination_id = id
        this.$store.commit('handleData', resData)
      })
    },
    // 主观检查 showSubjectiveOcular
    showSubjectiveOcular: function(str, id) {
      showSubjectiveOcular({ eye_examination_id: id }).then(response => {
        this.$refs.dataModal.show(str, id)
        const resData = response.data
        resData.eye_examination_id = id
        this.$store.commit('handleSubject', resData)
      })
    },
    // 客观检查showObjectiveOcular
    showObjectiveOcular: function(str, id) {
      showObjectiveOcular({ eye_examination_id: id }).then(response => {
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
