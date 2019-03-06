<template>
  <div class="mixin-components-container">
    <Information :user-id="userId"/>
  </div>
</template>

<script>
import Information from './components/information'
export default {
  components: {
    Information
  },
  data() {
    return {
      userId: this.$route.params.id,
      avatarUrl: 'http://www.pptbz.com/pptpic/UploadFiles_6909/201203/2012031220134655.jpg',
      emptyText: '',
      user: {}
    }
  },
  mounted() {
    console.log('show mounted.')
  },
  created() {
    console.log('show created. params' + this.$route.params.id)
  },
  methods: {
  }
}
</script>

<style scoped>
  .mixin-components-container {
    background-color: #f0f2f5;
    padding: 30px;
    min-height: calc(100vh - 84px);
  }
</style>
