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
        min-width="80"/>
      <el-table-column
        prop="childName"
        label="档案名称"
        min-width="180"/>
      <el-table-column
        prop="organizationTitle"
        label="所属机构"
        min-width="180"/>
      <el-table-column
        label="操作"
        min-width="180"
      >
        <template slot-scope="scope">
          <el-button type="text" size="small" @click="handleData('optometry')">验光数据</el-button>
          <el-button type="text" size="small" @click="handleData('visual')">视功能检查</el-button>
          <el-button type="text" size="small" @click="handleData('review')">复查验光</el-button>
          <el-button type="text" size="small" @click="handleData('eye')">眼部检查</el-button>
          <el-button type="text" size="small" @click="handleData('all')">查看全部</el-button>
        </template>
      </el-table-column>
    </el-table>
    <create-modal ref="modal" :user-id= "userId"/>
    <dataModal ref="dataModal" class="modal-w" />
  </div>
</template>

<script>
import { fetchList } from '@/api/eye_examinations'
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
      tableData: [{
        createFileTime: '2018-08-08',
        childName: 'name'
      }, {
        createFileTime: '2018-08-08',
        childName: 'name'
      }]
    }
  },
  created() {
    this.getList()
  },
  methods: {
    getList: function() {
      fetchList({ child_id: this.userId }).then(response => {
        console.log('response=>>', response)
        // this.tableData = response.data.items
      })
    },
    handleAddfiles: function() {
      console.log(111)
      this.$refs.modal.show()
    },
    handleData: function(str) {
      console.log(222)
      this.$refs.dataModal.show(str)
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
