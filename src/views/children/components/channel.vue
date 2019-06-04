<template>
  <el-dialog :visible.sync="dialogVisible" :modal="true" :close-on-click-modal="false" title="聊天" width="60%">
    <div style="height: 300px;overflow-y: scroll; padding: 20px;background-color: rgba(196,196,196,0.23);">
      <el-row v-for="item in data" :style="{ textAlign: item.source === 'merchant' ? 'right' : 'left' }" :key="item.id" :gutter="20">
        <el-tag type="success">{{ item.source === 'merchant' ? merchantName : childName }}</el-tag>
        <span>{{ item.createdAt }}</span>
        <div>{{ item.content }}</div>
      </el-row>
    </div>
    <el-input v-model="content" type="textarea" style="width: 100%;margin-top: 20px;"/>
    <div slot="footer" class="dialog-footer">
      <el-button @click="handlerClickCancel">取消</el-button>
      <el-button type="primary" @click="handleClickSubmit">发送</el-button>
    </div>
  </el-dialog>
</template>
<script>
import { fetchLogs, createItem } from '@/api/channel_logs'

export default {
  props: {
    childId: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      dialogVisible: false,
      formLabelWidth: '100px',
      content: '',
      data: [],
      merchantName: '',
      childName: ''
    }
  },
  created() {
  },
  methods: {
    handlerClickCancel() {
      this.dialogVisible = false
    },
    handleShow(val) {
      fetchLogs({ child_id: this.childId }).then(res => {
        this.merchantName = res.data.merchantName
        this.childName = res.data.childName
        this.data = res.data.items
        this.dialogVisible = true
      })
    },
    handleClickSubmit() {
      console.log('提交')
      if (this.content) {
        createItem({ child_id: this.childId, content: this.content }).then(res => {
          this.data = res.data.items
          this.merchantName = res.data.merchantName
          this.childName = res.data.childName
          this.content = ''
        })
      }
    }
  }
}
</script>
