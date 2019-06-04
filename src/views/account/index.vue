<template>
  <div class="app-container">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>账户信息</span>
      </div>

      <el-row style="margin: 10px;">
        <el-button v-if="exportVisible" class="filter-item" type="primary" icon="el-icon-download" @click="getPdf()">导出医生二维码</el-button>
      </el-row>

      <el-row type="flex" justify="space-around" style="margin-bottom: 10px;">
        <el-col :span="6">
          <img :src="user.avatar?user.avatar:avatar" style="width: 100%; height:100%">
          <!--<img src="https://www.baidu.com/img/bd_logo1.png?where=super" style="width: 100%;">-->
        </el-col>
      </el-row>
      <el-row :gutter="20" style="margin-bottom: 20px;">
        <el-col :span="2" :offset="1">
          <span class="item-title">名称</span>
        </el-col>
        <el-col :span="18" class="item-value">
          <el-input v-model="user.name" :disabled="nameDisable" style="width: 30%;"/>
          <a class="item-operate" @click="editSumbit('name')">{{ nameDisable == true ? '修改' : '确认' }}</a>
        </el-col>
      </el-row>
      <el-row :gutter="20" style="margin-bottom: 20px;">
        <el-col :span="2" :offset="1">
          <span class="item-title">负责人</span>
        </el-col>
        <el-col :span="18" class="item-value">
          <el-input v-model="user.principal" :disabled="principalDisable" style="width: 30%;"/>
          <a class="item-operate" @click="editSumbit('principal')">{{ principalDisable == true ? '修改' : '确认' }}</a>
        </el-col>
      </el-row>
      <el-row :gutter="20" style="margin-bottom: 20px;">
        <el-col :span="2" :offset="1">
          <span class="item-title">创建日期</span>
        </el-col>
        <el-col :span="18" class="item-value">
          <span>{{ user.createdAt }}</span>
        </el-col>
      </el-row>
      <el-row :gutter="20" style="margin-bottom: 20px;">
        <el-col :span="2" :offset="1">
          <span class="item-title">邮箱</span>
        </el-col>
        <el-col :span="18" class="item-value">
          <el-input v-model="user.email" :disabled="emailDisable" style="width: 30%;"/>
          <a class="item-operate" @click="editSumbit('email')">{{ emailDisable == true ? '修改' : '确认' }}</a>
        </el-col>
      </el-row>
      <el-row :gutter="20" style="margin-bottom: 20px;">
        <el-col :span="2" :offset="1">
          <span class="item-title">地址</span>
        </el-col>
        <el-col :span="18" class="item-value">
          <span>{{ user.locationStreet || '无' }}</span>
        </el-col>
      </el-row>
      <el-row :gutter="20" style="margin-bottom: 20px;">
        <el-col :span="2" :offset="1">
          <span class="item-title">联系方式</span>
        </el-col>
        <el-col :span="18" class="item-value">
          <el-input v-model="user.phone" :disabled="phoneDisable" style="width: 30%;"/>
          <a class="item-operate" @click="editSumbit('phone')">{{ phoneDisable == true ? '修改' : '确认' }}</a>
        </el-col>
      </el-row>
      <el-row :gutter="20" style="margin-bottom: 20px;">
        <el-col :span="2" :offset="1">
          <span class="item-title">简介</span>
        </el-col>
        <el-col :span="18" class="item-value">
          <span>{{ user.description || '无' }}</span>
        </el-col>
      </el-row>
      <div class="code-box">
        <PdfCode :user="user"/>
      </div>
    </el-card>
  </div>
</template>

<script>
import { updateData } from '@/api/accounts'
import { showData } from '@/api/doctors'
import { mapGetters } from 'vuex'
import PdfCode from './components/pdf'
import QRcode from '@/components/QRCode'
import avatar from '@/assets/images/header.png'

export default {
  components: {
    QRcode, PdfCode
  },
  data() {
    return {
      user: {
        id: undefined,
        name: undefined,
        principal: undefined,
        email: undefined,
        phone: undefined
      },
      exportVisible: false,
      avatar: avatar,
      nameDisable: true,
      principalDisable: true,
      emailDisable: true,
      phoneDisable: true
    }
  },
  computed: {
    ...mapGetters([
      'id',
      'baseType'
    ]),
    htmlTitle: function() {
      return '医生二维码'
    }
  },
  created() {
    this.getData()
  },
  methods: {
    editSumbit(field) {
      if (field === 'name') {
        this.nameDisable = !this.nameDisable
      } else if (field === 'principal') {
        this.principalDisable = !this.principalDisable
      } else if (field === 'email') {
        this.emailDisable = !this.emailDisable
      } else if (field === 'phone') {
        this.phoneDisable = !this.phoneDisable
      }
      if (this.nameDisable && this.principalDisable && this.emailDisable && this.phoneDisable) {
        updateData(this.user).then(response => {
          this.$store.commit('updateUserInfo', response.data)
          this.user = response.data
        })
      }
    },
    getData() {
      showData({ id: this.id }).then(response => {
        this.exportVisible = true
        this.user = response.data
        console.log(this.user)
      })
    }
  }
}
</script>

<style scoped>
  .item-title {
    font-size: 14px;
    color: #9a9a9a;
  }
  .item-value {
    font-size: 14px;
    color: #353535;
    padding-bottom: 10px;
    border-bottom: 1px solid #e4e8eb;
    text-align: justify;
  }
  .item-operate {
    font-size: 14px;
    color: #576b95;
    float: right;
  }
  #pdfDom >>> #canvas {
    width: 240px !important;
    height: 240px !important;
  }
  .code-box{
    height: 1px;
    overflow: hidden;
  }
</style>
