<template>
  <el-dialog :visible.sync="dialogVisible" :modal="true" :close-on-click-modal="false" title="聊天" width="60%">
    <div style="height: 300px;overflow-y: scroll; padding: 20px;background-color: rgba(196,196,196,0.23);">
      <el-row v-for="item in data" :style="{ textAlign: item.source === 'merchant' ? 'right' : 'left' }" :key="item.id" :gutter="20" class="chat-con">
        <!--<el-tag type="success">{{ item.source === 'merchant' ? merchantName : childName }}</el-tag>-->
        <div :class="item.source === 'merchant' ? 'header-logr' : 'header-logl'"> <img :src="avatar" alt=""></div>
        <p class="chat-title">{{ item.source === 'merchant' ? merchantName : childName }}</p>
        <div class="chat-time">{{ item.createdAt }}</div>
        <div :class="item.source === 'merchant' ? 'chat-info' : 'chat-infol'">
          <span>
            {{ item.content }}
          </span>
          <img :src="item.imageUrl" alt="">
        </div>
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
import avatar from '@/assets/images/header.png'
export default {
  data() {
    return {
      childId: undefined,
      dialogVisible: false,
      formLabelWidth: '100px',
      content: '',
      data: [],
      merchantName: '',
      childName: '',
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
      this.childId = val
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

