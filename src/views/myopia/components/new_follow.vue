<template>
  <el-dialog :visible.sync="dialogVisible" :modal="true" :close-on-click-modal="false" title="随访备注" width="70%">
    <el-form label-position="right" label-width="100px" style="width: 60%; margin-left:80px;">
      <el-form-item label="随访儿童">
        {{ childName }}
      </el-form-item>
      <el-form-item label="备注">
        <el-input v-model="content" class="filter-item" type="textarea" placeholder="输入备注"/>
      </el-form-item>
      <el-form-item label="随访人签名">
        <el-input v-model="operater" class="filter-item" placeholder="输入随访人"/>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="handlerClickCancel">取消</el-button>
      <el-button type="primary" @click="handleClickSubmit">提交</el-button>
    </div>
  </el-dialog>
</template>
<script>
import { createFollow } from '@/api/followers'

export default {
  data() {
    return {
      dialogVisible: false,
      childName: undefined,
      child_id: undefined,
      report_id: undefined,
      content: undefined,
      operater: undefined
    }
  },
  methods: {
    handlerClickCancel() {
      this.content = undefined
      this.operater = undefined
      this.dialogVisible = false
    },
    handleShow(val) {
      this.child_id = val.childId
      this.childName = val.childName
      this.report_id = val.id
      this.dialogVisible = true
    },
    handleClickSubmit() {
      createFollow({ child_id: this.child_id, report_id: this.report_id, content: this.content, operater: this.operater }).then(response => {
        this.$emit('createSuccess')
        this.dialogVisible = false
      })
    }
  }
}
</script>
