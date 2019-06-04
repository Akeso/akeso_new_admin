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
          <img :src="user.avatar?user.avatar:avatar" style="width: 100%;">
          <!--<img src="https://www.baidu.com/img/bd_logo1.png?where=super" style="width: 100%;">-->
        </el-col>
      </el-row>
      <el-row :gutter="20" style="margin-bottom: 20px;">
        <el-col :span="2" :offset="1">
          <span class="item-title">名称</span>
        </el-col>
        <el-col :span="18" class="item-value">
          <span>{{ user.name || '无' }}</span>
          <a class="item-operate" @click="handleClickEditName">修改</a>
        </el-col>
      </el-row>
      <!--<el-row :gutter="20" style="margin-bottom: 20px;">-->
      <!--<el-col :span="2" :offset="1">-->
      <!--<span class="item-title">所属机构</span>-->
      <!--</el-col>-->
      <!--<el-col :span="18" class="item-value">-->
      <!--<span>{{ user.organization || '无' }}</span>-->
      <!--<a v-if="baseType !== 'admin'" class="item-operate" @click="handleClickOrganization">设置</a>-->
      <!--</el-col>-->
      <!--</el-row>-->
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
          <span>{{ user.email || '无' }}</span>
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
          <span>{{ user.phone || '无' }}</span>
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
    <OrganizationSelect ref="organizationselect" @select-success="selectValue"/>
    <EditName ref="editName" @update-success="getData"/>
  </div>
</template>

<script>
import { showData, updateDoctorOrganization } from '@/api/doctors'
import { mapGetters } from 'vuex'
import OrganizationSelect from '@/components/OrganizationSelect'
import EditName from './components/edit_name'
import PdfCode from './components/pdf'
import QRcode from '@/components/QRCode'
import avatar from '@/assets/images/header.png'

export default {
  components: {
    OrganizationSelect, QRcode, EditName, PdfCode
  },
  data() {
    return {
      user: {
        id: undefined
      },
      exportVisible: false,
      avatar: avatar
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
    selectValue(val) {
      updateDoctorOrganization({ id: this.id, organization_id: val }).then(response => {
        this.user = response.data
      })
    },
    handleClickEditName() {
      this.$refs.editName.handleShow()
    },
    handleClickOrganization() {
      this.$refs.organizationselect.handleShow()
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
