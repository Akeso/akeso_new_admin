<template>
  <el-dialog :visible.sync="dialogVisible" :modal="true" :close-on-click-modal="false" title="编辑代理商权限" width="70%" top="30px">
    <el-form :model="temp" style="width: 90%; margin-left:20px;">
      <el-form-item :label-width="formLabelWidth" prop="name" label="名称">
        <el-input v-model="temp.name" autocomplete="off" clearable style="width: 50%;" placeholder="名称" disabled/>
      </el-form-item>
      <el-form-item :label-width="formLabelWidth" label="擅长业务">
        <el-checkbox-group
          v-model="temp.controlPaths">
          <el-checkbox v-for="item in pathOptions" :label="item.key" :key="item.key">{{ item.value }}</el-checkbox>
        </el-checkbox-group>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="handlerClickCancel">取消</el-button>
      <el-button type="primary" @click="handleClickSubmit">提交</el-button>
    </div>
  </el-dialog>
</template>
<script>
import { updateControlPaths } from '@/api/merchants'
// 引入通知
// import Pubsub from 'pubsub-js'
export default {
  props: {
    dialogVisible: {
      type: Boolean,
      default: true
    },
    item: {
      type: Object,
      default() {
        return {
          id: undefined,
          name: undefined,
          controlPaths: []
        }
      }
    }
  },
  data() {
    return {
      formLabelWidth: '100px',
      temp: {
        id: this.item.id,
        name: this.item.name,
        controlPaths: this.item.controlPaths
      },
      pathOptions: [
        { key: '/apt_arch', value: '屈光档案' },
        { key: '/intelligent_data', value: '行为干预' },
        { key: '/myopia', value: '预约随访' },
        { key: '/schools', value: '学校筛查' }
      ]
    }
  },
  methods: {
    handlerClickCancel() {
      // 通知父组件来隐藏当前菜单栏
      this.$emit('hidden', false)
    },
    handleClickSubmit() {
      updateControlPaths(this.temp).then(res => {
        this.$message({ message: '配置成功', type: 'success' })
        this.$emit('hidden', true)
      })
    }
  }
}
</script>
