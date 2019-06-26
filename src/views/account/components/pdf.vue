<template>
  <div id="pdfDom" style="text-align: center;">
    <div class="container-doctor">
      <div class="doctor">
        <div class="avatar">
          <div class="img-avatar">
            <img :src="user.avatarUrl ? user.avatarUrl : avatar" alt="" class="img">
          </div>
        </div>
        <div class="name">
          <span>{{ user.name }}</span>
        </div>
        <div v-if="user.serviceNames !== undefined && user.serviceNames.length > 0 ? 1 : 0" class="title-info">
          <span class="tit-name">业务擅长：</span><span v-for="(item, i) in user.serviceNames" :key="i">{{ item }}；</span>
        </div>
        <p class="info">{{ user.description }}</p>
      </div>
      <QRcode v-if="baseType !== 'admin'"/>
      <p class="sub-title">我是儿童视力健康的守门人</p>
      <p class="sub-title">请扫码绑定我成为您的{{ baseType === 'doctor' ? '家庭视光师' : '眼健康管理中心' }}</p>
    </div>
  </div>
</template>
<!--<span class="c-color">{{ user.jobTitle }}</span>-->
<!--<div class="doctor-title">-->
<!--<span class="c-blue">{{ user.workingYears }}年</span>-->
<!--<span>视光经验</span>-->
<!--</div>-->
<script>
import { mapGetters } from 'vuex'
import QRcode from '@/components/QRCode'
import avatar from '@/assets/images/header-avatar.png'
export default {
  name: 'PdfCode',
  components: {
    QRcode
  },
  props: {
    user: {
      type: Object,
      default: function() {
        return {
          id: undefined,
          name: '医生名称',
          avatarUrl: undefined,
          principal: undefined,
          email: undefined,
          phone: undefined,
          address: undefined,
          jobTitle: '视光师',
          workingYears: 0,
          description: '简介',
          serviceNames: Array
        }
      }
    }
  },
  data() {
    return {
      avatar: avatar
    }
  },
  computed: {
    ...mapGetters([
      'id',
      'baseType'
    ])
  }
}
</script>

<style scoped>
  .container-doctor{
    width:460px;
    margin: 30px auto;
    padding: 30px 0;
  }
  .title{
    font-size: 28px;
    font-weight: 400
  }
  .header{
    /*width: 100%;
    height: 280px;
    background: url(../../../assets/images/bind_doctor_banner.png) no-repeat center;
    background-size: 100%;*/
  }
  .doctor{
    background: #27ADFF;
    padding: 40px 20px 50px;
    color:#fff;
  }
  .avatar{
    text-align: center;
    height: 100px;
    margin-bottom: 16px;
  }
  .img-avatar{
    display: inline-block;
  }
  .img{
    width:100px;
    height: 100px;
    border-radius: 50%;
  }
  .name{
    font-size: 22px;
  }
  .c-color{
    color: #666;
  }
  .doctor-title{
    margin:14px 0;
    font-size: 21px;
  }
  .tit-name{
    font-weight: 400;
    color: #f8c555;
  }
  .c-blue{
    color: rgb(64, 158, 255);
  }
  .title-info{
    font-size: 20px;
    font-weight: 400;
    text-align: left;
    padding-top: 10px;
  }
  .title-info span{
    line-height: 26px;
  }
  .info{
    font-size: 20px;
    line-height: 26px;
    text-align: left;
    font-weight: normal;
  }
  .sub-title{
    padding-top: 0;
    margin-top: 0;
  }
</style>
