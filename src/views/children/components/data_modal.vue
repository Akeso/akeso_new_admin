<template>
  <el-dialog :visible.sync="dialogFormVisible" :close-on-click-modal="false" title="创建档案名称" style="text-align:center;">
    <el-form :model="temp" style="">
      <div class="box-con">
        <optometric-data v-if="state == 'optometry'"/>
      </div>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="handleClickCancel">取 消</el-button>
      <el-button type="primary" @click="handleClickSubmit">确 定</el-button>
    </div>
  </el-dialog>
</template>

<script>
import { fetchList, updateMerchant } from '@/api/services'
import optometricData from './optometric_data'
export default {
  components: {
    optometricData
  },
  data() {
    return {
      title: '',
      dialogFormVisible: false,
      formLabelWidth: '120px',
      temp: {
        id: undefined,
        name: undefined,
        baseType: 'organization',
        serviceIds: []
      },
      loading: false,
      dataOptions: [],
      checkedOptions: [],
      state: ''
    }
  },
  created() {
  },
  methods: {
    getServiceList() {
      fetchList().then(res => {
        this.dataOptions = res.data
        console.log('data => ', this.dataOptions)
      })
    },
    handleClickCancel() {
      this.resetData()
      this.dialogFormVisible = false
    },
    handleClickSubmit() {
      updateMerchant({ id: this.temp.id, service_ids: this.temp.serviceIds }).then(res => {
        this.dialogFormVisible = false
        this.$emit('update-success')
        this.$message({
          type: 'success',
          message: '修改成功!'
        })
      })
    },
    handleChangeData(val) {
      console.log('val => ', val)
      console.log('checkBox => ', this.checkedOptions)
    },
    show(val) {
      // this.getServiceList()
      // this.temp = JSON.parse(JSON.stringify(val))
      this.state = val
      this.dialogFormVisible = true
    },
    resetData() {
      this.temp = {
        id: undefined,
        name: undefined,
        base_type: 'organization'
      }
    }
  }
}
</script>
<style>
  .el-checkbox {
    display: block;
  }
  .box-con{
    max-height: 65vh;
    overflow-y:scroll;
  }
  .icon-star{
  margin-right:2px;
}
.drag-handler{
  width: 20px;
  height: 20px;
  cursor: pointer;
}
.show-d{
  margin-top: 15px;
}
.modal-w .table-cls{
  width: 100%;
  border:.5px solid #ebeef5;
  border-left: 0.5px solid #ebeef5;
  border-top: .5px;
}
.modal-w .table-cls td,.modal-w .table-cls tr,.modal-w .table-cls th{
  border-right: 0.5px solid #ebeef5;
  border-bottom: 0.5px;
  border-left: 0.5px;
  border-top: 0.5px solid #ebeef5;
  border-color:#ebeef5;
}
.modal-w .table-cls td{
  padding: 6px;
}
.modal-w .table-cls td input{
  height: 32px;
  width:100%;
}
.modal-w .table-cls td select{
  width: 100%;
  height: 32px;
}
.tab-header{
  background: #27adff;
  color: #fff;
}
.text-left{
  text-align: left;
}
</style>
