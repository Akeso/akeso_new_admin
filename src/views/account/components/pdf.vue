<template>
  <div id="pdfDom" style="text-align: center;">
    <div class="container-doctor">
      <div class="header">
        <img src="" alt="">
      </div>
      <div class="doctor">
        <h1 class="title">北京艾索诺瞳健康视力服务中心</h1>
        <div class="name">
          <span>医生名字</span>
          <span class="c-color">视光师</span>
        </div>
        <div class="doctor-title">
          <span class="c-blue">8年</span>
          <span>视光经验</span>
        </div>
        <p class="info">毕业于四川大学华西临床医学院眼视光 专业，曾工作于华西医院、中国人民解 放军医院海南分院、重医附属大学城医 院眼科，主要从事儿童成人医学验光配 镜、近视防控及双眼视功能检查训练。</p>
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
    padding:10px 36px;
    margin:-2px 2px 0;
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
