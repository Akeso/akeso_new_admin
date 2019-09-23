<template>
  <div>
    <el-dialog :visible.sync="dialogVisible" :modal="true" :close-on-click-modal="false" title="聊天" width="60%">
      <div style="height: 300px;overflow-y: scroll; padding: 20px;background-color: rgba(196,196,196,0.23);">
        <el-row v-for="item in data" :style="{ textAlign: item.source === 'merchant' ? 'right' : 'left' }" :key="item.id" :gutter="20" class="chat-con">
          <!--<el-tag type="success">{{ item.source === 'merchant' ? merchantName : childName }}</el-tag>-->
          <div :class="item.source === 'merchant' ? 'header-logr' : 'header-logl'"> <img :src="avatar" alt=""></div>
          <p class="chat-title">{{ item.source === 'merchant' ? merchantName : childName }}  <span class="chat-time">{{ item.createdAt }}</span></p>
          <div :class="item.source === 'merchant' ? 'chat-info' : 'chat-infol'">
            <span>{{ item.content }}</span>
            <img :src="item.thumbUrl" alt="">
          </div>
        </el-row>
      </div>
      <el-button type="warning" size="small" round style="margin-top: 10px;" @click="handleTemplateShow">随访模板</el-button>
      <el-input v-model="content" :autosize="{ minRows: 4, maxRows: 8}" type="textarea" style="width: 100%;margin-top: 10px;"/>
      <div slot="footer" class="dialog-footer">
        <el-button @click="handlerClickCancel">取消</el-button>
        <el-button type="primary" @click="handleClickSubmit">发送</el-button>
      </div>
    </el-dialog>
    <el-dialog :visible.sync="dialogTemplateVisible" title="模板消息" width="50%">
      <div>
        <h3>亲爱的家长，娃的眼睛该复查啦！</h3>
        <span>请您携带病历等资料，在一周内带孩子去预约复查。</span>
        <h3>亲爱的家长，该回来同步数据啦！</h3>
        <span>您已经很久没给孩子同步数据了~建议您三天同步一次数据，即可领取个性定制的近视防控方案。</span>

        <h3>根据大数据分析预测，近期孩子的近视风险较高！</h3>
        <span>近期监测到孩子用眼行为较差，建议及时预约复查，以便尽早遏制近视风险。</span>

        <h3>根据大数据分析预测，近期孩子有近视加深的可能！</h3>
        <span>为避免孩子近视进一步加深，请根据用眼报告的改善意见指导孩子，为了孩子的光明未来请加油！</span>

        <h3>根据大数据监测分析，近期孩子用眼行为很棒！</h3>
        <span>近期孩子日常用眼行为评分为优，近视加深风险偏低。良好的习惯受用一生，请给孩子一个爱的鼓励！</span>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogTemplateVisible = false">确    定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
import { fetchLogs, createItem } from '@/api/channel_logs'
import avatar from '@/assets/images/header.png'
export default {
  data() {
    return {
      dialogTemplateVisible: false,
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
    handleTemplateShow() {
      this.dialogTemplateVisible = true
    },
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

