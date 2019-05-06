<template>
  <div id="qrCode" class="qrcode-box">
    <div id="code"/>
    <canvas id="canvas"/>
  </div>
</template>
<style></style>
<script>
import QRCode from 'qrcode'
export default{
  components: {
    QRCode: QRCode
  },
  data() {
    return {
      msg: 'hello vue',
      codes: ''
    }
  },
  mounted() {
    this.useqrcode()
  },
  methods: {
    useqrcode() {
      // var canvas = document.getElementById('canvas')
      var canvas = document.querySelector('canvas')
      var origin = window.location.origin
      var href = origin + '/a/mobile/doctor?id=' + this.$store.state.user.id
      console.log('href => ', origin)
      QRCode.toCanvas(canvas, href, { version: 20 }, function(error) {
        if (error) console.error(error)
        // console.log('QRCode success!')
      })
    }
  }
}
</script>
<style scoped>
/*.qrcode-box {*/
  /*width: 400px !important;*/
  /*height: 400px !important;*/
  /*!*margin:rem(40) auto 0;*!*/
  /*.qrcode{*/
    /*width: 400px !important;*/
    /*height: 400px !important;*/
  /*}*/
/*}*/
</style>
