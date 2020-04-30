<template>
  <el-dialog :visible.sync="dialogVisible" :modal="true" :close-on-click-modal="false" :close-on-press-escape="false" :show-close="false" title="擅长业务" width="70%" top="30px">
    <el-form :model="temp" style="width: 90%; margin-left:20px;">
      <el-form-item :label-width="formLabelWidth" prop="name" label="名称">
        <el-input v-model="temp.name" autocomplete="off" clearable style="width: 50%;" placeholder="机构/医生名称" disabled/>
      </el-form-item>
      <el-form-item :label-width="formLabelWidth" label="擅长业务">
        <el-checkbox-group v-model="temp.serviceIds">
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
export default {
  props: {
    dialogVisible: {
      type: Boolean,
      default: true
    },
    item: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {
      formLabelWidth: '120px',
      temp: {
        id: this.item.id,
        name: this.item.name,
        baseType: 'organization',
        serviceIds: this.item.serviceIds
      },
      loading: false,
      dataOptions: [],
      checkedOptions: []
    }
  },
  created() {
    this.getServiceList()
  },
  methods: {
    getServiceList() {
      fetchList().then(res => {
        this.dataOptions = res.data
      })
    },
    handleClickCancel() {
      this.$emit('hidden', false)
    },
    handleClickSubmit() {
      updateMerchant({ id: this.temp.id, service_ids: this.temp.serviceIds }).then(res => {
        this.$emit('hidden', true)
        this.$message({ type: 'success', message: '修改成功!' })
      })
    }
  }
}
</script>
<style>
  .el-checkbox {
    display: block;
  }
</style>
