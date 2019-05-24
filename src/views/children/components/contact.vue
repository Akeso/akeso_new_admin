<template>
  <el-dialog :visible.sync="dialogVisible" :modal="true" :close-on-click-modal="false" title="聊天" width="60%">
    <div style="height: 300px;overflow-y: scroll; padding: 20px;background-color: rgba(196,196,196,0.23);">
      <el-row v-for="item in data" :style="{ textAlign: item.doctorSend ? 'right' : 'left' }" :key="item.id" :gutter="20">
        <el-tag type="success">{{ item.doctorSend ? item.doctorName : item.childName }}</el-tag>
        <span>2019-05-24 13:21:11</span>
        <div>{{ item.title }}</div>
      </el-row>
    </div>
    <el-input v-model="question" type="textarea" style="width: 100%;margin-top: 20px;"/>
    <div slot="footer" class="dialog-footer">
      <el-button @click="handlerClickCancel">取消</el-button>
      <el-button type="primary" @click="handleClickSubmit">发送</el-button>
    </div>
  </el-dialog>
</template>
<script>
import { fetchLogs, sendToChild } from '@/api/messages'

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
      question: '',
      data: []
    }
  },
  created() {
  },
  methods: {
    handlerClickCancel() {
      this.dialogVisible = false
    },
    handleShow(val) {
      fetchLogs({ id: this.childId }).then(res => {
        this.data = res.data.items
        this.dialogVisible = true
      })
    },
    handleClickSubmit() {
      console.log('提交')
      if (this.question) {
        sendToChild({ child_id: this.childId, title: this.question }).then(res => {
          this.data = res.data.items
          this.question = ''
        })
      }
    }
  }
}
</script>
