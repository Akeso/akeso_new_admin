<template>
  <el-dialog :visible.sync="dialogVisible" :modal="true" :close-on-click-modal="false" title="聊天" width="60%">
    <el-input v-model="content" :autosize="{ minRows: 6, maxRows: 10}" type="textarea"/>
    <div slot="footer" class="dialog-footer">
      <el-button @click="handlerClickCancel">取消</el-button>
      <el-button type="primary" @click="handleClickSubmit">发送</el-button>
    </div>
  </el-dialog>
</template>
<script>
import { createGroup } from '@/api/channel_logs'
export default {
  data() {
    return {
      dialogVisible: false,
      formLabelWidth: '100px',
      content: '',
      childIds: []
    }
  },
  created() {
  },
  methods: {
    handlerClickCancel() {
      this.content = ''
      this.dialogVisible = false
    },
    handleShow(val) {
      this.childIds = val
      this.dialogVisible = true
      // fetchLogs({ child_ids: this.childIds }).then(res => {
      //   this.merchantName = res.data.merchantName
      //   this.childName = res.data.childName
      //   this.data = res.data.items
      //   this.dialogVisible = true
      // })
    },
    handleClickSubmit() {
      if (this.content) {
        createGroup({ child_ids: this.childIds, content: this.content }).then(res => {
          this.content = ''
          this.dialogVisible = false
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

