<template>
  <el-dialog :visible.sync="dialogVisible" :modal="true" :close-on-click-modal="false" title="聊天" width="60%">
    <div style="height: 300px;overflow-y: scroll; padding: 20px;background-color: rgba(196,196,196,0.23);">
      <el-row v-for="item in data" :style="{ textAlign: !item.doctorSend ? 'right' : 'left' }" :key="item.id" :gutter="20" class="chat-con">
        <!--<el-tag type="success">{{ item.doctorSend ? item.doctorName : item.childName }}</el-tag>
        <span>{{ item.doctorSend ? item.doctorName : item.childName }}</span>-->
        <!--<span>2019-05-24 13:21:11</span>
        <div>{{ item.title }}</div>-->
        <div :class="!item.doctorSend ? 'header-logr' : 'header-logl'"> <img :src="avatar" alt=""></div>
        <p class="chat-title">{{ !item.doctorSend ? item.doctorName : item.childName }}</p>
        <div class="chat-time">{{ item.createdAt }}</div>
        <div :class="!item.doctorSend ? 'chat-info' : 'chat-infol'">{{ item.title }}</div>
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
import avatar from '@/assets/images/header.png'
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
      data: [],
      avatar: avatar
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
<style scoped>
.chat-con{
  padding: 0 50px;
  position: relative;
}
.header-logl,.header-logr{
  width:40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;
  background: #fff;
}
.header-logl img,.header-logr img{
  width:100%;
  height: 100%;
}
.header-logl{
  position: absolute;
  left:0px;
  top: 10px;
}
.header-logr{
  position: absolute;
  right:0px;
  top: 10px;
}
.chat-title{
  margin: 10px 0 6px;
}
.chat-time{
  font-size:12px;
  padding-bottom: 8px;
}
.chat-info,.chat-infol{
  padding: 6px 10px;
  box-sizing: border-box;
  border-radius: 6px;
  max-width: 86%;
  line-height: 20px;
  display: inline-block;
}
.chat-info{
  background: #3aa7ff;
  color:#fff;
  text-align: left;
}
.chat-infol{
  background:#fff;
}
</style>
