<template>
  <div id="pdfDom" style="text-align: center;">
    <div class="container-doctor">
      <!--<div class="header">
        <img src="" alt="">
      </div>-->
      <div class="doctor">
        <div class="avatar">
          <img :src="user.avatar ? user.avatar : avatar" alt="" class="img">
        </div>
        <h1 class="title">{{ user.organizationTitle }}</h1>
        <div class="name">
          <span>{{ user.name }}</span>
        </div>
        <!--<p class="title-info">这里写擅长</p>-->
        <p class="info">{{ user.description }}</p>
      </div>
      <QRcode v-if="baseType !== 'admin'"/>
      <p class="sub-title">我是儿童视力健康的守门人</p>
      <p class="sub-title">请扫码绑定我成为您的家庭视光师</p>
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
import avatar from '@/assets/images/header.png'
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
          name: '医生名称',
          jobTitle: '视光师',
          workingYears: 0,
          description: '简介'
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
    width:400px;
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
  }
  .img{
    width:100px;
    height: 100px;
    border-radius: 50%;
    background: #fff;
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
  .c-blue{
    color: rgb(64, 158, 255);
  }
  .title-info{
    font-size: 16px;
    font-weight: 400;
    text-align: left;
  }
  .info{
    font-size: 16px;
    line-height: 26px;
    text-align: left;
    font-weight: normal;
  }
  .sub-title{
    padding-top: 0;
    margin-top: 0;
  }
</style>
