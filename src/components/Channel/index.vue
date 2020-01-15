<template>
  <!--<el-dropdown trigger="click" class="international" @command="handleSetLanguage">-->
  <div class="international">
    <router-link to="/channels/channels">
      <svg-icon class-name="international-icon" icon-class="message"/>
      <el-badge v-if="count != 0" is-dot class="item"/>
    </router-link>
  </div>
  <!--</el-dropdown>-->
</template>

<script>
import { fetchCount } from '@/api/channels'
export default {
  data() {
    return {
      count: 0
    }
  },
  computed: {
    language() {
      return this.$store.getters.language
    }
  },
  created() {
    if (this.$store.getters.baseType === 'admin') {
      fetchCount().then(res => {
        this.count = res.data.count
      })
    }
  },
  mounted() {
    this.initCable()
  },
  methods: {
    handleClick() {
      console.log('message')
    },
    initCable: function() {
      this.$cable.subscriptions.create({
        channel: 'NotificationChannel'
      }, {
        received(data) {
          console.log('receive data => ', data)
        }
      })
    }
  }
}
</script>

<style scoped>
  .international-icon {
    font-size: 20px;
    cursor: pointer;
    vertical-align: -5px!important;
  }
</style>

