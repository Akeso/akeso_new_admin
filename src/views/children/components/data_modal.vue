<template>
  <el-dialog :visible.sync="dialogFormVisible" :close-on-click-modal="false" title="创建档案名称" width="50%;" style="text-align:center;">
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
    max-height: 400px;
    overflow-y:scroll;
  }
</style>
