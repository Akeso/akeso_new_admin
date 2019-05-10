<template>
  <div id="pdfDom" style="text-align: center;">
    <div class="container-doctor">
      <div class="header">
        <img src="" alt="">
      </div>
      <div class="doctor">
        <h1 class="title">{{ user.organizationTitle }}</h1>
        <div class="name">
          <span>{{ user.name }}</span>
          <span class="c-color">{{ user.jobTitle }}</span>
        </div>
        <div class="doctor-title">
          <span class="c-blue">{{ user.workingYears }}年</span>
          <span>视光经验</span>
        </div>
        <p class="info">{{ user.description }}</p>
      </div>
      <QRcode v-if="baseType !== 'admin'"/>
      <p>我是儿童视力健康的守门人</p>
      <p>请扫码绑定我成为您的家庭视光师</p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import QRcode from '@/components/QRCode'
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
    width:500px;
    margin: 30px auto;
    padding: 30px 0;
  }
  .title{
    font-size: 28px;
    font-weight: 400
  }
  .header{
    width: 100%;
    height: 280px;
    background: url(../../../assets/images/bind_doctor_banner.png) no-repeat center;
    background-size: 100%;
  }
  .doctor{
    padding:10px 36px 50px;
    margin:-4px 2px 0;
    background:#fff;
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
  .info{
    font-size: 16px;
    line-height: 26px;
    text-align: left;
  }
</style>
