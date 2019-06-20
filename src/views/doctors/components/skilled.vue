<template>
  <el-dialog :visible.sync="dialogFormVisible" :close-on-click-modal="false" title="擅长业务" width="70%">
    <el-form :model="temp" style="width: 90%; margin-left:20px;">
      <el-form-item :label-width="formLabelWidth" prop="name" label="名称">
        <el-input v-model="temp.name" autocomplete="off" clearable style="width: 50%;" placeholder="机构/医生名称" disabled/>
      </el-form-item>
      <el-form-item :label-width="formLabelWidth" label="擅长业务">
        <el-checkbox-group
          v-model="temp.serviceIds"
          @change="handleChangeData">
          <el-checkbox v-for="item in dataOptions" :label="item.alias" :key="item.alias">{{ item.name }}</el-checkbox>
        </el-checkbox-group>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="handleClickCancel">取 消</el-button>
      <el-button type="primary" @click="handleClickSubmit">确 定</el-button>
    </div>
  </el-dialog>
</template>

<script>
import { fetchList, updateMerchant } from '@/api/services'
// import { createItem } from '@/api/doctors'
export default {
  data() {
    return {
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
      checkedOptions: []
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
      this.getServiceList()
      this.temp = JSON.parse(JSON.stringify(val))
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
</style>
