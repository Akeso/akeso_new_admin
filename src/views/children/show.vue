<template>
  <div class="mixin-components-container">
    <Information :child-id="userId"/>
    <HealthData :user-id="userId" :default-tab-name="defaultTabName"/>
  </div>
</template>

<script>
import Information from './components/information'
import HealthData from './components/health_data'
export default {
  components: {
    Information, HealthData
  },
  data() {
    return {
      defaultTabName: 'first',
      userId: this.$route.params.id,
      avatarUrl: 'http://www.pptbz.com/pptpic/UploadFiles_6909/201203/2012031220134655.jpg',
      emptyText: '',
      user: {}
    }
  },
  mounted() {
  },
  created() {
    if (this.$route.query) {
      this.defaultTabName = this.$route.query.tabName
    }
  },
  methods: {
  }
}
</script>

<style scoped>
  .mixin-components-container {
    background-color: #f0f2f5;
    /*padding: 30px;*/
    min-height: calc(100vh - 84px);
  }
</style>
